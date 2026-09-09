# Subscriber workbench

AR-064–069 use a small synchronous subscriber whose responses you control. It binds only to localhost and requires Basic authentication. A controlled HTTPS reverse proxy or existing lab tunnel must forward its three paths to this service. Do not expose a raw HTTP endpoint or place credentials in a URL.

## Prepare the isolated access item

1. Create `AP-Acme-Subscriber-Test`, owner Priya, containing only the disposable `GG-ACME-FAULT-049` entitlement from AR-049. Use the profile procedure in the lab desk.
2. Require primary-owner review, enable and apply the profile. Keep the entitlement itself non-requestable.
3. Record the profile ID and use Taylor as recipient through an authorized request-for-others session. Capture the original request-on-behalf setting and restore it when the subscriber module ends.

## Start the local service

1. Create a private folder outside the repository and a file named `subscriber-mode.json` with the following body. Replace the example approver username and reviewer fields with real lab values.

```json
{
  "submitted": "approve",
  "approver": "acme.e002",
  "dynamic": "reviewer",
  "reviewer": {
    "id": "YOUR-EVELYN-IDENTITY-ID",
    "name": "Acme Lab - Evelyn Harris",
    "type": "IDENTITY"
  }
}
```

2. From the repository folder, run:

```powershell
python tools/lab_subscriber.py --mode-file C:\LabEvidence\subscriber-mode.json
```

3. At its prompts enter a dedicated Basic authentication username and private password. The password is hidden. Keep the terminal open.
4. In your REST client, send **POST** `http://127.0.0.1:8787/submitted` using Basic authentication with those values, Content-Type application/json, and the synthetic body below. These local synthetic values are not tenant object IDs.

```json
{
  "accessRequestId": "synthetic-local-test",
  "requestedFor": {"id": "synthetic-recipient", "type": "IDENTITY"},
  "requestedItems": [
    {"id": "YOUR-ISOLATED-PROFILE-ID", "type": "ACCESS_PROFILE", "operation": "Add"}
  ]
}
```

5. Verify HTTP 200 and `approved: true`. Repeat without authentication and verify HTTP 401. Try `/dynamic` and verify the configured reviewer object. `/decision` returns an empty acknowledgment.
6. Configure your existing HTTPS proxy to forward `/submitted`, `/dynamic` and `/decision` to the local service and preserve the Authorization header. Repeat the authenticated and unauthenticated tests using the HTTPS URL. Keep certificate verification enabled.

An already-controlled HTTPS route is a prerequisite for the live subscription. Until it exists, you can complete local contract tests but not live trigger delivery. Proxy installation varies by the available infrastructure; it is not accomplished by changing the URL in ISC.

## Scope the subscription before enabling it

1. In **Admin > Event Triggers**, select the named trigger and create an HTTP subscription using the HTTPS URL and Basic authentication.
2. For Submitted and Dynamic Approval choose **Synchronous** response. Use a filter on the isolated profile ID; test a JSONPath expression such as `$[?(@.requestedItems[?(@.id == "YOUR-ISOLATED-PROFILE-ID")])]` in the tenant's filter tester.
3. Replace the ID before saving. Test the sample with that ID, then with a different ID. Enable only when the intended case matches and the unrelated case does not. If the tester rejects the nested expression, use its supported expression for the same exact item match; retain both test results.
4. Submit only single-item requests in these trigger labs. Filters apply to invocations; a matching item inside a mixed request is not proof that every other item is isolated from the preliminary decision.
5. Record the subscription ID and its enabled state. When finished, disable it before stopping the service.

The service reloads the private mode file for each request. Submitted modes are `approve`, `deny`, `invalid` and `timeout`. Dynamic modes are `reviewer` and `none`. Change modes locally, never through a public configuration endpoint.

The service prints request/item IDs and its response. It does not log Authorization headers or callback secrets. It is a teaching service, not a durable production integration: it does not provide a production queue or availability guarantees. Asynchronous mode saves metadata privately for a manual callback in AR-090.

## Compare asynchronous handling without mixing contracts

In synchronous mode the HTTP response carries the decision. In asynchronous mode the subscriber first acknowledges and later completes the invocation using its supplied callback URL and secret. Follow [AR-090](labs/AR-090/README.md) to run the latter contract with a manual callback. [Response contracts](https://developer.sailpoint.com/docs/extensibility/event-triggers/responding-request-response-trigger/)

Create `C:\LabEvidence\callbacks` privately, add `"async": true` to the mode file and start:

```powershell
python tools/lab_subscriber.py --mode-file C:\LabEvidence\subscriber-mode.json --pending-dir C:\LabEvidence\callbacks
```

After an asynchronous invocation, use the saved callback URL as the POST destination and send the following raw JSON through the REST client before the deadline:

```json
{
  "secret": "REPLACE-WITH-THIS-INVOCATIONS-PRIVATE-SECRET",
  "output": {
    "approved": true,
    "comment": "AR-090: Manual asynchronous decision",
    "approver": "acme.e002"
  }
}
```

Verify the hostname and request ID against the intended tenant and invocation first. The secret belongs to that invocation; keep it local. The service does not send the callback for you. Remove the async flag before switching the subscription back to synchronous mode.

The Submitted response schema and Dynamic Approval response schema are different. [Submitted](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-submitted/), [Dynamic Approval](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval/)
