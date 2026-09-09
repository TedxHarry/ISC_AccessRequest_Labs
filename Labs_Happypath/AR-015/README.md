# AR-015 · Request and remove a two-group access profile

## Goal

Create one Remote Worker item containing VPN and remote-tool access. Approve it for Liam, deny it for Olivia, then remove Liam's test assignment through ISC. Verify each result in AD.

Keep the [Module 2 starting checks](../../M02-READINESS.md) beside your journal.

## Before you start

Complete [AR-014](../AR-014/README.md). Use Acme Admin, Acme Liam (`acme.e008`), Acme Olivia (`acme.e011`), Acme Priya (`acme.e002`) and the AD workstation. Prepare Liam using [the additional-session steps](../../M02-CHECKS.md#prepare-olivia-or-liam-to-sign-in).

Liam and Olivia each have one linked standard AD account and baseline access, but neither `GG-VPN-USERS` nor `GG-REMOTE-USERS`. They have no Remote Worker assignment or pending request. Preserve Lucas's approved VPN and all 24 baseline assignments. Keep your [journal](EVIDENCE.md) open.

## 1. Record the two recipients before requesting

1. As administrator, open each identity under **Admin > Identity Management > Identities**. Inspect **Accounts** and **Access** for existing business assignments.
2. In each user's own session, check **Request Center > My Requests** for a pending request.
3. Run the [native membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for Liam and Olivia against both business groups. Use the same controller throughout.
4. Record account DNs, objectGUIDs, group DNs and all four membership results.

**Check:** Both people start without either group or a profile assignment. If access already exists, inspect its origin before continuing; preserve unrelated access.

**Screenshot:** `AR-015-01.png`: Liam and Olivia before memberships and account identifiers.

## 2. Create AP-Remote-Worker

Use Acme Admin. If the named course profile exists, inspect its source and settings before reusing it; do not create a duplicate.

1. Open **Admin > Access Model > Access Profiles > Create New**.
2. On **Configuration**, enter:

| Field | Value |
|---|---|
| Name | AP-Remote-Worker |
| Primary Owner | Priya Shah, acme.e002 |
| Description | VPN and remote-tool access for Acme remote workers |
| Entitlement Source | Your recorded AD source |

3. Select **Save**. Verify the source carefully before saving; it cannot be edited on an existing profile.
4. Open **Manage Entitlements**. Search `GG-VPN-USERS`, verify its DN and select **+** to add it.
5. Add `GG-REMOTE-USERS` in the same way, then select **Save**.
6. Confirm the list contains exactly these two entitlements. Do not include GG-ACME-BASELINE or add this profile to the baseline role.

**Check:** One profile contains the two intended groups from the correct source. Creating its definition has not assigned it to Liam or Olivia.

## 3. Configure grant and removal review

1. Open the profile's **Access Requests** page and enable **Allow Access Requests**.
2. Under **Reviewing Access Requests**, select **Require Approval > Reviewer**. Choose **Primary Owner** and select **+**. Keep it as the only grant reviewer.
3. Require comments when the user requests access and when the approver denies.
4. Leave **Require Access Request Form** and **Require End Date** off for this immediate-access exercise. Record applicable timeout, reminders and escalation settings.
5. Under **Reviewing Removal Requests**, enable **Require Approval for Removal**. Choose **Primary Owner** and select **+**. Keep one removal reviewer too.
6. Select **Save**. Enable the profile using **Enable Access Profile**, or **Actions > Enable** from the profile list.
7. On the Access Profiles list, select **Apply Changes**. Inspect **Admin > Dashboard > Monitor** until identity processing finishes.
8. Reopen the profile and check its two entitlements, enabled state, requestability and both reviewer lists.

**Check:** Priya is configured to review both grants and removals for this profile. Its approval policy is configured separately from the individual VPN entitlement.

**Screenshot:** `AR-015-02.png`: profile source, entitlements, grant and removal settings.

## 4. Request the profile as Liam

1. Switch to Acme Liam and verify `acme.e008` in the user menu.
2. Open **Request Center**, choose **Request for Myself** if prompted, then **Access Items > Access Profiles**.
3. Search `AP-Remote-Worker` and inspect **Details**. Select the profile, not the two individual entitlement cards.
4. In request details, enter `AR-015: Remote Worker acceptance test`. Keep immediate access and select Liam's standard account if prompted. Select **Save**.
5. Select **Review Request**, confirm Liam and one profile, then **Submit Request** once.
6. Open **My Requests** and record the identifier where displayed and the submission time. Use administrator details when needed to obtain the ID.

**Check:** One profile request for Liam is pending. Two groups are included in the requested item.

## 5. Approve and verify both groups

1. In Acme Priya, open **Approvals > Access Requests > Requested**.
2. Select Liam's AP-Remote-Worker **Grant** request. Check the recipient, profile and reason, then select **Approve** and confirm.
3. Open **Reviewed** and record the decision. In Acme Admin, follow the [request and activity checks](../../M02-CHECKS.md#inspect-a-request-as-administrator) for Liam.
4. Inspect the operations for both native group values. Wait for completion and record activity IDs and final results.
5. Repeat the native AD checks. Both business memberships must now be present on Liam's original account; compare objectGUID and DN with Section 1.
6. In ISC, inspect Liam's **Access > Access Profiles** and **Accounts > AD account**. If imported membership is stale, use [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data).

**Check:** Liam has the profile and both groups, with matching request/activity/native evidence. One successful group operation is not enough to pass.

**Screenshots:** `AR-015-03.png`: approval and activity. `AR-015-04.png`: Liam's two memberships and unchanged account identifiers.

## 6. Run Olivia's denial

1. Recheck that Olivia still lacks both groups and has no pending profile request.
2. In Acme Olivia, repeat Section 4 for **AP-Remote-Worker**, using reason `AR-015: Remote Worker denial check`. Verify Olivia as recipient and her standard account. Record this separate request ID.
3. In Acme Priya, open Olivia's Grant request and select **Deny**. Enter `Remote-work requirement has not been approved` and confirm.
4. Record the denied result in **Reviewed** and administrator request details.
5. Repeat both native checks for Olivia on the same controller. Neither membership should have been added.

**Check:** The denied profile request left Olivia without either business group.

**Screenshots:** `AR-015-05.png`: Olivia's denied request. `AR-015-06.png`: unchanged native memberships.

## 7. Remove Liam's completed test assignment

1. In Acme Admin, open **Admin > Identity Management > Identities**, select Liam, then **Access > Access Profiles**.
2. Open **AP-Remote-Worker > Details**. Confirm it is Liam's test assignment and is revocable.
3. Select **Revoke Access Profile**, enter `AR-015: Remove completed Remote Worker test`, then select **Revoke** once. Record the removal request separately from the grant.
4. In Acme Priya, open **Approvals > Access Requests > Requested**. Find Liam's profile request and verify the action is **Remove**. Approve it and record the decision.
5. In Acme Admin, follow the removal request and account activity until the operations finish.
6. Check AD: Liam must now lack both business groups but retain **GG-ACME-BASELINE** and his original account. Refresh imported data if needed and confirm the profile assignment is gone.
7. Check that Olivia still lacks both groups and Lucas still has VPN. Keep the enabled profile definition for later labs.

**Check:** Liam's test grant is removed through ISC; baseline and Lucas's independent grant are preserved.

**Screenshot:** `AR-015-07.png`: removal decision/activity and final memberships.

## If the result differs

If one group is missing after approval, inspect that group's operation and exact DN. If removal is unavailable, inspect the assignment's origin and revocability. If a group remains after removal, inspect other assignments and operation results. Do not remove membership manually or request individual groups to disguise an incomplete profile operation.

## Assess your result and save C02

Without following the steps again, explain where to find proof for Liam's grant, Olivia's denial and Liam's removal. Record which evidence belongs to each request.

Create a private **C02-First-Requests** folder. Keep all six module journals, source/item/profile IDs, saved policies, Lucas's retained VPN evidence and the three AR-015 outcomes. Include a short handover naming Priya, both group DNs and the final recipient states. C02 is evidence, not a tenant backup.

<details>
<summary>Check your C02 handover</summary>

Your evidence should identify three separate AR-015 requests: Liam’s grant, Olivia’s denial and Liam’s removal. Liam has both groups only between the completed grant and removal. Olivia has neither throughout. Both retain their original accounts and baseline access. Lucas retains his earlier VPN grant. The enabled two-group profile remains available with Priya reviewing both grants and removals. Match real identifiers, operations and timestamps; do not close a partial fulfillment or unexplained removal as passed.

</details>

## Final verification

- [ ] The profile is enabled and requestable, with exactly two intended entitlements.
- [ ] Priya reviews profile grants and removals.
- [ ] Liam's approval granted both groups to his original account.
- [ ] Olivia's denial granted neither group.
- [ ] Liam's removal removed both business groups and the profile assignment.
- [ ] All baseline assignments and Lucas's VPN remain.
- [ ] No unresolved test request or operation remains; C02 is saved.

## Leave this in place

Retain AP-Remote-Worker and its policies. Liam and Olivia finish without either business group; Lucas retains VPN. Keep all 24 standard accounts and baseline assignments.

[Profile request/removal policies](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html) · [Profile creation and revocation](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)

## Screenshots to capture

Capture these at the matching steps. Use extra images when needed to show all evidence. Exclude credentials, invitation links and private mailbox details.

| Filename | What to show |
|---|---|
| AR-015-01.png | Liam and Olivia before memberships |
| AR-015-02.png | Profile groups and grant/removal policies |
| AR-015-03.png | Liam approval and activity |
| AR-015-04.png | Liam two native memberships |
| AR-015-05.png | Olivia denied request |
| AR-015-06.png | Olivia unchanged memberships |
| AR-015-07.png | Liam removal and final native state |

[Previous: AR-014](../AR-014/README.md) · [Lab index](../README.md)

Module 2 is complete when the C02 checks pass. Keep the retained state for the next module.
