# AR-060 · Test a quorum with separate reviewers

**Before you start:** AR-059. Use Noah, Evelyn and William as three individual reviewers, not one governance-group entry.

## Predict the threshold

1. Clone the control workflow as `WF-Acme-AR060`. Select **Approval Type: Quorum**, **Parallel**, and **Quorum Approval Percentage: 60**.
2. Add three **Identity (Other)** reviewers: Noah, Evelyn and William. Save, enable and associate with Production Support.
3. Write the prediction: two of three approvals satisfy 60 percent; one denial still leaves two possible approvals.
4. Submit as Henry. Have Noah approve and inspect the pending state. Have Evelyn approve and inspect the resulting decision before William responds. Verify access and remove it.
5. Submit a second request. Have Noah deny, then Evelyn approve. Inspect the remaining possibility and have William approve. Verify the observed result against the prediction and remove any granted assignment.
6. Submit a third request and have two reviewers deny. Record when the threshold becomes unreachable and verify no grant.

**Check:** Your record contains the reviewer count, configured percentage, decision order and actual completion point. Do not call a standard governance-group approval a quorum.

If behavior differs from the documented percentage rule, preserve the action configuration and per-reviewer decisions; do not silently change the threshold to fit the result.

**Reset:** Restore the control workflow association and resolve test requests.

[Quorum behavior](https://documentation.sailpoint.com/saas/help/adaptive_approvals/index.html)

## Screenshots to capture

1. Three individual reviewers and 60 percent threshold.
2. Intermediate and final states for all three cases.
3. Target results and decision-order table.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-059](../AR-059/README.md) · [Course outline](../../README.md) · [Next: AR-061](../AR-061/README.md)
