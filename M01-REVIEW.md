# Module 1 learner walkthrough review

## Screenshot and terminology correction — 12 September 2026

Compared the 16 supplied AR-002–004 screenshots with both paths. Embedded unchanged copies beside the matching steps. Corrected the UI label to Employee Number throughout Module 1; the mapping screenshot confirms its technical name remains identificationNumber. Removed the unsupported requirement to find or restore an AD Delta Aggregation toggle. AR-003 uses the account-aggregation page; AR-004 uses the request-only disableOptimization flag. Updated the API URL to the documented /sources/v1 endpoint shown in the supplied Postman collection.

The images establish the displayed mappings, hierarchy sample, lab OUs and groups, imported account and linked-account views. They do not establish completed unoptimized aggregation, every imported employeeID value, all group-search settings or all 14 entitlement details. Captions and remaining-capture lists distinguish these checks. The recommendation refresh error is identified separately from correlation configuration. Existing navigation changes from origin/main were retained. No tenant operations were performed during this review.

References: [Account loading and optimization](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html), [current account aggregation API](https://developer.sailpoint.com/docs/tools/sdk/powershell/sources/methods/sources/#import-accounts-v1), and the supplied screenshots. The general account-loading page still describes delta controls for supported connectors; this course no longer assumes that control is exposed in the supplied AD interface.

Reviewed 9 September 2026. Scope: AR-001–009, supporting aggregation instructions, evidence journals and the transition into Module 2. This is a documentation walkthrough, not a claim of running the tenant.

## Assessment

The sequence is appropriate. Importing HR before correlation, proving a Lucas membership update before creating Liam, and expanding the role in batches provide useful checkpoints. Creating only Lucas manually preserves an existing-account correlation exercise; the other standard accounts are provisioned. Do not move the first request into this module before the environment is ready.

The weaknesses were instructional transitions and assumptions about an existing environment. A learner could follow individual steps yet misinterpret what had been proved.

| Lab | Finding and disposition |
|---|---|
| AR-001 | Added a delimiter/column parsing check before import. Preserve the supplied screenshots and distinguish source import from authoritative profile processing. |
| AR-002 | Configuration and hierarchy checks are coherent, but diagnosis was mostly a troubleshooting table. Added a controlled wrong-manager-reference exercise and explicit restoration evidence. |
| AR-003 | Reusing Lucas outside Users conflicts with the later standard-account selection criterion. Added a layout decision for dedicated course accounts and a recorded exception for accounts that must remain elsewhere. Source search coverage still precedes aggregation. |
| AR-004 | The unoptimized aggregation procedure had no response-handling guidance. Added authentication, permission and request-format checks. A matched account must still be verified against the correct identity. |
| AR-005 | Mapping values were supplied but field-editing/reordering actions were compressed. Added those actions, a resumable baseline-group check and explicit account-state expectation. The generator/static syntax and pwdLastSet true setting were checked against current ISC connector documentation and retained. |
| AR-006 | The existing-account update/new-account creation comparison is sound. Actual account state and membership remain acceptance checks; Test Connection is not the proof. No artificial failure was added before establishing successful provisioning. |
| AR-007 | The per-employee list implied repeated full source aggregations. Changed to one aggregation per completed batch followed by individual account checks. |
| AR-008 | Changing HR email after account creation can leave AD mail unchanged. Added the distinction between creation mappings, identity updates and attribute synchronization. Registration uses the identity email and selected sign-in route. |
| AR-009 | A completed checklist alone did not test understanding. Added six questions requiring actual evidence and clarified that C01 does not prove a business request/approval/revocation yet. |

Added M01-READINESS.md with tool/permission prerequisites, expected counts at each stage, resume guidance and the boundary between an existing read connection and provisioning readiness.

## Hands-on guidance pass

All nine lab pages now include a named starting session and state, a practical comparison or controlled variation, an independent diagnosis ticket with an expandable solution, resume guidance, and a retained-state table. Screenshot reminders sit beside the related procedures and the capture lists remain at the end. Journals distinguish observed tenant results from supplied ticket cases.

AR-001 and AR-002 retain their reversible data-change exercises. The provisioning sequence uses successful account comparisons before diagnosing supplied failure cases, so a first-time learner does not need to break a working source to complete the practice. AR-009 checks another employee and requires evidence across the complete foundation.

This pass is limited to Module 1. Apply the same review to Module 2 next; later modules have not received this additional guidance pass.

## Limits and next validation

AR-001 is learner-reported complete. AR-002–009 still require execution in the learner’s tenant. In particular, verify the actual UI labels, assigned AD password policy, enabled state, account creation result, sign-in route and absence of unintended role assignments. IQService installation and TLS setup remain stated environment prerequisites, not a newly authored installation guide.

Run AR-002 next. Keep both the correct hierarchy evidence and the wrong-manager/restored-manager evidence. Do not repeat AR-001’s source creation to obtain new screenshots.

[Module prerequisites](M01-READINESS.md) · [Course validation](VALIDATION.md)

## Paired Module 1 walkthrough review

Reviewed both folders against baseline commit fc66a5036af72e9a3b51ccba3e902a509b272336. Scope is AR-001–009 only. The shared [configuration record](M01-STATE.md) defines the original population, names, actual-value lookup instructions and retained states.

- Beginner pages now name the session, add independent checks and explanation prompts, and provide short next actions when results differ. Screenshot filenames appear beside capture steps and in end-of-lab lists.
- Engineering pages provide entry points for existing configurations. Retain completed role membership, accounts and registrations; use historical creation evidence when the original operation cannot be repeated without rebuilding. Journals distinguish that evidence from current observations.
- Corrected gaps in HR schema/parsing actions, complete hierarchy verification, AD object creation and full-scan restoration, correlation criteria explanations, creation mapping edits/order, Lucas before/after identifiers, four-person batch account links, authentication prerequisites and C01 evidence.
- AR-008 retains working external authentication instead of requiring a profile sign-in change. Both versions distinguish identity email from ongoing AD mail synchronization.
- Beginner AR-009 includes an independent James/Elena foundation assessment and expandable acceptance guidance. Engineering AR-009 retains its diagnosis ticket and current-evidence assessment.

Official references reviewed: [creation mappings](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html), [role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html), [correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html), [profile settings](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html), and [AD search settings](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/account_and_group_settings.html).

This records a writing and consistency review. It does not add tenant execution evidence. Future changes to a shared object, dataset or retained state must be checked against both versions of its lab and the following lab. Later modules remain outside this pass.

Local validation checked repository Markdown paths, Module 1 entry anchors, all 18 walkthrough structures, screenshot-list consistency and the roster values used by the independent exercises. These checks establish document consistency, not live provisioning or UI execution.

## Direct-entry recheck before Module 2

Confirmed AR-001–009 retain setup procedures and do not require the beginner copies. Added a first-run reading instruction and corrected AR-006’s Lucas activity check, which pointed prematurely to Liam’s later verification. Existing environment prerequisites, including provisioning connectivity, remain explicit. This was a documentation check, not a tenant run.
