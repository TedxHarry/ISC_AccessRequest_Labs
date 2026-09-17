# AR-044 · Compare role-required access with requested access

In this lab, you'll give Alexander one automatic test role, request overlapping access, and remove each assignment through the correct route.

## Before you start

Complete [AR-043](../AR-043/README.md), including cleanup. Use Acme Admin, Alexander (`acme.e020`), Priya (`acme.e002`) and the AD workstation. Alexander’s business groups must be absent and baseline present. You will create the test role below; do not change ROLE-Acme-AD-Baseline. Keep your [journal](EVIDENCE.md) open.

If you are resuming, check your journal, current assignments and pending requests before submitting again. Resolve the earlier attempt first. If later labs changed these policies, compare their saved settings before restoring the first-pass values below.

## Follow the steps

For each native check, use the same domain controller and account identifiers you recorded at the start. After a grant or removal, wait for its Account Activity to finish successfully before checking AD. If it fails or remains pending, inspect that activity before submitting another request.

### 1. Create a one-group test profile

1. Run [the direct membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for Alexander: `GG-VPN-USERS` and `GG-REMOTE-USERS` False, `GG-ACME-BASELINE` True. Record his DN, objectGUID and domain controller. Verify he has no requested Remote Worker assignment, active automatic test-role assignment or pending request. If the test role is already assigned from an earlier attempt, complete Step 4 cleanup before repeating the grant.
2. Open **Admin > Access Model > Access Profiles** and search for `AP-Acme-Auto-Test`. Edit the existing lab profile if present; otherwise select **Create New**. Use name `AP-Acme-Auto-Test`, description `Automatic Remote Users access for Alexander's lab test`, primary owner Priya, and your AD entitlement source. Save.
3. Open **Manage Entitlements**, find `GG-REMOTE-USERS`, verify the source and group DN, keep only that group and save. If it is already listed, do not add another entry. Leave **Allow Access Requests** off. If disabled, enable the profile using its Enable action.
4. Reopen and verify the one entitlement and disabled requestability. If returning to this lab, inspect and reuse the same test definition instead of creating another one.

**Check:** This test profile contains Remote Users only; it does not contain VPN or baseline.

### 2. Assign it through a narrowly scoped role

1. Open **Admin > Access Model > Roles** and search for `ROLE-Acme-Auto-Test`. Edit the existing disposable role if present; otherwise select **Create New**. For a new role, choose **Standard** for Role Type. Enter name `ROLE-Acme-Auto-Test`, description `Alexander-only automatic assignment comparison`, and owner your ISC administrator. Save the configuration.
2. Open **Manage Access**. If `AP-Acme-Auto-Test` is already listed, keep it without adding another entry. Otherwise select **Add Access > Access Profiles**, select only that profile and choose **Review**, verify the one profile, then **Add Access**. Reopen Manage Access to confirm. Leave role access requests disabled.
3. Open **Define Assignment**, select **Identity List**, and search for Alexander White (`acme.e020`) in **Add Identities**. Select him and use **+** to add only that identity. Verify the username and a one-person list, then **Save**. If disabled, enable the role. Select **Apply Changes** from the role list.
4. In **Admin > Dashboard > Monitor**, wait for the started identity processing to finish. Follow [Alexander's Account Activity](../../LAB-DESK.md#find-the-account-activity) for the group addition and verify Remote Users True, VPN False, baseline True.
5. Open Alexander's Access and the test role's identities/assignment details. Record its criteria-based origin. Save `AR-044-01.png` showing the one-identity list and native result.

**Check:** The role granted access because Alexander meets its identity-list criteria. No access-request approval was submitted for this automatic grant.

### 3. Add and remove a requested profile that overlaps

1. As Alexander, open **Request Center > Access Items > Access Profiles** and select `AP-Remote-Worker`. Enter `AR-044 requested overlap with automatic role`, keep immediate access and his standard account, then **Save > Review Request > Submit Request**. Record the request ID.
2. As Priya, open the matching Grant under **Approvals > Access Requests > Requested**, inspect the recipient, profile and reason, approve and confirm. Follow the activity and verify both VPN and Remote Users True; baseline remains True.
3. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data), then as Alexander reopen **My Access > Access Profiles > AP-Remote-Worker**, select **Revoke Access Profile**, enter `AR-044 remove requested profile only`, then **Submit**. As Priya, inspect and approve its removal request.
4. Follow the removal operation and check **VPN=False, Remote Users=True, baseline=True**. Refresh imported AD data and record the remaining test-role assignment. Save `AR-044-02.png`.
5. Inspect `AP-Acme-Auto-Test` in Alexander's My Access and the test role under Roles. Record that criteria-assigned role access is not available for ordinary requested-assignment revocation. Do not revoke the underlying Remote Users group as a workaround.

**Check:** Unlike the standalone overlap in AR-043, the automatic role still requires Remote Users. Record the role ID and membership criterion explaining why that group remains.

### 4. Remove the eligibility and verify deprovisioning

1. As administrator, open **Admin > Access Model > Roles > ROLE-Acme-Auto-Test > Define Assignment > Identity List**. Verify this is the disposable test role, not the foundation role.
2. Select **X** on Alexander’s row to remove him from the list, leaving no selected identities. Save, then select **Apply Changes** from the role list. Wait for processing in Monitor.
3. Follow Alexander's resulting removal activity. Verify Remote Users False, VPN False and baseline True. Confirm the test role is no longer assigned and his original AD account DN/GUID is unchanged. Save `AR-044-03.png`.
4. Only after removal is verified, disable the empty test role and `AP-Acme-Auto-Test`. Keep their definitions for reference. Disabling a profile by itself is not a reliable way to remove its groups.
5. Confirm the foundation role still has its original 24-person list for this first course pass. If you are revisiting after later labs added identities, preserve that recorded later membership instead of removing those people. Confirm Alexander retains its baseline membership. Leave Remote Worker enabled/requestable with its original Priya reviews.

**Check:** Removing test-role eligibility caused the automatic removal. You did not delete the account or weaken the baseline role.

## Check the result

The requested profile’s removal removed VPN but preserved role-required Remote Users. Removing Alexander from the test role then removed Remote Users. Baseline and the account remain.

## Engineering practice

Explain this ticket: “I removed the group, but it came back overnight.” Inspect the test role's original criteria and assignment evidence. A native AD edit does not remove the ISC eligibility that requires access. Do not reproduce the ticket by manually changing the group; use the observed criteria-removal operation to demonstrate the correct repair. Compare it with a requested role that can be revoked from My Access in AR-042. See [automatic role assignment and removal](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html).

## Finish

Keep the empty test role and its profile disabled, with no Alexander assignment or business membership. Preserve the 24-person baseline and all standard accounts. Continue to Sofia’s account-specific removal.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-044-01.png | One-person automatic role and native grant |
| AR-044-02.png | Requested-profile removal with role-required group retained |
| AR-044-03.png | Eligibility removal and baseline preserved |

[Previous: AR-043](../AR-043/README.md) · [Course outline](../../README.md) · [Next: AR-045](../AR-045/README.md)
