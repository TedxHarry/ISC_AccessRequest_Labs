# AR-005 · Configure AD Account Creation

**Prerequisites:** Complete [AR-004](../AR-004/README.md). Your AD connector must support direct provisioning, with its VA, IQService, TLS, and service-account permissions configured.

## Your assignment

Configure how ISC will create standard accounts in AcmeLab/Users. Use Liam (`acme.e008`, employee E008) as the first new-account test in AR-006. Do not create him manually.

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

## 4. Check the values before triggering creation

1. Reopen **Create Account** and inspect the saved rows and order. Record the expected enabled/disabled state under your existing connector configuration; this table does not independently configure account enablement.
2. Open Liam's ISC identity. Confirm uid `acme.e008`, identificationNumber `E008`, first name Liam, last name Patel, displayName `Acme Lab - Liam Patel`, department IT, and title IT Analyst.
3. Write the expected values in your journal: `CN=acme.e008,` followed by your Users OU DN, and `acme.e008@` followed by your UPN suffix.
4. Search AD and the ISC AD source for `acme.e008`. Confirm no account exists. If one does, record it and resolve the baseline discrepancy before this new-account exercise; do not delete it just to continue.
5. Confirm employeeID is also in the aggregation schema from AR-004. A creation mapping alone does not add an attribute to imported account data.

**Check:** The saved configuration can produce the expected values. Saving Create Account does not itself create Liam's account. AR-006 supplies the access assignment that triggers creation.

## Completion and screenshots

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
