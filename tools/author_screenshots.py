"""Inspect or remove temporary screenshot notes without changing images or steps."""
from pathlib import Path
import argparse
import re

START = re.compile(r'^[ \t]*<!-- AUTHOR_SCREENSHOT_START: ([^\n]+?) -->[ \t]*\n', re.M)
END = re.compile(r'^[ \t]*<!-- AUTHOR_SCREENSHOT_END: ([^\n]+?) -->[ \t]*(?:\n|$)', re.M)
BLOCK = re.compile(r'^[ \t]*<!-- AUTHOR_SCREENSHOT_START: ([^\n]+?) -->[ \t]*\n.*?^[ \t]*<!-- AUTHOR_SCREENSHOT_END: \1 -->[ \t]*(?:\n|$)', re.M | re.S)

def strip_notes(text):
    starts = START.findall(text)
    ends = END.findall(text)
    matches = list(BLOCK.finditer(text))
    if starts != ends or len(matches) != len(starts):
        raise ValueError('Unmatched or nested screenshot markers; no file was changed')
    return BLOCK.sub('', text), len(matches)

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--remove', action='store_true', help='Preview removal of temporary author blocks')
    parser.add_argument('--write', action='store_true', help='Apply removal; requires --remove')
    args = parser.parse_args()
    if args.write and not args.remove:
        parser.error('--write requires --remove')
    root = Path(__file__).resolve().parents[1]
    pending = []
    for directory in ['labs', 'Labs_Happypath', 'capstones']:
        for file in sorted((root / directory).rglob('README.md')):
            text = file.read_text(encoding='utf-8')
            clean, count = strip_notes(text)
            if count:
                pending.append((file, clean, count))
    # Validate every file before any mutation.
    total = sum(count for _, _, count in pending)
    if args.write:
        for file, clean, _ in pending:
            file.write_text(clean, encoding='utf-8')
    action = 'Removed' if args.write else 'Would remove' if args.remove else 'Found'
    print(f'{action} {total} screenshot notes in {len(pending)} walkthroughs.')
    if args.remove and not args.write:
        print('Preview only. Add --write to remove the marked notes. Images, captions and other text are preserved.')

if __name__ == '__main__':
    main()
