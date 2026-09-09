# Access Requests course review and proposed practice exercises

Reviewed: 8 September 2026.

This is the design review that preceded the course expansion. Its proposed exercises are now mapped in [COVERAGE.md](COVERAGE.md), with walkthroughs through AR-090. See [VALIDATION.md](VALIDATION.md) for the distinction between authored instructions and live tenant validation.

## Assessment

The course has a sound progression: prepare identities and accounts, deliver a request, package access, test visibility, route approvals, handle dates and removal, then investigate failures and automate operations. Keeping the same Acme identities and AD groups makes cause and effect easier to follow.

The outline covers the main lifecycle, but it does not yet cover every important kind of Access Request work. Some subjects need more precise cases, and disconnected fulfillment and separation of duties need explicit exercises. AD provides a useful core environment; it cannot demonstrate every application's provisioning behavior.

**Delivery status at the time of the initial review:** AR-001–009 had walkthroughs and AR-010–075 were outline assignments. The subsequent expansion adds the remaining walkthroughs and additional tracks. The learner has reported completing AR-001; later live exercises and screenshots remain to be validated.

This review samples relevant ISC Developer Community discussions and checks product expectations against SailPoint documentation and product announcements. It is not an exhaustive inventory of community issues. IdentityIQ discussions were excluded. Community reports provide investigation scenarios; a reported defect is not assumed to remain reproducible today.

## Keep the foundation, then follow one request

Keep Lucas's existing-account correlation exercise and Liam's account-creation exercise. They teach different operations that practitioners must distinguish. Provisioning the remaining standard accounts provides known reviewers and recipients for later tests.

After the foundation, complete AR-010–015 before adding more infrastructure. Capture one request from submission through approval to native AD membership and removal. That working example becomes the control for every failure exercise.

Retain the baseline role. Use separate business groups when deliberately breaking permissions or testing removals. A cleanup step must preserve standard accounts, the baseline assignment, and unrelated memberships.

## Product changes to include

