# AR-053 · Submit an API request and verify fulfillment

In this lab, you'll submit Remote Worker as Taylor through the API, let Priya approve in ISC, and verify the two AD memberships before removing them.

## Before you start

Complete [AR-052](../AR-052/README.md). Use Acme API Taylor for submission/history and Acme API Admin for detailed activity reads, plus Priya's ISC session and the AD workstation. Taylor starts without Remote Worker or a pending duplicate. Open your [journal](EVIDENCE.md).

## Follow the steps

### 1. Check the recipient and current access

1. Select **Acme API Admin** and repeat the verified identity/profile GETs from AR-052. Confirm `recipientId` is Taylor and `itemId` is AP-Remote-Worker. Confirm the saved profile still requires Priya for grant/removal and has no form/date requirement.
2. Inspect Taylor's **Accounts** and **Access > Access Profiles** in ISC. Run the native checks for VPN and Remote Users; both must be False. If an earlier request is still executing, resolve it before starting another control.
3. Select **Acme API Taylor**. Send **GET `{{apiBase}}/access-request-status/v1`** with Params `requested-for={{recipientId}}`, `limit=50`, `offset=0`, `sorters=created,accountActivityItemId`. Read all pages using [the workbench](../../API-WORKBENCH.md#read-before-submitting) if needed. Confirm no pending Remote Worker request for this account. History alone is not an inventory of current assignments.
4. Set `requestTag` to `AR-053 Taylor Remote Worker control` and record the current time/time zone. On a repeat, append your run date/time to this reason. A comment helps you find a request; it does not prevent duplicates.

**Check:** Your next POST will target Taylor's existing account and the intended profile.

### 2. Submit once as Taylor

1. Keep **Acme API Taylor** selected. Create **POST `{{apiBase}}/access-requests/v1`**, set **Authorization > Bearer Token > `{{token}}`**, and choose **Body > raw > JSON**. Paste:

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

2. Check both variables resolve to the verified IDs and `Content-Type` is `application/json`. Leave start/remove dates out for this immediate request. Send once.
3. Record the HTTP status, submission time and sanitized response. HTTP 202 is acceptance. If `newRequests` or `existingRequests` is returned, inspect the recipient, requested item and `accessRequestIds` within each entry. Save `AR-053-01.png`.
4. If the response is empty, delayed or lost, use the status read in the next section before deciding whether another submission is needed. Do not send another POST merely because the response did not show a fulfillment result.

**Check:** The submission has one recorded attempt. Approval and provisioning are still separate observations.

### 3. Locate the request and complete Priya's review

1. Repeat Taylor's status GET. Match `requestedFor.id`, profile name/type, `requesterComment.comment`, created time and any returned tracking IDs. Record `id`, `accessRequestId`, `accountActivityItemId`, `approvalIds`, `state` and `cancelable` as separately labelled fields. Do not assume every field appears before processing has progressed.
2. In Priya's ISC session, open **Approvals > Access Requests > Requested**, open the matching Taylor Grant and verify Remote Worker and the AR-053 reason. Save the pending review/status comparison as `AR-053-02.png`.
3. Approve with comment `AR-053 UI review approved` and confirm. Repeat Taylor's status GET after processing; inspect approval details, provisioning details and errors rather than checking only the top-level state.
4. In Acme API Admin, set `activityId` from the matched status record's `accessRequestId`. Send **GET `{{apiBase}}/account-activities/v1/{{activityId}}`**. Verify its target, creation time and item details match this request. `accountActivityItemId` is a child item identifier, not the value to use for this parent read.
5. If that read fails or identifies a different activity, keep the returned fields and use [the UI activity lookup](../../LAB-DESK.md#find-the-account-activity) with Taylor, the exact source and submission time. Record the verified parent ID from the matching activity. Do not try an unverified ID in a cancellation or decision call.

**Check:** You can connect the submission, actual reviewer decision and the parent activity without treating every ID as interchangeable.

### 4. Verify AD and remove the control

1. Open the matching AD operation in Account Activity. Record its native account identity, source and group changes. Run [native checks](../../M02-CHECKS.md#inspect-direct-ad-membership) on `acme.e025`: GG-VPN-USERS True and GG-REMOTE-USERS True. Confirm Taylor's original DN/GUID remains. Save `AR-053-03.png`.
2. If AD is correct but ISC's account view is behind, [refresh imported data](../../M02-CHECKS.md#refresh-imported-ad-data) and record the later observation. If the operation failed or membership is missing, use the AR-046 stage checks before calling the request successful.
3. As Taylor, open **My Access > Access Profiles > AP-Remote-Worker > Revoke Access Profile**, enter `AR-053 control complete`, and **Submit**. As Priya, inspect and approve the matching Remove request under **Approvals > Access Requests > Requested**.
4. Follow the removal activity, verify both native memberships False, refresh imported data and confirm the profile assignment is gone. Save `AR-053-04.png`. Retain the account and all labelled request/operation IDs.

**Check:** Acceptance, review, target grant and removal each have their own evidence.

## Check the result

The API submission is traceable to Priya's decision and the actual group additions. Cleanup removes the requested profile and both groups while preserving Taylor's account.

## Finish

Leave Taylor without Remote Worker, VPN or Remote Users and without a pending diagnostic request. Keep the sanitized submission and separate parent/item/approval IDs for AR-054. Restore Acme API Taylor for the next request.

### Screenshots to capture

Capture these beside the matching steps. Hide token values and secrets. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-053-01.png | One POST body and acceptance/tracking response |
| AR-053-02.png | Matching status fields and Priya pending review |
| AR-053-03.png | Parent activity, native grant and retained account |
| AR-053-04.png | Removal and final native/imported absence |

[Previous: AR-052](../AR-052/README.md) · [Course outline](../../README.md) · [Next: AR-054](../AR-054/README.md)
