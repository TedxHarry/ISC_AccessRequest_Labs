# AR-046 · Triage approved-but-missing access

**Before you start:** AR-029 and the removal procedure on the lab desk; C07 is useful but optional feature exercises do not block this lab. Use a clean Henry Production Support request with no future start date, completing any enabled form/end-date requirements.

## Locate the failing boundary

1. Record Henry's initial membership, then submit and approve the request through every configured stage.
2. Open the request in Approval Management. Record whether it is awaiting a decision, scheduled, provisioning, failed or completed. Inspect each item rather than only the request banner.
3. If the request is still pending, identify the assignee and do not change the AD connector. If it is scheduled, compare the requested start time. If provisioning failed, copy the actual operation error into the private journal.
4. Inspect the account activity's source, account and group reference. Compare them with the manifest and Henry's correlated AD account.
5. Check AD on the recorded controller. If membership is present, investigate aggregation/indexing instead of resubmitting. If absent, compare the actual operation result with the current account and group.
6. Write a timeline with the first point where expectation and observation differ. Use AR-048's controlled permission fault next to repeat this method on a known failure.
7. Remove the successful control assignment. If an actual failure remains unresolved, retain its IDs and leave it explicitly open.

**Check:** Your diagnosis identifies a stage and supporting evidence, not just the phrase `provisioning issue`.

[Provisioning tracking](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html)

## Screenshots to capture

1. Request process and item state.
2. Account activity, target account and operation result.
3. Native membership and your boundary-by-boundary timeline.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-045](../AR-045/README.md) · [Course outline](../../README.md) · [Next: AR-047](../AR-047/README.md)
