# Module 7 learner walkthrough review

## Final learner walkthrough review, 17 September 2026

Scope: AR-040–045 in both paths, all 12 journals and the C07 handoff to AR-046. Learner progress remains AR-001–006 reported complete; AR-007 tenant execution has not started. No tenant actions or new screenshot validation were performed.

- Added resume guidance, consistent account/controller records and instructions to investigate pending or failed operations before retrying.
- AR-040 tests invalid dates in the still-open form instead of assuming it can already be saved. It accepts a disabled picker boundary as evidence, explains accidental-submission recovery, refreshes the assignment before removal and distinguishes scheduled expiry from the manual-removal control.
- AR-041 supports the documented no-form route, checks for the start-date capability, records amendment IDs and captures reviewer routing before decisions. Future assignments are checked before their start without waiting for a nonexistent addition. Cleanup has a screenshot checkpoint and does not require an AD removal operation when access never provisioned.
- AR-042 reuses existing removal reviewers, applies saved policy changes and refreshes imported grants before selecting their assignments. The engineering path captures the role-supplied profile before removing the role, while that evidence still exists.
- AR-043 prepares Alexander's browser profile before registration, retains the original on-behalf permission record across retries and restores its mode before disabling the setting. The engineering prediction now precedes removal. Cleanup verifies the account and Lucas's retained VPN.
- AR-044 checks for existing test definitions before creation, records account identifiers and refreshes the requested assignment before revocation. Repeat runs preserve baseline additions from later labs rather than resetting the list to 24 people.
- AR-045 stops an ambiguous account decision before approval, refreshes assignments between removals and saves C07 in a private folder. The handoff keeps Henry's scheduled/pending work separate and requires its resolution before AR-046.
- Updated eight journals for account/controller records, date validation, amendment IDs/reviewers and retained-access checks.

## References checked

- [Date policy and maximum duration](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html)
- [Start dates and date-change approval routes](https://developer.sailpoint.com/discuss/t/new-capability-start-date-in-access-requests/206094)
- [Request submission](https://documentation.sailpoint.com/saas/user-help/requests/request_center.html)
- [User removal and date-edit routes](https://documentation.sailpoint.com/saas/user-help/requests/requesting_access_removal.html)
- [Standalone profile overlap and role-required access](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)
- [Identity-list role assignment and removal](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html)

Tenant validation remains pending for date errors, timed native observations, amendment reviewers, each removal route, overlap behavior and account-specific removals. Written expected results do not establish a tenant pass.

## Local verification

All 12 walkthrough structures, six paired working procedures, screenshot inventories and expandable-answer checks passed. Engineering-only capture prompts were excluded from the working-procedure comparison and reviewed separately. Reviewed all 12 journals; eight required field updates. The changed learner-file check resolved 118 local links and referenced heading anchors. Whitespace checks passed. AR-046 retains the required end date, optional completed form and clean Henry starting state from C07.
