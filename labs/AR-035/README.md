# AR-035 · Test required and optional form inputs

**Before you start:** AR-034.

## Exercise input boundaries

1. Add optional Text Area `Implementation notes`, key `implementationNotes`, to the form. Save.
2. As Henry, start a fresh request and leave Change ticket blank. Attempt to continue and capture the required-field error.
3. Enter `CHG-LAB-035`, choose Test and supply the work description. Leave the optional notes blank. Submit; inspect the answers as Ava and deny the diagnostic request.
4. Repeat with all fields populated. Use a work description containing a comma, an apostrophe and a line break. Inspect whether the saved reviewer text preserves those characters.
5. Enter a fake but well-formed ticket number and observe that a text field alone does not check a ticketing system. Deny it with `Test ticket is not an approved change`.
6. Record accepted, rejected and merely collected values. Keep browser validation distinct from business authorization.

**Check:** Required input blocks an incomplete submission, optional input can be absent, and the saved answers match the submitted content.

If a field's technical key changes, check conditions and integrations that refer to that key before saving a replacement. Renaming a label and changing an identifier are different edits.

**Reset:** Retain the optional field. Resolve the diagnostic requests without granting access.

[Form field configuration](https://documentation.sailpoint.com/saas/help/forms/index.html)

## Screenshots to capture

1. Required-field error.
2. Submitted request with optional field blank.
3. Reviewer text showing punctuation/line breaks and the test decision.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-034](../AR-034/README.md) · [Course outline](../../README.md) · [Next: AR-036](../AR-036/README.md)
