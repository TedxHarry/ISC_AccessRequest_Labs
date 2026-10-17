from pathlib import Path
import json
import re
import shutil
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]


class PublishedInstructionTests(unittest.TestCase):
    def test_commands_have_separated_executable_and_arguments(self):
        for folder in ['guided-labs', 'reference']:
            for page in (ROOT / folder).rglob('*.md'):
                text = page.read_text(encoding='utf-8')
                self.assertNotRegex(text, r'(?:Test-Path|python|--fixture)\.[/\\]', str(page))

    def test_practice_has_no_checkpoint_paperwork_or_dangling_case_reference(self):
        for page in (ROOT / 'try-it-yourself').rglob('*.md'):
            text = page.read_text(encoding='utf-8')
            self.assertNotRegex(text, r'(?i)Create a private[^\n]*C\d+[^\n]*folder|supplied ticket below', str(page))

    def test_each_module_has_a_practical_challenge_with_acceptance_and_restoration(self):
        for number in range(1, 15):
            page = ROOT / 'try-it-yourself' / f'M{number:02}.md'
            text = page.read_text(encoding='utf-8')
            for label in ['## Hands-on challenge:', '**Start with:**', '**Your task:**', '**You have succeeded when:**', '**Finish:**', '<summary>Show a hint</summary>']:
                self.assertIn(label, text, str(page))

    def test_independent_capstones_are_requirement_first(self):
        for number in range(1, 4):
            page = ROOT / 'try-it-yourself/capstones' / f'CAP-{number:02}.md'
            text = page.read_text(encoding='utf-8')
            self.assertIn('## Starting conditions', text)
            self.assertIn('## Your assignment', text)
            self.assertIn('## Acceptance checks', text)
            self.assertIn('<summary>Open the worked walkthrough</summary>', text)

    @unittest.skipUnless(shutil.which('pwsh') or shutil.which('powershell'), 'Requires PowerShell')
    def test_published_fixture_block_runs(self):
        text = (ROOT / 'reference/API-WORKBENCH.md').read_text(encoding='utf-8')
        section = text.split('### Open the correct folder and run the fixture first', 1)[1]
        code = re.search(r'```powershell\n(.*?)```', section, re.S)[1]
        with tempfile.TemporaryDirectory(prefix='published fixture ', dir=ROOT / 'tests') as scratch:
            # Change only the output parent; run the published commands verbatim.
            quoted = "'" + scratch.replace("'", "''") + "'"
            code = code.replace("([Environment]::GetFolderPath('MyDocuments'))", quoted)
            result = subprocess.run([shutil.which('pwsh') or shutil.which('powershell'), '-NoProfile', '-NonInteractive', '-Command', "$ErrorActionPreference='Stop';\n" + code], cwd=ROOT, capture_output=True, text=True)
            self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
            reports = list(Path(scratch).rglob('fixture-report.json'))
            self.assertEqual(len(reports), 1)
            self.assertEqual(len(json.loads(reports[0].read_text(encoding='utf-8'))), 3)


if __name__ == '__main__':
    unittest.main()
