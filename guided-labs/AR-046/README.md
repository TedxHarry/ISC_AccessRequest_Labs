<a id="ar-046--trace-a-request-from-approval-to-the-ad-result"></a>

# AR-046: Trace a request from approval to the AD result

In this lab, you'll follow one Henry request through review, provisioning and AD, then use that evidence to locate an approved-but-missing-access report.

## Before you start

Use the cleaned state from [AR-045](../AR-045/README.md), or the completed AR-029 grant/removal setup if optional forms/date labs are unavailable. Resolve Henry’s old pending or future assignments before starting. Use Acme Admin, Henry (`acme.e018`), Ava (`acme.e006`), Evelyn (`acme.e021`) and the AD workstation. If you are resuming, open inspect the current assignments, pending requests and retries before making another change. Continue from the first unfinished step; do not repeat a grant that can still complete.

## Follow the steps

Use the same recorded account and verification domain controller for each native comparison. For a working control, wait for the matching source operation to finish successfully, then check AD. For a fault test, record the actual failure and check native membership as directed. Investigate a pending operation before submitting another request.

### 1. Record the account before requesting

1. As administrator, open **Admin > Identity Management > Identities > Henry > Accounts**. Record his AD source, account ID, DN and objectGUID using [the value lookup guide](../../LAB-VALUES.md). Record the verification domain controller. Confirm Manager Ava and one standard AD account.
2. Inspect Henry's Access and pending requests. He must have no Production Support assignment or future schedule. Run [the direct membership check](../../M02-CHECKS.md#inspect-direct-ad-membership): `GG-PROD-SUPPORT` False and `GG-ACME-BASELINE` True on `acme.e018`.
3. Open **Admin > Access Model > Access Profiles > AP-Production-Support > Edit > Access Requests**. Verify Manager then GOV-Security-Review grant approval and Primary Owner/Ava removal approval. Record any required form and end date; retain the seven-day maximum if configured.

**Check:** You know Henry's account and starting membership, and there is no earlier assignment that could explain a result.

### 2. Submit and inspect each review stage

1. As Henry, open **Request Center > Access Items > Access Profiles**, select Production Support and enter comments `AR-046 trace fulfillment`.
2. If its form is required, enter ticket `CHG-LAB-046`, Production, description `Trace the lab support group addition`, rollback `Revoke the profile after verification`, and leave optional notes empty. Leave the start date empty. If an end is required, choose tomorrow at a quarter-hour time, within the saved maximum, and record the time zone.
3. Save, select **Review Request**, check Henry, dates and standard account, then **Submit Request**. Record the ID from **My Requests**.
4. As administrator, open **Admin > Dashboard > Approval Management > Access Requests**, search that ID, open the access name and inspect **Process**, **Assignees** and **Details**. Record the current stage and Ava as reviewer before any approval.

   <!-- AUTHOR_SCREENSHOT_START: AR-046-01 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-046-01.png`
   >
   > **Show:** Pending review and stage/assignee.

   <!-- AUTHOR_SCREENSHOT_END: AR-046-01 -->
5. As Ava, open **Approvals > Access Requests > Requested**, inspect Henry's matching Grant and approve with `AR-046 manager approved`. Reopen the admin process and record the Security stage. As Evelyn, inspect and approve that matching Grant with `AR-046 Security approved`.

**Check:** A pending reviewer stage explains why access has not yet provisioned; it does not establish a connector fault.

### 3. Follow the exact target operation

1. Open **Search > Account Activity** and query `recipient.name:acme.e018`. Narrow with your exact AD source using [the activity lookup procedure](../../LAB-DESK.md#find-the-account-activity). Match the submission/approval time and access item; do not select an old Henry operation just because its name matches.
2. Open the activity and the AD source operation. Record its ID, operation type, native account identity, group value, status, completion time and any error. Compare the account DN and group with your before-record.

   <!-- AUTHOR_SCREENSHOT_START: AR-046-02 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-046-02.png`
   >
   > **Show:** Exact source operation, account and group.

   <!-- AUTHOR_SCREENSHOT_END: AR-046-02 -->
3. When the operation completes successfully, run the same native check on the same controller. Support must be True and baseline True. If controllers disagree, record the controllers and investigate replication rather than changing the request target.
4. Compare the native result with Henry’s ISC Accounts/Access view. If membership is missing there, [aggregate the account data](../../M02-CHECKS.md#refresh-imported-ad-data) and reopen Henry's Accounts/Access. Record the refreshed result separately from the native change time.

   <!-- AUTHOR_SCREENSHOT_START: AR-046-03 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-046-03.png`
   >
   > **Show:** Native grant and refreshed ISC view.

   <!-- AUTHOR_SCREENSHOT_END: AR-046-03 -->
5. Complete this short comparison :

| Evidence | What it establishes |
|---|---|
| Pending review and assignee | A decision remains outstanding |
| Approved future start | The assignment may not be due yet |
| Failed source operation | That operation failed; preserve its exact error |
| Successful operation plus native membership | The group addition reached the intended account |
| AD present but imported view stale | Investigate aggregation/processing/indexing |

**Check:** Your conclusion identifies a specific stage and record. If this control fails, keep the actual failure open and diagnose it before introducing the AR-048 fault.

### 4. Remove the control and verify the account remains

Check the effective end before revoking. If it already passed, follow the scheduled removal and verify the same final state instead of submitting another removal. Record whether cleanup was requested or scheduled.

1. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data), then reopen Henry’s **My Access > Access Profiles > AP-Production-Support**, choose **Revoke Access Profile**, enter `AR-046 control complete`, and **Submit**.
2. For a submitted removal request, have Ava inspect and approve the matching removal under **Approvals > Access Requests > Requested**. Record its ID and follow the removal activity.
3. Verify Support False, baseline True and the original account DN/GUID unchanged. Refresh imported data and confirm the requested profile assignment is gone.

   <!-- AUTHOR_SCREENSHOT_START: AR-046-04 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-046-04.png`
   >
   > **Show:** Completed removal and unchanged account.

   <!-- AUTHOR_SCREENSHOT_END: AR-046-04 -->

**Check:** The control grant and removal are complete. The account remains available for later requests.

## Check the result

Verify the request, reviewer stages, account operation and native result agree, followed by a completed removal. A real unresolved failure remains recorded as Failed, not as a completed control.

## Finish

Leave Henry without Production Support or a pending request. Retain his account, baseline, profile, reviewers and any configured form/date policy. Continue to Taylor’s missing-account case.

[Previous: AR-045](../AR-045/README.md) · [Course outline](../../README.md) · [Next: AR-047](../AR-047/README.md)
