# Lab desk

Keep this page open beside the current lab. These procedures use the accounts and groups created in AR-001–009.

## Record your environment

Copy this table into your private notes. Obtain IDs from the relevant object's details or a read-only API response; names are not IDs.

| Parameter | Your value |
|---|---|
| Tenant UI URL and API base URL | |
| AD source name and ID | |
| Domain controller used for verification | |
| Users, AdminAccounts and Groups OU distinguished names | |
| Requester, recipient and reviewer identity IDs | |
| Access item type, name and ID | |
| AD account distinguished name and objectGUID | |
| Entitlement ID and native group distinguished name | |
| Request ID, item ID, approval ID and account activity ID | |

Keep passwords, tokens, callback secrets and working email addresses outside GitHub. Screenshots should show the relevant configuration and result without those values.

## Check membership in AD

On the AD administration workstation, open PowerShell with the ActiveDirectory module. Replace the domain controller value once; use the same controller for before/after checks.

```powershell
Import-Module ActiveDirectory
$LabDC = Read-Host 'Domain controller DNS name'
$LabUser = Get-ADUser -Identity 'acme.e012' -Server $LabDC -Properties memberOf,employeeID,Enabled
$LabUser | Select-Object SamAccountName,DistinguishedName,ObjectGUID,employeeID,Enabled
$LabUser.memberOf | Sort-Object
Get-ADGroupMember -Identity 'GG-VPN-USERS' -Server $LabDC |
    Select-Object SamAccountName,DistinguishedName,ObjectClass
```

Change the username and group to those named in the lab. Capture the result before submitting and after fulfillment. Direct membership and effective access through nested groups are different checks. Do not use a nested-membership result to claim ISC directly provisioned a group.

If controllers disagree, record both results and investigate AD replication before changing ISC. Use native AD tools to verify the actual account; the Request Center status alone cannot prove membership.

## Check the starting state for every lab

1. Read the current lab’s actors and confirm each required requester/reviewer can sign in. For a new actor, repeat [AR-008 Sections 1–4](labs/AR-008/README.md), using the latest complete private HR file.
2. Record the item’s owner, reviewer or workflow, requestability, form, date constraints, removal policy and segment. Record any global value the lab changes.
3. Check the recipient’s current assignments, native group memberships and pending requests for the same item/account. A clean grant test needs no matching assignment or pending duplicate. Preserve baseline and unrelated access.
4. For a request on behalf of Taylor or another user, verify the current requester is authorized under [AR-023](labs/AR-023/README.md). If a temporary setting change is needed, record it, enable only for the exercise, and restore it after all requests have been accounted for. Do not assume an earlier lab left Everyone-for-anyone enabled.
5. After the lab, remove every test grant, including any known-good control on a second group, and resolve pending controls. Restore recorded settings unless the lab explicitly retains them. Do not advance while a failed removal leaves unexplained access.

Lucas retains a directly requested VPN assignment from AR-012. Removing a later profile that also includes VPN must preserve that independent grant. After AR-047 the working HR file has 25 records; the baseline role still selects only the original 24.

## Submit and follow a control request

1. Use the named requester's browser session. Confirm their username in the profile menu.
2. Open **Request Center**, find the exact lab item and check its source/type. For a request for someone else, select the recipient and verify their name before continuing.
3. Add the item. If account selection appears, match its identifier to the intended AD account. Complete required form/date fields.
4. Use the current lab ID as the start of the business reason, for example `AR-012: Finance reporting from the remote lab`.
5. Review and submit once. Open **Request Center > My Requests** and record the request, recipient, item, status and timestamp.
6. In the assigned reviewer's session, open **Approvals**, locate that recipient/item, inspect the details and approve or deny as instructed. Record each stage separately.
7. As administrator, open **Admin > Dashboard > Approval Management** and locate the same request. Inspect its process and available provisioning details. Open the linked account activity where available; otherwise locate the matching activity by recipient, item and submission time.
8. Check native membership using the commands above. If AD changed but ISC is stale, run the source's account aggregation and inspect the identity's **Accounts** and **Access** after processing. Allow indexing to finish before comparing Search.

An approval still pending is not a provisioning failure. A future-dated assignment need not be provisioned today. If no error is visible, capture the current stage and timestamps before retrying.

## Create a business access profile

Use the name, owner and groups from the current lab.

1. Open **Admin > Access Model > Access Profiles > Create New**.
2. In **Configuration**, enter the exact name and a description explaining the business task. Select the specified primary owner and your AD entitlement source. Save.
3. In **Manage Entitlements**, find each specified group, verify its source and native value, add it and save.
4. Open **Access Requests**, enable requests and set the lab's reviewer and required comments. Save.
5. Enable the profile. Apply changes from the Access Profiles page when offered and wait for processing to finish.
6. Reopen the profile and record the saved entitlements and approval settings. Test visibility as the named requester.

Retain business profiles for later labs. Disable requestability only when a lab explicitly asks you to test that condition. [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)

## Remove a test assignment

1. Record the identity's current **Access** and native membership.
2. As administrator or an authorized Access Revoker, open **Admin > Identities**, select the recipient and open **Access**.
3. Locate the requested role, profile or entitlement assignment. Inspect its origin and account. Select the available removal action for that assignment, add the lab's reason and submit.
4. Complete any removal approvals. Track the removal request and verify the intended target membership disappears.
5. If it remains, inspect other roles/profiles and automatic assignments before making another change. AR-043 covers this investigation.

Do not remove `ROLE-Acme-AD-Baseline` or its group as a request-lab reset. If a business membership existed before the lab, preserve it and use a different recipient for a clean negative test.

## Prepare an approval workflow

1. Open **Admin > Workflows** and create a workflow from scratch. Use the name specified by the lab.
2. Select the native **Access Request Submitted** trigger.
3. Add **Approval Policy** from **Access Request Actions**. Select the specified type, scheme and reviewers. Use **Expire** for timeout unless a lab explicitly tests another outcome.
4. Connect the trigger to the action and the action to the completion step. Save, validate and enable the workflow.
5. Edit the named access item's **Access Requests** configuration. Under approval, choose **Workflow**, select this enabled workflow and save.
6. Submit a new request. Open that workflow's execution history and correlate its input with the request. Verify approval and target state separately.

Use the Access Request action, not **Generic Approval Policy**. A successful workflow execution is not by itself proof that access was approved. [Workflow actions](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html), [Adaptive Approvals](https://documentation.sailpoint.com/saas/help/adaptive_approvals/index.html)

## When the result differs

Write down the failing boundary: visibility, submission, routing, decision, provisioning, target state or reconciliation. Compare a fresh control request. Change one setting, repeat the same case and record the new evidence. When the configuration and inputs match the documentation but the service result does not, retain the request IDs and sanitized evidence for AR-074 instead of inventing a workaround.
