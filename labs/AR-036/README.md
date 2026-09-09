# AR-036 · Show an extra field for Production work

**Before you start:** AR-035.

## Add and test a condition

1. Add Text Area `Rollback plan`, technical key `rollbackPlan`, to the Maintenance details section. Save.
2. In the form builder, open **Settings > Conditions > Create New**.
3. Set the rule to compare the `environment` field with string `Production` using equality. Add the effect that shows the Rollback plan element. Apply and save.
4. Preview or start a new request. Select Test and confirm the field is hidden. Select Production and confirm it appears.
5. Enter a rollback plan, change back to Test, then change to Production again. Record whether the current form retains the value; do not assume hidden data was cleared.
6. Submit one Production request with a plan and inspect the reviewer's answers. Deny the control after inspection.
7. If requiring the plan conditionally is part of the business requirement, add the builder's required-field effect when available and test an empty Production plan. If that effect is unavailable, make the limitation explicit and enforce the requirement in review instead of claiming it is validated.

**Check:** Both branches are tested, and you can explain the difference between a hidden field and a verified business condition.

**Reset:** Retain the working condition. Remove any contradictory test condition and resolve the request.

[Form conditions](https://documentation.sailpoint.com/saas/help/forms/index.html)

## Screenshots to capture

1. Rule, comparison value and effect.
2. Test versus Production display.
3. Reviewer answers and any required-plan validation.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-035](../AR-035/README.md) · [Course outline](../../README.md) · [Next: AR-037](../AR-037/README.md)
