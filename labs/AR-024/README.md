# AR-024 · Separate requester visibility from recipient eligibility

**Before you start:** AR-023 with everyone-for-anyone enabled. Finance segment remains enabled.

## Test the business boundary

1. As Lucas, start a request for `AP-Finance-Reporting` on behalf of Liam. Confirm Lucas is the requester and Liam is the recipient.
2. Submit with reason `AR-024: Recipient eligibility test; reviewer must deny this case`.
3. As Daniel, inspect the actual approval recipient details. Verify that the item was visible to Lucas even though Liam is outside Finance.
4. Deny the request with `Recipient is not eligible for Finance access`. Verify Liam gains no Finance Reporting membership.
5. As Liam, search for the same Finance item. Compare his own catalog visibility with the request Lucas submitted for him.
6. Write the enforcement requirement: the decision process must inspect the requested-for identity's department. Retain this case for AR-061, where you implement that check in a workflow.
7. Restore the original request-on-behalf setting saved in AR-023 and verify the intended actor permissions return.

**Check:** You demonstrate that a visible item can be requested for an authorized recipient outside the requester's segment, and that a deliberate review prevented this test grant.

**Reset:** No Finance assignment remains for Liam. Do not describe the manual denial as automated eligibility enforcement.

[Requester-based segment scope](https://documentation.sailpoint.com/saas/help/requests/segments.html)

## Screenshots to capture

1. Lucas requesting for Liam.
2. Reviewer details with the distinct requester and recipient.
3. Denial, absent Finance membership and restored request authority.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-023](../AR-023/README.md) · [Course outline](../../README.md) · [Next: AR-025](../AR-025/README.md)