| Capability | Verified change | Practice to add |
|---|---|---|
| Approval service enhancements, announced January 2026 | Approval expiration, configurable governance-group visibility, consolidated assignments for a repeated approver, and revised configuration APIs | Compare distinct reviewers with the same manager/owner; inspect timeout outcome and effective configuration; record the people visible behind a group. [Announcement](https://developer.sailpoint.com/discuss/t/enhancement-approvals-expiration-governance-group-visibility-and-more/193947) |
| Required end dates and maximum duration, announced January 2026 | Access items can require end dates and constrain duration; API fallback behavior differs from UI input requirements | Test missing dates, excessive duration, and effective dates through UI and API. Configure and inspect each item type rather than assuming package settings inherit. [Announcement](https://developer.sailpoint.com/discuss/t/enhancement-mandatory-end-date-and-max-duration-on-access-requests/192669) |
| Future start dates, announced April 2026 | Approval can precede provisioning. A supplied start date becomes the basis for maximum duration | Check absence before the start, presence afterward, and date amendments. Compare My Access amendments with a Request Center re-request because approval routing can differ. [Announcement](https://developer.sailpoint.com/discuss/t/new-capability-start-date-in-access-requests/206094) |
| Native access-request forms, announced July 2026 | Forms attach to entitlements, profiles, and roles; submitted data is available to reviewers | Require a native form, test a multi-item request, and trace each item's answers. Inspect the provisioning evidence before claiming a form field changes an AD attribute. [Announcement](https://developer.sailpoint.com/discuss/t/new-capability-forms-for-access-request/217255) |
| Multi-account requests, announced March 2025 | Account selection supports requests and account-specific revocation | Extend Sofia's test to grant and remove on selected accounts, with evidence for the untouched account. This is established functionality, not a 2026 release. [Announcement](https://developer.sailpoint.com/discuss/t/new-capability-multi-account-support/105600) |

Check availability in the training tenant before writing feature-dependent steps. Announcement dates do not prove that a feature is enabled for this tenant or subscription. Current role/profile documentation confirms native form configuration and the distinction between duration measured from submission and from a selected start date. [Current configuration guide](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html)

For approval API exercises, read the effective configuration using the current supported operation. The approval-service announcement warns that older access-request configuration writes can overwrite newer approval settings. Do not use an old copied payload to reset a lab. Save and restore the configuration through the appropriate current API.

Also test configuration precedence: global settings, access-request settings, individual-item overrides and workflow behavior. Current documentation states that reminder, escalation and timeout changes apply to newly created requests; pending requests retain their submission-time configuration. Make this the expected comparison in AR-032 instead of leaving it as an unexplained possibility. [Global approval settings](https://documentation.sailpoint.com/saas/help/requests/config_approval_settings.html)

## Proposed exercises within existing labs

Each row is an exercise specification to develop into a walkthrough. Existing lab numbers remain unchanged.

| Where | Exercise | Required proof and reset |
|---|---|---|
| AR-024, AR-061 | An eligible requester asks for access for an ineligible recipient. Repeat for an eligible recipient. Evaluate the recipient in the approval condition. | Record both identity IDs, input attributes, branch and decision. Remove the test grant and restore routing. |
| AR-026, AR-045 | Give Sofia the same test entitlement on two accounts. Remove it from only the selected account. | Record both account identifiers, approval details and both native memberships before/after. Restore only the changed assignment. |
| AR-028–031 | Compare manager and owner as different people, then as the same person. Separately test requester/reviewer overlap. | Record tasks and audit decisions; distinguish consolidation from self-approval behavior. Restore owners. |
| AR-030–033 | Use an unresolved reviewer, a configured fallback and a valid control reviewer. Exercise approval expiration separately from access expiration. | Save effective settings, assignment history and final outcome. Restore settings; retain a timed observation task when expiration cannot finish during the session. |
| AR-034–039 | Attach a native form to two access items. Submit both, edit one set of answers, and inspect each review. Try missing required input. | Capture per-item answers and rejection evidence. Restore form associations. Treat ticket validation and AD attribute mapping as separate integrations. |
| AR-040–041 | Test no start date versus a future start, a valid maximum duration versus an excessive one, and browser/UTC timestamps. | Build a request/approval/start/end timeline and verify native membership at each boundary. Remove temporary access after the test. |
| AR-040, AR-055 | Shorten and extend dates through the supported assignment view, then compare a re-request through Request Center. | Record previous/new dates and actual approval route. Restore or remove the assignment. |
| AR-046, AR-051 | Request access for an existing disabled account. Compare group membership with the ability to use the account. | Record the actual connector operation, account state and membership. Do not label a group update as account enablement. Restore the account's original state. |
| AR-052–056 | Repeat an owned-access request and a still-pending request. Test the authorized requester and requested-for contexts separately. | Capture initial acceptance and subsequent status, account and date details. Avoid automatic retries until existing requests are checked. |
| AR-058–063 | Compare a native access approval with a generic workflow approval followed by Submit Access Request. | Identify which action actually authorizes access and whether another approval is created. Restore the native control workflow. |
| AR-065–069 | Receive an external request, then deliberately return no response or a malformed response. Recover and submit a fresh control. | Correlate invocation, response and request IDs. Prove callback recovery without assuming a workflow decision is itself a callback. |
| AR-070–074 | Investigate an approval email whose recipient cannot find the task. Compare assigned identity, task state, reassignment and notification timestamp. | Resolve a controlled identity/configuration fault; use a sanitized fixture for suspected service defects. Restore assignments. |
| AR-072–075 | Change configuration while a request is pending, then submit a new request. Include a multi-item request with mixed outcomes. | Compare each item and request generation; reconcile actual target state before recovery. Restore the saved configuration. |

These are additions to existing coverage, not reasons to repeat entire modules. Keep one guided case, one changed condition and one independent ticket for each substantial skill.

## New exercise families

### Separation of duties: conflicting Finance access

Priority: high. Prerequisites: working requests and the tenant's SoD capability.

Create two dedicated Finance test entitlements representing payment preparation and payment approval. Define the conflict policy. Give Lucas the first entitlement and request the second. Inspect the review warning, make a deliberate decision, and verify the resulting memberships. Repeat with a recipient who holds neither entitlement.

Next, implement the business requirement to reject conflicts through a documented decision mechanism available in the tenant. Test both allowed and rejected paths. A warning is not proof of an enforced denial. Remove the test assignments and policy afterward.

The reviewer documentation describes violation information presented during review. A community report of access being provisioned despite an SoD warning makes this a useful distinction to practice. [Reviewer documentation](https://documentation.sailpoint.com/saas/user-help/approvals/reviewing_access.html), [community case](https://developer.sailpoint.com/discuss/t/sod-policy-created/67798).

### Disconnected application: approval, manual task and reconciliation

Priority: high. Prerequisite: a separate non-authoritative flat-file lab source with requestable access and manual fulfillment configured.

Request access to a small simulated application. Complete the manual fulfillment task, then compare ISC's account data before and after importing a file that reflects the actual change. Repeat for removal. Keep the application's access register separate from task completion so the learner must verify both.

Add a ticket where the task is closed but the account import still shows the old state. A Jira or ServiceNow connection is unnecessary for the first version. Extend it to a real service-desk integration only when available. Reset the application's register and import the restored state.

ISC documents manual removal tasks for disconnected sources. A community report describes repeated service-desk work before reconciliation; use it as an investigation prompt, not a guaranteed defect to reproduce. [Request lifecycle](https://documentation.sailpoint.com/saas/help/requests/index.html), [community case](https://developer.sailpoint.com/discuss/t/access-request-for-disconnected-system-generating-service-desk-tickets-for-past-completed-tickets/160024).

### Optional environment extensions

- **Just-In-Time access:** compare approved assignment with user activation, target provisioning, session expiration and removal. Temporary standing access is a separate scenario.
- **Machine identity requests:** test who can request for the machine identity and which account receives access. Confirm the required products first.
- **Approval reauthentication:** test the available authentication configuration and capture the reviewer's experience and decision evidence.
- **ServiceNow, Slack or Teams:** compare the external request channel with ISC tracking, cancellation and fulfillment. Verify the integration's support for forms and dates independently.
- **A second connector:** repeat grant, missing-account creation, removal and reconciliation on an available SaaS application. Record connector-specific constraints.

The request overview documents Just-In-Time activation and the product prerequisites for machine identity requests. These tracks should not block the AD core course. [Current request overview](https://documentation.sailpoint.com/saas/help/requests/index.html)

## Community cases worth turning into tickets

| Case | Lesson to practice |
|---|---|
| [Prerequisite access before another request](https://developer.sailpoint.com/discuss/t/creating-pre-requisite-conditions-for-access-request/161459) | Evaluate recipient eligibility; test requests for others and stale attribute data. |
| [Repeated manager/owner approvals, December 2025](https://developer.sailpoint.com/discuss/t/sailpoint-isc-202512-duplicate-approvals-in-access-requests-when-manager-and-access-profile-owner-resolve-to-the-same-identity-ootb/190797) | Compare historical reports with the 2026 consolidation change before diagnosing a defect. |
| [Duplicate submissions](https://developer.sailpoint.com/discuss/t/is-there-a-way-to-avoid-duplicate-access-requests-from-being-submitted/35429) | Distinguish API acceptance from eventual request outcome. |
| [Generic approval followed by an access request](https://developer.sailpoint.com/discuss/t/auto-approve-access-request-instantly-in-workflow/217723) | Trace both approval mechanisms and prove which one governs provisioning. |
| [SoD workflow with an external trigger](https://developer.sailpoint.com/discuss/t/sod-check-fails-for-all-access-requests-in-workflow-with-external-trigger/210539) | Separate a policy decision from subscriber-response failure. |
| [Pending approvals missing from reviewer queues](https://developer.sailpoint.com/discuss/t/adaptive-approvals-issue/198345) | Gather assignment, execution and UI evidence; distinguish local faults from a support escalation. |

The Submit Access Request API documentation also describes asynchronous processing and duplicate-request considerations. Use the current schema when building the API exercises. [API reference](https://developer.sailpoint.com/docs/api/v3/create-access-request/)

## Evidence required from every finished walkthrough

1. Starting identities, accounts, access and effective configuration.
2. The actor performing each step, exact input and expected result.
3. A successful control and a deliberate changed condition.
4. Request/item IDs, decisions, relevant activity and native target evidence.
5. A troubleshooting branch when the expected result does not occur.
6. Cleanup instructions and a check that the next lab's prerequisites still hold.
7. A final screenshot checklist with capture point, expected visible values and suggested filename.

For long-running date and approval-expiration scenarios, include a later observation checklist. Sample evidence can support diagnosis practice, but it must not be presented as a completed live expiration test.

## Recommended writing order

Finish the first working request module, then strengthen account selection and approvals. Add native forms and the complete date matrix next. Write the SoD and disconnected-source exercises before calling the core coverage complete. Finish APIs, workflows and subscriber failures using the working UI cases as controls. End with the mixed support queue, including at least one case that requires an evidence-based escalation.

[Return to the course outline](README.md)
