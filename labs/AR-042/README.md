# AR-042 · Request removal at the correct access level

**Before you start:** AR-041. Use Olivia for Finance/VPN controls and preserve the baseline role.

## Compare three removal paths

1. Save removal-review settings for VPN, Finance Reporting and Finance Analyst. Configure an explicit primary-owner removal review on each where supported.
2. Request and approve VPN directly for Olivia. Record the assignment and native membership. Submit removal for that entitlement assignment, complete Priya's review and verify the result.
3. Request and approve Finance Reporting. Submit removal for the profile assignment, complete Daniel's review and inspect both underlying memberships.
4. Request and approve Finance Analyst. Remove the requested role assignment, complete its removal review and inspect the three groups.
5. For each case, record the requested removal object, its account, decision and remaining assignment paths. If a group remains, identify another owning assignment before removing it directly.
6. Restore the saved review settings after resolving the test requests.

**Check:** Each removal is initiated at the level of the test assignment and reaches the intended native result. The baseline group and unrelated memberships remain.

If a direct entitlement cannot be independently removed because it belongs to a profile or role, inspect and remove the appropriate test assignment. Do not delete the AD group or the employee account as a workaround.

[Removal configuration](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html), [Entitlement removal](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html)

## Screenshots to capture

1. Three removal configurations and requested objects.
2. Removal decisions and remaining assignment paths.
3. Target memberships after each case.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-041](../AR-041/README.md) · [Course outline](../../README.md) · [Next: AR-043](../AR-043/README.md)
