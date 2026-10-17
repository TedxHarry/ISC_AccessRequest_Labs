# Author screenshot notes

Each lab and capstone has temporary **Author: Capture screenshot** notes beside the action being photographed. Use the suggested filename and capture the fields/result listed in the note. Use an extra image suffix when a comparison needs more than one panel.

The canonical walkthroughs are in `guided-labs/Mxx/AR-xxx/`. Additional exercises are in `troubleshooting/` and `try-it-yourself/`, grouped by module. Earlier website URLs redirect to the current locations; edit the canonical pages. The removal tool scans all three current folders, including nested modules.

Save images in that lab's `images/` folder. Add the real Markdown image and a short explanatory caption beside the matching step, **outside** the marked author block. Existing screenshots remain in place; no empty image placeholders have been added.

For module practice guides, use a lab-ID subfolder such as `try-it-yourself/images/AR-001/` so filenames remain unambiguous. Place the screenshot note before an approval, denial or restoration that would hide the state being photographed. Retained screenshots from the earlier engineering edition are under `assets/screenshots/legacy/`.

When all images and captions are ready, preview removal of the temporary instructions:

```sh
python tools/author_screenshots.py --remove
```

Apply removal when ready:

```sh
python tools/author_screenshots.py --remove --write
```

The tool removes only matched `AUTHOR_SCREENSHOT_START` / `AUTHOR_SCREENSHOT_END` blocks. It validates every marker before changing files. Numbered steps, image links and captions outside those blocks remain. Commit and push the finished learner edition to update Pages.

The screenshot instructions are authoring prompts, not claims that an image was captured or a tenant result was verified. The journal worksheets have been removed; verification remains in the walkthroughs.

## Annotated teaching screenshots
+
+The website adds numbered reading guides to the existing HR schema and AD correlation screenshots. Their source image files stay unchanged. Keep each point tied to a field that is actually visible, and explain its meaning in the caption. Provide a full-size view for small screens.
+
+For pending capture notes, collect the request/recipient, the actual selected item or account, and the real status/result specified in that note. Do not add a label for a field your tenant does not display, invent a success state, or hide an error merely to make the example look complete. Capture a pending selection before an approval/submission removes it from view. Keep captions and image links outside the removable author block.
+