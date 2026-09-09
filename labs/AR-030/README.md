# AR-030 · Recover a request with an unresolved reviewer

**Before you start:** AR-029. Harper (`acme.e019`) is the recipient. Keep the full working HR file and current approval configuration available.

For any actor whose ISC sign-in is not prepared, complete [AR-008’s additional-session procedure](../AR-008/README.md) before submitting or reviewing.

## Missing-manager case

1. Save Harper's current manager, Ava, and export or record the profile's reviewer/escalation settings.
2. Copy the complete HR file and clear only E019's `managerEmployeeNumber`. Import and process it. Confirm Harper's resolved manager is absent before submitting.
3. As Harper, request Production Support. In Approval Management, inspect the resolved assignment and escalation/fallback history. Record who received the task; do not assume a particular admin will always be selected.
4. Restore the complete original HR file and verify Ava is again Harper's manager.
5. For the pending request, use authorized **Reassign** in Approval Management to select Ava and record a recovery comment. Inspect the new assignee before she decides. If multiple assignees are shown, open their individual assignment details first.
6. Deny this diagnostic request. Submit a fresh Harper request and verify it routes to Ava normally. Deny the control as well.

## Owner-quality case

1. Inspect the profile owner and the Security group members for usable identity state, valid email and session access.
2. Record how you would distinguish an unresolved owner from a valid reviewer whose notification failed. Do not disable a shared owner to simulate an email problem.

**Check:** Restoring identity data repairs new routing; an existing task receives a separately audited recovery. Your evidence shows the actual fallback result in this tenant.

**Reset:** Harper's manager restored, no pending diagnostic request, original configuration retained.

[Approval administration](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html)

## Screenshots to capture

1. Missing manager on Harper's identity.
2. Actual fallback and authorized reassignment.
3. Restored manager and fresh control routing.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-029](../AR-029/README.md) · [Course outline](../../README.md) · [Next: AR-031](../AR-031/README.md)
