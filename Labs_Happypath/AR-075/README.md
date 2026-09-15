# AR-075 · Run an IAM support shift and save C12

In this lab, you'll work six support reports, repair two controlled configuration faults, and verify a fresh grant and denial before handover.

## Before you start

Complete [AR-074](../AR-074/README.md). Use Acme Admin, Taylor, Priya, Samuel and the AD workstation. Remote Worker is enabled/requestable with Priya as Primary Owner reviewer; Taylor is clean. Keep earlier journals, the [practice tickets](../../PRACTICE-TICKETS.md) and your [journal](EVIDENCE.md) open. All course developer subscriptions stay disabled.

## Follow the steps

### 1. Build the six-ticket queue

1. Copy the reports below into the journal. Use your actual earlier evidence where available. Label a report Historical or Synthetic if it is not currently occurring. Leave unknown IDs empty and name the lookup needed.

| Ticket | Report for this shift | Evidence to start with |
|---|---|---|
| T01 variant | Taylor cannot find Remote Worker | Live visibility exercise below |
| T13 variant | A new Remote Worker review went to Samuel | Live owner exercise below |
| T25 | Approval completed but membership is absent | AR-046/048 decision and operation |
| T23 | Access appears to remain after removal | AR-043/044 assignment origin and native checks |
| T31 | A submission response was uncertain; should it be sent again? | AR-056 request history and duplicate evidence |
| T39 | Only one item in a basket arrived | AR-073 per-item table |

2. For each report, record requester, recipient, item/account, reported time, actual observed state, impact, next check and responsible person. Order by current impact and unresolved access, not just by ticket number.
3. Save `AR-075-01.png` with the initial queue. Do not turn a historical failure into a live outage to fill a ticket.

**Check:** Six reports are ready for investigation, and their evidence status is explicit.

### 2. Repair the missing-catalog case

1. Verify Taylor has no Remote Worker assignment or pending request. Save Remote Worker's current requestability and all review settings.
2. As administrator, open **Admin > Access Model > Access Profiles > AP-Remote-Worker > Edit > Access Requests**. Turn off requestability and Save. Keep the profile definition enabled and leave its owner, entitlements and reviewers unchanged.
3. Refresh Taylor's Request Center, open Access Items > Access Profiles and search the exact name. Record the missing choice. If it remains visible, reopen the saved setting and refresh the session before declaring the fault reproduced.
4. Compare the administrator's saved requestability with Taylor's session and current assignments. Restore requestability to its original enabled value, Save and reopen. Refresh Taylor's search and verify the profile is visible again. Do not submit yet. Save `AR-075-02.png` with before/fault/repair evidence.

**Check:** The exact changed setting explains the catalog result. No access was granted by restoring visibility.

### 3. Repair the unexpected-reviewer case

1. Save Priya's original owner ID. Change only Remote Worker's owner to Samuel (acme.e024), save/apply and reopen. Keep the grant reviewer selection Primary Owner.
2. As Taylor, submit `AR-075 unexpected reviewer` using [the operations submission steps](../../LAB-DESK.md#submit-a-remote-worker-operations-control), treating Samuel as the deliberate temporary owner. Stop before deciding.
3. Return to Acme Admin. Open **Admin > Dashboard > Approval Management > Access Requests**, locate Taylor's recorded request, and open Process/Assignees. Compare the resolved reviewer with the saved owner. Record Samuel if assigned; if not, inspect the actual saved policy rather than claiming the intended fault occurred.
4. Restore Priya as profile owner and reopen the settings. Inspect the pending task separately. If it remains with Samuel, use **Assignees > Reassign** on that row, select Priya, comment `AR-075 restore intended reviewer`, and confirm. Record the event. If already with Priya, record that observation.
5. As Priya, deny the matching Grant with `AR-075 repair control complete`. Verify terminal denial and VPN/Remote Users False. Save `AR-075-03.png`.

**Check:** The profile is repaired and the existing task is resolved separately.

### 4. Run fresh controls and finish the other tickets

1. With original settings restored, submit a new Taylor request, reason `AR-075 post-repair grant`. Verify Priya receives it, have Priya approve, follow Account Activity and verify VPN/Remote Users True.
2. Complete [Remote Worker removal](../../LAB-DESK.md#remove-a-remote-worker-operations-grant), comment `AR-075 post-repair cleanup`, including Priya's removal approval and native/assignment absence.
3. Submit another Taylor request, reason `AR-075 post-repair denial`. Verify Priya and have her deny. Confirm no membership or pending review. Save `AR-075-04.png`.
4. For the remaining four reports, use the cited journals to write verified resolution, intended behavior or Pending with the exact missing evidence. Do not state that a paper investigation repaired a live system.
5. Use the AR-074 format for one handover. If no unresolved service fault exists, write an internal evidence request for a Synthetic report, labelled accordingly; identify the specific data needed. Do not invent a product defect or send a case automatically.

**Check:** Fresh grant/removal and denial prove the restored route. The other tickets have evidence-based dispositions.

### 5. Save C12 and verify the final state

1. Record each ticket's disposition, evidence, owner and next action in the journal. Include the two faults' exact before/after settings, request IDs and fresh control results. Mark any unexecuted case Not run.
2. Reopen Remote Worker: Priya owner, direct Primary Owner grant/removal review, enabled/requestable, original reason/form/date configuration and VPN/Remote Users entitlements. Confirm the disposable entitlement from AR-073 is non-requestable with its original owner/settings.
3. Verify Taylor retains the same account, lacks VPN/Remote/disposable/baseline membership, and has no pending diagnostic work. Preserve Liam baseline, Lucas VPN, the complete private HR file, source scopes and restored AD permissions.
4. If Modules 10/11 were executed, retain their recorded native workflow policies and disabled subscriber/test-profile definitions. Do not assume Production Support still uses the earlier Manager-then-Security route.
5. Save `AR-075-05.png` with C12 and final configuration/native evidence. Restore either injected setting before pausing; if a request/write cannot be resolved, leave it Pending with IDs and the next responsible person.

**Check:** The handover records actual results and leaves a known starting state for the next feature track.

## Check the result

Both configuration faults have before/after proof, fresh grant/removal and denial pass, and all six reports have a justified disposition. C12 identifies unresolved work without claiming it was fixed.

## Finish

Keep C12 and the handover, original profile owners/settings, disabled course subscriptions and clean Taylor access. AR-076 begins the SoD feature track when that capability is available. Carry forward explicitly pending cases rather than calling the course tenant fully verified.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when a result needs several images. Label historical and synthetic evidence separately from current tenant observations.

| Filename | What to show |
|---|---|
| AR-075-01.png | Prioritized six-ticket queue |
| AR-075-02.png | Catalog fault and repaired visibility |
| AR-075-03.png | Owner fault, task handling and denial |
| AR-075-04.png | Post-repair grant/removal and fresh denial |
| AR-075-05.png | C12 final settings, memberships and pending-work record |

[Previous: AR-074](../AR-074/README.md) · [Course outline](../../README.md) · [Next: AR-076](../../labs/AR-076/README.md)
