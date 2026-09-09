# Before your first business request

Use this page before AR-010. Keep C01 available and use the current tenant records to check the starting state.

## Get the sessions and target checks ready

- Administrator: edit entitlement/profile settings and inspect Approval Management and Account Activity.
- Lucas and Priya: working, separate ordinary-user sessions from AR-008.
- Olivia: prepare her sign-in before AR-013. Liam: prepare his before AR-015. Use the [additional-session procedure](M02-CHECKS.md#prepare-olivia-or-liam-to-sign-in) and the latest complete HR file.
- AD workstation: the ActiveDirectory module or equivalent native AD view, and the same domain controller for before/after comparisons.

Run the [native membership check](M02-CHECKS.md#inspect-direct-ad-membership) with each lab's username and group. Record the account DN, objectGUID and direct membership. A group inherited through nesting is a separate observation.

## Check the state you need

| Point in the module | State to verify |
|---|---|
| Before AR-010 | C01 passed; Lucas has baseline access but no VPN grant or pending request |
| After AR-010 | VPN visible to Lucas; Priya owns it; no request submitted |
| After AR-011 | One Lucas VPN request pending with Priya; target membership absent |
| After AR-012 | Same request fulfilled; Lucas keeps directly requested VPN |
| Before AR-013 | Olivia signs in and has neither VPN nor Remote Users; no pending VPN request |
| After AR-013 | Olivia's request denied; her target memberships unchanged |
| After AR-014 | VPN visible again; Lucas still has VPN; hidden control remains hidden |
| Before AR-015 | Liam signs in; Liam and Olivia have neither business group or pending profile request |
| After AR-015 | Profile retained; Liam's test grant removed; Olivia ungranted; Lucas retains VPN; C02 saved |

All 24 standard accounts and their baseline assignments remain in place. No new AD account should be needed for these requests.

## Account for existing requests before repeating

Inspect My Requests and administrator **Approval Management > Access Requests** for the same recipient, item and account. Match the details and times, not only the display name. Record request, approval and activity identifiers separately when exposed.

A pending request belongs to its current stage. Resume the assigned review or inspect its operation; do not submit another just because the page has not changed. If an obsolete test request must be canceled, the administrator can open its details and use the available **More > Cancel Request** action, enter a reason and confirm. Record the result and verify native state separately. If cancellation is unavailable for that state, investigate the active operation instead of treating it as canceled. [Approval administration](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html)

Keep Lucas's fulfilled VPN grant when revisiting earlier catalog labs. Use Olivia's clean state for the comparison where instructed. Do not remove business access directly in AD to reset an ISC-requested assignment; use supported revocation when the lab requires removal.

## Keep the first request simple

For the course VPN item, record inherited settings and configure the item explicitly for one Primary Owner reviewer and required request/denial comments in AR-011. Do not assume an unchecked item approval box disables inherited approval. Existing forms, dates, workflows, reauthentication, segmentation or escalation can change the exercise. Record and resolve those conditions for the dedicated course item before declaring the expected result passed. Do not weaken tenant-wide controls to hide the difference.

Catalog visibility proves only that the user can find the item. Approval proves a decision. Account activity and native membership prove whether the requested target change occurred. Retain evidence for each.

Keep this page with the current lab journal.
