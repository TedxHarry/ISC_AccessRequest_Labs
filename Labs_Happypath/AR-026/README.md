# AR-026 · Select the correct account for Sofia's access

## Before you start

<a id="goal"></a>

Correlate two AD accounts to Sofia, keep automatic baseline access on her standard account, then request VPN for her second test account. Verify and remove the grant from that exact account.

Complete [AR-025](../AR-025/README.md). Prepare [Sofia's ordinary ISC session](../../M04-READINESS.md#prepare-sofias-sign-in-before-ar-026). Open Acme Admin, Acme Sofia (`acme.e009`), Acme Priya (`acme.e002`) and the AD workstation.

The second account will be called `acme.e009.admin` to distinguish its use in the lab. It receives no domain-administrator privileges. Keep your [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Record the existing account and OU coverage

1. As administrator, open **Admin > Identity Management > Identities > Sofia**. Verify E009, Acme Employees and her standard AD account `acme.e009`.
2. Record its ISC account ID, source, displayed Account Name/Account ID values, native DN and objectGUID. Keep the ISC account-record ID separate from the native identifier.
3. Run [native checks](../../M02-CHECKS.md#inspect-direct-ad-membership) for acme.e009 against GG-VPN-USERS and GG-ACME-BASELINE. VPN must be False and baseline True.
4. On the AD workstation, use **Active Directory Users and Computers > View > Advanced Features**. Copy the actual Users and AdminAccounts OU DNs from each OU's **Properties > Attribute Editor > distinguishedName**, following [the DN lookup](../../LAB-VALUES.md#copy-an-ou-user-or-group-dn).
5. In ISC, open **Admin > Connections > Sources > your AD source > Account and Group Settings**. Confirm saved User Search Scope covers both OUs and applicable membership searches include the lab Groups OU.
6. If AdminAccounts is uncovered, follow [AR-003 Section 5](../AR-003/README.md#5-add-the-acmelab-locations-to-the-isc-ad-source) to add its restricted search and membership coverage, save and reopen. Preserve existing scopes and filters. Verify connector read access to that OU before aggregation.
7. Check AD for an existing acme.e009.admin. On a repeat, inspect/reuse the matching course account; never create another because its display name differs.

**Check:** Sofia's original account and baseline are recorded, VPN is absent, and the second account's OU is inside the connector's saved search scope.

**Screenshot:** `AR-026-01.png`: original account, memberships and source coverage.

### 2. Set baseline selection before introducing the second account

1. Open **Admin > Connections > Sources > your AD source > Account Management > Account Schema**. Inspect `distinguishedName`, then Sofia's imported standard account. Confirm that attribute contains its full native DN.
2. If that supported attribute is absent from the schema, add **distinguishedName**, type **string**, single-valued and not an entitlement. Save without changing the source's existing Account ID/Account Name choices. Aggregate accounts and verify the imported value before proceeding. If an unchanged account is skipped after the schema edit, use [AR-004's unoptimized aggregation procedure](../AR-004/AGGREGATION.md).
3. Open **Admin > Access Model > Access Profiles > AP-Acme-AD-Baseline > Multiple Account Options**. Record its original criteria.
4. Set **Attribute: distinguishedName**, **Operation: Contains**, **Value:** a leading comma followed by the complete actual Users OU DN you copied.
5. For example, if your actual OU DN is `OU=Users,OU=AcmeLab,DC=isc,DC=com`, the filter value is `,OU=Users,OU=AcmeLab,DC=isc,DC=com`. Replace the entire example with your actual OU path. Do not include an account CN.
6. Keep one criterion for this course baseline. Select **Save**, leave and reopen the page. Return to the Access Profiles list and select **Apply Changes**; wait for identity processing to finish.
7. Compare the actual standard-account DN with the filter. Confirm it contains the value, and an account under the actual AdminAccounts OU would not.

**Check:** The saved criterion identifies the standard Users OU. These options govern automatically assigned profile access, not the interactive account choice in a request. With one source account, ISC does not apply this multiple-account filter yet.

**Screenshot:** `AR-026-02.png`: imported DN attribute, saved criterion and predicted match/non-match.

### 3. Create the second ordinary AD test account

Skip creation only if the matching course account already exists; inspect all values in that case.

1. In **Active Directory Users and Computers**, right-click **AcmeLab > AdminAccounts > New > User**.
2. Enter **First name: Sofia**, **Last name: Martin**, **Full name: Acme Lab - Sofia Martin Admin**.
3. Set **User logon name** and **pre-Windows 2000 username** to `acme.e009.admin`. Choose your verified UPN suffix from [AR-005](../AR-005/README.md#find-and-record-your-upn-suffix), then select **Next**.
4. Enter and confirm a private test password meeting the domain's requirements. Keep **Account is disabled** unselected, retain the domain's password-change requirements and finish the wizard. You do not need to sign in with this AD account to run the ISC exercise.
5. Open the new user's **Properties > General** and verify **Display name: Acme Lab - Sofia Martin Admin**. Save any correction.
6. With Advanced Features on, reopen the user directly from AdminAccounts. Under **Attribute Editor**, edit `employeeID` to `E009`, then **Apply > OK**.
7. Run [the native account lookup](../../LAB-VALUES.md#read-an-ad-objectguid-and-account-attributes) for `acme.e009.admin`. Record DN, objectGUID, UPN, employeeID and enabled state.
8. Inspect **Member Of**. Leave ordinary default membership only; do not add VPN, baseline or privileged groups manually.

**Check:** Two distinct native accounts now have employeeID E009, but their names, DNs and objectGUIDs differ. They represent one existing HR identity.

**Screenshot:** `AR-026-03.png`: second account's name, OU, employeeID and distinct native identifier.

### 4. Aggregate and verify correlation and baseline

1. In ISC, inspect **your AD source > Account Management > Account Correlation**. Confirm the saved course rule compares identity **Employee Number (identificationNumber)** with account **employeeID**. Keep it from AR-004; do not correlate using display name.
2. Start AD account aggregation under **Account Management > Account Aggregation**. Inspect its completed result and wait for identity processing.
3. Open **Admin > Identity Management > Identities > Sofia > Accounts**. Verify both AD accounts belong to Sofia on the same source. Record each ISC account ID and the schema's displayed Account Name/Account ID values.
4. If the new account is uncorrelated, inspect its imported employeeID and Sofia's Employee Number before a retry. Follow [AR-004's correlation and aggregation steps](../AR-004/README.md); do not create a second HR row to make it appear.
5. Compare both imported distinguishedName values with the baseline filter. Exactly one must match: acme.e009 under Users.
6. After aggregation processing finishes, select **Apply Changes** from the Access Profiles list and wait for processing to finish. Inspect Sofia's baseline assignment/account evidence.
7. Run native VPN and baseline checks for **both** usernames on the same controller.

| Account | VPN before requesting | Baseline |
|---|---|---|
| acme.e009 | False | True |
| acme.e009.admin | False | False |

**Check:** One identity has two correlated accounts, the filter uniquely matches standard, and baseline remains on standard only. An existing baseline membership does not prove a new provisioning write; record actual activity only if one occurred.

**Screenshot:** `AR-026-04.png`: two correlated accounts, unique criterion match and four native results.

### 5. Request VPN for the second account

1. In Acme Admin, inspect GG-VPN-USERS on the intended AD source. Confirm requestable status, Priya as primary owner and primary-owner grant/removal review from AR-019.
2. In Acme Sofia, verify the ISC username is `acme.e009`. Open **Request Center** for herself and choose **Access Items > Entitlements**.
3. Search GG-VPN-USERS, inspect its source/group DN and select it. Enter `AR-026: VPN for the acme.e009.admin test account` in request details, keep immediate access and **Save**.
4. Select **Review Request**, check Sofia and one entitlement, then proceed to submission.
5. In **Select Accounts**, use the AD account dropdown and choose the entry matching `acme.e009.admin` using the Account Name/Account ID values recorded in Section 4. Check the AdminAccounts DN where displayed. Do not choose by list position.
6. Capture the selected account before choosing **Submit Request** in that account-selection panel. Record the confirmation, **My Requests** entry, ID and time.
7. If only one account is available or the entries cannot be distinguished, close the selection without completing submission and return to Section 4. Do not use automatic baseline criteria to guess the request target.

**Check:** The submitted VPN request identifies Sofia as recipient and the second AD account as target.

**Screenshot:** `AR-026-05.png`: selected account and submitted request account details.

### 6. Approve and verify both accounts

1. In Acme Priya, open **Approvals > Access Requests > Requested**. Find Sofia's VPN **Grant** and open **Details**.
2. Verify the requested account matches acme.e009.admin and the reason. Approve and confirm **Reviewed**.
3. As administrator, follow [the exact request and account activity lookup](../../LAB-DESK.md#find-the-account-activity), using recipient acme.e009, the actual source and submission/decision time.
4. Open the AD operation. Record its native account identity and GG-VPN-USERS membership result.
5. After completion, repeat the four native checks from Section 4 and compare both account identifiers.

**Check:** VPN is True on acme.e009.admin and False on acme.e009. Baseline remains True on standard and False on the second account. The selected account, operation target and native change agree.

**Screenshot:** `AR-026-06.png`: reviewer account details, activity target and both accounts' memberships.

### 7. Remove VPN from that exact assignment

1. In Acme Sofia, open the home dashboard's **My Access > Entitlements > GG-VPN-USERS**.
2. Select the **Assignment** for the second account. Check its target matches the recorded AdminAccounts DN/account identifier.
3. Select **Revoke Assignment**, enter `AR-026: Remove VPN from acme.e009.admin after test`, then **Submit Request**.
4. In Acme Priya, open Sofia's VPN **Remove** request, verify its account details and approve it.
5. Follow the removal activity as administrator and compare the operation's target with the grant target.
6. Repeat both accounts' VPN/baseline checks. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data) if needed and confirm the test VPN assignment is gone.

**Check:** VPN is absent from both accounts. Standard retains baseline, the second account does not receive baseline, and both accounts remain correlated to Sofia.

**Screenshot:** `AR-026-07.png`: account-specific removal and final four native results.

## Check the result

### If the result differs

If correlation fails, trace scope → imported employeeID → identity Employee Number → correlation rule. If baseline appears on both accounts, inspect the saved criterion and other assignments before continuing; do not remove baseline from the original account. If VPN reaches an unexpected account, compare the submitted selection with the actual activity target before deciding whether the error was selection or fulfillment. Never substitute manual AD membership changes for requested-assignment removal.

### Explain the result

Name the three separate decisions you verified: identity correlation, automatic baseline selection and interactive request selection.

<details>
<summary>Check your explanation</summary>

Employee Number/employeeID correlation linked both accounts to Sofia. The baseline profile's DN criterion selects the standard account for automatic profile assignment when multiple accounts exist. The VPN entitlement request explicitly selected the second account. Removal then identified that same requested assignment. One decision does not substitute for another.

</details>

### Final verification

- [ ] Sofia has one HR identity and two distinct correlated AD accounts.
- [ ] Baseline criteria uniquely match standard and are saved before the extra account is processed.
- [ ] Standard alone retains baseline.
- [ ] VPN request, review, activity and native state identify the second account.
- [ ] Removal targeted that assignment; neither account retains VPN.
- [ ] Both accounts, baseline criteria, Finance segment and other retained course settings remain.

## Finish

### Leave this in place

Keep both accounts for AR-027, AR-045 and later exercises. Keep the baseline Multiple Account Options criterion. On a first pass, there are now 24 identities and 25 lab AD accounts; baseline still covers the 24 standard accounts.

[Automatic multiple-account options](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) · [Account selection in requests](https://developer.sailpoint.com/discuss/t/new-capability-multi-account-support/105600) · [Targeted user removal](https://documentation.sailpoint.com/saas/user-help/requests/requesting_access_removal.html)

### Screenshots to capture

| Filename | What to show |
|---|---|
| AR-026-01.png | Original account, memberships and saved source scope |
| AR-026-02.png | DN attribute and baseline selection criterion |
| AR-026-03.png | Second account and employeeID E009 |
| AR-026-04.png | Two correlated accounts and clean memberships |
| AR-026-05.png | Explicit second-account selection |
| AR-026-06.png | Approval/activity account target and native grant |
| AR-026-07.png | Targeted removal and final memberships |

Exclude passwords and invitation links.

[Previous: AR-025](../AR-025/README.md) · [Lab index](../README.md) · [Next: AR-027](../AR-027/README.md)
