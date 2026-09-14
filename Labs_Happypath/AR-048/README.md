# AR-048 — Diagnose and repair a group-specific AD permission failure

In this lab, you'll prove a disposable group can be provisioned, deny one membership-write permission, observe the failure and restore the original permission.

## Before you start

Complete [AR-047](../AR-047/README.md). Taylor has a retained AD account and no VPN/Remote Users/baseline membership. Use Acme Taylor, Priya, Acme Admin and an AD administrator who can edit the disposable group’s permissions. You must identify the actual principal used for group writes before injecting the fault. Keep your [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Create and aggregate the disposable group

1. In **Active Directory Users and Computers**, open **AcmeLab > Groups**. First look for the group by its saved GUID/current name if repeating this lab. If it already exists, reuse it and skip creation. Otherwise right-click Groups, choose **New > Group**, enter `GG-ACME-FAULT-048`, select **Global** and **Security**, then **OK**. Use description `Disposable membership-permission lab group`. Keep it empty and unnested.
2. Record its DN and objectGUID using [the native lookup](../../LAB-VALUES.md#read-an-ad-objectguid-and-account-attributes). On a repeat, inspect/reuse this exact lab object. If it has already been renamed in AR-049, use the recorded current object rather than creating a second group with the old name.
3. As ISC administrator, open **Admin > Connections > Sources > your AD source > Entitlement Management > Entitlement Aggregation**, select **Start Aggregation**, and wait for completion. Find the group in Entitlements and record its ISC ID and native value separately.
4. In **Admin > Access Model > Entitlements**, select the current group on the AD source, then **Actions > Edit**. Set Primary Owner to Priya. On **Access Requests**, enable requests, require grant approval with one **Primary Owner** reviewer, and require request/denial comments. Require removal approval with one **Primary Owner** reviewer too. Save and reopen. Leave date/form requirements off on this disposable item.

**Check:** One disposable entitlement is requestable, with Priya reviewing both directions.

### 2. Prove the group works before changing permissions

1. As Taylor, open **Request Center > Access Items > Entitlements**, select the disposable group, enter `AR-048 before-fault control`, keep immediate access and his standard account, then save, review and submit. Record the ID. As Priya, inspect and approve the matching Grant under **Approvals > Access Requests > Requested**.
2. Follow [Account Activity](../../LAB-DESK.md#find-the-account-activity) for Taylor and verify direct membership True using [the AD check](../../M02-CHECKS.md#inspect-direct-ad-membership).
3. As Taylor, open **My Access > Entitlements > disposable group > Assignment**, verify his account, select **Revoke Assignment**, enter `AR-048 control cleanup`, and **Submit Request**. As Priya, inspect and approve the Remove request. Verify membership False and no pending request.
4. In AD Users and Computers, enable **View > Advanced Features**. Open this group's **Properties > Security > Advanced**. Record its owner, inheritance state and permission entries before changing them. Save `AR-048-01.png` with the original permissions and successful control evidence.

**Check:** A successful write/removal establishes the working baseline for this exact group.

### 3. Deny only this group's membership write

1. In ISC, open the AD source's **Forest Settings** and **Domain Settings** for the domain holding this group. Record the configured **Service Account** and any domain-specific override without exposing its password. Check the [connector domain settings](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/domain_settings.html). For gMSA or a different IQService execution context, confirm the effective group-write principal from the connector configuration and your AD administrator; do not guess it from the ISC source-owner name.
2. Return to the disposable group's **Security > Advanced > Add > Select a principal**. Enter that exact service account, select **Check Names**, verify the resolved domain/account and confirm.
3. Set **Type: Deny** and **Applies to: This object only**. Show advanced permissions if necessary. Select only **Write members** (the group's `member` property); do not select Full control, Write all properties, Read members or OU-wide permissions. Keep inheritance unchanged.
4. Review the group DN, selected principal, single denied property and object-only scope before **OK/Apply**. Reopen the entry and save `AR-048-02.png`. This is the one entry you will remove for recovery. If the effective principal or property cannot be confirmed, stop before saving the fault and record the missing information.

**Check:** The fault is restricted to membership writes on the disposable group. Other groups, source credentials and the Groups OU are unchanged.

### 4. Compare the failed request with a working request

1. As Taylor, request the disposable entitlement again with `AR-048 denied member write`. As Priya, inspect and approve that Grant. Record its ID separately from the successful control.
2. As administrator, find the request in **Admin > Dashboard > Approval Management > Access Requests**, inspect its process, then locate Taylor's matching Account Activity and AD operation. Record the actual status and exact permission-related error; do not copy an expected error into the evidence. Verify membership False. Save `AR-048-03.png`.
3. If the membership is added anyway, record **Fault not reproduced**, remove the added deny immediately using Step 5.1, and remove the actual grant through Taylor's My Access/Priya review. Do not widen the deny or change the service account to force failure.
4. With Taylor still free of Remote Worker, submit that profile from **Request Center > Access Items > Access Profiles** with reason `AR-048 independent connector control`. Have Priya approve. Verify VPN and Remote Users True, then revoke the profile from Taylor's **My Access > Access Profiles**, enter `AR-048 control complete`, submit and have Priya approve removal. Verify both groups False. Save `AR-048-04.png`.

**Check:** If the fault reproduced, the disposable-group operation failed while the same connector could update other lab groups. Otherwise retain the observed result as Not reproduced. This narrows the cause; a successful Test Connection alone would not establish write permission.

### 5. Restore the permission before retrying

1. Open the disposable group's **Security > Advanced**. If you already removed the entry in Section 4, verify the original ACL and skip removal here. Otherwise select only the explicit Deny/Write members entry for the principal added in Step 3 and **Remove** it. Apply, reopen and compare all remaining entries and inheritance with the original record. Do not reset the entire security descriptor. Save `AR-048-05.png`.
2. Reopen the failed request and its operation. If a retry is queued, let that original operation reach a final state; do not submit a duplicate while it can still run. SailPoint retries recognized retryable failures, but not every permission error is retryable. Record the actual status and attempts. See [provisioning retries](https://documentation.sailpoint.com/saas/help/provisioning/index.html).
3. If the original request completes after the repair and its membership is still present, verify True and use that result as recovery evidence. If it is finally Failed with no pending retry, or you already removed a successful grant in Section 4, confirm membership False and no active assignment, then submit one new entitlement request with `AR-048 repaired permission control`; have Priya approve and verify the successful operation and membership True. If a retained assignment blocks a fresh request, first refresh imported AD data. Open Taylor's **My Access > Entitlements > group > Assignment**, inspect that exact assignment, and use **Revoke Assignment** with comment `AR-048 clear failed assignment`. Have Priya approve any resulting removal and wait for completion. Verify the assignment is gone and native membership False before the new request. If no removable assignment is offered, retain the request/operation details for investigation and leave recovery incomplete; do not repeatedly submit duplicates or invent a retry control.
4. Remove the recovered grant through Taylor's **My Access > Entitlements > group > Assignment > Revoke Assignment**, enter `AR-048 recovery complete`, submit, and have Priya approve. Verify group membership False, VPN/Remote Users False and Taylor's account unchanged.
5. Turn off **Allow Access Requests** for the disposable entitlement, save and reopen. Keep the group and restored permissions for AR-049. Save `AR-048-06.png` showing recovery, completed removal and final state. If the deny did not reproduce a failure, label the final success a current control, not proof of a repaired failure. Do not move to the rename exercise while any request/retry can still write this group.

**Check:** The precise permission repair restores writes. Historical failed requests may remain Failed even though a fresh request now succeeds.

## Check the result

The journal shows working control, exact group-only fault, actual failed operation, independent successful control, restored permissions and successful recovery/removal. If the fault was not reproduced, record that limitation instead of a passed failure test.

## Finish

Leave no added deny entry, pending write/retry or disposable-group membership. Keep the group non-requestable, its owner/review settings recorded, Taylor’s account retained and the original connector configuration unchanged.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-048-01.png | Original permissions and successful grant/removal |
| AR-048-02.png | Single object-only Deny Write members entry |
| AR-048-03.png | Actual failed operation and absent membership |
| AR-048-04.png | Independent Remote Worker control and cleanup |
| AR-048-05.png | Restored original ACL/inheritance |
| AR-048-06.png | Recovery request, removal and final non-requestability |

[Previous: AR-047](../AR-047/README.md) · [Course outline](../../README.md) · [Next: AR-049](../AR-049/README.md)
