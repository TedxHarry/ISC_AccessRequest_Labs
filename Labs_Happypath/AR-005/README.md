# AR-005 — Configure AD Account Creation

## Before you start

<a id="goal"></a>

Configure the Active Directory source so ISC can create standard Acme user accounts with predictable names, attributes, passwords, and target OU placement.

Use the [Module 1 configuration record](../../M01-STATE.md) for actual environment values and the required retained state.

<a id="session-for-this-lab"></a>

Use your ISC administrator session for ISC steps and your AD administration workstation for directory steps.

<a id="prerequisites"></a>

Complete [AR-004](../AR-004/README.md).

You should already have:

- Lucas's AD account correctly correlated.
- An Active Directory source with direct provisioning configured.
- Working VA/IQService connectivity and permissions for the AcmeLab OUs and groups.
- The actual AcmeLab/Users OU DN.
- Access to Lucas's AD Account tab to look up the configured UPN suffix below.

Keep your [evidence journal](EVIDENCE.md) open.

## Follow the steps

### 1. Verify the AD source is ready for provisioning

1. Open **Admin > Connections > Sources > your AD source**.
2. Open **Review and Test**.
3. Select **Test Connection**.
4. Confirm the result is successful.
5. Record the actual **Users OU DN** from AR-003.
6. Follow **Find and record your UPN suffix** below before filling in the journal.
7. Confirm provisioning/IQService, TLS and service-account permissions are already in place. The account must be able to create users in Users, set attributes/passwords and update the baseline group. Test Connection alone does not prove a write; AR-006 will verify that.

Reference:
- [AD prerequisites](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/prerequisites.html)
- [AD required permissions](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/required_permissions.html)

**Check:** Test Connection succeeds and you have the actual Users OU DN and UPN suffix recorded.

If the course group already exists, inspect its DN and membership and reuse it. Do not empty an existing group or create a duplicate to repeat this lab.

#### Find and record your UPN suffix

A **User Principal Name (UPN)** is an AD sign-in name such as `acme.e012@isc.com`. The **suffix** is the part after `@`: `isc.com` in that example. It can differ from the employee's email domain.

1. On your AD workstation, open **Server Manager > Tools > Active Directory Users and Computers**.
2. Expand your training domain, then **AcmeLab > Users**.
3. Right-click **Acme Lab - Lucas Brown > Properties** and open **Account**.
4. Find **User logon name**. Read the username on the left and the selected suffix on the right. For example, `acme.e012` and `@isc.com` together form `acme.e012@isc.com`.
5. In your journal, record Lucas's full UPN and the suffix **without `@`**. Use this same configured suffix for the new standard lab users. Close with **Cancel**; you are inspecting Lucas, not changing his sign-in name.
6. If several suffixes are available, record the one selected for Lucas's standard lab account. If his UPN is blank, check the suffix selected on another working standard account in the same training domain. Do not invent a suffix from the HR email addresses.

The **User logon name (pre-Windows 2000)** field is a different sign-in format, such as `ISC\acme.e012`; do not copy `ISC` as the UPN suffix. If you need to inspect configured alternatives, open **Server Manager > Tools > Active Directory Domains and Trusts**, right-click the top **Active Directory Domains and Trusts** node, select **Properties**, and view **UPN Suffixes**. An empty alternative-suffix list does not mean the domain has no default suffix. No new suffix is required for this lab. [Microsoft UPN guidance](https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/howto-troubleshoot-upn-changes)

**Check:** Your journal contains an observed full UPN and its suffix. For a confirmed suffix of `isc.com`, the ISC mapping will be `${sAMAccountName}@isc.com`, and Liam's expected UPN will be `acme.e008@isc.com`. Keep `${sAMAccountName}` as an expression in the mapping; do not replace it with Lucas's or Liam's username.

**Screenshot:** Save `AR-005-upn-suffix.png` showing Lucas's **Account** tab and the selected suffix.

#### Copy the target OU DN

The OU's **distinguished name (DN)** tells ISC where to create the user. Copy the OU value, not Lucas's account DN.

1. In **Active Directory Users and Computers**, select **View > Advanced Features**.
2. Right-click the **Users** OU directly beneath **AcmeLab**, then select **Properties > Attribute Editor**.
3. Select **distinguishedName > View** (or **Edit**, if offered), copy the complete value, and close without changing it.
4. Record that value as **Users OU DN**. If the Attribute Editor tab is missing, close Properties, confirm Advanced Features is selected, and reopen the OU directly from the tree.
5. Compare it with the saved **User Search Scope > Search DN** in your AD source's **Account and Group Settings**. The search must cover this OU before provisioning.

For example, if the copied value is `OU=Users,OU=AcmeLab,DC=isc,DC=com`, enter `CN=$(uid),OU=Users,OU=AcmeLab,DC=isc,DC=com` in the DN generator. Preserve any additional parent OUs present in your real DN. A value beginning `CN=Acme Lab - Lucas Brown,` is Lucas's account DN, not the target OU DN.

**Check:** The recorded target starts with your Users OU and ends with your actual domain components. Save `AR-005-users-ou-dn.png` showing this value.

### 2. Create the baseline security group

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

5. Select **OK** to create the group. Open its **Properties > General**, enter the description from the table, and select **Apply**. Leave the group empty on the first run.
6. Open **Properties > Attribute Editor** and record its `distinguishedName`.
7. In ISC, open the AD source and run **Entitlement Management > Entitlement Aggregation**.
8. Search for `GG-ACME-BASELINE` under **Entitlements**.
9. Open it and record its entitlement value/native identifier.

**Check:** ISC now contains 15 Acme course groups, including `GG-ACME-BASELINE`.

