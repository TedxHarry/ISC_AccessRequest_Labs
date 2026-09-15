# AR-073 · Investigate mixed outcomes in one submission

In this lab, you'll submit a profile and an entitlement together, approve one and deny the other, then explain each item's result.

## Before you start

Complete [AR-072](../AR-072/README.md). Taylor is clean and Remote Worker is back on Priya. Keep the current disposable group from AR-049 and all course developer subscriptions disabled. Use Acme Admin, Taylor, Priya, native AD checks and your [journal](EVIDENCE.md).

## Follow the steps

### 1. Prepare two independent items

1. Verify Taylor lacks VPN, Remote Users and GG-ACME-FAULT-049 and has no pending request for them. Keep disposable test profiles disabled; this exercise requests the entitlement directly.
2. Open **Admin > Access Model > Entitlements**, find GG-ACME-FAULT-049 on the recorded AD source and verify its native value/GUID mapping. Save ISC ID, current owner, requestability and grant/removal settings.
3. Select **Actions > Edit**. Temporarily set primary owner Priya. On Access Requests, mark it requestable, require approval by Primary Owner and add that reviewer. Require a reason. Set removal review to Primary Owner/Priya too, so an accidental grant has an explicit cleanup path. Save/reopen. Keep the global entitlement-request setting from Module 2.
4. Verify Remote Worker still contains only VPN and Remote Users with direct Priya approval. Save `AR-073-01.png` with both item IDs/types and native starting state.

**Check:** The choices have no shared entitlement. Developer preliminary-decision subscriptions stay disabled for this mixed-item exercise.

### 2. Submit one basket and record each item

1. As Taylor, open **Request Center > Access Items > Access Profiles**, select AP-Remote-Worker, enter `AR-073 mixed outcomes - Remote Worker`, leave dates empty and Save. Do not submit yet.
2. Switch to **Entitlements**, select GG-ACME-FAULT-049 on the AD source, enter `AR-073 mixed outcomes - disposable`, choose Taylor's standard account where prompted and Save.
3. Select Review Request. Require exactly those two items with correct types, recipient and account. Submit Request once. Save `AR-073-02.png`.
4. In My Requests, record each item's actual request ID. Open its corresponding approval/activity separately. A shared basket need not produce one shared request ID. Make a table: item ID/type, request ID, approval ID, account, decision, activity and native result.

**Check:** The basket and item identifiers are recorded before either decision.

### 3. Decide each item and inspect AD

1. As Priya, open **Approvals > Access Requests > Requested**. Inspect the disposable entitlement Grant, verify Taylor and its distinct reason, then Deny with `AR-073 disposable access not authorized`. Do not select both items for a bulk decision.
2. Open the separate Remote Worker Grant and Approve with `AR-073 Remote Worker approved`. Verify both decisions in Process/Details.
3. Follow Remote Worker's [Account Activity](../../LAB-DESK.md#find-the-account-activity) until completion. Run [native checks](../../M02-CHECKS.md#inspect-direct-ad-membership): VPN True, Remote Users True, disposable False and baseline False on Taylor's retained account. Save `AR-073-03.png`.
4. Record each request-level status exactly as shown. Use the item decisions and native observations to explain why only approved access appears. A denied item is not a failed connector write requiring retry.

**Check:** The approved item fulfills while the deliberately denied item remains absent.

### 4. Remove the grant and restore settings

1. Follow [Remote Worker removal](../../LAB-DESK.md#remove-a-remote-worker-operations-grant) as Taylor/Priya, reason `AR-073 mixed test complete`. Verify VPN/Remote Users False and assignment absence.
2. Verify disposable membership False. If accidentally approved, record that deviation and use Taylor's **My Access > Entitlements > GG-ACME-FAULT-049 > Assignment > Revoke Assignment**. Verify account, enter `AR-073 accidental grant cleanup` and submit. Have Priya approve Remove, follow the operation and verify native absence before restoring settings.
3. Restore the disposable entitlement's original owner and grant/removal configuration, and mark it non-requestable again. Save/reopen. Confirm all three groups absent, account retained and no pending diagnostic operation. Save `AR-073-04.png`.
4. Compare this deliberate denial with AR-048's saved permission failure. Record which item/account actually failed there and what corrected condition would justify another request. Keep that historical case labelled; do not replay a whole successful basket to investigate one item.

**Check:** Temporary requestability is removed and each outcome has its own resolution.

## Check the result

Both items have separate decision and target evidence. Remote Worker is granted then removed; the denied disposable entitlement stays absent and finishes non-requestable.

## Finish

Keep Priya on Remote Worker, restore the original disposable entitlement settings with requestability off, and leave Taylor clean. Preserve the basket and item records without assuming a single shared request ID.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when a result needs several images. Label historical and synthetic evidence separately from current tenant observations.

| Filename | What to show |
|---|---|
| AR-073-01.png | Two configurations and clean native state |
| AR-073-02.png | Basket with profile and entitlement |
| AR-073-03.png | Separate decisions and mixed native result |
| AR-073-04.png | Removal and restored entitlement settings |

[Previous: AR-072](../AR-072/README.md) · [Course outline](../../README.md) · [Next: AR-074](../AR-074/README.md)
