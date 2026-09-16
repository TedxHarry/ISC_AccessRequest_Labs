# AR-082 · Test API dates and account-specific removal

In this lab, you'll compare omitted, excessive and valid API dates, then revoke VPN from only Sofia's second account.

## Before you start

Complete [AR-055](../AR-055/README.md) and [AR-045](../AR-045/README.md). Use Acme API Taylor, Acme API Admin, Taylor, Sofia, Priya and native AD checks. Taylor must have no Remote Worker access or pending request; Sofia must have no test VPN assignment on either account. Date controls must be available. Open your [journal](EVIDENCE.md).

## Follow the steps

### 1. Save the policy and prepare UTC values

1. As administrator, open **Admin > Access Model > Access Profiles > AP-Remote-Worker > Edit > Access Requests**. Save existing date settings and verify direct Primary Owner/Priya grant/removal, no form and the two original groups. Require End Date and set maximum duration to **1 day**. Save/reopen.
2. Populate Taylor's recipient ID and Remote Worker's profile ID in Acme API Taylor using the [API workbench](../../API-WORKBENCH.md#populate-the-ids-before-your-first-api-read). Keep credentials private.
3. Run the calculation below locally and copy the three returned UTC strings into Postman environment variables named `startDate`, `validEnd` and `invalidEnd`. Recalculate if the start has passed before submission. Save `AR-082-01.png` with the policy and non-secret variables.

```powershell
$labStart = [DateTimeOffset]::UtcNow.AddHours(2)
[pscustomobject]@{
    startDate = $labStart.ToString('o')
    validEnd = $labStart.AddHours(6).ToString('o')
    invalidEnd = $labStart.AddDays(2).ToString('o')
}
```

**Check:** The valid interval is below one day and the excessive interval is above it. Record UI time zones separately from these API values.

### 2. Compare three date cases one at a time

1. As Acme API Taylor, POST `{{apiBase}}/access-requests/v1` with the workbench's flat GRANT_ACCESS profile body, comment `AR-082 omitted end`. Omit both date properties. Inspect the response and matching status by recipient/item/comment; 202 alone is not the result.
2. Inspect the actual effective end date in the approval/request and **Search > Events** for its Access Request Started audit. The documented maximum-duration fallback should add an end date. Priya approves only after confirming a bounded assignment; verify native VPN/Remote Users True. Record submission/effective dates and the observed fallback, then use [Remote Worker removal](../../LAB-DESK.md#remove-a-remote-worker-operations-grant), reason `AR-082 omitted-date case complete`, to return both memberships and assignment to absent.
3. Send the body below with `removeDate` temporarily set to `{{invalidEnd}}` and comment `AR-082 excessive end`. Record the immediate response and eventual status/error. Require no grant; if unexpectedly accepted into review, Priya denies it and you record the discrepancy. Do not approve an invalid-date control.
4. After resolving that case, send the body with `{{validEnd}}` and the shown comment. Inspect the effective start/end in the actual request. Priya approves; before the future start, verify the assignment is scheduled and native access remains absent. Save `AR-082-02.png` with all three results.

```json
{
  "requestedFor": ["{{recipientId}}"],
  "requestType": "GRANT_ACCESS",
  "requestedItems": [{
    "type": "ACCESS_PROFILE",
    "id": "{{itemId}}",
    "comment": "AR-082 valid future dates",
    "startDate": "{{startDate}}",
    "removeDate": "{{validEnd}}"
  }]
}
```

5. Remove the future assignment through Taylor's My Access profile removal, completing Priya's removal review. Verify no scheduled assignment or pending operation remains. If the start passed, verify and remove any granted memberships too. Do not use cancellation after approval has passed or claim this early removal proves natural expiry.
6. Record the required-date-without-maximum fallback comparison as Deferred unless the current writable configuration schema exposes `fallbackAccessDurationInDays` with a supported update operation. The checked `/access-request-config/v2` schema does not expose it. Do not insert a field from a news post into a replacement PUT. Restore Remote Worker's original date settings now.

**Check:** Input, server-applied dates, validation and target state are separate evidence. [Date fallback announcement](https://developer.sailpoint.com/discuss/t/enhancement-mandatory-end-date-and-max-duration-on-access-requests/192669)

### 3. Grant two account-specific VPN assignments

1. Verify both Sofia accounts lack VPN. Perform only [AR-045 Sections 2 and 3](../AR-045/README.md#2-grant-vpn-to-the-standard-account): request/approve VPN first for `acme.e009`, then for `acme.e009.admin`. Use reasons `AR-082 standard VPN` and `AR-082 second VPN`.
2. Verify both native VPN memberships True and two distinct account assignments. Preserve baseline on standard only. Save each grant ID and nativeIdentity from the actual source account; use the Account ID attribute, not a display name.
3. In Acme API Admin, set `recipientId` to Sofia's identity ID, `itemId` to VPN's entitlement ID and `nativeIdentity` to the second account's exact identifier. Save `AR-082-03.png` with sanitized values.

**Check:** Both accounts have independent grants before testing selective removal.

### 4. Revoke only the second account and clean up

1. Using Acme API Admin, POST `{{apiBase}}/access-requests/v1` with the body below. The administrator caller is intentional; ordinary API self-revocation is not this test. Include no startDate or removeDate for immediate removal.

```json
{
  "requestedFor": ["{{recipientId}}"],
  "requestType": "REVOKE_ACCESS",
  "requestedItems": [{
    "type": "ENTITLEMENT",
    "id": "{{itemId}}",
    "comment": "AR-082 remove second account VPN only",
    "nativeIdentity": "{{nativeIdentity}}"
  }]
}
```

2. Priya verifies the second account on the matching Remove and approves. Follow the operation. Require second VPN False, standard VPN True, with original baseline states unchanged. Save `AR-082-04.png`.
3. Sofia removes the remaining standard VPN assignment through My Access as in AR-045 Section 5; Priya approves. Verify both VPN False, Taylor clean and no pending/scheduled date case. Save `AR-082-05.png` with restored date settings.

**Check:** The target account is proved by its identifier, operation and native result. [Current request schema](https://github.com/sailpoint-oss/api-specs/blob/main/dereferenced/deref-sailpoint-api.json)

## Check the result

Three date cases have observed outcomes, and the targeted API revoke changes only the intended account before final cleanup. The unsupported fallback-field subtest is explicitly deferred.

## Engineering practice

Compare the submitted removeDate, effective assignment date and Access Request Started audit for the omitted-date case. Explain why copying only the POST body into an incident report would miss the server-added end date.

## Finish

Restore Remote Worker dates and remove every diagnostic assignment, including scheduled ones. Keep all original accounts and baseline assignments.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-082-01.png | Date policy and future UTC values |
| AR-082-02.png | Omitted, excessive and valid date evidence |
| AR-082-03.png | Two VPN assignments and exact native identifier |
| AR-082-04.png | Selected-account API revoke and both results |
| AR-082-05.png | Final cleanup and restored date policy |

[Previous: AR-081](../AR-081/README.md) · [Course outline](../../README.md) · [Next: AR-083](../AR-083/README.md)
