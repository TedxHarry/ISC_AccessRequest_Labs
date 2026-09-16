# Module 1 learner walkthrough review

## Latest learner progress and screenshot review — 16 September 2026

The learner reports completing AR-001–006. Next is AR-007, after confirming Lucas and Liam retain their correctly linked standard AD accounts and direct baseline membership. No account or role membership needs to be removed to retake a screenshot.

AR-001–004 already have 21 published screenshots in each path. The 16 loose AR-002–004 originals match the published image bytes, so no replacement was needed. Added 12 unchanged AR-005–006 images, referenced from both paths. The originals remain untouched. The final inventories distinguish included panels from additional views still needed.

| Review finding | Correction |
|---|---|
| AR-005 baseline filename could imply an AD screenshot | Caption identifies the ISC entitlement list and distinguishes the source total from the 15 course groups. |
| Create Account image shows only the first three rows | Caption preserves the requirement to inspect UPN order, employeeID, password and remaining mappings. |
| Liam's displayed Manager is blank | Both paths now explicitly recheck Priya/E002; the AD manager creation mapping is a separate setting. No claim is made that the current tenant still has this earlier blank value. |
| Lucas before-image highlights the OU DN | Caption tells the learner to capture Lucas's account DN separately; his visible objectGUID and empty Members list remain useful. |
| Activity summary and source stages differ | Captions distinguish Lucas's completed summary, Liam's Committed create request, and the independent AD checks still required. |
| Liam has three source rows | Verify one course AD account; HR and IdentityNow rows are not duplicate AD accounts. |
| First-run steps could be replayed after successful provisioning | Added early resume guidance, explicit reuse checks and preservation of later role members. |
| Later repeats of AR-008/009 could imply reverting the population | Preserve the complete current HR file, later accounts and legitimate access; report first-pass counts separately. |

Reviewed Module 1's HR-to-manager-to-AD sequence and the pilot-to-batch-to-session handoff in both paths. The supplied images establish the visible configuration and displayed outcomes, not every cropped attribute, native membership, password-policy check or engineering variation. The optional captures remain in AR-005/006's existing inventories rather than a new checklist document. Official provisioning, role assignment and monitoring references were rechecked. This is a writing/screenshot review, not an agent-executed tenant test.

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

At the earlier review, only AR-001 had learner-reported completion. The 16 September update above supersedes that status: AR-001–006 are now reported complete, and AR-007–009 remain next. In particular, verify the actual UI labels, assigned AD password policy, enabled state, account creation result, sign-in route and absence of unintended role assignments. IQService installation and TLS setup remain stated environment prerequisites, not a newly authored installation guide.

The earlier next-step recommendation was AR-002. Now continue with AR-007 after checking the pilot accounts; preserve the completed configuration. Extra engineering practice and missing screenshot views are not automatically proved by the completion report.

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
