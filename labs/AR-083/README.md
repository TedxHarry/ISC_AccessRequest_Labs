# AR-083 · Request and remove access for a machine identity

In this lab, you'll request one entitlement for a governed machine account, trace its machine recipient and remove that exact assignment.

## Before you start

Complete [AR-049](../AR-049/README.md), [AR-052](../AR-052/README.md) and the account-selection controls in [AR-045](../AR-045/README.md). Your tenant needs Machine Identity Security and an existing isolated machine identity with an owned AD user/service account on the course AD source. Use its authorized owner/requester, Priya, Acme Admin and Acme API Admin. Agent Identity Security is not a substitute for the documented machine-request prerequisites.

Record the existing machine's details-page link in your [journal](EVIDENCE.md). If no governed test machine account exists, mark this track Not run; do not reclassify a human account to manufacture it. Creating and governing the machine identity is a prerequisite to this request exercise.

## Follow the steps

### 1. Verify the recipient, account and allowed requester

1. Open the existing machine identity's details. Record its machine UUID, owner identity, AD source ID, linked account ID/nativeIdentity and every machine/agent sharing that account. Confirm it is the isolated test account and currently lacks GG-ACME-FAULT-049. Preserve a before-record of other memberships and enabled state.
2. As administrator, inspect **Admin > Global > System Settings > Feature Settings > Access Requests > Enable Machine Identity Access Requests**. Save its original value and enable if needed. Read the complete `/access-request-config/v2` with Acme API Admin. Record `machineIdentityAccessRequestEnabled` and the machine request-on-behalf settings; do not broaden them merely to use an unrelated requester.
3. Use Acme Admin as requester for this walkthrough so the requester and Priya reviewer are different people. Confirm that account is allowed by the current machine-request configuration. Open GG-ACME-FAULT-049, save original owner/request settings, set primary owner Priya, enable requests with Primary Owner grant/removal review and a user reason. Keep forms/dates off and course developer subscriptions disabled.
4. Save `AR-083-01.png` with sanitized machine/account relationships and configuration. If the machine is on another source, this AD exercise is not applicable; do not request an AD entitlement for a machine without an AD account.

**Check:** A machine UUID, human owner ID and AD account identifier refer to different objects. [Machine requests](https://documentation.sailpoint.com/saas/help/requests/requests_for_machine_identities.html)

### 2. Submit and review the machine grant

1. In the authorized requester's **Request Center**, select **Request for Machine Identities**. Read and confirm the shared-account impact, then choose only the recorded test machine.
2. Open **Access Items > Entitlements**, select GG-ACME-FAULT-049 from the course AD source and select the exact recorded account. Enter `AR-083 machine grant`, Save, Review Request and Submit Request. If the item is absent, verify that the machine has an account on that source before changing visibility or permissions.
3. Record the request ID and submission time. Priya opens the matching Grant in **Approvals > Access Requests > Requested**, verifies the machine recipient/account and approves with `AR-083 isolated machine access`.
4. Follow [Account Activity](../../LAB-DESK.md#find-the-account-activity), using the actual machine account/native identity rather than Taylor's username. On the AD workstation run `Get-ADUser -Identity 'YOUR-TEST-ACCOUNT-SAMACCOUNTNAME' -Properties memberOf,Enabled`; compare memberOf with `(Get-ADGroup GG-ACME-FAULT-049).DistinguishedName`. Require membership True and unchanged enabled state. Save `AR-083-02.png`.

**Check:** The changed native account may serve several identities; the request recipient alone does not describe the full impact. [Machine selection in Request Center](https://documentation.sailpoint.com/saas/user-help/requests/request_center.html)

### 3. Read machine status and submit an account-specific removal

1. In Acme API Admin, GET `{{apiBase}}/access-request-status/v1` with Params `requested-for` = the machine UUID, `limit` = 50, `offset` = 0. Use the workbench pagination rules if needed. Match the request ID/item/time. Record `identityType: MACHINE` and `requestedFor.type: MACHINE_IDENTITY`, plus the machine ID.
2. Set Postman variables `machineId`, `entitlementId` and `machineNativeIdentity` from the verified records. POST `{{apiBase}}/access-requests/v1` with the following raw JSON. Do not add flat requestedFor/requestedItems or accountSelection to this machine revoke.

```json
{
  "requestType": "REVOKE_ACCESS",
  "requestedForWithRequestedItems": [{
    "identityId": "{{machineId}}",
    "identityType": "MACHINE",
    "requestedItems": [{
      "type": "ENTITLEMENT",
      "id": "{{entitlementId}}",
      "comment": "AR-083 remove isolated machine grant",
      "nativeIdentity": "{{machineNativeIdentity}}"
    }]
  }]
}
```

3. Priya inspects and approves the matching Remove for that machine/account. Track the operation and repeat the native membership check; require False. Re-read request status and record the removal separately from the original grant. Save `AR-083-03.png`.
4. If the response is 403, check the administrator caller, token scope, license and configuration rather than changing the body to a human recipient. If an account mismatch occurs, inspect the original nativeIdentity before another submission.

**Check:** Machine revoke uses the nested machine request shape; human revoke in AR-082 uses the flat shape. [Current machine API contract](https://github.com/sailpoint-oss/api-specs/blob/main/dereferenced/deref-sailpoint-api.json)

### 4. Restore the request controls

1. Restore the original machine-request toggle and disposable entitlement owner/review settings. Mark the disposable entitlement non-requestable again. Verify the actual GET configuration preserves unrelated request-on-behalf settings.
2. Verify the machine account, ownership and shared relationships remain intact, with only the test membership removed and no pending grant/removal. Save `AR-083-04.png`.

**Check:** No human identity or machine relationship was changed to bypass an authorization requirement.

## Check the result

The evidence connects requester, machine UUID, native account, machine status types and a reviewed account-specific removal. Shared-account impact and final state are documented.

## Engineering practice

Compare a human and machine status record without mutating either. Explain the different recipient type labels and why substituting the human owner ID for the machine UUID would test a different request.

## Finish

Keep the governed machine/account unchanged apart from the completed test grant/removal. Restore global and entitlement settings and preserve the sanitized ID map.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-083-01.png | Machine, account, owners and shared relationships |
| AR-083-02.png | Machine selection, review and native grant |
| AR-083-03.png | Machine status and nested removal body/result |
| AR-083-04.png | Restored controls and retained account |

[Previous: AR-082](../AR-082/README.md) · [Course outline](../../README.md) · [Next: AR-084](../AR-084/README.md)
