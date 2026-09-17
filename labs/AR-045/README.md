# AR-045 · Remove access from one account and save C07

In this lab, you'll grant VPN to both of Sofia's accounts, remove it from one while preserving the other, then clean up and save the module results.

## Before you start

Complete [AR-044](../AR-044/README.md) and retain Sofia’s two correlated accounts from AR-026. Use Acme Admin, Sofia (`acme.e009`), Priya (`acme.e002`) and the AD workstation. The second account `acme.e009.admin` is an ordinary lab account, not a domain administrator. Keep the [journal](EVIDENCE.md) open.

If you are resuming, check your journal, current assignments and pending requests before submitting again. Resolve the earlier attempt first. If later labs changed these policies, compare their saved settings before restoring the first-pass values below.

## Follow the steps

For each native check, use the same domain controller and account identifiers you recorded at the start. After a grant or removal, wait for its Account Activity to finish successfully before checking AD. If it fails or remains pending, inspect that activity before submitting another request.

### 1. Identify both accounts before requesting

1. As administrator, open **Admin > Identity Management > Identities > Sofia > Accounts**. Confirm two accounts on the same AD source: `acme.e009` in Users and `acme.e009.admin` in AdminAccounts. Record each ISC account ID, account name/ID shown by the source, full DN and native objectGUID using [the value lookup guide](../../LAB-VALUES.md).
2. Run [the direct membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) separately for each username and each group: `GG-VPN-USERS` False on both; `GG-ACME-BASELINE` True only on `acme.e009`. Record both account identifiers and the domain controller in the output. Check Sofia has no pending VPN request or existing VPN assignment on either account.
3. Open **Admin > Access Model > Entitlements > GG-VPN-USERS > Actions > Edit > Access Requests**. Verify the source and Primary Owner/Priya grant and removal policies. Keep date/form settings unchanged. Do not use the Remote Worker profile for this two-account test.
4. Save `AR-045-01.png` showing the two-account starting record. If either account or baseline selection is wrong, complete AR-026's checks before proceeding.

**Check:** Both accounts are distinguishable and clean for a VPN grant.

### 2. Grant VPN to the standard account

1. As Sofia, verify her ISC username and open **Request Center > Access Items > Entitlements**. Select `GG-VPN-USERS` on the recorded AD source.
2. Enter `AR-045 VPN on standard account`, keep immediate access, select **Save > Review Request**, verify one VPN item for Sofia, then select **Submit Request**. When **Select Accounts** appears during submission, select the account whose displayed Account ID/Name matches `acme.e009` and its recorded Users DN. Confirm the choice to finish submission. If the chooser is missing or the account cannot be identified, stop before approving; inspect the submitted request as administrator. Deny a request for the wrong account before retrying.
3. Open **My Requests**, record the request ID and inspect its account selection. As Priya, open the matching Grant under **Approvals > Access Requests > Requested**. Inspect **Details** and confirm the standard account before approving.
4. As administrator, follow [Account Activity](../../LAB-DESK.md#find-the-account-activity), compare the target native identity with the standard DN, and repeat both native VPN checks. Standard must be True; the second account must still be False.

**Check:** Request selection, reviewer details, operation target and native membership all identify the standard account.

### 3. Grant VPN to the second account

1. After the first grant completes, as Sofia request the same entitlement again. Use reason `AR-045 VPN on second test account` and select `acme.e009.admin` in the account-selection step. Verify the AdminAccounts DN/identifier, not just the similar display name.
2. Record the second request ID and its selected account. As Priya, inspect that selection and approve the matching Grant. Follow the operation to the second DN.
3. Verify VPN True on both accounts, while baseline remains True on standard and False on the second. Save `AR-045-02.png` with both account identifiers and results.
4. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data), then reopen Sofia’s **My Access > Entitlements > GG-VPN-USERS**. Inspect the **Assignment** entries and record which belongs to each account. If the second request is rejected or the chooser is absent, inspect the existing assignments and recorded source/account IDs; do not switch to a profile or manually add the AD group to manufacture this result.

**Check:** You have two account-specific grants, not two requests for the same account.

### 4. Remove only the second account's assignment

