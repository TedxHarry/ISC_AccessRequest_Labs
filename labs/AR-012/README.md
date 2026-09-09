# AR-012 · Approve the first request and prove the AD change

**Before you start:** Use the pending request from AR-011.

Priya's decision is one part of the result. Keep her session, Lucas's session, the administrator session and the AD workstation available. Confirm the AR-011 request is still pending with Priya, for the correct item/account, with immediate access. If its status changed while you were away, inspect it before taking another action.

## Follow the request to the account

1. Run the lab desk membership check for `acme.e012` and `GG-VPN-USERS`. Save the before result, account DN and objectGUID as `AR-012-01.png`. Use the same controller as AR-010. If Lucas already has VPN from another assignment, identify that path before using this request to prove a new grant.
2. In Priya's session, open the recorded request. Confirm Lucas, VPN, the AD account and the reason. Check it is a **Grant** request. If the reviewer view omits the account, verify it in administrator details. Approve it, complete any required confirmation, then retain the decision from Priya's **Reviewed** tab as `AR-012-02.png`. Do not use an administrator override.
3. In Lucas's My Requests, refresh that request and inspect its process. Record approval and fulfillment separately, including timestamps.
4. As administrator, open the request under **Admin > Dashboard > Approval Management > Access Requests** and inspect **Process**. Open linked account activity if available; otherwise use **Search > Account Activity** and match Lucas, the AD source, operation time and group value. Record each relevant activity ID, the AD account, group operation and any error text. Request, approval and account-activity IDs are separate references. Capture the activity as `AR-012-03.png`.
5. Run the same AD membership check against the same controller. Lucas must now be a direct member of the VPN group. Confirm the account DN and objectGUID are unchanged; capture these results as `AR-012-04.png`.
6. Open **Admin > Identity Management > Identities**, select Lucas, then inspect his **Accounts > AD account** and **Access** tabs. If the target has changed but the account data is stale, follow AR-003's account aggregation steps and wait for processing before comparing again. Capture the reconciled ISC result as `AR-012-05.png`.
7. Build a timeline with the displayed timestamps and time zones. Explain the sequence in your journal: the configured owner became the reviewer, her decision allowed fulfillment, and the connector changed the existing account.

**Check:** One request can be connected to Priya's approval, the actual operation and Lucas's AD membership. No second AD account was created.

If the request is approved but membership is absent, inspect the operation before resubmitting. Keep this lab incomplete until the failed operation is resolved and the target is verified. AR-046 offers later investigation practice; it is not a reason to skip this prerequisite. Check a remaining approval or future start date before calling it a connector failure. Inspect actual target state and running operations before using any available supported retry.

**Leave for later:** Keep Lucas's VPN assignment. Later labs deliberately compare existing access and overlapping grants.

[Provisioning tracking](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html)

## Your ticket: approved, but ISC still looks unchanged

Supplied case: AD shows Lucas in VPN with the same objectGUID, while the last imported account data predates the write. Explain your next check and the evidence needed to close the ticket.

<details>
<summary>Compare your answer with the mentor's solution</summary>

Match the source, account and group DN, then aggregate and inspect processing. Compare the imported membership again. The target write has evidence; reconciliation is the remaining check. Do not manually add the group or submit another grant. Closure needs the linked request/activity and matching native and imported results.

</details>

## If you repeat this lab

Keep Lucas's requested VPN assignment. Inspect its history and current native membership. Label decision evidence historical if you did not perform it again. If the request is unresolved, resume its current stage rather than blindly replacing it. A different controller result calls for a replication check before changing ISC.

## What to leave in place

| Item | Required state |
|---|---|
| Lucas | Same standard account; baseline and directly requested VPN retained |
| Evidence | Submission, Priya's decision, operation and native result linked |
| Grant | No unexplained pending or failed operation |

## Completion checklist

- [ ] The approved request, provisioning and direct native VPN membership agree.
- [ ] Your ticket diagnosis and comparison are recorded before checking the solution.
- [ ] Actual tenant observations are distinguished from the supplied ticket case.
- [ ] Pending requests are accounted for and the retained state matches the next lab.

Record results in your [evidence journal](EVIDENCE.md). Keep the [lab desk](../../LAB-DESK.md) open for native verification.

## Screenshots to capture

Capture these at the matching steps above. Use extra images when one view cannot show everything. Keep secrets and personal mailbox details out of shared images.

| Filename | What to show |
|---|---|
| AR-012-01.png | Pending request and native before state |
| AR-012-02.png | Priya decision and time |
| AR-012-03.png | Matching account activity, operation and status |
| AR-012-04.png | Native VPN membership and same account identifiers |
| AR-012-05.png | Reconciled ISC account/access |

[Previous: AR-011](../AR-011/README.md) · [Course outline](../../README.md) · [Next: AR-013](../AR-013/README.md)
