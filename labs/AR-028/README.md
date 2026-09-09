# AR-028 · Compare manager, item-owner and source-owner routing

**Before you start:** AR-027. Use Olivia and the VPN entitlement. Remove any previous Olivia VPN assignment first.

## Resolve the reviewer from each configuration

1. Save VPN's approval settings and the AD source owner. Record Olivia's manager Daniel and VPN's owner Priya.
2. Set VPN's individual approval reviewer to **Manager**. As Olivia, submit a fresh VPN request. Verify Daniel receives it. Deny with `AR-028 manager routing control` so no grant needs resetting.
3. Change only the reviewer to **Primary Owner**. Submit a second fresh request as Olivia. Verify Priya receives it, then deny with the corresponding control reason.
4. Change only the reviewer to **Source Owner**. Submit a third fresh request. Check the actual AD source owner's identity against the assigned reviewer, then deny.
5. Compare the three request IDs, submission times, configured category and resolved identity. If the source owner also equals another reviewer, record that overlap rather than claiming three distinct people.
6. Restore VPN's primary-owner review with Priya. Leave the source owner unchanged.

**Check:** Three independently submitted requests demonstrate the selected routing category. Editing the configuration of an already-pending request is not the test.

**Challenge:** Repeat Manager review on a profile request made for another identity using the authorized request-for-others mode. Record the requested-for manager separately from the requester's manager, then restore that mode.

[Reviewer configuration](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html)

## Screenshots to capture

1. Each saved reviewer category.
2. Resolved reviewer and recipient for each request.
3. Comparison table and restored VPN settings.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-027](../AR-027/README.md) · [Course outline](../../README.md) · [Next: AR-029](../AR-029/README.md)
