# API workbench

Use a REST client such as Postman. The examples below use the published v3 request operations checked on 8 September 2026. Configuration updates use the current configuration schema, not an old v3 configuration PUT. Record the operation version you actually use. [API reference](https://developer.sailpoint.com/redoc/sailpoint-api-v3-light.html), [Versioning](https://developer.sailpoint.com/docs/api/api-versioning-strategy/)

## Prepare a private client environment

1. In your ISC user preferences, create a Personal Access Token with only the permissions required for the exercise. Record the owning identity. Use a separate reviewer-owned token when testing reviewer authority.
2. In your REST client, create a private environment with `apiBase` equal to your tenant's API origin, for example `https://YOUR-TENANT.api.identitynow.com`. Do not use the UI hostname as the API origin.
3. Add local secret variables `clientId` and `clientSecret`. Create **POST** `{{apiBase}}/oauth/token`; body type **x-www-form-urlencoded** with `grant_type=client_credentials`, `client_id={{clientId}}`, `client_secret={{clientSecret}}`.
4. Send once. Store the returned `access_token` as a local secret `token`. On the remaining requests, choose **Bearer Token** and use `{{token}}`. Do not publish the token response or an exported environment containing secrets.
5. Add non-secret local variables `recipientId`, `itemId`, `approvalId` and `activityId` from your own lab objects. Get identity and item IDs from a read-only object response, not by copying a group DN into an ID field.

## Read before submitting

| Purpose | Method and URL |
|---|---|
| Read one identity | `GET {{apiBase}}/v3/identities/{{recipientId}}` |
| Read a profile | `GET {{apiBase}}/v3/access-profiles/{{itemId}}` |
| List this recipient's request history | `GET {{apiBase}}/v3/access-request-status?requested-for={{recipientId}}&limit=50&offset=0` |
| Read my pending approvals | `GET {{apiBase}}/v3/access-request-approvals/pending?owner-id=me&limit=50&offset=0` |
| Read an account activity | `GET {{apiBase}}/v3/account-activities/{{activityId}}` |

In the client, enter query parameters in the Params table so values are URL-encoded. Check the returned recipient/item before acting. List endpoints require pagination: advance offset by the requested limit until the returned page is shorter than the limit. Do not assume the first result is the request you just submitted.

## Submit one profile request

Create **POST** `{{apiBase}}/v3/access-requests`, choose raw JSON, and send the body below only after confirming this recipient does not already have the assignment or a pending duplicate.

```json
{
  "requestedFor": ["{{recipientId}}"],
  "requestType": "GRANT_ACCESS",
  "requestedItems": [
    {
      "type": "ACCESS_PROFILE",
      "id": "{{itemId}}",
      "comment": "AR-053: Remote Worker API control"
    }
  ]
}
```

Use `ENTITLEMENT` or `ROLE` only with the matching type of item ID. A successful HTTP response means the service accepted the submission. Read request status and match recipient, item, comment and timestamp, then follow its actual decision and fulfillment.

For a future date exercise, add `startDate` and `removeDate` to the item using future UTC values such as values you calculate for tomorrow. Do not reuse a fixed date from an old example. The selected item must support the feature and its date policy still applies.

## Decide or cancel

Use the approval owner's token for decisions. Read pending approvals, select the matching request/recipient, and use that object's approval `id` in the path.

| Action | Method and URL | Raw JSON body |
|---|---|---|
| Approve | `POST {{apiBase}}/v3/access-request-approvals/{{approvalId}}/approve` | `{"comment":"AR-055: Approved lab requirement"}` |
| Deny | `POST {{apiBase}}/v3/access-request-approvals/{{approvalId}}/reject` | `{"comment":"AR-055: Requirement not approved"}` |
| Cancel while eligible | `POST {{apiBase}}/v3/access-requests/cancel` | `{"accountActivityId":"{{activityId}}","comment":"AR-055: Cancel pending lab request"}` |

Cancellation uses the account activity identifier, not the approval ID. Read the request's current state and cancellation eligibility before sending. A decided approval cannot be used repeatedly to demonstrate different decisions; create a fresh control for each case.

## Read-only investigation script

The [request report script](tools/request_report.py) reads all pages for one recipient and writes the raw records to a private file. It does not approve, cancel or retry submissions.

```powershell
python tools/request_report.py --base https://YOUR-TENANT.api.identitynow.com --recipient YOUR-IDENTITY-ID --output C:\LabEvidence\request-report.json
```

Enter a current token at the hidden prompt. Create the output folder first. The report can contain identity information; keep it private. Use `--fixture fixtures/request-status-pages.json` to practice pagination without a tenant.

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

Set recipientId to Sofia’s identity ID, itemId to VPN’s entitlement ID and nativeIdentity to her admin account’s actual source Account ID. POST `{{apiBase}}/v3/access-requests`:

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
