# AR-037 · Trace form answers through a multi-item request

**Before you start:** AR-036. Save the form association on `AP-Remote-Worker`; it will be changed temporarily.

## Keep each item's answers separate

1. Attach FORM-Acme-Production-Support to AP-Remote-Worker as well as Production Support. Save both items.
2. As Henry, add both profiles to one request. Complete the form with `CHG-LAB-037-A` for one item, then inspect the other form instance. Record any copied values before editing.
3. Set the second item's ticket to `CHG-LAB-037-B`. Review the two item summaries before submitting once.
4. In each assigned reviewer's session, find the corresponding item. Record its item name and ticket value. Deny Remote Worker and approve Production Support through its required stages.
5. Inspect the item-level request outcomes and Production Support activity. Verify only the approved item's intended new membership is granted.
6. Inspect available activity/plan details for the submitted form context. Do not claim a Change ticket value becomes an AD attribute without a separately configured mapping and verified target change.

**Check:** Answers and decisions can be traced to the correct item, even when the same form is reused in one request.

**Reset:** Restore Remote Worker's original form association. Remove Henry's Production Support test assignment; preserve any memberships that existed before this request.

[Native form behavior](https://developer.sailpoint.com/discuss/t/new-capability-forms-for-access-request/217255)

## Screenshots to capture

1. Two item summaries with distinct ticket values.
2. Per-item reviewer answers and decisions.
3. Item-level outcomes and target-state comparison.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-036](../AR-036/README.md) · [Course outline](../../README.md) · [Next: AR-038](../AR-038/README.md)
