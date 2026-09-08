# AR-004 · Match People to Their AD Accounts

**Level:** Beginner

**Prerequisites:** Complete [AR-003](../AR-003/README.md). You need AD user-administration permissions, ISC source-administration access, and the 24 Acme Employees identities from AR-001. Have Postman available for the aggregation request in Section 5.

## Your assignment

Prepare the remaining Acme AD accounts, then link each account to its employee identity. Lucas already has an account from AR-003. Reuse it.

Sofia gets two accounts: `acme.e009` and `acme.e009.admin`. Both belong to employee `E009`. You will put that employee number in AD's `employeeID` attribute and match it to ISC's `identificationNumber`.

When you finish, the course population will have **24 identities and 25 AD accounts**. Keep all employees, including Charlotte, in this baseline. The missing-account and inactive-user scenarios belong to later exercises.

Use the [lab journal](EVIDENCE.md) to check every account. Counts below apply to the Acme course accounts, not your entire AD source.

## 1. Check the identity side first

1. Open **Admin > Identity Management > Identity Profiles > Acme Employees > Mappings**.
2. Confirm **Identification Number (`identificationNumber`)** reads from **Acme HR > employeeNumber**. If missing, add that mapping, save it, and select **Apply Changes**. Wait for identity processing to finish in **Admin > Dashboard > Monitor** before checking the populated values.
3. Open **Admin > Identity Management > Identities**. Inspect Lucas (`acme.e012`) and Sofia (`acme.e009`). Their Identification Numbers must be `E012` and `E009` respectively.
4. Check the other Acme identities against the roster below. Each employee number must identify exactly one employee. Resolve duplicate identity identifiers before configuring the match.

Retain existing custom Employee Number mappings. Select the technical attribute `identificationNumber` for this lab, even if your tenant uses a different display label. [Identity-profile mappings](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html)

**Check:** There are 24 Acme identities with the identifiers `E001` through `E024`. Sofia has one identity.

## 2. Prepare the standard AD accounts

Open **Active Directory Users and Computers** and select **View > Advanced Features**. Use your **AcmeLab > Users** OU from AR-003.

For each employee in the roster:

1. Search the training domain for an existing course account and confirm its pre-Windows 2000 logon name. Reuse a match; do not create a duplicate.
2. If missing, right-click the Users OU and select **New > User**. Enter the employee's first and last names. Set **Full name** to `Acme Lab - <First Last>`.
3. Use the roster username for both logon-name fields. Select your actual training-domain UPN suffix, then complete the wizard with a password meeting your domain policy. Keep passwords out of the journal.
4. Open the account directly from its OU. In **Properties > General**, set **Display name** to the full name above. In **Organization**, set Department and Title from the [HR baseline](../../datasets/acme-hr-baseline.csv).
5. In **Attribute Editor**, open `employeeID`, enter the roster's employee number exactly, and save. For Lucas, this is `E012`. Do not confuse `employeeID` with AD's separate `employeeNumber` attribute.
6. Select **Apply**, reopen the attribute, and confirm the saved value. Record the account's DN in the journal.
7. If a reused account is outside Users, verify that its actual OU is covered by the AD source's saved user searches and permitted by their filters. Follow [AR-003 Section 5](../AR-003/README.md#5-update-the-ad-source-settings-before-aggregation) for any missing coverage before aggregation.

Use the same AD user-creation dialog introduced in AR-003. [Microsoft user-creation instructions](https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/rds-user-management)

| Employee ID / AD employeeID | Employee | Standard AD username |
|---|---|---|
| E001 | Morgan Reed | acme.e001 |
| E002 | Priya Shah | acme.e002 |
| E003 | Daniel Brooks | acme.e003 |
| E004 | Elena Cruz | acme.e004 |
| E005 | Marcus Lee | acme.e005 |
| E006 | Ava Chen | acme.e006 |
| E007 | Noah Williams | acme.e007 |
| E008 | Liam Patel | acme.e008 |
| E009 | Sofia Martin | acme.e009 |
| E010 | Ethan Davis | acme.e010 |
| E011 | Olivia Wilson | acme.e011 |
| E012 | Lucas Brown | acme.e012 |
| E013 | Mia Garcia | acme.e013 |
| E014 | James Miller | acme.e014 |
| E015 | Amelia Thomas | acme.e015 |
| E016 | Benjamin Moore | acme.e016 |
| E017 | Charlotte Taylor | acme.e017 |
| E018 | Henry Anderson | acme.e018 |
| E019 | Harper Jackson | acme.e019 |
| E020 | Alexander White | acme.e020 |
| E021 | Evelyn Harris | acme.e021 |
| E022 | William Clark | acme.e022 |
| E023 | Abigail Lewis | acme.e023 |
| E024 | Samuel Walker | acme.e024 |

