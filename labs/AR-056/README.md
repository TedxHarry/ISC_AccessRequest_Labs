# AR-056 · Handle duplicate submissions and uncertain responses

In this lab, you'll find a request without relying on its POST response, observe one controlled duplicate and practise a safe retry decision.

## Before you start

Complete [AR-055](../AR-055/README.md). Taylor has no Remote Worker assignment or pending request. Keep the three API environments, Taylor/Priya ISC sessions and AD workstation available. Use your [journal](EVIDENCE.md). The lost-response and rate-limit cases below are simulations; you will not disrupt the network or flood the tenant.

## Follow the steps

### 1. Find a request as if its response were lost

1. Verify Taylor's VPN/Remote Users False and no active Remote Worker assignment. As Acme API Taylor, set `requestTag` to `AR-056 first control` with a unique run suffix and send the AR-053 Grant body once to **POST `{{apiBase}}/access-requests/v1`**. Save the submission time and private response, but do not use that response for the next lookup. Leave Priya's review pending.
2. Send **GET `{{apiBase}}/access-request-status/v1`** as Taylor with `requested-for={{recipientId}}`, `limit=50`, `offset=0`, `sorters=created,accountActivityItemId`. Read all needed pages. Locate the request using recipient, item, comment and created time.
3. As Acme API Priya, read the pending queue using the Taylor filter from AR-054. Match the same request and record its approval ID and parent tracking field. Verify the request remains undecided.
4. Record your decision: the intended request already exists and is waiting for Priya, so a retry is unnecessary. Save `AR-056-01.png`. Label this a simulated lost response; the real POST was not deliberately interrupted.

**Check:** You found the intended work without relying on its acceptance response.

### 2. Observe exactly one deliberate duplicate

1. Keep the first request pending. As Acme API Taylor, send the exact same Grant body once more, including recipient, profile, comment and unchanged absence of dates. This is the only deliberate duplicate in this case.
2. Record the second HTTP response, `newRequests`/`existingRequests` if returned and their tracking IDs. Compare with the first request. An accepted response does not establish a second independent request.
3. Read Taylor's status and Priya's pending queue again. Record whether they point to the original parent/approval, show a distinct request, or show no additional history. Save `AR-056-02.png`. Do not keep submitting to force a particular outcome.
4. If there are distinct extra pending approvals for this isolated case, have Priya reject those extras using their own verified IDs and comment `AR-056 duplicate control closed`. Keep only the first intended request. If two responses point to the same parent/approval, there is only one work item to decide; do not reject it as an extra.
5. Reread Priya's pending queue after resolving any extras. Verify the first request's approval ID, recipient, comment and undecided state again. As Priya, approve the first intended request using the AR-055 approve operation. Verify its status/activity and both native memberships True. If an extra request already advanced, inspect its actual outcome and resolve it before the next section. Do not claim the duplicate was suppressed unless your evidence establishes that.

**Check:** The first grant completed. Your observations explain what the duplicate response and eventual records actually mean.

### 3. Request the same access while it is already held

1. Refresh imported AD data after the successful grant if the assignment is not yet visible. Confirm Taylor still has the requested Remote Worker assignment, VPN and Remote Users, on the same standard account. There is no date amendment and no unresolved earlier duplicate.
2. As Acme API Taylor, set `requestTag` to `AR-056 already held control` and send one Grant for the same profile and recipient, with unchanged account/date details. Record its response and time.
3. Read history and pending approvals after processing. The documented behaviour for already-held, unchanged access is duplicate cancellation/ignoring; ignored requests can be absent from status history. Record whether a new record or existing-request reference is returned. Do not invent a cancellation record when none appears.
4. Verify the original assignment and both memberships remain. If the call instead creates a new actionable review, compare the existing assignment, account and dates before deciding whether the scenario really matched unchanged owned access. Resolve any distinct diagnostic review before removing the grant. Save `AR-056-03.png`.
5. Remove Taylor's granted Remote Worker using [the exact cleanup steps](../../API-WORKBENCH.md#remove-the-module-9-control), including Priya's removal approval and native False for both groups. Recheck history/queues so no delayed duplicate can regrant it. Save `AR-056-04.png`.

**Check:** The owned-access case is distinguished from a pending duplicate. Taylor returns to clean membership with no outstanding diagnostic request.

### 4. Make a retry decision from two written examples

1. In the journal, record this synthetic response: `HTTP 429`, `Retry-After: 30`, received at an observation time you choose. Calculate the earliest retry time as receipt time plus 30 seconds. This is a sample, not a tenant result; do not generate requests to cause throttling.
2. Before retrying a mutation after that delay, recheck whether the intended request or assignment already exists. Compare recipient, object, account and dates. A comment is not an idempotency key.
3. For the second sample, write `POST response timed out; acceptance unknown`. Use Section 1's history/queue lookup first. If it exists, continue tracking it. If no record is yet visible, allow asynchronous processing and inspect again; one empty read does not prove the server rejected it.
4. Record which evidence would justify a new submission, such as a confirmed rejected submission or a resolved failed attempt with no pending operation/assignment. If still uncertain, keep the case unresolved rather than repeatedly posting. Preserve the actual request time/body in the private journal for investigation.

**Check:** The retry decision separates a read that can be repeated from a mutation that may already have been accepted. See [submission and duplicate behaviour](https://developer.sailpoint.com/docs/tools/sdk/python/access-requests/methods/access-requests/).

## Check the result

One simulated lost-response lookup, one pending duplicate and one owned-access attempt are recorded with actual outcomes. All resulting work is resolved and Taylor's test access is removed. The 429/timeout examples remain labelled synthetic.

## Engineering practice

Compare the first and duplicate responses with the later records. Identify what proves one intended grant versus two independent workflows. If no new status row appears for the owned-access attempt, explain the documented omission without claiming that an empty response alone proves anything about current AD membership. Use both the assignment and native checks.

## Finish

Leave no Remote Worker assignment, VPN/Remote Users membership or pending diagnostic review/write. Retain the private response examples and retry notes for AR-057. Keep identities, baseline configuration and the disposable-group state unchanged.

### Screenshots to capture

Capture these beside the matching steps. Hide token values and secrets. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-056-01.png | Existing pending request located without POST response |
| AR-056-02.png | Single deliberate duplicate and tracking/queue comparison |
| AR-056-03.png | Owned-access response and actual history/assignment result |
| AR-056-04.png | Final removal and no outstanding diagnostic work |

[Previous: AR-055](../AR-055/README.md) · [Course outline](../../README.md) · [Next: AR-057](../AR-057/README.md)
