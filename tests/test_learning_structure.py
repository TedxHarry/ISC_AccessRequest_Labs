from pathlib import Path
import re
import unittest

ROOT = Path(__file__).resolve().parents[1]


class LearningStructureTests(unittest.TestCase):
    def test_single_guided_sequence_and_separate_practice(self):
        labs = sorted((ROOT / 'guided-labs').glob('AR-*/README.md'))
        self.assertEqual(len(labs), 90)
        self.assertEqual(len(list((ROOT / 'guided-labs/capstones').glob('CAP-*/README.md'))), 3)
        trouble = '\n'.join(p.read_text(encoding='utf-8') for p in (ROOT / 'troubleshooting').glob('M*.md'))
        practice = '\n'.join(p.read_text(encoding='utf-8') for p in (ROOT / 'try-it-yourself').glob('M*.md'))
        for lab in labs:
            text = lab.read_text(encoding='utf-8')
            self.assertNotRegex(text, r'^#{2,4} (?:Try it yourself|Engineering practice|If the result differs|If a check does not match|Explain the result)', lab.parent.name)
            self.assertIn(f'id="{lab.parent.name.lower()}"', trouble)
            self.assertIn(f'id="{lab.parent.name.lower()}"', practice)
            self.assertIn('## Finish', text)
            self.assertIn('AUTHOR_SCREENSHOT_START', text)

    def test_course_entry_points_do_not_offer_competing_paths(self):
        for name in ['README.md', 'START-HERE.md', '_sidebar.md', 'guided-labs/README.md']:
            text = (ROOT / name).read_text(encoding='utf-8')
            self.assertNotRegex(text, r'(?i)happy path|engineer path|choose.*(?:beginner|engineering).*path', name)
        sidebar = (ROOT / '_sidebar.md').read_text(encoding='utf-8')
        self.assertEqual(len(re.findall(r'\]\(/guided-labs/AR-\d+/README.md\)', sidebar)), 90)
        self.assertIn('TROUBLESHOOTING PRACTICE', sidebar)
        self.assertIn('TRY IT YOURSELF', sidebar)

    def test_guided_labs_do_not_require_journal_or_optional_assessment(self):
        for file in (ROOT / 'guided-labs').glob('AR-*/README.md'):
            text = file.read_text(encoding='utf-8')
            self.assertNotRegex(text, r'(?i)Create a private \*\*C\d+[^\n]*folder|independent check and both explanations are recorded|EVIDENCE\.md', str(file))


if __name__ == '__main__':
    unittest.main()
