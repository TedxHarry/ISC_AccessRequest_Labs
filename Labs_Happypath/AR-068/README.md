# AR-068 · Recover from an invalid or late subscriber response

In this lab, you'll reproduce an invalid response and a missed deadline, then verify a fresh request after restoring the service.

## Before you start

Complete [AR-067](../AR-067/README.md). Keep every course subscription disabled and Taylor clean. Use the validated Submitted subscription, service, HTTPS route, Postman, Acme Admin, Taylor and Priya. Keep the [journal](EVIDENCE.md) open. Live failures require a proven Taylor/profile/Add filter and a dedicated lab subscription; otherwise use the local cases only.

## Follow the steps

### 1. Return an invalid decision body

1. Reopen SUB-Acme-AR-Submitted and verify its saved recipient, item and Add restrictions. Re-run the workbench's positive and negative filter tests if the configuration changed. Keep Dynamic and Decision disabled.
2. With Submitted disabled, change submitted to invalid in the private file and save. POST the authenticated synthetic body to /submitted. The teaching service returns HTTP 200 and `{"invalidLabResponse": true}`. Confirm approved, comment and approver are missing. Save `AR-068-01.png`.
3. Enable Submitted for one Taylor request, reason `AR-068 invalid response`. Match the invocation and terminal body. Inspect its status/error and the access-request process; record both IDs and the response-contract failure. The request can fail after the SoD check even when no SoD policy caused the problem.
4. Disable Submitted. Verify no membership was granted. Account for the original request: if terminal, retain its actual failure status; if awaiting a real review, have its actual reviewer deny, or use Taylor's eligible Cancel action. If unresolved, leave the subscription disabled and investigate before any further live request. Save `AR-068-02.png`.

**Check:** HTTP transport succeeded, but the decision contract did not. Do not label the case a valid denial response.

### 2. Respond after the synchronous deadline

1. After the invalid case is resolved, keep Submitted disabled and change submitted to timeout. Save. This mode waits 12 seconds before returning a normal approval body. Synchronous subscriptions require a response within 10 seconds; changing an asynchronous deadline does not extend this limit.
2. Set the local Postman request timeout above 12 seconds, such as 20000 milliseconds, and send the authenticated synthetic body to /submitted. Record its elapsed response time and eventual approved true body. A local client waiting longer than ISC does can receive a response that ISC would consider late. Save `AR-068-03.png`.
3. Enable Submitted for one Taylor request, reason `AR-068 late response`. Record submission time, invocation start/end/error, and the terminal's delayed output. Wait until the delayed handler has finished; its log is printed after the delay.
4. Disable Submitted and inspect the request's terminal outcome and native membership False. An eventual local approval body is not proof ISC accepted it. Record any proxy timeout separately if the request did not reach Python or the proxy ended it earlier.
5. Resolve any remaining review/request through its actual supported action. Inspect for outstanding invocations or retries before changing the mode. If those remain unresolved, stop the live sequence and preserve the evidence; do not switch to approve while an old diagnostic request can still be processed. Save `AR-068-04.png`.

**Check:** The deadline failure is supported by invocation timing. A stopped service, certificate error or 401 is a different failure.

### 3. Restore service and prove a new request

1. With subscriptions disabled and prior requests/invocations settled, restore submitted approve and keep async absent/false. Repeat the local and HTTPS authenticated controls, requiring valid approval responses, then the unauthenticated 401 control.
2. Enable only Submitted. As Taylor, submit reason `AR-068 fresh recovery control`. Verify a successful invocation with approved true and Priya's normal review task.
3. As Priya, deny that matching Grant with `AR-068 recovery observed`. Confirm terminal denial and no native access. Disable Submitted and save `AR-068-05.png`.
4. Record three rows in the journal: invalid, late and fresh recovery. Include request ID, invocation ID, cause, final state and remaining action. Do not overwrite historical failures with the successful control's outcome.

**Check:** A fresh request passed the restored service. Each older request has its own recorded resolution.

## Check the result

Invalid and late responses have distinct invocation/request evidence, no diagnostic access remains, and a fresh valid response reaches normal review. Unreproduced or unresolved cases remain labelled rather than counted as passed.

## Finish

Leave all subscriptions disabled and the file in approve/reviewer mode. Keep every affected request accounted for and no delayed handler or retry unexplained. Taylor remains clean. Keep the original profile and account for the final control.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and callback secrets. Use letter suffixes when one result needs several images. Label synthetic requests separately from tenant requests.

| Filename | What to show |
|---|---|
| AR-068-01.png | Local invalid body with successful HTTP transport |
| AR-068-02.png | Invalid invocation, request outcome and absent access |
| AR-068-03.png | Delayed local response and elapsed time |
| AR-068-04.png | Tenant deadline outcome and affected-request resolution |
| AR-068-05.png | Restored HTTPS controls, fresh review and final disabled state |

[Previous: AR-067](../AR-067/README.md) · [Course outline](../../README.md) · [Next: AR-069](../AR-069/README.md)
