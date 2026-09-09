# AR-012 · Approve the first request and prove the AD change

## Goal

Approve the request you submitted in AR-011 and follow it through to Lucas's existing AD account. Keep the resulting VPN access for later comparisons.

Keep the [Module 2 starting checks](../../M02-READINESS.md) beside your journal.

## Before you start

Complete [AR-011](../AR-011/README.md). Use Acme Priya, Acme Lucas, Acme Admin and the AD workstation. Keep the AR-011 request ID and your [journal](EVIDENCE.md) open.

Reopen that request and confirm it is pending with Priya, for Lucas and the VPN entitlement, with immediate access. If it expired, completed or changed reviewer while you were away, inspect its current stage before submitting or deciding anything else.

## 1. Capture the target before approval

1. Run the [direct membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e012` and `GG-VPN-USERS`.
2. Use the same domain controller as AR-010. Record the account DN, objectGUID and result.
3. Confirm VPN membership is absent and Lucas's baseline group is retained.

**Check:** The pending request has not granted VPN. If VPN already exists, identify its assignment before using this as evidence of a new grant.

**Screenshot:** `AR-012-01.png`: pending request and native before state.

## 2. Approve as Priya

1. Switch to Acme Priya and verify `acme.e002` in the user menu.
2. Open **Approvals > Access Requests > Requested**.
3. Open the recorded Lucas request. Confirm the **Grant** action, VPN item, recipient and `AR-011` reason. If the account is not shown here, verify its DN in administrator request details.
4. Select **Approve** and complete the confirmation and any authentication required by your configured policy.
5. Open **Reviewed**, find the same request and record the decision and displayed time zone.

**Check:** Priya's decision is recorded for the correct Grant request. You have proved the decision; next check fulfillment.

**Screenshot:** `AR-012-02.png`: Priya's reviewed decision and time.

## 3. Follow fulfillment in ISC

1. Switch to Acme Lucas. Open **Request Center > My Requests** and reopen the request. Record its approval and fulfillment state separately.
2. Switch to Acme Admin. Open **Admin > Dashboard > Approval Management > Access Requests**, locate the same recipient/item/time and inspect **Process**.
3. Open the related account activity if linked. Otherwise open **Search > Account Activity** and match Lucas, the AD source, operation time and VPN group value.
4. Open the activity details. Record its ID, account DN, membership operation, status and any error. Request and activity IDs are separate references.
5. Wait for the operation to finish. If still pending, reopen this activity rather than submitting another request.

**Check:** The request and successful VPN membership operation can be connected by recipient, source, account, group and time. If the operation failed, keep this lab incomplete and inspect the exact error before retrying.

**Screenshot:** `AR-012-03.png`: request process and matching account activity.

## 4. Prove the native change

1. Repeat the AD check for Lucas and VPN on the same controller.
2. Confirm **DirectMember = True** for the recorded group DN.
3. Compare the account DN and objectGUID with Section 1. Both must identify the same account.
4. Check `GG-ACME-BASELINE` as well. Baseline membership must remain.

**Check:** VPN was added to Lucas's existing standard account; no second account was required.

**Screenshot:** `AR-012-04.png`: native membership and unchanged identifiers.

## 5. Compare the imported account and save the timeline

1. As administrator, open **Admin > Identity Management > Identities**, find Lucas and open **Accounts > AD account**.
2. Compare imported group membership with the native result. Also inspect **Access** for the requested entitlement.
3. If imported data is older than the write, follow [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data). Wait for aggregation/processing before comparing again.
4. In your journal, connect submission, Priya's decision, the account operation and the target check. Record displayed timestamps and time zones rather than assuming every view uses the same zone.

**Check:** Native and imported membership agree, with an evidence trail back to the request.

**Screenshot:** `AR-012-05.png`: reconciled ISC account and Access view.

## If the result differs

An approval with no membership needs investigation of the current process stage, start date and account operation. A successful native write with old imported data needs a reconciliation check. Do not manually add the group or submit a duplicate to make the result appear complete.

## Explain the result

Point to the evidence that proves the decision, the write and the unchanged account identity. Explain why the approval screenshot alone would not prove all three.

## Final verification

- [ ] The AR-011 request is matched to Priya's decision.
- [ ] The VPN membership operation completed successfully.
- [ ] Native VPN membership is present on Lucas's original account.
- [ ] Baseline membership remains and imported data agrees.
- [ ] No unexplained pending or failed operation remains.

## Leave this in place

Keep Lucas's directly requested VPN and baseline assignments. AR-013 uses Olivia for denial so Lucas's successful grant remains available as a comparison.

[Reviewing access](https://documentation.sailpoint.com/saas/user-help/approvals/reviewing_access.html) · [Provisioning tracking](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html)

## Screenshots to capture

Capture these at the matching steps. Use extra images when needed to show all evidence. Exclude credentials, invitation links and private mailbox details.

| Filename | What to show |
|---|---|
| AR-012-01.png | Pending request and native before state |
| AR-012-02.png | Priya reviewed decision and time |
| AR-012-03.png | Request process and account activity |
| AR-012-04.png | Native VPN membership and unchanged account |
| AR-012-05.png | Reconciled ISC account and Access |

[Previous: AR-011](../AR-011/README.md) · [Lab index](../README.md) · [Next: AR-013](../AR-013/README.md)
