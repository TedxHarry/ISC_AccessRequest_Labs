# AR-086 · Give the service desk only the required request permissions

**Before you start:** AR-085 or the core course. Ethan (`acme.e010`) is the test service-desk operator. Keep an administrator session available.

For any actor whose ISC sign-in is not prepared, complete [AR-008’s additional-session procedure](../AR-008/README.md) before submitting or reviewing.

## Verify permissions through actions

1. Record Ethan's current user levels under his identity details. Open the current User Level Permissions/Matrix documentation and identify the available read-only and management roles for Access Request administration.
2. As administrator, assign **Access Request Read Only Admin** to Ethan. Save and sign Ethan out/in.
3. Open Approval Management as Ethan. Locate one course request and inspect details. Attempt to locate reassignment/decision actions without executing a forbidden mutation; record what the role exposes.
4. Assign **Access Request Administrator** for the management test. Refresh Ethan’s session. As an authorized requester, submit Remote Worker for Henry, who must start without it; leave Priya’s review pending. Reassign that specific approval to Samuel with a comment and record its ID. Create two additional pending Remote Worker requests for distinct clean recipients Taylor and Liam, tagged AR-086 bulk A and B. Select only these two IDs in Approval Management and use the supported bulk cancel action; verify both items individually. Do not select unrelated queue entries.
5. Inspect the audit as administrator and confirm Ethan's identity performed the reassignment. Do not use an administrator-owned token to claim Ethan had permission.
6. Restore Ethan's original levels and confirm the elevated action is no longer available after a new session. Resolve the diagnostic request.

**Check:** The tested role permits the required task and its actor is visible in audit evidence. Record exact role names because custom levels and tenant capabilities may differ.

**Reset:** Original user levels restored; no temporary admin privilege remains.

[User level permissions](https://documentation.sailpoint.com/saas/help/common/users/user_levels.html), [Permission matrix](https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html)

## Screenshots to capture

1. Original/read-only/management level comparison.
2. Ethan's permitted action and audit actor.
3. Restored levels and fresh-session restriction.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-085](../AR-085/README.md) · [Course outline](../../README.md) · [Next: AR-087](../AR-087/README.md)
