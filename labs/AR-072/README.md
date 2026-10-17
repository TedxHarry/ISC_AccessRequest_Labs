# AR-072 · Change an owner without losing pending work

In this lab, you'll change Remote Worker's owner, compare an existing review with a new one, and restore the original routing.

## Before you start

Complete [AR-071](../AR-071/README.md). Use Acme Admin, Taylor, Liam, Priya and Samuel (`acme.e024`). Prepare Samuel's sign-in using [the registration procedure](../../labs/AR-029/README.md#1-prepare-the-five-sessions-and-check-henry), substituting Samuel and preserving the complete HR file. Keep the AD workstation available.

## Follow the steps

### 1. Save the configuration and open the old request

1. Verify Taylor and Liam each have no Remote Worker assignment, VPN/Remote Users membership or pending request. Taylor remains outside baseline; Liam retains baseline. Preserve unrelated access. Resolve any leftover assignment before using that person as a clean control.
2. Open **Admin > Access Model > Access Profiles > AP-Remote-Worker > Edit**. Save the profile ID, Priya's owner identity ID, grant/removal Primary Owner review, requestability, form/date settings and included entitlements.
3. As Taylor, use [the operations submission steps](../../LAB-DESK.md#submit-a-remote-worker-operations-control), reason `AR-072 before owner change`. Open Process/Assignees, verify Priya and leave the request pending.

   <!-- AUTHOR_SCREENSHOT_START: AR-072-01 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-072-01.png`
   >
   > **Show:** Original owner and old pending request.

   <!-- AUTHOR_SCREENSHOT_END: AR-072-01 -->

**Check:** The before-record contains both the profile owner and the already-resolved request assignee.

### 2. Change only the owner and compare a new request

1. Edit Remote Worker's owner field, select Samuel by acme.e024, Save and Apply Changes if offered. Reopen and verify Samuel's ID. Leave Access Requests set to Primary Owner, not a named Priya reviewer.
2. As Liam, submit reason `AR-072 after owner change` using the same submission steps. Samuel is the expected current owner for this deliberate exception. Stop before deciding and record the new ID.
3. Inspect Liam's Process/Assignees and verify Samuel is assigned. Reopen Taylor's earlier request and record its actual current assignee. Do not assume the owner edit moved an existing task.
4. Compare both records with the separate Samuel/Priya queues under **Approvals > Access Requests > Requested**. Record owner-save time, submission times and assignees.

   <!-- AUTHOR_SCREENSHOT_START: AR-072-02 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-072-02.png`
   >
   > **Show:** Samuel owner and new-versus-existing assignees.

   <!-- AUTHOR_SCREENSHOT_END: AR-072-02 -->

**Check:** A fresh request tests the new configuration. Already-created work is inspected separately.

### 3. Hand over the existing review and resolve the controls

1. Return to the Acme Admin session. Open **Admin > Dashboard > Approval Management > Access Requests** and Taylor's recorded request. If the review is still assigned to Priya, open **Assignees > Reassign** beside that individual row. Choose Samuel (acme.e024) in Reassign To, comment `AR-072 owner handover for existing work`, and confirm. If already assigned to Samuel, record the observation without redundant reassignment.
2. Reopen Process/Assignees and Samuel's queue. Record the change event. Do not use Overwrite Current Approver: it approves the current step rather than transferring the task.
3. As Samuel, inspect and deny both diagnostic Grants separately with `AR-072 handover observed`. Confirm terminal decisions and Taylor/Liam VPN and Remote Users False.

   <!-- AUTHOR_SCREENSHOT_START: AR-072-03 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-072-03.png`
   >
   > **Show:** Handover audit and two denied controls.

   <!-- AUTHOR_SCREENSHOT_END: AR-072-03 -->
4. Restore Priya as profile owner, save/apply and reopen. Verify the original review, requestability, form/date and entitlement settings.
5. As Taylor, submit `AR-072 restored owner control`. Verify Priya is assigned, then have Priya deny with `AR-072 routing restored`. Confirm native absence and no outstanding review.

   <!-- AUTHOR_SCREENSHOT_START: AR-072-04 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-072-04.png`
   >
   > **Show:** Priya restored, fresh routing proof and change record.

   <!-- AUTHOR_SCREENSHOT_END: AR-072-04 -->

**Check:** The original owner is restored and a new request proves the original route works again.

### 4. Record the change and rollback

1. Record before/after owner IDs, save times, affected pending request, any reassignment, both diagnostic results and the restored-control result.
2. Write the rollback: restore Priya on the profile, inspect existing assignees individually, resolve diagnostic tasks, then verify a fresh request. If stopping early, perform that rollback before leaving the lab.

**Check:** The change record accounts for definitions and existing work.

## Check the result

The new request resolves the changed owner, the old task is inspected and transferred where needed, and a fresh denied control confirms Priya after rollback.

## Engineering practice

Inspect how the removal policy also refers to Primary Owner. Explain why leaving Samuel as owner would change later removal routing even if only grant routing was being tested. Separate owner changes, policy changes and one-task reassignment in the before-record.

## Finish

Keep Priya restored and all diagnostic requests terminal. Preserve Liam baseline, Taylor baseline exclusion, original accounts and unrelated access. Retain Samuel’s working session without granting new administrator rights.

[Previous: AR-071](../AR-071/README.md) · [Course outline](../../README.md) · [Next: AR-073](../AR-073/README.md)
