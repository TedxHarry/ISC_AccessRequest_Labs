# AR-058 · Attach a native approval workflow

**Before you start:** C09, workflow capability and Henry's working reviewer sessions. Save Production Support's reviewer configuration.

## Build the smallest useful workflow

1. Follow **Prepare an approval workflow** on the lab desk. Name it `WF-Acme-AR058` and use the native Access Request Submitted trigger.
2. Add **Approval Policy** from Access Request Actions. Select **Single**, reviewer category **Manager**, timeout **2 days**, action at timeout **Expire**. Connect it to the completion step, save and enable.
3. On AP-Production-Support's Access Requests page, select Workflow approval and choose WF-Acme-AR058. Preserve its form and date requirements. Save.
4. As Henry, submit a complete request with a valid end date and no future start. Verify a workflow execution exists for that request and Ava receives the approval.
5. Approve as Ava. Inspect the action output, final request decision and AD membership. Record the actual output fields used by this action.
6. Remove the assignment, submit another request and have Ava deny. Verify no grant. Workflow completion and the access decision must be recorded separately.

**Check:** The enabled workflow is selected on the item and drives both observed outcomes. If it is absent from the selector, check the trigger type, enabled state and validation errors.

**Leave:** Keep this workflow available as the working control. Subsequent labs clone it instead of breaking the only working example.

[Native workflow trigger](https://documentation.sailpoint.com/saas/help/workflows/workflow-triggers.html), [Approval action](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html)

## Screenshots to capture

1. Workflow trigger, action and item association.
2. Execution input matching the request and Ava's task.
3. Approved/denied outcomes and native checks.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-057](../AR-057/README.md) · [Course outline](../../README.md) · [Next: AR-059](../AR-059/README.md)
