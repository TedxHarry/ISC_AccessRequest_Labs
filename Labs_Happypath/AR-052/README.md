# AR-052 · Authenticate and verify the API caller

In this lab, you'll prepare separate API sessions for Taylor, Priya and Acme Admin, then verify which reads each caller can perform.

## Before you start

Complete [AR-051](../AR-051/README.md). Taylor (`acme.e025`) retains the account created in AR-047, with no Remote Worker assignment or pending request. Use the established Taylor, Priya (`acme.e002`) and administrator ISC sessions, Postman Desktop and your [journal](EVIDENCE.md). You will create the API credentials here; they are not a prerequisite.

## Follow the steps

### 1. Record the people and objects before creating tokens

1. As administrator, open **Admin > Identity Management > Identities**. Find Taylor, Priya and Henry (`acme.e018`) separately. Use [the identity-ID lookup](../../LAB-VALUES.md#find-isc-source-and-identity-ids) and record each username, employee number and ISC identity ID. Henry's ID will be used for a read-only permission comparison.
2. Open **Admin > Access Model > Access Profiles > AP-Remote-Worker**. Record its ID, source, VPN/Remote Users entitlements and Priya as grant/removal reviewer. Verify it is enabled/requestable with no required form or end date, as restored in the earlier labs. Do not remove Production Support's form/date policy.
3. Verify Taylor can see Remote Worker in **Request Center > Access Items > Access Profiles** without submitting. In the administrator identity view, confirm Taylor's single AD account and no Remote Worker assignment. Run [native membership checks](../../M02-CHECKS.md#inspect-direct-ad-membership): VPN False and Remote Users False.
4. Record the administrator's identity ID and existing ORG_ADMIN authority. Taylor and Priya remain ordinary users. Save `AR-052-01.png` with the object/caller record and no credentials.

**Check:** You have verified IDs and existing sessions. None of these IDs is a token, approval ID or native AD GUID.

### 2. Create and test three separate API sessions

1. Follow [Prepare a private client environment](../../API-WORKBENCH.md#prepare-a-private-client-environment) once as Acme Admin, once as Taylor and once as Priya. Create the named environments **Acme API Admin**, **Acme API Taylor** and **Acme API Priya** with each person's own PAT and local vault values. On a repeat run, reuse these environments and usable PATs; renew only expired bearer tokens.
2. In each environment, set `recipientId` to Taylor's ISC identity ID and `itemId` to Remote Worker's profile ID. Also add `callerId` with the current token owner's identity ID and `henryId` with Henry's ID. Keep `approvalId` and `activityId` empty; no new approval exists yet.
3. If the workbench setup already obtained a current bearer token, use it; do not repeat the exchange immediately. Otherwise, send each environment's **POST `{{apiBase}}/oauth/token`** exchange using its own Client ID/Secret. Check HTTP 200, store its bearer token locally and record expiry. Do not copy the administrator token into Taylor's or Priya's environment.
4. Select **Acme API Taylor**. Create **GET `{{apiBase}}/access-request-status/v1`**, choose **Authorization > Bearer Token > `{{token}}`**, and add Params `requested-for=me`, `limit=50`, `offset=0`. Send. Expect HTTP 200 with a JSON array; it may contain Taylor's earlier course history. If present, verify `requestedFor.id` matches Taylor. The signed-in PAT owner and its recorded Client ID establish the caller even if the array is empty.
5. Select **Acme API Priya** and send **GET `{{apiBase}}/access-request-approvals/v1/pending`** with Params `owner-id=me`, `limit=50`, `offset=0`. Expect an array; empty is valid when Priya has no pending work. Inspect any returned `owner.id` without acting on unrelated approvals.

**Check:** The requester and reviewer each have a working read in their own context. Save `AR-052-02.png` showing caller labels, endpoint and response status, with tokens hidden.

### 3. Read the course objects as administrator

1. Select **Acme API Admin**. Send **GET `{{apiBase}}/identities/v1/{{recipientId}}`**. Verify Taylor's returned ID and identity attributes against the administrator UI. This object read checks the recipient; it does not change the token owner.
2. Send **GET `{{apiBase}}/access-profiles/v1/{{itemId}}`**. Verify the ID, name and source, then compare the returned entitlement references and request settings with the saved profile. If details are referenced rather than expanded, inspect that same profile in the UI rather than guessing an entitlement from its label.
3. Send **GET `{{apiBase}}/access-request-config/v2`** as administrator. Record the current request-on-behalf and entitlement settings privately. This lab makes no configuration update.
4. Verify all paths start immediately after the API origin. For example, use `/identities/v1/ID`, not `/v3/identities/v1/ID`. The [current API reference](https://developer.sailpoint.com/redoc/sailpoint-api.html) places the version inside each service path.

**Check:** The admin reads identify the intended objects. Save `AR-052-03.png` with returned IDs/names and read-only configuration evidence.

### 4. Compare a missing token with insufficient authority

1. Duplicate Taylor's successful own-history GET and name it **AR-052 missing token**. Choose **Authorization > No Auth** and verify there is no manually added Authorization header. Send once. Record the actual response; the documented missing-token response is 401. Restore Bearer Token and verify the same own-history read succeeds.
2. With the Taylor environment still selected, use a second GET to `/access-request-status/v1` with Params `requested-for={{henryId}}`, `limit=50`, `offset=0`. This is deliberately a read of another identity's history. The operation requires ORG_ADMIN for other users; record the authorization error without changing Taylor's user level.
3. Send that same Henry-filtered read as Acme API Admin. Expect an authorized array, which can be empty if there is no matching history. Record the caller, URL, HTTP status and error code for both comparisons. If Taylor unexpectedly receives data, inspect his actual authority and token provenance before declaring the permission test passed.
4. Save `AR-052-04.png`. Leave the normal Taylor history request set back to `requested-for=me`, and ensure Acme API Taylor is selected before the grant lab.

**Check:** You have separate evidence for missing authentication and caller authority. A 403 does not mean the credentials are invalid, and an empty authorized array does not prove an error.

## Check the result

All three caller environments have successful reads. Admin object IDs match the UI, and the negative reads record actual authentication/authorization behaviour without elevating Taylor or Priya.

## Finish

Keep the private caller environments, verified IDs and expiry records. Leave Taylor without new access and leave tenant configuration unchanged. Keep secrets in the local vault; screenshots and shared exports contain none.

### Screenshots to capture

Capture these beside the matching steps. Hide token values and secrets. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-052-01.png | Verified actors, recipient/profile IDs and initial membership |
| AR-052-02.png | Own-history and own-approval reads with caller labels |
| AR-052-03.png | Admin identity/profile/configuration reads |
| AR-052-04.png | Missing-token and other-user-history comparisons |

[Previous: AR-051](../AR-051/README.md) · [Course outline](../../README.md) · [Next: AR-053](../AR-053/README.md)
