# AR-086 · Test service-desk request permissions

In this lab, you'll give Ethan read-only request access, compare it with management access and remove the temporary privileges after a reassignment and two cancellations.

## Before you start

Complete [AR-072](../AR-072/README.md). Use Ethan (`acme.e010`), Henry, Taylor, Liam, Priya, Samuel and Acme Admin in separate sessions. Prepare Ethan's session with [AR-029's registration procedure](../../labs/AR-029/README.md#1-prepare-the-five-sessions-and-check-henry), substituting E010 and preserving the full HR file. Keep the administrator session open independently. Open your [journal](EVIDENCE.md).

## Follow the steps

### 1. Record Ethan's authority and prepare a live control

1. In **Admin > Identity Management > Identities**, find Ethan by acme.e010 and select **Actions > Set User Levels**. Record every existing level. Ethan must not already have Org Admin, Access Request Administrator or a custom level granting the same management powers; otherwise the read-only comparison is masked. Resolve that test-account prerequisite before proceeding.
2. Verify Henry, Taylor and Liam each lack Remote Worker and its two native groups, with no pending request. Preserve Henry/Liam baseline and Taylor's baseline exclusion. Reopen Remote Worker and confirm Priya owner, direct Primary Owner grant/removal review and no form/date requirements.
3. As Henry, follow [the Remote Worker submission procedure](../../LAB-DESK.md#submit-a-remote-worker-operations-control), reason `AR-086 individual reassignment`. Leave Priya pending. Record this request ID separately from the later bulk cases.
4. Grant Ethan **Access Request Read Only Admin** using the identity's user-level checkboxes and Save. Sign Ethan out/in. Save `AR-086-01.png` with original/new levels and the control ID.

**Check:** A fresh session and a pending task make the permission comparison observable. [User levels](https://documentation.sailpoint.com/saas/help/common/users/user_levels.html)

### 2. Inspect under the read-only level

1. As Ethan, open **Admin > Dashboard > Approval Management > Access Requests**. Filter to Henry and open the recorded request's Process, Assignees and Details.
2. Record which information is visible and whether management actions are absent/disabled. Do not use the administrator's tab or token to claim Ethan can act. Menu visibility is UI evidence, not a complete test of backend authorization.
3. Capture `AR-086-02.png`. If Ethan can manage the task, stop and inspect all effective levels/custom permissions before proceeding; do not call that a successful read-only test.

**Check:** Ethan can investigate a request without changing its review.

### 3. Reassign one task and cancel only two selected requests

1. As Acme Admin, replace the temporary Read Only Admin level with **Access Request Administrator**, retaining Ethan's original unrelated levels. Save and refresh Ethan's sign-in.
2. Ethan reopens Henry's exact request, uses **Assignees > Reassign** on Priya's individual row, selects Samuel, enters `AR-086 service desk handover` and confirms. Do not use Overwrite Current Approver, which approves the step.
3. As Samuel, verify the task arrived and deny with `AR-086 diagnostic review complete`. Verify Henry has no grant. Record Ethan's reassignment event and Samuel's separate decision actor.
4. Taylor submits `AR-086 bulk A` and Liam submits `AR-086 bulk B` for Remote Worker, each in their own session. Verify both Priya reviews are pending and record their two IDs.
5. Ethan filters Approval Management to those cases. Select exactly the two rows, verify recipient/item/ID, choose the supported **Cancel Request** bulk action and enter `AR-086 selected diagnostics complete`. Confirm. If the installed UI lacks bulk cancellation, record it as Not available and cancel the two eligible rows individually; do not claim the bulk case passed.
6. Reopen each record separately and verify Canceled, no actionable review and no native VPN/Remote Users on either recipient. Save `AR-086-03.png` with selection, individual results and actors.

**Check:** A bulk confirmation is not proof that both items reached the required state. [Approval administration](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html)

### 4. Restore Ethan's levels and recheck

1. Acme Admin restores exactly Ethan's original levels and saves. Sign Ethan out/in again; verify the temporary management authority is no longer exposed. If his original role cannot open Approval Management, record that expected restriction.
2. Verify all three requests are terminal, their recipients retain original accounts/baseline states and no unrelated request was selected. Save `AR-086-04.png`. Resolve remaining diagnostic tasks as administrator while preserving their actual audit actors.

**Check:** No temporary service-desk privilege remains.

## Check the result

Read-only inspection and management actions are performed in Ethan’s actual session, with distinct audit actors. Both selected cancellations are checked individually and original user levels are restored.

## Finish

Restore Ethan’s original levels even if a case fails. Keep the three control IDs and per-item outcomes, with no temporary grants or unresolved reviews.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-086-01.png | Original/read-only levels and pending control |
| AR-086-02.png | Ethan read-only view and restrictions |
| AR-086-03.png | Management reassignment and two cancellation results |
| AR-086-04.png | Original levels restored and final queue state |

[Previous: AR-085](../AR-085/README.md) · [Course outline](../../README.md) · [Next: AR-087](../AR-087/README.md)
