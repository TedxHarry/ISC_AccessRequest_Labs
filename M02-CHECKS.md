# Request and target checks

Keep this page and the current lab journal open. These checks use existing accounts; do not create another AD user for a request.

## Prepare Olivia or Liam to sign in

Use this procedure before AR-013 for Olivia (`acme.e011`, E011) and before AR-015 for Liam (`acme.e008`, E008).

1. In the administrator session, open **Admin > Identity Management > Identities** and find the named username. Verify its employee number, Acme Employees profile and linked standard AD account.
2. Open your latest complete private `acme-hr-working.csv`. Set that employee's email to a unique test inbox you control. Preserve all employee rows and existing controlled email addresses.
3. Open **Admin > Connections > Sources > Acme HR > Account Management > Account Aggregation**. Upload the complete file. Inspect the aggregation and **Admin > Dashboard > Monitor** until processing finishes.
4. Reopen the identity and verify Work Email. Keep this updated working file for future imports.
5. Read **Acme Employees > Settings > Sign-in Method**. Keep the configured authentication route. For an unregistered ISC-password user, use **Actions > Invite Identity** and complete registration in a new browser profile named **Acme Olivia** or **Acme Liam**. For working external authentication, use its established route. Use the registration steps from AR-008 for the selected authentication route.
6. Sign out and back in. Open the user menu and verify the actual username before opening Request Center. Keep ordinary user permissions; no administrator level is needed for this test.

**Check:** The named employee has a fresh working session, the HR population is intact, and their standard AD account is linked. Record the browser profile and sign-in route, not the password.

## Inspect direct AD membership

On your AD administration workstation, open PowerShell. Run this block and enter the controller, username and group requested by the current lab. Use the same controller for before and after checks.

```powershell
Import-Module ActiveDirectory -ErrorAction Stop
$LabDC = Read-Host 'Domain controller DNS name'
$LabUsername = Read-Host 'Course username, for example acme.e012'
$LabGroupName = Read-Host 'Group name, for example GG-VPN-USERS'
$LabAccount = Get-ADUser -Identity $LabUsername -Server $LabDC -Properties memberOf,employeeID,Enabled -ErrorAction Stop
$LabGroup = Get-ADGroup -Identity $LabGroupName -Server $LabDC -ErrorAction Stop
$LabAccount | Select-Object SamAccountName,DistinguishedName,ObjectGUID,employeeID,Enabled
$LabGroup | Select-Object Name,DistinguishedName
[pscustomobject]@{
    Username = $LabUsername
    Group = $LabGroupName
    DirectMember = (@($LabAccount.memberOf) -contains $LabGroup.DistinguishedName)
    CheckedAt = (Get-Date).ToString('o')
}
```

`DirectMember = True` proves direct membership on that controller. `False` means direct membership is absent; it does not evaluate effective access through nested groups. A command error is not a False result. Resolve the controller, module, permissions or object lookup error before recording the check.

Record the account DN, objectGUID, group DN and result. Repeat the block for each named group. These commands only read AD.

## Inspect a request as administrator

1. Open **Admin > Dashboard > Approval Management > Access Requests**.
2. Locate the request by recipient, item and submission time. Open it and record its request ID where displayed.
3. Inspect **Process**, **Assignees** and **Details**. Record the actual reviewer and current stage.
4. Open linked account activity when available. Otherwise open **Search**, select **Account Activity**, and match recipient, AD source, operation time and group value.
5. Record operation status, error text and activity ID separately from the request ID. After a final successful operation, check AD directly. Approval alone does not establish target membership.

**If it is pending:** Identify whether it is waiting for a reviewer, scheduled access or provisioning. Reopen the same request instead of submitting a duplicate.

**If it failed:** Inspect the exact operation and native state before retrying. A partial result can leave one group present and another missing. Keep the lab incomplete until the required target result is verified.

[Approval administration](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html) · [Provisioning activity](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html)

## Refresh imported AD data

1. Open **Admin > Connections > Sources > your AD source > Account Management > Account Aggregation**.
2. Start one aggregation after the provisioning operation finishes. Inspect Aggregation History and wait for completion.
3. Open the recipient under **Admin > Identity Management > Identities**. Compare **Accounts > AD account** and **Access** with the native membership result.
4. Preserve source scope and correlation settings. Do not repeatedly aggregate while a previous run is still active.

Keep all baseline role assignments. Remove a requested business assignment through ISC only when the lab directs it; native deletion is not the reset procedure.
