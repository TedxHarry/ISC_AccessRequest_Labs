# AR-081 · Expose governance-group reviewers and compare owner choices

**Before you start:** AR-029 and AR-052. Use GOV-Security-Review and Production Support; save the item's existing workflow/reviewer configuration.

## Inspect who can decide

1. Temporarily configure a direct **Governance Group: GOV-Security-Review** approval on Production Support. Keep form/date requirements.
2. Read the current access-request configuration. Record `govGroupVisibilityEnabled`, set it to true using the matching current configuration update and re-read to verify.
3. Submit as Henry. Open **My Requests > Process** and expand the governance-group step. Compare the displayed people with the actual group membership.
4. Approve as Evelyn and inspect how the decision actor is recorded. Verify the grant and remove it.
5. On an isolated disposable entitlement, configure Priya as primary owner and Samuel as an additional owner. Compare **Primary Owner** with **All Owners** in two fresh requests, denying each after observing who may decide. Do not configure both owners as serial individual reviewers and call that the same test.
6. Record the difference between who owns the item, who can complete the selected review category and who actually decided.

**Check:** Requester-visible group information matches the configured group, while the actual decision remains attributable to the person who made it.

**Reset:** Restore the global visibility flag and all original item review/owner settings. Mark the disposable entitlement non-requestable.

[Governance visibility enhancement](https://developer.sailpoint.com/discuss/t/enhancement-approvals-expiration-governance-group-visibility-and-more/193947), [Owner categories](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html)

## Screenshots to capture

1. Group step expanded in My Requests.
2. Group membership and actual decision actor.
3. Primary/All Owners comparison and restored settings.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-080](../AR-080/README.md) · [Course outline](../../README.md) · [Next: AR-082](../AR-082/README.md)
