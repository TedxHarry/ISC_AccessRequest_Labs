# AR-069 · Hand over a recovered subscriber integration

**Before you start:** AR-068.

## Prove service and request recovery separately

1. List every subscription created in AR-064–068 with trigger, endpoint, response mode, filter and enabled state. Exclude credentials.
2. List every affected request ID, invocation ID, failure cause and current state.
3. Confirm the local service passes its synthetic approve, deny and authentication tests. Confirm invalid/timeout modes are no longer selected.
4. Enable only the correctly scoped Submitted subscription, run a fresh positive control and follow its normal approval to native membership. Remove the assignment and disable the subscription.
5. Resolve any pending diagnostic requests with supported administrative actions. Record terminal failures as historical evidence rather than claiming they were repaired by the fresh control.
6. Write the restart procedure: start service, verify endpoint/authentication, test filter, enable subscription, run control, monitor invocations; on failure disable the affected subscription and account for requests.

**Pass when:** The service works, a fresh request works, historical failed requests are accounted for, and the handover explains how to stop the integration without losing track of its work.

**Reset:** Subscriptions disabled unless you deliberately retain a working integration for a later lab. Stop the local service only after disabling its subscriptions. Restore the original request-on-behalf setting captured in the subscriber workbench and verify ordinary requester permissions return.

[Subscriber workbench](../../SUBSCRIBER-WORKBENCH.md)

## Screenshots to capture

1. Subscription inventory and safe final states.
2. Fresh end-to-end recovery control.
3. Affected-request reconciliation and restart procedure.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-068](../AR-068/README.md) · [Course outline](../../README.md) · [Next: AR-070](../AR-070/README.md)
