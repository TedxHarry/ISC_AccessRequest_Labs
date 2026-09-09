# AR-059 · Compare serial and parallel approvals

**Before you start:** AR-058. Use Henry, Ava and Evelyn as distinct people.

## Change the scheme, not the participants

1. Clone WF-Acme-AR058 as `WF-Acme-AR059-Serial`. Change Approval Policy to **Multi-Step > Serial**. Add reviewer **Manager** followed by **Identity (Other): Evelyn**. Save, enable and associate it with Production Support.
2. Submit as Henry. Record the reviewer queues before any decision. Approve as Ava, then inspect Evelyn's queue and approve. Verify target membership and remove the assignment.
3. Clone the serial workflow as `WF-Acme-AR059-Parallel`. Change only the scheme to **Parallel**; preserve the same reviewers. Enable and attach it.
4. Submit a fresh Henry request. Inspect both queues before either person decides. Approve as Ava and verify that one approval alone has not completed an all-reviewers policy. Approve as Evelyn and verify fulfillment. Remove the assignment.
5. Submit a third request and deny as Evelyn. Inspect the final decision and any remaining task state, then verify no new grant.
6. Compare task creation, decision times and completion conditions across the three cases.

**Check:** Serial waits for the preceding stage; parallel presents the reviews together; Multi-Step still requires all required reviewers to approve.

**Reset:** Retain both named workflows and restore Production Support to the AR-058 control association until the next lab selects its test workflow.

[Adaptive Approval schemes](https://documentation.sailpoint.com/saas/help/adaptive_approvals/index.html)

## Screenshots to capture

1. Serial and parallel action settings.
2. Reviewer queues before and after the first decision.
3. Final positive/negative results and target checks.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-058](../AR-058/README.md) · [Course outline](../../README.md) · [Next: AR-060](../AR-060/README.md)