1. In Sofia's **My Access > Entitlements > GG-VPN-USERS**, select the **Assignment** whose account details match `acme.e009.admin` and the AdminAccounts DN. Save `AR-045-03.png` before submitting removal.
2. Select **Revoke Assignment**, enter `AR-045 remove VPN from acme.e009.admin only`, then **Submit Request**. Record the removal ID.
3. As Priya, open the matching VPN Remove request and verify the second account in its details. If the UI does not identify the target unambiguously, leave the decision pending and inspect the request’s account details as administrator. Approve and confirm only after they match the second account.
4. Follow the removal activity and compare its native target with the second account's grant target. Repeat all four native checks: second VPN=False, standard VPN=True, standard baseline=True, second baseline=False. Save `AR-045-04.png`.

**Check:** Only the selected account lost VPN. The other account's surviving assignment and native membership agree.

### 5. Remove the standard test grant

1. Refresh imported AD data after the second-account removal. As Sofia, reopen **My Access > Entitlements > GG-VPN-USERS** and select the remaining standard-account VPN **Assignment**, verify the Users DN, choose **Revoke Assignment**, enter `AR-045 standard account test complete`, and submit.
2. As Priya, inspect and approve that standard-account Remove request. Follow the activity and verify VPN False on both accounts; baseline stays on standard only.
3. Refresh imported AD data. Reopen Sofia's Accounts and Access. Confirm both accounts remain correlated, no test VPN assignment is left, and the original DNs/GUIDs are unchanged. Save `AR-045-05.png`.

**Check:** Cleanup removed access assignments, not accounts. Both accounts remain available for later labs.

### 6. Save C07 and check the next lab's starting state

1. Complete the [journal](EVIDENCE.md) with the two grant IDs, two removal IDs, account identifiers, decisions and native results. Create a private `C07` folder alongside earlier checkpoints and save this journal, the AR-040–044 journals and their captures there. Keep tenant identifiers and private records outside the public repository.
2. Mark date validation, timed boundaries and both amendment routes as Observed, Failed or Not run. An AR-041 window still being observed makes C07 incomplete; it does not invalidate the completed Sofia test.
3. Confirm Olivia and Alexander have no test business access, the temporary on-behalf mode is restored, and the empty automatic test role/profile are disabled. Run the native check for Lucas (`acme.e012`) and confirm VPN=True. Preserve the Finance segment, all 24 standard baseline accounts and Sofia’s extra account.
4. Before AR-046 reuses Henry, resolve every pending or future Production Support request and assignment from AR-041. Complete the observation/removal, or revoke the future assignment and record the timed exercise as Deferred using AR-041. Verify Henry's native Support False and no pending request.
5. Keep Production Support's required end date/seven-day maximum if AR-040 was completed, and its native form if Module 6 was completed. Record unavailable capabilities rather than claiming those tests passed.

**Check:** C07 identifies both completed evidence and remaining work. The next Henry request can start from a verified clean account.

## Check the result

The second account lost VPN while the standard account retained it, then the standard test grant was removed. Both accounts and baseline selection remain. C07 records actual results and any deferred observations.

## Engineering practice

Use your two grants and two removals to answer a ticket that only says “Sofia still has VPN.” Identify which account the report means, then locate its exact assignment using account ID/DN and native results. If a request targeted the correct account but the operation targeted the other one, retain both IDs as fulfillment evidence. If the request itself selected the wrong account, correct the requested assignment. See [multi-account request and review details](https://developer.sailpoint.com/discuss/t/new-capability-multi-account-support/105600).

## Finish

Keep Sofia’s two accounts, standard-only baseline and no VPN on either. Keep course policies and C07 evidence. Begin AR-046 only after Henry’s old scheduled/pending work is resolved; deferred timed cases stay marked Deferred.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-045-01.png | Two-account identifiers and initial memberships |
| AR-045-02.png | Two granted assignments and native results |
| AR-045-03.png | Removal selection identifying only the second account |
| AR-045-04.png | Second account VPN absent; standard VPN retained |
| AR-045-05.png | Final cleanup and preserved accounts/baseline |

[Previous: AR-044](../AR-044/README.md) · [Course outline](../../README.md) · [Next: AR-046](../AR-046/README.md)
