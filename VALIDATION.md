# Course validation record

Updated: 13 September 2026.

See the [content audit](CONTENT-AUDIT.md) for corrected defects and unresolved acceptance checks. Written coverage is not a course-wide quality certification.

## Authored material

- AR-001–090 have walkthroughs and evidence journals.
- AR-010–090 include numbered procedures, expected-result checks, recovery/cleanup instructions and screenshot capture lists.
- Three capstones provide execution steps and acceptance criteria.
- The lab desk and API/subscriber workbenches supply shared procedures and local examples.

## Live tenant status

As of 16 September 2026, AR-001–006 are learner-reported complete. Supplied screenshots are included through AR-006, with their limits and remaining captures recorded beside the steps. AR-007 onward still awaits learner execution/evidence; no tenant actions were performed during this writing pass. Instructions are based on cited documentation and must be checked against the tenant's actual feature availability and observed results.

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

## Module 9 paired walkthrough review, 14 September 2026

AR-052–057 now have paired working walkthroughs and individual journals. Each goal remains above prerequisites; the API credentials are created in AR-052 rather than assumed to exist. Both paths use the same working steps, with additional engineering investigations. The module covers separate caller contexts, successful/negative reads, submission and fulfillment, parent/item/approval identifiers, pagination, API decisions and removal, eligible cancellation, controlled duplicates and private reporting for Taylor and Henry. C09 records actual evidence and retained state. No tenant execution or screenshots are claimed.

The review corrected cancellation's use of accountActivityItemId. The status accessRequestId supplies a candidate parent identity-request tracking ID, verified by a parent activity read before the cancel body is sent. Approval operations instead use the matching pending approval's id. The workbench and report now use the current service-versioned paths directly after the API origin. Administrator object/cross-recipient reads, Taylor self submission/history and Priya-owned decisions are distinguished. API REVOKE_ACCESS uses the authorized administrator route rather than assuming ordinary self-revocation matches My Access UI behaviour.

Duplicate attempts are bounded and compared with newRequests/existingRequests and eventual history. Ignored already-held requests may have no additional status row. The report counts item-status records rather than POSTs and does not claim snapshot consistency under concurrent updates. The fixture now uses REJECTED rather than the invalid RequestedItemStatus state DENIED, and labels synthetic parent/item IDs. A local mocked-HTTP test verifies the current report route, GET-only calls and preserved recipient/sort parameters across pages.

