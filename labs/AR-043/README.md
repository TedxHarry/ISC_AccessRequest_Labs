# AR-043 · Explain why removing one profile leaves VPN

**Before you start:** AR-042. Use Alexander (`acme.e020`) with no existing test profiles.

## Build overlapping access deliberately

1. Record Alexander's native VPN, Remote Users and Finance Reporting memberships.
2. Request AP-Remote-Worker as Alexander and have Priya approve. Verify VPN and Remote Users.
3. For this controlled overlap, temporarily enable an authorized request-for-others mode if needed. Have an eligible Finance requester submit AP-Finance-Reporting for Alexander; Daniel approves with a comment identifying the overlap test. Restore the request-for-others mode afterward.
4. Verify Alexander now has both profiles and all three groups.
5. Remove only AP-Finance-Reporting and complete review. Inspect the remaining AP-Remote-Worker assignment.
6. Check AD: Finance Reporting should be removed while VPN remains required by Remote Worker.
7. Remove AP-Remote-Worker. Check that its remaining test memberships disappear when no other path requires them.

**Check:** The first removal can complete correctly while a shared entitlement remains. Your explanation names the remaining profile and request that justified VPN.

If profile detection changes the displayed access, preserve request history and compare the full assignment graph rather than relying on one label.

**Reset:** Both test profiles removed from Alexander; original request-on-behalf setting restored; business access definitions retained.

[Access profile assignments](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)

## Screenshots to capture

1. Both profile assignments and their entitlement lists.
2. First removal with VPN retained.
3. Second removal and final native state.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-042](../AR-042/README.md) · [Course outline](../../README.md) · [Next: AR-044](../AR-044/README.md)
