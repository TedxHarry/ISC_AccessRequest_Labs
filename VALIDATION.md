# Course validation record

Updated: 13 September 2026.

See the [content audit](CONTENT-AUDIT.md) for corrected defects and unresolved acceptance checks. Written coverage is not a course-wide quality certification.

## Authored material

- AR-001–090 have walkthroughs and evidence journals.
- AR-010–090 include numbered procedures, expected-result checks, recovery/cleanup instructions and screenshot capture lists.
- Three capstones provide execution steps and acceptance criteria.
- The lab desk and API/subscriber workbenches supply shared procedures and local examples.

## Live tenant status

AR-001 is learner-reported complete. Later labs have not been executed end to end in the learner's tenant during this writing pass. Screenshots for later exercises remain pending. Instructions are based on cited documentation and must be checked against the tenant's actual feature availability and observed results.

This record does not certify every lab as tenant-tested. Timed expiration, external integration, machine identity, SSO reauthentication and JIT exercises require their stated facilities and live observations. Local fixtures verify only the sample tools and test-handling logic.

## Local checks completed

- 90 lab pages and 90 evidence journals present.
- 816 local Markdown links resolve to existing files.
- 80 linked SailPoint documentation and community pages returned HTTP 200. Reachability does not establish correctness of every instruction.
- Ten local tool tests passed, including Decision-event evidence and sensitive-field exclusion: pagination, invalid response handling, fixture export, overwrite protection, subscriber authentication, decision responses, invalid modes, dynamic responses and asynchronous metadata handling. These tests use synthetic data and do not contact ISC.

The content-audit pass also checked the baseline CSV: 24 unique employee IDs/usernames, valid manager references, no manager cycles and the expected six-department counts. All fenced JSON examples parse.

## Before accepting a live lab

1. Confirm the required service, permissions and starting state.
2. Follow the steps with the named actors and actual local IDs.
3. Capture the expected result and negative/control case.
4. Verify native target state and cleanup.
5. Record discrepancies and correct the procedure before marking it passed.

Keep the execution ledger in the private evidence folder. Use columns: lab ID, date, tenant capability, result, request/activity IDs, screenshots, cleanup and remaining issue. The choices are Passed, Failed, Awaiting timed observation or Unavailable in this tenant.

[Coverage](COVERAGE.md) · [Course outline](README.md)

## Module 1 review, 9 September 2026

[Focused review](M01-REVIEW.md): revised parsing checks, manager-data practice, standard-account layout, API error guidance, mapping edits, batch aggregation, email/sign-in expectations and C01 explanations. Local links, fenced-code structure and newly linked documentation were checked. No additional tenant execution is claimed.

