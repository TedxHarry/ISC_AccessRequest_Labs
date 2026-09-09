# AR-010 · Make VPN access requestable

**Before you start:** Complete AR-009. Use the administrator and Lucas (`acme.e012`).

Lucas needs remote connectivity. Make only the VPN entitlement available, then check the catalog using his ordinary session.

## Configure and check

1. As administrator, open **Admin > Global > System Settings > Feature Settings > Access Request**. Record the current settings. Enable entitlement requests and save. Do not change machine-identity or request-for-others options.
2. Open **Admin > Access Model > Entitlements**. Search for `GG-VPN-USERS`. Confirm the AD source and group DN match AR-003. If more than one result has that name, use the source and DN to select the correct one.
3. Set Priya (`acme.e002`) as primary owner. Give the item a description such as `Remote connectivity for Acme employees using the lab network`. Save.
4. Select its **Actions > Mark as Requestable**. Reopen it and verify the saved requestable state.
5. In Lucas's session, open Request Center and search for VPN. Open the result and verify the description and source. Do not submit yet.
6. Search for `GG-INTERNAL-NOREQUEST`. It must remain unavailable. If it appears, inspect that specific entitlement's requestability; do not turn off all entitlement requests.

**Check:** Lucas can find the intended VPN entitlement, while the negative control remains unavailable. Catalog configuration has not itself added him to VPN in AD.

If VPN is missing, check global enablement, the individual entitlement and any existing segment restrictions. Allow the saved catalog change to become effective, then refresh Lucas's session.

**Leave for the next lab:** VPN remains requestable with Priya as owner.

[Entitlement configuration](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html)

## Screenshots to capture

1. Global entitlement-request setting.
2. VPN source, owner and requestability.
3. Lucas's VPN search result and negative-control search.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-009](../AR-009/README.md) · [Course outline](../../README.md) · [Next: AR-011](../AR-011/README.md)
