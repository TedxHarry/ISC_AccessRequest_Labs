# CAP-03 · Deliver temporary Production Support

In this capstone, you'll build a separate Production Support request, test recipient eligibility and ordered reviews, and observe access start and expire on the actual AD account.

## Before you start

Complete AR-034–041, AR-049 and AR-058–063, including their cleanup. Native access-request forms, start/end dates and Adaptive Approvals are required. If a capability is missing, record this capstone Not run; a custom form date or ordinary workflow is not a replacement.

Use Acme Admin, Henry (`acme.e018`, Engineering, manager Ava), Liam (`acme.e008`, IT, manager Priya), Olivia (`acme.e011`, Finance, manager Daniel), Ava, Priya, Evelyn (`acme.e021`) and your AD workstation. Keep the current complete private HR file, a mailbox you control and your [journal](EVIDENCE.md). The earlier Production Support form and GOV-Security-Review exist from the prerequisite labs; the capstone profile and workflow will be created below.

## Follow the steps

### 1. Save the environment and prepare clean recipients

1. In **Admin > Identity Management > Identities**, check Henry, Liam and Olivia's department, manager and standard AD account. Resolve any earlier Production Support assignment or scheduled request before starting. Prepare any missing sign-in using [AR-029](../../../Labs_Happypath/AR-029/README.md#1-prepare-the-five-sessions-and-check-henry), preserving the complete HR file.
2. Run [direct AD membership checks](../../../M02-CHECKS.md#inspect-direct-ad-membership) for all three accounts: GG-PROD-SUPPORT=False, GG-ACME-FAULT-049=False and GG-ACME-BASELINE=True. Record their DN/GUIDs. Inspect their assignments to confirm no automatic path supplies either test group. Preserve Olivia's other access and Lucas's VPN.
3. Record AP-Production-Support's current workflow/form/date/removal settings without changing them. AR-063 normally leaves WF-Acme-AR058 attached; do not assume the earlier direct Manager-then-Security route is still selected. Keep all course developer subscriptions disabled.
4. Record **Admin > Global > System Settings > Feature Settings > Access Requests > Requests on Behalf**, including its current mode. Keep that value for restoration. Verify **GOV-Security-Review** still contains Noah, Evelyn and William, with no active course delegation that would mask the intended reviewer test.
5. Open **Admin > Access Model > Access Profiles > Create New** and create `AP-CAP03-Eligibility-Control`, owner Ava, description `Isolated CAP-03 eligibility test`, source your AD source, sole entitlement GG-ACME-FAULT-049. Enable/requestable, require request/denial comments, one Primary Owner/Ava grant and removal reviewer, no form or date requirement. Save/apply. Keep it outside segments, applications and automatic roles. Reuse its definition on a repeat after checking cleanup.
6. Save `CAP-03-01.png` with original settings, the isolated control and clean accounts.

### 2. Build the recipient check and ordered review

1. Open **Admin > Workflows > Create Workflow > Start in the Workflow Builder**. Name it `WF-Acme-CAP03-Support`. Select the native **Access Request Submitted** trigger. Keep it unattached while building.
2. Add **Get Identity**, name `Get Recipient`. Select **Trigger > requestedFor > id** with the variable picker. Include `attributes.department` in Additional Output Data when needed. Keep the generated path for this actual step; requestedBy is the requester, not necessarily the recipient.
3. Add **Verify Data Type** for the fetched department, first **Exists**, then on the matching branch **Is a string**. Route either failed check to **End Steps > Failure**, name `Missing Department`, details `Recipient department unavailable or invalid`.
4. On the valid-string branch add **Compare Strings**, Value 1 the fetched department, Equals static `Engineering`. Connect its matching branch to the Approval Policy below. Connect its non-matching branch to another Compare Strings for Equals static `IT`. Connect that match to the same Approval Policy. Route the second non-match to **End Steps > Failure**, name `Not Support Eligible`, details `Recipient is neither IT nor Engineering`. Empty strings take this non-matching route.
5. Configure **Approval Policy** with **Approval Type Multi-Step**, **Approval Scheme Serial**. In Add Reviewers, add **Manager**, then **Governance Group: GOV-Security-Review**, and drag into that order. Keep Priority Medium, Reminder No, Timeout 2 days, Action at Timeout Expire. Connect policy output to **End Steps > Success**. Save/validate the complete canvas.
6. Enable this workflow and attach it only to **AP-CAP03-Eligibility-Control > Edit > Access Requests > Require Approval > Workflow**. Keep Primary Owner/Ava for removal. Reopen the saved association.

**Check:** A named Failure is a proposed eligibility stop whose actual request outcome still needs testing. Do not put the trigger's accessRequestId into Deny Access Request: that action requires an approval ID. [Workflow action inputs](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html#deny-access-request)

### 3. Accept the gate on the disposable group first

1. As Olivia, select AP-CAP03-Eligibility-Control in **Request Center > Access Items > Access Profiles**, enter `CAP-03 Finance gate test`, then **Save > Review Request > Submit Request** once. Record the request ID.
2. As Acme Admin, match its **WF-Acme-CAP03-Support > Executions** entry. Require requestedFor/Get Recipient=Olivia, department Finance and the intended Not Support Eligible branch. In Approval Management and Account Activity, require a terminal request, no pending review/write and native FAULT=False. Record the actual request status; a workflow Failure alone does not pass this test.
3. Back up the latest complete private HR file. In a working copy clear only Liam E008's department. Import the complete copy through Acme HR's account import/aggregation procedure in [AR-061 Section 4](../../../Labs_Happypath/AR-061/README.md#4-test-missing-data-and-immediately-restore-hr), preserving every row including Taylor and controlled email values. Wait for identity processing, then inspect Liam's actual department.
4. If it is now absent, null or blank, submit the control as Liam with reason `CAP-03 missing department`. Verify Get Recipient's actual value, the intended failure branch, terminal no-access request, no pending review/write and native FAULT=False. An absent/null value and an empty string can take different branches; record which one occurred. If a fallback still supplies IT, the missing-data case is Not tested.
5. Immediately restore/import the saved complete HR file, even after an error. Verify Liam is IT again and the original row count and other values remain. Save `CAP-03-02.png` for both gate outcomes and HR restoration.
6. If either stop is unproven, stop rollout here. Restore the control's direct Primary Owner review for future requests; cancel an eligible pending diagnostic request through its requester's My Requests, or have its actual reviewer deny an actionable task. Inspect and remove any unexpected grant with reviewed profile removal. Record unresolved IDs, disable requestability and complete Finish. Do not attach this unaccepted gate to the service profile.
7. With both gate cases accepted and Liam restored, submit the control as Henry, reason `CAP-03 inspect decision output`. Verify the Engineering branch reaches Manager/Ava. Have Ava deny it. Record the policy's actual status field/path and approval ID from this execution, and verify native FAULT=False. This supplies the real output used in the notification steps.

### 4. Add decision messages and create the service profile

1. Edit WF-Acme-CAP03-Support after the diagnostic requests finish. Replace the Approval Policy-to-Success connection with **Compare Strings**: select this policy's actual status via the variable picker, Equals static `APPROVED`.
2. Follow only [AR-063 Section 2](../../../Labs_Happypath/AR-063/README.md#2-add-the-comparison-and-two-message-branches) to add the two Send Email branches and templating context to this workflow. Use your controlled mailbox, subjects `CAP-03 approval decision` and `CAP-03 decision outcome`, and this workflow's actual policy path from Section 3. Keep both branches connected to Success. Do not reattach or edit WF-Acme-AR063. The messages report the actual review decision, not fulfillment; the earlier eligibility-failure branches have no approval decision and send no review-decision message.
3. Create **AP-CAP03-Production-Support**, owner Ava, description `Temporary lab support for IT and Engineering`, source your AD source, sole entitlement GG-PROD-SUPPORT. Keep it outside automatic roles and segments for the recipient tests. Enable/requestable and require request/denial comments.
4. Under **Edit > Access Requests**, set grant approval to Workflow WF-Acme-CAP03-Support. Set **Require Approval for Removal > Primary Owner**, add Ava's owner category with **+**, and save. Attach existing **FORM-Acme-Production-Support**, enable **Require End Date**, maximum **7 Days**. Reopen all saved selections. Keep the original AP-Production-Support unchanged.
5. Inspect the form in **Admin > Global > Forms**: Change ticket, Environment and Work description required; Rollback plan remains optional and is shown for Production as configured in AR-036. Its presence is a reviewer check, not conditional-required field validation. If its prerequisite configuration is incomplete, finish those labs before continuing. Do not remove the required form to make a submission pass.
6. As Henry, open the capstone service in Request Center. Fill Environment Production and Work description `Validate temporary support`, leave Change ticket empty and try to continue. Record the required-field error. Enter `CHG-CAP03-VALIDATE` and verify Test hides Rollback plan while Production shows it. Leaving this optional field empty should not produce a required-field error. Enter rollback `Verify scheduled removal`; test a blank standard end, then an immediate request ending eight days ahead. Record the required-date/default behavior and excessive-duration rejection. Remove the unsent item from the review page before the next case. Save `CAP-03-03.png`.

**Check:** The form collects a ticket reference. It does not verify that ticket against a change-management system. The standard date controls enforce the duration; no custom duration question substitutes for them.

### 5. Prove both allowed departments and the review order

1. Use Liam for the immediate IT case. In his **Request Center > Access Items > Access Profiles**, select AP-CAP03-Production-Support, reason `CAP-03 IT approved`, ticket `CHG-CAP03-IT`, Environment Production, Work description `Verify IT eligibility`, Rollback plan `Remove after native verification`. Leave start empty and choose an end tomorrow within seven days. Save, Review Request, verify Liam/standard account and Submit Request.
2. Inspect the execution: requestedFor/Get Recipient=Liam, department IT, first review Manager/Priya. Before any decision, record Priya's actionable task and Evelyn's later-stage state. As Priya, approve the matching Grant. Before Security acts, require GG-PROD-SUPPORT=False.
3. As Evelyn, open the now-actionable governance-group task under **Approvals > Access Requests > Requested** and approve. Inspect the policy decision, delivered approval email and Account Activity separately. Require native Support=True, baseline=True. Save `CAP-03-04.png` with both stages, email and native grant.
4. As Liam, open **My Access > Access Profiles > AP-CAP03-Production-Support > Revoke Access Profile**, reason `CAP-03 IT cleanup`, and submit. As Ava, approve Remove; she is this profile's owner even though Priya is Liam's manager. Follow the operation, refresh imported data and require Support=False and assignment gone.
5. With Henry clean, submit the same service for Henry, reason `CAP-03 Engineering denial`, ticket `CHG-CAP03-DENY`, matching valid form answers and end tomorrow. Verify Engineering reaches Ava. Have Ava approve the first stage, then Evelyn deny Security with `CAP-03 maintenance not approved`. Require terminal denial, no Support grant and the delivered message containing the actual non-approved policy status. Save `CAP-03-05.png`.
6. Submit one fresh Henry request with reason `CAP-03 missing rollback`, ticket `CHG-CAP03-ROLLBACK`, Production, a valid description/end tomorrow and Rollback plan deliberately blank. As Ava, inspect the empty answer and deny with `Production work needs a rollback plan`. Verify the actual denial, decision message and Support=False. Add this panel to `CAP-03-05.png`. If submission was blocked, inspect the saved field/conditions against AR-036; record the different behavior rather than claiming a reviewer-enforced case occurred.

### 6. Check the recipient when someone else requests

1. After the earlier requests are resolved, temporarily set **Requests on Behalf > By Everyone for Anyone** on the page recorded in Section 1. Save and refresh Henry's and Olivia's sessions. Keep the capstone service outside segments so a catalog restriction cannot mask the recipient test.
2. As Henry, choose **Request Center > Request for Others > Olivia > Request for These Identities**. Select only AP-CAP03-Production-Support; reason `CAP-03 Henry for Olivia`, ticket `CHG-CAP03-INELIGIBLE`, valid Production answers and end tomorrow. Review the recipient/account and submit.
3. Inspect requestedBy=Henry but requestedFor/Get Recipient=Olivia and Finance. Require the accepted stop, an actual terminal no-access request, no pending review/write and Olivia's Support=False. Record its actual status instead of calling it reviewer denial. Save `CAP-03-06.png`.
4. As Olivia, request the same profile for Henry, reason `CAP-03 Olivia for Henry`, ticket `CHG-CAP03-RECIPIENT`, valid answers and end tomorrow. Verify requestedBy=Olivia, requestedFor/Get Recipient=Henry and Engineering, reaching Ava. Have Ava deny this diagnostic review and verify Henry remains clean. This proves the eligible recipient can reach review even when the requester is Finance; it does not claim a grant for this case.
5. Restore the original Requests on Behalf setting immediately and reopen it. If a gate test failed, do not continue to a real scheduled grant: resolve the request, remove any unexpected access and follow Finish. Save the restoration alongside `CAP-03-06.png`.

### 7. Observe Henry's approved future window

1. With Henry clean and on-behalf settings restored, choose a start at least one hour ahead and an end two hours after that start, at times you can actually observe. Move the window later if the two reviews need more time. Record full timestamps, time zone and date-specific UTC offsets; these are observation windows, not estimated lab duration.
2. As Henry, select the capstone service for himself. Enter `CAP-03 scheduled Engineering`, ticket `CHG-CAP03-WINDOW`, Production, description `Observe temporary lab support`, rollback `Verify expiry and remove manually through ISC if the scheduled operation fails`. Set the standard start/end to the recorded window. Save, Review Request, reopen details to verify the times/account, then Submit Request.
3. Inspect the Engineering branch and have Ava approve, then Evelyn approve Security. Record both decision times, the approval email and saved assignment dates. Both reviews must finish before the selected start. If they do not, revoke that assignment using step 6 and repeat with a fresh future window.
4. Before start, run the native check and record Support=False. At/after start, follow Account Activity and record the actual add completion time, then Support=True. At/after end, locate the actual removal result and record Support=False and baseline=True. Save `CAP-03-07.png` with a timestamped panel for each boundary. The selected deadline and actual AD completion time are separate values.
5. Refresh imported AD data and verify the assignment ended. If you missed the active boundary, record Not observed and repeat a fresh window later; successful history alone is not the missing native observation. An unobserved expiry remains Pending.
6. To pause or recover a failed timed test, Henry uses **My Access > Access Profiles > AP-CAP03-Production-Support > Revoke Access Profile**; Ava approves Remove. Verify the future assignment is no longer scheduled, and any provisioned access is removed. Label that case Manually revoked, not successful automatic expiry. Cancellation of an unapproved request is not removal of an approved scheduled assignment.

### 8. Compare a date amendment and restore the course state

1. After the timed case is clean, submit another Henry request with reason `CAP-03 shorten future window`, ticket `CHG-CAP03-AMEND`, the same valid form answers, start S at least one day ahead and end S + 4 hours. Record actual dates in place of S. Complete Ava then Security review.
2. Before S, in Henry's **My Access > Access Profiles > AP-CAP03-Production-Support**, edit start to S + 1 hour and keep end S + 4 hours. Comment `CAP-03 later start and shorter duration`. Submit and inspect the modification's actual Process/Assignees. As in [AR-041 Section 3](../../../Labs_Happypath/AR-041/README.md#3-shorten-a-future-window-through-my-access), this specific later-and-shorter change uses removal review. Have Ava approve, verify the revised dates and Support=False.
3. Revoke this future assignment through the profile removal route, have Ava approve Remove and verify no scheduled assignment remains. If its start arrived during the exercise, inspect any add operation and confirm its removal too. Save `CAP-03-08.png` with the modification, reviewer and cleanup.
4. Verify Henry, Liam and Olivia have neither capstone assignment nor pending request and Support/FAULT=False, baseline=True. Recheck Liam's department IT, the complete HR file, original on-behalf setting and Lucas's VPN.
5. Once all requests/executions are accounted for, turn off requestability and disable both CAP03 profiles, then disable WF-Acme-CAP03-Support. Keep definitions/IDs for a repeat. Confirm original AP-Production-Support and WF-Acme-AR058 (or your recorded original association) still match Section 1; preserve the shared form, governance group and source.
6. In the journal, hand over IDs, entitlement/source, gate paths, reviewer order, form keys, dates/zones, delivered messages, each test outcome and the restoration state. This capstone proves its dedicated request entry point only. Other profiles, roles, direct entitlements and manual grants need their own controls; do not claim tenant-wide support eligibility from one profile. Save `CAP-03-09.png`.

## Check the result

Both allowed departments reach the correct manager and Security review. Finance and missing department have accepted no-access outcomes before rollout. The form/date checks, actual decision messages, native start/expiry observations and amendment/removal are evidenced separately. Any untested or unaccepted requirement remains visible in the handover.

## Finish

On completion or an early stop, restore the full HR file and original on-behalf setting first. Resolve or explicitly hand over outstanding requests, and remove unexpected/test grants through their recorded assignment path. Disable capstone requestability, profiles and workflow once all executions are resolved. Preserve the earlier service and shared definitions. Do not mark the capstone Passed while a gate, required message or timed observation remains unproven.

### Screenshots to capture

Capture these beside the matching steps. Add letter suffixes for multiple panels. Hide credentials and unnecessary personal data; label historical, synthetic and unobserved results accurately.

| Filename | What to show |
|---|---|
| CAP-03-01.png | Original settings, isolated control and clean recipients |
| CAP-03-02.png | Non-Finance/missing-data outcomes and restored HR |
| CAP-03-03.png | Workflow, form/date settings and validation results |
| CAP-03-04.png | IT manager/Security approval, notification and grant/removal |
| CAP-03-05.png | Engineering Security denial and actual decision message |
| CAP-03-06.png | On-behalf recipient checks and restored global mode |
| CAP-03-07.png | Scheduled before/during/after native evidence with times |
| CAP-03-08.png | Date amendment, removal reviewer and future-assignment cleanup |
| CAP-03-09.png | Final disabled capstone definitions and support handover |

[Course outline](../../../README.md) · [Choose a path](../../../Labs_Happypath/README.md) · [Practice path](../../../PRACTICE-PATH.md)
