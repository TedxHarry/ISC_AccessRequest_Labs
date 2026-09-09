# Module 2 learner walkthrough review

Reviewed 9 September 2026. Scope: AR-010–015, their journals, the C01 starting state and the transition to AR-016. This was a documentation review; no tenant execution or new screenshot evidence is claimed.

## Findings addressed

| Lab | Gap and change |
|---|---|
| AR-010 | Catalog work lacked explicit before-state proof. Added assignment/pending-request checks, account identifiers, native before/after verification and a hidden-item comparison. |
| AR-011 | The generic override instruction did not name the actual controls. Added Require Approval, Reviewer and Primary Owner, explained inherited settings, and made the request/assignee handoff and expired-request recovery explicit. |
| AR-012 | Approval and target verification were too compressed. Added request/activity matching, unchanged account identifiers, stage-specific investigation and a requirement to resolve failures before advancing. |
| AR-013 | Denial relied on an assumed clean recipient. Added sign-in, assignment and membership checks, validation evidence and approved-versus-denied comparison. |
| AR-014 | Missing visibility could already be present before injecting the fault. Added a verified visible starting point, exact item-only change, three-state evidence and retained Lucas access. |
| AR-015 | Independent assessment depended on an abbreviated shared procedure and unclear cleanup. Added an optional walkthrough, explicit profile grant/removal reviewers, native checks for both groups, supported profile revocation and C02 handover. |

Every lab now has a supplied diagnosis ticket with an expandable solution, resume guidance, retained-state table, step-level screenshot cues and a final capture checklist. Journals separate supplied cases from observed tenant failures and record request/decision/activity/native evidence independently.

## Sources checked

- [Entitlement request configuration](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html): individual versus inherited approval/comments and catalog enablement.
- [Role/profile request controls](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html): profile reviewer and removal setup.
- [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html): enablement, processing and revocation actions.
- [Reviewer actions](https://documentation.sailpoint.com/saas/user-help/approvals/reviewing_access.html): Grant/Remove review, decision and Reviewed view.
- [Approval administration](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html): Process, Assignees, Details and cancellation.

## Local checks

All 836 local Markdown file links resolve. Changed-page heading anchors, six linked documentation URLs, screenshot cues versus capture tables, expandable solution structure and all six journal additions passed their checks. Documentation reachability is separate from the behavior review above.

## Remaining tenant checks

Run the six labs in order. Verify current UI labels, comment validation, actual assignee, provisioning activity visibility, native group writes and profile revocation in the learner's tenant. A required feature or inherited control that changes the result must be recorded rather than marked passed. Later modules have not received this additional guidance pass.

[Module starting checks](M02-READINESS.md) · [Validation record](VALIDATION.md)

## Paired walkthrough pass after Module 1 direct-entry check

Baseline: 54cc4d46b3af079a8ea7d3122f97cb6bea8c75a1. Scope: Module 1 quick direct-entry check and Module 2 AR-010–015 in both folders. Module 1's Lucas activity reference was corrected before proceeding.

The six beginner labs and journals are now authored. Both folders contain a complete visible working procedure; AR-015 no longer hides its essential walkthrough. Engineering pages retain diagnosis tickets, repeat/recovery guidance, required-comment validation exercises and the catalog diagnosis challenge. Beginners complete the intended denial and availability-management outcomes without support-ticket sections.

The shared [request checks](M02-CHECKS.md) supply additional-user registration, a read-only native membership procedure, request/activity inspection and imported-data refresh. The [starting checks](M02-READINESS.md) define the state passed between labs. C01 navigation now leads into the beginner AR-010; its index stops at the completed Module 2 boundary.

### Accuracy and sequence checks

- Request Center selection, details, review and submission actions were checked against the [current request procedure](https://documentation.sailpoint.com/saas/user-help/requests/request_center.html).
- Entitlement requestability and explicit owner review, profile grant/removal review, reviewer decisions and administrator revocation were compared with the official references above.
- AR-011 retains one pending request for AR-012; AR-012 retains Lucas's grant. Olivia is prepared before AR-013, Liam before AR-015. No extra AD account is created for either.
- AR-014 restores individual requestability without revoking Lucas. AR-015 removes Liam's profile assignment through ISC, checks both native groups, and retains the profile definition and every baseline assignment.
- Beginner and engineering journals have the same core acceptance outcomes, with separate engineering diagnosis fields. Screenshot cues and end lists were checked for matching filenames.

Local checks covered 1,010 Markdown file links, 32 Module 1/2 heading anchors, 30 lab-page structures and all Module 2 screenshot inventories before this review-record update. No native commands, approvals or provisioning were executed in a tenant. Later module content was not revised by this pass.
