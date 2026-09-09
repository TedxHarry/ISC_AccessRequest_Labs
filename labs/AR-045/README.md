# AR-045 · Remove access from one account and preserve the other

**Before you start:** AR-044 and Sofia's two accounts from AR-026.

## Run the account-specific removal test

1. Record both account DNs/GUIDs and their VPN memberships. Verify the standard account still holds the baseline group.
2. As Sofia, request VPN for the standard account and complete Priya's review. Then submit a separate request selecting the admin account and complete its review.
3. Verify both accounts now have VPN. Record both assignments and account selections; do not use one screenshot without account identifiers.
4. Open Sofia's Access as an authorized remover. Select the VPN assignment for `acme.e009.admin`, submit removal and complete any review.
5. Verify the admin account loses VPN while the standard account retains it. Inspect the standard account's surviving assignment.
6. Remove the standard account's test VPN assignment too, unless it existed before this lab. Verify final memberships against the starting record.
7. Save C07 with date, removal, overlap and account-selection evidence. List any timed observation from AR-041 still awaiting execution.

**Pass when:** The selected account loses only the intended assignment, the other account remains unchanged during that removal, and both final states are explained by their assignment paths.

If the UI cannot identify the account unambiguously, stop that removal and use the account-selection API exercise in AR-082 to inspect identifiers first.

[Multi-account requests and revocation](https://developer.sailpoint.com/discuss/t/new-capability-multi-account-support/105600)

## Screenshots to capture

1. Both granted account assignments.
2. Removal identifying the admin account.
3. Both native results and C07 record.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-044](../AR-044/README.md) · [Course outline](../../README.md) · [Next: AR-046](../AR-046/README.md)
