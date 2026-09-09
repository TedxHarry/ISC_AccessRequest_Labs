# AR-090 · Complete an asynchronous trigger callback

**Before you start:** AR-069, controlled HTTPS forwarding and the subscriber workbench. This is a separate contract from the synchronous failure labs.

## Acknowledge, then return the decision

1. Disable the existing Submitted subscription. Stop the subscriber and restart it with `--pending-dir C:\LabEvidence\callbacks` pointing to an existing private folder. Add `"async": true` to the private mode file.
2. Configure only the isolated Submitted subscription with **Asynchronous** response and a supported deadline that allows your manual callback. Preserve its profile filter and authentication.
3. Enable it and submit one matching request. Verify the endpoint acknowledged HTTP 200 with an empty object and saved a private callback file. The acknowledgment has not approved the request.
4. Open the saved file privately. Confirm its accessRequestId matches the test request and its callbackURL has your expected tenant API hostname. Keep the secret out of screenshots.
5. In the REST client, POST to that callbackURL with JSON containing the saved `secret` and `output` holding `approved: true`, a lab comment and a real lab identity username as `approver`. Use the exact example in the workbench, replacing the secret locally. Submit before the configured deadline.
6. Verify invocation completion, then complete the normal reviewer approval. Check native membership and remove the assignment.
7. On a separate request, deliberately leave the callback unanswered until its configured deadline. Record the actual invocation/request outcome; do not call this an HTTP delivery failure when acknowledgment succeeded.
8. Disable the subscription, remove the async flag, restart in synchronous mode if needed and run a fresh control before reuse.

**Check:** Delivery, acknowledgment, callback completion and access approval have separate timestamps and evidence. Replaying an old callback is not a new approval exercise.

**Reset:** Subscription disabled, affected requests accounted for and callback files kept private or deleted after the evidence is sanitized.

[Asynchronous response contract](https://developer.sailpoint.com/docs/extensibility/event-triggers/responding-request-response-trigger/)

## Screenshots to capture

1. Asynchronous subscription and scoped filter.
2. Empty acknowledgment and sanitized callback completion.
3. Normal approval, native result and uncompleted-callback deadline outcome.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-089](../AR-089/README.md) · [Course outline](../../README.md)
