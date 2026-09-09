# AR-074 · Prepare a support case another engineer can reproduce

**Before you start:** AR-073. Choose one real course failure, not an invented product defect.

## Assemble the evidence

1. Write a one-sentence symptom naming the recipient, item, expected behavior and actual failure stage. Use fictional names in a shareable copy.
2. List the relevant source, item, request, approval, activity and invocation IDs privately. Include time zone and exact timestamps.
3. Write the smallest reproduction sequence from a known checkpoint. State the required permissions and feature availability.
4. Add the actual error text, effective configuration and a working control. Separate facts from hypotheses.
5. List changes already tried, their results and the current native state. Avoid including unrelated tenant exports.
6. Add business impact and the next requested action: configuration review, connector investigation or service-side investigation.
7. Give the package to a peer or reread it without the walkthrough. Check that each step names an actor, input and observation. Redact tokens, passwords, callback secrets and unrelated personal data before sharing.

**Pass when:** A recipient can understand and reproduce the issue without needing your browser session. No support case is sent automatically by this lab.

**Reset:** Retain the sanitized package and the private identifier map separately.

[Monitoring evidence](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html)

## Screenshots to capture

1. Minimal failing configuration and actual error.
2. Working control with comparable inputs.
3. Sanitized reproduction and timeline.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-073](../AR-073/README.md) · [Course outline](../../README.md) · [Next: AR-075](../AR-075/README.md)
