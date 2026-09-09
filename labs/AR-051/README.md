# AR-051 · Resolve a fulfillment incident from evidence

**Before you start:** AR-050. Use saved failures from AR-048–050 and a fresh control.

## Work the incident

1. Open the failed permission request from AR-048. Identify recipient, group, selected account, decision time and operation error.
2. Compare the group's current permissions with the recorded fault. Explain whether the old request's status describes the current connector health.
3. Open AR-049's reference comparison and AR-050's drift evidence. For each, state whether the fault was routing, provisioning or reconciliation.
4. Submit one clean Remote Worker request for Taylor. Approve, inspect the operation and verify target membership.
5. Remove that assignment and verify removal. Confirm the disposable group ACL and account state remain restored.
6. Write an incident record with symptom, timeline, evidence, root cause, repair and validation. Include one misleading observation and why it did not establish the cause.

**Pass when:** Another engineer can identify the failing operation from your report and repeat the narrow repair without resetting the AD source or deleting an identity.

**Challenge:** Have a partner choose one of the controlled group/aggregation faults and provide only the user report. Follow AR-046's stage checks before making changes.

[Provisioning tracking](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html)

## Screenshots to capture

1. Historical error and current configuration comparison.
2. Fresh positive request and native result.
3. Completed incident record and final reset.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-050](../AR-050/README.md) · [Course outline](../../README.md) · [Next: AR-052](../AR-052/README.md)
