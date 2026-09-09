# AR-006 · Provision Your First AD Account

**Prerequisites:** Complete [AR-005](../AR-005/README.md). Lucas has a correlated AD account. Liam has no AD account. GG-ACME-BASELINE exists and is aggregated.

## If this configuration already exists

Inspect Lucas’s original account and Liam’s creation activity. Keep the full current role list if AR-007 is already complete; do not reduce it to two people. Read the configuration sections to compare your saved settings, but skip creation actions for objects already verified. Start the additional practice at [Compare the two outcomes, then check again](#compare-the-two-outcomes-then-check-again). Capture current results and label earlier creation activity as historical.

Use the [Module 1 configuration record](../../M01-STATE.md) for actual environment values and the required retained state.

## Before you open the settings

Use your existing ISC administrator session and AD workstation. Employee sign-in is not needed to assign this baseline role.

On the first run, Lucas has one linked AD account without GG-ACME-BASELINE; Liam has no AD account. The baseline group is imported and the creation mappings are saved.

If you are returning to a partially completed run, inspect the existing role, activity and native accounts first. Use the resume instructions below instead of repeating the creation steps.

## What you’ll do

Give the same baseline access to two people and watch the difference. Lucas already has an account, so he needs a group membership. Liam has no account, so ISC must create it first. Prove the Lucas update before adding Liam.

## 1. Create the baseline access profile

1. Open **Admin > Access Model > Access Profiles > Create New**.
2. Name it `AP-Acme-AD-Baseline`, select your administrator as owner, and select the AD source recorded in your journal.
3. Under **Manage Entitlements**, add only GG-ACME-BASELINE. Verify its source and actual value before selecting it.
4. Save the configuration and enable the access profile. Leave access requests disabled.

The profile contains one group and will be assigned through a role. [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)

**Screenshot reminder:** Save `AR-006-01-baseline-profile.png`. Use the matching descriptions in the screenshot checklist at the end.

## 2. Start with Lucas's existing account

1. In AD, open GG-ACME-BASELINE and confirm Lucas is not a member. Record his existing account DN and objectGUID from Attribute Editor.
2. In ISC, open **Admin > Access Model > Roles > Create New**. Name the role `ROLE-Acme-AD-Baseline`, select your administrator as owner, and add AP-Acme-AD-Baseline to its access profiles. Leave requests disabled.
3. Open **Define Assignment**, choose **Identity List**, and add only Lucas (`acme.e012`) using the + control. Save.
4. Verify the list contains one person. Enable the role and select **Apply Changes** from the role list.
5. Wait for identity processing and provisioning. Inspect the resulting account activity using Section 4 below.
6. In AD, confirm Lucas is now a direct member of GG-ACME-BASELINE. Verify his DN and objectGUID are unchanged and no second Lucas account was created.

**Check:** The assignment changed membership on the existing account. Resolve a failure here before adding Liam.

**Screenshot reminder:** Save `AR-006-02-lucas-assignment.png`, `AR-006-03-lucas-membership.png`. Use the matching descriptions in the screenshot checklist at the end.

## 3. Add Liam to the same role

1. Reconfirm `acme.e008` is absent from AD and from the ISC AD-source accounts.
2. Open ROLE-Acme-AD-Baseline > **Define Assignment > Identity List**. Retain Lucas and add Liam (`acme.e008`).
3. Check the list contains exactly Lucas and Liam. Save and apply changes from the role list. [Role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html)
4. Wait for the operation and inspect its activity. Do not create Liam manually while waiting or resubmit repeatedly.

Granting access on a direct-connect source can create the missing account using its Create Account configuration. Saving the role assignment starts that path; it does not prove completion. [Account creation behavior](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html)

**Screenshot reminder:** Save `AR-006-04-pilot-assignment.png`. Use the matching descriptions in the screenshot checklist at the end.

## 4. Inspect the operation and the target

1. Open **Search** and select the **Account Activity** category. Locate activity for Liam and the AD source using the identity and operation time. Open the details and record the activity ID, status, operations, and any error messages.
2. In AD, refresh AcmeLab/Users and find `acme.e008`. Inspect the actual account, not just an ISC success message.
3. Compare its DN, sAMAccountName, UPN, displayName, employeeID, department, and title with the expected values from AR-005. Inspect enabled/disabled state and password-change flags and record them; resolve an unexpected state before later directory sign-in tests.
4. Open GG-ACME-BASELINE > **Members** and confirm Liam is a direct member.
5. Aggregate AD accounts using the procedure in AR-003. In ISC, open Liam's identity > **Accounts** and verify the AD account is linked to Liam. Check its imported employeeID and membership.

Use account activity to investigate provisioning and AD to verify the target change. [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html)

**Check:** The course has two standard AD accounts: Lucas and Liam. Both are linked to their intended identities and belong to the baseline group. Provisioned accounts may show `manuallyCorrelated=true`; ISC documents this for accounts it creates. It does not mean you manually uploaded a correlation file.

**Screenshot reminder:** Save `AR-006-05-liam-activity.png`, `AR-006-06-liam-ad.png`, `AR-006-07-liam-linked.png`. Use the matching descriptions in the screenshot checklist at the end.

## If provisioning fails

| Observation | What to inspect |
|---|---|
| A manual task appears instead of an AD write | Direct provisioning support and source feature configuration |
| Lucas's membership cannot be added | Connector permissions on the actual group and IQService error details |
| Liam's account creation fails | Actual Users OU DN, naming collision, required attributes, and password-policy error |
| Account exists but membership is absent | The group operation and the group's actual DN; the overall operation may be partial |
| Role is visible but no provisioning occurs | Role/profile enablement, saved identity list, Apply Changes, and identity-processing status |
| A retry is proposed | Inspect AD and running activity first. A partial operation may already have created the account. |

Correct the cause, then use the supported retry action available for that failed activity or allow the documented role retry process to run. Verify the target before retrying. Do not remove and re-add a role merely to force another attempt; removing eligibility can remove access. [Role retries and removal behavior](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html)

## Compare the two outcomes, then check again

1. Put Lucas’s and Liam’s activity records side by side. Identify which record added membership to an existing account and which created an account.
2. Record both AD objectGUIDs and DNs. Reopen their role assignments and accounts after processing completes.
3. Confirm the same account identifiers remain and each account has one direct baseline membership. Do not remove the role to repeat the test.
4. Explain why two people receiving the same profile caused different account operations.

If both accounts existed when you started, use the saved creation activity and label it historical. Do not claim to have observed a new creation during this repeat.

## Your ticket: Liam exists in AD, but the baseline group is missing.

This is a supplied partial-provisioning case, not a failure you must manufacture in the tenant.

Inspect your successful creation record and identify where a failed group operation would appear. Write what you would check before retrying the failed case.

Write your diagnosis and the evidence you would accept before opening the solution. If you use the supplied case, label it a ticket exercise; do not record it as a tenant failure you observed.

<details>
<summary>Compare your diagnosis with the mentor’s solution</summary>

Find the account by username, employeeID and DN, then inspect the group operation and its exact error. The account may already have been created. Correct the specific group reference/permission error supported by the evidence, then use an eligible supported retry or documented retry process. Do not delete Liam or unassign/reassign the role to force account creation again.

</details>

## If you stopped midway or want to repeat this lab

If Liam already exists after an interrupted operation, compare his employeeID, DN, linked identity and activity first. A missing group does not mean account creation failed. Keep Lucas and Liam selected in the baseline role; do not remove and re-add them to force a retry. Resolve the failed operation and verify the target. On a later repeat, inspect retained assignments and repeat the comparison above. Keep both accounts, the role/profile and their baseline memberships.

## What you should leave in place

| Item | State before you continue |
|---|---|
| Standard accounts | Lucas retained; Liam created by ISC |
| Baseline role | Lucas and Liam selected and both native memberships verified |
| Business groups | No new business access from this one-group baseline |

## Completion and screenshots

- [ ] The practice/comparison and your ticket diagnosis are recorded in the journal.
- [ ] Any temporary change is restored and the retained state matches the next lab.
- [ ] Lucas received baseline membership on his original account.
- [ ] Liam's account was created by ISC with the expected attributes and membership.
- [ ] Account activity and target checks agree, with no unresolved error.
- [ ] Both accounts are linked correctly after aggregation.

| Filename | What to show |
|---|---|
| AR-006-01-baseline-profile.png | Profile and its single baseline entitlement |
| AR-006-02-lucas-assignment.png | Initial role identity list with Lucas only |
| AR-006-03-lucas-membership.png | Membership added to Lucas's existing account |
| AR-006-04-pilot-assignment.png | Saved identity list with Lucas and Liam |
| AR-006-05-liam-activity.png | Creation/provisioning activity and result |
| AR-006-06-liam-ad.png | Actual AD attributes and group membership |
| AR-006-07-liam-linked.png | Liam's ISC identity with its AD account |

Record results in the [journal](EVIDENCE.md). Keep the role assigned to both users for AR-007.

[Previous: AR-005](../AR-005/README.md) · [Next: AR-007](../AR-007/README.md)
