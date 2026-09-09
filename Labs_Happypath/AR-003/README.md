# AR-003 — Prepare and Aggregate the AD Lab

**Level:** Beginner

## Goal

Prepare the Active Directory lab structure, create Lucas's AD account and the course security groups, make sure the ISC AD source can read those objects, and aggregate them into ISC.

AR-004 will correlate Lucas's existing AD account to his ISC identity.

Use the [Module 1 configuration record](../../M01-STATE.md) for actual environment values and the required retained state.

## Session for this lab

Use your ISC administrator session for ISC steps and your AD administration workstation for directory steps.

## Prerequisites

- Complete [AR-001](../AR-001/README.md) and [AR-002](../AR-002/README.md).
- Existing Active Directory source connected to the training domain.
- Permission to administer the ISC AD source.
- Permission to create OUs, users, and groups in the isolated AD lab area.
- Access to Active Directory Users and Computers.

Keep your [evidence journal](EVIDENCE.md) open.

## Environment requirements

- The AD source passes **Test Connection**.
- A dedicated training location is available for `AcmeLab`.
- `acme.e012` is not already used by an unrelated account.
- The 14 Acme course group names are available for this lab.
- You can add the AcmeLab OUs to the AD source search scopes.

## What you will finish with

```text
AcmeLab
├── Users
│   └── Acme Lab - Lucas Brown (acme.e012)
├── AdminAccounts
└── Groups
    ├── GG-VPN-USERS
    ├── GG-REMOTE-USERS
    └── 12 additional course groups
```

ISC will contain:

- Lucas's AD account on the AD source.
- All 14 Acme security groups as entitlements.

---

## 1. Test the existing AD source

1. Open **Admin > Connections > Sources**.
2. Select your existing **Active Directory** source.
3. Record its source name and source ID.
4. Open **Review and Test**.
5. Select **Test Connection**.

