"""Read access-request status for one identity; never mutate tenant data."""
import argparse
import getpass
import json
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import urlencode, urlparse
from urllib.request import Request, urlopen


def collect(fetch_page, limit=50):
    result = []
    offset = 0
    while True:
        page = fetch_page(offset, limit)
        if not isinstance(page, list):
            raise ValueError('Expected a JSON array; inspect the endpoint version and response.')
        result.extend(page)
        if len(page) < limit:
            return result
        offset += limit


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base')
    parser.add_argument('--recipient')
    parser.add_argument('--output', required=True)
    parser.add_argument('--fixture')
    args = parser.parse_args()
    if args.fixture:
        fixture = json.loads(Path(args.fixture).read_text(encoding='utf-8'))
        pages = fixture['pages']
        def fetch(offset, limit):
            return pages[offset // limit] if offset // limit < len(pages) else []
        records = collect(fetch, fixture['limit'])
    else:
        if not args.base or not args.recipient:
            parser.error('--base and --recipient are required for a live read')
        parsed = urlparse(args.base)
        if parsed.scheme != 'https' or not parsed.hostname or parsed.path not in ('', '/') or parsed.query or parsed.fragment or parsed.username:
            parser.error('--base must be an HTTPS API origin without a path or credentials')
        token = getpass.getpass('Access token (hidden): ')
        def fetch(offset, limit):
            params = urlencode({'requested-for': args.recipient, 'limit': limit, 'offset': offset})
            req = Request(args.base.rstrip('/') + '/v3/access-request-status?' + params,
                          headers={'Authorization': 'Bearer ' + token, 'Accept': 'application/json'})
            try:
                with urlopen(req, timeout=30) as response:
                    return json.load(response)
            except HTTPError as exc:
                retry = exc.headers.get('Retry-After', 'not supplied')
                raise RuntimeError(f'HTTP {exc.code}; Retry-After: {retry}. No automatic retry was sent.') from None
        records = collect(fetch)
    output = Path(args.output)
    with output.open('x', encoding='utf-8') as handle:
        json.dump(records, handle, indent=2)
    print(f'Saved {len(records)} records to {output}')


if __name__ == '__main__':
    main()
