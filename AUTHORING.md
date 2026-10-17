# Author screenshot notes

Each lab and capstone has temporary **Author: Capture screenshot** notes beside the action being photographed. Use the suggested filename and capture the fields/result listed in the note. Use an extra image suffix when a comparison needs more than one panel.

Save images in that lab's `images/` folder. Add the real Markdown image and a short explanatory caption beside the matching step, **outside** the marked author block. Existing screenshots remain in place; no empty image placeholders have been added.

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
