# Course maintenance

- [Screenshot authoring instructions](AUTHORING.md): capture images beside the relevant step and remove temporary notes when the learner edition is ready.
- [Validation record](VALIDATION.md): distinguish website checks from completed tenant executions.
- [Review history](reviews/COURSE-REVIEW.md): earlier content and engineering reviews.

Edit the current walkthrough under `guided-labs/Mxx/AR-xxx/`. Keep that lab's screenshots in its own `images/` folder. Additional practice belongs under `troubleshooting/` or `try-it-yourself/`; learner lookup pages belong under `reference/`.

Run the screenshot-removal tool from the repository root, not from this maintenance folder. It discovers the module folders automatically. The website redirects earlier lab and reference URLs to the current locations.
