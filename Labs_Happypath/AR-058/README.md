# AR-058 — Attach and verify a native approval workflow

In this lab, you'll build a manager approval workflow, attach it to Production Support and prove approval and denial with Henry.

## Before you start

Use the completed AR-029 request/removal setup and resolve Henry's earlier pending or scheduled requests. C09 is useful but API credentials are not required. Use Acme Admin, Henry (`acme.e018`), Ava (`acme.e006`) and the AD workstation. Your tenant needs Adaptive Approvals with the native Access Request service. Open your [journal](EVIDENCE.md); you will create the workflow here.

## Follow the steps

### 1. Check the capability and save the original policy

1. Open **Admin > Workflows > Create Workflow > Start in the Workflow Builder**. Confirm the native **Access Request Submitted** trigger and **Approval Policy** action under Access Request Actions are available. Ordinary Workflows or Generic Approval Policy alone is insufficient.
2. In another tab, open **Admin > Access Model > Access Profiles > AP-Production-Support > Edit > Access Requests**. Confirm approval can use **Workflow**. If these native features are unavailable, leave the existing reviewers unchanged, record Capability unavailable, stop this module and choose an available [practice track](../../PRACTICE-PATH.md). Access Request Decision or a developer subscription is not a replacement for this trigger.
3. Save the profile ID, original grant reviewer order, removal policy and form/date settings. The earlier control uses Manager then GOV-Security-Review for grant and Primary Owner/Ava for removal. Preserve the required form and seven-day maximum if configured.
4. Verify Henry's manager is Ava, both sessions work, and Henry has one standard account with no Support assignment or pending/future request. Run [native checks](../../M02-CHECKS.md#inspect-direct-ad-membership): GG-PROD-SUPPORT False and GG-ACME-BASELINE True. Save `AR-058-01.png`.

**Check:** You have the required capability, a clean requester and a before-record for restoration.

### 2. Build and attach the single-reviewer workflow

1. Name the workflow `WF-Acme-AR058`, description `Acme Production Support manager review`. On a repeat, inspect the existing named course workflow instead of creating another copy.
2. Add **Access Request Submitted** as trigger. Add **Actions > Access Request Actions > Approval Policy**. Set **Approval Type: Single**, **Reviewer Category: Manager**, **Priority: Medium**, **Reminder: No**, **Timeout: 2 days**, **Action at Timeout: Expire**.
3. Add **End Steps > Success** and connect Trigger → Approval Policy → Success. Save each step and the workflow. Resolve validation errors. Do not add an unconditional Approve Access Request action after the policy.
4. On **Admin > Workflows > Manager**, set this workflow's Status to Enabled and record its ID. Edit Production Support's **Access Requests**: require grant approval, choose Workflow, select WF-Acme-AR058 and save. Keep removal approval Primary Owner/Ava.
5. Reopen the profile to verify association, form and date settings. Save `AR-058-02.png`.

**Check:** This enabled workflow is attached to this exact profile. Success marks workflow completion; it does not itself mean approval.

### 3. Submit a complete request and inspect its execution

1. As Henry, open **Request Center > Access Items > Access Profiles**, select AP-Production-Support and enter reason `AR-058 approve control`. If a form is required, enter ticket `CHG-LAB-058`, environment Production, description `Verify native manager approval`, rollback `Revoke the profile after verification`, and leave optional notes empty.
2. Leave the start date empty. If an end is required, choose tomorrow at a quarter-hour time within the saved maximum and record the time zone. Select **Save > Review Request**, verify Henry and his standard account, then **Submit Request**. Record the ID from My Requests.
3. As administrator, open **Admin > Workflows > WF-Acme-AR058 > Executions**. Open the run matching the submission time. Verify trigger requestedFor is Henry and requestedItem is this profile. Record execution ID, `accessRequestId` and `accountActivityId` separately; native trigger identifiers have their own context.
4. Open the matching request under **Admin > Dashboard > Approval Management > Access Requests** and inspect process/assignee. As Ava, open **Approvals > Access Requests > Requested**, inspect the matching Grant and reason, and save `AR-058-03.png` before deciding.
5. Approve as Ava with `AR-058 manager approved`. Inspect the execution's Approval Policy output, including actual status and approval ID. Check the request decision and [Account Activity](../../LAB-DESK.md#find-the-account-activity). Verify Support True and baseline True. Save `AR-058-04.png`.

**Check:** The live request invoked this workflow and reached Ava; native membership proves fulfillment.

### 4. Remove the grant and test a fresh denial

1. As Henry, open **My Access > Access Profiles > AP-Production-Support > Revoke Access Profile**, enter `AR-058 control complete`, and Submit. As Ava, inspect and approve the matching Remove request. Follow its activity, verify Support False/baseline True and the same account DN/GUID, then refresh imported data and confirm the assignment is gone.
2. Repeat only steps 1–4 of Section 3 with reason `AR-058 deny control`, valid form answers and a fresh required end date. Locate the new execution and Ava task; leave it pending for the denial below.
3. As Ava, choose Deny, enter `AR-058 requirement not approved`, and confirm. Record policy status, request decision and workflow execution outcome separately. Verify no Support grant and no pending review. Save `AR-058-05.png`.

**Check:** Approval and denial have separate requests. A workflow ending successfully is not proof its request was approved.

## Check the result

The profile invokes the native workflow, Ava handles both fresh cases, the approved grant is removed, and denial grants nothing.

## Finish

Keep WF-Acme-AR058 enabled and attached as the working control. Leave Henry clean and removal review as Ava. Preserve the pre-module policy snapshot; later labs duplicate this control and restore its association.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary identity details. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-058-01.png | Capability, original policy and Henry starting state |
| AR-058-02.png | Connected workflow and saved association |
| AR-058-03.png | Matching input and Ava pending task |
| AR-058-04.png | Approval output and native grant |
| AR-058-05.png | Removal and separate denied control |

[Previous: AR-057](../AR-057/README.md) · [Course outline](../../README.md) · [Next: AR-059](../AR-059/README.md)
