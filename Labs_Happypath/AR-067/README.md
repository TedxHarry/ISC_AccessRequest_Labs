# AR-067 · Match a decision event to its access request

In this lab, you'll capture approval and denial notifications and check access in AD separately.

## Before you start

Complete [AR-066](../AR-066/README.md). Keep Submitted and Dynamic disabled, the service running and Taylor without test access. Use Acme Admin, Taylor, Priya, Postman and the AD workstation. Keep your [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Test the Decision payload and filter

1. Follow [Verify the Decision payload locally](../../SUBSCRIBER-WORKBENCH.md#verify-the-decision-payload-locally), using your recorded Taylor/profile IDs but a synthetic request ID. POST to /decision with Basic Auth. Require HTTP 200 with `{}` and a terminal record containing the item, recipient and approvalInfo decision. Repeat with DENIED.
2. Prepare a filter using requestedItemsStatus, Taylor's ID, this profile ID and operation Add. In the workbench's validation API request, replace input with the Decision example and change the filter's array name accordingly. Repeat the matching, other-recipient, other-item and Remove tests. Save `AR-067-01.png`.
3. Use **Admin > Event Triggers > + Subscribe** beside Access Request Decision. Name it `SUB-Acme-AR-Decision`, description `Taylor decision evidence`, HTTP, your HTTPS `/decision` URL, Basic Auth and the validated Decision filter. Save Disabled and reopen. This is Fire and Forget; do not configure a synchronous approval decision for it.

**Check:** The response acknowledges delivery. The event's per-item approvalInfo supplies the decision evidence.

### 2. Approve and inspect the delivered event

1. Enable only Decision. Submit as Taylor using [the submission steps](../../SUBSCRIBER-WORKBENCH.md#submit-one-taylor-request), reason `AR-067 approved event`.
2. As Priya, inspect and approve the normal Grant with `AR-067 owner approved`. Record decision time from the request process.
3. Open Decision's Activity Log and match its input to the Python /decision log by accessRequestId, requestedFor, item ID and operation Add. Expand the real requestedItemsStatus item's approvalInfo. Record all entries and actual approver IDs, not an invented top-level decision. Save `AR-067-02.png`.
4. Follow Account Activity and verify Taylor's native disposable membership True, account unchanged. Record the native check time and any available operation completion time separately. A check proves membership at observation time, not the exact instant AD changed.
5. Disable Decision and complete [Taylor's removal](../../SUBSCRIBER-WORKBENCH.md#decide-and-remove-the-test-access). Verify membership False and assignment absent before the next case. Save `AR-067-03.png`.

**Check:** The decision event and the connector's result are separate records joined by this request's evidence.

### 3. Deny a fresh request and compare

1. Re-enable the same validated Decision subscription. Submit as Taylor with reason `AR-067 denied event`.
2. As Priya, deny the matching Grant with `AR-067 owner denied`. Match its Decision invocation and per-item approvalInfo to this new request. Confirm native membership False and no pending review.
3. Record the request decision time, event receipt time, invocation status and native observation for both cases. If no event appears, inspect the saved Decision array/filter, endpoint and Activity Log before resubmitting anything. Keep missing delivery Pending. Save `AR-067-04.png`.
4. Disable Decision and verify Submitted/Dynamic remain disabled. If these are combined in a later exercise, keep the Submitted response approver as a real existing username; the documented interaction requires this for Decision events.

**Check:** Each delivered event matches its own request. Approval notification alone is not proof of provisioning or continued current access.

## Check the result

Approved and denied requests have separately matched Decision events and independent native checks. The approved access is removed, and all subscriptions finish disabled.

## Finish

Keep the Decision definition and evidence but leave it disabled. Taylor has no test access or pending work. Keep the service mode in approve/reviewer for the response-failure exercises.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and callback secrets. Use letter suffixes when one result needs several images. Label synthetic requests separately from tenant requests.

| Filename | What to show |
|---|---|
| AR-067-01.png | Local Decision response and filter validation |
| AR-067-02.png | Approved event and per-item approval entries |
| AR-067-03.png | Independent grant/removal evidence |
| AR-067-04.png | Denied event, timing comparison and disabled subscriptions |

[Previous: AR-066](../AR-066/README.md) · [Course outline](../../README.md) · [Next: AR-068](../AR-068/README.md)
