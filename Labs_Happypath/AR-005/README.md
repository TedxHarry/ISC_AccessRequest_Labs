# AR-005 — Configure AD Account Creation

**Level:** Beginner

## Goal

Configure the Active Directory source so ISC can create standard Acme user accounts with predictable names, attributes, passwords, and target OU placement.

## Prerequisites

Complete [AR-004](../AR-004/README.md).

You should already have:

- Lucas's AD account correctly correlated.
- An Active Directory source with direct provisioning configured.
- Working VA/IQService connectivity and permissions for the AcmeLab OUs and groups.
- The actual AcmeLab/Users OU DN.
- The AD UPN suffix used by your training domain.

Keep your [evidence journal](EVIDENCE.md) open.

## What you will finish with

- `GG-ACME-BASELINE` created and aggregated.
- A saved **Create Account** configuration for the AD source.
- Liam Patel (`acme.e008`) still without an AD account, ready for AR-006.

---

## 1. Verify the AD source is ready for provisioning

1. Open **Admin > Connections > Sources > your AD source**.
2. Open **Review and Test**.
3. Select **Test Connection**.
4. Confirm the result is successful.
5. Record the actual **Users OU DN** from AR-003.
6. Record the AD **UPN suffix** used for new users.
7. Confirm the source provisioning/IQService configuration is already in place.

Reference:
- [AD prerequisites](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/prerequisites.html)
- [AD required permissions](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/required_permissions.html)

**Check:** Test Connection succeeds and you have the actual Users OU DN and UPN suffix recorded.

## 2. Create the baseline security group

1. Open **Active Directory Users and Computers**.
2. Open **AcmeLab > Groups**.
3. Create a new group named:

```text
GG-ACME-BASELINE
```

4. Set:

| Setting | Value |
|---|---|
| Group scope | Global |
| Group type | Security |
| Description | Acme lab - standard account baseline |

5. Leave the group empty.
6. Open **Properties > Attribute Editor** and record its `distinguishedName`.
7. In ISC, open the AD source and run **Entitlement Management > Entitlement Aggregation**.
8. Search for `GG-ACME-BASELINE` under **Entitlements**.
9. Open it and record its entitlement value/native identifier.

**Check:** ISC now contains 15 Acme course groups, including `GG-ACME-BASELINE`.

**Screenshots:** Capture the baseline group in AD and the imported entitlement in ISC.

## 3. Open Create Account configuration

1. Open **Admin > Connections > Sources > your AD source**.
2. Open **Account Management > Create Account**.
3. Record the current mappings before editing.
4. Use the table below to configure the standard Acme account.

Replace:

- `YOUR-USERS-OU-DN` with the actual Users OU DN.
- `YOUR-UPN-SUFFIX` with the actual AD UPN suffix.

Keep `$(uid)` and `${sAMAccountName}` exactly as shown.

| Account attribute | Mapping type | Value or selection |
|---|---|---|
| ObjectType | Static | User |
| distinguishedName | Generator: Create Unique Account ID | `CN=$(uid),YOUR-USERS-OU-DN` |
| sAMAccountName | Identity Attribute | Username (`uid`) |
| userPrincipalName | Static | `${sAMAccountName}@YOUR-UPN-SUFFIX` |
| displayName | Identity Attribute | Display Name (`displayName`) |
| givenName | Identity Attribute | First Name (`firstname`) |
| sn | Identity Attribute | Family Name (`lastname`) |
| employeeID | Identity Attribute | Identification Number (`identificationNumber`) |
| department | Identity Attribute | Department (`department`) |
| title | Identity Attribute | Job Title (`title`) |
| mail | Identity Attribute | Work Email (`email`) |
| password | Generator | Create Password |
| pwdLastSet | Static | true |
| manager | Disable | Omit |

Reference: [Create Account configuration](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html)

## 4. Verify mapping order and password policy

1. Make sure **sAMAccountName** appears before **userPrincipalName**.
2. Confirm `userPrincipalName` uses the previously calculated `${sAMAccountName}` value.
3. Confirm `distinguishedName` uses the identity value `$(uid)`.
4. Confirm `employeeID` maps from `identificationNumber`.
5. Confirm the source password policy satisfies the AD domain password requirements.
6. Save the Create Account configuration.
7. Leave the page and reopen it.
8. Verify the values and order were saved.

Reference: [AD provisioning reference](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/provisioning_reference.html)

**Check:** The saved Create Account configuration matches the table and uses your actual Users OU DN and UPN suffix.

**Screenshots:** Capture the complete mappings and the naming expressions.

## 5. Verify Liam's identity before creation

1. Open **Admin > Identity Management > Identities**.
2. Search for `acme.e008` and open Liam Patel.
3. Confirm:

| Identity attribute | Expected value |
|---|---|
| Username | acme.e008 |
| Identification Number | E008 |
| First Name | Liam |
| Last Name | Patel |
| Display Name | Acme Lab - Liam Patel |
| Department | IT |
| Title | IT Analyst |

4. Search the AD source and Active Directory for `acme.e008`.
5. Confirm Liam does not yet have a standard AD account.
6. Write the expected values:

```text
DN  = CN=acme.e008,<your Users OU DN>
UPN = acme.e008@<your UPN suffix>
employeeID = E008
```

**Check:** Liam's identity is ready and no AD account exists yet.

**Screenshot:** Capture Liam's ISC identity attributes.

## Final verification

- [ ] AD Test Connection succeeds.
- [ ] Users OU DN is recorded.
- [ ] UPN suffix is recorded.
- [ ] `GG-ACME-BASELINE` exists in AD.
- [ ] `GG-ACME-BASELINE` is aggregated into ISC.
- [ ] Create Account mappings match the required table.
- [ ] sAMAccountName is evaluated before userPrincipalName.
- [ ] employeeID maps from identificationNumber.
- [ ] Password generation is configured.
- [ ] Liam has no AD account yet.
- [ ] Liam's expected DN, UPN, and employeeID are recorded.

## Leave this in place

Keep the baseline group and Create Account configuration unchanged. AR-006 will use them to update Lucas's existing account and create Liam's missing account.

Next: **[AR-006 — Provision Your First AD Account](../AR-006/README.md)**

[Previous: AR-004](../AR-004/README.md) · [Lab index](../README.md)
