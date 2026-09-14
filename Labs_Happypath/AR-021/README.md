# AR-021 · Deliver HR Services from a business requirement

## Goal

James needs Payroll access for an approved HR task. Benefits access has not been approved. Build two separate choices under HR Services, approve Payroll, deny Benefits, then remove Payroll after the test.

Keep the choices separate: asking for Payroll must not also grant Benefits.

## Before you start

Complete [AR-020](../AR-020/README.md). Prepare **Acme James** (`acme.e014`, E014) and **Acme Elena** (`acme.e004`, E004) using [the registration and session steps](../../M03-READINESS.md#prepare-james-and-elena-before-ar-021). Also open Acme Admin and the AD workstation.

Keep the [module state](../../M03-READINESS.md) and your [journal](EVIDENCE.md) open. James already has a linked standard AD account and baseline access. You will not create another account.

## 1. Translate the requirement into two access choices

1. Write these two rows in your journal before creating anything:

| Requested choice | Included group | Owner and grant/removal reviewer | Decision for James |
|---|---|---|---|
| AP-HR-Payroll | GG-HR-PAYROLL only | Elena, acme.e004 | Approve grant, then approve removal |
| AP-HR-Benefits | GG-HR-BENEFITS only | Elena, acme.e004 | Deny grant |

2. As administrator, open James under **Admin > Identity Management > Identities**. Verify E014, Acme Employees, manager Elena and one linked standard AD account.
3. Record the account DN/objectGUID and inspect **Access**. In James's session, check **Request Center > My Requests** for unfinished HR requests.
4. Run the [native membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for James against GG-HR-PAYROLL, GG-HR-BENEFITS, GG-FIN-AP and GG-ACME-BASELINE.
5. Open **Admin > Connections > Sources > your AD source > Entitlement Management > Entitlements**. Find the two HR groups, compare their values with the native DNs, and record [their ISC IDs separately](../../LAB-VALUES.md#separate-entitlement-ids-from-native-group-values).

**Check:** Payroll, Benefits and FIN-AP are False; baseline is True. Both HR entitlements already exist on the intended source.

**Screenshot:** `AR-021-01.png`: James's identity/account and starting memberships.

## 2. Create the two HR profiles

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
3. Open **Manage Entitlements**, search the row's group, verify its DN and add it with **+**. Select **Save** and confirm exactly one entitlement.
4. Open **Access Requests** and enable **Allow Access Requests**. Under **Reviewing Access Requests**, select **Require Approval > Reviewer**, choose **Primary Owner** and add it with **+**. Keep one grant reviewer.
5. Require comments on requests and denials. Leave the form and required end date off. Record current timeout/reminder/escalation settings.
6. Under **Reviewing Removal Requests**, enable **Require Approval for Removal** and add **Primary Owner** as the single removal reviewer.
7. Select **Save**, enable the profile and reopen it to verify the values.
8. Repeat Steps 1–7 for the other table column. Do not add either profile to the baseline role or create an automatic HR assignment.

**Check:** Each profile contains exactly its own HR group and has Elena as owner and grant/removal reviewer. Payroll does not contain Benefits.

**Screenshot:** `AR-021-02.png`: both profiles' groups and saved policies; use two images if needed.

## 3. Publish the two choices under HR Services

1. Open **Admin > Access Model > Applications**. Search `HR Services`; inspect/reuse the matching course application or select **Create Application**.
2. Set **Name** to `HR Services`, **Description** to `Request Payroll or Benefits access for approved Acme HR work`, **Owner** to Elena (`acme.e004`) and **Source** to your recorded AD source. Select **Save**.
3. On **Configuration**, choose **App Accounts Created By: Admin (IT)** and **Account Source: Specific Users from Source**, using that AD source.
4. Select **Visible in Request Center** and **Allow Access Requests**, then **Save**. Specific Users from Source governs the application password-management list, not an HR-only requester restriction.
5. On **Access Profiles**, search AP-HR-Payroll in **Add Access Profile**, select it and use **+**. Add AP-HR-Benefits the same way and **Save**.
6. Turn on **Enable for Users**. Keep existing AD password policies; no password-change task is required.
7. After completing these object edits, wait for the application association refresh under **Admin > Dashboard > Monitor** to finish. Select **Apply Changes** from the Access Profiles list once, then wait for that processing run to finish too.
8. Reopen HR Services to verify both associations and saved settings. In Acme James, open **Request Center > Applications** for himself and find HR Services. Inspect the two choices.

**Check:** James can see separate Payroll and Benefits profiles. Merely seeing a choice has not granted it.

**Screenshot:** `AR-021-03.png`: saved application configuration and James's two choices.

## 4. Request Payroll and approve it as Elena

1. In Acme James, confirm `acme.e014`, then select HR Services in **Request Center > Applications**.
2. Select **AP-HR-Payroll only**, then **Save Selections**.
3. In request details enter `AR-021: Approved payroll processing task`, keep immediate access and verify James's standard account if prompted. Select **Save**.
4. Select **Review Request**. Confirm James and one Payroll profile, then **Submit Request** once.
5. Record the **My Requests** entry, ID and time.
6. In Acme Elena, confirm `acme.e004`. Open **Approvals > Access Requests > Requested**.
7. Select James's Payroll **Grant**, check the recipient, item and reason, then **Approve** and confirm. Verify the decision under **Reviewed**.
8. In Acme Admin, follow [the matching request and activity](../../M02-CHECKS.md#inspect-a-request-as-administrator) to its final provisioning result.

**Check:** The Payroll request was reviewed by Elena and its native group operation completed. Verify the actual assignee; James's manager and this profile's owner happen to be the same person, so her name alone does not prove which reviewer setting was used.

**Screenshot:** `AR-021-04.png`: Payroll request, Elena's decision and activity.

## 5. Verify Payroll without Benefits

1. Run Section 1's four native checks for James on the same controller.
2. Compare his account DN/objectGUID with the starting record.
3. In Acme Admin, open James's **Access > Access Profiles** and **Accounts > AD account**. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data) if needed.
4. Record Payroll=True, Benefits=False, FIN-AP=False and baseline=True.

**Check:** James received only the intended business access on his original account. If Benefits is present, investigate before submitting the denial test; you cannot prove a no-access denial from an already-granted starting state.

**Screenshot:** `AR-021-05.png`: all four native results and unchanged account identifiers.

## 6. Request Benefits and deny it

1. In Acme James, reopen **Request Center > Applications > HR Services**. Select **AP-HR-Benefits only** and **Save Selections**.
2. Enter `AR-021: Benefits access review test`, keep immediate access and the standard account, then **Save > Review Request > Submit Request**. Record a separate request ID.
3. In Acme Elena, open James's Benefits **Grant** under **Approvals > Access Requests > Requested**.
4. Select **Deny**, enter `Benefits duties have not been approved for this task` and confirm.
5. Record the denied decision under **Reviewed** and in administrator request details.
6. Repeat all four native checks for James. Inspect his ISC assignments after processing.

**Check:** Benefits remains False and no Benefits profile was assigned. Payroll remains True from its earlier approved request; FIN-AP remains False and baseline True. Denying Benefits must not be confused with removing Payroll.

**Screenshot:** `AR-021-06.png`: Benefits denial and the separate Payroll/Benefits target results.

## 7. Remove Payroll after the exercise

1. In Acme Admin, open **Admin > Identity Management > Identities > James > Access > Access Profiles**.
2. Select **AP-HR-Payroll > Details**, verify the requested assignment is revocable, then select **Revoke Access Profile**.
3. Enter `AR-021: Payroll acceptance test complete` and select **Revoke**.
4. In Acme Elena, find James's Payroll **Remove** request under **Approvals > Access Requests > Requested**. Check the action and approve it.
5. As administrator, follow the removal activity to completion.
6. Repeat the native checks and refresh imported AD data if needed. Verify the Payroll profile assignment is gone.
7. Keep both HR profiles and the HR Services association list intact.

**Check:** Payroll, Benefits and FIN-AP are False for James; baseline and the original account remain. There is no Benefits assignment to remove because its request was denied.

**Screenshot:** `AR-021-07.png`: Payroll removal decision/activity and final native results.

## 8. Save C03 and check the module handoff

1. Create a private evidence folder named **C03-Business-Access**. Copy all six completed module journals, screenshots and actual-value records into it.
2. Open **Admin > Access Model > Access Profiles**. Verify AP-Finance-Reporting, AP-Finance-AP, AP-HR-Payroll and AP-HR-Benefits are enabled/requestable with the expected groups and owners.
3. Inspect Finance Services and HR Services. Confirm each has its two correct profiles, both Request Center options and Enable for Users.
4. Inspect ROLE-Finance-Analyst: two Finance profiles, enabled/requestable, Daniel owner/reviewer and no automatic assignment criteria. Keep the explicit VPN owner/removal policy from AR-019.
5. Recheck Olivia lacks VPN, Reporting and FIN-AP; James lacks Payroll and Benefits; Lucas retains VPN; Liam remains without VPN and Remote Users.
6. Open **ROLE-Acme-AD-Baseline > View Details > Identities** and compare its 24 assigned employees with C02. On the AD workstation, open **Active Directory Users and Computers > AcmeLab > Groups > GG-ACME-BASELINE > Properties > Members** and compare its 24 course users with your C02 record. Preserve all standard accounts and baseline assignments.
7. Inspect the test requests and activities recorded in your journals. Resolve any pending, failed or partial operation before recording C03 as passed.
8. Write a handover naming the two applications, four profiles, role, reviewers, final recipient states and any unresolved observation. C03 is a configuration/evidence record, not a tenant backup.

**Check:** The retained state matches [the module handoff table](../../M03-READINESS.md#state-passed-between-labs), including native cleanup and baseline preservation.

**Screenshot:** `AR-021-08.png`: retained catalog/model, baseline comparison and C03 evidence index.

## If the result differs

If James or Elena cannot sign in, finish their registration/session checks before requesting. If both HR groups appear after Payroll approval, inspect the actual profile contents and other assignments; do not conceal the result by denying an unrelated request. If Elena sees no review, inspect Assignees for the exact request and the object's saved policy. Keep an incomplete operation visible in the journal until it is resolved.

## Assess your work

Close the walkthrough. Explain how you would give a new HR requester Payroll access without Benefits, find the actual reviewer, prove the native result and remove the test grant. Use James's three request records to support the explanation.

<details>
<summary>Check your C03 handover</summary>

The selectable Payroll profile contains only GG-HR-PAYROLL and uses Elena as its configured primary-owner reviewer. Benefits is a separate profile and separate decision. James's Payroll grant, Benefits denial and Payroll removal have distinct records and matching native checks. Both applications and all access definitions stay available, while James and Olivia finish clean and Lucas retains VPN. A catalog screenshot or approval alone does not establish native delivery or cleanup.

</details>

## Final verification

- [ ] James and Elena have working ordinary-user sessions.
- [ ] Each HR profile contains exactly one correct-source group.
- [ ] HR Services presents the two profiles separately.
- [ ] Payroll grant, Benefits denial and Payroll removal have distinct evidence.
- [ ] James's final native state and original account are verified.
- [ ] Finance configuration, Lucas's VPN and all 24 baseline assignments remain.
- [ ] C03 records the final configuration and has no unresolved test operations.

## Leave this in place

Keep the four business profiles, two applications and Finance Analyst role enabled/requestable. Retain their grant/removal policies and the existing baseline. Use [resume guidance](../../M03-READINESS.md#resume-or-repeat-safely) if you return to an unfinished request.

[Profile management](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) · [Application configuration](https://documentation.sailpoint.com/saas/help/access/app-config.html) · [Reviewer actions](https://documentation.sailpoint.com/saas/user-help/approvals/reviewing_access.html)

## Screenshots to capture

| Filename | What to show |
|---|---|
| AR-021-01.png | James before access and original account |
| AR-021-02.png | Separate Payroll/Benefits contents and policies |
| AR-021-03.png | HR Services configuration and requester choices |
| AR-021-04.png | Payroll approval and activity |
| AR-021-05.png | Payroll only, baseline and original account |
| AR-021-06.png | Benefits denial with Payroll still present |
| AR-021-07.png | Payroll removal and final target state |
| AR-021-08.png | Retained model, baseline and C03 record |

Use extra images for separate panels. Keep credentials and invitation links out of captures.

[Previous: AR-020](../AR-020/README.md) · [Lab index](../README.md) · [Next: AR-022](../AR-022/README.md)

Continue to Module 4 after the C03 checks pass.
