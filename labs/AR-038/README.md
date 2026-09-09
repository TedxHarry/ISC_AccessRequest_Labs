# AR-038 · Repair a missing request form

**Before you start:** AR-037. Use Production Support and Henry.

## Reproduce the association fault

1. Confirm a new Production Support request presents the form, then discard the unsent request.
2. Save the item configuration and turn off its required-form association. Leave the form definition itself intact.
3. Start a fresh request as Henry and confirm the form is absent. Do not submit this incomplete business case.
4. Inspect the exact requested object. Check its type and ID against the item you edited. A profile's form setting is not proof that a containing role requires that form.
5. Re-enable the required form on Production Support, select the correct form and save.
6. Start another fresh request, complete the expected fields, submit and inspect the answers as Ava. Deny the control after verification.
7. Record why editing a definition alone would not have repaired an item-association fault.

**Check:** The same item now requires the intended form, and the saved request contains its answers.

If the form option is missing from every supported item, inspect service availability and permission before diagnosing an individual association problem.

**Reset:** Production Support requires the correct form; no accidental grant remains.

[Item request configuration](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html)

## Screenshots to capture

1. Missing form and actual requested item.
2. Faulty and restored association.
3. Fresh request with reviewer-visible answers.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-037](../AR-037/README.md) · [Course outline](../../README.md) · [Next: AR-039](../AR-039/README.md)