**Screenshot:** Save `AR-005-01-baseline-group.png`. Capture the baseline group in AD and the imported entitlement in ISC.

### 3. Open Create Account configuration

For the separate ISC ID and native group value, follow [the entitlement lookup](../../LAB-VALUES.md#separate-entitlement-ids-from-native-group-values). Record both beside the source name.

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

### 4. Verify mapping order and password policy

1. Use the up/down arrows or drag control to place **sAMAccountName** before **userPrincipalName**.
2. Confirm `userPrincipalName` uses the previously calculated `${sAMAccountName}` value.
3. Confirm `distinguishedName` uses the identity value `$(uid)`.
4. Confirm `employeeID` maps from `identificationNumber`.
5. Follow **Inspect the password policy before creating an account** below and record the comparison.
6. Save the Create Account configuration.
7. Leave the page and reopen it.
8. Verify the values and order were saved.

Reference: [AD provisioning reference](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/provisioning_reference.html)

**Check:** The saved Create Account configuration matches the table and uses your actual Users OU DN and UPN suffix.

**Screenshot:** Save `AR-005-02-create-account-mappings.png`. Capture the complete mappings and the naming expressions.

#### Inspect the password policy before creating an account

The password generator needs rules that AD will accept. Record the policies first; a connection test does not validate a generated password.

1. In ISC, open **Admin > Connections > Sources > your AD source > Additional Settings > Password Settings**. Record the selected password policy. If **Use Sync Group** is enabled, record the group without changing it; open **Admin > Password Mgmt > Sync Groups**, select that group, and record its policy.
2. Open **Admin > Password Mgmt > Policies**, select the recorded policy, and inspect its length and character requirements. Keep this page open for comparison. [ISC password policies](https://documentation.sailpoint.com/saas/help/pwd/pwd_policies/pwd_policies.html) and [source policy/sync-group settings](https://documentation.sailpoint.com/saas/help/pwd/sync_grps.html).
3. On your AD administration workstation, open **Windows PowerShell** and run the read-only block below. Enter the training domain's DNS name, such as `isc.com`, when prompted. This is the AD domain, which can differ from an alternative UPN suffix.

```powershell
Import-Module ActiveDirectory -ErrorAction Stop
$LabDomain = Read-Host 'Training AD domain DNS name'
Get-ADDefaultDomainPasswordPolicy -Identity $LabDomain -ErrorAction Stop |
    Select-Object MinPasswordLength,ComplexityEnabled,PasswordHistoryCount,MinPasswordAge,MaxPasswordAge
Get-ADUserResultantPasswordPolicy -Identity 'acme.e012' -Server $LabDomain -ErrorAction Stop |
    Select-Object Name,MinPasswordLength,ComplexityEnabled,PasswordHistoryCount
```

The first result is the domain default. The second checks for a fine-grained policy applying to Lucas. No second result means no resultant fine-grained policy was returned; an error is not the same as an empty result. If a fine-grained policy applies, record it and check which users/groups it targets with your AD administrator. Lucas's result does not establish which policy a new Liam account will receive. [Domain policy](https://learn.microsoft.com/en-us/powershell/module/activedirectory/get-addefaultdomainpasswordpolicy) and [resultant user policy](https://learn.microsoft.com/en-us/powershell/module/activedirectory/get-aduserresultantpasswordpolicy).

4. Compare the ISC generation rules with the applicable AD requirements. Also account for any installed password filter or custom provisioning rule. Record the ISC policy name, AD requirements and any unresolved difference in the journal. Keep domain policy and sync-group membership unchanged during this inspection.
5. If the rules conflict, resolve the assigned ISC policy with the lab administrator before triggering creation. AR-006's actual account creation will verify acceptance; checking policy settings alone is not proof.

If `Import-Module` fails, use the AD server or a workstation with the Active Directory RSAT tools installed. Save `AR-005-password-policy.png` showing policy names and requirements, without a password or secret.

### 5. Verify Liam's identity before creation

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

## Check the result

### What you will finish with

- `GG-ACME-BASELINE` created and aggregated.
- A saved **Create Account** configuration for the AD source.
- Liam Patel (`acme.e008`) still without an AD account, ready for AR-006.

---

### Try it yourself

Use Priya’s identity (`acme.e002`) to write her expected DN, UPN and employeeID using the saved mappings. Keep this prediction for AR-007. Do not change the shared policy or create her manually.

Write these answers in your [journal](EVIDENCE.md):

1. What will supply Liam’s username in the DN and UPN expressions?
2. Why does saving Create Account leave Liam absent from AD?

### If a check does not match

If a saved mapping differs, reopen Create Account and correct its type, value and order before assigning baseline access. If Liam already exists, keep him and record the existing account; do not delete him to recreate the example.

### Final verification

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

## Finish

### Leave this in place

Keep the baseline group and Create Account configuration unchanged. AR-006 will use them to update Lucas's existing account and create Liam's missing account.

### Screenshots to capture

Also capture AR-005-upn-suffix.png, AR-005-users-ou-dn.png and AR-005-password-policy.png at the lookup steps above.

Capture results after the checks above. Hide passwords, tokens, invitation links and private mailbox details. Use additional images when all required fields do not fit.

| Filename | Evidence |
|---|---|
| `AR-005-01-baseline-group.png` | Capture the baseline group in AD and the imported entitlement in ISC. |
| `AR-005-02-create-account-mappings.png` | Capture the complete mappings and the naming expressions. |
| `AR-005-03-liam-identity.png` | Capture Liam's ISC identity attributes. |

Next: **[AR-006 — Provision Your First AD Account](../AR-006/README.md)**

[Previous: AR-004](../AR-004/README.md) · [Lab index](../README.md)
