# API workbench

Use Postman Desktop for the walkthroughs. The URLs below use the current service-versioned operations checked on 14 September 2026, such as `/access-requests/v1`. Put that path directly after your API origin; do not add `/v3` or `/v2026` in front of it. [Current API specification](https://developer.sailpoint.com/redoc/sailpoint-api.html), [versioning guidance](https://developer.sailpoint.com/docs/api/api-versioning-strategy/).

## Prepare a private client environment

1. Sign in as the person named by the lab. Verify the username in the user menu, then open **Preferences > Personal Access Tokens > New Token**. Enter a description such as `Acme Module 9 Taylor`, then **Create Token**. Keep the dialog open until its Client ID and Client Secret are stored in Step 4. Record the owner and token description, never the secret. Do this in the owner's session, not in an administrator session on their behalf.
2. In Postman Desktop, open **Environments > +**, name the environment for the caller and select it in the environment selector. Module 9 uses **Acme API Admin**, **Acme API Taylor** and **Acme API Priya**. A token represents its owner; renaming an environment does not change the caller.
3. Add `apiBase`, the confirmed tenant API origin with no trailing path. Use the **Org Name** from **Admin > Dashboard > Overview** with the tenant's regional API hostname, or your existing working API configuration. Read `{{apiBase}}/oauth/info` without authentication and confirm its tenant name and token endpoint. A branded UI hostname is not the API origin.
4. Open **Vault > Local Vault**, unlock or set up the vault, and add caller-specific secrets for Client ID and Client Secret. In the environment, create `clientId` and `clientSecret`; make each a secure variable and select its matching local vault secret as the value. You will add `token` after a successful exchange. Keep the caller names distinct, for example `acme-taylor-client-secret`. Local vault secrets are not shared with collaborators. See [Postman vault variables](https://learning.postman.com/docs/use/postman-vault/use-vault-secrets).
5. Create a request named **Get token**, set **POST** `{{apiBase}}/oauth/token` and **Authorization > No Auth**. Under **Body > x-www-form-urlencoded**, add `grant_type` = `client_credentials`, `client_id` = `{{clientId}}`, and `client_secret` = `{{clientSecret}}`. Send once.
6. Expect HTTP 200 with `access_token`, `token_type` and expiry information. Create a caller-specific local vault secret for the returned access-token value. Add the environment variable `token`, make it secure and select that new local vault secret. On a later exchange, update that caller's existing token secret. On other requests, set **Authorization > Bearer Token** to `{{token}}`. Record the expiry privately. If it expires, repeat the token exchange; do not use the Client Secret as the bearer token.
7. Add ordinary environment variables `recipientId`, `itemId`, `approvalId`, `activityId` and `requestTag`. Populate recipient/item using the lookup below. Leave approval/activity IDs empty until a matching request exists. Save the request definitions without embedding credentials in their bodies or headers. Before a screenshot, hide authorization values and the token response.

PATs retain the owner's user-level boundary; scopes can further restrict calls. If a token is restricted, compare its granted scopes with the specific operation's security entry. A token that works for a self request does not establish permission to read another person's history or approve Priya's work. Do not promote Taylor or Priya to administrator to make a failed read pass. [Authentication](https://developer.sailpoint.com/docs/api/authentication/), [authorization and scopes](https://developer.sailpoint.com/docs/api/authorization/).

### Populate the IDs before your first API read

1. In the ISC administrator session, open the recipient's identity **Details** and copy **ID**, after checking the username and Employee Number. Follow the [identity lookup](LAB-VALUES.md#find-isc-source-and-identity-ids). Paste this into the environment's `recipientId` value.
2. Find the access profile specified in the lab and obtain its ID using the [access-item lookup](LAB-VALUES.md#find-an-access-profile-or-role-id). Paste it into `itemId`. Do not use an entitlement ID for a profile request.
3. Use Acme API Admin for these identity/profile reads. Save the same verified non-secret IDs in the Taylor/Priya environments used later. Save the environment values as appropriate for your Postman version. Open **GET `{{apiBase}}/identities/v1/{{recipientId}}`**, set **Authorization > Bearer Token** to `{{token}}`, and send. Confirm HTTP 200 and that the returned identity is your recipient.
4. Send **GET `{{apiBase}}/access-profiles/v1/{{itemId}}`** and confirm the returned profile name and included access. These are reads; they create no access request.
5. If a variable is unresolved, check the selected environment and its exact spelling. If the server returns an error, inspect its status and body before continuing. Do not submit a grant while either read identifies the wrong object.

Record `apiBase` as the API origin only, without `/v3` or a trailing operation path. Use the API hostname confirmed for your tenant's region. A custom-branded sign-in URL is not sufficient to derive it; use your existing working tenant API configuration or the [authentication guidance](https://developer.sailpoint.com/docs/api/authentication/).

## Read before submitting

| Purpose | Method and URL |
|---|---|
| Read one identity | `GET {{apiBase}}/identities/v1/{{recipientId}}` |
| Read a profile | `GET {{apiBase}}/access-profiles/v1/{{itemId}}` |
| List this recipient's request history | `GET {{apiBase}}/access-request-status/v1?requested-for={{recipientId}}&limit=50&offset=0` |
| Read my pending approvals | `GET {{apiBase}}/access-request-approvals/v1/pending?owner-id=me&limit=50&offset=0` |
| Read an account activity | `GET {{apiBase}}/account-activities/v1/{{activityId}}` |

In the client, enter query parameters in the Params table so values are URL-encoded. Check the returned recipient/item before acting. List endpoints require pagination: use `sorters=created,accountActivityItemId` on status reads and advance offset by the requested limit until the returned page is shorter than the limit. Keep the same filters and avoid new submissions while collecting pages; offset pagination is not a frozen snapshot. Do not assume the first result is the request you just submitted.

## Submit one profile request

Set `requestTag` to the lab’s reason. Create **POST** `{{apiBase}}/access-requests/v1`, choose **Body > raw > JSON**, confirm `Content-Type: application/json`, and send the body below only after confirming this recipient does not already have the assignment or a pending duplicate.

```json
{
  "requestedFor": ["{{recipientId}}"],
  "requestType": "GRANT_ACCESS",
  "requestedItems": [
    {
      "type": "ACCESS_PROFILE",
      "id": "{{itemId}}",
      "comment": "{{requestTag}}"
    }
  ]
}
```

Use `ENTITLEMENT` or `ROLE` only with the matching type of item ID. HTTP 202 means the service accepted the submission. If returned, inspect `newRequests` and `existingRequests`, including their recipient/item and `accessRequestIds`; the response is not proof of fulfillment. Read request status and match recipient, item, comment and timestamp, then follow its actual decision and fulfillment.

For a future date exercise, add `startDate` and `removeDate` to the item using future UTC values such as values you calculate for tomorrow. Do not reuse a fixed date from an old example. The selected item must support the feature and its date policy still applies.

## Decide or cancel

Use the approval owner's token for decisions. Read pending approvals, select the matching request/recipient, and use that object's approval `id` in the path.

| Action | Method and URL | Raw JSON body |
|---|---|---|
| Approve | `POST {{apiBase}}/access-request-approvals/v1/{{approvalId}}/approve` | `{"comment":"AR-055: Approved lab requirement"}` |
| Deny | `POST {{apiBase}}/access-request-approvals/v1/{{approvalId}}/reject` | `{"comment":"AR-055: Requirement not approved"}` |
| Cancel while eligible | `POST {{apiBase}}/access-requests/v1/cancel` | `{"accountActivityId":"{{activityId}}","comment":"AR-055: Cancel pending lab request"}` |

Cancellation's `accountActivityId` means the parent identity-request tracking ID. In the status response, use the matching record's `accessRequestId`, then verify it with **GET `{{apiBase}}/account-activities/v1/{{activityId}}`** before any cancel. The separate `accountActivityItemId` refers to an item inside the activity; do not put it into the cancellation body. Confirm recipient, submission time and item, plus `cancelable: true` while still awaiting approval. If the read does not resolve to the intended parent, investigate the mapping instead of trying IDs in a mutation. [Cancel schema](https://developer.sailpoint.com/docs/tools/sdk/python/access-requests/models/cancel-access-request/).

Use the original requester or an authorized administrator to cancel. The original requester is not automatically the recipient of an on-behalf request. A decided approval cannot demonstrate another decision; create a fresh request for each case. Cancellation does not remove already-provisioned access.

## Remove the Module 9 control

1. As Taylor in ISC, open **My Access > Access Profiles > AP-Remote-Worker > Revoke Access Profile**. Enter the current lab number and `control complete`, then **Submit**.
2. As Priya, open **Approvals > Access Requests > Requested**, inspect Taylor's matching Remove request, and approve it. Follow its removal activity as administrator.
3. Run [the native membership check](M02-CHECKS.md#inspect-direct-ad-membership) for Taylor against GG-VPN-USERS and GG-REMOTE-USERS. Both must be False. [Refresh imported AD data](M02-CHECKS.md#refresh-imported-ad-data) and verify the profile assignment is gone and the same account remains.
4. Recheck Taylor's request history and Priya's pending approvals. Resolve other diagnostic requests before another grant. Keep baseline and the disposable group absent for Taylor; retain the account and the 25-row private HR file.

This uses the established My Access removal route. The API's `REVOKE_ACCESS` caller rules differ: it supports an authorized administrator or the recipient's manager, not an ordinary self-revoke. AR-082 covers targeted API removal.

## Read-only investigation script

### Open the correct folder and run the fixture first

1. Download or clone this repository and locate the folder containing `tools`, `fixtures` and this file. Open **Windows PowerShell** and run `Set-Location -LiteralPath (Read-Host 'Full path to the course repository folder')`. Enter that folder path, not the `tools` subfolder.
2. Run `Test-Path .\tools\request_report.py` and `Test-Path .\fixtures\request-status-pages.json`. Both must return `True`. If either is `False`, correct the current folder before continuing.
3. Run `python --version`. If Python is unavailable, install Python 3 from [python.org](https://www.python.org/downloads/windows/) or use a workstation where it is already installed, then reopen PowerShell. The report uses Python's standard library; it needs no additional package installation.
4. Run the fixture below. It reads supplied sample data and needs no tenant token.

```powershell
$LabEvidenceFolder = Join-Path ([Environment]::GetFolderPath('MyDocuments')) ('AcmeLabEvidence-' + (Get-Date -Format 'yyyyMMdd-HHmmss'))
New-Item -ItemType Directory -Path $LabEvidenceFolder -ErrorAction Stop | Out-Null
$LabFixtureReport = Join-Path $LabEvidenceFolder 'fixture-report.json'
python .\tools\request_report.py --fixture .\fixtures\request-status-pages.json --output $LabFixtureReport
if ($LASTEXITCODE -ne 0) { throw 'The fixture report failed; inspect the error before continuing.' }
$LabRows = @(Get-Content -LiteralPath $LabFixtureReport -Raw | ConvertFrom-Json)
$LabRows.Count
```

**Check:** The count is `3`. Open the file at `$LabFixtureReport` and compare its three records with the fixture. Keep `$LabEvidenceFolder` for the live report; quote output paths when entering them literally, especially when they contain spaces.

The [request report script](tools/request_report.py) reads all pages for one recipient and writes the raw records to a private file. It does not approve, cancel or retry submissions.

```powershell
$LabApiBase = Read-Host 'Confirmed tenant API origin, without an operation path'
$LabRecipientId = Read-Host 'Verified ISC recipient identity ID'
$LabLiveReport = Join-Path $LabEvidenceFolder 'request-report.json'
python .\tools\request_report.py --base $LabApiBase --recipient $LabRecipientId --output $LabLiveReport
```

Enter a current token at the hidden prompt. Run `if ($LASTEXITCODE -ne 0) { throw 'Live report failed; inspect the error.' }` before opening `$LabLiveReport`. The report can contain identity information; keep it private. If you opened a new PowerShell session, repeat the folder/fixture setup to establish the variables first.

## Configuration changes

Use the current service-versioned configuration operation published in the [Access Requests API reference](https://developer.sailpoint.com/docs/tools/sdk/python/access-requests/methods/access-requests/). These paths are relative to your API origin; do not prepend `/v3` or `/v2026` to a service-versioned path.

1. Create **GET** `{{apiBase}}/access-request-config/v2` with your administrator token. Send and save the successful response privately as the before snapshot.
2. Compare the response with the current writable **AccessRequestConfig2** schema. Make a working copy of that complete configuration. Preserve all unrelated values, including nested request-on-behalf and entitlement settings.
3. Change only the field required by the lab, for example `reauthorizationEnabled` or `govGroupVisibilityEnabled`. JSON API names use camelCase; SDK property names may use snake_case.
4. Immediately before writing, GET again. If another administrator changed the configuration, rebuild the working copy from the new result rather than overwriting their change.
5. Create **PUT** to the same `/access-request-config/v2` path with the working copy as raw JSON. This operation **replaces** configuration; do not send a one-field partial body as if it were PATCH.
6. GET again and compare the changed field and every preserved setting. On cleanup, repeat the read/compare/update process to restore the lab’s changed field without reverting someone else’s later edits.

If a required field is absent from the current writable schema, stop that configuration subtest and record the gap. Do not inject an undocumented field into this replacement request. In particular, the end-date fallback announced in product news must be matched to a supported configuration operation before it is modified. [Current configuration model](https://developer.sailpoint.com/docs/tools/sdk/python/access-requests/models/access-request-config2/)

Approval timeout/reminder settings use the approval-service configuration or the current UI. Older configuration writes can replace more advanced approval settings. AR-088 practices this change control without sending an obsolete PUT. [Approval migration notice](https://developer.sailpoint.com/discuss/t/enhancement-approvals-expiration-governance-group-visibility-and-more/193947)


## Close one stuck pending request (AR-071)

1. Search `status:Pending AND "Access Request"`. Add **Tracking Number** using Column Chooser. Match the recipient, item and activity to your isolated stuck request; copy its Identity Request tracking ID. Never use the reviewer’s approval ID.
2. Confirm the request is genuinely stuck and record its target state and reason for closure. An ordinary pending approval should be decided or canceled through its normal path.
3. As an authorized administrator, send **POST** `{{apiBase}}/access-requests/v1/close` with this raw JSON, replacing the ID locally:

```json
{
  "accessRequestIds": ["YOUR-IDENTITY-REQUEST-TRACKING-ID"],
  "message": "AR-071: Close isolated stuck request after investigation",
  "executionStatus": "Terminated",
  "completionStatus": "Failure"
}
```

4. HTTP 202 is acceptance, not proof of completion. Search `name:"Close Identity Requests"` and inspect the started/completed audits, including IDs that finished in error. Reopen the original request and recheck native state.
5. Closure does not revoke access. It also fires the Provisioning Completed event trigger for closed requests, so inspect any lab subscription listening to that event before sending the operation.

[Close operation and eligibility](https://developer.sailpoint.com/docs/tools/sdk/python/access-requests/methods/access-requests/), [Close body schema](https://developer.sailpoint.com/docs/tools/sdk/python/access-requests/models/close-access-request/)

## Remove one account’s entitlement (AR-082)

Set recipientId to Sofia’s identity ID, itemId to VPN’s entitlement ID and nativeIdentity to her admin account’s actual source Account ID. POST `{{apiBase}}/access-requests/v1`:

```json
{
  "requestedFor": ["{{recipientId}}"],
  "requestType": "REVOKE_ACCESS",
  "requestedItems": [{
    "type": "ENTITLEMENT",
    "id": "{{itemId}}",
    "nativeIdentity": "{{nativeIdentity}}",
    "comment": "AR-082: Remove VPN from Sofia admin account only"
  }]
}
```

Complete any review and verify both accounts in AD. Send one entitlement removal per request. Do not reuse a grant body containing startDate.
