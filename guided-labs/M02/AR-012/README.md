# AR-012 · Approve the first request and prove the AD change

<a id="goal"></a>

In this lab, you'll approve the request submitted in AR-011, verify the change on Lucas's existing AD account and keep his VPN access for later comparisons.

## Before you start

Keep the [Module 2 starting checks](../../../reference/M02-READINESS.md) beside the current request details.

Complete [AR-011](../AR-011/README.md). Use Acme Priya, Acme Lucas, Acme Admin and the AD workstation. Keep the AR-011 request ID open.

Reopen that request and confirm it is pending with Priya, for Lucas and the VPN entitlement, with immediate access. If it expired, completed or changed reviewer while you were away, inspect its current stage before submitting or deciding anything else.

If you are returning after a break, read [where to resume](../../../troubleshooting/M02.md#ar-012) before changing settings or submitting a request.

## Follow the steps

<a id="1-capture-the-target-before-approval"></a>

### 1. Check the target before approval

1. Run the [direct membership check](../../../reference/M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e012` and `GG-VPN-USERS`.
2. Use the same domain controller as AR-010. Record the account DN, objectGUID and result.
3. Confirm VPN membership is absent and Lucas's baseline group is retained.

**Check:** The pending request has not granted VPN. If VPN already exists, identify its assignment before using this as evidence of a new grant.

<!-- AUTHOR_SCREENSHOT_START: AR-012-01 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-012-01.png`
>
> **Show:** Pending request and native before state.

> **Numbered annotations:** 1. The pending request and recipient; 2. the matching native account/group; 3. absence before approval. Use separate panels if needed.

<!-- AUTHOR_SCREENSHOT_END: AR-012-01 -->

### 2. Approve as Priya

1. Switch to Acme Priya and verify `acme.e002` in the user menu.
2. Open **Approvals > Access Requests > Requested**.
3. Open the recorded Lucas request. Confirm the **Grant** action, VPN item, recipient and `AR-011` reason. If the account is not shown here, verify its DN in administrator request details.
4. Select **Approve** and complete the confirmation and any authentication required by your configured policy.
5. Open **Reviewed**, find the same request and record the decision and displayed time zone.

**Check:** Priya's decision is recorded for the correct Grant request. You have proved the decision; next check fulfillment.

<!-- AUTHOR_SCREENSHOT_START: AR-012-02 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-012-02.png`
>
> **Show:** Priya reviewed decision and time.

> **Numbered annotations:** 1. Priya's signed-in identity; 2. the matching reviewed item and decision; 3. the displayed decision time/time zone.

<!-- AUTHOR_SCREENSHOT_END: AR-012-02 -->

### 3. Follow fulfillment in ISC

1. Switch to Acme Lucas. Open **Request Center > My Requests** and reopen the request. Record its approval and fulfillment state separately.
2. Switch to Acme Admin. Open **Admin > Dashboard > Approval Management > Access Requests**, locate the same recipient/item/time and inspect **Process**.
3. Open the related account activity if the request links to it. Otherwise open **Search > Account Activity** and run `recipient.name:acme.e012 AND sources:"YOUR-AD-SOURCE-NAME" AND action:"Access Request"`, replacing the source placeholder with the exact recorded AD source name. Use Priya's approval time and the request submission time to select the correct row. If the action-filtered query returns no row, remove only `AND action:"Access Request"` and search again.
4. Open the activity, select the AD source entry, and record its ID or tracking number, account/native identity, VPN membership operation, status and any error or warning. Request and activity IDs are separate references. See [Find the Account Activity](../../../reference/LAB-DESK.md#find-the-account-activity).
5. Wait for the operation to finish. If still pending, reopen this activity rather than submitting another request.

**Check:** The request and successful VPN membership operation can be connected by recipient, source, account, group and time. If the operation failed, keep this lab incomplete and inspect the exact error before retrying.

<!-- AUTHOR_SCREENSHOT_START: AR-012-03 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-012-03.png`
>
> **Show:** Request process and account activity.

> **Numbered annotations:** 1. The matching request reference; 2. the actual account/group operation; 3. its status or error. Label only fields visible in your tenant.

<!-- AUTHOR_SCREENSHOT_END: AR-012-03 -->

### 4. Prove the native change

1. Repeat the AD check for Lucas and VPN on the same controller.
2. Confirm **DirectMember = True** for the recorded group DN.
3. Compare the account DN and objectGUID with Section 1. Both must identify the same account.
4. Check `GG-ACME-BASELINE` as well. Baseline membership must remain.

**Check:** VPN was added to Lucas's existing standard account; no second account was required.

<!-- AUTHOR_SCREENSHOT_START: AR-012-04 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-012-04.png`
>
> **Show:** Native VPN membership and unchanged account.

> **Numbered annotations:** 1. The same native account identifier; 2. the exact VPN group; 3. observed membership after fulfillment.

<!-- AUTHOR_SCREENSHOT_END: AR-012-04 -->

<a id="5-compare-the-imported-account-and-save-the-timeline"></a>

### 5. Compare the imported account and request timing

1. As administrator, open **Admin > Identity Management > Identities**, find Lucas and open **Accounts > AD account**.
2. Compare imported group membership with the native result. Also inspect **Access** for the requested entitlement.
3. If imported data is older than the write, follow [Refresh imported AD data](../../../reference/M02-CHECKS.md#refresh-imported-ad-data). Wait for aggregation/processing before comparing again.
4. Connect submission, Priya's decision, the account operation and the target check. Record displayed timestamps and time zones rather than assuming every view uses the same zone.

**Check:** Native and imported membership agree, with an evidence trail back to the request.

<!-- AUTHOR_SCREENSHOT_START: AR-012-05 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-012-05.png`
>
> **Show:** Reconciled ISC account and Access.

<!-- AUTHOR_SCREENSHOT_END: AR-012-05 -->

## Check the result

### Final verification

- [ ] The AR-011 request is matched to Priya's decision.
- [ ] The VPN membership operation completed successfully.
- [ ] Native VPN membership is present on Lucas's original account.
- [ ] Baseline membership remains and imported data agrees.
- [ ] No unexplained pending or failed operation remains.

## Finish

### Leave this in place

Keep Lucas's directly requested VPN and baseline assignments. AR-013 uses Olivia for denial so Lucas's successful grant remains available as a comparison.

[Reviewing access](https://documentation.sailpoint.com/saas/user-help/approvals/reviewing_access.html) · [Provisioning tracking](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html)
