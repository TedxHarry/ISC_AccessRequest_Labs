# Module 1 learner walkthrough review

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

## Limits and next validation

AR-001 is learner-reported complete. AR-002–009 still require execution in the learner’s tenant. In particular, verify the actual UI labels, assigned AD password policy, enabled state, account creation result, sign-in route and absence of unintended role assignments. IQService installation and TLS setup remain stated environment prerequisites, not a newly authored installation guide.

Run AR-002 next. Keep both the correct hierarchy evidence and the wrong-manager/restored-manager evidence. Do not repeat AR-001’s source creation to obtain new screenshots.

[Module prerequisites](M01-READINESS.md) · [Course validation](VALIDATION.md)
