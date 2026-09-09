# AR-064 · Compare native workflows with developer event triggers

**Before you start:** AR-063 and the [subscriber workbench](../../SUBSCRIBER-WORKBENCH.md). Complete its local test before enabling any subscription.

## Record two different mechanisms

1. Open the native workflow execution from AR-058. Record its trigger name, requestedItem, requestedFor and accessRequestId fields.
2. Start the supplied subscriber with a private mode file and configure your controlled HTTPS endpoint as described in the workbench. Verify Basic authentication and a synthetic local request first.
3. Open **Admin > Event Triggers**, select the developer **Access Request Submitted** trigger and create an HTTP subscription to the `/submitted` endpoint. Select synchronous response and Basic authentication. Keep it disabled until the filter is set.
4. Set a filter limited to your isolated test profile ID. Use the filter tester with the workbench payload and a different item ID; the first must match and the second must not.
5. Enable the filtered subscription, submit the matching test request and inspect the sanitized subscriber log. Compare its `requestedItems` array with the native workflow's `requestedItem` object.
6. Deny or cancel the diagnostic request and disable the subscription.

**Check:** You record separate subscription, payload and execution evidence. The developer trigger performs a preliminary request-response check; attaching a native approval workflow is a different configuration.

If your tenant cannot enforce the filter, do not enable an unfiltered failure exercise. Use only the local synthetic test until the subscription can be scoped.

[Submitted developer trigger](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-submitted/)

## Screenshots to capture

1. Native workflow input and developer subscription configuration.
2. Matching/nonmatching filter tests.
3. Sanitized received payload and disabled final subscription.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-063](../AR-063/README.md) · [Course outline](../../README.md) · [Next: AR-065](../AR-065/README.md)
