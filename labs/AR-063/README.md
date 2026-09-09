# AR-063 · Send a notification that reflects the real decision

**Before you start:** AR-062, a controlled mailbox and a working Approval Policy workflow.

## Use the action's actual output

1. Clone the control workflow as `WF-Acme-AR063`. Run one denied control if needed and inspect the Approval Policy action's JSON output in execution history.
2. Add a comparison after Approval Policy. In the variable picker choose the action's documented decision/status output and compare it with the approved value from your recorded output. Do not compare the overall workflow success state.
3. On the approved branch add **Send Email** to your controlled lab mailbox, subject `AR-063 approval decision`, body containing the request ID, recipient and approved decision. On the other branch add a separate denial notification with the actual decision. Connect both to completion.
4. Enable and attach the workflow. Submit and approve a fresh request, then compare the delivered email with the request's decision and native fulfillment. Remove the grant.
5. Submit and deny a second request. Verify the denial email and absent membership.
6. Record that notification delivery and provisioning are separate outcomes. If the mail fails, inspect that action without resubmitting the already-approved access request.

**Check:** The notification accurately describes the access decision and includes a request ID; a workflow completion message is not used as an approval signal.

**Reset:** Retain the tested workflow, restore the prior association and remove test grants. Keep mailbox credentials private.

[Approval output and Send Email](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html)

## Screenshots to capture

1. Actual Approval Policy output and selected comparison field.
2. Approved and denied notification branches.
3. Delivered messages matched to request/target evidence.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-062](../AR-062/README.md) · [Course outline](../../README.md) · [Next: AR-064](../AR-064/README.md)
