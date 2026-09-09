# AR-056 · Handle duplicates and uncertain responses

**Before you start:** AR-055. Taylor begins without Remote Worker.

## Avoid blind retries

1. Submit one request tagged `AR-056 first`. Leave it pending and save the submission time.
2. Treat its acceptance response as lost: without using that response, find the request through the recipient/item history and pending approval. Explain why a retry is unnecessary.
3. In this isolated lab only, send one deliberate identical second submission. Compare immediate acceptance with eventual status and duplicate handling. Stop after this one duplicate.
4. Resolve the pending valid request and verify target access. Submit one request for the same owned access with unchanged account/dates; inspect the eventual result and whether it appears in status history. Do not assume every ignored request produces an identical visible record.
5. Remove the test assignment and resolve any remaining diagnostic request.
6. For rate limiting, use a written fixture: HTTP 429 with `Retry-After: 30`. Record a retry time at least 30 seconds after receipt and the state check required before retrying a mutation. Do not generate tenant traffic to force throttling.
7. For an HTTP 500 or connection timeout after submission, write the same reconciliation-first decision: read existing request/activity state, then determine whether a new submission is justified.

**Check:** Your retry decision uses recipient, item, account, dates and current state. A comment tag helps investigation but is not an idempotency guarantee.

[Asynchronous and duplicate behavior](https://developer.sailpoint.com/docs/api/v3/create-access-request/)

## Screenshots to capture

1. Existing pending request found without the acceptance response.
2. Deliberate duplicate and owned-access results.
3. Retry decision record and clean final state.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-055](../AR-055/README.md) · [Course outline](../../README.md) · [Next: AR-057](../AR-057/README.md)
