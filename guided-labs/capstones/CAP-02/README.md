# CAP-02 · Recover the access request service queue

In this capstone, you'll work six support reports, repair two controlled faults, and prove that a fresh grant, removal and denial work after your repairs.

[Attempt this capstone independently](../../../try-it-yourself/capstones/CAP-02.md) after completing its prerequisites.

## Before you start

Complete AR-070-075 and their cleanup, with AR-046-057 evidence available for the earlier incidents. Use Acme Admin, Taylor (`acme.e025`), Priya (`acme.e002`), Samuel (`acme.e024`) and your AD workstation. Keep the [lab desk](../../../reference/LAB-DESK.md), [practice tickets](../../../reference/PRACTICE-TICKETS.md) open. Prepare missing reviewer sessions through [AR-029](../../M05/AR-029/README.md#1-prepare-the-five-sessions-and-check-henry), substituting the named people and preserving the current HR file.

Remote Worker starts enabled/requestable with Priya as owner and direct Primary Owner grant/removal review. Taylor keeps his existing AD account with no VPN, Remote Users, disposable-group or baseline membership. All course developer subscriptions remain disabled.

## Follow the steps

### 1. Open and prioritize the queue

1. As Acme Admin, inspect **AP-Remote-Worker > Edit > Access Requests** and record its current owner, requestability, comments, forms, dates and grant/removal reviewers. Confirm its entitlements remain GG-VPN-USERS and GG-REMOTE-USERS. Resolve any earlier Taylor grant or pending request before injecting a fault.
2. Run [the direct AD check](../../../reference/M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e025`. Record the existing account DN/GUID and the four absent groups from Before you start. An unsuccessful query is not an absent membership.
3. Check the matching request, operation and target results directly. Set the first two to Planned until you reproduce them. For the others, use real saved evidence as Historical, or label a supplied report Synthetic when you have not observed it. Leave unknown IDs empty.

| Ticket | Report | Evidence to use |
|---|---|---|
| CAP02-01 | Taylor cannot find Remote Worker | Live reproduction in Section 2 |
| CAP02-02 | Taylor's review went to Samuel | Live reproduction in Section 3 |
| CAP02-03 | Approval completed but AD membership is absent | AR-046/048 decision, operation and native result |
| CAP02-04 | Access appears to remain after removal | AR-043/044 assignment origins and native result |
| CAP02-05 | Submission response was uncertain; should it be sent again? | AR-056 request history and duplicate checks |
| CAP02-06 | Only one item in the basket arrived | AR-073 per-item decisions and writes |

4. For each row, add affected person/account, reported time, observed state, current business impact, next check and responsible person. Prioritize an unresolved unwanted grant or failed removal by its actual impact. Historical cases are not current outages, and age alone does not prove a request is stuck.
<!-- AUTHOR_SCREENSHOT_START: CAP-02-01 -->

> **Author: Capture screenshot**
>
> **Filename:** `CAP-02-01.png`
>
> **Show:** Prioritized queue and clean Taylor account.

<!-- AUTHOR_SCREENSHOT_END: CAP-02-01 -->

Keep evidence labels visible.

### 2. Reproduce and repair the missing choice

1. As Acme Admin, open **Admin > Access Model > Access Profiles > AP-Remote-Worker > Edit > Access Requests**. Turn off requestability and Save. Keep the profile enabled and all other fields unchanged.
2. As Taylor, verify the username, then refresh **Request Center > Access Items > Access Profiles** and search AP-Remote-Worker. Record the result and time. If it remains visible, inspect the saved field and refresh the session before claiming the symptom was reproduced.
3. Check Taylor's existing assignments and pending requests, then compare them with the saved requestability field. Write why this field explains the symptom. No request ID is expected when no submission was possible; do not invent one.
4. Restore requestability to its original enabled value, Save, reopen and refresh Taylor's search. Require the profile to be selectable again. If not, use [AR-010's catalog checks](../../M02/AR-010/README.md) before changing unrelated settings.

   <!-- AUTHOR_SCREENSHOT_START: CAP-02-02 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `CAP-02-02.png`
   >
   > **Show:** Requestability fault and repaired catalog choice.

   <!-- AUTHOR_SCREENSHOT_END: CAP-02-02 -->
5. Mark this ticket Resolved only after the requester can see the repaired choice. Do not submit yet; the next section controls the temporary reviewer change.

### 3. Repair the owner and the existing task separately

1. On Remote Worker's configuration page, change only its owner from Priya to Samuel. Save/apply, reopen, and verify grant review still uses Primary Owner. Record Samuel's identity ID; his name alone is not enough to distinguish a similarly named identity.
2. As Taylor, follow [Submit a Remote Worker operations control](../../../reference/LAB-DESK.md#submit-a-remote-worker-operations-control), using reason `CAP-02 unexpected reviewer`. Treat Samuel as the deliberately configured owner and stop before a decision. Record the actual request ID/time.
3. As Acme Admin, open **Admin > Dashboard > Approval Management > Access Requests**, locate the exact Taylor request and inspect Process/Assignees. Compare its assigned reviewer with the saved owner. If Samuel did not resolve, inspect the effective policy/delegation and record the actual result; do not label an unobserved fault reproduced.
4. Restore the profile owner to Priya, Save/apply and reopen. Reopen the existing request separately. If it remains assigned to Samuel, select that task's **Assignees > Reassign**, choose Priya and comment `CAP-02 restore intended reviewer`. Confirm and inspect the audit. Do not choose Overwrite Current Approver; that action is not reassignment.
5. As Priya, inspect the now-assigned Grant in **Approvals > Access Requests > Requested** and deny with `CAP-02 diagnostic request complete`. Verify terminal denial, no pending operation and VPN/Remote Users False.

   <!-- AUTHOR_SCREENSHOT_START: CAP-02-03 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `CAP-02-03.png`
   >
   > **Show:** Owner change, existing-task handling and denial.

   <!-- AUTHOR_SCREENSHOT_END: CAP-02-03 -->

**Check:** Restoring a policy and resolving a request already in progress are separate actions. You have evidence for both.

### 4. Verify the repaired service with fresh requests

1. Reopen Remote Worker and confirm Priya owner, Primary Owner grant/removal review and requestability enabled. Submit a new Taylor request with reason `CAP-02 repaired grant` using the same operations submission steps. Record its own ID; do not reuse the denied request.
2. Inspect the resolved Priya task, then as Priya approve. Follow [Account Activity](../../../reference/LAB-DESK.md#find-the-account-activity) and require Taylor's VPN and Remote Users True on the recorded AD account. Save the grant portion of `CAP-02-04.png`.

   <!-- AUTHOR_SCREENSHOT_START: CAP-02-04 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `CAP-02-04.png`
   >
   > **Show:** Fresh approved grant and reviewed removal.

   <!-- AUTHOR_SCREENSHOT_END: CAP-02-04 -->
3. Follow [Remove a Remote Worker operations grant](../../../reference/LAB-DESK.md#remove-a-remote-worker-operations-grant), comment `CAP-02 repaired grant cleanup`. Have Priya approve Remove. Require both groups False, assignment gone and no pending write; preserve the same account. Save the cleanup portion of `CAP-02-04.png`.
4. Submit another Taylor request, reason `CAP-02 repaired denial`. As Priya, deny it. Verify the terminal decision and both native memberships remain False.

   <!-- AUTHOR_SCREENSHOT_START: CAP-02-05 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `CAP-02-05.png`
   >
   > **Show:** Fresh denial and absent native memberships.

   <!-- AUTHOR_SCREENSHOT_END: CAP-02-05 -->
5. If a control fails, record which stage failed and keep the relevant ticket open. Do not call the repair verified from a saved configuration alone.

### 5. Investigate the four remaining reports and hand over

1. For CAP02-03, open the saved request decision, then its Account Activity and native observation. Record whether the operation failed, had not yet completed, or targeted a different account. Follow the actual error and recovery already recorded in AR-046/048. A current successful connector does not erase a historical failure.
2. For CAP02-04, list the role, profile and direct assignments that supplied the reported group at the time. Compare their removal records with AD membership and aggregation times from AR-043/044. State whether the report shows retained native access or only an old ISC display. Do not delete current assignments to recreate a historical image.
3. For CAP02-05, use AR-056's recipient, item, account, reason and time-window lookup to identify any accepted request before proposing a retry. Separate the parent request, per-item rows and approval IDs. If the available evidence cannot establish whether a request was accepted, keep the retry decision Pending and name the missing lookup.
4. For CAP02-06, build one row per item from AR-073: item ID/type, approval result, activity, native result and cleanup. Do not describe the whole basket as failed because one item was denied. Record any currently unresolved access separately.
5. Give each report a disposition: verified live repair, historical resolved incident, intended behavior supported by evidence, or Pending with the next owner/check. Synthetic cases remain written investigations. If the required evidence is missing, leave the outcome unknown rather than filling it from an expected result.
6. Prepare one [AR-074 handover](../../M12/AR-074/README.md) with symptom, impact, actual IDs/timestamps, expected versus observed behavior, checks performed, narrow change and outstanding evidence. When there is no unresolved live issue, use a clearly labelled Synthetic evidence request. Do not invent a product defect or send the package automatically.
7. Verify Priya and the original request settings are restored. Confirm Taylor retains the same account with the four groups absent, no capstone assignments and no pending controls. Preserve Lucas VPN, all original baseline assignments, the complete 25-row HR file and later modules' saved policies.

   <!-- AUTHOR_SCREENSHOT_START: CAP-02-06 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `CAP-02-06.png`
   >
   > **Show:** Final six-ticket dispositions, handover and restored settings.

   <!-- AUTHOR_SCREENSHOT_END: CAP-02-06 -->

## Check the result

The two live faults have demonstrated causes and verified repairs. Fresh grant/removal and denial work. All six reports have an evidence-supported disposition; missing evidence and unresolved work remain explicit.

## Finish

Leave Remote Worker enabled/requestable with Priya and its original policies. Leave Taylor clean, developer subscriptions disabled and every unresolved report assigned to a named next action. Keep Historical and Synthetic labels in the final handover.

[Course outline](../../../README.md) · [Guided Lab Map](../../README.md) · [Practice path](../../../reference/PRACTICE-PATH.md)
