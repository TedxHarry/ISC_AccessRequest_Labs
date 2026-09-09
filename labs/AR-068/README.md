# AR-068 · Recover from an invalid or late subscriber response

**Before you start:** AR-067. Use only the filtered isolated profile subscription. Confirm unrelated requests do not match.

## Inject two controlled failures

1. Set the Submitted mode to `invalid`, which returns a body without the required decision fields. Enable the filtered subscription and submit one matching request.
2. Inspect invocation status, subscriber log and request process. Record the failed contract rather than diagnosing every preliminary-check failure as an SoD policy violation.
3. Disable the subscription. Set mode to `timeout`, then re-enable only for one new matching request. The local service deliberately responds after the synchronous deadline.
4. Record invocation timing and request outcome. Disable the subscription immediately after the observation.
5. Restore mode to `approve`. Re-enable for one clean control, submit and verify the request passes the preliminary stage. Resolve it and disable the subscription.
6. Revisit the two failed requests. Record whether each is final, pending or eligible for a supported recovery; a repaired service does not prove old requests replayed automatically.

**Check:** Failure and recovery are demonstrated through invocation and request evidence, with no unfiltered interruption to other access requests.

**Reset:** All subscriptions disabled, service in approve mode, and each affected request accounted for. Use the local fixture only if safe subscription scoping cannot be proven.

[Response modes and deadlines](https://developer.sailpoint.com/docs/extensibility/event-triggers/responding-request-response-trigger/)

## Screenshots to capture

1. Invalid-response invocation and request outcome.
2. Timeout evidence.
3. Fresh recovery control, disabled subscriptions and affected-request list.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-067](../AR-067/README.md) · [Course outline](../../README.md) · [Next: AR-069](../AR-069/README.md)