Reference: [AD Review and Test](https://documentation.sailpoint.com/connectors/active_directory/help/common/topics/review_and_test.html)

**Check:** Test Connection succeeds.

**Screenshot:** Save `AR-003-01-connection-test.png`. Capture the AD source name and successful connection test.

## 2. Create the AcmeLab OU structure

On your AD administration workstation:

1. Open **Server Manager > Tools > Active Directory Users and Computers**.
2. Navigate to the parent OU reserved for your training objects.
3. Right-click the training parent and select **New > Organizational Unit**. Enter **AcmeLab** and select **OK**.
4. Right-click AcmeLab and repeat **New > Organizational Unit** for each name:

```text
Users
AdminAccounts
Groups
```

5. Enable **View > Advanced Features**.
6. Open each child OU's **Properties > Attribute Editor**.
7. Record the `distinguishedName` for:
   - Users
   - AdminAccounts
   - Groups

Example only:

```text
OU=Users,OU=AcmeLab,DC=training,DC=example,DC=com
```

Use the actual DN from your directory.

**Check:** All three OUs exist and you recorded their actual DNs.

**Screenshot:** Save `AR-003-02-lab-ous.png`. Capture AcmeLab expanded with Users, AdminAccounts, and Groups.

## 3. Create Lucas's AD account

1. In Active Directory Users and Computers, open **AcmeLab > Users**.
2. Right-click **Users > New > User**.
3. Enter:

| Field | Value |
|---|---|
| First name | Lucas |
| Last name | Brown |
| Full name | Acme Lab - Lucas Brown |
| User logon name | acme.e012 |
| UPN suffix | Your training domain suffix |
| Pre-Windows 2000 logon name | acme.e012 |

4. Select **Next**.
5. Set a password that meets the domain policy. Do not record the password in the course evidence.
6. Retain domain-required password settings, record the chosen enabled/disabled account state, then select **Next > Finish**.
7. Open Lucas's **Properties**. Use **General** for Display name and **Organization** for Department and Title.
8. Set:

| Attribute | Value |
|---|---|
| Display name | Acme Lab - Lucas Brown |
| Department | Finance |
| Title | Reporting Analyst |

9. Select **Apply**, reopen the properties to confirm the saved values, then open **Attribute Editor** and record Lucas's `distinguishedName`.

**Check:** Lucas exists under AcmeLab/Users with `sAMAccountName = acme.e012`.

**Screenshot:** Save `AR-003-03-lucas-account.png`. Capture Lucas's account and distinguishedName.

## 4. Create the 14 course groups

Right-click **AcmeLab > Groups**, select **New > Group**, enter the name from the table and select the settings below. Select **OK**, open the group’s **Properties**, enter its description, and select **Apply**. Repeat for all 14 names.

Use:

- **Group scope:** Global
- **Group type:** Security

Create these exact names:

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

Keep the groups empty and do not nest them into Domain Admins or other privileged groups.

Open `GG-VPN-USERS > Properties > Attribute Editor` and record its `distinguishedName`.

**Check:** All 14 groups exist under AcmeLab/Groups.

**Screenshot:** Save `AR-003-04-ad-groups.png`. Capture the 14 groups in AD.

## 5. Add the AcmeLab locations to the ISC AD source

1. Open **Admin > Connections > Sources > your AD source**.
2. Open **Account and Group Settings**.
3. Record the existing search-scope settings before making changes.

### User Search Scope

Add the actual DNs for:

- AcmeLab/Users
- AcmeLab/AdminAccounts

For these lab-specific entries, leave the optional LDAP filter blank unless your environment requires a documented filter.

### Group Search Scope

Add the actual DN for:

- AcmeLab/Groups

### Group Membership Search DN

For the AcmeLab user-search entries, set the membership search to the actual AcmeLab/Groups DN so the connector can read memberships for the lab users.

4. Save the source configuration.
5. Leave the page and reopen **Account and Group Settings**.
6. Confirm the values were saved.

Reference: [AD Account and Group Settings](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/account_and_group_settings.html)

**Check:**

- User Search Scope covers Users and AdminAccounts.
- Group Search Scope covers Groups.
- Membership search for the lab users can reach AcmeLab/Groups.
- Existing source coverage was not removed.

**Screenshot:** Save `AR-003-05-source-scopes.png`. Capture the saved user, group, and membership-search settings.

## 6. Run account aggregation

1. Open the AD source's **Account Management > Account Aggregation**.
2. Record **Aggregation Settings > Delta Aggregation**. If enabled, temporarily disable it and save for a full scan of the newly included locations. Return to **Account Aggregation** and select **Start Aggregation**.
3. Wait for completion.
4. Open **Account Management > Accounts**.
5. Search for `acme.e012`.
6. Open Lucas's AD account.
7. Verify:

| Attribute | Expected result |
|---|---|
| sAMAccountName | acme.e012 |
| DN | Matches the AD value recorded earlier |
| Source | Your Active Directory source |

8. Record whether the account is currently correlated.
9. After completion, restore the recorded Delta Aggregation setting and save. Keep the expanded search coverage.

Lucas can be uncorrelated at this stage. AR-004 handles correlation of this existing AD account to Lucas's ISC identity.

Reference: [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html)

**Check:** Lucas's AD account is visible on the ISC AD source with the expected sAMAccountName and DN.

**Screenshot:** Save `AR-003-06-account-import.png`. Capture the completed account aggregation and Lucas's imported AD account.

## 7. Run entitlement aggregation

1. Open the same AD source.
2. Open **Entitlement Management > Entitlement Aggregation**.
3. Select **Start Aggregation**.
4. Wait for completion.
5. Open **Entitlement Management > Entitlements**.
6. Search for each of the 14 Acme groups.
7. Open `GG-VPN-USERS`.
8. Record:
   - source
   - entitlement attribute/type
   - entitlement value/native identifier
   - ISC entitlement ID, if displayed

Reference: [Entitlement aggregation](https://documentation.sailpoint.com/saas/help/loading_entitlements/aggregating_entitlements.html)

**Check:** All 14 Acme groups are visible as entitlements on the correct AD source.

**Screenshot:** Save `AR-003-07-entitlements.png`. Capture the completed entitlement aggregation, the Acme groups, and GG-VPN-USERS details.

## Try it yourself

Open GG-HR-PAYROLL in AD and then on the ISC AD source. Record its actual DN and imported entitlement value. Confirm you selected the same group on the same source.

Write these answers in your [journal](EVIDENCE.md):

1. Which search setting controls users, which controls groups, and which controls membership reads?
2. Does an imported AD account necessarily belong to an ISC identity yet?

## If a check does not match

If an object is absent, compare its actual DN with the saved user/group search scope and filters. Inspect the aggregation result. A zero-new-objects result is acceptable when the expected records already exist.

## Final verification

- [ ] The independent check and both explanations are recorded.
- [ ] AD Test Connection succeeds.
- [ ] AcmeLab exists with Users, AdminAccounts, and Groups.
- [ ] Lucas exists in AcmeLab/Users as `acme.e012`.
- [ ] Lucas's DN is recorded.
- [ ] All 14 course groups exist in AcmeLab/Groups.
- [ ] GG-VPN-USERS DN is recorded.
- [ ] ISC User Search Scope covers Users and AdminAccounts.
- [ ] ISC Group Search Scope covers Groups.
- [ ] Membership search can reach the lab Groups OU.
- [ ] Account aggregation succeeds.
- [ ] Lucas's AD account is visible in ISC.
- [ ] Entitlement aggregation succeeds.
- [ ] All 14 groups are visible as entitlements.
- [ ] GG-VPN-USERS native value is recorded.

## Leave this in place

Keep:

- AcmeLab and all three child OUs.
- Lucas's AD account.
- All 14 groups.
- The added AD source scope coverage.

Do not make the groups requestable yet.

## Screenshots to capture

Capture results after the checks above. Hide passwords, tokens, invitation links and private mailbox details. Use additional images when all required fields do not fit.

| Filename | Evidence |
|---|---|
| `AR-003-01-connection-test.png` | Capture the AD source name and successful connection test. |
| `AR-003-02-lab-ous.png` | Capture AcmeLab expanded with Users, AdminAccounts, and Groups. |
| `AR-003-03-lucas-account.png` | Capture Lucas's account and distinguishedName. |
| `AR-003-04-ad-groups.png` | Capture the 14 groups in AD. |
| `AR-003-05-source-scopes.png` | Capture the saved user, group, and membership-search settings. |
| `AR-003-06-account-import.png` | Capture the completed account aggregation and Lucas's imported AD account. |
| `AR-003-07-entitlements.png` | Capture the completed entitlement aggregation, the Acme groups, and GG-VPN-USERS details. |

Next: **[AR-004 — Correlate Lucas's Existing AD Account](../AR-004/README.md)**.

[Previous: AR-002](../AR-002/README.md) · [Labs Home](../README.md)
