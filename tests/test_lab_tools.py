"""Local contract tests only. No ISC connection or real credentials."""
import importlib.util
import json
from pathlib import Path
import socket
import subprocess
import sys
import tempfile
import time
import unittest
from urllib.error import HTTPError
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('request_report', ROOT / 'tools/request_report.py')
report = importlib.util.module_from_spec(spec)
spec.loader.exec_module(report)


subscriber_spec = importlib.util.spec_from_file_location('lab_subscriber', ROOT / 'tools/lab_subscriber.py')
subscriber = importlib.util.module_from_spec(subscriber_spec)
subscriber_spec.loader.exec_module(subscriber)


class EventEvidenceTests(unittest.TestCase):
    def test_decision_payload_records_item_decision_without_sensitive_context(self):
        payload = {'accessRequestId': 'request', 'requestedFor': {'id': 'recipient', 'name': 'private'},
                   'requestedBy': {'id': 'requester'}, '_metadata': {'secret': 'secret'},
                   'requestedItemsStatus': [{'id': 'item', 'operation': 'Add', 'comment': 'private',
                       'approvalInfo': [{'approvalDecision': 'DENIED', 'approvalComment': 'private',
                                         'approver': {'id': 'reviewer', 'name': 'private'}}]}]}
        result = subscriber.summarize_event('/decision', payload)
        self.assertEqual(result['requestedForId'], 'recipient')
        self.assertEqual(result['items'][0]['id'], 'item')
        self.assertEqual(result['items'][0]['decisions'], [{'decision': 'DENIED', 'approverId': 'reviewer'}])
        self.assertNotIn('private', json.dumps(result))
        self.assertNotIn('secret', json.dumps(result))

    def test_submitted_payload_keeps_item_ids(self):
        result = subscriber.summarize_event('/submitted', {'requestedItems': [{'id': 'submitted-item'}]})
        self.assertEqual(result['items'][0]['id'], 'submitted-item')


class ReportTests(unittest.TestCase):
    def test_full_final_page_requests_next_page(self):
        calls = []
        def fetch(offset, limit):
            calls.append(offset)
            return [offset, offset + 1] if offset < 4 else []
        self.assertEqual(report.collect(fetch, 2), [0, 1, 2, 3])
        self.assertEqual(calls, [0, 2, 4])

    def test_error_envelope_is_not_a_page(self):
        with self.assertRaises(ValueError):
            report.collect(lambda *_: {'error': 'forbidden'})

    def test_cli_fixture_and_no_overwrite(self):
        with tempfile.TemporaryDirectory() as folder:
            output = Path(folder) / 'result.json'
            command = [sys.executable, str(ROOT / 'tools/request_report.py'),
                       '--fixture', str(ROOT / 'fixtures/request-status-pages.json'),
                       '--output', str(output)]
            subprocess.run(command, check=True, capture_output=True, timeout=10)
            self.assertEqual(len(json.loads(output.read_text())), 3)
            original = output.read_bytes()
            again = subprocess.run(command, capture_output=True, timeout=10)
            self.assertNotEqual(again.returncode, 0)
            self.assertEqual(output.read_bytes(), original)


class SubscriberTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.folder = tempfile.TemporaryDirectory()
        cls.mode_file = Path(cls.folder.name) / 'mode.json'
        cls.pending = Path(cls.folder.name) / 'callbacks'
        cls.pending.mkdir()
        cls.base_mode = {'submitted': 'approve', 'approver': 'fixture.approver',
                         'dynamic': 'reviewer', 'reviewer': {'id': 'fixture-reviewer', 'type': 'IDENTITY'}}
        cls.mode_file.write_text(json.dumps(cls.base_mode))
        with socket.socket() as sock:
            sock.bind(('127.0.0.1', 0))
            cls.port = sock.getsockname()[1]
        # Patch interactive prompts only in the test child; Windows getpass reads the console.
        bootstrap = "import builtins,getpass,runpy,sys; builtins.input=lambda _: 'fixture'; getpass.getpass=lambda _: 'password'; sys.argv=sys.argv[1:]; runpy.run_path(sys.argv[0],run_name='__main__')"
        cls.proc = subprocess.Popen([sys.executable, '-c', bootstrap, str(ROOT / 'tools/lab_subscriber.py'),
                                     '--mode-file', str(cls.mode_file), '--port', str(cls.port),
                                     '--pending-dir', str(cls.pending)], stdin=subprocess.PIPE,
                                    stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True,
                                    creationflags=getattr(subprocess, 'CREATE_NO_WINDOW', 0))
        deadline = time.monotonic() + 8
        while time.monotonic() < deadline:
            try:
                with socket.create_connection(('127.0.0.1', cls.port), timeout=.2):
                    return
            except OSError:
                time.sleep(.05)
        cls.proc.terminate()
        _, errors = cls.proc.communicate(timeout=5)
        cls.folder.cleanup()
        raise RuntimeError('Local subscriber did not start: ' + errors)

    @classmethod
    def tearDownClass(cls):
        cls.proc.terminate()
        cls.proc.communicate(timeout=5)
        cls.folder.cleanup()

    def setUp(self):
        self.mode_file.write_text(json.dumps(self.base_mode))

    def post(self, route='/submitted', payload=None, authorized=True):
        headers = {'Content-Type': 'application/json'}
        if authorized:
            headers['Authorization'] = 'Basic Zml4dHVyZTpwYXNzd29yZA=='
        data = payload if payload is not None else {'accessRequestId': 'synthetic', 'requestedItems': []}
        req = Request(f'http://127.0.0.1:{self.port}{route}',
                      data=json.dumps(data).encode(), headers=headers)
        try:
            with urlopen(req, timeout=3) as response:
                return response.status, json.load(response)
        except HTTPError as error:
            return error.code, json.load(error)

    def test_unauthenticated_rejected(self):
        self.assertEqual(self.post(authorized=False)[0], 401)

    def test_approve_deny_and_invalid_contract(self):
        self.assertTrue(self.post()[1]['approved'])
        mode = dict(self.base_mode, submitted='deny')
        self.mode_file.write_text(json.dumps(mode))
        self.assertFalse(self.post()[1]['approved'])
        mode['submitted'] = 'invalid'
        self.mode_file.write_text(json.dumps(mode))
        self.assertNotIn('approved', self.post()[1])

    def test_bad_mode_does_not_approve(self):
        self.mode_file.write_text(json.dumps(dict(self.base_mode, submitted='typo')))
        self.assertEqual(self.post()[0], 400)

    def test_dynamic_and_notification(self):
        self.assertEqual(self.post('/dynamic')[1]['id'], 'fixture-reviewer')
        self.assertEqual(self.post('/decision'), (200, {}))
        self.assertEqual(self.post('/unknown')[0], 404)

    def test_async_requires_metadata_then_saves_private_callback(self):
        self.mode_file.write_text(json.dumps(dict(self.base_mode, **{'async': True})))
        self.assertEqual(self.post()[0], 400)
        self.assertEqual(self.post('/dynamic')[0], 400)
        body = {'accessRequestId': 'async-fixture', '_metadata':
                {'callbackURL': 'https://example.invalid/complete', 'secret': 'synthetic-only'}}
        self.assertEqual(self.post(payload=body), (200, {}))
        files = list(self.pending.glob('*.json'))
        self.assertEqual(len(files), 1)
        saved = json.loads(files[0].read_text())
        self.assertEqual(saved['accessRequestId'], 'async-fixture')
        self.assertEqual(saved['secret'], 'synthetic-only')


if __name__ == '__main__':
    unittest.main()
