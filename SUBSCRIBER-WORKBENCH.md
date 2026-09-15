# Subscriber workbench

Use this page beside AR-064–069. You'll run the supplied service locally, prove its response contracts, then connect a scoped tenant subscription through an HTTPS route you control. Python 3, Postman Desktop and access to Admin > Event Triggers are required. Live filter validation uses the Acme API Admin environment from [AR-052](labs/AR-052/README.md); prepare or renew it before that step.

## Prepare the isolated access item

1. Verify Taylor (`acme.e025`) and the retained AD account from AR-047–049. Keep the current GG-ACME-FAULT-049, its original GUID and restored permissions. Verify Taylor has no membership in that group, VPN, Remote Users or baseline, and no pending test request. Use [native AD checks](M02-CHECKS.md#inspect-direct-ad-membership). Do not create another Taylor account.
2. Prepare separate Acme Admin, Acme Taylor, Acme Priya (`acme.e002`) and Acme Evelyn (`acme.e021`) sessions. Taylor's [registration steps](labs/AR-047/README.md#2-add-one-hr-row-and-import-the-complete-file) retain the existing identity. Use existing sign-in for the retained AD account when external authentication is configured. Verify each session's username. Taylor will submit and remove access for himself; this module does not require changing Requests on Behalf.
3. Open **Admin > Access Model > Access Profiles > Create New**. Name the profile `AP-Acme-Subscriber-Test`, description `Acme isolated event-trigger exercise`, owner Priya, source your AD source. Reuse the named profile on a repeat.
4. Under **Manage Entitlements**, add only the current GG-ACME-FAULT-049 by source and native value. Under **Access Requests**, enable requests, require grant approval and add only Primary Owner. Under **Reviewing Removal Requests**, require approval and add only Primary Owner. Require a reason, leave form/date requirements off and keep direct reviewer approval, not Workflow.
5. Save, enable from the profile list and Apply Changes when offered. Reopen the profile and record its ID, current entitlement ID/native value and Priya's grant/removal review. Keep the direct entitlement non-requestable, the profile outside segments and automatic assignments, and earlier disposable profiles disabled.
6. Open Taylor's **Request Center > Access Items > Access Profiles** and confirm this profile is visible. Stop before submission. If unavailable, inspect the saved profile, current assignment and Taylor's session before changing visibility settings.

## Start the local service

1. Open PowerShell in the repository folder containing tools and datasets. Run `Get-Location` and `Test-Path ./tools/lab_subscriber.py`; the latter must return True. Use a private evidence directory outside this repository, such as `C:/LabEvidence/ISC-Subscriber`.
2. Create that directory in File Explorer. In your text editor create `subscriber-mode.json` there, saved as UTF-8 without BOM. Enter this JSON, replacing Evelyn's ID and display name with values from **Admin > Identity Management > Identities > acme.e021**. Copy the ISC identity ID, not employee number E021. Keep every key shown.

```json
{
  "submitted": "approve",
  "approver": "acme.e002",
  "dynamic": "reviewer",
  "reviewer": {
    "id": "YOUR-EVELYN-IDENTITY-ID",
    "name": "YOUR-EVELYN-DISPLAY-NAME",
    "type": "IDENTITY"
  }
}
```

3. In PowerShell, use the actual file path if yours differs:

```powershell
python -m json.tool C:/LabEvidence/ISC-Subscriber/subscriber-mode.json
if ($LASTEXITCODE -ne 0) { throw 'Correct the JSON file before starting the service.' }
python ./tools/lab_subscriber.py --mode-file C:/LabEvidence/ISC-Subscriber/subscriber-mode.json
```

4. At the service prompts enter a dedicated Basic authentication username and private password. The password prompt is hidden. Wait for `Listening on localhost:8787` and leave this terminal running. These credentials authenticate the subscriber; they are not your ISC username/PAT. Do not use a PowerShell transcript while entering credentials.
5. In Postman, create a separate collection named Acme Subscriber Local. Add **POST** `http://127.0.0.1:8787/submitted`. Choose **Authorization > Basic Auth**, select private local-vault values for the service username/password as in [the API workbench](API-WORKBENCH.md), then **Body > raw > JSON**. A collection name containing Local does not make stored credentials private; keep secrets in the local vault. Paste the sample below, substituting the recorded profile and Taylor identity IDs. Keep the request ID labelled synthetic. Send once.

```json
{
  "accessRequestId": "synthetic-local-test",
  "requestedFor": {"id": "YOUR-TAYLOR-IDENTITY-ID", "type": "IDENTITY"},
  "requestedBy": {"id": "YOUR-TAYLOR-IDENTITY-ID", "type": "IDENTITY"},
  "requestedItems": [
    {"id": "YOUR-ISOLATED-PROFILE-ID", "type": "ACCESS_PROFILE", "operation": "Add"}
  ]
}
```

6. Require HTTP 200 with approved true, comment and approver `acme.e002`. Duplicate the request, select No Auth and require 401. Return to the authenticated request, change the URL path to `/dynamic` and require Evelyn's object. `/decision` returns `{}` as an acknowledgment. These requests do not create ISC access requests.
7. To change a mode later, edit only the specified value in the same private JSON file and save. The service reloads it per request. Submitted modes are approve, deny, invalid and timeout; Dynamic modes are reviewer and none. Keep `async` absent or false throughout Module 11. A malformed file returns 400; fix the file before a live test.

## Verify the HTTPS route

1. Use your existing controlled reverse proxy or lab tunnel to forward HTTPS paths `/submitted`, `/dynamic` and `/decision` to `http://127.0.0.1:8787` on the machine running the service. Preserve the Authorization header and path. Record the public origin and destination port. Keep the route's host awake while testing.
2. Repeat the authenticated 200 and unauthenticated 401 tests against that HTTPS origin in Postman, keeping certificate verification enabled. Confirm the Python terminal receives the authenticated request. A proxy sign-in page or 200 HTML page is not the subscriber's JSON response.
3. If the HTTPS route is unavailable, finish the local contract exercises and mark tenant delivery Not run. Do not paste localhost into ISC or assume a new URL creates a tunnel. Use your infrastructure's setup instructions to establish the route before enabling a subscription. No live integration is claimed from a localhost test.

## Scope the subscription before enabling it

1. Open **Admin > Event Triggers > Subscriptions**. Inspect existing subscriptions for the intended trigger. Only one subscription is supported for each Response Required trigger. Reuse only the course's own named subscription; do not replace another integration. If no dedicated slot is available, retain local results and leave live cases Not run.
2. Prepare the filter below for Submitted and Dynamic Approval. Replace both placeholders with your recorded IDs. It limits delivery to Taylor and Add operations on the isolated profile.

```text
$[?(@.requestedFor.id == "YOUR-TAYLOR-IDENTITY-ID" && @.requestedItems[?(@.id == "YOUR-ISOLATED-PROFILE-ID" && @.operation == "Add")])]
```

3. Validate against the tenant before creating an enabled subscription. In Postman, select **Acme API Admin**, create **POST** `{{apiBase}}/trigger-subscriptions/v1/validate-filter`, set Bearer Token to `{{token}}`, and use **Body > raw > JSON** below. This tests a filter; it submits no access request. Replace the placeholders in both input and filter. The filter string needs the shown escaped quotes because it is inside JSON.

```json
{
  "input": {
    "requestedFor": {"id": "YOUR-TAYLOR-IDENTITY-ID"},
    "requestedItems": [{"id": "YOUR-ISOLATED-PROFILE-ID", "operation": "Add"}]
  },
  "filter": "$[?(@.requestedFor.id == \"YOUR-TAYLOR-IDENTITY-ID\" && @.requestedItems[?(@.id == \"YOUR-ISOLATED-PROFILE-ID\" && @.operation == \"Add\")])]"
}
```

4. Send and require HTTP 200 with isValid, isValidJSONPath and isPathExist true. Save three negative copies, changing only the input: another recipient ID, another item ID, and operation Remove. Each must keep isValidJSONPath true and return isValid false. Record isPathExist as returned too. A 401/403 is an authentication/permission problem, not a non-match. The validation operation requires an ORG_ADMIN caller with `sp:trigger-service-subscriptions:manage`; check the Acme API Admin token rather than changing the filter to address 403. If the expression is rejected or a negative matches, keep the subscription disabled and correct the filter before continuing.
5. On **Admin > Event Triggers**, select **+ Subscribe** beside the lab's trigger. Enter its name from the lab and a description. Choose Subscription Type HTTP, Integration URL your HTTPS origin plus the specified path, Authentication Type Basic Auth and the service credentials. For Response Required triggers choose Synchronous; its deadline is 10 seconds. For Decision, a Fire and Forget trigger, no approval-response mode is required.
6. Paste the validated filter into Filter without the JSON string's outer quotes or escape backslashes. Set Enabled/Disabled to Disabled before Save. Reopen through **Subscriptions > Menu > Edit** and verify trigger, URL, filter and response mode. Capture these with credentials hidden.
7. Enable only the subscription named by the current lab. Submit single-item requests throughout this module. A filter matching one item inside a mixed request does not isolate the preliminary decision to just that item. Do not mix business access into a test request.
8. Inspect **Subscriptions > Menu > Activity Log** for that subscription. Match the request ID in the invocation input with the terminal log, Taylor and profile ID; record invocation ID, time and status separately. **Test Subscription** uses mock data, so label it Synthetic and do not claim it provisioned Taylor.
9. Disable the subscription after its recorded case is resolved and before stopping the local service. Capture activity evidence during the lab; the displayed log is not a permanent archive.

For a Decision subscription, change `requestedItems` to `requestedItemsStatus` in both the filter and validation input. Keep the Taylor, item and Add restrictions. Validate again using the Decision example below; include its approvalInfo. Do not reuse the Submitted array name.

## Submit one Taylor request

1. Check Taylor's native GG-ACME-FAULT-049 membership is False and no Subscriber Test assignment or pending request exists. Keep his original account and baseline exclusion.
2. As Acme Taylor, open **Request Center > Access Items > Access Profiles**. Select only AP-Acme-Subscriber-Test and enter the exact reason supplied by the lab. Leave start/end dates empty. Select Save, Review Request, verify Taylor and his standard account, then Submit Request once.
3. Open **My Requests**, locate the new request by item, reason and time, and record its ID/status. As administrator, inspect **Admin > Dashboard > Approval Management > Access Requests** and the matching process/assignee. Open the subscription's Activity Log and match the native event's request ID separately. Do not assume a subscription ID or invocation ID is the request ID.
4. Stop before approving. The current lab tells Priya and any additional reviewer when to decide.

## Decide and remove the test access

1. For a normal Grant decision, use Acme Priya's **Approvals > Access Requests > Requested**. Verify Taylor, AP-Acme-Subscriber-Test and the lab reason, then Approve or Deny as instructed and confirm with a comment. Dynamic Approval may add another review; Priya's approval alone is not then the final decision.
2. After the final approval, inspect [Account Activity](LAB-DESK.md#find-the-account-activity) and verify Taylor's native GG-ACME-FAULT-049 membership True. Record account DN/GUID and compare the before-record. No other diagnostic or baseline group should be added.
3. Before removing a successful test grant, disable the course's active subscriber subscription and verify its saved state. As Taylor, open **My Access > Access Profiles > AP-Acme-Subscriber-Test > Revoke Access Profile**, enter the lab's cleanup reason and submit. As Priya, inspect the matching Remove, approve and confirm.
4. Follow the removal operation, verify disposable membership False and the same account still present, then [refresh imported AD data](M02-CHECKS.md#refresh-imported-ad-data). Confirm the profile assignment is gone and no diagnostic operation is pending before the next grant.
5. If an access request should be denied, confirm its terminal decision and no native membership. If it remains awaiting review, have its actual assignee deny that matching task. Taylor may use **My Requests > request > Cancel** when eligible. For an unresolved operation, record the error and request/activity IDs; changing the subscriber mode does not repair it automatically. Keep the subscription disabled while investigating.

## Verify the Decision payload locally

Send this synthetic body to `/decision` with the same Basic authentication. Check the terminal log contains the recipient ID, item ID and APPROVED decision, while the HTTP reply is only an acknowledgment. Use the same body in the Decision filter tester after replacing the profile ID. Repeat with an unrelated item ID and with a DENIED decision.

```json
{
  "accessRequestId": "synthetic-decision-test",
  "requestedFor": {"id": "YOUR-TAYLOR-IDENTITY-ID", "type": "IDENTITY"},
  "requestedBy": {"id": "YOUR-TAYLOR-IDENTITY-ID", "type": "IDENTITY"},
  "requestedItemsStatus": [{
    "id": "YOUR-ISOLATED-PROFILE-ID",
    "type": "ACCESS_PROFILE",
    "operation": "Add",
    "approvalInfo": [{
      "approvalDecision": "APPROVED",
      "approver": {"id": "synthetic-reviewer", "type": "IDENTITY"}
    }]
  }]
}
```

The event can contain multiple approval entries. Preserve those entries in the evidence; do not invent a single top-level decision field. [Decision contract](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-decision/)

## Compare asynchronous handling without mixing contracts

In synchronous mode the HTTP response carries the decision. In asynchronous mode the subscriber first acknowledges and later completes the invocation using its supplied callback URL and secret. Follow [AR-090](labs/AR-090/README.md) to run the latter contract with a manual callback. [Response contracts](https://developer.sailpoint.com/docs/extensibility/event-triggers/responding-request-response-trigger/)

Create `C:/LabEvidence/ISC-Subscriber/callbacks` privately, add `"async": true` to the mode file and start:

```powershell
python ./tools/lab_subscriber.py --mode-file C:/LabEvidence/ISC-Subscriber/subscriber-mode.json --pending-dir C:/LabEvidence/ISC-Subscriber/callbacks
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
