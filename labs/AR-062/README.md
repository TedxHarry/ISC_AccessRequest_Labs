# AR-062 · Repair a workflow that is not invoked

**Before you start:** AR-061. Use the Production Support control workflow, not Finance's eligibility control.

## Isolate association from execution

1. Record the current Production Support workflow ID, enabled state and item association. Verify one fresh control reaches the workflow, then deny it.
2. Change the item back to a direct Manager reviewer and save. Leave the workflow enabled.
3. Submit a fresh request. Confirm the reviewer receives a direct approval and that no execution of the previously associated workflow exists for this request.
4. Compare the requested item's ID with the item you edited, the selected approval type, workflow ID, trigger and enabled state. Identify the association as the cause.
5. Restore the workflow association. Submit a fresh control and verify its execution and reviewer task; deny it after checking.
6. For a wrong-branch case, use AR-061's saved execution data. Compare the actual recipient's department with the comparator input and generated JSONPath. Fix the path in a cloned test workflow, validate, and test before reattaching it.

**Check:** An enabled workflow alone does not prove an item invokes it, and a missing execution is investigated differently from an execution that took the wrong branch.

**Reset:** Correct Production Support workflow association restored; no pending diagnostic requests.

[Workflow trigger conditions](https://documentation.sailpoint.com/saas/help/workflows/workflow-triggers.html)

## Screenshots to capture

1. Direct-review fault and absent matching execution.
2. Restored item association and fresh execution.
3. Comparator input/path evidence for the branch diagnosis.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-061](../AR-061/README.md) · [Course outline](../../README.md) · [Next: AR-063](../AR-063/README.md)
