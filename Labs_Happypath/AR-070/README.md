# AR-070 · Triage an Access Request queue

In this lab, you'll inspect a fresh pending request, compare it with earlier evidence and assign a justified next action to each case.

## Before you start

Complete [AR-051](../AR-051/README.md) and retain its clean Taylor account and restored AD permissions. Use Acme Admin, Taylor, Priya, the AD workstation and your earlier journals. Prepare missing sessions through [AR-047's registration steps](../../labs/AR-047/README.md#2-add-one-hr-row-and-import-the-complete-file). Module 10/11 evidence is optional; keep any course developer subscriptions disabled. Open your [journal](EVIDENCE.md).

## Follow the steps

### 1. Prepare one live pending case

1. Verify Taylor has no VPN, Remote Users, disposable or baseline membership, no Remote Worker assignment and no unresolved request. Confirm the original account DN/GUID. Use [native checks](../../M02-CHECKS.md#inspect-direct-ad-membership).
2. Inspect Remote Worker's current owner, entitlements and grant/removal settings using [the operations control procedure](../../LAB-DESK.md#submit-a-remote-worker-operations-control). Record the actual configuration. If it differs from the retained Priya/direct-review setup, resolve that difference before submitting.
3. As Taylor, submit reason `AR-070 pending review control` using that procedure's submission steps. Stop before a reviewer decision. Record the new ID/time and verify Priya is assigned. Save `AR-070-01.png`.

**Check:** This is a fresh pending request. Do not describe it as overdue simply because the exercise concerns a queue.

### 2. Inspect the queue and separate the cases

1. Return to Acme Admin and open **Admin > Dashboard > Approval Management > Access Requests**. Use the status/filter controls to inspect pending and concluded reviews separately. Record the filters and observation time; sort by age/date when available. Open the fresh request's Process, Assignees and Details.
2. Copy its request ID, recipient, item, current review step, assigned person, submitted time and latest event into the journal. Follow [Account Activity](../../LAB-DESK.md#find-the-account-activity) separately for provisioning evidence; an approval queue is not the full provisioning queue.
3. Select four historical records from the sources below. Reopen their current request/activity where available and distinguish the saved observation time from today's state. If you have not executed that source lab, use the stated scenario as a paper exercise labelled Synthetic; leave IDs empty.

| Source | Saved observation or paper scenario | First evidence to inspect |
|---|---|---|
| AR-041 | Approved access has a start date still in the future at observation time | Effective start, time zone and recorded decision |
| AR-048 | A group update failed with a directory permission error | Exact failed operation, group and permission before-record |
| AR-050 | AD membership differs from the last imported account view | Same account/group and aggregation completion time |
| AR-053 or AR-046 | A grant completed and was later removed | Original grant plus separate removal/native evidence |

4. For each row, record Live, Historical or Synthetic; request/item/account identifiers; evidence time; actual state; responsible person; next action; and the evidence needed to close the case. Save `AR-070-02.png`.

**Check:** A historical failure can already be resolved today. A future-start case is not automatically a failed provision.

### 3. Prioritize and complete the live control

1. Classify the fresh case as waiting for Priya. Compare its age with an actual agreed review expectation if one exists; otherwise record that no overdue threshold was supplied. Inspect the applicable reminder/escalation configuration without changing it.
2. Prioritize the cases by current impact and evidence. For example, an unresolved failed removal leaving sensitive access requires a different response from a completed removal's historical error. Record the reason for your order.
3. Use your journal to name the next action for each case: reviewer decision, wait until the recorded start, inspect the failed directory operation, refresh account data after a verified native change, or no action because the historical case is resolved. Do not close records to make the queue look smaller.
4. As Priya, deny the fresh control with `AR-070 triage control complete`. Verify terminal denial and Taylor's VPN/Remote Users False. Record the changed queue state and save `AR-070-03.png`.

**Check:** Every row has evidence and a next action or a justified no-action conclusion. The temporary live case is resolved.

## Check the result

Your queue distinguishes approval, timing, provisioning, reconciliation and historical outcomes. The one new live request is denied without granting access; paper cases are clearly labelled.

## Finish

Keep the triage table and source evidence. Leave Taylor clean and Priya/Remote Worker settings intact. Do not recreate an old directory fault or schedule solely to fill the queue.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when a result needs several images. Label historical and synthetic evidence separately from current tenant observations.

| Filename | What to show |
|---|---|
| AR-070-01.png | Fresh pending request and original reviewer |
| AR-070-02.png | Five classified records with evidence timestamps |
| AR-070-03.png | Prioritized actions, resolved live control and native absence |

[Previous: AR-069](../AR-069/README.md) · [Course outline](../../README.md) · [Next: AR-071](../AR-071/README.md)
