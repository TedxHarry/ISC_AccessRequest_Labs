# AR-003 — Validate AD and Aggregate the Lab Data

**Level:** Beginner

**Prerequisites:** Your existing AD source is connected to the training domain. You can administer that source in ISC and create users, organizational units (OUs), and groups in the AD lab area. Lucas Brown (`acme.e012`) exists in Acme Employees from [AR-001](../AR-001/README.md).

## Your assignment

Get Lucas's AD account and the 14 Acme groups into ISC. You will check the connection, confirm which AD locations the source reads, and inspect the imported objects.

The HR import created HR accounts and identities. It did not create users in Active Directory. Start with one AD user here; AR-004 correlates Lucas; AR-005 through AR-007 configure and run provisioning for the remaining standard accounts.

Keep your actual source name, directory paths, and results in the [lab journal](EVIDENCE.md). Whenever these instructions say **your AD source**, select the existing Active Directory source in your tenant.

## 1. Identify and test your AD source

1. Open **Admin > Connections > Sources** and select your Active Directory source.
2. Record its name and copy its source ID from the source's browser URL. Keep the ID associated with this AD source, separate from the Acme HR source ID.
3. Open **Review and Test**. Review the displayed configuration and select **Test Connection**.
4. Record the result. If it fails, keep the error message and use the troubleshooting table below before aggregating.

