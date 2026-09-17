# AR-041 · Observe scheduled access and compare date-change reviews

In this lab, you'll watch a future assignment start and expire, then compare changing its dates from My Access with requesting new dates in Request Center.

## Before you start

Complete [AR-040](../AR-040/README.md), including removal. Use separate sessions for Acme Admin, Henry (`acme.e018`), Ava (`acme.e006`) and Evelyn (`acme.e021`), plus the AD workstation. Keep the required end date, seven-day maximum and any attached form. You need a window when you can complete both approvals before the start and observe AD before, during and after access. Keep your [journal](EVIDENCE.md) open.

If you are resuming, check your journal, current assignments and pending requests before submitting again. Resolve the earlier attempt first. If later labs changed these policies, compare their saved settings before restoring the first-pass values below.

## Follow the steps

For each native check, use the same domain controller and account identifiers you recorded at the start. Before the future start, check AD without waiting for an addition. At the start and end boundaries, follow the scheduled operations to successful completion and then check AD. Revoking an assignment that never provisioned may not create an AD removal activity; verify its ended state and native absence instead. If it fails or remains pending, inspect that activity before submitting another request.

### 1. Submit a future window

If the standard start-date control is unavailable, record that limit and leave this lab Not run. Continue with Olivia in AR-042; do not put a date in the custom form as a substitute.

