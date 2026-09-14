# AR-017 · Present Finance access through an application

<a id="goal"></a>

In this lab, you'll associate the reporting profile with Finance Services, request it from that application and verify the resulting AD access before removal.

## Before you start

Complete [AR-016](../AR-016/README.md), including removal. Use Acme Admin, Acme Olivia, Acme Daniel and the AD workstation. Keep your [journal](EVIDENCE.md) and [module state](../../M03-READINESS.md) open.

AP-Finance-Reporting is enabled/requestable with Daniel reviewing grants and removals. Olivia has no Reporting or VPN membership, profile assignment or pending request. Confirm those conditions using AR-016 Section 1 before continuing.

## Follow the steps

### 1. Record the existing profile

1. In Acme Admin, open **Admin > Access Model > Access Profiles > AP-Finance-Reporting**.
2. Record its ID using [the object ID steps](../../LAB-VALUES.md#find-an-access-profile-or-role-id), source, owner, two entitlements and request/removal reviewers.
3. Inspect Olivia's **Access** and native memberships. Record the original account DN/objectGUID and clean business access.
4. Search **Admin > Access Model > Applications** for `Finance Services`. Reuse the course application if its configuration matches the following sections; otherwise create it in Section 2.

**Check:** You have one existing reporting profile to associate. Do not create a second copy for the application.

**Screenshot:** `AR-017-01.png`: profile identity/settings and Olivia's starting access.

### 2. Create and configure Finance Services

1. As administrator, open **Admin > Access Model > Applications > Create Application**.
2. Enter **Name** `Finance Services`, **Description** `Finance reporting and accounts-payable access for Acme employees`, **Owner** Daniel (`acme.e003`) and **Source** your recorded AD source. Select **Save**.
3. On **Configuration**, set **App Accounts Created By** to **Admin (IT)**.
4. Under **Account Source**, select **Specific Users from Source** and your AD source. This setting determines which account holders see the application in password management based on its associated profiles. It is not a Finance-department request restriction.
5. Under **Request Center Options**, select **Visible in Request Center** and **Allow Access Requests**.
6. Select **Save** before leaving the tab. Reopen Configuration and confirm all saved values.

**Check:** Finance Services points to your existing AD source with both request options selected. You have not created a separate Finance source or account-creation policy.

### 3. Associate the reporting profile and enable the application

1. Open Finance Services' **Access Profiles** tab.
2. In **Add Access Profile**, type `AP-Finance-Reporting`. Select the matching profile and select the **Add (+)** icon.
3. Confirm it appears once in the list, then select **Save**.
4. Turn on **Enable for Users**. This also enables the access application for password management; retain the existing AD password policy and do not run a password-change exercise here.
5. Wait for the identity refresh triggered by the association to finish under **Admin > Dashboard > Monitor**.
6. Reopen the application. Confirm the profile association, both Request Center options and Enable for Users are saved.

**Check:** The application contains one enabled/requestable Finance profile. The profile's groups and Daniel's review policy remain unchanged.

**Screenshot:** `AR-017-02.png`: application source, options, profile association and enabled state.

### 4. Request through Finance Services

1. Switch to Acme Olivia and confirm `acme.e011` in the user menu.
2. Open **Request Center**, choose **Request for Myself** if asked, then choose **Applications**.
3. Search `Finance Services` and select the application. Inspect its offered access profiles.
4. Select **AP-Finance-Reporting**, then **Save Selections**. Do not add a separate VPN entitlement.
5. Open the selected item's request details, enter `AR-017: Reporting requested through Finance Services`, keep immediate access and confirm Olivia's standard account if prompted. Select **Save**.
6. Select **Review Request**, verify Olivia and the reporting profile, then **Submit Request** once.
7. Open **My Requests**. Record the item type/name, submission time and available request ID.

**Check:** Olivia found the access through Finance Services, but the submitted access item is AP-Finance-Reporting. An application card by itself is not a fulfilled access request.

**Screenshot:** `AR-017-03.png`: application choice, selected profile and submitted request.

### 5. Approve and verify the existing account

1. In Acme Daniel, open **Approvals > Access Requests > Requested**. Find Olivia's reporting **Grant**, inspect the reason and approve it. Confirm the recorded decision under **Reviewed**.
2. In Acme Admin, inspect [the matching request and account activity](../../M02-CHECKS.md#inspect-a-request-as-administrator).
3. After the operations finish, run [native membership checks](../../M02-CHECKS.md#inspect-direct-ad-membership) for Olivia against `GG-FIN-REPORTING`, `GG-VPN-USERS` and `GG-ACME-BASELINE`.
4. Compare the AD account's DN and objectGUID with Section 1. Open Olivia's ISC **Accounts** and **Access**; [refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data) if needed.
5. Record the application, requested profile, reviewer, source and native groups in separate journal fields.

**Check:** Both business groups and baseline are True on the original AD account. This proves the lab's directory access; it does not prove a login to an external Finance product.

**Screenshot:** `AR-017-04.png`: decision/activity and two native additions on the original account.

### 6. Remove the assignment and retain the catalog entry

1. In Acme Admin, open **Admin > Identity Management > Identities > Olivia > Access > Access Profiles**.
2. Open **AP-Finance-Reporting > Details**, verify it is revocable, select **Revoke Access Profile**, enter `AR-017: Application request test complete`, then **Revoke**.
3. In Acme Daniel, find Olivia's profile **Remove** request in **Approvals > Access Requests > Requested** and approve it.
4. Follow the removal activity as administrator. Recheck the two native business groups and baseline.
5. Refresh imported AD data if needed. Confirm Olivia's reporting assignment is gone. Reopen Finance Services as administrator and verify its association and request options remain.

**Check:** Olivia lacks Reporting and VPN, retains baseline and the original account, and Finance Services still offers the reporting profile for another request.

**Screenshot:** `AR-017-05.png`: completed removal, final memberships and retained application association.

## Check the result

### If the result differs

If the application is missing, check Enable for Users and both Request Center options. If it opens without the profile, check the saved association, profile source, enabled/requestable state and whether Olivia already owns the access. Compare a direct **Access Items > Access Profiles** search in the same session. Inspect existing segments rather than assuming the application account-source setting restricts Finance requests.

### Explain the result

Use your request details to answer: what did Finance Services change about Olivia's request, and what still controlled its approval and fulfillment?

<details>
<summary>Check your explanation</summary>

Finance Services gave Olivia a business name under which to find the reporting profile. The profile remained the requested item, Daniel's profile policy supplied the review, and its two entitlements supplied the AD changes. The application did not create another AD account or restrict requests to the Finance department.

</details>

### Final verification

- [ ] Finance Services uses the existing AD source and contains AP-Finance-Reporting once.
- [ ] The application and profile are enabled for requests.
- [ ] Olivia requested the profile through Applications; Daniel reviewed it.
- [ ] Both native groups were added and then removed through ISC.
- [ ] The original account, baseline, Lucas's VPN and application definition remain.
- [ ] No unresolved test request or operation remains.

## Engineering practice

### Practice checkpoints

Find AP-Finance-Reporting directly and through Finance Services in Olivia's Request Center. Compare its name and ID with your completed request. Explain why these are two ways to find the same profile. Do not submit another request.

### Diagnose this ticket

This is a supplied practice case. Write your diagnosis before opening the answer; keep it separate from failures you actually observe in the tenant.

> The application has Visible in Request Center and Allow Access Requests selected. The profile is associated and can be requested directly. Finance Services itself is absent for Olivia. The configuration export shows Enable for Users is off.

Record the evidence you would inspect, the smallest correction, the repeat check and the state you would leave for the next lab.

<details>
<summary>Compare your diagnosis</summary>

Use Section 3 to enable the application for users, then reopen it to verify the saved state. Refresh Olivia's session and repeat the Applications search before submitting once. The two Request Center options do not override a disabled application. Complete the request/native checks and Section 6 removal.

</details>

## Finish

### Leave this in place

Keep Finance Services enabled for users, visible and requestable with the Reporting profile associated. Olivia finishes without either Finance business group. Use [resume guidance](../../M03-READINESS.md#resume-or-repeat-safely) if returning later.

[Access applications](https://documentation.sailpoint.com/saas/help/access/app-config.html) · [Request Center](https://documentation.sailpoint.com/saas/user-help/requests/request_center.html)

### Resume or repeat

Inspect the current object and request status before repeating. Reuse the saved course definitions when their source, access and policies match. A completed grant resumes at target verification and removal; a pending request resumes at its current review or provisioning stage. If cleanup is already complete, retain the definitions and use your evidence for the comparison. Follow the [module resume procedure](../../M03-READINESS.md#resume-or-repeat-safely); do not create duplicate objects or manually clear AD memberships.

### Screenshots to capture

| Filename | What to show |
|---|---|
| AR-017-01.png | Existing profile and clean recipient |
| AR-017-02.png | Application source, options, association and enablement |
| AR-017-03.png | Application selection and resulting profile request |
| AR-017-04.png | Approval/activity and original account memberships |
| AR-017-05.png | Removal and retained catalog configuration |

Keep credentials and registration links out of captures.

[Previous: AR-016](../AR-016/README.md) · [Course outline](../../README.md) · [Next: AR-018](../AR-018/README.md)
