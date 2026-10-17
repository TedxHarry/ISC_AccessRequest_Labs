# AR-021 · Deliver HR Services from a business requirement

<a id="goal"></a>

In this lab, you'll build separate Payroll and Benefits choices under HR Services, approve James's Payroll request, deny Benefits and remove the Payroll test grant.

## Before you start

Complete [AR-020](../AR-020/README.md). Prepare **Acme James** (`acme.e014`, E014) and **Acme Elena** (`acme.e004`, E004) using [the registration and session steps](../../../reference/M03-READINESS.md#prepare-james-and-elena-before-ar-021). Also open Acme Admin and the AD workstation.

Keep the [module state](../../../reference/M03-READINESS.md) open. James already has a linked standard AD account and baseline access. You will not create another account.

If you are returning after a break, follow [the module resume checks](../../../reference/M03-READINESS.md#resume-or-repeat-safely) before creating an object or submitting another request.

## Follow the steps

### 1. Translate the requirement into two access choices

Keep the choices separate: asking for Payroll must not also grant Benefits.

1. Write these two rows before creating anything:

| Requested choice | Included group | Owner and grant/removal reviewer | Decision for James |
|---|---|---|---|
| AP-HR-Payroll | GG-HR-PAYROLL only | Elena, acme.e004 | Approve grant, then approve removal |
| AP-HR-Benefits | GG-HR-BENEFITS only | Elena, acme.e004 | Deny grant |

2. As administrator, open James under **Admin > Identity Management > Identities**. Verify E014, Acme Employees, manager Elena and one linked standard AD account.
3. Record the account DN/objectGUID and inspect **Access**. In James's session, check **Request Center > My Requests** for unfinished HR requests. In Acme Admin, also use [request details](../../../reference/M02-CHECKS.md#inspect-a-request-as-administrator) to check requests submitted for James by someone else.
4. Run the [native membership check](../../../reference/M02-CHECKS.md#inspect-direct-ad-membership) for James against GG-HR-PAYROLL, GG-HR-BENEFITS, GG-FIN-AP and GG-ACME-BASELINE.
5. Open **Admin > Connections > Sources > your AD source > Entitlement Management > Entitlements**. Find the two HR groups, compare their values with the native DNs, and record [their ISC IDs separately](../../../reference/LAB-VALUES.md#separate-entitlement-ids-from-native-group-values).

**Check:** Payroll, Benefits and FIN-AP are False; baseline is True. Both HR entitlements already exist on the intended source.

<!-- AUTHOR_SCREENSHOT_START: AR-021-01 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-021-01.png`
>
> **Show:** James before access and original account.

<!-- AUTHOR_SCREENSHOT_END: AR-021-01 -->

### 2. Create the two HR profiles

Complete this procedure for Payroll first, then repeat it for Benefits using the table.

| Field | Payroll profile | Benefits profile |
|---|---|---|
| Name | AP-HR-Payroll | AP-HR-Benefits |
| Description | Payroll access for approved Acme HR payroll tasks | Benefits access for approved Acme HR benefits tasks |
| Primary Owner | Elena, acme.e004 | Elena, acme.e004 |
| Entitlement Source | Your recorded AD source | The same AD source |
| Only entitlement | GG-HR-PAYROLL | GG-HR-BENEFITS |

1. In Acme Admin, open **Admin > Access Model > Access Profiles** and search the exact profile name. Inspect/reuse a matching course profile; otherwise select **Create New**.
2. Enter that row's Configuration fields and select **Save**. Verify the source before saving.
3. Open **Manage Entitlements**. Keep a matching existing group row; otherwise search the table's group, verify its DN and add it with **+**. Select **Save** and confirm exactly one entitlement.
4. Open **Access Requests** and enable **Allow Access Requests**. Under **Reviewing Access Requests**, select **Require Approval > Reviewer**, choose **Primary Owner** and add it with **+**. Keep one grant reviewer.
5. Require comments on requests and denials. Leave the form and required end date off. Record current timeout/reminder/escalation settings.
6. Under **Reviewing Removal Requests**, enable **Require Approval for Removal** and add **Primary Owner** as the single removal reviewer.
7. Select **Save**, enable the profile and reopen it to verify the values.
8. Repeat Steps 1-7 for the other table column. Do not add either profile to the baseline role or create an automatic HR assignment.

**Check:** Each profile contains exactly its own HR group and has Elena as owner and grant/removal reviewer. Payroll does not contain Benefits.

<!-- AUTHOR_SCREENSHOT_START: AR-021-02 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-021-02.png`
>
> **Show:** Separate Payroll/Benefits contents and policies.

<!-- AUTHOR_SCREENSHOT_END: AR-021-02 -->

### 3. Publish the two choices under HR Services

1. Open **Admin > Access Model > Applications**. Search `HR Services`; inspect/reuse the matching course application or select **Create Application**.
2. For a new application, set **Name** to `HR Services`, **Description** to `Request Payroll or Benefits access for approved Acme HR work`, **Owner** to Elena (`acme.e004`) and **Source** to your recorded AD source. Select **Save**.
3. For an existing matching application, select **Edit** and compare its name, owner and source with Step 2. On **Configuration**, choose **App Accounts Created By: Admin (IT)** and **Account Source: Specific Users from Source**, using that AD source.
4. Select **Visible in Request Center** and **Allow Access Requests**, then **Save**. Specific Users from Source governs the application password-management list, not an HR-only requester restriction.
5. On **Access Profiles**, keep any existing correct associations. For a missing profile, search its name in **Add Access Profile**, select it and use **+**. Confirm AP-HR-Payroll and AP-HR-Benefits are each listed once, then **Save**.
6. Turn on **Enable for Users**. Keep existing AD password policies; no password-change task is required.
7. After completing these object edits, wait for the application association refresh under **Admin > Dashboard > Monitor** to finish. Select **Apply Changes** from the Access Profiles list once, then wait for that processing run to finish too.
8. Reopen HR Services to verify both associations and saved settings. In Acme James, open **Request Center > Applications** for himself and find HR Services. Inspect the two choices.

**Check:** James can see separate Payroll and Benefits profiles. Merely seeing a choice has not granted it.

<!-- AUTHOR_SCREENSHOT_START: AR-021-03 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-021-03.png`
>
> **Show:** HR Services configuration and requester choices.

<!-- AUTHOR_SCREENSHOT_END: AR-021-03 -->

### 4. Request Payroll and approve it as Elena

1. In Acme James, confirm `acme.e014`, then select HR Services in **Request Center > Applications**.
2. Select **AP-HR-Payroll only**, then **Save Selections**.
3. In request details enter `AR-021: Approved payroll processing task`, keep immediate access and verify James's standard account if prompted. Select **Save**.
4. Select **Review Request**. Confirm James and one Payroll profile, then **Submit Request** once.
5. Record the **My Requests** entry, ID and time.
6. In Acme Elena, confirm `acme.e004`. Open **Approvals > Access Requests > Requested**.
7. Select James's Payroll **Grant**, check the recipient, item and reason, then **Approve** and confirm. Verify the decision under **Reviewed**.
8. In Acme Admin, follow [the matching request and activity](../../../reference/M02-CHECKS.md#inspect-a-request-as-administrator) to its final provisioning result.

**Check:** The Payroll request was reviewed by Elena and its native group operation completed. Verify the actual assignee; James's manager and this profile's owner happen to be the same person, so her name alone does not prove which reviewer setting was used.

<!-- AUTHOR_SCREENSHOT_START: AR-021-04 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-021-04.png`
>
> **Show:** Payroll approval and activity.

<!-- AUTHOR_SCREENSHOT_END: AR-021-04 -->

### 5. Verify Payroll without Benefits

1. Run Section 1's four native checks for James on the same controller.
2. Compare his account DN/objectGUID with the starting record.
3. In Acme Admin, open James's **Access > Access Profiles** and **Accounts > AD account**. [Refresh imported AD data](../../../reference/M02-CHECKS.md#refresh-imported-ad-data) if needed.
4. Record Payroll=True, Benefits=False, FIN-AP=False and baseline=True.

**Check:** James received only the intended business access on his original account. If Benefits is present, investigate before submitting the denial test; you cannot prove a no-access denial from an already-granted starting state.

<!-- AUTHOR_SCREENSHOT_START: AR-021-05 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-021-05.png`
>
> **Show:** Payroll only, baseline and original account.

<!-- AUTHOR_SCREENSHOT_END: AR-021-05 -->

### 6. Request Benefits and deny it

1. In Acme James, reopen **Request Center > Applications > HR Services**. Select **AP-HR-Benefits only** and **Save Selections**.
2. Enter `AR-021: Benefits access review test`, keep immediate access and the standard account, then **Save > Review Request > Submit Request**. Record a separate request ID.
3. In Acme Elena, open James's Benefits **Grant** under **Approvals > Access Requests > Requested**.
4. Select **Deny**, enter `Benefits duties have not been approved for this task` and confirm.
5. Record the denied decision under **Reviewed** and in administrator request details.
6. Repeat all four native checks for James. Inspect his ISC assignments after processing.

**Check:** Benefits remains False and no Benefits profile was assigned. Payroll remains True from its earlier approved request; FIN-AP remains False and baseline True. Denying Benefits must not be confused with removing Payroll.

<!-- AUTHOR_SCREENSHOT_START: AR-021-06 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-021-06.png`
>
> **Show:** Benefits denial with Payroll still present.

<!-- AUTHOR_SCREENSHOT_END: AR-021-06 -->

<a id="resume-or-repeat"></a>

### 7. Remove Payroll after the exercise

1. In Acme Admin, open **Admin > Identity Management > Identities > James > Access > Access Profiles**.
2. Select **AP-HR-Payroll > Details**, verify the requested assignment is revocable, then select **Revoke Access Profile**.
3. Enter `AR-021: Payroll acceptance test complete` and select **Revoke**.
4. In Acme Elena, find James's Payroll **Remove** request under **Approvals > Access Requests > Requested**. Check the action and approve it.
5. As administrator, follow the removal activity to completion.
6. Repeat the native checks and refresh imported AD data if needed. Verify the Payroll profile assignment is gone.
7. Keep both HR profiles and the HR Services association list intact.

**Check:** Payroll, Benefits and FIN-AP are False for James; baseline and the original account remain. There is no Benefits assignment to remove because its request was denied.

<!-- AUTHOR_SCREENSHOT_START: AR-021-07 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-021-07.png`
>
> **Show:** Payroll removal and final target state.

<!-- AUTHOR_SCREENSHOT_END: AR-021-07 -->

### 8. Save C03 and check the module handoff

1. Reopen the completed request and removal results for this module. Keep the working HR file and original settings needed by the next lab.
2. Open **Admin > Access Model > Access Profiles**. Verify AP-Finance-Reporting, AP-Finance-AP, AP-HR-Payroll and AP-HR-Benefits are enabled/requestable with the expected groups and owners.
3. Inspect Finance Services and HR Services. Confirm each has its two correct profiles, both Request Center options and Enable for Users.
4. Inspect ROLE-Finance-Analyst: two Finance profiles, enabled/requestable, Daniel owner/reviewer and no automatic assignment criteria. Keep the explicit VPN owner/removal policy from AR-019.
5. Recheck Olivia lacks VPN, Reporting and FIN-AP; James lacks Payroll and Benefits; Lucas retains VPN; Liam remains without VPN and Remote Users.
6. Open **Admin > Access Model > Roles > ROLE-Acme-AD-Baseline > View Details > Identities** and compare its 24 assigned employees with C02. On the AD workstation, open **Active Directory Users and Computers > AcmeLab > Groups > GG-ACME-BASELINE > Properties > Members** and compare its 24 course users with your C02 record. Use the OU path recorded in your own C01 if it differs from this example. These counts describe the first course pass. On a later repeat, preserve additional accounts and identities introduced by later labs, compare the original 24 baseline recipients separately, and record the expected difference from C02. Preserve all standard accounts and baseline assignments.
7. Inspect the test requests and activities recorded in this module. Resolve any pending, failed or partial operation before recording C03 as passed.
8. Confirm you can locate the two applications, four profiles, role, reviewers and final recipient states. This verified configuration is C03; no separate handover document is required.

**Check:** The retained state matches [the module handoff table](../../../reference/M03-READINESS.md#state-passed-between-labs), including native cleanup and baseline preservation.

<!-- AUTHOR_SCREENSHOT_START: AR-021-08 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-021-08.png`
>
> **Show:** Retained model, baseline and C03 record.

<!-- AUTHOR_SCREENSHOT_END: AR-021-08 -->

## Check the result

### Final verification

- [ ] James and Elena have working ordinary-user sessions.
- [ ] Each HR profile contains exactly one correct-source group.
- [ ] HR Services presents the two profiles separately.
- [ ] Payroll grant, Benefits denial and Payroll removal have distinct evidence.
- [ ] James's final native state and original account are verified.
- [ ] Finance configuration, Lucas's VPN and all 24 baseline assignments remain.
- [ ] C03 records the final configuration and has no unresolved test operations.

## Finish

### Leave this in place

Keep the four business profiles, two applications and Finance Analyst role enabled/requestable. Retain their grant/removal policies and the existing baseline. Use [resume guidance](../../../reference/M03-READINESS.md#resume-or-repeat-safely) if you return to an unfinished request.

[Profile management](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) · [Application configuration](https://documentation.sailpoint.com/saas/help/access/app-config.html) · [Reviewer actions](https://documentation.sailpoint.com/saas/user-help/approvals/reviewing_access.html)

Continue to Module 4 after the C03 checks pass.

[Previous: AR-020](../AR-020/README.md) · [Lab index](../../README.md) · [Next: AR-022](../../M04/AR-022/README.md)
