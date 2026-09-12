# AR-050 · Reconcile AD and ISC after an out-of-band change

**Before you start:** AR-049. Taylor has no assignment to the disposable group.

## Introduce target-side drift

1. Record Taylor's ISC account entitlements and AD membership in GG-ACME-FAULT-049.
2. In AD Users and Computers add only Taylor to that group. Record this as a manual target-side change, not an ISC request.
3. Immediately inspect Taylor's ISC account and Search. Save any difference from AD with timestamps.
4. Run AD account aggregation. Inspect aggregation history, then Taylor's account after processing. Search again after indexing catches up.
5. Record where the native membership first became visible. Do not invent an Access Request ID for this manual change.
6. Remove Taylor manually from this same group, aggregate again and verify ISC returns to the starting state.

**Check:** You distinguish the target change, account aggregation, identity processing and Search visibility. An indexed result is not always a live read of AD.

If the aggregate does not detect the change, inspect the account scope and aggregation options from AR-003/004 before repeating. Use the unoptimized request in AR-004 when unchanged records need reprocessing; its disableOptimization flag applies only to that request.

**Reset:** Taylor absent from the disposable group in both systems. The group stays non-requestable.

[Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html)

## Screenshots to capture

1. Manual AD change and initially stale ISC account.
2. Aggregation result and refreshed account.
3. Final reconciliation after manual removal.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-049](../AR-049/README.md) · [Course outline](../../README.md) · [Next: AR-051](../AR-051/README.md)
