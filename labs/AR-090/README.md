# AR-090 · Complete and time out an asynchronous trigger callback

In this lab, you'll acknowledge a Submitted event, return its decision through the private callback, and compare that with an unanswered callback deadline.

## Before you start

Complete [AR-069](../AR-069/README.md), including its clean Taylor state and disabled subscriptions. Keep the working HTTPS route, Basic Auth credentials, private mode file, Postman Desktop and [subscriber workbench](../../SUBSCRIBER-WORKBENCH.md) available. Use Acme Admin, Taylor and Priya. Open your [journal](EVIDENCE.md). A local response alone cannot demonstrate a tenant callback.

## Follow the steps

### 1. Prepare the private callback receiver

1. Verify all course Submitted/Dynamic/Decision subscriptions are disabled. Reenable requestability and the existing AP-Acme-Subscriber-Test using [Prepare the isolated access item](../../SUBSCRIBER-WORKBENCH.md#prepare-the-isolated-access-item): only GG-ACME-FAULT-049, direct Priya grant/removal review and clean Taylor. Do not enable other subscriber/test profiles.
2. In File Explorer create `C:/LabEvidence/ISC-Subscriber/callbacks` outside the repository; restrict it to your lab account. Stop the earlier local subscriber with Ctrl+C only after confirming no invocation is pending. Preserve a copy of the current private mode file.
3. In `C:/LabEvidence/ISC-Subscriber/subscriber-mode.json`, keep all existing keys, set submitted to `approve`, approver to `acme.e002`, and add the Boolean property `"async": true`. Validate JSON and start from the repository folder:

```powershell
python -m json.tool C:/LabEvidence/ISC-Subscriber/subscriber-mode.json
if ($LASTEXITCODE -ne 0) { throw 'Fix the mode JSON before continuing.' }
python ./tools/lab_subscriber.py --mode-file C:/LabEvidence/ISC-Subscriber/subscriber-mode.json --pending-dir C:/LabEvidence/ISC-Subscriber/callbacks
```

4. Enter the existing Basic Auth credentials at the prompts. Keep the process running and verify the controlled HTTPS route still points to localhost port 8787. This service stores callback metadata but does not send callbacks for you. Keep its private files out of screenshots. Save `AR-090-01.png` with paths/configuration and no credentials.

**Check:** This lab uses ASYNC, not DYNAMIC response mode. ASYNC acknowledges with HTTP 200 and an empty object before a later callback. [Response contracts](https://developer.sailpoint.com/docs/extensibility/event-triggers/responding-request-response-trigger/)

### 2. Enable only the isolated asynchronous subscription

1. In **Admin > Event Triggers > Subscriptions**, edit the existing course Submitted subscription while disabled. Save its original response mode/deadline, filter, URL and authentication configuration. Keep the exact Taylor + Subscriber Test + Add filter from AR-065.
2. Change the HTTP response mode to **Asynchronous**. Set the response deadline to a supported value of 10 minutes if the UI accepts it; otherwise select and record a supported duration long enough for the manual callback. Save/reopen and verify the displayed deadline. Do not shorten another integration's deadline or replace a non-course subscription.
3. Repeat the workbench's positive and three negative filter validations if any ID/filter changed. In Postman, test POST to localhost `/submitted` and then the controlled HTTPS `/submitted`, with the existing Basic Auth and this synthetic body: `{"accessRequestId":"AR090-local-only","_metadata":{"callbackURL":"https://example.invalid/callback","secret":"synthetic-local-secret"}}`. Require HTTP 200 with `{}` and a private metadata file for each call. Label these Synthetic; never send a callback to the example URL or confuse these files with live invocations. Then enable only this Submitted subscription.
4. Taylor submits the single profile with reason `AR-090 callback completes` through [Submit one Taylor request](../../SUBSCRIBER-WORKBENCH.md#submit-one-taylor-request). Stop before any Priya decision. Record request ID and invocation time.
5. In **Subscriptions > Menu > Activity Log**, match the invocation input to Taylor/profile/request. Match the terminal's acknowledged log and newly saved private file. Record the empty acknowledgment and pending callback separately. Save `AR-090-02.png` with secrets hidden.

**Check:** HTTP 200 from the subscriber acknowledged delivery; it did not send the access decision.

### 3. Complete this invocation before its deadline

1. Open only the newly created private callback JSON locally. Verify its accessRequestId matches the actual invocation input and intended request. Verify callbackURL uses HTTPS and your confirmed tenant API hostname. Preserve the exact path received; do not rewrite its version based on another API example.
2. In Postman's Local Vault create a secret for this invocation's saved secret. Create a separate callback request with **POST** to that exact callbackURL, **Authorization > No Auth**, **Body > raw > JSON**, and the body below. Replace `{{vault:ar090-callback-secret}}` with your own vault reference if named differently. Do not inherit the subscriber's Basic Auth or send the secret to the HTTPS forwarding URL.

```json
{
  "secret": "{{vault:ar090-callback-secret}}",
  "output": {
    "approved": true,
    "comment": "AR-090 callback completed before deadline",
    "approver": "acme.e002"
  }
}
```

3. Send once before the recorded deadline. Record HTTP result and time without exposing the secret. Reopen Activity Log and require completed invocation with the intended output; a transport response alone is not proof that the request advanced. Do not replay the old callback to create another case.
4. Priya opens the matching Grant in **Approvals > Access Requests > Requested** and approves with `AR-090 normal review complete` when actionable. If the review was already visible earlier, record its timing rather than inferring the callback created it.
5. Follow Account Activity and require Taylor disposable membership True. Disable Submitted before [the removal steps (3–4)](../../SUBSCRIBER-WORKBENCH.md#decide-and-remove-the-test-access), reason `AR-090 successful case cleanup`; Priya approves Remove. Verify native False and assignment gone. Save `AR-090-03.png`.

**Check:** Acknowledgment, callback completion, normal review and target fulfillment have distinct evidence.

### 4. Observe one unanswered callback

1. With Taylor clean, reenable only the asynchronous Submitted subscription. Submit a fresh request, reason `AR-090 unanswered callback`. Match its new invocation and private file; do not send that file's callback.
2. Record the successful empty acknowledgment and configured deadline. Observe until the invocation reaches its deadline outcome; record the actual invocation and request states. Do not call this a delivery failure if the endpoint acknowledged it.
3. Inspect Priya's queue, request process and native disposable membership. If a review remains actionable, deny that diagnostic request. If it is eligible for cancellation, Acme Admin uses **Approval Management > matching request > More > Cancel Request**. If it remains genuinely stuck, retain the IDs and follow [AR-071's eligibility assessment](../AR-071/README.md), not an automatic close.
4. If any access was unexpectedly granted, disable the subscription and use the reviewed subscriber-profile removal before continuing. Save `AR-090-04.png` with actual deadline/result and cleanup. Do not label an unobserved deadline Passed.

**Check:** The timeout case is independent of the successful invocation and uses a different secret/request ID.

### 5. Restore synchronous behavior and finish

1. Disable the subscription and account for all outstanding invocations before stopping the service. Restore the saved subscription response mode/deadline while leaving it disabled. Remove the async property from the private mode file, retain submitted approve, and restart using the workbench's normal synchronous command.
2. Confirm the local synchronous Submitted response is valid, then enable the isolated subscription for one fresh Taylor request, reason `AR-090 restored synchronous control`. Verify invocation output, Priya approval and native grant. Disable the subscription, complete the reviewed removal and require Taylor clean.
3. Disable/non-requestable AP-Acme-Subscriber-Test and leave all three course subscriptions disabled. Stop the service/forwarder only after that. Keep callback files private or remove them locally after sanitizing evidence; never commit them or reuse their secrets. Save `AR-090-05.png`.

**Check:** The retained state matches C11: disabled definitions, clean Taylor, original account and no unexplained invocation.

## Check the result

One callback completes and one reaches its observed deadline, with request/native outcomes recorded separately. A fresh synchronous grant/removal verifies restoration before shutdown.

## Engineering practice

Compare the invocation IDs, callback URLs and timestamps for the successful and expired cases without displaying secrets. Explain why replaying the first callback cannot complete the second invocation and why a callback transport error needs a status read before any retry.

## Finish

Leave subscriptions/profile disabled, Taylor clean and the local service stopped. Keep callback material private and outstanding requests explicitly Pending until resolved.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-090-01.png | Private receiver setup without secrets |
| AR-090-02.png | Asynchronous subscription, acknowledgment and pending invocation |
| AR-090-03.png | Callback completion, normal approval and grant/removal |
| AR-090-04.png | Separate unanswered callback deadline and actual outcome |
| AR-090-05.png | Restored synchronous control and disabled final state |

[Previous: AR-089](../AR-089/README.md) · [Course outline](../../README.md)
