# SailPoint ISC Access Requests: Hands-On Labs


[Choose your practice path and check retained state](PRACTICE-PATH.md) · [Content audit and corrections](CONTENT-AUDIT.md)

Build requestable access, configure approvals, verify provisioning in Active Directory, and troubleshoot realistic Access Request incidents.

The course follows Acme Corporation's IAM team through **90 practice labs and three capstone projects**. You will work with the same identities, AD groups, access profiles, roles, and applications as the scenarios become more challenging.

## Course outline

| Module | Practical focus | Labs |
|---|---|---|
| [M01](#m01--prepare-a-reliable-lab-environment) | Identities, correlation, AD provisioning, and sign-in | AR-001–009 |
| [M02](#m02--deliver-your-first-working-request) | Your first request, approval, and verified AD membership | AR-010–015 |
| [M03](#m03--package-useful-business-access) | Access profiles, roles, and applications | AR-016–021 |
| [M04](#m04--control-who-can-find-and-request-access) | Segments, requests for others, and account selection | AR-022–027 |
| [M05](#m05--engineer-and-troubleshoot-approvals) | Reviewers, Governance Groups, reminders, and escalation | AR-028–033 |
| [M06](#m06--collect-request-information) | Request forms and input validation | AR-034–039 |
| [M07](#m07--manage-temporary-access-and-removal) | Access dates, expiration, and overlapping assignments | AR-040–045 |
| [M08](#m08--investigate-approved-but-missing-access) | Provisioning failures and target-state investigation | AR-046–051 |
| [M09](#m09--use-apis-as-engineering-tools) | Request APIs, evidence, and troubleshooting scripts | AR-052–057 |
| [M10](#m10--build-workflow-approvals) | Conditional, serial, parallel, and quorum approvals | AR-058–063 |
| [M11](#m11--integrate-and-diagnose-event-triggers) | External approval integration and subscriber failures | AR-064–069 |
| [M12](#m12--run-access-request-operations) | Support tickets, administrative actions, and production changes | AR-070–075 |
| [M13](#m13--enforce-policy-and-handle-disconnected-access) | SoD decisions and manual fulfillment | AR-076–078 |
| [M14](#m14--practice-additional-capabilities-and-change-control) | JIT, reauthentication, machine requests, delegation and change control | AR-079–090 |
| [Capstones](#capstone-projects) | Independent implementation and incident resolution | CAP-01–03 |

## Prerequisites

You do not need previous Access Request experience. Basic familiarity with accounts, groups, and JSON is helpful.

You need an ISC training tenant, an isolated AD lab, the required connector infrastructure, and separate requester and reviewer accounts. Forms and other capabilities must be available for the corresponding exercises. Workflow labs require workflow access; event-trigger labs require a reachable subscriber service.

- [Lab environment and test identities](LAB-ENVIRONMENT.md)
- [Troubleshooting practice tickets](PRACTICE-TICKETS.md)
- [Engineering and feature coverage](COVERAGE.md)
- [Lab desk](LAB-DESK.md), [API workbench](API-WORKBENCH.md) and [subscriber workbench](SUBSCRIBER-WORKBENCH.md)

Start with [AR-001 — Import Acme's HR Records](labs/AR-001/README.md) using the [HR baseline CSV](datasets/acme-hr-baseline.csv).

## Learning outcomes

By completing the labs, you will be able to:

- Configure requestable entitlements, access profiles, and roles.
- Test catalog visibility and requests for other identities.
- Configure and investigate approval routing.
- Build request forms and temporary-access scenarios.
- Trace a request through approval, provisioning, and target membership.
- Explain why removing one assignment may leave access in place.
- Use APIs, workflow history, account activity, and audit evidence to investigate problems.
- Resolve support tickets and document a tested solution.

## Labs

**Build:** configure and validate a solution. **Investigate:** diagnose a problem. **Practice:** compare behavior or use an engineering tool. **Check:** complete an independent practical assessment.

## M01 — Prepare a reliable lab environment

[Check Module 1 prerequisites and expected state](M01-READINESS.md).

Prerequisites: a provisioned training tenant and Windows infrastructure. You will establish a reproducible environment for Access Request work.

| ID | Type | Assignment | Skill and required proof |
|---|---|---|---|
| [AR-001](labs/AR-001/README.md) | Build | Import Acme's 24 HR records | Explain and verify the resulting identities and mapped attributes |
| [AR-002](labs/AR-002/README.md) | Build | Resolve the manager hierarchy | Verify employee-to-manager relationships and hierarchy root |
| [AR-003](labs/AR-003/README.md) | Practice | Validate the existing AD connection and aggregate lab data | Record connection, accounts, groups, and actual source identifiers |
| [AR-004](labs/AR-004/README.md) | Practice | Correlate Lucas's existing AD account | Match an existing account to its employee identity |
| [AR-005](labs/AR-005/README.md) | Build | Configure AD account creation | Validate naming, OU, attributes, password policy, and connector readiness |
| [AR-006](labs/AR-006/README.md) | Build | Provision one missing AD account | Compare updating Lucas with creating Liam; verify target results |
| [AR-007](labs/AR-007/README.md) | Practice | Provision the remaining standard accounts | Verify 24 correctly linked accounts without duplicates |
| [AR-008](labs/AR-008/README.md) | Build | Prepare reviewers, sessions, and the evidence journal | Demonstrate separate requester/reviewer access and required permissions |
| [AR-009](labs/AR-009/README.md) | Check | Prove the environment is ready | Complete the readiness gate and save checkpoint C01 |

## M02 — Deliver your first working request

Prerequisite: C01. Complete the [Module 2 starting checks](M02-READINESS.md). You will trace a simple request from submission to AD. Documentation: [entitlement request configuration](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html).

| ID | Type | Assignment | Skill and required proof |
|---|---|---|---|
| [AR-010](labs/AR-010/README.md) | Build | Make VPN access requestable | Configure the catalog item and capture requester visibility |
| [AR-011](labs/AR-011/README.md) | Build | Require review and a business reason | Predict the reviewer; verify submitted information and routing |
| [AR-012](labs/AR-012/README.md) | Practice | Complete the first successful request | Link submission, decision, activity, and AD membership |
| [AR-013](labs/AR-013/README.md) | Practice | Deny a second user's request | Prove the denial outcome and absence of a new target grant |
| [AR-014](labs/AR-014/README.md) | Investigate | VPN is missing from Request Center | Isolate the requestability fault with a non-admin session |
| [AR-015](labs/AR-015/README.md) | Check | Deliver Remote Users access without a walkthrough | Build, test, remove the test grant, and save C02 |

## M03 — Package useful business access

Prerequisite: M02. You will choose and validate entitlement, profile, and role requests. Documentation: [role and access profile requests](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html).

| ID | Type | Assignment | Skill and required proof |
|---|---|---|---|
| [AR-016](labs/AR-016/README.md) | Build | Create Finance Reporting access | Bundle two groups and verify both target memberships |
| [AR-017](labs/AR-017/README.md) | Build | Present Finance access through its application | Validate the application's requester experience |
| [AR-018](labs/AR-018/README.md) | Build | Offer a Finance Analyst role | Trace the requested role to profiles and target memberships |
| [AR-019](labs/AR-019/README.md) | Practice | Compare the three requestable object types | Explain ownership, packaging, and assignment differences |
| [AR-020](labs/AR-020/README.md) | Investigate | An application exists but offers no usable access | Diagnose application/profile configuration with evidence |
| [AR-021](labs/AR-021/README.md) | Check | Onboard HR Services from business requirements | Choose an access model, test it, and save C03 |

## M04 — Control who can find and request access

Prerequisite: C03. You will test visibility separately from authority to request for someone else. Documentation: [segments](https://documentation.sailpoint.com/saas/help/requests/segments.html) and [requests for others](https://documentation.sailpoint.com/saas/help/requests/requests_for_others.html).

| ID | Type | Assignment | Skill and required proof |
|---|---|---|---|
| [AR-022](labs/AR-022/README.md) | Build | Scope Finance catalog visibility | Test Finance and non-Finance requester sessions |
| [AR-023](labs/AR-023/README.md) | Practice | Compare employee, manager, and admin request options | Produce a tested actor/recipient permission matrix |
| [AR-024](labs/AR-024/README.md) | Practice | Request for a colleague in another department | Establish whose visibility and whose request authority apply |
| [AR-025](labs/AR-025/README.md) | Investigate | A Finance employee cannot find Finance access | Trace the incorrect HR attribute through the identity and segment |
| [AR-026](labs/AR-026/README.md) | Practice | Create Sofia's second account and test account selection | Configure baseline account-selection criteria before introducing the second account; prove which account receives requested membership |
| [AR-027](labs/AR-027/README.md) | Check | Resolve three visibility and account-selection tickets | Diagnose independently and distinguish separate causes |

Test segments using ordinary requester accounts. A segment controls requester visibility; it does not by itself enforce recipient eligibility when requesting for others. See the segment documentation above.

## M05 — Engineer and troubleshoot approvals

Prerequisite: M04. You will explain effective approval behavior and recover reviewer problems. Documentation: [global approval settings](https://documentation.sailpoint.com/saas/help/requests/config_approval_settings.html).

| ID | Type | Assignment | Skill and required proof |
|---|---|---|---|
| [AR-028](labs/AR-028/README.md) | Build | Compare manager, item-owner, and source-owner routing | Record expected versus actual reviewer for each supported setup |
| [AR-029](labs/AR-029/README.md) | Build | Add ordered review and a Governance Group | Demonstrate review order and who can complete the group review |
| [AR-030](labs/AR-030/README.md) | Investigate | Recover missing-manager routing and inspect owner quality | Observe fallback, reassign pending work, restore the manager and retest |
| [AR-031](labs/AR-031/README.md) | Practice | Test requester/reviewer overlap and reassignment | Verify self-approval handling and an authorized reassignment |
| [AR-032](labs/AR-032/README.md) | Investigate | Reminder or escalation behavior seems wrong | Compare effective settings, submission time, and notification evidence |
| [AR-033](labs/AR-033/README.md) | Check | Repair an approval process and regression-test it | Include approval, denial, real timeout observations, and save C05 |

Configuration changes must be tested using both existing and newly submitted requests; do not assume all pending requests inherit new settings.

## M06 — Collect request information

Prerequisite: C05 and forms available in the tenant. You will collect useful information and prove where it is available. Documentation: [Forms](https://documentation.sailpoint.com/saas/help/forms/index.html).

| ID | Type | Assignment | Skill and required proof |
|---|---|---|---|
| [AR-034](labs/AR-034/README.md) | Build | Create a production-support request form | Configure business reason, ticket number, and environment |
| [AR-035](labs/AR-035/README.md) | Practice | Test required and optional inputs | Record accepted and rejected submissions |
| [AR-036](labs/AR-036/README.md) | Practice | Explore documented conditional-field behavior | Test visible/hidden field combinations; record limitations |
| [AR-037](labs/AR-037/README.md) | Practice | Trace submitted information to the reviewer | Identify actual display locations and available evidence |
| [AR-038](labs/AR-038/README.md) | Investigate | The expected form does not appear | Diagnose item association/configuration with a control request |
| [AR-039](labs/AR-039/README.md) | Check | Deliver a usable request form from requirements | Prove validation and explain what the form does not enforce |

A duration field in a form is collected data until a documented mechanism enforces access dates. A ticket number field does not automatically validate an external ticket or create an integration.

## M07 — Manage temporary access and removal

Prerequisite: M06. You will distinguish access dates, removal requests, and other assignment paths.

| ID | Type | Assignment | Skill and required proof |
|---|---|---|---|
| [AR-040](labs/AR-040/README.md) | Build | Request temporary production-support access | Test supported date constraints and capture effective dates |
| [AR-041](labs/AR-041/README.md) | Practice | Observe future start and expiration | Verify target state before/after events; record the effective access dates |
| [AR-042](labs/AR-042/README.md) | Build | Configure and execute access removal requests | Compare supported entitlement/profile/role removal paths |
| [AR-043](labs/AR-043/README.md) | Investigate | Removal completed but VPN membership remains | Trace deliberately overlapping grants and the remaining path |
| [AR-044](labs/AR-044/README.md) | Practice | Compare requested and automatically assigned access | Explain supported removal and potential reassignment behavior |
| [AR-045](labs/AR-045/README.md) | Check | Remove the intended access and preserve unrelated grants | Verify assignment and AD state; save C07 |

In AR-040, also investigate supported ways to shorten or extend access. Explain any limitation and identify a supported alternative.

## M08 — Investigate approved-but-missing access

Prerequisite: C07. You will locate failure across request, approval, connector, AD, and refresh boundaries.

| ID | Type | Assignment | Skill and required proof |
|---|---|---|---|
| [AR-046](labs/AR-046/README.md) | Investigate | Access was approved but is absent | Classify the failing stage before changing configuration |
| [AR-047](labs/AR-047/README.md) | Investigate | The requested-for identity has no AD account | Create isolated Taylor identity and verify request-driven account creation |
| [AR-048](labs/AR-048/README.md) | Investigate | The provisioning account cannot change a lab group | Diagnose a scoped permission failure and validate recovery |
| [AR-049](labs/AR-049/README.md) | Investigate | The requested group reference no longer resolves | Compare aggregated entitlement identity with the target object |
| [AR-050](labs/AR-050/README.md) | Investigate | AD and ISC show different access state | Distinguish target state, aggregation, and search refresh evidence |
| [AR-051](labs/AR-051/README.md) | Check | Resolve a multi-symptom fulfillment incident | Build a timeline, justify root cause, recover, and retest |

Use the dedicated training environment for provisioning-failure exercises. Investigate the actual operation result when an account is missing or disabled.

## M09 — Use APIs as engineering tools

Prerequisite: M08 and authorized API credentials. You will operate requests programmatically and correlate API/UI evidence. Documentation: [version migration](https://developer.sailpoint.com/docs/api/api-versioning-migration/) and [AccessRequests SDK operations](https://developer.sailpoint.com/docs/tools/sdk/powershell/accessrequests/methods/access-requests/).

| ID | Type | Assignment | Skill and required proof |
|---|---|---|---|
| [AR-052](labs/AR-052/README.md) | Practice | Authenticate and read the request configuration | Distinguish authentication, authorization, and API-version errors |
| [AR-053](labs/AR-053/README.md) | Build | Submit one request and track its outcome | Use current payloads and distinguish acceptance from fulfillment |
| [AR-054](labs/AR-054/README.md) | Practice | Investigate a request across related API resources | Map returned identifiers to UI/activity evidence; handle pagination |
| [AR-055](labs/AR-055/README.md) | Practice | Test approval, rejection, and cancellation operations | Use permitted actors and explain operation/state restrictions |
| [AR-056](labs/AR-056/README.md) | Investigate | A client loses a response and proposes a retry | Check existing state before resubmission; use fixtures for throttling/error cases |
| [AR-057](labs/AR-057/README.md) | Check | Produce a repeatable request investigation report | Build a parameterized read-only script and save C09 |

Record the API operation, method, path, version, required permissions, and tested payload. Use the current supported endpoint for each operation. Use sample responses to practice rate-limit handling.

## M10 — Build workflow approvals

Prerequisite: C09 and workflow capability. You will configure and diagnose workflow-based approval. Documentation: [workflow triggers](https://documentation.sailpoint.com/saas/help/workflows/workflow-triggers.html) and [Approval Policy action](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html).

| ID | Type | Assignment | Skill and required proof |
|---|---|---|---|
| [AR-058](labs/AR-058/README.md) | Build | Attach a simple approval workflow | Prove that the correct access item invokes the enabled workflow |
| [AR-059](labs/AR-059/README.md) | Build | Compare serial and parallel multi-step review | Demonstrate timing and final decisions using separate requests |
| [AR-060](labs/AR-060/README.md) | Practice | Test a quorum approval policy | Predict and test sufficient approvals, denial outcomes, and early completion |
| [AR-061](labs/AR-061/README.md) | Build | Route a request using a documented identity attribute | Verify both branches and unavailable-data behavior |
| [AR-062](labs/AR-062/README.md) | Investigate | The workflow never starts or follows the wrong branch | Trace association, enablement, payload, and execution evidence |
| [AR-063](labs/AR-063/README.md) | Check | Deliver conditional approval with decision notification | Validate approval/denial and compare new versus in-flight requests |

Use Access Request Approval Policy for these exercises. Do not substitute Generic Approval Policy without proving that it implements the required access-request behavior. Conditional examples must use fields actually available to the workflow, retrieved through a documented method if necessary.

## M11 — Integrate and diagnose event triggers

Prerequisites: M10 and a controlled subscriber service. You will distinguish external request-response processing from native workflows. Documentation: [Submitted event trigger](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-submitted/) and [Dynamic Approval event trigger](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval/).

| ID | Type | Assignment | Skill and required proof |
|---|---|---|---|
| [AR-064](labs/AR-064/README.md) | Practice | Compare the two Submitted mechanisms | Produce separate payload, configuration, and timing records |
| [AR-065](labs/AR-065/README.md) | Build | Return a preliminary decision from the subscriber | Verify successful and denied control requests |
| [AR-066](labs/AR-066/README.md) | Build | Add a reviewer through Dynamic Approval | Prove the additional review and valid identity/group resolution |
| [AR-067](labs/AR-067/README.md) | Practice | Observe the request decision event | Match subscriber evidence to the request's actual decision |
| [AR-068](labs/AR-068/README.md) | Investigate | An external subscriber disrupts requests | Diagnose no response/invalid response variants; restore the baseline |
| [AR-069](labs/AR-069/README.md) | Check | Recover an integration and prove normal requests work | Validate affected and fresh requests; record remaining side effects |

The Submitted developer trigger is documented as REQUEST_RESPONSE; an absent or incorrect subscriber response can disrupt requests. Restore the subscriber after failure exercises and verify that fresh requests work. Test the chosen integration rather than assuming workflow and event-trigger mechanisms are interchangeable.

## M12 — Run Access Request operations

Prerequisite: C09. You will own a ticket queue, a change, and a support escalation. Documentation: [Approvals Administration](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html).

| ID | Type | Assignment | Skill and required proof |
|---|---|---|---|
| [AR-070](labs/AR-070/README.md) | Practice | Triage a queue of aged requests | Classify approval, provisioning, timing, and evidence gaps |
| [AR-071](labs/AR-071/README.md) | Practice | Decide whether a request should be canceled or closed | Apply documented eligibility, capture audits, and verify target state separately |
| [AR-072](labs/AR-072/README.md) | Build | Change an owner and approval configuration | Record impact, apply the change, and regression-test fresh requests |
| [AR-073](labs/AR-073/README.md) | Investigate | Diagnose a partial or uncertain fulfillment report | Examine item/account evidence and propose justified recovery |
| [AR-074](labs/AR-074/README.md) | Practice | Prepare an operational handover and support package | Write a reproducible incident report with sanitized evidence |
| [AR-075](labs/AR-075/README.md) | Check | Run a simulated IAM support shift | Prioritize mixed tickets, resolve supported cases, and escalate the rest |

After closing a request, verify the target state and review the related audit and event evidence. Closure alone does not prove that access was provisioned or revoked. [Close request operation](https://developer.sailpoint.com/docs/tools/sdk/powershell/accessrequests/methods/access-requests/)

## M13 — Enforce policy and handle disconnected access

Complete the core request and investigation labs first. SoD exercises require SoD capability; disconnected fulfillment uses a separate non-authoritative file source.

| ID | Type | Assignment | Required proof |
|---|---|---|---|
| [AR-076](labs/AR-076/README.md) | Build | Investigate a separation-of-duties conflict | Conflict versus clean request and native result |
| [AR-077](labs/AR-077/README.md) | Build | Reject a conflicting request through a workflow | Explicit denial, clean approval and missing-data handling |
| [AR-078](labs/AR-078/README.md) | Build | Fulfill and reconcile a disconnected application | Manual task, target register and account reconciliation |

## M14 — Practice additional capabilities and change control

Use the entry points and capability prerequisites in the [coverage matrix](COVERAGE.md). Optional products are required only for their own track. Complete AR-088 after all tracks available to you; AR-089 and AR-090 add focused change and callback exercises.

| ID | Type | Assignment | Required proof |
|---|---|---|---|
| [AR-079](labs/AR-079/README.md) | Practice | Activate and expire Just-In-Time access | Assignment, activation and actual expiration |
| [AR-080](labs/AR-080/README.md) | Practice | Require reauthentication for a sensitive approval | Authenticated decision and audit |
| [AR-081](labs/AR-081/README.md) | Practice | Expose governance-group reviewers and compare owner choices | Visible group members and decision actor |
| [AR-082](labs/AR-082/README.md) | Practice | Test API dates and account-specific removal | Effective API dates and selected-account removal |
| [AR-083](labs/AR-083/README.md) | Practice | Request access for a machine identity | Machine recipient and shared-account impact |
| [AR-084](labs/AR-084/README.md) | Practice | Trace a request from an external channel | External reference, ISC request and native state |
| [AR-085](labs/AR-085/README.md) | Practice | Distinguish direct access, nested membership and account state | Direct/nested membership and account state |
| [AR-086](labs/AR-086/README.md) | Practice | Give the service desk only the required request permissions | Read-only versus management authority and bulk actions |
| [AR-087](labs/AR-087/README.md) | Practice | Reassign review work during an absence | Delegated work and restored routing |
| [AR-088](labs/AR-088/README.md) | Practice | Regression-test a product or API update | Feature/version regression matrix |
| [AR-089](labs/AR-089/README.md) | Practice | Change a profile without assuming existing access changes | Requested versus automatic assignment effects |
| [AR-090](labs/AR-090/README.md) | Practice | Complete an asynchronous trigger callback | Acknowledgment, callback and final request outcome |

## Capstone projects

### CAP-01 — Launch Finance self-service access

[Open the step-by-step capstone](capstones/CAP-01/README.md)

Acme Finance needs a usable request catalog for reporting and accounts-payable access, appropriate review, and clear requester descriptions. Deliver a working solution, test approval and denial, prove target memberships, and demonstrate removal. Include one non-Finance requester visibility test.

Evidence: access-model rationale, configuration record, positive/negative test matrix, linked request/activity/AD evidence, and handover notes. Prerequisite: M01–M07.

### CAP-02 — Recover the Access Request service queue

[Open the step-by-step capstone](capstones/CAP-02/README.md)

Receive five tickets covering a missing catalog item, unexpected reviewer, approved-but-missing access, retained access after removal, and an aged request. Investigate the evidence behind each symptom, including information that may initially point toward the wrong cause.

Evidence: triage order, evidence-supported hypotheses, root causes, targeted repairs, verification, and an escalation package for any unresolved condition. Prerequisites: M01–M09 and M12. Explain whether each ticket is resolved or requires escalation.

### CAP-03 — Deliver temporary production-support access

[Open the step-by-step capstone](capstones/CAP-03/README.md)

IT and Engineering require a controlled production-support request. Business justification and ticket number are required. The request needs manager review followed by Security review, a seven-day maximum access period enforced through a supported mechanism, decision notification, and auditable target verification. Test both eligible and ineligible requester/recipient combinations.

Select a documented implementation, identify any unmet requirement, and explain alternatives. A segment alone must not be claimed to enforce recipient eligibility. A form-only duration field must not be claimed to enforce expiration.

Evidence: design decision record, implementation, timing plan, approval/denial tests, eligibility tests, expiration/removal evidence, one injected failure and recovery, and support runbook. Prerequisites: M01–M12. Verify expiration using the actual target state and retain the supporting evidence.

## Practical assessment

For each assessment, submit the configuration or diagnosis, supporting request identifiers and timestamps, approval evidence, relevant account activity, and target membership checks.

Your work should demonstrate:

- The requested outcome or an evidence-supported explanation of the failure.
- A clear connection between the request, approval, provisioning activity, and target state.
- A justified fix and a successful verification after the change.
- Awareness of other assignment paths and possible side effects.
- Clear handover notes that another engineer can follow.

Keep a journal of what you changed, your expected result, the actual result, the evidence, and the resolution. Restore temporary faults before moving to the next lab.