Module 1 now has the additional hands-on guidance pass described in [the module review](M01-REVIEW.md#hands-on-guidance-pass): starting states, comparisons, diagnosis tickets and solutions, resume/retained-state guidance, and screenshot reminders within the procedures. All nine journals include practice and ticket evidence fields. This is authored and locally checked material; live status above is unchanged.

## Module 2 review, 9 September 2026

[Focused review](M02-REVIEW.md): AR-010–015 now include explicit starting/retained state, approval controls, request-stage checks, independent diagnosis tickets, resume guidance and step-level screenshot cues. AR-015 includes an optional walkthrough and verified-documentation revocation steps. All six journals include comparison and request timeline fields. Local checks do not replace tenant execution; live status above remains unchanged.

Both Module 1 folders received a paired walkthrough review. See [the review record](M01-REVIEW.md#paired-module-1-walkthrough-review). No additional tenant execution or screenshot validation is claimed.

Module 2 now has six complete walkthroughs in each folder, beginner journals and retained engineering exercises. See [the paired review](M02-REVIEW.md#paired-walkthrough-pass-after-module-1-direct-entry-check). The first-request sequence and shared target-check instructions were reviewed locally; live execution status is unchanged.

## Module 3 paired walkthrough review, 13 September 2026

AR-016–021 now have complete working walkthroughs and journals in both folders. The [review record](M03-REVIEW.md) describes corrected configuration, request, removal and sequence gaps. The [starting and handoff checks](M03-READINESS.md) define C02 prerequisites, additional HR sessions, retained state and recovery.

Engineering pages retain independent comparisons and supplied diagnosis cases while exposing the same working procedures as the beginner pages. Module 3 changes are authored and locally reviewed; tenant execution and new screenshots remain pending. Later modules were not revised in this pass.

Final Module 3 local check: 1,250 local Markdown file links resolve; 12 walkthroughs and 12 journals are present. Paired procedures, 97 changed-page anchors, numbered-section Checks, expandable answers and screenshot inventories passed. Actor IDs and manager references match the HR dataset. No tenant actions were performed.

## Module 4 paired walkthrough review, 13 September 2026

AR-022–027 now have complete walkthroughs and journals in both folders. The [review record](M04-REVIEW.md) describes corrected visibility, request authority, source-data, correlation and account-selection gaps. The [starting and handoff page](M04-READINESS.md) defines C03 prerequisites, Sofia's session, original-setting restoration and C04.

Both paths include the working procedures, target checks and cleanup. Engineering adds prediction/diagnosis exercises and solutions. Source documentation was checked, including the public account-selection screenshot. No new learner screenshots or tenant executions are claimed.

Final Module 4 local check: 1,388 local Markdown file links and 88 changed-page anchors resolve. Across Modules 3–4, 24 walkthroughs, 24 journals, 142 numbered-section Checks, paired working procedures, expandable answers and capture inventories passed. Path-specific AR-003 anchors were checked separately. Actor departments/managers match the HR dataset. No tenant actions were performed.

## Modules 1–4 walkthrough simplification, 14 September 2026

AR-001–027 in both folders now use Before you start, Follow the steps, Check the result and Finish. Engineering investigations follow the working walkthrough. Repeated introduction and finishing instructions were consolidated; the numbered procedures, code examples and existing images were preserved. Resume instructions were corrected for the specific catalog, permission and account exercises. Module 5 and later walkthroughs were not changed.

Local checks cover all 54 page structures, preserved numbered steps/code/images, local links and heading anchors, and Markdown formatting. This is a writing and navigation pass, not additional tenant execution. The next paired module is Module 5, AR-028–033.

## Module 5 paired walkthrough review, 14 September 2026

AR-028–033 now have working walkthroughs and lab-specific journals in both folders. They use the four-stage layout, with additional engineering practice after the working result. The review added actor registration, source-owner checks, ordered grant/removal decisions, individual reassignment, a controlled missing-manager exercise, approval-based proof of consolidated reviews, cleanup for possible self-approval grants, and a separated reminder/escalation schedule. AR-033 records C05 for the forms module. No new tenant execution or screenshots are claimed.

Behavior was checked against the current [entitlement request guide](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html), [profile reviews and self-approval guide](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html), [governance-group guide](https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html), [approval administration](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html), [approval timing settings](https://documentation.sailpoint.com/saas/help/requests/config_approval_settings.html), and [approval-service enhancement announcement](https://developer.sailpoint.com/discuss/t/enhancement-approvals-expiration-governance-group-visibility-and-more/193947). Missing-reviewer resolution and automatic approval are recorded from actual tenant evidence rather than assigned an invented fixed outcome. Timed observations remain incomplete until observed; deferral cancels diagnostic requests and restores the profile before new controls.

The next paired module is Module 6, AR-034–039. Later walkthroughs were not revised in this pass.

Module 5 local checks: all 12 walkthroughs have the agreed structure and a matching journal; the six pairs have identical working steps. Actor/manager values match the course CSV. Local links and heading anchors, screenshot references, and Markdown formatting were checked. Live approval decisions, notifications, escalation, expiration and native fulfillment remain pending tenant execution.

## Module 6 and opening-section review, 14 September 2026

AR-001–033 in both paths now put the lab objective above Before you start. The prerequisite section retains actual prior-lab state and required tools. AR-004 explicitly distinguishes the account created/imported in AR-003 from the correlation performed in AR-004. AR-005 distinguishes an available provisioning connector from the creation mappings configured in that lab. This pass preserves the earlier walkthrough procedures, code blocks and images.

AR-034–039 now have paired working walkthroughs and individual journals. Engineering adds focused investigations. The steps cover form creation/association, required and optional answers, conditional visibility and hidden-answer retention, copied answers in a multi-item submission, association repair, reviewer checks, native grant/removal verification and C06. Remote Worker's temporary association is restored. No learner screenshots or tenant execution are claimed.

Checked against [SailPoint form building and conditions](https://documentation.sailpoint.com/saas/help/forms/index.html), [native access-request form capabilities](https://developer.sailpoint.com/discuss/t/new-capability-forms-for-access-request/217255), [profile request configuration](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html) and [Request Center behavior](https://documentation.sailpoint.com/saas/user-help/requests/request_center.html). The documented contrary effect of a false condition is retained; a redundant competing hide rule was not introduced. Array versus scalar comparison is checked against the builder's actual representation. Native form values are not claimed to validate external tickets, become AD attributes automatically or schedule removal.

Module 7, AR-040–045, is the next paired walkthrough review. Later labs retain their existing drafts. Module 6 tenant execution, field rendering and screenshots remain pending.

Local checks passed for 78 revised walkthrough structures, six matching Module 6 working pairs and their journals, screenshot inventories, and preservation of earlier numbered steps, code and images. The link check covered 910 relevant local references before the final course-outline edit; the outline edit changes descriptions only.

## Module 7 paired walkthrough review, 14 September 2026

AR-040–045 now have paired working walkthroughs and lab-specific journals. Objectives remain outside prerequisite sections. The steps include date boundaries, real future provisioning/expiration observations, My Access versus Request Center amendment review, user-initiated entitlement/profile/role removal, corrected standalone-profile overlap, role-required overlap, and two-account entitlement removal. AR-045 records C07 and resolves Henry's earlier schedules before AR-046. No tenant execution or screenshots are claimed.

The previous AR-043 prediction that another standalone profile protects VPN was incorrect. The replacement expects shared VPN removal and cleans up the remaining independent Remote Users grant through a controlled profile re-grant/removal. AR-044 separately proves role-required Remote Users retention and removes the test role's eligibility before disabling its definition. AR-042 uses My Access for all three removal requests; it no longer assumes administrator role revocation follows the same review route. Revoking never-provisioned future access is checked as an assignment change without inventing a required AD removal operation.

Sources checked: [profile removal and overlap](https://documentation.sailpoint.com/saas/help/access/access-profiles.html), [date constraints](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html), [start dates and amendment routes](https://developer.sailpoint.com/discuss/t/new-capability-start-date-in-access-requests/206094), [user removal and date-edit controls](https://documentation.sailpoint.com/saas/user-help/requests/requesting_access_removal.html), [role configuration](https://documentation.sailpoint.com/saas/help/access/roles.html), [automatic role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html), and [account-specific selection/revocation](https://developer.sailpoint.com/discuss/t/new-capability-multi-account-support/105600).

Module 8, AR-046–051, is the next paired walkthrough review. Timed observations remain Pending/Deferred until executed; authored instructions do not establish a passed tenant result.

Module 7 local checks passed: 12 walkthroughs, 12 journals, six identical working paths, 548 relevant local file/anchor references, numbered-step sequences, screenshot inventories and actor/manager values against the HR dataset. Dates, approvals, overlap outcomes and AD operations remain pending tenant execution.

## Module 8 paired walkthrough review, 14 September 2026

AR-046–051 now have paired working walkthroughs and individual journals. Each objective describes work to perform above Before you start; prerequisites identify retained state from earlier labs. Engineering adds focused investigations after the same working steps. No tenant execution or new screenshots are claimed.

The review corrected Taylor's missing sign-in preparation and distinguished HR identity creation from request-triggered AD account creation. The ordinary ISC-registration route does not require Taylor's AD account; an administrator-on-behalf alternative preserves existing external authentication. Complete private HR imports retain Taylor and previous controlled addresses, with repeat-run checks against duplicate identities/accounts. The baseline remains the original 24 people.

The permission lab now proves grant/removal before denying only Write members on one disposable group, identifies the effective directory principal, restores the exact added ACL entry, and resolves queued writes before renaming the group. A fault not reproduced stays labelled as such. The rename lab creates a real profile reference, distinguishes AD GUID from ISC entitlement ID/native value, repairs the current reference if needed and proves grant/removal before disabling the temporary profile. The manual-change lab uses account aggregation to reconcile membership and records actual view timing. C08 retains current IDs, restored permissions, clean Taylor memberships and the 25-identity/26-account first-pass population.

Sources checked: [account-creation policies](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html), [provisioning monitoring](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html), [retry behaviour](https://documentation.sailpoint.com/saas/help/provisioning/index.html), [AD domain/service-account settings](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/domain_settings.html), [AD required permissions](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/required_permissions.html), [entitlement aggregation](https://documentation.sailpoint.com/saas/help/loading_entitlements/aggregating_entitlements.html), [profile references and enablement](https://documentation.sailpoint.com/saas/help/access/access-profiles.html), and [account aggregation](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html).

Module 9, AR-052–057, is the next paired walkthrough review. Later labs retain their earlier drafts. Provisioning, AD permission behaviour, rename handling, live view timing and screenshots remain pending tenant execution.

Module 8 local checks passed: 12 walkthroughs, 12 journals, six identical working paths, 462 relevant local file/anchor references, numbered-step sequences, screenshot inventories and Taylor’s HR columns/Henry’s manager against the baseline CSV. These checks do not establish live tenant outcomes.
