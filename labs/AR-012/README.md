# AR-012 · Approve the first request and prove the AD change

**Before you start:** Use the pending request from AR-011.

## Follow the request to the account

1. Run the lab desk membership check for `acme.e012` and `GG-VPN-USERS`. Save the before result. If Lucas already has VPN from another assignment, identify that path before using this request to prove a new grant.
2. In Priya's session, open the recorded request. Confirm Lucas, VPN, the AD account and the reason. Approve it.
3. In Lucas's My Requests, refresh that request and inspect its process. Record approval and fulfillment separately, including timestamps.
4. As administrator, inspect the matching provisioning/account activity. Record the AD account, group operation and any error text.
5. Run the same AD membership check against the same controller. Lucas must now be a direct member of the VPN group.
6. Open **Admin > Identity Management > Identities**, select Lucas, then inspect his **Accounts > AD account** and **Access** tabs. If the target has changed but the account data is stale, aggregate accounts and wait for processing before comparing again.
7. Explain the sequence in your journal: the configured owner became the reviewer, her decision allowed fulfillment, and the connector changed the existing account.

**Check:** One request can be connected to Priya's approval, the actual operation and Lucas's AD membership. No second AD account was created.

If the request is approved but membership is absent, inspect the operation before resubmitting. Capture the failure for AR-046; a second request will not repair a connector problem.

**Leave for later:** Keep Lucas's VPN assignment. Later labs deliberately compare existing access and overlapping grants.

[Provisioning tracking](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html)

## Screenshots to capture

1. Priya's decision and request ID.
2. Provisioning activity and account reference.
3. Native AD membership and ISC account access after processing.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-011](../AR-011/README.md) · [Course outline](../../README.md) · [Next: AR-013](../AR-013/README.md)
