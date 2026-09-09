# AR-033 · Regression-test the approval service

**Before you start:** AR-032 settings restored after the timed tests, or AR-032 explicitly deferred. Do not cancel a request that you still need to observe: record its next observation time and keep it separate from the fresh controls below.

## Build the acceptance record

1. Create a table for: approve, deny, missing manager, repeated reviewer, reassignment and timeout. Link each to its earlier request ID and native result.
2. Run a fresh Production Support approval as Henry through manager and Security. Prove the target membership, then remove it.
3. Run a fresh denial as Harper. Prove there is no new membership.
4. Open Approval Management and inspect all diagnostic requests from AR-028–032. Resolve or document each one; include its next owner and observation deadline when it remains pending intentionally.
5. Compare saved global and item settings with the current settings. Correct only temporary lab changes. Verify the Security group still contains its intended members.
6. Save C05: owners, group IDs, approval order, effective schedules, request results and any still-open timed evidence.

**Pass when:** The fresh positive and negative requests work, temporary faults are removed, and every approval scenario has either observed evidence or an explicitly incomplete observation. Final timeout acceptance requires the real timed result.

**Challenge:** Give a colleague the journal without the walkthrough and ask them to identify the current escalation owner and distinguish a failed request from an approval still awaiting review.

[Approval administration](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html)

## Screenshots to capture

1. Fresh approval and denial.
2. Clean or intentionally documented diagnostic queue.
3. C05 configuration and results table.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-032](../AR-032/README.md) · [Course outline](../../README.md) · [Next: AR-034](../AR-034/README.md)
