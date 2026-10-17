# Module 9 learner walkthrough review

## Final learner walkthrough review, 17 September 2026

Scope: AR-052–057 in both paths, their 12 journals and the shared API workbench. AR-001–006 remain learner-reported complete; AR-007 tenant execution has not started. This review made no authenticated tenant calls and added no tenant screenshots.

- AR-052 reuses valid caller environments and PATs on repeat runs. It avoids repeating the token exchange immediately after the workbench setup already completed it.
- The workbench explains that environment variables are separate for each caller. Old approval/activity IDs are recorded before clearing them for a new case. Failed reads are not treated as empty pagination results; delayed records trigger another GET rather than another grant.
- AR-053 records Taylor's starting DN/GUID and verification controller, waits for approval visibility and successful provisioning, and confirms the imported assignment before removal.
- AR-054 compares page counts and repeated status IDs, preserves original pages when they disagree, and waits for a newly created approval instead of submitting another request.
- AR-055 verifies current pending approvals before decisions, uses the removal's own parent activity, checks cancellation eligibility again before sending, and identifies each repeated case with a new run comment.
- AR-056 rereads the original approval after resolving duplicate work and checks the imported assignment before the already-held-access exercise.
- AR-057 checks repeated IDs and missing known records, rather than relying on total row count alone. The handoff and shared cleanup preserve the complete current HR population, including any later-course records.
- Both paths retain the same working procedure and screenshot lists. Engineering investigations remain additional exercises. Eight journals now capture the new account, paging and identifier checks.

## References checked

- [Access-request operations, status and cancellation](https://developer.sailpoint.com/docs/tools/sdk/python/access-requests/methods/access-requests/)
- [Access-request body model](https://developer.sailpoint.com/docs/tools/sdk/python/access-requests/models/access-request/)
- [Pending approval and decision operations](https://developer.sailpoint.com/docs/tools/sdk/python/access-request-approvals/methods/access-request-approvals/)
- [Postman Local Vault variables](https://learning.postman.com/docs/use/postman-vault/use-vault-secrets)

The service-versioned routes and array-valued requestedFor body remain in place. Current Postman documentation supports secure environment variables backed by Local Vault secrets. Tenant permissions, actual duplicate handling, cancellation races and provisioning outcomes still need execution evidence.

## Local verification

Passed checks for 12 walkthrough structures, six matching working procedures, screenshot inventories, expandable answers, 102 local file links and referenced heading anchors, and 13 JSON examples. Reviewed all 12 journals. All four existing report-tool tests passed: fixture output/no overwrite, rejection of an error envelope, reading after a full final page, and the live GET route with recipient filters preserved across pages. The live-route test uses mocked responses; it is not tenant execution. Whitespace checks passed.
