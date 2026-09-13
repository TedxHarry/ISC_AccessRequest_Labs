# AR-049 · Investigate a changed native group reference

**Before you start:** AR-048. Use only the disposable group from that lab, with no remaining assignments.

## Compare object identity with its name

1. Use the [native AD lookup](../../LAB-VALUES.md#read-an-ad-objectguid-and-account-attributes) for `GG-ACME-FAULT-048` and the [entitlement lookup](../../LAB-VALUES.md#separate-entitlement-ids-from-native-group-values) to record objectGUID, DN, ISC entitlement ID and native value separately.
2. In AD Users and Computers > AcmeLab > Groups, right-click `GG-ACME-FAULT-048`, select **Rename**, enter `GG-ACME-FAULT-049`, and confirm the rename dialog. Open its **Properties > General** and check **Group name (pre-Windows 2000)**, which stores sAMAccountName. Set that field to `GG-ACME-FAULT-049` if needed and select Apply. Record both names, its new DN and unchanged objectGUID. Confirm `Get-ADGroup -Identity 'GG-ACME-FAULT-049'` resolves the intended object before later labs use that identifier.
3. Before aggregating entitlements, inspect ISC's saved entitlement value and compare it with AD. Capture the mismatch without submitting a request against an uncertain target.
4. Run entitlement aggregation and inspect the resulting ISC object by ID and value. Record whether the connector updated the existing object or represented the change differently.
5. Inspect any profile using the old reference. Repair the profile's selected entitlement if required, using the aggregated current object rather than typing a DN into an ID field.
6. Make the current disposable entitlement requestable, request it for Taylor and approve. Verify the actual group membership. Then open **Search > Account Activity** and run `recipient.name:acme.e025 AND sources:"YOUR-AD-SOURCE-NAME" AND action:"Access Request"`, replace the source placeholder, and use this request's time to open the matching activity and inspect the current group/native value used by the AD source operation. See [Find the Account Activity](../../LAB-DESK.md#find-the-account-activity).
7. Remove the test assignment, mark the item non-requestable and retain the group under its new name.

**Check:** You can explain the relationship between display name, native DN, immutable AD GUID and ISC entitlement ID. A recreated group with the same name would be a different native object; this lab does not delete/recreate a group merely to demonstrate that fact.

**Reset:** No disposable group assignment remains. Keep the actual current name/ID in the manifest.

[Entitlement aggregation](https://documentation.sailpoint.com/saas/help/loading_entitlements/aggregating_entitlements.html)

## Screenshots to capture

1. Before/after AD DN and GUID.
2. ISC reference before and after aggregation.
3. Successful request against the current object.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-048](../AR-048/README.md) · [Course outline](../../README.md) · [Next: AR-050](../AR-050/README.md)
