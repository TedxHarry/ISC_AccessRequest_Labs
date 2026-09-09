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