The HR emails ending in `example.com` remain placeholders. This correlation uses employee numbers; changing mail addresses or AD logon suffixes is unnecessary for the match.

**Check:** All 24 standard accounts exist, each with the correct `employeeID`. Keep existing group memberships recorded in AR-003. Do not add access memberships during this lab.

## 3. Add Sofia's second account

1. Open **AcmeLab > AdminAccounts**. Reuse `acme.e009.admin` if it already exists as Sofia's course account; otherwise select **New > User**.
2. Use First name `Sofia`, Last name `Martin`, and Full name `Acme Lab - Sofia Martin Admin`.
3. Set both logon-name fields to `acme.e009.admin`, using your training-domain UPN suffix. Complete the password page using your domain policy.
4. Open the account's **Properties > Attribute Editor**. Set `employeeID` to `E009` and save.
5. Record its DN. Verify the AdminAccounts coverage saved in AR-003 under **Account and Group Settings > User Search Scope** permits this account. If you used a different OU, follow [AR-003 Section 5](../AR-003/README.md#5-update-the-ad-source-settings-before-aggregation) to include its actual location before aggregation.

This is an admin-account simulation. The account name grants no administrative permissions; leave privileged group membership unassigned.

**Check:** Sofia has two different logon names and DNs, both with `employeeID = E009`. Leave her HR record unchanged. [AD search scopes](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/account_and_group_settings.html)

## 4. Configure the employee-number match

1. In ISC, open **Admin > Connections > Sources > your AD source > Account Management > Account Schema**.
2. Find `employeeID`. If absent, select **Add New Attribute**, enter `employeeID` as the name and **string** as its type, then save. Keep it single-valued and leave Entitlement unselected. Preserve the existing Account ID and Account Name selections.
3. Open **Account Management > Account Correlation**. Record the existing criteria and their order in the journal.
4. Add the following pair and move it above existing fallback criteria:

| Field | Select |
|---|---|
| Identity Attribute | Identification Number (`identificationNumber`) |
| Operation | Equals |
| Account Attribute | employeeID |

5. On a source dedicated entirely to these course accounts, use this as the only criterion. On an existing source serving other lab users, retain the criteria those users need and record their order. Check that fallback criteria cannot send an Acme account to another person.
6. Select **Save**. Leave **Manager Correlation** unchanged.

Criteria are alternatives, evaluated in order; adding a username pair does not require both pairs to match. [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html)

The schema must contain an attribute before you can select it for correlation. [Account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html)

**Check:** The saved match compares the employee identifier on the AD account with the employee identifier on the ISC identity:

```text
AD acme.e009       employeeID = E009 ─┐
                                    ├─ ISC Sofia: identificationNumber = E009
AD acme.e009.admin employeeID = E009 ─┘
```

## 5. Reexamine the imported accounts

Lucas was already imported in AR-003. Run an aggregation with optimization disabled so unchanged accounts are also examined after your correlation change. A normal UI aggregation uses optimization. [Aggregation after correlation changes](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html)

### Get an API access token

If you already have a working admin API session in Postman, reuse it and continue to the aggregation request.

1. In ISC, open your user menu and select **Preferences > Personal Access Tokens > New Token**. Create a token named `Acme lab aggregation`. Store its Client ID and Secret privately.
2. In Postman, create a **POST** request to `https://<tenant>.api.identitynow.com/oauth/token`. Replace `<tenant>` with your tenant name; use your tenant's actual API base URL if different.
3. Under **Body > x-www-form-urlencoded**, enter `grant_type` = `client_credentials`, `client_id` = your Client ID, and `client_secret` = your Secret.
4. Send the request. A successful response contains `access_token`. Keep that value private for the next request.

The token inherits the generating user's permissions. [ISC API authentication](https://developer.sailpoint.com/docs/api/authentication/)

### Submit the aggregation

Before sending the request, open the AD source's **Aggregation Settings**. Record **Delta Aggregation**. If enabled, turn it off and save for this run so the connector reads the full configured scope. Restore the previous setting after the job completes. Keep account-deletion settings unchanged.

1. Create another Postman **POST** request:

```text
https://<tenant>.api.identitynow.com/beta/sources/<AD-source-ID>/load-accounts
```

2. Replace both placeholders. Use the **AD source ID** recorded in AR-003.
3. Under **Authorization**, select **Bearer Token** and enter the `access_token`.
4. Under **Body > form-data**, add a Text field named `disableOptimization` with value `true`. Do not attach the HR CSV. Let Postman generate the multipart Content-Type header.
5. Select **Send** once. Record the response status and returned task reference if present. A successful submission starts a job; it does not prove that the account matches are correct.
6. Return to the AD source's **Aggregation History** in ISC. Wait for the corresponding account aggregation to finish. Inspect its status and verify optimization was disabled. Resolve any warnings or errors before continuing.

This request and form field follow SailPoint's [documented unoptimized aggregation procedure](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html). Restore the Delta Aggregation setting you recorded before the request. Do not move accounts between OUs during this lab.

**Check:** The aggregation completed successfully. You are ready to inspect actual account ownership.

## 6. Verify the matches from each identity

1. Open **Admin > Identity Management > Identities** and select Lucas (`acme.e012`).
2. Open **Accounts**. Locate the account on your AD source and verify its logon name, DN, and `employeeID = E012` against the journal. His Acme HR account should also remain present.
3. Open Sofia (`acme.e009`) and inspect **Accounts**. Confirm both `acme.e009` and `acme.e009.admin` are linked to this identity on the AD source. Compare both DNs with AD.
4. Repeat the identity-to-account check for every row in the journal. Verify the actual employee, not just whether the account says it is correlated.
5. Open your AD source's **Uncorrelated Accounts** and check for any of the 25 course accounts. Investigate any that remain.

**Check:** Each employee has one standard AD account; Sofia additionally has her admin test account. The 25 course accounts belong to 24 Acme identities. Other source accounts may remain uncorrelated without affecting this course check.

## If a match is wrong or missing

| Observation | Next action |
|---|---|
| employeeID is absent from the correlation dropdown | Check the AD source's account schema for that exact attribute name and string type. |
| employeeID is blank on the imported account | Reopen the AD attribute, check its saved value and connector readability, then inspect the next aggregation. |
| Sofia's standard account links but the admin account is missing | Check AdminAccounts OU coverage and the user filter. |
| Sofia's admin account is present but uncorrelated | Compare its employeeID with Sofia's identificationNumber. Both must be E009. |
| An account belongs to the wrong identity | Record both identities, the account DN, and saved criteria. Check duplicate identifiers and previous manual links. Correcting criteria alone is not proof that an existing assignment changed. |
| A previously manually linked account stays with its old identity | Manual links require explicit removal before reassignment. Follow the [documented correction procedure](https://documentation.sailpoint.com/saas/help/accounts/correlation.html); verify the affected account first. Do not delete the HR identity or AD user. |
| Postman returns 401 or 403 | Check the access token's validity and the permissions of its generating user. |
| The job succeeds but the course accounts remain unmatched | Inspect the imported values, the saved criteria, and whether optimization was disabled. |

Do not manually assign every account just to clear the uncorrelated list. First resolve why the employee-number match failed, then repeat the verification.

## Completion checklist

- [ ] All 24 standard AD accounts exist with the correct employeeID.
- [ ] Sofia's extra account exists in AdminAccounts with employeeID E009.
- [ ] ISC reads employeeID and the source uses the documented correlation pair.
- [ ] The aggregation completed with no unresolved warnings or errors.
- [ ] Every standard account is linked to its intended employee.
- [ ] Both of Sofia's accounts are linked to her single identity.
- [ ] None of the 25 course accounts remains uncorrelated or incorrectly assigned.
- [ ] The Acme identity population remains 24.

Retain this baseline for AR-005, where you prepare requester and reviewer access. Having an AD account linked to an identity does not by itself enable that person to sign in to ISC.

## Screenshots to capture as you work

Hide passwords, client secrets, and tokens. Use additional images where one screen cannot show every required value.

| After section | Suggested filename | What to show |
|---|---|---|
| 1 | `AR-004-01-identity-mapping.png` | identificationNumber mapping to Acme HR employeeNumber |
| 2 | `AR-004-02-standard-accounts.png` | Standard Acme accounts in the Users OU |
| 2 | `AR-004-03-lucas-employee-id.png` | Lucas's AD employeeID set to E012 |
| 3 | `AR-004-04-sofia-admin-account.png` | Sofia's admin logon name and its AdminAccounts location |
| 3 | `AR-004-05-sofia-admin-employee-id.png` | Admin account employeeID set to E009 |
| 4 | `AR-004-06-ad-schema.png` | employeeID in the AD source account schema |
| 4 | `AR-004-07-correlation.png` | Saved identity/account attribute pair and any fallback order |
| 5 | `AR-004-08-aggregation.png` | Finished account aggregation with status and optimization setting |
| 6 | `AR-004-09-lucas-linked-account.png` | Lucas's identity and its linked AD account |
| 6 | `AR-004-10-sofia-two-accounts.png` | Sofia's identity with both AD accounts visible |
| 6 | `AR-004-11-correlation-check.png` | Uncorrelated Accounts check for the course accounts; use the journal for the full per-person verification |

[Previous: AR-003](../AR-003/README.md) · [Next: AR-005](../AR-005/README.md) · [Course outline](../../README.md)
