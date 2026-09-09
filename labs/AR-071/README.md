# AR-071 · Distinguish cancellation, closure and removal

**Before you start:** AR-070. Use Taylor and a fresh Remote Worker request.

## Choose the action from the state

1. Submit a request and leave it pending. Inspect cancellation eligibility and cancel it as the original requester or authorized administrator. Verify no target grant.
2. Submit and approve another request. Verify its target membership, then inspect the available administrative actions. Explain why cancellation is not the operation for removing completed access.
3. Remove the actual assignment and verify AD. Record the removal request separately from the original grant request.
4. For a closure exercise, inspect a failed or stuck request from the permission lab. Open the current **Close access request** API documentation from the SDK reference and compare the request's state with its listed eligibility. Do not use closure on a normally progressing request.
5. If eligible, construct the documented close body with that request's actual activity ID and an explanatory comment, submit as an authorized administrator, then inspect the audit/process and native target state. If ineligible, record the rejected action choice and use the appropriate supported recovery instead.

**Check:** Closing an administrative record and changing native access are independently verified. Your decision table explains when each action applies.

**Reset:** Taylor's test assignment removed; no pending cancellation control remains.

[Administrative actions](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html), [Close operation reference](https://developer.sailpoint.com/docs/tools/sdk/powershell/accessrequests/methods/access-requests/)

## Screenshots to capture

1. Pending cancellation and result.
2. Completed grant followed by actual removal.
3. Closure eligibility decision, audit and independent target check.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-070](../AR-070/README.md) · [Course outline](../../README.md) · [Next: AR-072](../AR-072/README.md)
