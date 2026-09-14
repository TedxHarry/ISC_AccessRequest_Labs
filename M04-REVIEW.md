# Module 4 content review

Date: 13 September 2026. Scope: AR-022–027 in both folders, evidence journals, starting/handoff state and navigation. Baseline: `151da3754e98f4dcbf6a598a7568ebfed0e0fe82`, which includes Module 3 and the separately published provisioning-lookup improvements.

## Gaps corrected

| Lab | Walkthrough and reasoning corrections |
|---|---|
| AR-022 | Added a working starting catalog, exact Add Criteria/Add to Segment actions, enablement, propagation checks, all three Finance objects and an unsegmented control. Explained alternate segment visibility and the org-admin exception. |
| AR-023 | Added original-setting capture, exact audience/recipient selection, active/direct-report checks, a five-row matrix and explicit no-submission behavior. Defined what to restore if pausing before AR-024. |
| AR-024 | Separated requester and recipient identifiers, verified the saved reviewer before submission, checked both denied profile groups, and restored the original on/off state as well as mode. Added recovery for accidental approval without touching Lucas's independent grant. |
| AR-025 | Added complete-file backup and single-field verification, named HR account/mapping/identity/segment screens, an unchanged control, and restoration that preserves newer rows and private emails. Explained the first mismatching stage instead of prescribing generic refreshes. |
| AR-026 | Expanded source-scope verification, supported DN schema check, baseline filter value construction, full second-account creation, unique correlation and actual account-name/ID recording. Distinguished automatic baseline criteria from interactive request targeting, then verified and removed the exact requested account assignment. |
| AR-027 | Replaced abbreviated ticket-only instructions with a complete assessment walkthrough. Demonstrated intended restriction, an administrator/ordinary-user comparison under a controlled data change, restoration, and a second real grant/removal cycle targeting Sofia's standard account. Kept the earlier second-account grant's historical evidence distinct from today's cleaned state. |

Both folders expose the complete working steps. Engineering pages add predictions, supplied tickets with answers and resume guidance. No partner is required. Every numbered working section has a Check, and screenshot prompts map to the end-of-lab lists. Journals include actor/recipient, visibility, source data, native account and exact assignment evidence.

## State and logical review

- The Finance segment stays enabled from AR-022 onward; the request-on-behalf mode changes only for AR-023–024 and is restored against a recorded original configuration.
- Liam remains outside Finance and receives no Finance grant in the denial exercise. Lucas retains his independently requested VPN.
- Department exercises preserve the latest complete HR population and restore Lucas to Finance without widening the segment.
- Baseline account selection is configured before processing Sofia's second account. The imported DN criterion must match exactly one of her two accounts. Existing baseline membership is not misreported as a new provisioning operation.
- The first pass progresses from 24 standard accounts to 25 lab AD accounts while retaining 24 HR identities and 24 baseline identities/standard memberships.
- AR-026 targets the second account; AR-027 targets standard. Each grant is removed from its exact requested assignment through ISC, with both accounts checked before, during and after.
- C04 retains both accounts, baseline criteria, original request-on-behalf settings, restored HR data, the Finance restriction and C03's business definitions. It leaves Olivia clean for AR-028's approval-routing work.

## References checked

- [Access request segments](https://documentation.sailpoint.com/saas/help/requests/segments.html): criteria/add/save/enable actions, requester scope, alternate visibility and administrator exception.
- [Requests for others](https://documentation.sailpoint.com/saas/help/requests/requests_for_others.html): global setting and direct-report versus everyone modes.
- [Request Center](https://documentation.sailpoint.com/saas/user-help/requests/request_center.html): audience selection and submission.
- [Multiple Account Options](https://documentation.sailpoint.com/saas/help/access/access-profiles.html): automatic assignment scope, account matching and its distinction from requests.
- [Multi-account product announcement](https://developer.sailpoint.com/discuss/t/new-capability-multi-account-support/105600): account-name/ID selection, approval details and recorded target. Its public Select Accounts screenshot was inspected for the selection and submission controls. Older rollout comments were not treated as current removal limitations.
- [Current user removal](https://documentation.sailpoint.com/saas/user-help/requests/requesting_access_removal.html): My Access and exact entitlement assignment revocation.
- [AD schema reference](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/schema_attributes.html), [schema management](https://documentation.sailpoint.com/saas/help/accounts/schema.html) and [identity processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html): imported DN and attribute/data checks.

## Validation boundary

Local validation covers Markdown links/anchors, paired procedures, section Checks, journals, screenshot lists, matching actor data and required handoff states. Final local results are recorded in [VALIDATION.md](VALIDATION.md).

No tenant requests, AD account creation, approval decisions, source imports or new learner screenshot validation were performed in this writing pass. Run the labs in order and record actual UI labels, propagation, account chooser values, correlation, grant/removal activity and native results before marking them tenant-tested. Later modules have not received this paired review.
