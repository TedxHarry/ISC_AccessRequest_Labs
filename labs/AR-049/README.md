# AR-049 · Investigate a changed native group reference

**Before you start:** AR-048. Use only the disposable group from that lab, with no remaining assignments.

## Compare object identity with its name

1. Record GG-ACME-FAULT-048's objectGUID, DN and ISC entitlement ID/value.
2. Rename the AD group to `GG-ACME-FAULT-049` in AD Users and Computers. Record its new DN and unchanged objectGUID.
3. Before aggregating entitlements, inspect ISC's saved entitlement value and compare it with AD. Capture the mismatch without submitting a request against an uncertain target.
4. Run entitlement aggregation and inspect the resulting ISC object by ID and value. Record whether the connector updated the existing object or represented the change differently.
5. Inspect any profile using the old reference. Repair the profile's selected entitlement if required, using the aggregated current object rather than typing a DN into an ID field.
6. Make the current disposable entitlement requestable, request it for Taylor and approve. Verify the actual group membership and account activity.
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
