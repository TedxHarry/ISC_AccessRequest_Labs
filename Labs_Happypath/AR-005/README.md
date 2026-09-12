# AR-005 — Configure AD Account Creation

**Level:** Beginner

## Goal

Configure the Active Directory source so ISC can create standard Acme user accounts with predictable names, attributes, passwords, and target OU placement.

Use the [Module 1 configuration record](../../M01-STATE.md) for actual environment values and the required retained state.

## Session for this lab

Use your ISC administrator session for ISC steps and your AD administration workstation for directory steps.

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
7. Confirm provisioning/IQService, TLS and service-account permissions are already in place. The account must be able to create users in Users, set attributes/passwords and update the baseline group. Test Connection alone does not prove a write; AR-006 will verify that.

Reference:
- [AD prerequisites](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/prerequisites.html)
- [AD required permissions](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/required_permissions.html)

**Check:** Test Connection succeeds and you have the actual Users OU DN and UPN suffix recorded.

If the course group already exists, inspect its DN and membership and reuse it. Do not empty an existing group or create a duplicate to repeat this lab.

## 2. Create the baseline security group

1. Open **Active Directory Users and Computers**.
2. Open **AcmeLab > Groups**.
3. Right-click **Groups > New > Group**. Enter:

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

**Screenshot:** Save `AR-005-01-baseline-group.png`. Capture the baseline group in AD and the imported entitlement in ISC.

## 3. Open Create Account configuration

1. Open **Admin > Connections > Sources > your AD source**.
2. Open **Account Management > Create Account**.
3. Record the current mappings before editing.
4. For each row below, locate the account attribute and select its mapping type. For Identity Attribute, select the named identity field. For Generator, select the generator and enter **Pattern Used** where shown. For Static, enter the literal value or expression. Select Disable for manager.
5. If an attribute is missing, select **Add Mapping > Add Existing Attribute**, choose it and select **Add**. Use **Create New Attribute** only for a supported AD attribute absent from the list.
6. Keep required connector defaults not listed here. These settings affect account creation across this source.

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
| employeeID | Identity Attribute | Employee Number (`identificationNumber`) |
| department | Identity Attribute | Department (`department`) |
| title | Identity Attribute | Job Title (`title`) |
| mail | Identity Attribute | Work Email (`email`) |
| password | Generator | Create Password |
| pwdLastSet | Static | true |
| manager | Disable | Omit |

Reference: [Create Account configuration](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html)

**Check:** Every listed attribute has a mapping. Continue below to set the order and save it.

`pwdLastSet = true` requires a password change at first AD logon. Omit manager because the managers’ AD accounts do not all exist yet. Record the expected enabled/disabled account state under your connector configuration; the table does not independently set account enablement.

## 4. Verify mapping order and password policy

1. Use the up/down arrows or drag control to place **sAMAccountName** before **userPrincipalName**.
2. Confirm `userPrincipalName` uses the previously calculated `${sAMAccountName}` value.
3. Confirm `distinguishedName` uses the identity value `$(uid)`.
4. Confirm `employeeID` maps from `identificationNumber`.
5. Confirm the source password policy satisfies the AD domain password requirements.
6. Save the Create Account configuration.
7. Leave the page and reopen it.
8. Verify the values and order were saved.

Reference: [AD provisioning reference](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/provisioning_reference.html)

**Check:** The saved Create Account configuration matches the table and uses your actual Users OU DN and UPN suffix.

**Screenshot:** Save `AR-005-02-create-account-mappings.png`. Capture the complete mappings and the naming expressions.

## 5. Verify Liam's identity before creation

1. Open **Admin > Identity Management > Identities**.
2. Search for `acme.e008` and open Liam Patel.
3. Confirm:

| Identity attribute | Expected value |
|---|---|
| Username | acme.e008 |
| Employee Number | E008 |
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

**Screenshot:** Save `AR-005-03-liam-identity.png`. Capture Liam's ISC identity attributes.

## Try it yourself

Use Priya’s identity (`acme.e002`) to write her expected DN, UPN and employeeID using the saved mappings. Keep this prediction for AR-007. Do not change the shared policy or create her manually.

Write these answers in your [journal](EVIDENCE.md):

1. What will supply Liam’s username in the DN and UPN expressions?
2. Why does saving Create Account leave Liam absent from AD?

## If a check does not match

If a saved mapping differs, reopen Create Account and correct its type, value and order before assigning baseline access. If Liam already exists, keep him and record the existing account; do not delete him to recreate the example.

## Final verification

- [ ] The independent check and both explanations are recorded.
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

## Screenshots to capture

Capture results after the checks above. Hide passwords, tokens, invitation links and private mailbox details. Use additional images when all required fields do not fit.

| Filename | Evidence |
|---|---|
| `AR-005-01-baseline-group.png` | Capture the baseline group in AD and the imported entitlement in ISC. |
| `AR-005-02-create-account-mappings.png` | Capture the complete mappings and the naming expressions. |
| `AR-005-03-liam-identity.png` | Capture Liam's ISC identity attributes. |

Next: **[AR-006 — Provision Your First AD Account](../AR-006/README.md)**

[Previous: AR-004](../AR-004/README.md) · [Lab index](../README.md)
