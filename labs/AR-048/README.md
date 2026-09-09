# AR-048 · Diagnose a group-specific AD permission failure

**Before you start:** AR-047. Use an AD lab administrator and the connector's actual service principal. Keep its account credentials unchanged.

## Isolate the fault to a disposable group

1. In AcmeLab/Groups create a Global Security group `GG-ACME-FAULT-048`. Aggregate entitlements and make only this group requestable with Priya as owner/reviewer.
2. In AD Users and Computers enable **View > Advanced Features**. Open this group's **Security > Advanced** and save screenshots of the original ACL and inheritance.
3. Add a permission entry for the connector service principal, applying to **This object only**, that denies writing the group's `member` property. Do not change the Groups OU ACL or any other group. Verify the selected principal and property before saving.
4. Request this entitlement for Taylor using authorized request-for-others access, then approve. Inspect the failed group-modification activity and absent membership.
5. Run a known-good request to a separate business group. Compare the results to establish that the connector can still operate elsewhere.
6. Remove only the explicit deny entry created in step 3 and verify the original ACL is restored.
7. Inspect the failed request's retry state. Use a supported retry only if offered and eligible; otherwise wait for its final state, then submit one fresh control. Verify successful membership after recovery.

**Check:** The error is confined to the test group and disappears after the precise permission repair. If your service principal bypasses this deny or the fault does not reproduce, record that result; do not widen the deny to make the lab fail.

**Reset:** Remove Taylor's test access, restore request authority and leave no deny entry. Mark the disposable entitlement non-requestable.

[AD prerequisites](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/prerequisites.html)

## Screenshots to capture

1. Original and temporary group-only permission entry.
2. Failed operation and successful unrelated control.
3. Restored ACL and successful fresh request.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-047](../AR-047/README.md) · [Course outline](../../README.md) · [Next: AR-049](../AR-049/README.md)
