# Course content audit

Review date: 8 September 2026. Baseline reviewed: d832fc3, the 90-lab expansion.

## Assessment

The topic coverage is broad, but the earlier publication summary overstated consistency of the walkthroughs. The foundation labs contain more instructional detail than many later exercises. File counts, working links and sample-tool tests did not establish that the whole course was logically executable. This review found real sequence, payload and instruction gaps.

This pass reviewed the lab sequence and retained state across AR-001–090, shared procedures, examples and capstones. Product documentation was rechecked for the affected behaviors. It did not execute the course in ISC. Only AR-001 has learner-reported completion.

## Corrections made

| Finding | Affected material | Correction |
|---|---|---|
| Later actors lacked prepared sign-in sessions | AR-008, first-use labs | Added actor/session table, complete-file email updates and links at first use. Olivia’s first request no longer assumes she was registered in AR-008. |
| Optional capabilities formed an unnecessary linear chain | AR-040 onward, coverage | Added a practice path with real dependencies. Forms, adaptive workflows, SoD, disconnected sources and JIT no longer imply prerequisites for unrelated exercises. |
| Shared settings and existing access could invalidate later tests | Lab desk, practice path | Added before/after state checks, current request authority, pending-duplicate checks, retained Lucas VPN and the 24-to-25 HR population change. |
| Incorrect identity navigation | AR-012 | Select the identity first, then its Accounts/Access tabs. |
| Denying the first serial stage did not demonstrate the second | AR-031 | Approve Daniel’s stage and deny Priya’s stage in the distinct-reviewer test. |
| Self-approval could leave access behind | AR-031 | Handle both pending and already-provisioned outcomes; remove any grant instead of attempting cancellation afterward. |
| Direct timeout configuration was mixed with workflow terminology | AR-032–033 | Expanded escalation fields and distinguished direct expiration from the workflow Action at Timeout. Clarified unfinished timed observations. |
| Form setup compressed three fields into one step | AR-034 | Added separate field, technical-key, required-flag and Apply/Save instructions. |
| A conditional Required effect was suggested without documented support | AR-036 | Removed that suggestion; the Show condition and reviewer-enforced rollback requirement are separate controls. |
| The known-good permission-fault control had no explicit cleanup | AR-048 | Named Remote Worker as the control and added its removal/verification. |
| AD rename did not explicitly verify the identifier used by later commands | AR-049 | Check both the new name and sAMAccountName plus DN/GUID and a native lookup. |
| Missing department could produce an execution error rather than a denial | AR-061 | Added existence/type checks, an isolated live denial test, restored HR data and a gate before Finance association. |
| Finance eligibility covered only one request path | AR-061, CAP-01 | Added independent positive/negative tests for both profiles and the Analyst role; direct entitlements and automatic assignments are explicitly separate paths. |
| SoD lab assumed a native workflow sample existed after direct review | AR-077 | Generate a disposable native-workflow request, deny it, and inspect that execution before building the gate. |
| Every non-approved output could be mislabeled as denied | AR-063 | Use Approval Policy status and APPROVED comparison; other outcomes receive a neutral message containing actual status. Attach the clone before trying to inspect its execution. |
| Decision subscription used the wrong item array | AR-067, subscriber workbench | Decision filters use requestedItemsStatus; Submitted/Dynamic use requestedItems. Added trigger-specific synthetic payloads. |
| Decision logger omitted the evidence required by the lab | Subscriber tool/tests | Record recipient/requester IDs, item IDs, per-reviewer decisions and approver IDs without logging private comments/secrets. Added regression tests. |
| Existing request-response subscriptions were not accounted for | Subscriber workbench | Check the one-subscriber constraint before creating an integration; do not replace an existing subscription to run a lab. |
| Configuration instructions lacked a concrete current operation | API workbench | Added service-versioned GET/PUT, replacement semantics, before/after comparison and protection against overwriting intervening changes. |
| Closure was described too loosely | AR-071, API workbench | Added pending eligibility, tracking ID lookup, the actual close body, completion audits and the Provisioning Completed event side effect. A terminal historical failure is not a live closure exercise. |
| Account-removal setup pointed to an exercise whose cleanup removed the test grant | AR-082 | Repeat only the two-account grant steps first, supply explicit revoke JSON, then verify the surviving account and final cleanup. |
| Bulk-operation test recipients were unspecified | AR-086 | Use distinct named recipients and recorded IDs to avoid duplicate requests or unrelated queue entries. |

## Items still requiring evidence

| Item | Current disposition | Evidence required before acceptance |
|---|---|---|
| Native Deny Access Request identifier | AR-061/077 have a mandatory isolated verification gate. The documentation labels the input Access Request ID but describes an Approval ID. No equivalence was proved in this tenant. | Successful action and matching request becoming Denied, including missing-data case. Retain direct review if this fails. |
| End-date fallback configuration | The announcement describes fallbackAccessDurationInDays, but the current published AccessRequestConfig2 model does not list it. AR-082 defers this setting mutation rather than inventing a writable field. | Current supported operation/schema, saved before/after configuration and resulting request dates. |
| Machine identity, external channel and HTTPS setup | These are conditional exercises with external environment prerequisites, not complete installation guides for every product/integration. | Named tenant capability/integration, prepared isolated account or endpoint, and a verified walkthrough for that actual setup. |
| UI differences and current feature availability | Paths and controls require confirmation in the learner’s tenant. | Screenshots and actual results while executing each affected lab. |
| Timed expiration, quorum/self-approval and provisioning outcomes | Authored expected tests, not tenant-proven results. | Real request, reviewer, activity and native target evidence; unobserved time boundaries remain incomplete. |

Do not mark the 90 labs all validated. The audit corrects known written defects and makes unverified behavior visible; it cannot replace running the course.

## Release and practice checks

- Preserve all 90 lab IDs, the 90 evidence journals and existing screenshots.
- Check local links and the HR dataset’s uniqueness, manager references and department counts.
- Run the local tool tests after changing the subscriber; synthetic test success is not live event delivery.
- Accept a lab only when its actors can follow the steps, both the positive and negative outcomes are observed, and cleanup returns the expected state.

For the learner’s next session, run AR-002 and compare the resolved hierarchy with its full verification table. Do not restart the completed HR import or jump to an advanced feature simply because its instructions are published.

## Sources used for the corrections

- [Native request input](https://documentation.sailpoint.com/saas/help/workflows/workflow-triggers.html) and [workflow action contracts](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html)
- [Workflow type checks](https://documentation.sailpoint.com/saas/help/workflows/workflow-operators.html) and [form fields/conditions](https://documentation.sailpoint.com/saas/help/forms/index.html)
- [Approval settings](https://documentation.sailpoint.com/saas/help/requests/config_approval_settings.html)
- [Decision payload](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-decision/) and [Submitted request-response contract](https://developer.sailpoint.com/docs/api/access-request-submitted-event/)
- [Current request operations](https://developer.sailpoint.com/docs/tools/sdk/python/access-requests/methods/access-requests/), [configuration model](https://developer.sailpoint.com/docs/tools/sdk/python/access-requests/models/access-request-config2/) and [close model](https://developer.sailpoint.com/docs/tools/sdk/python/access-requests/models/close-access-request/)
- [End-date announcement](https://developer.sailpoint.com/discuss/t/enhancement-mandatory-end-date-and-max-duration-on-access-requests/192669)

[Practice path](PRACTICE-PATH.md) · [Validation record](VALIDATION.md) · [Course outline](README.md)
