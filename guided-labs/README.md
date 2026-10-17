# Guided Labs

Follow one walkthrough at a time. Complete the required starting checks, perform the actions, verify the outcome, and keep the stated finish state. Extra troubleshooting cases and independent variations are in their own practice areas.

## Everyday-work sequence

Start with environment preparation, continue through AR-051, then move to daily operations AR-070. Automation labs AR-052 to AR-069 are extensions and do not block daily operations.

| Feature availability | What to do |
|---|---|
| Native forms are available | Complete AR-034 to AR-039. |
| Native forms are unavailable | Continue to AR-040 if dates are available, or AR-042 for removal. Do not make a form required on the profile. |
| Access-date controls are unavailable | Skip AR-040 and AR-041 and begin AR-042. Leave the date requirements off. |
| A specialist capability is unavailable | Leave that extension for later. Its absence is not a failed core lab. |

The labels C01, C02 and later C-numbers name a verified configuration state used by subsequent labs. They do not require a journal, evidence folder or tenant backup.

## Everyday work

<a id="m01"></a>

### Module 01: Prepare the environment

New Acme environment: start at AR-001. Prepared Acme environment: validate AR-009 first.

- [AR-001: Import Acme's HR Records](M01/AR-001/README.md)
- [AR-002: Resolve the Manager Hierarchy](M01/AR-002/README.md)
- [AR-003: Prepare and Aggregate the AD Lab](M01/AR-003/README.md)
- [AR-004: Correlate Lucas's Existing AD Account](M01/AR-004/README.md)
- [AR-005: Configure AD Account Creation](M01/AR-005/README.md)
- [AR-006: Provision Your First AD Account](M01/AR-006/README.md)
- [AR-007: Provision the Remaining Standard Accounts](M01/AR-007/README.md)
- [AR-008: Prepare Requester and Reviewer Sessions](M01/AR-008/README.md)
- [AR-009: Verify the Environment](M01/AR-009/README.md)

<a id="m02"></a>

### Module 02: Complete your first requests

- [AR-010 · Make VPN access requestable](M02/AR-010/README.md)
- [AR-011 · Require a reviewer and a business reason](M02/AR-011/README.md)
- [AR-012 · Approve the first request and prove the AD change](M02/AR-012/README.md)
- [AR-013 · Deny a request and verify that access was not added](M02/AR-013/README.md)
- [AR-014 · Control VPN catalog availability](M02/AR-014/README.md)
- [AR-015 · Request and remove a two-group access profile](M02/AR-015/README.md)

<a id="m03"></a>

### Module 03: Build business access

- [AR-016 · Bundle Finance reporting access](M03/AR-016/README.md)
- [AR-017 · Present Finance access through an application](M03/AR-017/README.md)
- [AR-018 · Offer the Finance Analyst role](M03/AR-018/README.md)
- [AR-019 · Compare entitlement, profile and role requests](M03/AR-019/README.md)
- [AR-020 · Manage the profiles offered by Finance Services](M03/AR-020/README.md)
- [AR-021 · Deliver HR Services from a business requirement](M03/AR-021/README.md)

<a id="m04"></a>

### Module 04: Control visibility and account selection

- [AR-022 · Restrict Finance catalog visibility](M04/AR-022/README.md)
- [AR-023 · Test who can request for another person](M04/AR-023/README.md)
- [AR-024 · Separate requester visibility from recipient eligibility](M04/AR-024/README.md)
- [AR-025 · Follow a department change into the catalog](M04/AR-025/README.md)
- [AR-026 · Select the correct account for Sofia's access](M04/AR-026/README.md)
- [AR-027 · Verify visibility and account targeting](M04/AR-027/README.md)

<a id="m05"></a>

### Module 05: Configure approvals

- [AR-028 · Compare manager, item-owner and source-owner routing](M05/AR-028/README.md)
- [AR-029 · Require manager review followed by Security](M05/AR-029/README.md)
- [AR-030 · Reassign a review and verify the next request](M05/AR-030/README.md)
- [AR-031 · Compare consolidated review and self-approval handling](M05/AR-031/README.md)
- [AR-032 · Observe reminders, escalation and approval expiration](M05/AR-032/README.md)
- [AR-033 · Verify the approval setup](M05/AR-033/README.md)

<a id="m06"></a>

### Module 06: Collect request information

- [AR-034 · Attach a native form to Production Support](M06/AR-034/README.md)
- [AR-035 · Test required and optional form answers](M06/AR-035/README.md)
- [AR-036 · Show an extra field for Production work](M06/AR-036/README.md)
- [AR-037 · Trace form answers through a multi-item request](M06/AR-037/README.md)
- [AR-038 · Repair a missing request form](M06/AR-038/README.md)
- [AR-039 · Verify the Production Support form](M06/AR-039/README.md)

<a id="m07"></a>

### Module 07: Manage temporary access and removal

- [AR-040 · Enforce an end date and maximum duration](M07/AR-040/README.md)
- [AR-041 · Observe scheduled access and compare date-change reviews](M07/AR-041/README.md)
- [AR-042 · Request removal at the correct access level](M07/AR-042/README.md)
- [AR-043 · Observe removal across overlapping standalone profiles](M07/AR-043/README.md)
- [AR-044 · Compare role-required access with requested access](M07/AR-044/README.md)
- [AR-045 · Remove access from one account](M07/AR-045/README.md)

<a id="m08"></a>

### Module 08: Investigate fulfillment

- [AR-046: Trace a request from approval to the AD result](M08/AR-046/README.md)
- [AR-047: Create Taylor’s AD account through an access request](M08/AR-047/README.md)
- [AR-048: Diagnose and repair a group-specific AD permission failure](M08/AR-048/README.md)
- [AR-049: Repair a profile after its AD group reference changes](M08/AR-049/README.md)
- [AR-050: Reconcile AD and ISC after a manual group change](M08/AR-050/README.md)
- [AR-051: Resolve a fulfillment incident](M08/AR-051/README.md)

<a id="m12"></a>

### Module 12: Handle daily operations

Continue from AR-051. API, workflow and subscriber modules are not prerequisites.

- [AR-070 · Triage an Access Request queue](M12/AR-070/README.md)
- [AR-071 · Choose between cancellation, closure and removal](M12/AR-071/README.md)
- [AR-072 · Change an owner without losing pending work](M12/AR-072/README.md)
- [AR-073 · Investigate mixed outcomes in one submission](M12/AR-073/README.md)
- [AR-074 · Prepare a reproducible support handover](M12/AR-074/README.md)
- [AR-075 · Run an IAM support shift](M12/AR-075/README.md)

## Automation and specialist extensions

<a id="m09"></a>

### Module 09: Use Access Request APIs

Use the capability and starting-state checks in the first lab before beginning this extension.

- [AR-052 · Authenticate and verify the API caller](M09/AR-052/README.md)
- [AR-053 · Submit an API request and verify fulfillment](M09/AR-053/README.md)
- [AR-054 · Map request, approval and activity identifiers](M09/AR-054/README.md)
- [AR-055 · Approve, remove, deny and cancel through the API](M09/AR-055/README.md)
- [AR-056 · Handle duplicate submissions and uncertain responses](M09/AR-056/README.md)
- [AR-057 · Produce a repeatable request report](M09/AR-057/README.md)

<a id="m10"></a>

### Module 10: Build approval workflows

Use the capability and starting-state checks in the first lab before beginning this extension.

- [AR-058: Attach and verify a native approval workflow](M10/AR-058/README.md)
- [AR-059: Compare serial and parallel reviews](M10/AR-059/README.md)
- [AR-060: Test a quorum with three separate reviewers](M10/AR-060/README.md)
- [AR-061: Check recipient eligibility before Finance approval](M10/AR-061/README.md)
- [AR-062: Repair a workflow that is not invoked](M10/AR-062/README.md)
- [AR-063: Send a notification that reflects the real decision](M10/AR-063/README.md)

<a id="m11"></a>

### Module 11: Integrate event subscribers

Use the capability and starting-state checks in the first lab before beginning this extension.

- [AR-064 · Connect an isolated developer event subscriber](M11/AR-064/README.md)
- [AR-065 · Return a preliminary approval or denial](M11/AR-065/README.md)
- [AR-066 · Add a final reviewer dynamically](M11/AR-066/README.md)
- [AR-067 · Match a decision event to its access request](M11/AR-067/README.md)
- [AR-068 · Recover from an invalid or late subscriber response](M11/AR-068/README.md)
- [AR-069 · Verify recovery and save the subscriber handover](M11/AR-069/README.md)

<a id="m13"></a>

### Module 13: Apply policy and manual fulfillment

Use the capability and starting-state checks in the first lab before beginning this extension.

- [AR-076 · Investigate a separation-of-duties conflict](M13/AR-076/README.md)
- [AR-077 · Test a workflow stop for conflicting payment access](M13/AR-077/README.md)
- [AR-078 · Fulfill and reconcile a disconnected application](M13/AR-078/README.md)

<a id="m14"></a>

### Module 14: Practice specialist capabilities

Use the capability and starting-state checks in the first lab before beginning this extension.

- [AR-079 · Activate, extend and expire Just-In-Time access](M14/AR-079/README.md)
- [AR-080 · Require reauthentication for a sensitive approval](M14/AR-080/README.md)
- [AR-081 · Inspect group reviewers and compare owner categories](M14/AR-081/README.md)
- [AR-082 · Test API dates and account-specific removal](M14/AR-082/README.md)
- [AR-083 · Request and remove access for a machine identity](M14/AR-083/README.md)
- [AR-084 · Trace an entitlement request from Slack to AD](M14/AR-084/README.md)
- [AR-085 · Distinguish direct membership, nested access and account state](M14/AR-085/README.md)
- [AR-086 · Test service-desk request permissions](M14/AR-086/README.md)
- [AR-087 · Reassign review work during an absence](M14/AR-087/README.md)
- [AR-088 · Regression-test a product or API change](M14/AR-088/README.md)
- [AR-089 · Change a profile and compare assignment origins](M14/AR-089/README.md)
- [AR-090 · Complete and time out an asynchronous trigger callback](M14/AR-090/README.md)

## Capstones

Choose a capstone after completing its named guided prerequisites. These are practical service scenarios, not a requirement to finish every specialist feature.

- [CAP-01: launch Finance self-service access](capstones/CAP-01/README.md). Needs the Finance setup and removal labs; no API or native workflow requirement.
- [CAP-02: recover the service queue](capstones/CAP-02/README.md). Needs the operations labs and their starting configuration.
- [CAP-03: deliver temporary Production Support](capstones/CAP-03/README.md). Needs forms, dates and native approval workflows.

[Troubleshooting Practice](../troubleshooting/README.md) · [Try It Yourself](../try-it-yourself/README.md) · [Reference desk](../reference/README.md)
