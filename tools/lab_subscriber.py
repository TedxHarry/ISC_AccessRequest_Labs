"""Synchronous training subscriber. Put behind a controlled HTTPS proxy."""
import argparse
import base64
import getpass
import hmac
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
from pathlib import Path
import time
import uuid


def decision(route, mode):
    if route == '/submitted':
        selected = mode.get('submitted', 'approve')
        if selected not in ('approve', 'deny', 'invalid', 'timeout'):
            raise ValueError('Unknown submitted mode')
        if selected == 'timeout':
            time.sleep(12)
        if selected == 'invalid':
            return {'invalidLabResponse': True}
        return {'approved': selected != 'deny', 'comment': 'Acme subscriber lab: ' + selected,
                'approver': mode['approver']}
    if route == '/dynamic':
        if mode.get('dynamic', 'reviewer') not in ('reviewer', 'none'):
            raise ValueError('Unknown dynamic mode')
        return {'id': '', 'name': '', 'type': ''} if mode.get('dynamic') == 'none' else mode['reviewer']
    if route == '/decision':
        return {}
    raise ValueError('Unknown route')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--mode-file', required=True)
    parser.add_argument('--port', type=int, default=8787)
    parser.add_argument('--pending-dir', help='Private existing directory for asynchronous callback metadata')
    args = parser.parse_args()
    username = input('Basic authentication username: ')
    password = getpass.getpass('Basic authentication password: ')
    expected = 'Basic ' + base64.b64encode((username + ':' + password).encode()).decode()

    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *_):
            pass

        def send_json(self, status, payload):
            body = json.dumps(payload).encode()
            self.send_response(status)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            try:
                self.wfile.write(body)
            except (BrokenPipeError, ConnectionResetError):
                pass

        def do_POST(self):
            if not hmac.compare_digest(self.headers.get('Authorization', ''), expected):
                self.send_json(401, {'error': 'Authentication required'})
                return
            if self.path not in ('/submitted', '/dynamic', '/decision'):
                self.send_json(404, {'error': 'Unknown route'})
                return
            try:
                size = int(self.headers.get('Content-Length', '0'))
                if size < 1 or size > 1048576:
                    self.send_json(413, {'error': 'Expected a JSON body below 1 MiB'})
                    return
                payload = json.loads(self.rfile.read(size))
                mode = json.loads(Path(args.mode_file).read_text(encoding='utf-8'))
                if mode.get('async') and self.path != '/decision':
                    if not args.pending_dir:
                        raise ValueError('Asynchronous mode requires a private pending directory')
                    metadata = payload.get('_metadata', {})
                    if not metadata.get('callbackURL') or not metadata.get('secret'):
                        raise ValueError('Asynchronous invocation metadata is missing')
                    pending = Path(args.pending_dir) / (str(uuid.uuid4()) + '.json')
                    with pending.open('x', encoding='utf-8') as handle:
                        json.dump({'accessRequestId': payload.get('accessRequestId'),
                                   'callbackURL': metadata['callbackURL'],
                                   'secret': metadata['secret']}, handle, indent=2)
                    print(json.dumps({'accessRequestId': payload.get('accessRequestId'),
                                      'acknowledged': True, 'privateFile': str(pending)}), flush=True)
                    self.send_json(200, {})
                    return
                output = decision(self.path, mode)
                print(json.dumps({'time': time.time(), 'route': self.path,
                                  'accessRequestId': payload.get('accessRequestId'),
                                  'itemIds': [x.get('id') for x in payload.get('requestedItems', [])],
                                  'response': output}), flush=True)
                self.send_json(200, output)
            except (ValueError, KeyError, OSError, TypeError, AttributeError):
                self.send_json(400, {'error': 'Check the private mode file and JSON input'})

    server = ThreadingHTTPServer(('127.0.0.1', args.port), Handler)
    server.daemon_threads = True
    print(f'Listening on localhost:{args.port}; configure HTTPS forwarding before subscribing.')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == '__main__':
    main()
