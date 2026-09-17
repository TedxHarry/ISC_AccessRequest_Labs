# AR-049 — Repair a profile after its AD group reference changes

In this lab, you'll rename the disposable AD group, compare its native and ISC identifiers, repair a profile reference and prove the current group can be provisioned.

## Before you start

Complete [AR-048](../AR-048/README.md), with permissions restored, no membership and no queued write/retry. Use Acme Admin, Taylor, Priya and the AD workstation. Keep the group’s original DN/GUID and entitlement ID from AR-048 beside your [journal](EVIDENCE.md).

If you are resuming, open your journal and inspect the current assignments, pending requests and retries before making another change. Continue from the first unfinished step; do not repeat a grant that can still complete.

## Follow the steps

Use the same recorded account and verification domain controller for each native comparison. For a working control, wait for the matching source operation to finish successfully, then check AD. For a fault test, record the actual failure and check native membership as directed. Investigate a pending operation before submitting another request.

### 1. Create a profile that uses the original group

Record Taylor’s account DN/GUID and verification controller before the test. Use that controller in AD Users and Computers too: right-click the domain, choose **Change Domain Controller**, and select the recorded controller.

1. On a repeat after the rename, use `GG-ACME-FAULT-049` and its saved GUID throughout; skip the rename in Section 2 and label the earlier before/after evidence historical. Do not create a second group or profile. Verify Taylor is not a member of the recorded disposable group, the group has its original ACL, and its direct entitlement is non-requestable. Use [the native lookup](../../LAB-VALUES.md#read-an-ad-objectguid-and-account-attributes) and [entitlement lookup](../../LAB-VALUES.md#separate-entitlement-ids-from-native-group-values) to record sAMAccountName, full DN, objectGUID, ISC entitlement ID and native value separately.
2. Open **Admin > Access Model > Access Profiles**. If AP-Acme-Reference-Test already exists, edit that profile; otherwise select **Create New**. Enter `AP-Acme-Reference-Test`, description `Disposable group reference validation`, Primary Owner Priya and your AD entitlement source. Save.
3. Under **Manage Entitlements**, inspect the existing selection first. Keep it if it matches the recorded current group. If missing, select that group by source and native value, add it and save. Keep exactly one entitlement.
4. Under **Access Requests**, enable requests, configure one Primary Owner grant reviewer and one Primary Owner removal reviewer, and require request/denial comments. Leave date/form requirements off. Save, enable the profile if disabled, and apply changes from the profile list. Wait for processing and reopen it. Record its ID and saved group reference. Save `AR-049-01.png`.

**Check:** There is now a real saved profile reference to compare after the rename. No request is submitted while changing the native object.

### 2. Rename the AD object without recreating it

1. In AD Users and Computers, locate `GG-ACME-FAULT-048` directly under **AcmeLab > Groups**. Confirm its GUID matches your record.
2. Right-click the group, choose **Rename**, enter `GG-ACME-FAULT-049`, and confirm the rename dialog. Open **Properties > General** and set **Group name (pre-Windows 2000)** to `GG-ACME-FAULT-049` if it did not change automatically. Apply.
3. With Advanced Features enabled, open **Attribute Editor** and record the new distinguishedName, sAMAccountName and objectGUID. The DN/name changed; objectGUID must match the original. Do not delete/recreate the group.
4. On the AD workstation, verify the new name resolves:

```powershell
Import-Module ActiveDirectory -ErrorAction Stop
$LabDC = Read-Host 'Verification domain controller DNS name'
Get-ADGroup -Identity 'GG-ACME-FAULT-049' -Server $LabDC -ErrorAction Stop |
    Select-Object Name,SamAccountName,DistinguishedName,ObjectGUID
```

5. Before manual entitlement aggregation, reopen the ISC entitlement and profile. Record whether they still show the old native reference. If a scheduled aggregation has already updated them, record that timing; do not claim you observed stale data. Save `AR-049-02.png` showing the native before/after and the actual ISC view.

**Check:** You can resolve the new name to the same AD object and identify any stale ISC reference without requesting an uncertain target.

### 3. Aggregate and repair the saved reference

1. Open **Admin > Connections > Sources > AD source > Entitlement Management > Entitlement Aggregation**, select **Start Aggregation** and wait for completion. Record the aggregation ID/time and any errors.
2. In the source's Entitlements, locate the current group by name and native DN. Record its current ISC ID. Check whether ISC updated the prior object, created a different entitlement record or retained an old record. Do not assume the ISC ID must remain unchanged because the AD GUID did.
3. Open **Admin > Access Model > Access Profiles > AP-Acme-Reference-Test > Edit > Manage Entitlements**. If its reference is stale/missing, select the current aggregated group, remove the obsolete selection, and save. If already current, record that no manual reference change was needed. Keep exactly one selected entitlement on the correct source.
4. Recheck the profile's enablement and Access Requests settings. A deleted old entitlement can leave a profile disabled; restore enablement only after the current group is selected. Retain Priya's grant/removal review and save. Apply Changes from the profile list when offered and wait for processing.
5. Keep the current direct entitlement non-requestable; this test requests the profile. If old/current entitlement records coexist, verify neither direct entitlement has become requestable unexpectedly. Save `AR-049-03.png` showing the current profile selection and ID/native value.

**Check:** The profile references the aggregated current object. Editing a display label alone would not repair a stale native value.

### 4. Prove the repaired profile and remove its grant

1. As Taylor, open **Request Center > Access Items > Access Profiles**, select `AP-Acme-Reference-Test`, enter `AR-049 current group reference control`, keep immediate access and his standard account, then save, review and submit. Record the ID.
2. As Priya, open the matching Grant under **Approvals > Access Requests > Requested**, inspect Taylor, profile and reason, approve and confirm.
3. As administrator, locate Taylor's matching Account Activity, open the AD operation and compare its group/native value with the current recorded DN. Verify direct membership in `GG-ACME-FAULT-049` True. Save `AR-049-04.png`.
4. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data), then as Taylor reopen **My Access > Access Profiles > AP-Acme-Reference-Test**, select **Revoke Access Profile**, enter `AR-049 reference test complete`, and **Submit**. As Priya, inspect and approve the removal. Follow its activity and verify membership False.
5. Refresh imported AD data. Compare Taylor’s final DN/GUID with the starting record and confirm the account remains and no reference-test assignment or pending request remains. Disable requestability and then disable `AP-Acme-Reference-Test`; keep its definition and current reference. Keep the direct entitlement non-requestable. Save `AR-049-05.png`.

**Check:** The new request and removal operated on the current native group, and the renamed group remains available for reconciliation exercises.

## Check the result

The AD GUID is unchanged across the rename, native names/DN and ISC IDs are recorded separately, and the current profile reference passes grant/removal. Stale-reference observation is marked unobserved if automatic aggregation updated it first.

## Finish

Keep GG-ACME-FAULT-049 with the original GUID and restored ACL. Keep its direct entitlement non-requestable and AP-Acme-Reference-Test disabled. Leave Taylor without membership and record current identifiers for every later disposable-group lab.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-049-01.png | Original native/ISC identifiers and profile selection |
| AR-049-02.png | AD rename with same GUID and observed ISC reference |
| AR-049-03.png | Aggregated current reference and saved profile |
| AR-049-04.png | Successful current-group request and native membership |
| AR-049-05.png | Removal and retained disabled test definition |

[Previous: AR-048](../AR-048/README.md) · [Course outline](../../README.md) · [Next: AR-050](../AR-050/README.md)
