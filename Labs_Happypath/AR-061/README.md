# AR-061 — Check recipient eligibility before Finance approval

In this lab, you'll send Finance recipients to manager review and stop other recipients before approval, testing the stop on a disposable profile first.

## Before you start

Complete AR-058–060 and [AR-049](../AR-049/README.md). Keep GG-ACME-FAULT-049 with restored permissions, its direct entitlement non-requestable and AP-Acme-Reference-Test disabled. Use Olivia (`acme.e011`), Liam (`acme.e008`), Daniel (`acme.e003`), Acme Admin and AD verification. Keep the latest complete private HR CSV and your [journal](EVIDENCE.md). Retain the Finance items, clean Olivia and requester-based Finance segment from [AR-019](../AR-019/README.md) and [AR-022](../AR-022/README.md). The segment remains enabled.

## Follow the steps

### 1. Prepare the recipients and original policies

1. Verify Olivia's Finance department/manager Daniel and Liam's IT department/manager Priya in **Admin > Identity Management > Identities**. Prepare any missing ISC session using [AR-029's registration procedure](../AR-029/README.md#1-prepare-the-five-sessions-and-check-henry), substituting these people and preserving the complete HR file.
2. Check Olivia has no Finance Analyst/Reporting/AP assignment or pending request. Use the [native membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for each group below. Record native VPN, FIN-REPORTING and FIN-AP as False and baseline True. Record Liam's existing memberships and verify no Finance groups or disposable-group membership. Preserve unrelated access.
3. Save grant/removal policies for AP-Finance-Reporting, AP-Finance-AP and ROLE-Finance-Analyst. Record each object's ID and owner Daniel. Record their removal reviewers now; you will temporarily select Daniel only when the Finance tests begin.
4. Record **Admin > Global > System Settings > Feature Settings > Access Requests**: Requests on Behalf on/off and its selected mode. Keep this before-record separate from later changes.

**Check:** Olivia supplies the eligible control without exposing Lucas's retained VPN to overlapping-profile removal.

### 2. Build the recipient lookup and guarded branches

1. Create `WF-Acme-Finance-Eligibility` through **Admin > Workflows > Create Workflow > Start in the Workflow Builder**. Use the native Access Request Submitted trigger. Leave this workflow unattached while building.
2. Add **Get Identity**, name it `Get Recipient`, and set Identity through the variable picker to **Trigger > requestedFor > id** (`$.trigger.requestedFor.id`). Under Additional Output Data, retain `attributes.department` if it is not already selected. requestedBy identifies the requester in an on-behalf request; use requestedFor to check the recipient.
3. Add **Verify Data Type**. Select Get Recipient's department with the variable picker and choose **Exists**. On its matching branch add another Verify Data Type for the same value with **Is a string**. Route either failed check to an **End Steps > Failure** named `Missing Department`, with Failure Details `Recipient department unavailable or invalid; access eligibility could not be established`.
4. On the valid-string branch, add **Compare Strings**. Set Value 1 to the selected department, Comparison Operator Equals, and Value 2 to static `Finance`. Keep the generated JSONPath for your actual Get Recipient step. An empty or unrecognized string takes the non-matching branch.
5. Connect the Finance branch to **Approval Policy: Single**, **Reviewer Category: Manager**, Reminder No, Timeout 2 days, Action at Timeout Expire. Connect its output to an End Steps Success.
6. Connect the non-Finance branch to an **End Steps > Failure** named `Not Finance`, with Failure Details `Recipient department does not meet the Finance requirement`. Save all steps and resolve validation errors. Neither failure branch should connect to an approval action or a Success end.
7. Confirm the trigger connects to Get Recipient, and Get Recipient connects to the Exists check. Inspect the full canvas and save `AR-061-01.png`. In the next test, verify both the intentional workflow failure and the access request's actual terminal outcome. Do not describe the outcome as a reviewer denial unless that is what the request records.

**Check:** Only the Finance branch creates a manager review. The other branches stop at a named failure. Deny Access Request requires an approval ID; the trigger's accessRequestId is not a substitute before an approval exists. See the [action contract](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html#deny-access-request) and the [reported pre-approval limitation](https://developer.sailpoint.com/discuss/t/auto-deny-inside-an-adaptive-approvals-workflow/214447).

### 3. Prove the stop on the disposable profile

1. Create **Admin > Access Model > Access Profiles > Create New**: `AP-Acme-Eligibility-Control`, description `Recipient eligibility validation`, owner Daniel, source your AD source. Under Manage Entitlements add only the current GG-ACME-FAULT-049 by source/native value. Reuse the same named profile on a repeat.
2. Enable requests; set grant and removal approval to one Primary Owner/Daniel, comments required, no form/date requirement. Save, enable and Apply Changes when offered. Leave this profile outside the Finance segment and automatic assignments.
3. Enable WF-Acme-Finance-Eligibility and select it as this control profile's grant Workflow. Preserve Daniel's removal review. Reopen the saved association.
4. As Liam, open **Request Center > Access Items > Access Profiles**, select the control, reason `AR-061 non-Finance isolated test`, then **Save > Review Request > Submit Request**. Record the request ID.
5. Open the matching workflow Execution. Verify requestedFor is Liam, Get Recipient's ID is Liam and its department is IT, then inspect the chosen branch and named failure details. Require a terminal request with no grant, no pending manager review or provisioning operation, and native disposable membership False. Record the actual request status, such as Failed or Canceled; workflow Failure alone is insufficient. Save `AR-061-02.png`.
6. If execution stops before the intended failure branch, or the request remains pending, record the actual error, last step and IDs. Restore the control's direct Primary Owner review for future requests. Resolve the original through Liam's **My Requests > matching request > Cancel** when eligible, or have Daniel deny an actionable review. Changing the association does not repair an already-running request. If it cannot be resolved, retain it for investigation and do not proceed to Finance attachment. Mark the eligibility control Not accepted. Complete Section 6 and Finish even when you stop these tests here.

**Check:** Proceed only after the request itself stops without access. The intentional named Failure is expected in this test; an unrelated action error is not a passing result.

### 4. Test missing data and immediately restore HR

1. Back up the latest complete private HR CSV. In a working copy, clear only Liam E008's department; preserve every other value and all rows, including Taylor E025. Upload the complete copy through **Acme HR > Account Management > Account Aggregation**, confirm the upload and wait for aggregation and identity processing. Follow [the import controls](../../labs/AR-001/README.md#4-import-the-accounts), using your current complete file and population rather than the original 24 rows.
2. Reopen Liam's mapped department. If a fallback still supplies IT, record that missing data was not reproduced; do not assume editing the CSV made the identity value empty.
3. If the actual department is absent, null or empty, submit a new control request as Liam with reason `AR-061 missing department`. Inspect Get Recipient's real output, the selected branch, named failure and actual terminal request status. A blank string should reach Not Finance; absent/null should reach Missing Department. Confirm no review or provisioning remains pending. Verify no disposable membership. Save `AR-061-03.png`.
4. Immediately restore/import the saved complete HR file, even if the test failed. Wait for processing and verify Liam's department IT and the original row count/controlled emails. Capture the restored identity alongside the test evidence. Resolve the test request before continuing.

**Check:** The journal identifies which missing-value representation was actually tested. An unobserved null or data type is not a passed test.

### 5. Test each Finance entry point independently

1. Only after both the real non-Finance stop and the actual missing/blank-data stop have been verified, attach the workflow to the grant policy of each object below. Use **Admin > Access Model > Access Profiles** for the profiles and **Roles** for Finance Analyst, then **Edit > Access Requests > Require Approval > Workflow**. Save/reopen each association. For this test, set each object's removal approval to **Require Approval for Removal > Primary Owner**, add it with **+**, keep Daniel as the only removal reviewer and save. If the missing/blank-data stop could not be tested, keep the original Finance policies and record this rollout Not accepted.

| Requested object | Catalog tab | Expected added groups for clean Olivia |
|---|---|---|
| AP-Finance-Reporting | Access Profiles | GG-VPN-USERS and GG-FIN-REPORTING |
| AP-Finance-AP | Access Profiles | GG-FIN-AP |
| ROLE-Finance-Analyst | Roles | GG-VPN-USERS, GG-FIN-REPORTING and GG-FIN-AP |

2. For the first row, as Olivia open **Request Center > Access Items > the listed tab**, select that object, reason `AR-061 eligible` plus its name, keep immediate access and her standard account, then Save, Review Request and Submit Request.
3. Verify the execution fetched Olivia's Finance department and reached Manager/Daniel. As Daniel, open **Approvals > Access Requests > Requested**, inspect and approve the matching Grant. Follow [Account Activity](../../LAB-DESK.md#find-the-account-activity) and verify the row's native groups True and baseline True. Save `AR-061-04.png`, adding a suffix for each object.
4. Remove this assignment before testing the next row. For a profile, Olivia uses **My Access > Access Profiles > item > Revoke Access Profile**. For the role, use **My Access > Roles > ROLE-Finance-Analyst > Assignment > Revoke Assignment**. Enter `AR-061 eligible test complete` and submit. Have Daniel approve the matching removal, follow its operation and verify the three business groups False/baseline True. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data) and confirm the assignment is gone before another request. Repeat steps 2–4 for the remaining rows.
5. To test another recipient without changing catalog segmentation, temporarily set **Requests on Behalf > By Everyone for Anyone** using the page saved in Section 1. Save and refresh Olivia's session. As Olivia, choose **Request Center > Request for Others > Liam > Request for These Identities**, select the first listed Finance object and submit with reason `AR-061 ineligible Liam` plus the item name.
6. Verify the execution fetched Liam rather than Olivia, read IT, and stopped the request at the Not Finance failure. Record the actual terminal status and absence of a pending review or provisioning operation. Verify Liam's Finance memberships remain absent and other original memberships unchanged. Repeat separately for each remaining object. Save `AR-061-05.png` with each recipient/branch/outcome.
7. Restore the original Requests on Behalf mode immediately after these submissions/tests; save/reopen and record it. Keep Finance group entitlements directly non-requestable. These three request policies do not prevent manual AD grants or establish an automatic-role eligibility rule.

**Check:** Each Finance request entry point has its own positive and negative evidence; a passing profile alone does not prove the role's policy.

### 6. Leave the proven policies and clean accounts

1. If any test stopped early, restore the complete private HR file and original Requests on Behalf setting first, if changed. Save/reopen the setting and verify Liam is back in IT. Resolve every diagnostic request and remove any test grant. Verify Olivia's three business groups absent/baseline present, Liam's original memberships/IT department restored and Lucas's retained VPN unchanged.
2. Turn off requestability and disable AP-Acme-Eligibility-Control after its requests are resolved. Retain its definition and the existing non-requestable disposable group.
3. Restore each Finance object's original removal-review settings from Section 1. Retain only grant workflow associations that passed their tests. If the workflow was not accepted, restore all original grant policies instead. Record object IDs and the exact retained state; do not describe an unverified association as enforced.

**Check:** HR, on-behalf settings and test access are restored. Proven grant policies and their evidence remain available.

## Check the result

The isolated non-Finance and missing/blank-data tests must stop the request without access before Finance attachment. Each attached Finance profile/role is then verified with eligible Olivia and ineligible Liam. Untested or failed enforcement remains explicitly Not accepted.

## Finish

On success or an early stop, restore the original Requests on Behalf setting, complete private HR file and original Finance removal policies. Verify Liam is back in IT and Olivia/Liam have no diagnostic access. Keep only tested Finance grant associations; otherwise restore the original grant policies. Disable the isolated control after its requests are resolved. Production Support remains on WF-Acme-AR058. Record unresolved requests and enforcement tests as Pending or Not accepted.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary identity details. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-061-01.png | Recipient lookup, data checks and named Failure branches |
| AR-061-02.png | Isolated named failure, terminal request and absent membership |
| AR-061-03.png | Real missing-data outcome and restored Liam IT |
| AR-061-04.png | Eligible grant/removal for each Finance object |
| AR-061-05.png | On-behalf Liam stop for each object and restored global setting |

[Previous: AR-060](../AR-060/README.md) · [Course outline](../../README.md) · [Next: AR-062](../AR-062/README.md)
