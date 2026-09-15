# AR-055 · Approve, remove, deny and cancel through the API

In this lab, you'll complete separate approval, removal, denial and cancellation cases with the correct caller and identifiers.

## Before you start

Complete [AR-054](../AR-054/README.md). Use Acme API Taylor, Priya and Admin with current tokens, plus the ISC sessions and AD workstation. Taylor starts without Remote Worker or a pending request. Keep the [identifier map](../AR-054/README.md#2-build-the-identifier-map-from-the-ar-053-record) and your [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Approve a fresh grant as Priya

1. Verify Taylor's VPN/Remote Users False and no pending grant. As Acme API Taylor, set `requestTag` to `AR-055 approve control`, then send the AR-053 Grant body once to **POST `{{apiBase}}/access-requests/v1`**. Record acceptance and the matching status record.
2. As Acme API Priya, read **GET `{{apiBase}}/access-request-approvals/v1/pending`** with `owner-id=me`, `limit=50`, `offset=0` and the Taylor filter from AR-054. Match owner, requestedFor, requestedObject, Grant type, comment and created time. Set `approvalId` to that pending object's `id` in Priya's environment.
3. Create **POST `{{apiBase}}/access-request-approvals/v1/{{approvalId}}/approve`**, Bearer `{{token}}`, **Body > raw > JSON**:

```json
{"comment":"AR-055 approved lab requirement"}
```

4. Send once. Record the response; HTTP 202 means the decision was accepted for processing. Read the status as Taylor and the matching activity as Admin. Verify both native memberships True before calling the case successful. Save `AR-055-01.png`.

**Check:** Priya's own token decided Priya's current approval. The approved request reached Taylor's existing AD account.

### 2. Request removal as administrator and approve it as Priya

1. Select Acme API Admin and verify `recipientId` and `itemId` still identify Taylor and Remote Worker. Create **POST `{{apiBase}}/access-requests/v1`**, Bearer `{{token}}`, raw JSON:

```json
{
  "requestedFor": ["{{recipientId}}"],
  "requestType": "REVOKE_ACCESS",
  "requestedItems": [
    {
      "type": "ACCESS_PROFILE",
      "id": "{{itemId}}",
      "comment": "AR-055 remove approved control"
    }
  ]
}
```

2. Send once and record the removal separately from the Grant. There is one recipient and one requested profile, with no start/remove date. Taylor has one account, so this exercise does not need multi-account selection.
3. Read Priya's pending queue with Acme API Priya. Select the new **REVOKE_ACCESS** approval for Taylor/Remote Worker and this removal comment. Replace the old `approvalId` with its new pending ID.
4. Send the approve operation from Section 1 with comment `AR-055 removal approved`. Read the removal status/activity, verify VPN False and Remote Users False, refresh imported data and confirm the profile assignment is gone. Save `AR-055-02.png`.

**Check:** This API removal uses the documented ORG_ADMIN route. The API does not support ordinary self-revocation even though Taylor can use the My Access UI removal route. Keep the baseline account intact.

### 3. Reject a separate grant

1. As Acme API Taylor, restore the **GRANT_ACCESS** body from AR-053 and set `requestTag` to `AR-055 deny control`. Verify clean membership first, then submit once. Do not reuse the administrator removal body.
2. As Acme API Priya, read the queue and identify this new Grant. Set `approvalId` from its pending `id`; the previous approval is already decided.
3. Send **POST `{{apiBase}}/access-request-approvals/v1/{{approvalId}}/reject`**, Bearer `{{token}}`, raw JSON:

```json
{"comment":"AR-055 requirement not approved"}
```

4. Verify acceptance, then the rejected status and removal of that work item from Priya's queue. Confirm neither native group was added. Save `AR-055-03.png`.

**Check:** Rejection ended this grant before fulfillment. It did not reverse an earlier approved grant; Section 2 already removed that access.

### 4. Cancel a fresh request before approval

1. As Acme API Taylor, submit another Grant with `requestTag` = `AR-055 cancel control`. Leave it awaiting Priya. Read Taylor's status and match the new comment, time, recipient and item.
2. Confirm the matched record has **cancelable: true** and has not passed approval. Record `accessRequestId` as the candidate parent, separately from `accountActivityItemId` and any approval IDs.
3. In Acme API Admin, set `activityId` from that **accessRequestId** and send **GET `{{apiBase}}/account-activities/v1/{{activityId}}`**. Confirm the intended parent, Taylor and the AR-055 cancellation case. If this read does not match, stop the cancellation call and resolve the mapping using AR-054.
4. Still as administrator, send **POST `{{apiBase}}/access-requests/v1/cancel`**, Bearer `{{token}}`, raw JSON:

```json
{
  "accountActivityId": "{{activityId}}",
  "comment": "AR-055 cancel pending lab request"
}
```

5. Record acceptance, then reread Taylor's history and Priya's queue. Inspect the final state and `cancelledRequestDetails`; the exact state label may differ from the UI wording. Verify no pending review remains for this request and both native memberships are False. Save `AR-055-04.png`.
6. If approval advanced before cancellation, record the returned error/current state rather than retrying blindly. If access was provisioned, remove it using Section 2 and mark this cancellation case Not completed. Repeat the cancellation case only with a new clean request and no reviewer action.

**Check:** Cancellation used the verified parent identity-request tracking ID while the request was eligible. An authorized administrator can cancel Taylor's request; the original requester is also an allowed caller. Cancellation is not a removal operation.

## Check the result

Separate records prove an API-approved grant, API-requested removal, rejected grant and eligible cancellation. Each case has the correct caller, new identifiers, final queue/status checks and native membership evidence.

## Finish

Leave Taylor without Remote Worker or pending controls. Keep the account, restored course configuration and separate records for all four cases. Clear stale `approvalId` and `activityId` values after recording them so the next case cannot accidentally reuse them.

### Screenshots to capture

Capture these beside the matching steps. Hide token values and secrets. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-055-01.png | Priya API approval and native grant |
| AR-055-02.png | Administrator API removal, Priya decision and native absence |
| AR-055-03.png | New rejection and unchanged membership |
| AR-055-04.png | Verified cancellation parent, final state and empty matching queue |

[Previous: AR-054](../AR-054/README.md) · [Course outline](../../README.md) · [Next: AR-056](../AR-056/README.md)
