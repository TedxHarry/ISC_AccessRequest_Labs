# Module 4 · Prepare visibility and account-selection checks

Start with C03 from AR-021. Keep the [actual-value guide](LAB-VALUES.md), [request and native checks](M02-CHECKS.md) and your private evidence open.

## Verify the actors and access

1. As administrator, open **Admin > Identity Management > Identities** and check these identities:

| Person | Username | Department | Manager | Use |
|---|---|---|---|---|
| Lucas | acme.e012 | Finance | Daniel, acme.e003 | Finance requester; retains direct VPN |
| Liam | acme.e008 | IT | Priya, acme.e002 | Outside-Finance requester/recipient |
| Daniel | acme.e003 | Finance | Morgan, acme.e001 | Manager-selection check and Finance reviewer |
| Priya | acme.e002 | IT | Morgan, acme.e001 | VPN grant/removal reviewer |
| Sofia | acme.e009 | IT | Priya, acme.e002 | Two-account exercise in AR-026–027 |

2. Confirm each has one linked standard AD account before AR-026. Verify the current browser session's username before every requester/reviewer action. Use ordinary-user sessions for catalog comparisons and a separate Acme Admin profile for configuration.
3. Check C03's retained Finance profiles, Finance Analyst role, Finance Services and Remote Worker. They must be enabled/requestable. Olivia and Liam have no unfinished Finance requests or Finance business access; Liam also lacks VPN and Remote Users. Lucas retains VPN.
4. Record your current HR file's row count and preserve the latest complete private file. A first pass has 24 identities; a repeat after AR-047 may include Taylor too. Never restore an older public CSV over newer private records.
5. Inspect **Admin > Access Model > Segments**. Record any enabled segments already containing the three Finance items or Remote Worker. A different enabled segment can also make an item visible. Reuse the course segment if already configured; do not change unrelated segments to force the exercise's result.

**Check:** You can distinguish an ordinary requester from an administrator, and the access model from C03 is intact. If existing segmentation changes the intended comparison, record the overlap and resolve the course item's scope before proceeding.

## Prepare Sofia's sign-in before AR-026

1. In Acme Admin, find Sofia (`acme.e009`, E009), verify Acme Employees and her existing standard AD account.
2. In the latest complete private HR file, give E009 a unique email inbox you control. Keep every current row and the controlled email values for other actors.
3. Upload the full file through **Admin > Connections > Sources > Acme HR > Account Management > Account Aggregation**. Inspect completion and **Admin > Dashboard > Monitor**, then verify Sofia's Work Email.
4. Read **Acme Employees > Settings > Sign-in Method** and retain that route. For an unregistered ISC-password user, select **Actions > Invite Identity** and finish registration in **Acme Sofia**, following AR-008. For external authentication, use the existing route from AR-008.
5. Sign out and back in; verify `acme.e009` in the user menu. Do not give Sofia administrator permissions to make the catalog test work. Her later AD account called `acme.e009.admin` is a second source account, not a second HR identity or the required ISC sign-in username.

**Check:** Sofia can request and inspect her own access. No second account or HR identity has been created by this registration procedure.

## What each lab leaves behind

| Finish | Required retained state |
|---|---|
| AR-022 | SEG-Acme-Finance enabled: department Finance; both Finance profiles and Finance Analyst role; Remote Worker outside this segment |
| AR-023 | Original request-on-behalf configuration saved privately; Everyone-for-anyone temporarily enabled for AR-024; no requests submitted |
| AR-024 | Liam's Finance request denied with no business grant; original request-on-behalf configuration restored and verified |
| AR-025 | Lucas restored to Finance in CSV, HR account and identity; segment unchanged; complete HR population and Lucas's VPN retained |
| AR-026 | Sofia's standard and second ordinary AD test account correlated to one identity; baseline account criterion selects Users OU; neither account retains test VPN |
| AR-027 / C04 | Same segment, original request-on-behalf mode, restored HR data, two Sofia accounts, baseline on standard only, no outstanding test VPN assignment |

For the first course pass after AR-026, the lab has 24 HR identities and **25 lab AD accounts**: 24 standard accounts plus Sofia's additional test account. The baseline role still has 24 identities and the baseline group still has the 24 standard accounts.

## Wait for a saved change to reach the catalog

Saving a segment is not proof that every requester already sees the new result. Record the save time, reopen the saved definition, allow processing to settle and refresh the affected person's Request Center. Compare with an unchanged control item. Segment changes can take time after other processing finishes; do not repeatedly toggle settings while waiting. If results persistently differ, capture the saved criteria, matching identities, other segment memberships and both session usernames before changing another value. [Segment behavior](https://documentation.sailpoint.com/saas/help/requests/segments.html)

## Resume without losing the previous state

If returning during AR-023–024, read the saved original request-on-behalf settings before changing them. If the exercise is stopping, restore that original configuration and record the next step; re-enable the temporary mode only when resuming AR-024.

If returning during the department exercise, compare the saved original complete file with the current tenant before restoring. Preserve newer employee records and unrelated edits. If a Sofia request is pending, complete that request's review/provisioning stage rather than submitting another. If granted, verify and revoke its exact account assignment through ISC. Keep both accounts for later labs and never remove baseline as a reset.
