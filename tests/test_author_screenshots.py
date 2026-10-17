import importlib.util
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('author_screenshots', ROOT / 'tools/author_screenshots.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

class AuthorScreenshotTests(unittest.TestCase):
    def test_removal_preserves_steps_images_and_captions(self):
        before = '2. Inspect the saved policy.\n\n![Saved policy](images/policy.png)\n\nThe owner is Priya.\n\n'
        block = '   <!-- AUTHOR_SCREENSHOT_START: AR-010-01 -->\n\n   > **Author: Capture screenshot**\n   > **Filename:** `AR-010-01.png`\n\n   <!-- AUTHOR_SCREENSHOT_END: AR-010-01 -->\n'
        after = '\n3. Switch to Lucas.\n'
        clean, count = module.strip_notes(before + block + after)
        self.assertEqual(clean, before + after)
        self.assertEqual(count, 1)
        self.assertEqual(module.strip_notes(clean), (clean, 0))

    def test_mismatched_markers_are_rejected(self):
        with self.assertRaises(ValueError):
            module.strip_notes('<!-- AUTHOR_SCREENSHOT_START: one -->\ntext\n<!-- AUTHOR_SCREENSHOT_END: two -->\n')

    def test_every_walkthrough_has_removable_notes(self):
        files = [*ROOT.glob('guided-labs/M*/AR-*/README.md'), *ROOT.glob('guided-labs/capstones/CAP-*/README.md')]
        self.assertEqual(len(files), 93)
        for file in files:
            text = file.read_text(encoding='utf-8')
            clean, count = module.strip_notes(text)
            self.assertGreater(count, 0, str(file))
            self.assertNotIn('AUTHOR_SCREENSHOT_', clean)
            self.assertEqual(clean.count('```'), text.count('```'), str(file))

    def test_practice_notes_are_also_removable(self):
        for directory in ['troubleshooting', 'try-it-yourself']:
            for file in (ROOT / directory).glob('*.md'):
                text = file.read_text(encoding='utf-8')
                clean, _ = module.strip_notes(text)
                self.assertNotIn('AUTHOR_SCREENSHOT_', clean)
                self.assertEqual(clean.count('```'), text.count('```'), str(file))

if __name__ == '__main__':
    unittest.main()
