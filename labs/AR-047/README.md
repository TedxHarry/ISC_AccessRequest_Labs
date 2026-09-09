# AR-047 · Create an account through an access request

**Before you start:** AR-046 and working Create Account configuration from AR-005. Use a new isolated employee so the 24 baseline accounts stay intact.

## Prepare a recipient without AD access

1. Copy your complete working HR CSV privately. Append one row: employeeNumber `E025`, userName `acme.e025`, firstName `Taylor`, lastName `Stone`, displayName `Acme Lab - Taylor Stone`, department `Engineering`, title `Lab Engineer`, managerEmployeeNumber `E006`, location `Chicago`, employeeType `Employee`, costCenter `ENG500`, status `active` and a valid past startDate. Supply a unique controlled email.
2. Import all 25 rows and process. Verify Taylor's identity and manager. Do not add Taylor to ROLE-Acme-AD-Baseline's explicit identity list.
3. Verify Taylor has no AD account in ISC or AD. Record the unchanged 24 baseline accounts separately.
4. Temporarily enable the authorized request-for-others mode if needed. As administrator, request AP-Remote-Worker for Taylor. Use `AR-047: Create Taylor through requested access`.
5. Have Priya approve. Inspect activity for account creation and entitlement changes. Verify `acme.e025`, its Users OU DN, employeeID E025, UPN and both VPN/Remote Users memberships in AD.
6. Confirm the new AD account is linked to Taylor and no duplicate identity was created. Compare with Lucas's existing-account update in AR-012.
7. Remove Taylor's requested profile and verify group removal. Record whether the account remains; access removal must not be assumed to delete the account.

**Check:** The request created the missing account using the source's Create Account settings and reached the correct memberships.

**Reset:** Restore request-on-behalf settings. Retain Taylor as an isolated test identity/account. From now on, keep the complete 25-row working HR file; the baseline role still has only the original 24 identities.

[Account creation](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html)

## Screenshots to capture

1. Taylor with no AD account before submission.
2. Create Account activity and resulting AD attributes.
3. Linked account, group results and removal outcome.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-046](../AR-046/README.md) · [Course outline](../../README.md) · [Next: AR-048](../AR-048/README.md)
