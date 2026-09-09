# AR-005 · Configure AD Account Creation

**Prerequisites:** Complete [AR-004](../AR-004/README.md). Your AD connector must support direct provisioning, with its VA, IQService, TLS, and service-account permissions configured.

## If this configuration already exists

Compare the saved creation policy and baseline group with this lab. Keep existing Liam/Priya accounts and use their original activity for historical checks. Read the configuration sections to compare your saved settings, but skip creation actions for objects already verified. Start the additional practice at [Work out another account before creating it](#work-out-another-account-before-creating-it). Capture current results and label earlier creation activity as historical.

Use the [Module 1 configuration record](../../M01-STATE.md) for actual environment values and the required retained state.

## Before you open the settings

Use your ISC administrator session and the AD workstation. Have the existing provisioning/IQService configuration and your actual Users OU DN available.

Lucas is correctly linked. Liam has an ISC identity but no AD account. Keep that missing-account case for AR-006.

Record the current Create Account mappings before editing. These settings apply to future account creation on this source, not just Liam.

## What you’ll do

Before ISC creates Liam, tell it where the account belongs and which values to use. Work through the mappings below, then write down the account you expect to see. Saving this page does not create him.

## 1. Check the write connection

1. Open your AD source and record its provisioning and IQService connection settings without recording credentials.
2. Check the existing installation against the [AD prerequisites](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/prerequisites.html) and [required permissions](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/required_permissions.html). The connector must be able to create users in the actual Users OU, set their required attributes and password, and update membership of the baseline group you will create below.
3. Run the source's **Review and Test > Test Connection**. Resolve errors before proceeding. This test is preliminary; AR-006 will prove an actual write.
4. Record the exact Users OU DN and your configured AD UPN suffix. Confirm the OU is covered by the saved search settings from AR-003.

If your connection only reads accounts, complete its provisioning prerequisites before continuing. A manual work item asking a person to create an account does not satisfy this lab's direct-provisioning check.

## 2. Prepare a separate baseline group

1. In **Active Directory Users and Computers**, right-click **AcmeLab > Groups > New > Group**.
2. Check whether `GG-ACME-BASELINE` exists. When resuming, reuse the verified lab group and record its members; do not empty it or create a duplicate. For a new run, create it with scope **Global**, type **Security**. Description: `Acme lab - standard account baseline`. Leave its membership empty.
3. Record its DN and confirm the connector can update this group's membership. This group grants no real application or administrative access.
4. In ISC, run the AD source's **Entitlement Management > Entitlement Aggregation**. Verify the baseline group appears on the correct source and record its entitlement value.

**Check:** You now have 15 course groups: the original 14 plus this baseline group. Keep the baseline group separate from VPN and Finance grants.

**Screenshot reminder:** Save `AR-005-01-baseline-group.png`, `AR-005-02-baseline-entitlement.png`. Use the matching descriptions in the screenshot checklist at the end.

## 3. Define the account attributes

Open **Admin > Connections > Sources > your AD source > Account Management > Create Account**. Record the existing configuration before editing. On a source used by other exercises, ensure this Users-OU policy is appropriate for every account creation the source will perform.

For each row in the table:

1. Locate the attribute in **Account Attribute Mappings** and choose the mapping type.
2. For **Identity Attribute**, select the named identity attribute. For **Generator**, choose the generator and enter Pattern Used where supplied. For **Static**, enter the literal value/expression. For **Disable**, select Disable to omit the attribute.
3. If missing, select **Add Mapping > Add Existing Attribute**, choose the attribute and Add. Use **Create New Attribute** only for a supported AD attribute absent from that list. This does not add an aggregation schema attribute.
4. Use the up/down arrows or drag control to place sAMAccountName above userPrincipalName. **Save**, leave the page and reopen it to verify values and order.

Set these mappings. Replace `YOUR-USERS-OU-DN` and `YOUR-UPN-SUFFIX` with your actual values. The `$(uid)` and `$sAMAccountName` expressions below are literal expressions, not placeholders to replace with Liam's username.

| Account attribute | Mapping type | Value or selection |
|---|---|---|
| ObjectType | Static | User |
| distinguishedName | Generator: Create Unique Account ID | Pattern Used: `CN=$(uid),YOUR-USERS-OU-DN` |
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
| pwdLastSet | Static | true, requiring a password change at first AD logon |
| manager | Disable | Omit for this baseline; managers' AD accounts do not all exist yet |

Place sAMAccountName above userPrincipalName because the latter uses its calculated account value. If a row is missing, use **Add Mapping > Add Existing Attribute**; use **Create New Attribute** only for a supported AD attribute absent from the list. Save after editing. [Create Account configuration and expression syntax](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html)

Keep unrelated optional Exchange, home-directory, and script settings disabled unless your lab explicitly requires them. Retain the connector's other required defaults. Review any pre-existing custom provisioning rules before relying on the table alone.

The password generator uses the source's assigned ISC password policy. Verify that policy satisfies the target domain's password requirements. Do not insert a shared static password. [AD default provisioning attributes](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/provisioning_reference.html)

The chosen usernames are unique course IDs under AD's length limit. If a username or DN already exists, investigate its owner instead of adding a suffix to bypass the collision. This exercise deliberately avoids a naming counter so expected account names stay predictable.

**Screenshot reminder:** Save `AR-005-03-create-account.png`, `AR-005-04-naming.png`. Use the matching descriptions in the screenshot checklist at the end.

## 4. Check the values before triggering creation

1. Reopen **Create Account** and inspect the saved rows and order. Record the expected enabled/disabled state under your existing connector configuration; this table does not independently configure account enablement.
2. Open Liam's ISC identity. Confirm uid `acme.e008`, identificationNumber `E008`, first name Liam, last name Patel, displayName `Acme Lab - Liam Patel`, department IT, and title IT Analyst.
3. Write the expected values in your journal: `CN=acme.e008,` followed by your Users OU DN, and `acme.e008@` followed by your UPN suffix.
4. Search AD and the ISC AD source for `acme.e008`. Confirm no account exists. If one does, record it and resolve the baseline discrepancy before this new-account exercise; do not delete it just to continue.
5. Confirm employeeID is also in the aggregation schema from AR-004. A creation mapping alone does not add an attribute to imported account data.

**Check:** Your written expectations match the saved configuration; actual creation still needs to be checked in AR-006. Saving Create Account does not itself create Liam's account. AR-006 supplies the access assignment that triggers creation.

**Screenshot reminder:** Save `AR-005-05-liam-identity.png`. Use the matching descriptions in the screenshot checklist at the end.

## Work out another account before creating it

1. Open Priya’s identity, acme.e002, and record uid and identificationNumber.
2. On paper, substitute her uid into the saved DN pattern and into the UPN expression after sAMAccountName is calculated. Write the expected DN, UPN and employeeID.
3. Compare with Liam’s expected values. Only the employee values should differ; both use your recorded Users OU and UPN suffix.
4. Save this prediction for AR-007. Do not create Priya manually or temporarily put her username in the shared policy.

This is a configuration exercise. AR-007’s actual account is the test of your prediction.

## Your ticket: The planned DN contains an empty username.

The supplied draft pattern is CN=$(sAMAccountName), followed by the correct Users OU. The identity has uid acme.e008 but no identity attribute called sAMAccountName.

Compare the two expression types in Section 3. Write the corrected DN pattern and explain why the UPN uses a different expression. Do not save the faulty draft.

Write your diagnosis and the evidence you would accept before opening the solution. If you use the supplied case, label it a ticket exercise; do not record it as a tenant failure you observed.

<details>
<summary>Compare your diagnosis with the mentor’s solution</summary>

The DN generator references identity attributes, so use CN=$(uid), followed by the actual Users OU. The Static UPN expression references the previously calculated account sAMAccountName: ${sAMAccountName}@ followed by the actual suffix. Keep sAMAccountName above userPrincipalName. Verify the real account in AR-006 before calling the pattern proven.

</details>

## If you stopped midway or want to repeat this lab

Reuse the existing baseline group and inspect its members before continuing. If editing stopped midway, compare every saved mapping with the table, including order, before allowing a new creation. Retain the working creation policy and imported baseline group for AR-006. On a later repeat, Liam may already exist: inspect his original creation evidence and current attributes rather than deleting him. Do not restore an obsolete source policy while baseline assignments are still provisioning or retrying.

## What you should leave in place

| Item | State before you continue |
|---|---|
| Group inventory | 15 course groups including GG-ACME-BASELINE |
| Create Account | Saved mapping values, correct order and actual Users OU |
| Liam | Still absent from AD on the first pass; creation begins in AR-006 |

## Completion and screenshots

- [ ] The practice/comparison and your ticket diagnosis are recorded in the journal.
- [ ] Any temporary change is restored and the retained state matches the next lab.
- [ ] Provisioning prerequisites reviewed; Users OU and baseline-group permissions checked.
- [ ] GG-ACME-BASELINE is imported; empty on the first run, or retained course memberships recorded when resuming.
- [ ] Required mappings, expression order, target OU, and password policy are recorded.
- [ ] Liam's attributes are ready and he has no AD account.

| Filename | What to show |
|---|---|
| AR-005-01-baseline-group.png | AD group and its empty Members tab |
| AR-005-02-baseline-entitlement.png | Imported group source and value |
| AR-005-03-create-account.png | Saved mappings; use multiple images for the full list |
| AR-005-04-naming.png | DN pattern, username mapping, and UPN expression/order |
| AR-005-05-liam-identity.png | Liam's identity attributes |

Keep passwords and connection secrets out of images. Use the [journal](EVIDENCE.md).

[Previous: AR-004](../AR-004/README.md) · [Next: AR-006](../AR-006/README.md)
