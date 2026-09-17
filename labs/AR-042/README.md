# AR-042 · Request removal at the correct access level

In this lab, you'll request and remove an entitlement, a profile and a role for Olivia, checking the object and account each removal targets.

## Before you start

Complete AR-040’s removal control, or start from AR-033 if date controls are unavailable. AR-041 observations can remain pending for Henry because this lab uses Olivia (`acme.e011`). Open Acme Olivia, Priya (`acme.e002`), Daniel (`acme.e003`), Acme Admin and the AD workstation. Keep your [journal](EVIDENCE.md) open.

If you are resuming, check your journal, current assignments and pending requests before submitting again. Resolve the earlier attempt first. If later labs changed these policies, compare their saved settings before restoring the first-pass values below.

## Follow the steps

For each native check, use the same domain controller and account identifiers you recorded at the start. After a grant or removal, wait for its Account Activity to finish successfully before checking AD. If it fails or remains pending, inspect that activity before submitting another request.

### 1. Prepare the three removal policies

1. As administrator, open **Admin > Identity Management > Identities > Olivia**. Record her linked standard AD account DN, objectGUID and the domain controller. Check Access and pending requests; no VPN, Finance Reporting or Finance Analyst test assignment may remain.
2. Use [the native membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e011` and `GG-VPN-USERS`, `GG-FIN-REPORTING`, `GG-FIN-AP`, `GG-ACME-BASELINE`. The three business results must be False and baseline True.
3. Open **Admin > Access Model > Entitlements**, find `GG-VPN-USERS` on your source, then **Actions > Edit > Access Requests**. Record the original grant/removal settings. Grant reviewer should be Primary Owner/Priya. Under removal, enable **Require Approval for Removal**, keep the existing **Primary Owner** entry if present. If missing, select **Primary Owner** and add it with **+**. Keep one removal reviewer, save and reopen to verify.
4. Open **Admin > Access Model > Access Profiles > AP-Finance-Reporting > Edit > Access Requests**. Record original settings and configure one Primary Owner removal reviewer in the same way. Its owner and grant reviewer must be Daniel. Save and reopen.
5. Open **Admin > Access Model > Roles > ROLE-Finance-Analyst > Edit > Access Requests**. Record its original settings and configure Primary Owner/Daniel removal approval. Preserve grant review, requestability and all other settings. Save and reopen. Apply the saved profile/role changes from their list page and wait for processing. Save `AR-042-01.png` for the three configurations.

**Check:** The three tests use user-initiated removal requests with explicit reviewers. The administrator role-revocation route from AR-019 is a different action.

### 2. Request and remove direct VPN

1. As Olivia, open **Request Center > Access Items > Entitlements**, select `GG-VPN-USERS` on the recorded source, enter `AR-042 A direct VPN`, keep immediate access and her standard account, then **Save > Review Request > Submit Request**. Record the request ID from My Requests.
2. As Priya, open Olivia's matching Grant under **Approvals > Access Requests > Requested**, inspect its account and reason, approve and confirm. As administrator, follow [Account Activity](../../LAB-DESK.md#find-the-account-activity) to completion.
3. Repeat the four native checks. VPN must be True, both Finance groups False and baseline True.
4. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data), then as Olivia reopen the home dashboard's **My Access > Entitlements > GG-VPN-USERS**. Select its **Assignment** in the left navigation. Verify the standard account and select **Revoke Assignment**. Enter `AR-042 A complete` and **Submit Request**.
5. Record the removal ID. As Priya, inspect the matching Remove request and approve. Follow its removal activity, verify all three business memberships False, and refresh imported AD data. Save `AR-042-02.png` showing the assignment, review and final native result.

**Check:** You removed the direct entitlement assignment. Do not begin the profile test with VPN still present.

### 3. Request and remove Finance Reporting

1. As Olivia, select `AP-Finance-Reporting` under **Request Center > Access Items > Access Profiles**. Enter `AR-042 B reporting profile`, keep immediate access and her standard account, then save, review and submit. Record the ID.
2. As Daniel, inspect and approve the matching Grant. Follow its activity and verify VPN=True, Reporting=True, FIN-AP=False and baseline=True.
3. Refresh imported AD data, then as Olivia reopen **My Access > Access Profiles**, select `AP-Finance-Reporting`, choose **Revoke Access Profile**, enter `AR-042 B complete`, and **Submit**.
4. As Daniel, inspect and approve that profile's Remove request. Record its ID and activity. Verify both VPN and Reporting are removed and the other two checks are unchanged. Refresh imported AD data and confirm the profile assignment is gone. Save `AR-042-03.png`.

**Check:** The revocation targets the profile, not one of its individual group rows.

### 4. Request and remove Finance Analyst

1. As Olivia, select `ROLE-Finance-Analyst` under **Request Center > Access Items > Roles**. Enter `AR-042 C requested role`, keep immediate access and her standard account, then save, review and submit. Record the ID.
2. As Daniel, inspect and approve the role Grant. Follow its activity and verify VPN, Reporting and FIN-AP True; baseline remains True.
Before the next removal, refresh imported AD data and inspect the Finance profiles in Olivia’s **My Access > Access Profiles**. Record the role-supplied assignment and unavailable profile revocation. Save `AR-042-05.png` for the engineering comparison.

3. Refresh imported AD data, then as Olivia reopen **My Access > Roles > ROLE-Finance-Analyst** and select the requested **Assignment**. Check its account and choose **Revoke Assignment**. Enter `AR-042 C complete`, then **Submit Request**.
4. As Daniel, inspect and approve the matching role removal request. Record the removal ID, decision and completed activity. Verify all three business groups False and baseline True; refresh the imported account and confirm the requested role assignment is gone. Save `AR-042-04.png`.

**Check:** This user removal request follows the role's removal policy. Do not substitute administrator View Assignments > Revoke Assignment and then expect the same review.

### 5. Restore and compare

1. Restore the original removal settings recorded in Step 1 on the entitlement, profile and role. Save and reopen each page; apply profile/role changes from their list page and wait for processing. The course originals should still have Primary Owner reviews, but use your saved values rather than guessing.
2. Complete three journal rows showing selected object type, account, grant/removal IDs, reviewer and native results. Record the route as **My Access** in all three rows.
3. Verify Olivia has no pending test request or business assignment and run the direct AD check for Lucas (`acme.e012`) to verify his retained `GG-VPN-USERS` membership is True. Preserve all baseline accounts and definitions.

**Check:** Each removal starts at the level of its requested assignment and ends with a verified target result.

## Check the result

Olivia’s three independent grant/removal cycles are complete, removal policies are restored and her business groups are absent. Baseline and Lucas’s VPN remain.

## Engineering practice

Use the Finance-profile capture taken before the role removal in Step 4. Explain why direct profile revocation was unavailable for role-supplied access. Do not attempt a separate group removal. Compare this with the profile-only case in Step 3 and the administrator revocation recorded in AR-019. The assignment origin and the action you choose both matter. See [user removal routes](https://documentation.sailpoint.com/saas/user-help/requests/requesting_access_removal.html).

## Finish

Keep all access definitions and their original policies. Leave Olivia without the three business memberships or pending requests. Keep any Henry timed observation separate and explicitly pending.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-042-01.png | Three saved removal policies |
| AR-042-02.png | Direct entitlement removal and target result |
| AR-042-03.png | Profile removal and target result |
| AR-042-04.png | Requested-role removal and target result |
| AR-042-05.png | Engineering practice: role-supplied profile before role removal |

[Previous: AR-041](../AR-041/README.md) · [Course outline](../../README.md) · [Next: AR-043](../AR-043/README.md)