**Check:** The connection test succeeds. You still need to verify the account and groups individually in the following sections. [AD connection test](https://documentation.sailpoint.com/connectors/active_directory/help/common/topics/review_and_test.html)

## 2. Prepare the AD lab locations

1. On your AD administration workstation, open **Server Manager > Tools > Active Directory Users and Computers**.
2. Expand the training domain and locate the parent location reserved for your lab objects.
3. If `AcmeLab` does not exist there, right-click the parent and select **New > Organizational Unit**. Enter `AcmeLab` and select **OK**.
4. Under `AcmeLab`, create three child OUs using the same action: `Users`, `AdminAccounts`, and `Groups`. Reuse these OUs if they already exist.
5. Select **View > Advanced Features**. Open each child OU's **Properties > Attribute Editor**, select `distinguishedName`, and copy its value into your journal.

Your structure should be:

```text
AcmeLab
├── Users
├── AdminAccounts
└── Groups
```

For example, a Users OU could have the distinguished name (DN) `OU=Users,OU=AcmeLab,DC=training,DC=example,DC=com`. Copy the value from your own directory; your domain and parent OUs will differ.

**Check:** You have three actual OU DNs recorded. Leave AdminAccounts empty for now; Sofia's separate administrative account is introduced in AR-026.

## 3. Prepare Lucas's AD account

First check whether `acme.e012` already exists in the training domain. In Active Directory Users and Computers, right-click the domain, select **Find**, choose **Users, Contacts, and Groups**, and search for Lucas. Inspect the **Account** tab of a matching user to confirm the logon name. Reuse the course account if it exists; do not create a second account for the same username.

If it is missing:

1. Right-click **AcmeLab > Users** and select **New > User**.
2. Enter these values:

| Field | Value |
|---|---|
| First name | Lucas |
| Last name | Brown |
| Full name | Acme Lab - Lucas Brown |
| User logon name | acme.e012 |
| UPN suffix dropdown | Your training domain's configured suffix |
| User logon name (pre-Windows 2000) | acme.e012 |

3. Select **Next**, enter a password that meets your lab domain's policy, and retain the normal password-change settings. Keep the password out of the journal and screenshots.
4. Select **Next > Finish**.
5. Open the account's **Properties**. On **General**, set **Display name** to `Acme Lab - Lucas Brown` if needed. On **Organization**, set **Department** to `Finance` and **Title** to `Reporting Analyst`. Select **Apply**.

These use the standard AD user-creation dialog. [Microsoft's user and group creation steps](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/rds-user-management)

For a reused account, verify the same logon name and lab attributes. Record its current OU. AR-026’s later standard-account selection rule expects accounts under **AcmeLab/Users**. If this dedicated course account is elsewhere, an authorized AD lab administrator can use **Move** to place it in Users before this import. Record its new DN and unchanged objectGUID. Do not move an account used for unrelated work. If it must stay elsewhere, record an environment exception requiring tested alternative account-selection criteria in AR-026; aggregation coverage alone does not resolve that exception.

**Check:** The account's pre-Windows 2000 logon name is `acme.e012`. Open the user directly from its OU and copy its `distinguishedName` from **Properties > Attribute Editor**; the tab may be absent when opening a Find result. The HR email `acme.e012@example.com` is a course placeholder; it does not establish your AD logon suffix.

## 4. Create the 14 lab groups

In **AcmeLab > Groups**, create each missing group below:

1. Right-click the OU and select **New > Group**.
2. Enter the exact group name from the table. Keep the same pre-Windows 2000 group name.
3. Set **Group scope** to **Global** and **Group type** to **Security**, then select **OK**.
4. Open the group's **Properties** and add the listed description.
5. Repeat for the remaining groups. If a course group already exists, inspect and record it instead of creating a duplicate.

| Group name | Description |
|---|---|
| GG-VPN-USERS | Acme lab - shared remote connectivity |
| GG-REMOTE-USERS | Acme lab - remote-work tools |
| GG-FIN-AP | Acme lab - accounts payable |
| GG-FIN-REPORTING | Acme lab - financial reporting |
| GG-HR-PAYROLL | Acme lab - payroll |
| GG-HR-BENEFITS | Acme lab - benefits |
| GG-IT-HELPDESK | Acme lab - support tools |
| GG-IT-ADMINS | Acme lab - simulated elevated access |
| GG-ENG-GITHUB | Acme lab - engineering repository access |
| GG-ENG-DEVOPS | Acme lab - engineering operations |
| GG-SALES-CRM | Acme lab - sales tools |
| GG-SEC-SOC | Acme lab - security operations |
| GG-PROD-SUPPORT | Acme lab - temporary production support |
| GG-INTERNAL-NOREQUEST | Acme lab - non-requestable control |

Keep newly created groups empty. These groups simulate application access, so do not nest them into Domain Admins or other privileged groups. For reused groups, record existing members; do not remove them to make the groups empty.

**Check:** All 14 names exist in your lab directory. Open `GG-VPN-USERS > Properties > Attribute Editor` and record its `distinguishedName`.

## 5. Update the AD source settings before aggregation

Complete this section now, before starting either aggregation. Creating an OU in AD does not add that OU to ISC's source configuration.

### Copy your actual OU paths

Use the DNs collected in Section 2. The examples below assume AcmeLab is directly under `training.example.com`; replace the entire example with your actual DN, including any parent OUs.

| ISC setting | Lab location | Example Search DN |
|---|---|---|
| User Search Scope, entry 1 | Users | `OU=Users,OU=AcmeLab,DC=training,DC=example,DC=com` |
| User Search Scope, entry 2 | AdminAccounts | `OU=AdminAccounts,OU=AcmeLab,DC=training,DC=example,DC=com` |
| Group Search Scope | Groups | `OU=Groups,OU=AcmeLab,DC=training,DC=example,DC=com` |

AdminAccounts is empty in this lab. Include its coverage now; you will create Sofia's second account there in AR-026. If you reused Lucas or groups in another OU, include their actual locations too.

### Open and record the current configuration

1. Open **Admin > Connections > Sources > your AD source > Account and Group Settings**.
2. Record all existing User and Group Search DNs, LDAP filters, and membership-search settings in your journal. Capture the page before changing it.
3. Check whether an existing parent search already covers each lab OU. For example, a search under AcmeLab may cover its children. Confirm the search depth and filters permit the lab objects. Keep that entry if it already provides the required coverage; do not add overlapping entries unnecessarily.

### Set the user searches

1. Under **User Search Scope**, use **Add Another** for each uncovered user OU. If the section has a single empty entry, fill that entry first.
2. In **Search DN**, paste the actual **Users OU DN**. Use an OU DN, not Lucas's account DN.
3. For this new entry restricted to the lab Users OU, leave the optional **LDAP Search Filter** blank. Keep filters on existing entries unchanged. A filter on an existing broader entry must allow Lucas; otherwise add a separate lab entry that does.
4. Repeat for **AdminAccounts** if it is not already covered.
5. Select **Save**.

**Check:** Lucas's actual OU is included in a saved user search that permits `acme.e012`. AdminAccounts also has coverage. The Groups OU alone would not cover Lucas in the sibling Users OU.

### Set the group search

1. Under **Group Search Scope**, keep existing entries. If Groups is not covered, select **Add Another** and paste the actual **Groups OU DN** into **Search DN**.
2. Leave **LDAP Search Filter** blank on the new entry restricted to the lab Groups OU. Do not copy a user-only filter into a group search.
3. Select **Save**.

If Group Search Scope was entirely empty, the connector was using the account search scope. Before introducing explicit group entries, retain coverage for groups in the previously searched locations as well as the lab Groups OU. Record those locations first; entering only the new Groups OU could drop existing coverage. Use group-appropriate filters rather than copying user-only conditions. [AD user and group search settings](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/account_and_group_settings.html)

**Check:** The saved group searches cover the actual locations of all 14 groups, including any reused groups outside AcmeLab.

### Check membership searches and reopen the saved settings

The **Group Membership Search DN** within a user-search entry controls where the connector looks for that user's memberships. The separate **Group Search Scope** above controls the group inventory.

1. For each new lab user-search entry, set **Group Membership Search DN** to the actual lab Groups OU DN and leave its optional **Group Membership Search Filter** blank. If reused lab groups are elsewhere, include their container DNs too, separated by semicolons.
2. For existing user-search entries, preserve their membership settings. If an explicit membership DN list excludes the lab groups, append the missing group-container DN with a semicolon. Check that any membership filter permits those groups. Do not narrow an existing unrestricted search to only the new lab OU.
3. Select **Save**, leave the page, then reopen **Account and Group Settings**.
4. Verify the saved values against your journal. Keep account-deletion settings unchanged.

**Before you continue:** Users and AdminAccounts are covered by user searches; all lab groups are covered by group searches; applicable membership restrictions permit the lab groups. The connector account must also have read access to these locations. A successful connection test alone does not verify this coverage.

## 6. Aggregate and inspect Lucas's account

Confirm Section 5's saved settings before starting. Open the source's **Aggregation Settings** and record **Delta Aggregation**. If enabled, turn it off and save for this run so the connector reads the full configured scope, including accounts that existed before the scope change. Restore its previous setting after the run completes. Keep account-deletion settings unchanged. [Full and delta aggregation](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html)

1. In your AD source, open **Account Management > Account Aggregation**.
2. Select **Start Aggregation** and wait for completion.
3. Inspect **Latest Account Aggregation** or **Aggregation History**. Record the status, accounts scanned, and any warning or error details. Investigate warnings before treating the run as complete.
4. Open **Account Management > Accounts**. Find Lucas by `acme.e012` or `Acme Lab - Lucas Brown`, then open the account.
5. Compare its `sAMAccountName` and directory DN with the AD values you recorded. Record the Account ID exactly as ISC displays it. Also record whether the account is correlated and, if so, to which identity.
6. Restore the Delta Aggregation setting recorded before the run, if you changed it.

The source's ID can be obtained from its URL; account aggregation runs from the source's Account Aggregation page. [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html)

**Check:** ISC contains the AD account with `sAMAccountName = acme.e012`. A source-wide account count can include other users. You do not need exactly 24 AD accounts for this lab.

An uncorrelated Lucas account can pass this step. If an existing rule matched it, record the identity and verify that it is Lucas. Investigate an incorrect match before continuing with later access requests. AR-004 handles Lucas's existing-account correlation.

## 7. Aggregate and inspect the groups

1. In the same AD source, open **Entitlement Management > Entitlement Aggregation**.
2. Select **Start Aggregation**. The default includes all entitlement types.
3. Wait for completion and inspect **Latest Entitlement Aggregation**. Record the result and investigate any warnings or errors.
4. Open **Entitlement Management > Entitlements**. Search for each of the 14 group names from Section 4.
5. Open `GG-VPN-USERS`. Record its source, entitlement attribute/type, and value. Compare the directory identifier with the group's AD DN. Record any separate ISC entitlement ID if the details expose it.
6. Check off each group in the journal only after finding it on this AD source.

The aggregation summary's discovered count can differ from the total entitlements stored on the source. Verify the names individually. [Entitlement aggregation](https://documentation.sailpoint.com/saas/help/loading_entitlements/aggregating_entitlements.html)

**Check:** All 14 groups appear as entitlements on the correct source. Keep their request settings unchanged; the request-configuration labs follow later.

## If something is missing

| Observation | What to check next |
|---|---|
| Connection test fails | Read the exact error. Check the existing VA cluster, directory connectivity, and connector credentials using the [AD troubleshooting guide](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/troubleshooting.html). |
| Connection succeeds, but Lucas is missing | Confirm his actual OU is under a User Search DN, the LDAP filter includes him, and the connector account can read him. Then rerun account aggregation. |
| Lucas exists in AD but search finds another person | Inspect the pre-Windows 2000 logon name and DN; do not rely on the display name. |
| Accounts appear, but groups are missing | Check Group Search Scope and its filter, then run entitlement aggregation. |
| Some of the 14 groups are missing | Check each missing group's actual OU, spelling, and readability by the connector account. |
| The aggregation reports zero new objects | Inspect the stored accounts or entitlements. Existing objects may already be present. |
| The account has no identity match | Record it for AR-004; importing an account and correlating it are separate checks. |
| A deletion threshold warning appears | Compare the saved search scopes with the current settings. Restore accidentally removed scope entries; do not raise the threshold to bypass the warning. |

## Completion checklist

- [ ] The existing AD source passes Test Connection.
- [ ] The source name, source ID, and actual OU DNs are recorded.
- [ ] Saved user searches cover Users and AdminAccounts; group searches cover all lab groups.
- [ ] Membership-search restrictions permit the lab groups, and previous source coverage is preserved.
- [ ] The original Delta Aggregation setting is restored if it was changed.
- [ ] Lucas's AD account is visible in ISC with the expected sAMAccountName and DN.
- [ ] Account and entitlement aggregations complete with no unresolved warnings or errors.
- [ ] All 14 named groups are present on the correct source.
- [ ] GG-VPN-USERS has its actual entitlement attribute and value recorded.
- [ ] Existing group memberships and any scope changes are recorded.

Retain the users, OUs, and groups. Next, use AR-004 to correlate Lucas, then provision the remaining standard accounts in AR-005 through AR-007. AR-006 proves the first membership update and account creation; AR-009 checks the completed foundation.

## Screenshots to capture as you work

Take each screenshot after completing the listed section. Keep the source name and relevant values visible. Hide passwords, tokens, and connection secrets. Use the suggested filenames so you can upload the images later without having to identify them again.

| After section | Suggested filename | What the screenshot must show |
|---|---|---|
| 1 | `AR-003-01-connection-test.png` | AD source name and successful Test Connection result |
| 2 | `AR-003-02-lab-ous.png` | AcmeLab expanded with Users, AdminAccounts, and Groups |
| 3 | `AR-003-03-lucas-ad-account.png` | Lucas's Account tab showing acme.e012 and the training-domain suffix |
| 3 | `AR-003-04-lucas-dn.png` | Lucas's distinguishedName in Attribute Editor |
| 4 | `AR-003-05-ad-groups.png` | The 14 named groups in AD; take a second image if they do not all fit |
| 5 | `AR-003-06-user-scope.png` | Reopened saved User Search DN entries and filters covering Users and AdminAccounts |
| 5 | `AR-003-07-group-scope.png` | Reopened saved Group Search DN entries and filters covering the lab groups |
| 5 | `AR-003-07a-membership-scope.png` | Membership-search DNs and filters on the applicable user-search entries |
| 6 | `AR-003-08-account-aggregation.png` | Completed account aggregation, status, and scanned count |
| 6 | `AR-003-09-lucas-isc-account.png` | Lucas's AD account in ISC, with source, sAMAccountName, and directory identifier |
| 7 | `AR-003-10-entitlement-aggregation.png` | Completed entitlement aggregation and status |
| 7 | `AR-003-11-isc-groups.png` | Lab entitlements on the AD source; use multiple images if necessary |
| 7 | `AR-003-12-vpn-entitlement.png` | GG-VPN-USERS details, including source, entitlement attribute/type, and value |

Record values that do not fit in an image in your [lab journal](EVIDENCE.md). Save any error and corrected result as separate images.

[Previous: AR-002](../AR-002/README.md) · [Next: AR-004](../AR-004/README.md) · [Course outline](../../README.md)
