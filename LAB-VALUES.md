# Find the values a lab asks you to record

Keep your private journal open. Copy values from your own environment and label what each value identifies. `E012`, an ISC identity ID, and an AD account's objectGUID identify different things even when they belong to Lucas.

## Find the AD domain and domain controller

1. On the AD workstation, open **Server Manager > Tools > Active Directory Users and Computers**. Read the domain node above AcmeLab, for example `isc.com`. Record it as **AD domain DNS name**.
2. Open **Windows PowerShell** on that workstation and run:

```powershell
Import-Module ActiveDirectory -ErrorAction Stop
$LabDomain = Read-Host 'Training AD domain DNS name shown in AD Users and Computers'
Get-ADDomainController -Discover -DomainName $LabDomain -ErrorAction Stop |
    Select-Object HostName,Domain,Site
```

3. Record the returned **HostName**, for example `dc01.isc.com`, as **verification domain controller**. Enter that hostname when a membership-check script asks for `$LabDC`. Do not enter the ISC tenant name, UPN or `DC=isc,DC=com`.
4. Use that same controller for before/after checks. If discovery fails, record the error and check domain connectivity with the AD lab administrator. If the ActiveDirectory module is missing, run on the AD server or a workstation with AD RSAT tools. Do not treat a failed command as evidence that an account or membership is absent.

This discovers a controller for verification; it does not identify which controller the ISC connector used. Keep those observations separate when investigating replication. [Microsoft domain-controller discovery](https://learn.microsoft.com/en-us/powershell/module/activedirectory/get-addomaincontroller)

## Copy an OU, user or group DN

1. In **Active Directory Users and Computers**, enable **View > Advanced Features**.
2. Locate the object directly in the tree: an OU under AcmeLab, a user under Users, or a group under Groups.
3. Open **Properties > Attribute Editor**, select **distinguishedName**, then **View** or **Edit**. Copy the complete value and close without changing it.
4. Record which object you opened. An OU DN starts with an OU component; an account or group DN generally starts with its CN component. A creation policy's target OU must not include Lucas's CN.

If Attribute Editor is missing, reopen the object directly from its OU after enabling Advanced Features; do not rely on a Find-result window. For UPNs, follow the **Account** tab walkthrough in your path's AR-005.

## Read an AD objectGUID and account attributes

Use this when a lab asks whether an object is still the same object after a name or membership change. Open PowerShell on the AD workstation:

```powershell
Import-Module ActiveDirectory -ErrorAction Stop
$LabDC = Read-Host 'Verification domain controller hostname'
$LabUsername = Read-Host 'AD username from this lab, for example acme.e012'
Get-ADUser -Identity $LabUsername -Server $LabDC -Properties userPrincipalName,employeeID,Enabled -ErrorAction Stop |
    Select-Object SamAccountName,UserPrincipalName,DistinguishedName,ObjectGUID,employeeID,Enabled
$LabGroupName = Read-Host 'AD group from this lab, for example GG-VPN-USERS'
Get-ADGroup -Identity $LabGroupName -Server $LabDC -ErrorAction Stop |
    Select-Object Name,SamAccountName,DistinguishedName,ObjectGUID
```

Copy **ObjectGUID** as displayed and retain the before value for comparison. This is the native AD identifier, not an ISC entitlement ID. These commands inspect existing objects; they do not create or modify them. [Get-ADUser](https://learn.microsoft.com/en-us/powershell/module/activedirectory/get-aduser) and [Get-ADGroup](https://learn.microsoft.com/en-us/powershell/module/activedirectory/get-adgroup).

## Find ISC source and identity IDs

1. For a source, open **Admin > Connections > Sources**, select the intended source, and record its name. Copy the source identifier from the source-specific browser URL. Keep the AD source and Acme HR source in separate journal rows.
2. For an identity, open **Admin > Identity Management > Identities**, search the course username and open the matching person. Confirm **Acme Employees** and the expected Employee Number. Copy **ID** from the identity's Details card.
3. Record the ID beside the person's username. Copying `acme.e012` or `E012` into an API parameter expecting an identity ID will not identify the same resource correctly.
4. Before making an API change, use the workbench's read-one-object request to confirm that the ID returns the intended object. If the source URL is ambiguous, retain the full URL in private notes and use the supported source details/API response; do not guess from an unrelated URL segment.

The ID on an identity's **Accounts** page identifies an account record. Reopen the identity's **Details** page when you need an identity ID.

## Separate entitlement IDs from native group values

1. Open **Admin > Connections > Sources > your AD source > Entitlement Management > Entitlements**.
2. Search for the exact group from the lab and open it. Record its name, source, entitlement **attribute/type**, and **value**. For this course's AD groups, compare the native value with the group DN obtained above.
3. Record the ISC entitlement **ID** separately if the details expose it. If not, open **Search**, choose **Entitlements**, and search `name:"GG-VPN-USERS"`, replacing the group name for your lab. Check the source of every match.
4. Export the matching search results and inspect **Entitlement ID**, **Source ID**, **Attribute**, and **Value**. Copy the ID only from the row whose source and native value match your group. Keep the export private.

For an API request with type `ENTITLEMENT`, use that entitlement ID. For type `ACCESS_PROFILE` or `ROLE`, use the ID of the profile or role instead. An AD group DN is not an access-item ID. [Search export fields](https://documentation.sailpoint.com/saas/help/search/downloading_search_results.html)

## Find an access profile or role ID

1. Open **Admin > Access Model > Access Profiles** or **Roles**, then the exact item named in the lab. Verify its owner and included access.
2. Record the item-specific identifier from its details/URL where available. If it is not exposed, use **Search > Access Profiles** or **Search > Roles**, find the named object, and export its matching row to obtain its ID. Confirm the name and included access before using the row.
3. Record **type, name and ID** together. Two profiles can include the same group; the group's ID does not substitute for either profile ID.

## Record a request, approval and activity separately

1. Submit only the request instructed by the lab. Record the recipient, item, business reason and submission time from **My Requests**.
2. Open that request's details and copy identifiers with their displayed labels. In the reviewer session, open the matching **Approvals** item and record its decision/task identifier separately.
3. In administrator provisioning details, locate the same recipient, source and time. Record the account activity identifier and each operation's result.
4. When the UI does not expose a required identifier, follow the [API workbench](API-WORKBENCH.md#read-before-submitting): read recipient history, the reviewer's pending approvals, or the account activity. Match the person, item and time before copying a field. Do not assume the first returned row is your request.

Use an approval ID for an approval decision and the account activity ID for the documented cancellation operation. An accepted submission and an approved review still require the native target check in the current lab.

## Replace examples without replacing expressions

| Text in a lab | What to do |
|---|---|
| `YOUR-UPN-SUFFIX` | Replace with the observed suffix without `@` |
| `YOUR-USERS-OU-DN` | Replace with the complete target OU DN |
| `<AD-source-ID>` or `YOUR-IDENTITY-ID` | Replace the entire placeholder, including brackets, with that object's ISC ID |
| `$(uid)` in a DN generator | Leave the expression unchanged; the generator reads the identity attribute |
| `${sAMAccountName}` in a Static UPN mapping | Leave it unchanged; it reads the account value calculated earlier |
| `{{recipientId}}` in Postman | Set the variable in the selected environment; verify it resolves to the intended identity ID |

After saving a configuration, leave and reopen the page to confirm the actual values. Record both the saved expression and one predicted result when the lab asks for a naming check.