Sources checked: [current official OpenAPI specification](https://github.com/sailpoint-oss/api-specs/blob/main/dereferenced/deref-sailpoint-api.json), [API versioning](https://developer.sailpoint.com/docs/api/api-versioning-strategy/), [authentication](https://developer.sailpoint.com/docs/api/authentication/), [authorization](https://developer.sailpoint.com/docs/api/authorization/), [request operations](https://developer.sailpoint.com/docs/tools/sdk/python/access-requests/methods/access-requests/), [cancel body](https://developer.sailpoint.com/docs/tools/sdk/python/access-requests/models/cancel-access-request/), and [Postman local vault variables](https://learning.postman.com/docs/use/postman-vault/use-vault-secrets).

Module 10, AR-058–063, is the next paired walkthrough review. Later labs retain their earlier drafts; native approval-workflow capability is required for that track. Live API permission checks, decision outcomes, duplicate handling, provisioning and screenshots remain pending tenant execution.

Module 9 local checks passed: 12 walkthroughs, 12 journals, six matching working pairs, 471 relevant local references, numbered steps and screenshot inventories; 32 method/path references against the current specification; eight JSON examples and fixture status values; PowerShell example syntax; and all 11 existing/updated local tool tests. No live tenant API calls were used for validation.

## Module 10 paired walkthrough review, 14 September 2026

AR-058–063 now have paired working walkthroughs and individual journals. Goals sit above prerequisites. Both paths include the same submission, review, native verification and restoration steps; engineering adds focused investigations. C10 records active workflow associations and unexecuted cases. No tenant execution or screenshots are claimed.

The review separates native Adaptive Approvals from developer subscriptions and Generic Approval Policy. Serial, parallel and quorum tests pause between reviewer decisions and remove each grant before another case. References to AR-058 now stop at submission, avoiding accidental approval before the learner inspects pending reviews. Production Support retains its form/date/removal settings while its grant control changes to a native Single/Manager policy; the pre-module Manager-then-Security configuration remains recorded separately.

AR-061 uses clean Olivia rather than Lucas, preserving Lucas's retained VPN across Finance profile removals. It checks requestedFor rather than requestedBy and proves the eligibility stop on a disposable profile before attaching Finance items. The draft's pre-approval Deny Access Request mapping was removed: the action requires an approval ID, which may not exist at this point. Named Failure ends replace it. The lab requires the actual request to reach a terminal no-access state and records its returned status rather than promising a reviewer denial. Missing/blank HR tests restore the full private file, including Taylor and controlled addresses. Each Finance entry point has separate eligible and ineligible tests; original removal and on-behalf settings are restored even after an early stop.

AR-062 compares fresh requests before, during and after a direct-review association change. AR-063 supplies the email templating context, verifies the generated Approval Policy status path, distinguishes decision messages from provisioning, cleans up access and restores the original workflow. Email delivery and configured timeouts remain unverified until observed.

Sources checked: [Adaptive Approvals](https://documentation.sailpoint.com/saas/help/adaptive_approvals/index.html), [workflow actions](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html), [native trigger conditions and payload](https://documentation.sailpoint.com/saas/help/workflows/workflow-triggers.html), [operators and end steps](https://documentation.sailpoint.com/saas/help/workflows/workflow-operators.html), [workflow builder](https://documentation.sailpoint.com/saas/help/workflows/workflow-build.html), [workflow management](https://documentation.sailpoint.com/saas/help/workflows/workflow-manage.html), and the firsthand [pre-approval denial issue](https://developer.sailpoint.com/discuss/t/auto-deny-inside-an-adaptive-approvals-workflow/214447). Community reports inform the isolated failure-branch test; they do not establish a passed result in the learner's tenant.

Module 11, AR-064–069, is the next paired walkthrough review. Later labs retain their earlier drafts. Native capability, reviewer timing, eligibility-stop outcomes, provisioning and notifications require tenant execution; screenshots remain pending.

Module 10 local checks passed: 12 walkthroughs, 12 journals, six matching working paths, 575 relevant local file/anchor references, numbered-step sequences, screenshot inventories, email-context JSON and actor/manager values against the HR dataset. These checks do not establish live tenant results.

## Module 11 paired walkthrough review, 15 September 2026

AR-064–069 now have paired working walkthroughs and individual journals. Objectives remain above prerequisites, and both paths share the working procedure. The engineering path adds focused diagnosis and a controlled governance-group reviewer exercise. No tenant requests, subscriptions or screenshots were created during authoring.

The workbench now prepares Taylor's existing sign-in and direct Primary Owner/Priya grant/removal review on a separate subscriber profile. Self requests and removals avoid an unnecessary global on-behalf change. Local JSON/Basic Auth checks precede HTTPS checks and tenant delivery. Live delivery explicitly requires an existing controlled HTTPS route; local tests alone are not described as a working integration.

Filters now restrict recipient, isolated profile and Add operation. The walkthrough uses the current service-versioned validation endpoint, its administrator/scope requirement and positive/negative input cases. Decision uses requestedItemsStatus rather than requestedItems. Subscriptions are saved disabled before use, and only course-owned definitions are changed. Every grant is removed with subscriptions disabled. A request-response slot occupied by another integration is not replaced.

Dynamic Approval distinguishes invocation time from when the appended review becomes actionable. The none response preserves the documented empty id/name/type object. Decision evidence retains per-item approvalInfo and separates delivery, decision and native observation times. Invalid output and a 12-second late response have separate local and tenant checks against the synchronous 10-second limit. Older requests and outstanding invocations must be reconciled before restoring approve mode. C11 includes a fresh grant/removal, original failure history, disabled definitions and an explicit shutdown/restart sequence.

Sources checked: [Submitted contract](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-submitted/), [Dynamic Approval contract](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval/), [Decision payload](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-decision/), [response modes and deadlines](https://developer.sailpoint.com/docs/extensibility/event-triggers/responding-request-response-trigger/), [subscription UI and Activity Log](https://documentation.sailpoint.com/saas/help/common/event_triggers.html), [filter validation](https://developer.sailpoint.com/docs/extensibility/event-triggers/filtering-events/), and the [current official OpenAPI specification](https://github.com/sailpoint-oss/api-specs/blob/main/dereferenced/deref-sailpoint-api.json).

Module 12, AR-070–075, is the next paired walkthrough review. Later labs retain their earlier drafts. Tenant filter results, HTTPS delivery, subscriber timing, actual approval outcomes and screenshots remain pending execution.

Module 11 local checks passed: 12 walkthroughs, 12 journals, six matching working pairs, 508 relevant file/anchor references before the final workbench cross-reference, eight JSON examples and both PowerShell examples. All 11 existing tool tests passed. Additional local checks confirmed the Dynamic none response and the delayed mode's 12-second response. The current filter-validation route/caller/scope was checked against the official specification. No live tenant filter, deadline or delivery result is claimed.

## Module 12 paired walkthrough review, 15 September 2026

AR-070–075 now have paired working walkthroughs and individual journals. Objectives sit above prerequisites, both paths share the working steps, and engineering adds focused investigations. The module covers queue triage, cancellation versus removal and closure, owner handover, mixed item outcomes, reproducible support evidence and the C12 support shift. No tenant execution or screenshots are claimed.

The queue exercise creates a fresh pending request because earlier labs deliberately cleaned up their requests. Earlier incidents remain Historical, and unexecuted scenarios are labelled Synthetic with unknown IDs left empty. Priority comes from observed impact and an actual review expectation, without inventing an overdue threshold. Administrative closure is conditional on a genuinely stuck Pending request after investigation; no connector failure is manufactured merely to exercise that endpoint. Its one-ID body uses an ORG_ADMIN caller and the parent tracking number, with completion audits and independent native checks.

Owner changes are tested with Taylor's existing request and Liam's fresh request. Existing assignees are inspected and individually reassigned where needed; Overwrite Current Approver is explicitly excluded because it approves a step. Priya is restored before fresh routing proof and before submitting a removal. Administrator/requester/reviewer session switches are explicit. The mixed basket uses independent Remote Worker and disposable entitlement memberships, separate item decisions and actual identifiers rather than assuming one basket means one request ID. Cleanup removes the approved access and restores the disposable entitlement's original settings with requestability disabled.

The support handover separates a reported symptom from a demonstrated defect and retains a reproducible sequence, timeline and current state. C12 introduces only two scoped configuration faults, then requires a fresh grant/removal and denial. Historical reports do not count as live repairs. Taylor's original account, Liam's baseline, Lucas's VPN, full private HR file, restored source permissions and optional Module 10/11 state are preserved.

Sources checked: [approval administration, cancellation and reassignment](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html), [entitlement request configuration](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html), [Request Center](https://documentation.sailpoint.com/saas/user-help/requests/request_center.html), and the [current official OpenAPI specification](https://github.com/sailpoint-oss/api-specs/blob/main/dereferenced/deref-sailpoint-api.json).

Module 12 local checks passed: 12 walkthroughs, 12 journals, six matching working pairs, 599 relevant local file/anchor references, numbered-step sequences, screenshot inventories and three JSON examples. The close route, caller requirement, one-ID body, property types and enum values were checked against the current official specification. Whitespace checks passed. These checks do not establish live tenant outcomes.

Module 13, AR-076–078, is the next paired walkthrough review. Later labs retain their earlier drafts. Actual queue controls, owner resolution, per-item decisions, closure eligibility/outcomes, provisioning and screenshots remain pending tenant execution.

## Module 13 paired walkthrough review, 15 September 2026

AR-076–078 now have paired working walkthroughs and individual journals. Goals precede prerequisites; the two payment groups and disconnected source are created inside the labs. Both paths share the working sequence and screenshot inventory, with focused engineering investigations. No tenant execution or screenshots are claimed.

AR-076 now supplies isolated group creation, entitlement discovery, explicit individual grant/removal settings, both policy lists, request/reviewer sessions, direct AD checks and account reconciliation. A warning, reviewer decision, actual target grant and subsequent policy evaluation are recorded independently. The controlled conflict is removed. Lucas retains PREPARE only for AR-077; stopping the track includes full removal and disabling its policy/requestability. Lucas's existing VPN is preserved.

AR-077 removes the draft's unsupported substitution of the trigger accessRequestId for an approval ID in Deny Access Request. It first captures real conflict/clean native inputs through a disposable owner-review configuration, then builds Exists/string checks and explicit true/false comparisons. Named Failure ends stop conflict/unknown inputs, subject to acceptance against the actual terminal request, absent review/write and native membership. Workflow Failure alone is not called denial or successful enforcement. An unaccepted stop restores direct review and resolves the old request separately. The clean case grants and removes; missing/unknown/wrong-type tests are labelled synthetic. Both course policy and workflow finish disabled with payment memberships removed.

AR-078 separates the simulated application register from Acme HR. Four schema fields, account identifiers, existing-identity correlation and a seed Reader value establish two source accounts without new identities. Samuel's approval and source-owner manual task are separate actions. Each grant/removal changes the register, imports the complete current file, checks both account values and then completes the task. The earlier draft's complete-before-import sequence was corrected using the current task documentation, including the documented 24-hour repeated-work-item risk. Optimistic ISC account displays are distinguished from the actual file change. Final state preserves both accounts and Taylor's seed Reader while disabling requestability.

Sources checked: [SoD policies](https://documentation.sailpoint.com/saas/help/sod/manage-policies.html), [reviewer violation information](https://documentation.sailpoint.com/saas/user-help/approvals/reviewing_access.html), [individual entitlement settings](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html), [native workflow input](https://documentation.sailpoint.com/saas/help/workflows/workflow-triggers.html), [action inputs](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html), [workflow operators](https://documentation.sailpoint.com/saas/help/workflows/workflow-operators.html), [flat-file provisioning](https://documentation.sailpoint.com/saas/help/provisioning/index.html), [Task Manager completion](https://documentation.sailpoint.com/saas/user-help/task_manager.html), and [account imports](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html).

Module 13 local checks passed: six walkthroughs, six journals, three identical working paths, 598 relevant local file/anchor references, numbered-step sequences, screenshot inventories, four CSV examples across both paths and the read-only PowerShell example's syntax. Whitespace checks passed. These checks do not establish tenant SoD detection, request termination, manual task routing or reconciliation outcomes.

Module 14, AR-079 onward, is the next paired walkthrough review. Later labs retain their earlier drafts. Capability-dependent execution and screenshots remain pending.

## Module 14 paired walkthrough review, 16 September 2026

AR-079–090 now have paired working walkthroughs and individual journals. Goals precede prerequisites; objects created during a lab are introduced in its steps. Both paths use the same working sequence, verification, restoration and screenshot inventory. Engineering adds focused investigations. No tenant execution or screenshots are claimed.

The review covers Just-In-Time activation, extension and expiry; reauthenticated approvals; governance-group visibility and owner routing; required end dates and targeted account removal; machine requests; Slack requests; nested groups and account state; operator permissions; work reassignment; regression testing; profile-definition changes; and asynchronous callbacks. Capability-dependent exercises identify their actual prerequisites and remain Not run when unavailable. Slack uses the installed collaboration integration, and machine requests require an existing governed machine/account relationship. Neither is implied by an ordinary AD connection.

Isolated profiles avoid changing Production Support's retained workflow and form settings. Cleanup preserves Lucas's VPN and existing baseline assignments. Date tests distinguish a scheduled assignment from a native grant. Machine removal uses the nested machine request body; human removal uses the human body and the selected account's nativeIdentity. The announced fallback duration field is deferred because it is absent from the checked writable configuration schema. Read-only UI observations are not described as proof of backend authorization enforcement.

Delegation tests inspect both already-transferred and fresh requests after restoration. Profile-definition edits compare requested and automatic assignments and explicitly remove residual access after assignment paths are removed. The asynchronous exercise distinguishes acknowledgment, callback completion, ordinary review and fulfillment. Its synthetic preflight includes callback metadata, callback secrets remain private, and the unanswered case requires an observed deadline outcome. A fresh synchronous control verifies restoration.

Sources checked: [Just-In-Time configuration](https://documentation.sailpoint.com/saas/help/access/jit_access_provisioning.html), [activation and extension](https://documentation.sailpoint.com/saas/user-help/launchpad.html), [reauthentication](https://documentation.sailpoint.com/saas/help/requests/reauthenticated_approvals.html), [entitlement settings](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html), [machine requests](https://documentation.sailpoint.com/saas/help/requests/requests_for_machine_identities.html), [Slack integration](https://documentation.sailpoint.com/saas/help/collaboration_platform_integrations/slack/index.html), [user levels](https://documentation.sailpoint.com/saas/help/common/users/user_levels.html), [work reassignment](https://documentation.sailpoint.com/saas/help/users/work_reassignment.html), [profile changes](https://documentation.sailpoint.com/saas/help/access/access-profiles.html), [asynchronous response contracts](https://developer.sailpoint.com/docs/extensibility/event-triggers/responding-request-response-trigger/), and the [official API specification](https://github.com/sailpoint-oss/api-specs/blob/main/dereferenced/deref-sailpoint-api.json).

Module 14 local checks passed: 24 walkthroughs, 24 journals, 12 identical working paths, 766 relevant local file/anchor references, numbered-step sequences, screenshot inventories, eight JSON examples and syntax checks for six PowerShell examples. Request body properties and human/machine structures were checked against the official specification. A localhost-only receiver check confirmed the empty asynchronous acknowledgment, private metadata persistence, unauthenticated rejection, synchronous restoration and absence of test secrets from stdout. No live callback or tenant request was sent. Whitespace checks passed.

Paired walkthrough authoring now extends through AR-090. Capstone review and final cross-module consistency review remain separate work. Tenant behavior, licensed features, approval timing, native provisioning, expiry, integration delivery and screenshots remain pending execution.

## Paired capstone review and course consistency checks, 16 September 2026

CAP-01–03 now have six guided walkthroughs and six journals across the beginner and engineering paths. Goals precede true prerequisites. Each pair shares the working procedure; engineering adds a bounded troubleshooting exercise. Screenshot prompts match the end inventory, and the course index/sidebar link both paths. No tenant execution or screenshots are claimed.

Finance uses clean Olivia, preserves Lucas's VPN and accepted Finance grant workflows, configures an explicit removal route for the tests and restores the original removal policies. Each grant is removed before the next case. Catalog visibility is distinguished from recipient eligibility, and optional SoD uses its own payment-group evidence.

The support capstone now consistently names six reports. Two controlled live faults have exact repair and retest steps; earlier incidents remain Historical or Synthetic when not currently occurring. Owner restoration is separated from reassignment of an existing task. Fresh grant/removal and denial establish the restored route. Unknown evidence remains Pending rather than becoming an invented defect or successful repair.

Temporary Support uses dedicated profiles and a dedicated workflow, preserving the earlier service configuration. Its recipient gate must pass isolated non-Finance and missing-data request tests before service attachment. The actual terminal request and absent target access are required; workflow Failure alone is not approval denial. The full HR file and original on-behalf mode are restored. Both allowed departments, manager-then-Security review, opposing on-behalf requester/recipient combinations, real decision messages, native scheduled boundaries and a date amendment are covered. The rollback field remains optional with a Production visibility condition; a separate reviewer-denial case demonstrates the business requirement. A Show condition is not described as conditional-required validation. Cleanup disables only the capstone definitions after resolving their requests.

Primary sources rechecked: [workflow action inputs and reviewer categories](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html), [profile and role request/date settings](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html), [profile assignment and removal behavior](https://documentation.sailpoint.com/saas/help/access/access-profiles.html), [approval administration](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html), and [form fields and conditions](https://documentation.sailpoint.com/saas/help/forms/index.html). Existing module walkthroughs supply the referenced, bounded procedures.

Local checks passed: six capstone walkthroughs and journals, three matching working pairs, sequential step numbers, screenshot inventories and 2,233 course-wide local file/anchor references before this validation entry. A structural pass over all 180 lab walkthroughs confirmed objectives above prerequisites, journals and screenshot sections. It added the explicit AR-032 objective and standardized AR-001/002 screenshot headings. Whitespace checks passed. This structural pass is not a claim of exhaustive new behavioral review or tenant execution. All capstone feature availability, gate outcomes, reviewer routing, messages, provisioning, timed observations and screenshots remain pending learner execution.

## Module 1 learner and screenshot review, 16 September 2026

The learner reports completing AR-001–006. Reviewed Module 1's two paths and the supplied evidence; the next tenant lab is AR-007 after the two pilot accounts and baseline memberships are checked. No tenant actions were performed by the agent. Extra engineering variations and cropped/missing screenshot views are not implied complete by the progress report.

Confirmed the 16 loose AR-002–004 originals match the already-published copies. Retained all existing images. Added 12 unchanged AR-005–006 images and embedded each in both paths. Captions identify the displayed evidence precisely: imported baseline entitlement rather than an AD Members tab; first three mapping rows rather than the full policy; Liam's blank Manager; the Users OU DN rather than Lucas's account DN; the difference between an activity summary and Committed source details; and one selected-source AD account among HR/IdentityNow rows. Existing inventories list the remaining full mappings, password-policy, current manager, expanded operations and native account/membership views.

The walkthrough corrections add the ISC Manager/Priya check without conflating it with the disabled AD manager creation mapping, preserve successful provisioning on repeats, explicitly reuse existing definitions, and check existing accounts before the beginner batch expansion. AR-008 preserves the entire current HR population. AR-009 distinguishes the original C01 baseline from later legitimate accounts and business access. The progress record no longer sends this learner back to AR-002.

References rechecked: [account creation](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html), [role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html), and [provisioning monitoring](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html), alongside the supplied screenshots.

Local checks passed: all 18 Module 1 walkthrough structures and journals, 66 embedded image references across both paths, byte equality of the 12 newly published image copies to their supplied originals, AR-005/006 screenshot-inventory consistency, 2,256 course-wide local file/anchor references before this entry, two PowerShell examples parsed without execution, and whitespace checks. Screenshot evidence remains limited to the visible panels; additional native views and AR-007 onward execution remain pending.

## Module 3 final learner review, 16 September 2026

Reviewed AR-016–021 in both paths and all 12 journals. Corrected existing-object reuse, requester/admin session transitions, checks for requests made by another person, native retained-access verification, and HR registration/file-preservation steps. See [the review record](M03-REVIEW.md#final-learner-walkthrough-review-16-september-2026).

All 12 walkthrough structures, 12 journal acceptance lists, six paired working procedures, screenshot inventories and expandable answers passed. The changed-file check resolved 159 local file links and their referenced heading anchors before this validation entry; whitespace checks passed. Official application, role-revocation and user-removal documentation was rechecked. No tenant actions were performed and no new screenshots were added. AR-001–006 remain learner-reported complete; AR-007 tenant execution has not started.

## Module 4 final learner review, 16 September 2026

Reviewed AR-022–027 in both paths and all 12 journals. Added missing native before checks, clarified session and interrupted-permission handling, distinguished first-pass account creation from repeats, and supplied pending-request and imported-assignment checks for Sofia's account-specific exercises. See [the review](M04-REVIEW.md#final-learner-walkthrough-review-16-september-2026).

All 12 walkthrough structures, 12 journal acceptance lists, six matching working procedures, screenshot inventories and expandable answers passed. The changed-file check resolved 145 local file links and referenced heading anchors before this entry; whitespace checks passed. Current official request/segment/account-selection references were rechecked. No tenant operations or new screenshot validation were performed. AR-001–006 remain learner-reported complete; AR-007 has not started.
