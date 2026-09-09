# AR-065 · Return a preliminary approval or denial

**Before you start:** AR-064 and a working filtered synchronous subscriber. Use its isolated profile and a clean recipient.

## Test both decisions

1. Set the private subscriber mode file to `submitted: approve`, with the username of a real lab identity as `approver`. Save.
2. Enable only the filtered Submitted subscription. Submit a matching request and confirm the log records the request ID and an approval response.
3. Verify the normal configured reviewer still receives the request. Approve through the remaining review and prove target membership. Preliminary approval does not bypass later approval requirements.
4. Remove the assignment. Change only the mode to `submitted: deny` and submit a fresh request.
5. Inspect the preliminary denial, resulting request state and absence of target access. Record the response comment in the available process evidence.
6. Change the mode back to approve, then disable the subscription after a fresh control or cancel the remaining control request.

**Check:** The response body changes the preliminary decision and the approved case continues to its normal review. A plain HTTP acknowledgment is not the same as a valid decision payload.

**Reset:** Subscription disabled and mode returned to approve. No new test assignment remains.

[Response schema](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-submitted/), [Subscriber workbench](../../SUBSCRIBER-WORKBENCH.md)

## Screenshots to capture

1. Sanitized approve and deny response modes.
2. Continued normal approval versus preliminary denial.
3. Target-state comparison and disabled subscription.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-064](../AR-064/README.md) · [Course outline](../../README.md) · [Next: AR-066](../AR-066/README.md)
