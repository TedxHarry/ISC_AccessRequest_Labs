# AR-050 — Reconcile AD and ISC after a manual group change

In this lab, you'll add and remove Taylor directly in AD, then follow each change into ISC through account aggregation.

## Before you start

Complete [AR-049](../AR-049/README.md). Keep Taylor's existing account, GG-ACME-FAULT-049 with its restored permissions, its direct entitlement non-requestable and AP-Acme-Reference-Test disabled. Taylor must have no membership or pending request for that group. Use Acme Admin and the AD workstation. Open your [journal](EVIDENCE.md).

## Follow the steps

### 1. Record the same account in AD and ISC

1. Run [the native membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e025` and `GG-ACME-FAULT-049`. Record the controller, account DN/GUID, group DN and False result. An error is not evidence of absence.
2. As administrator, open **Admin > Identity Management > Identities > Taylor > Accounts**, select the AD account matching that DN, and inspect its imported group-membership attribute. Record the account ID and whether the current group DN appears. Open **Access > Entitlements** and inspect the same source/group separately.
3. Verify the direct entitlement is non-requestable and the reference-test profile disabled. Check Taylor has no requested assignment or automatic role that requires this group. Resolve any pending grant/removal before proceeding.
4. Record the last AD account aggregation from **Admin > Connections > Sources > AD source > Account Management > Account Aggregation > Aggregation History**. Save `AR-050-01.png` with the starting views.

**Check:** Both views start without this membership. You are about to make a native change, not submit an access request.

### 2. Add Taylor directly to the disposable group

1. In AD Users and Computers, connect to the verification controller: right-click the domain, select **Change Domain Controller**, choose the controller recorded above and confirm.
2. Open **AcmeLab > Groups > GG-ACME-FAULT-049 > Properties > Members > Add**. Enter `acme.e025`, select **Check Names**, verify Taylor's account/domain, then **OK > Apply**. Do not add the baseline group or nest another group.
3. Rerun the native membership check against that controller. Record True and the time. Save the group Members view and native result as `AR-050-02.png`.
4. Before starting a manual aggregation, reopen Taylor's imported AD account and Access view in ISC. Record what each actually shows and the observation time. If a scheduled aggregation already imported the change, record that result; a visible delay is not required to complete this lab.

**Check:** AD now contains the direct membership. The change has no ISC access-request ID because you made it in AD.

### 3. Import the membership and compare the views

1. Open the AD source's **Account Management > Account Aggregation**, select **Start Aggregation**, and wait for the run to finish. In **Aggregation History**, open that run and record its time, status, account counts and any errors. Use account aggregation here; entitlement aggregation alone does not refresh Taylor's account memberships.
2. Reopen **Admin > Identity Management > Identities > Taylor > Accounts > matching AD account**. Inspect the imported group attribute for the current `GG-ACME-FAULT-049` DN. Then inspect **Access > Entitlements** for that source/group. Record the first time each view shows the addition.
3. Open **Search**, select **Identities**, search `name:acme.e025`, and open Taylor's result. Compare its access information with the identity administration view. Search can reflect the change later; record actual observations rather than assigning a fixed delay.
4. If the native membership is present but the account attribute is missing after a successful run, compare the source's configured controller/domain, account search scope and membership search scope with the values saved in [AR-003](../AR-003/README.md). Verify the configured controller can read Taylor and the current group. If different controllers return different membership, investigate replication before changing scope.
5. If the imported attribute is correct but Access or Search is behind, allow identity processing/indexing to finish and reopen the views. Preserve the run ID and observations if they remain inconsistent. Do not change correlation or repeatedly submit requests to repair a display delay. Save `AR-050-03.png`.

**Check:** The account's imported membership and identity access eventually reflect the native addition. A failed or still-inconsistent import stays open for investigation. See [account aggregation and history](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html).

### 4. Remove the native change and reconcile again

1. In AD Users and Computers on the same controller, open **GG-ACME-FAULT-049 > Properties > Members**. Select only Taylor's `acme.e025` entry, choose **Remove**, confirm and **Apply**. Keep the account and group.
2. Run the native check again and record False. Repeat the account aggregation and history checks from Section 3.
3. Reopen Taylor's imported account, Access and Search result. Verify the current group membership disappears. Record the separate native-removal, aggregation and observed-view times. Save `AR-050-04.png`.
4. Confirm Taylor has no VPN, Remote Users or baseline membership and retains the same account DN/GUID. Keep the group non-requestable and reference-test profile disabled.

**Check:** Both the addition and removal reached ISC through reconciliation. Neither was an ISC request or approval.

## Check the result

Your evidence shows native False → True → False, the corresponding account aggregations, and the final imported absence. Record whether you actually observed a stale view; do not invent a delay or access-request record.

## Finish

Leave Taylor out of GG-ACME-FAULT-049, VPN, Remote Users and baseline. Keep the account, restored group permissions, current group identifiers and disabled reference-test profile. Preserve the complete private HR file with Taylor.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-050-01.png | Initial native and imported absence |
| AR-050-02.png | Manual AD addition and immediate ISC observation |
| AR-050-03.png | Completed account aggregation and imported membership |
| AR-050-04.png | Manual removal, second aggregation and final absence |

[Previous: AR-049](../AR-049/README.md) · [Course outline](../../README.md) · [Next: AR-051](../AR-051/README.md)
