# AR-067 · Correlate the decision event with fulfillment

**Before you start:** AR-066. Use the subscriber `/decision` endpoint; Submitted and Dynamic subscriptions remain disabled.

## Observe a decision notification

1. Create a filtered HTTP subscription for **Access Request Decision**, using the isolated profile and Basic authentication. This is a notification event; do not return an approval decision to authorize access through it.
2. Enable the subscription and submit a request for the isolated profile. Approve through its normal review.
3. Inspect the sanitized event log and match the event's request ID, recipient and decision to ISC. Check target membership separately after fulfillment.
4. Remove the grant. Submit a second request and deny it. Match the denial event and verify absent membership.
5. Compare event time, approval time and target-change time. Explain why a decision event alone is not proof that the connector completed provisioning.
6. Disable the subscription after recording both cases.

**Check:** Both decisions are observable and correctly correlated. If a Submitted subscription is also enabled later, use a real existing identity username in its `approver` field, as required by the Submitted trigger's documented interaction with Decision subscriptions.

**Reset:** All test subscriptions disabled; no grant remains.

[Access Request Decision](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-decision/)

## Screenshots to capture

1. Decision subscription and filter.
2. Approved/denied events matched to requests.
3. Independent target checks and disabled subscription.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-066](../AR-066/README.md) · [Course outline](../../README.md) · [Next: AR-068](../AR-068/README.md)
