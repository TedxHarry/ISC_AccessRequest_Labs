# AR-006 · Provision Your First AD Account

<a id="what-youll-do"></a>

In this lab, you'll add baseline membership to Lucas's existing AD account, then use the same role to create Liam's missing account and add its baseline membership.

## Before you start

**Prerequisites:** Complete [AR-005](../AR-005/README.md). Lucas has a correlated AD account. Liam has no AD account. GG-ACME-BASELINE exists and is aggregated.

<a id="before-you-open-the-settings"></a>

Use your existing ISC administrator session and AD workstation. Employee sign-in is not needed to assign this baseline role.

On the first run, Lucas has one linked AD account without GG-ACME-BASELINE; Liam has no AD account. The baseline group is imported and the creation mappings are saved.

If you are returning to a partially completed run, inspect the existing role, activity and native accounts first. Use the resume instructions below instead of repeating the creation steps.

Use the [Module 1 configuration record](../../M01-STATE.md) for actual environment values and the required retained state.

**Returning after provisioning:** Reuse the existing baseline profile and role. Keep Lucas, Liam and any later course members selected. Inspect the saved creation/update activity and current AD accounts; do not remove membership, delete an account or reduce the role list to recreate the first-run screenshots.

## Follow the steps

### 1. Create the baseline access profile

1. Open **Admin > Access Model > Access Profiles** and search AP-Acme-AD-Baseline. Reuse the matching course profile if it exists; select **Create New** only if absent.
2. Name it `AP-Acme-AD-Baseline`, select your administrator as owner, and select the AD source recorded in your journal.
3. Under **Manage Entitlements**, add only GG-ACME-BASELINE. Verify its source and actual value before selecting it.
4. Save the configuration and enable the access profile. Leave access requests disabled.

The profile contains one group and will be assigned through a role. [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)

**Screenshot reminder:** Save `AR-006-01-baseline-profile.png`. Use the matching descriptions in the screenshot checklist at the end.

![Baseline profile containing one GG-ACME-BASELINE entitlement](images/AR-006-01-baseline-profile.png)

AP-Acme-AD-Baseline contains one entitlement on AD_Local_Ted in this example. Select your recorded AD source and also verify the profile is enabled with requests disabled.

### 2. Start with Lucas's existing account

1. In AD, open GG-ACME-BASELINE and confirm Lucas is not a member. Record his existing account DN and objectGUID from Attribute Editor. Save `AR-006-02-lucas-before.png` before enabling the role.

![Empty baseline Members list, Lucas objectGUID and Users OU DN](images/AR-006-02-lucas-before.png)

