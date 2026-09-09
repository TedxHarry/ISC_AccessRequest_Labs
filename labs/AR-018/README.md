# AR-018 · Offer the Finance Analyst role

**Before you start:** AR-017. Use Olivia for the request and Daniel for review.

## Build and request the role

1. Create `AP-Finance-AP`, owner Daniel, with `GG-FIN-AP` using the lab desk profile procedure. Enable it. Add it to Finance Services and save.
2. Open **Admin > Access Model > Roles**, create `ROLE-Finance-Analyst` and set Daniel as owner. Describe it as reporting and accounts-payable access for the Finance lab.
3. Add `AP-Finance-Reporting` and `AP-Finance-AP` as the role's access. Do not add automatic assignment criteria for the whole Finance department.
4. In the role's **Access Requests**, enable requests, require primary-owner review and a reason. Enable the role and apply changes.
5. Confirm Olivia has no requested role assignment and record the three underlying group memberships. Request the role in her session.
6. Have Daniel inspect and approve this role request. Trace the role to its profiles and to VPN, FIN-REPORTING and FIN-AP in AD.
7. Record which approval configuration the role request used. Do not assume each contained profile creates an additional approval request.

**Check:** The role is assigned through the request and all required target memberships are present on the intended account.

**Reset:** Remove Olivia's requested role and inspect remaining assignment paths before expecting all memberships to disappear. Keep the role and profiles enabled.

[Role management](https://documentation.sailpoint.com/saas/help/access/roles.html), [Role request configuration](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html)

## Screenshots to capture

1. Role profiles and request settings.
2. Role approval and assignment.
3. Three native group memberships and removal result.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-017](../AR-017/README.md) · [Course outline](../../README.md) · [Next: AR-019](../AR-019/README.md)
