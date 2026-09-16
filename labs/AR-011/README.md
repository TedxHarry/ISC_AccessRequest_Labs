# AR-011 · Require a reviewer and a business reason

<a id="goal"></a>

In this lab, you'll configure Priya as the VPN reviewer, submit Lucas's request with a reason and leave it pending for AR-012.

## Before you start

Keep the [Module 2 starting checks](../../M02-READINESS.md) beside your journal.

Complete [AR-010](../AR-010/README.md). Use Acme Admin, Acme Lucas (`acme.e012`) and Acme Priya (`acme.e002`) as separate sessions. Keep your [journal](EVIDENCE.md) open.

VPN is requestable and owned by Priya. Lucas has baseline access but no VPN grant or pending VPN request. Recheck his **Access**, **My Requests** and [native membership](../../M02-CHECKS.md#inspect-direct-ad-membership). Do not submit if an earlier request is already pending.

If you are returning after a break, read [where to resume](#if-you-stopped-after-submitting) before changing settings or submitting a request.

## Follow the steps

### 1. Set the item's approval policy

Use Acme Admin.

1. Open **Admin > Access Model > Entitlements**. Find `GG-VPN-USERS` by its recorded source and DN.
2. Select **Actions > Edit**, then **Access Requests**. Record existing approval, comment, form, date and escalation settings.
3. Keep **Allow Access Requests** enabled.
4. Under **Reviewing Access Requests**, select **Require Approval**, then **Reviewer**.
5. In **Select Reviewers**, choose **Primary Owner** and use the add control. Keep one reviewer row for this dedicated course item; remove extra rows using their X controls. Verify its primary owner is Priya (`acme.e002`).
6. Under **Require Comments**, enable comments when **User requests** and when **Approver denies**.
7. For this immediate-access exercise, leave **Require Access Request Form** and **Require End Date** off. Keep approval routing as Reviewer, not Workflow. Record timeout/escalation settings so you know whether a pending request could expire or change assignee.
8. Select **Save**, leave the page and reopen it to verify the saved values.

If enforced tenant controls prevent these settings, resolve that prerequisite for the course item before submitting. Do not weaken tenant-wide controls. An unchecked item approval box can still inherit approval; this lab explicitly selects the item's reviewer. Globally required comments still apply even if an item leaves those options unchecked.

**Check:** VPN has one Primary Owner reviewer and required request/denial comments. Priya reviews because she owns VPN; Daniel's manager relationship is not the reviewer selected here.

**Screenshot:** `AR-011-01.png`: saved owner, reviewer and comments configuration.

### Check the required-comment control

In Lucas’s Request Center, choose Request for Myself if prompted, open Access Items > Entitlements, find VPN and select it. Leave the comment empty in Edit Request Details and try **Save**. Record the validation or disabled control as `AR-011-06.png`. If a request unexpectedly submits, locate it in My Requests before doing anything else. Otherwise cancel the unfinished details and clear the item selection, then follow Section 2 to submit the valid request.

### 2. Submit one request as Lucas

1. Switch to Acme Lucas and confirm `acme.e012` in the user menu.
2. Open **Request Center**. Choose **Request for Myself** if an audience choice appears.
3. Open **Access Items > Entitlements**, search `GG-VPN-USERS`, and open **Details** to confirm its source and description.
4. Use **Select** to add the item. In **Edit Request Details**, enter `AR-011: Remote access for the Finance lab` as the comment.
5. Keep access immediate; do not set a future start or end date. If account selection appears, choose Lucas's standard AD account by the recorded DN.
6. Select **Save** for the request details. Select **Review Request** and check that only VPN is selected for Lucas.
7. Select **Submit Request** once.
8. Open **My Requests** and locate this submission. Record its status, submission time and identifier where displayed. If the identifier is not exposed here, obtain it from administrator details in Section 4.

**Check:** The request was accepted for Lucas and contains the reason. It is awaiting review; do not approve it yet.

**Screenshots:** `AR-011-02.png`: completed reason before submission. `AR-011-03.png`: submitted request details.

### 3. Inspect Priya's pending review

1. Switch to Acme Priya and verify `acme.e002` in the user menu.
2. Open **Approvals > Access Requests > Requested**.
3. Open Lucas's VPN request. Match the recipient, item and submission time.
4. Confirm the action is **Grant** and inspect the reason. Do not select Approve or Deny.

**Check:** Priya has the intended pending Grant request with Lucas's reason.

**Screenshot:** `AR-011-04.png`: Priya's pending review and reason.

### 4. Match the administrator view and target

1. In Acme Admin, open **Admin > Dashboard > Approval Management > Access Requests**.
2. Open the same request. Inspect **Process**, **Assignees** and **Details**.
3. Record the request ID and actual assignee Priya. Match recipient, item and time with Lucas's view.
4. Repeat the native VPN check for Lucas on the same controller. Confirm membership remains absent.

**Check:** One identified request is pending with Priya and has not granted VPN.

**Screenshot:** `AR-011-05.png`: administrator process/assignee and pending target state.

## Check the result

### If the result differs

If Priya's queue is empty, check her signed-in username and the request's actual assignee and submission time. Inspect whether the request predates the saved policy. Do not grant extra user levels or submit duplicates to find the request.

### Explain the result

Record the configured reviewer category and the resolved person separately. Explain why a pending request and a provisioned group membership are different outcomes.

### Final verification

- [ ] VPN reviewer and comment settings persisted.
- [ ] One Lucas request is identified across requester, reviewer and administrator views.
- [ ] Priya has the pending Grant request and its reason.
- [ ] Lucas has no VPN membership yet.

## Engineering practice

### Your ticket: Priya's queue is empty

Supplied case: VPN now names Primary Owner, but administrator details show Daniel assigned on a request submitted before the policy edit. What would you compare before changing permissions?

<details>
<summary>Compare your answer with the mentor's solution</summary>

Compare the request's item, creation time and actual assignee with the saved configuration and edit time. Verify Priya's session. An older request does not prove a newly saved policy failed. Account for the existing request before using a fresh request to test the new configuration. Do not grant Priya administrator rights or override the approval to make the test pass.

</details>

## Finish

### Leave this in place

Keep this exact request pending and continue to AR-012. If its status changes while you are away, inspect the recorded request before taking another action. A saved screenshot does not mean it is still pending.

[Entitlement controls](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html) · [Request Center procedure](https://documentation.sailpoint.com/saas/user-help/requests/request_center.html)

<a id="what-to-leave-in-place"></a>

<a id="practice-completion"></a>

<a id="if-you-already-completed-this-configuration"></a>

### If you stopped after submitting

Find the recorded request before submitting again. If still pending with Priya, continue in AR-012. If it completed, inspect the actual decision and AD result and label missed observations historical. If it expired or was canceled, verify no active duplicate or VPN grant remains, then submit one replacement with a repeat label. Record both identifiers. Screenshots do not keep a request pending indefinitely.

### Screenshots to capture

Capture these at the matching steps. Use extra images when needed to show all evidence. Exclude credentials, invitation links and private mailbox details.

| Filename | What to show |
|---|---|
| AR-011-01.png | Owner, reviewer and required comments |
| AR-011-02.png | Completed reason before submission |
| AR-011-03.png | Submitted request details |
| AR-011-04.png | Priya pending Grant review |
| AR-011-05.png | Administrator process and actual assignee |
| AR-011-06.png | Required-comment validation before the valid submission |

[Previous: AR-010](../AR-010/README.md) · [Course outline](../../README.md) · [Next: AR-012](../AR-012/README.md)