1. Confirm Henry has no Production Support assignment or pending request and direct Support membership is False. Baseline must remain True. Record Henry’s DN, objectGUID and domain controller. Use [the membership procedure](../../M02-CHECKS.md#inspect-direct-ad-membership).
2. Choose a start at least one hour ahead, rounded to a quarter hour, and an end two hours after that start. Move the whole window later if you need more approval time. Record both full timestamps, selected zone, date-specific UTC offsets and corresponding UTC instants.
3. As Henry, select Production Support in **Request Center > Access Items > Access Profiles**. If the Module 6 form is attached, complete it with ticket `CHG-LAB-041-A`, Production, description `Observe scheduled lab support access`, rollback `Verify scheduled removal`, and leave Implementation notes blank. Enter standard comments `AR-041 scheduled window`, whether or not the custom form is attached. Set the standard start/end to your recorded window.
4. Save, select **Review Request**, reopen **Edit Request Details** and verify both timestamps and the target account. Submit and record the ID. As Ava, open the matching Grant under **Approvals > Access Requests > Requested**, inspect the dates and approve. Then, as Evelyn, inspect and approve the Security stage.
5. As administrator, inspect **Approval Management > Access Requests > matching ID > Process/Details**. Confirm approvals completed before the intended start and the saved assignment dates match. Save `AR-041-01.png`. If approvals did not finish before the start, resolve/revoke that assignment and choose a fresh window; it cannot prove the approved-before-start case.

**Check:** Approval authorizes the future window. It does not mean AD membership should exist before the start.

### 2. Observe the three boundaries

1. Before the selected start, run the native check and record Support False with the observation timestamp. If it is already True, record the actual assignment and operation times and inspect other grant paths before continuing.
2. At or after the start, use [Account Activity](../../LAB-DESK.md#find-the-account-activity) with Henry's username and your exact AD source. Locate the addition by its window and request details; do not add an action filter that could hide scheduled operations. Record the operation's actual completion time separately from the selected start. Check Support becomes True and baseline stays True. If the addition is still pending, keep that observation pending; an approval does not prove access was delivered.
3. At or after the end, find the removal activity and its final result, then verify Support becomes False and baseline stays True. The end initiates removal; do not claim native removal happened at the exact selected second. Save `AR-041-02.png` with before/during/after suffixes.
4. Refresh imported AD data and confirm the assignment is ended. If you missed the active window, record that observation as Not observed even if history shows successful provisioning. Repeat with a fresh window to complete the native three-boundary test.

**Check:** You have actual evidence for absence, presence and absence. If an operation failed, record its error and resolve it before another window.

### 3. Shorten a future window through My Access

1. After the first assignment is removed, submit another Henry request using the same steps and form, ticket `CHG-LAB-041-B`. Choose start **S** at least one day ahead and end **S + 4 hours**. Record actual timestamps; S is a journal label, not text to enter in the UI. Complete Ava and Evelyn's grant reviews.
2. Before S arrives, reopen Henry's **My Access > Access Profiles**. On Production Support, select **Edit** for its start date. Change the start to **S + 1 hour** and keep the original end **S + 4 hours**. Enter comments `AR-041 later start and shorter duration`, then **Save**. The resulting duration is three hours. Record the date-change request ID before switching sessions.
3. As administrator, inspect the new date-change request's **Process/Assignees/Details**. Capture the old/new dates and assignee before deciding. The request may be labeled **Modify / Access Date Change**; its approval route uses the configured removal approval because the start moved later and the total duration shortened. Ava is the removal reviewer; Security should not be a second removal stage.
4. As Ava, inspect the old/new dates in **Approvals > Access Requests > Requested**, approve the modification and confirm. Reopen Henry's assignment and verify the approved dates changed. Save `AR-041-03.png`. Verify Support is still False because the revised start is future.

**Check:** Editing a future assignment through My Access invoked removal review for this specific later-and-shorter change. A later start with unchanged or longer duration uses grant review instead.

### 4. Compare a Request Center date change

1. Before the revised start, as Henry re-request Production Support in **Request Center > Access Items > Access Profiles**. Use ticket `CHG-LAB-041-C` and comments `AR-041 Request Center date change`; complete the other form questions as before.
2. Set start **S + 2 hours**, end **S + 4 hours**. Save and review the two-hour window and existing target account, then submit. Record this new request ID.
3. As administrator, verify this route uses grant review even though the duration shortened. Capture the **Modify / Access Date Change** details and first assignee. As Ava, inspect the old/new dates and approve; confirm the next assignee is GOV-Security-Review, then have Evelyn approve the Security stage. Confirm the effective assignment now has the latest approved dates. Save `AR-041-04.png`.
4. Remove this future test assignment before leaving the lab using the steps below. Verify it is no longer scheduled and has no pending date-change request. If the start arrived while you were working, record any addition and verify its completed removal too.

**Check:** The effective dates match the second amendment, and its grant-review route is recorded separately from the My Access change.

### 5. Revoke the future control assignment

1. As Henry, open the home dashboard's **My Access > Access Profiles**, select `AP-Production-Support`, choose **Revoke Access Profile**, enter the lab number and `test complete`, then **Submit**. Record the removal request ID.
2. As Ava, open **Approvals > Access Requests > Requested**, open Henry's matching removal details, select **Approve**, enter `Lab access no longer needed`, and confirm.
3. As administrator, verify the revocation has completed and the future assignment is no longer scheduled. If access never provisioned, an AD group-removal operation may not be needed; do not wait for one as the only success criterion. If access did provision, follow [Account Activity](../../LAB-DESK.md#find-the-account-activity) for its removal. In both cases, use [the direct AD check](../../M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e018`: `GG-PROD-SUPPORT` False and `GG-ACME-BASELINE` True.
4. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data), then reopen Henry's Access and Accounts. Verify no Production Support assignment remains. Preserve his account and baseline role. If the assignment has already expired, inspect that removal instead of submitting a duplicate.

Save `AR-041-05.png` showing the ended/revoked future assignment, no pending amendment and final native checks.

**Check:** No future control assignment remains scheduled for Henry.

### 6. Handle a pause without claiming timed results

If you cannot observe the first window yet, leave its boundary results pending and continue to AR-042 with Olivia. Before reusing Henry in another grant test, complete the scheduled observation and removal, or revoke the assignment using the steps above and label the timed test Deferred. Cancel an unapproved pending request from **My Requests > Cancel**, add a reason and submit. Canceling a request is not a substitute for revoking an approved future assignment. Do not mark C07 fully passed while these observations are missing.

## Check the result

Verify all three timed native results and the two different date-change review routes. The original and amended windows must be ended or explicitly revoked, with no outstanding Henry request.

## Finish

Keep the seven-day date policy and existing form/review settings. Leave completed tests with Henry free of Production Support. If observing a live window later, retain its ID and mark it pending; do not reuse Henry until it is resolved.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-041-01.png | Approved future window with zones |
| AR-041-02.png | Three native boundary observations and actual operation times |
| AR-041-03.png | My Access modification and removal reviewer |
| AR-041-04.png | Request Center modification and both grant reviewers |
| AR-041-05.png | Future assignment revoked, no pending amendment and native cleanup |

[Previous: AR-040](../AR-040/README.md) · [Course outline](../../README.md) · [Next: AR-042](../AR-042/README.md)
