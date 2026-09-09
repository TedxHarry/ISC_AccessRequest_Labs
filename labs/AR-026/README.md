# AR-026 · Select the correct account for Sofia's access

**Before you start:** AR-025. Sofia's standard account exists. AdminAccounts is already inside ISC's account search scope from AR-003.

For any actor whose ISC sign-in is not prepared, complete [AR-008’s additional-session procedure](../AR-008/README.md) before submitting or reviewing.

## Prepare two distinguishable accounts

1. Open `AP-Acme-AD-Baseline > Multiple Account Options`. Select the schema attribute containing the account DN (normally `distinguishedName`), operation **Contains**, and value `,OU=Users,OU=AcmeLab,` followed by your actual domain components. Use the exact Users OU DN recorded in AR-003 with the leading comma. Save and apply. Verify Sofia's standard account DN contains that value and the planned AdminAccounts DN does not before adding another account.
2. In AD Users and Computers, right-click **AcmeLab > AdminAccounts > New > User**. Create `acme.e009.admin` with a unique UPN in your domain and a private test password. Use display name `Acme Lab - Sofia Martin Admin`. Do not give it domain-administrator privileges.
3. Open the new user's Attribute Editor and set `employeeID` to `E009`. Record its DN and objectGUID. This permits AR-004's employeeID correlation to the same Sofia identity.
4. Aggregate AD accounts. Inspect Sofia's **Accounts** in ISC and verify that both distinct AD accounts belong to her. If only one appears, inspect the saved OU search scope before rerunning aggregation.
5. Confirm the baseline profile remains on the standard account and has not added its membership to the admin account.

## Request and remove on one account

1. As Sofia, request the VPN entitlement. In account selection choose `acme.e009.admin` by its name/DN. Submit and have Priya approve.
2. Inspect the requested account in the approval/process evidence. Check both accounts in AD: only the selected account should receive this test grant, assuming neither already had VPN.
3. Remove that account's requested VPN assignment using the lab desk procedure. Verify the standard account's memberships remain unchanged.

**Check:** Account correlation, automatic baseline selection and interactive request selection are three separately verified decisions.

**Reset:** Keep both accounts for AR-045 and later labs; remove the test VPN assignment. Preserve baseline criteria.

[Multiple-account configuration](https://documentation.sailpoint.com/saas/help/access/access-profiles.html), [Account selection capability](https://developer.sailpoint.com/discuss/t/new-capability-multi-account-support/105600)

## Screenshots to capture

1. Saved baseline account criteria and both correlated accounts.
2. Requester's selected admin account and reviewer evidence.
3. Both native memberships before, after grant and after removal.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-025](../AR-025/README.md) · [Course outline](../../README.md) · [Next: AR-027](../AR-027/README.md)
