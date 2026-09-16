# Module 3 content review

Date: 13 September 2026. Scope: AR-016–021 in `labs/` and `Labs_Happypath/`, journals, shared starting/retained state and navigation. Starting revision: `f948094f5551f532fe566d65f2360e83954df1ff`.

## Walkthrough changes

The six engineering labs previously compressed configuration, submission, approval, native checks and removal into short procedures. They now contain the complete working steps visible on the page. The six corresponding beginner labs and journals are added. Engineering practice prompts appear before the steps they refer to; supplied diagnosis cases and answers follow the working exercise.

| Lab | Gaps corrected |
|---|---|
| AR-016 | Added clean-recipient checks, exact profile fields, two-group validation, explicit grant/removal reviewers, request/activity matching and supported profile removal. Removed the assumption that arbitrary overlapping assignments protect every entitlement on profile revocation. |
| AR-017 | Specified account-source selection, per-tab saves, application enablement and the actual Applications selection flow. Distinguished password-management scope from requester segmentation. Retained the existing profile and account rather than implying a new external system is provisioned. |
| AR-018 | Added the missing AP-Finance-AP request/removal settings, standard role creation, Manage Access actions, request-only assignment, processing and all three target checks. Used the documented administrator role-assignment revocation screen; explained why disabling a role or revoking its contained profile is not that cleanup. |
| AR-019 | Replaced the abbreviated comparison with three complete, separate cycles. Configured VPN removal review explicitly, included user entitlement revocation, and required cleanup before each subsequent grant. Recorded route differences rather than attributing every approval difference to object type. |
| AR-020 | Required a working catalog before changing associations. Compared saved associations, same-user direct search and native controls. Supplied exact restoration steps without asserting a single empty-catalog rendering or confusing Lucas's direct VPN control with an assigned Finance-profile removal test. |
| AR-021 | Prepared James and Elena's sessions, preserved the complete HR working file, separated Payroll and Benefits, and supplied all configuration/request/decision/removal actions. Checked that a denial leaves the earlier approved Payroll intact. Added C03 configuration and native-state checks. |

The [shared starting page](M03-READINESS.md) records actors, actual-value references, clean recipient states, retained definitions, first-run prerequisites and resume guidance. Existing Module 1/2 helpers and learner screenshots were preserved.

## Sequence and acceptance review

- AR-016 and AR-017 each remove Olivia's requested reporting profile before the next exercise.
- AR-018 removes her requested role through the role-assignment route while retaining all definitions.
- AR-019 restores the clean Olivia state between the entitlement, profile and role comparisons. It retains explicit Priya review for direct VPN removals.
- AR-020 submits no grant/removal and restores both Finance Services associations.
- AR-021 keeps Payroll and Benefits separate, verifies the denied Benefits request against a clean Benefits state, then removes Payroll through Elena's configured review.
- C03 retains four business profiles, two applications, the requestable Finance Analyst role, Remote Worker, baseline assignments and Lucas's direct VPN. The Finance profiles and role needed by AR-022 remain enabled/requestable. Olivia and James finish without their test business access.
- Each numbered working section has a Check. Every screenshot cue has a matching end-of-lab entry. Both folders have the same working procedures and core acceptance criteria; engineering adds practice/diagnosis without withholding steps.

## Official references reviewed

- [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html): source choice, entitlements, enablement, detection and revocation behavior.
- [Roles](https://documentation.sailpoint.com/saas/help/access/roles.html): standard role fields, access selection, optional automatic criteria, processing and administrator requested-assignment revocation.
- [Access applications](https://documentation.sailpoint.com/saas/help/access/app-config.html): source/account settings, association saves, enablement, request options and password-management implications.
- [Role/profile request policies](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html): grant and removal controls and requested-object approval behavior.
- [Entitlement request policies](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html): individual grant/removal overrides and inherited settings.
- [Request Center](https://documentation.sailpoint.com/saas/user-help/requests/request_center.html): profile selection through Applications and review/submission.
- [User access removal](https://documentation.sailpoint.com/saas/user-help/requests/requesting_access_removal.html): My Access entitlement assignment revocation and assignment-origin restrictions.

## Local validation

Checked all local Markdown file links, changed-page anchors, numbered-section Checks, expandable answers, paired working procedures, journals and screenshot inventories. The initial run covered 1,246 file links and 97 changed-page anchors before this review record was added. Final results are recorded in [VALIDATION.md](VALIDATION.md).

This review did not execute PowerShell against AD, submit tenant requests, approve access, provision accounts or validate new screenshots. The supplied engineering tickets are practice cases, not reported tenant incidents. Later modules have not received this paired walkthrough pass.

## Tenant checks still required

Run the labs in order and capture actual UI labels, profile/role assignment origin, routed reviewers, activity results, native group changes, catalog behavior and cleanup. Verify the administrator role-revocation route separately from user/profile removal review. If a feature or UI differs, record the exact observed state before changing the walkthrough; do not mark an unexecuted step Passed.

## Final learner walkthrough review, 16 September 2026

Scope: AR-016–021 in both paths, all 12 journals, Module 2 retained state and the Module 4 starting checks. Learner progress remains AR-001–006 reported complete, with AR-007 tenant execution not started. No Module 3 execution or screenshot validation is claimed.

- Clarified which session to use for identity Access versus My Requests. Added administrator request inspection for requests made for the recipient by someone else.
- Added resume guidance before the working steps in both paths. Existing applications now have an explicit Edit route, and existing profile/group associations are retained instead of added again.
- AR-017 preserves the accounts-payable association when repeated after AR-018. The original one-profile starting example no longer implies removing later work.
- AR-017 and AR-018 now explicitly verify Lucas's retained native VPN during cleanup, matching their acceptance checklists.
- AR-019 refreshes imported data when the completed entitlement assignment has not appeared for self-removal.
- HR registration creates separate browser profiles before invitations are opened. The current complete HR file and its actual row count are preserved, including identities introduced later in the course.
- AR-021 uses the learner's recorded OU path and distinguishes the original 24 baseline recipients from later additional accounts/identities. Its design instruction moved into the working steps, leaving prerequisites in Before you start.

Rechecked official application configuration, requested-role revocation and user removal documentation linked above. Existing grant/removal distinctions remain. Current tenant labels, actual decisions, target writes and screenshots still require learner execution.

Local checks passed: 12 walkthrough structures, 12 journal acceptance lists, six identical paired working procedures, screenshot filename inventories, expandable answers, 159 local links and referenced heading anchors in changed files, plus whitespace checks.
