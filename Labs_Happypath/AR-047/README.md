# AR-047 — Create Taylor’s AD account through an access request

In this lab, you'll add Taylor as an HR identity, let Taylor request Remote Worker, and verify that ISC creates the missing AD account before adding access.

## Before you start

Complete [AR-046](../AR-046/README.md). Keep the working account-creation mappings from AR-005. Use Acme Admin, Priya (`acme.e002`), the AD workstation and a unique controlled inbox for Taylor. Taylor’s identity, ISC session and AD account will be created in this lab. Keep your latest complete private HR CSV and [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Check names and the creation settings

1. As administrator, search identities for `acme.e025` and employee number `E025`. In AD Users and Computers, search the training domain for `acme.e025`, not just the lab OU. Use the read-only query below on the AD workstation to verify the domain search succeeded:

```powershell
Import-Module ActiveDirectory -ErrorAction Stop
$LabDC = Read-Host 'Verification domain controller DNS name'
Get-ADUser -Filter "SamAccountName -eq 'acme.e025'" -Server $LabDC -ErrorAction Stop |
    Select-Object SamAccountName,DistinguishedName,ObjectGUID
```

2. No returned row from a successful query supports account absence. An error does not. If Taylor already exists from a prior run, retain that identity/account and inspect the earlier creation evidence; do not delete it to manufacture a new first-run result. Resume at the first unfinished check.
3. Open **Admin > Connections > Sources > your AD source > Account Management > Create Account**. Recheck the AR-005 mappings: username, generated DN under the recorded Users OU, employeeID from Employee Number, UPN suffix/order and password generator. Record expected `acme.e025`, employeeID `E025`, Users DN and UPN using your actual suffix. Keep credentials out of the journal.
4. Open **Admin > Access Model > Roles > ROLE-Acme-AD-Baseline > Define Assignment** and verify its explicit list still contains only the original 24 identities. Review other lab automatic roles/lifecycle assignments for criteria that could include Taylor before adding the HR row.

**Check:** On a first run, Taylor has no identity or AD account, and no automatic assignment should create an AD account before the request.

### 2. Add one HR row and import the complete file

1. Make a private backup of the latest complete working HR CSV. Preserve existing controlled email addresses and all current rows. If E025 already exists, verify that row instead of appending another. Otherwise append Taylor once using the existing column headers and these values:

| Column | Taylor's value |
|---|---|
| employeeNumber | E025 |
| userName | acme.e025 |
| firstName | Taylor |
| lastName | Stone |
| displayName | Acme Lab - Taylor Stone |
| email | Taylor's unique controlled inbox |
| department | Engineering |
| title | Lab Engineer |
| managerEmployeeNumber | E006 |
| location | Chicago |
| employeeType | Employee |
| costCenter | ENG500 |
| status | active |
| startDate | 2025-01-06 |

2. Check there is one header, one E025 row, no duplicate usernames and 25 employee rows on a first pass. Preserve any additional legitimate later rows on a repeat. Do not replace the private file with the public 24-row baseline CSV.
3. Open **Admin > Connections > Sources > Acme HR > Account Management > Account Aggregation**, upload the complete CSV and start the import. Wait for completion and identity processing. Reopen `acme.e025` under **Admin > Identity Management > Identities**.
4. Verify Acme Employees, Employee Number E025, Manager Ava, Engineering and the controlled Work Email. In Accounts, Taylor should have HR but no account on your AD source yet. Rerun the AD absence query. Save `AR-047-01.png` before requesting.
5. Prepare Taylor's ISC sign-in using [the ISC registration steps](../../labs/AR-008/README.md#4-register-users-who-use-isc-credentials), substituting Taylor and the controlled email just verified. The linked-AD-account check used for earlier actors does not apply to Taylor before this request. For ISC credentials, use **Actions > Invite Identity**, register in a separate Acme Taylor browser profile, and verify `acme.e025`. Keep an existing external sign-in method if configured. If your external route requires an AD account before Taylor can sign in, use the on-behalf alternative below rather than changing tenant authentication.

**Check:** On a first run, HR created Taylor's identity without an AD account. On a resumed run, keep the existing account and label the creation evidence historical; continue with the checks that remain unfinished.

### 3. Request and approve Remote Worker

1. Verify **AP-Remote-Worker** contains only GG-VPN-USERS and GG-REMOTE-USERS, is enabled/requestable and uses Primary Owner/Priya for grant and removal. Keep its original form/date settings from earlier labs.
2. As Taylor, open **Request Center > Access Items > Access Profiles**, select `AP-Remote-Worker`, enter `AR-047 create Taylor through requested access`, keep immediate access, save, review and submit. No existing AD account can be selected in this first-run case. Record the request ID from My Requests.
3. If Taylor cannot yet sign in because the established authentication route needs AD, use Acme Admin's **Request Center > Request for Others**, select `acme.e025` and **Request for These Identities**, then submit the same item/reason. Verify Taylor remains the recipient. Administrators can request for others; do not enable broad ordinary-user authority just for this action. Record this alternate requester in the journal.
4. As Priya, open the matching Grant under **Approvals > Access Requests > Requested**. Verify Taylor as recipient, Remote Worker and the reason, then approve and confirm.

**Check:** The approved request, rather than membership in the baseline role, is the trigger being tested.

### 4. Verify creation and membership

1. In **Search > Account Activity**, query `recipient.name:acme.e025`, match the new request time and open the AD source operation. Record the create operation and its native identity, subsequent membership changes, result and activity ID. If a create-only filter hides the record, use this broader recipient query. Save `AR-047-02.png`.
2. In AD, open Taylor under AcmeLab/Users. Verify sAMAccountName, DN, UPN suffix, employeeID E025, display name, department, title and the configured enabled/password-change state. Do not capture a password. Record objectGUID.
3. Run [native membership checks](../../M02-CHECKS.md#inspect-direct-ad-membership) for Taylor: VPN True, Remote Users True, baseline False. Taylor is intentionally outside the 24-person baseline list.
4. Aggregate AD accounts and reopen Taylor's Accounts. Verify one AD account is linked to the original Taylor identity, not a duplicate identity. Confirm the identity Employee Number and imported employeeID match E025. Save `AR-047-03.png`.
5. If using the external-authentication alternative, now sign in as Taylor using that established route and verify the ISC username. Do not change the source's creation mapping to fix an unrelated ISC login issue.

**Check:** A first full-course pass now has 25 HR identities and 26 AD accounts: 24 standard originals, Sofia's extra account and Taylor. Baseline still contains 24 people.

### 5. Remove access and retain Taylor

1. As administrator, open **Admin > Identity Management > Identities > Taylor > Access > Access Profiles > AP-Remote-Worker > Details**. Select **Revoke Access Profile**, enter `AR-047 test complete`, then **Revoke**.
2. As Priya, inspect and approve Taylor's matching removal. Follow its activity and verify VPN False, Remote Users False and baseline still False. Refresh imported AD data.
3. Verify Taylor's account remains with the same DN/GUID and identity link. Save `AR-047-04.png`. Keep the complete private HR file with Taylor for every subsequent import.

**Check:** Removing group access did not delete the newly created account. Later Taylor requests test updates to this existing account.

## Check the result

The first-run evidence shows no AD account before the request, an account-create operation, correct native attributes/groups, correlation and removal of the groups while retaining the account.

## Finish

Retain Taylor’s identity, ISC sign-in and AD account, with no VPN/Remote Users/baseline membership. Preserve the complete 25-row working HR file and the original 24-person baseline list. Continue with Taylor as requester in AR-048.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-047-01.png | Taylor identity and proven AD absence |
| AR-047-02.png | Create operation and requested group changes |
| AR-047-03.png | Native account attributes and correlated identity |
| AR-047-04.png | Group removal with account retained |

[Previous: AR-046](../AR-046/README.md) · [Course outline](../../README.md) · [Next: AR-048](../AR-048/README.md)