The Members panel is empty and the Lucas panel shows his objectGUID. The highlighted distinguishedName on the left belongs to the Users OU, not Lucas. Record Lucas's own distinguishedName from his Properties > Attribute Editor before comparing the account after provisioning.
2. In ISC, open **Admin > Access Model > Roles > Create New**. Name the role `ROLE-Acme-AD-Baseline`, select your administrator as owner, and add AP-Acme-AD-Baseline to its access profiles. Leave requests disabled.
3. Open **Define Assignment**, choose **Identity List**, and add only Lucas (`acme.e012`) using the + control. Save.
4. Verify the list contains one person. Enable the role and select **Apply Changes** from the role list.
5. Click **Search** in the top navigation, select **Account Activity**, and run `recipient.name:acme.e012 AND sources:"YOUR-AD-SOURCE-NAME"`, replacing the source placeholder with the exact recorded AD source name. Use the role-assignment time to select the matching row, open it, select the AD source entry, and record the account/native identity, membership operation, final status and activity ID or tracking number. If no row appears, verify the case-sensitive source name and retry with only `recipient.name:acme.e012`; do not reapply the role to manufacture another activity. Wait for processing to finish and resolve an error before adding Liam. See [Find the Account Activity](../../LAB-DESK.md#find-the-account-activity).
6. In AD, confirm Lucas is now a direct member of GG-ACME-BASELINE. Verify his DN and objectGUID are unchanged and no second Lucas account was created.

**Check:** The assignment changed membership on the existing account. Resolve a failure here before adding Liam.

**Screenshot reminder:** Save `AR-006-03-lucas-role.png`, `AR-006-04-lucas-update.png`. Use the matching descriptions in the screenshot checklist at the end.

![Lucas Identity Refresh activity marked Complete and confirmed on the source](images/AR-006-04-lucas-update.png)

The Overview shows Complete and Confirmed on the source. Select the AD source entry to inspect the actual membership operation, then verify the baseline group in AD and Lucas's unchanged DN/objectGUID.

![Baseline role Identity List selecting only Lucas](images/AR-006-03-lucas-role.png)

The first stage selects only Lucas. Save, enable and apply the role before checking its resulting activity; an edit-page selection alone does not prove provisioning.

### 3. Add Liam to the same role

1. Reconfirm `acme.e008` is absent from AD and from the ISC AD-source accounts.
2. Open ROLE-Acme-AD-Baseline > **Define Assignment > Identity List**. Retain Lucas and add Liam (`acme.e008`).
3. Check the list contains exactly Lucas and Liam. Save and apply changes from the role list. [Role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html)
4. Wait for the operation and inspect its activity. Do not create Liam manually while waiting or resubmit repeatedly.

Granting access on a direct-connect source can create the missing account using its Create Account configuration. Saving the role assignment starts that path; it does not prove completion. [Account creation behavior](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html)

**Screenshot reminder:** Save `AR-006-05-pilot-role.png`. Use the matching descriptions in the screenshot checklist at the end.

![Baseline role Identities view listing Lucas and Liam](images/AR-006-05-pilot-role.png)

The role view now lists both pilot identities. Inspect Define Assignment to confirm both remain selected, then verify each account and native baseline membership.

### 4. Inspect the operation and the target

1. Open **Search > Account Activity** and run `recipient.name:acme.e008 AND sources:"YOUR-AD-SOURCE-NAME" AND @accountRequests(op:create)`, replacing the source placeholder with the exact recorded AD source name. Open the newest matching activity created after Liam was added to the role, select the AD source entry, and record the activity ID or tracking number, account/native identity, status, operations, and any error messages. If the create-filtered query returns nothing, remove only the `@accountRequests(op:create)` clause and search again before considering any retry.
2. In AD, refresh AcmeLab/Users and find `acme.e008`. Inspect the actual account, not just an ISC success message.
3. Compare its DN, sAMAccountName, UPN, displayName, employeeID, department, and title with the expected values from AR-005. Inspect enabled/disabled state and password-change flags and record them; resolve an unexpected state before later directory sign-in tests.
4. Open GG-ACME-BASELINE > **Members** and confirm Liam is a direct member.
5. Aggregate AD accounts using the procedure in AR-003. In ISC, open Liam's identity > **Accounts** and verify the AD account is linked to Liam. Check its imported employeeID and membership.

Use account activity to investigate provisioning and AD to verify the target change. [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html)

**Check:** The course has two standard AD accounts: Lucas and Liam. Both are linked to their intended identities and belong to the baseline group. Provisioned accounts may show `manuallyCorrelated=true`; ISC documents this for accounts it creates. It does not mean you manually uploaded a correlation file.

**Screenshot reminder:** Save `AR-006-06-liam-created.png`, `AR-006-08-native-accounts.png`, `AR-006-07-liam-linked.png`. Use the matching descriptions in the screenshot checklist at the end.

![Liam identity Accounts view with AD, Acme HR and IdentityNow rows](images/AR-006-07-liam-linked.png)

Liam has an Enabled AD_Local_Ted account linked to his identity. Acme HR and IdentityNow are separate source rows. Count one account on the course AD source, not exactly two accounts across all sources; open the AD row to verify imported employeeID and membership.

![Liam AD create request and requested account attributes](images/AR-006-06-liam-created.png)

The AD detail shows Create account and the requested attributes, including employeeID E008 and baseline membership. Its displayed stage is Committed: Sent to the connector. Even though the background row says Complete, check the actual AD account and membership rather than treating this panel alone as target verification. The requested password is hidden as Unknown.

## Check the result

### If provisioning fails

| Observation | What to inspect |
|---|---|
| A manual task appears instead of an AD write | Direct provisioning support and source feature configuration |
| Lucas's membership cannot be added | Connector permissions on the actual group and IQService error details |
| Liam's account creation fails | Actual Users OU DN, naming collision, required attributes, and password-policy error |
| Account exists but membership is absent | The group operation and the group's actual DN; the overall operation may be partial |
| Role is visible but no provisioning occurs | Role/profile enablement, saved identity list, Apply Changes, and identity-processing status |
| A retry is proposed | Inspect AD and running activity first. A partial operation may already have created the account. |

1. Reopen the matching **Search > Account Activity** result and select the AD source entry. Read the account-create and group-membership results separately. Copy the exact error into your private journal.
2. Inspect the named account in AD before trying again. If Liam already exists, keep that account; a failed group operation does not mean account creation failed. For a naming or attribute error, compare the reported value with your saved AR-005 mappings. For a membership error, compare the reported group DN with GG-ACME-BASELINE in AD.
3. Correct the setting identified by the error. Automatic role provisioning retries only retryable failures, once per hour, up to three times. Follow the activity and recheck AD after the attempt; do not remove and re-add the role to force a retry.
4. If the error is not retryable or all attempts have failed, keep the account and role assignments in place. Give your lab administrator or SailPoint support the exact error, activity ID and current AD result to determine the supported recovery. Continue only when the account is linked correctly and its baseline membership is present.

[Role provisioning retries](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html#role-provisioning-retries)

### Completion and screenshots

- [ ] Lucas received baseline membership on his original account.
- [ ] Liam's account was created by ISC with the expected attributes and membership.
- [ ] Account activity and target checks agree, with no unresolved error.
- [ ] Both accounts are linked correctly after aggregation.

## Engineering practice

### Compare the two outcomes, then check again

1. Put Lucas’s and Liam’s activity records side by side. Identify which record added membership to an existing account and which created an account.
2. Record both AD objectGUIDs and DNs. Reopen their role assignments and accounts after processing completes.
3. Confirm the same account identifiers remain and each account has one direct baseline membership. Do not remove the role to repeat the test.
4. Explain why two people receiving the same profile caused different account operations.

If both accounts existed when you started, use the saved creation activity and label it historical. Do not claim to have observed a new creation during this repeat.

### Your ticket: Liam exists in AD, but the baseline group is missing.

This is a supplied partial-provisioning case, not a failure you must manufacture in the tenant.

Inspect your successful creation record and identify where a failed group operation would appear. Write what you would check before retrying the failed case.

Write your diagnosis before opening the answer. Label this as a supplied ticket, not a failure observed in your tenant.

<details>
<summary>Compare your diagnosis with the mentor’s solution</summary>

Find the account by username, employeeID and DN, then inspect the group operation and its exact error. The account may already have been created. Correct the specific group reference/permission error supported by the evidence, then follow the recovery steps under **If provisioning fails**. Do not delete Liam or unassign/reassign the role to force account creation again.

</details>

## Finish

### What you should leave in place

| Item | State before you continue |
|---|---|
| Standard accounts | Lucas retained; Liam created by ISC |
| Baseline role | Lucas and Liam selected and both native memberships verified |
| Business groups | No new business access from this one-group baseline |

<a id="if-this-configuration-already-exists"></a>

### If you stopped midway or want to repeat this lab

Inspect Lucas’s original account and Liam’s creation activity. Keep the full current role list if AR-007 is already complete; do not reduce it to two people. Label earlier activity as historical when repeating the lab.

If Liam already exists after an interrupted operation, compare his employeeID, DN, linked identity and activity first. A missing group does not mean account creation failed. Keep Lucas and Liam selected in the baseline role; do not remove and re-add them to force a retry. Resolve the failed operation and verify the target. On a later repeat, inspect retained assignments and repeat the comparison above. Keep both accounts, the role/profile and their baseline memberships.

**Additional captures:** Save `AR-006-08-native-accounts.png` for the native checks and `AR-006-09-source-operation.png` for expanded source operations. Use multiple panels when needed.

### Screenshots to capture

The supplied screenshots are placed beside their matching steps. Add the remaining views when available; keep earlier creation evidence labelled historical when revisiting the lab.

| Filename | Coverage and remaining capture |
|---|---|
| AR-006-01-baseline-profile.png | Baseline profile containing one GG-ACME-BASELINE entitlement. Included; see the limits beside the image. |
| AR-006-02-lucas-before.png | Empty baseline Members list, Lucas objectGUID and Users OU DN. Included; see the limits beside the image. |
| AR-006-03-lucas-role.png | Baseline role Identity List selecting only Lucas. Included; see the limits beside the image. |
| AR-006-04-lucas-update.png | Lucas Identity Refresh activity marked Complete and confirmed on the source. Included; see the limits beside the image. |
| AR-006-05-pilot-role.png | Baseline role Identities view listing Lucas and Liam. Included; see the limits beside the image. |
| AR-006-06-liam-created.png | Liam AD create request and requested account attributes. Included; see the limits beside the image. |
| AR-006-07-liam-linked.png | Liam identity Accounts view with AD, Acme HR and IdentityNow rows. Included; see the limits beside the image. |
| AR-006-08-native-accounts.png | Still to add: Lucas unchanged account DN/GUID, Liam AD attributes/enabled state and both direct baseline memberships. |
| AR-006-09-source-operation.png | Still to add: expanded Lucas AD membership operation and completed Liam source result. |

Keep passwords, tokens and invitation links out of shared images.

[Previous: AR-005](../AR-005/README.md) · [Next: AR-007](../AR-007/README.md)
