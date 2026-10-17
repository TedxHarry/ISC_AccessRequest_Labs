# AR-070 · Triage an Access Request queue

In this lab, you'll inspect a fresh pending request, compare it with earlier evidence and assign a justified next action to each case.

A support queue mixes current work with historical outcomes. Identify the present stage and impact before choosing an action; an old Failure label is not evidence that the service is still broken.

## Before you start

Complete [AR-051](../../M08/AR-051/README.md) and retain its clean Taylor account and restored AD permissions. Use Acme Admin, Taylor, Priya, the AD workstation and earlier request and activity details. Prepare missing sessions through [AR-047's registration steps](../../M08/AR-047/README.md#2-add-one-hr-row-and-import-the-complete-file). Module 10/11 evidence is optional; keep any course developer subscriptions disabled.

## Follow the steps

### 1. Prepare one live pending case

1. Verify Taylor has no VPN, Remote Users, disposable or baseline membership, no Remote Worker assignment and no unresolved request. Confirm the original account DN/GUID. Use [native checks](../../../reference/M02-CHECKS.md#inspect-direct-ad-membership).
2. Inspect Remote Worker's current owner, entitlements and grant/removal settings using [the operations control procedure](../../../reference/LAB-DESK.md#submit-a-remote-worker-operations-control). Record the actual configuration. If it differs from the retained Priya/direct-review setup, resolve that difference before submitting.
3. As Taylor, submit reason `AR-070 pending review control` using that procedure's submission steps. Stop before a reviewer decision. Record the new ID/time and verify Priya is assigned.

   <!-- AUTHOR_SCREENSHOT_START: AR-070-01 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-070-01.png`
   >
   > **Show:** Fresh pending request and original reviewer.

   <!-- AUTHOR_SCREENSHOT_END: AR-070-01 -->

**Check:** This is a fresh pending request. Do not describe it as overdue simply because the exercise concerns a queue.

### 2. Inspect the queue and separate the cases

1. Return to Acme Admin and open **Admin > Dashboard > Approval Management > Access Requests**. Use the status/filter controls to inspect pending and concluded reviews separately. Record the filters and observation time; sort by age/date when available. Open the fresh request's Process, Assignees and Details.
2. Check the matching request, operation and target results directly. Follow [Account Activity](../../../reference/LAB-DESK.md#find-the-account-activity) separately for provisioning evidence; an approval queue is not the full provisioning queue.
3. Select four historical records from the sources below. Reopen their current request/activity where available and distinguish the saved observation time from today's state. If you have not executed that source lab, use the stated scenario as a paper exercise labelled Synthetic; leave IDs empty.

| Source | Saved observation or paper scenario | First evidence to inspect |
|---|---|---|
| AR-041 | Approved access has a start date still in the future at observation time | Effective start, time zone and recorded decision |
| AR-048 | A group update failed with a directory permission error | Exact failed operation, group and permission before-record |
| AR-050 | AD membership differs from the last imported account view | Same account/group and aggregation completion time |
| AR-053 or AR-046 | A grant completed and was later removed | Original grant plus separate removal/native evidence |

4. For each case, identify whether it is Live, Historical or Synthetic, its current stage, responsible person and next action. Use actual request/item/account references to find the evidence; you do not need to fill in a separate queue worksheet.

   <!-- AUTHOR_SCREENSHOT_START: AR-070-02 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-070-02.png`
   >
   > **Show:** Five classified records with evidence timestamps.

   <!-- AUTHOR_SCREENSHOT_END: AR-070-02 -->

**Check:** A historical failure can already be resolved today. A future-start case is not automatically a failed provision.

### 3. Prioritize and complete the live control

1. Classify the fresh case as waiting for Priya. Compare its age with an actual agreed review expectation if one exists; otherwise record that no overdue threshold was supplied. Inspect the applicable reminder/escalation configuration without changing it.
2. Prioritize the cases by current impact and evidence. For example, an unresolved failed removal leaving sensitive access requires a different response from a completed removal's historical error. Record the reason for your order.
3. Check the matching request, operation and target results directly. Do not close records to make the queue look smaller.
4. As Priya, deny the fresh control with `AR-070 triage control complete`. Verify terminal denial and Taylor's VPN/Remote Users False.

   <!-- AUTHOR_SCREENSHOT_START: AR-070-03 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-070-03.png`
   >
   > **Show:** Prioritized actions, resolved live control and native absence.

   <!-- AUTHOR_SCREENSHOT_END: AR-070-03 -->

**Check:** Every row has evidence and a next action or a justified no-action conclusion. The temporary live case is resolved.

## Check the result

Your queue distinguishes approval, timing, provisioning, reconciliation and historical outcomes. The one new live request is denied without granting access; paper cases are clearly labelled.

## Finish

Keep only the live request references needed to finish outstanding work. Leave Taylor clean and Priya/Remote Worker settings intact. Do not recreate an old directory fault or schedule solely to fill the queue.

[Previous: AR-051](../../M08/AR-051/README.md) · [Course outline](../../../README.md) · [Next: AR-071](../AR-071/README.md)

After the regular lab, use the separate [live operations practice](../../../troubleshooting/live-operations.md) for a fresh controlled incident instead of a supplied paper case.
