# AR-055 · Approve, deny and cancel through the API

**Before you start:** AR-054. Prepare separate requester and Priya-owned reviewer credentials.

## Use a fresh request for each operation

1. Submit Remote Worker for Taylor with comment `AR-055 approve`. Read Priya's pending approvals and copy the matching approval ID.
2. Send the workbench's approve operation using Priya's token and an approval comment. Verify the decision and both target memberships. Remove the assignment before the next case.
3. Submit `AR-055 deny`, obtain its new approval ID and send the reject operation with a reason. Verify the denied result and absent new membership.
4. Submit `AR-055 cancel` and leave it pending. Read its account activity identifier and cancellation eligibility.
5. As the original requester or authorized admin, send the cancel operation with that activity ID and a reason. Verify the final state and the reviewer's queue.
6. On a read-only inspection of the previously completed request, identify why cancellation is no longer the correct operation. Do not assume cancellation reverses a completed grant.

**Check:** Each operation uses the correct actor, state and identifier, with three separate requests as evidence.

**Reset:** No new Taylor grant or pending control remains. Use removal, not cancellation, for any access already provisioned.

[Approval and cancellation operations](https://developer.sailpoint.com/redoc/sailpoint-api-v3-light.html)

## Screenshots to capture

1. Three sanitized operation bodies and identifiers.
2. Resulting decisions/queue state.
3. Target state for approved, denied and canceled cases.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-054](../AR-054/README.md) · [Course outline](../../README.md) · [Next: AR-056](../AR-056/README.md)
