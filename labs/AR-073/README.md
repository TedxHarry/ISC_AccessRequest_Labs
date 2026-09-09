# AR-073 · Investigate mixed outcomes in one request

**Before you start:** AR-072. Use Taylor and two independent items: Remote Worker and the disposable entitlement from AR-049.

## Avoid treating the whole request as one result

1. Make the disposable entitlement requestable with a primary-owner reviewer. Verify Taylor lacks both test grants.
2. As an authorized requester, add both items to one request and submit with reason `AR-073 mixed outcomes`.
3. Approve Remote Worker and deny the disposable entitlement. Inspect the combined request and each item separately.
4. Check Taylor's AD account. VPN and Remote Users should be present; the denied disposable group should not be newly added.
5. Match each item to its approval and provisioning evidence. Record the request-level label exactly as shown instead of using it to infer every item's result.
6. Remove the granted profile. Mark the disposable entitlement non-requestable again.
7. Use AR-048's saved failed operation as a second case: explain how recovery would target the failed item without resubmitting a successful item from the same business request.

**Check:** Your incident report lists a result and recovery decision for each item/account combination.

**Reset:** Taylor has no new test assignments and the disposable item is hidden.

[Item-level request behavior](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html)

## Screenshots to capture

1. Multi-item submission.
2. Per-item decisions and activities.
3. Mixed native result and cleanup.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-072](../AR-072/README.md) · [Course outline](../../README.md) · [Next: AR-074](../AR-074/README.md)
