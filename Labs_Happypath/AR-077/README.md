# AR-077 · Test a workflow stop for conflicting payment access

In this lab, you'll inspect the real SoD input, route a conflict to a workflow stop and prove that a clean request can still reach Daniel.

## Before you start

Complete [AR-076](../AR-076/README.md), including cleanup: Lucas holds PREPARE only, Olivia holds neither payment group, and the policy is enabled. Native approval workflows must be available. Review [AR-058](../AR-058/README.md) for the builder and execution views. Use Acme Admin, Lucas, Olivia, Daniel, AD checks and your [journal](EVIDENCE.md). Keep course developer subscriptions disabled.

The stop is accepted only when the actual request ends without access. A workflow Failure label alone is not enough.

## Follow the steps

### 1. Capture the actual conflict and clean inputs

1. Save the APPROVE entitlement's ID, Daniel owner and direct Primary Owner grant/removal settings. Verify Lucas PREPARE True/APPROVE False and Olivia both False using [AR-076's native check](../AR-076/README.md#1-create-and-discover-the-two-payment-groups). Check the imported account view agrees.
2. As administrator, open **Admin > Workflows > Create Workflow > Start in the Workflow Builder**. Name it `WF-Acme-SoD-Gate`. Select the native **Access Request Submitted** trigger. Add **Approval Policy**, type Single, reviewer category Access Item Owner, Reminder No, Timeout 2 days and Action at Timeout Expire. Connect trigger to this action and its result to **End Steps > Success**. Save, validate and enable.
3. Open **Admin > Access Model > Entitlements > PAYMENT-APPROVE > Actions > Edit > Access Requests**. Replace only the grant approval with Workflow and choose WF-Acme-SoD-Gate. Preserve direct Primary Owner removal and Daniel owner. Save and reopen.
4. As Lucas, use **Request Center > Access Items > Entitlements** to request APPROVE on the AD source, reason `AR-077 capture conflict input`, standard account, then **Save > Review Request > Submit Request**. Record the ID. As Daniel, deny the matching Grant with `AR-077 capture only; conflict not authorized`.
5. As Olivia, repeat with reason `AR-077 capture clean input`; Daniel also denies this diagnostic request with `AR-077 capture only; no grant needed`. Verify both requests terminal and both APPROVE memberships False.
6. As administrator, open **Workflows > WF-Acme-SoD-Gate > Executions**. Match each execution by request ID/recipient. Open the trigger input and record `sod.violated`, including its JSON type. Save private copies of both inputs and `AR-077-01.png`.
7. Restore APPROVE's original direct grant review while editing the workflow. Confirm the two diagnostic requests are resolved, then disable this workflow. Do not edit a running control.

**Check:** The documented sample uses the strings `"true"` and `"false"`. Confirm the live inputs match before using the string branch below. If the field is absent or has a different type, keep direct review, mark this gate Not accepted and investigate the contract; do not silently treat missing data as no conflict. [Native trigger input](https://documentation.sailpoint.com/saas/help/workflows/workflow-triggers.html)

### 2. Build an explicit allow branch and two stop branches

1. Edit WF-Acme-SoD-Gate. Keep its Approval Policy action and Success end, but remove the direct connection from the trigger to approval.
2. Add **Verify Data Type** immediately after the trigger. Select `Trigger > sod > violated` through the variable picker (`$.trigger.sod.violated`) and choose Exists. Connect the matching branch to a second Verify Data Type for the same value, **Is a string**.
3. Add **End Steps > Failure**, name `SoD Input Unavailable`, Failure Details `SoD result missing or invalid; review required`. Connect both failed type-check branches to it.
4. After the successful string check, add **Compare Strings**, Value 1 `$.trigger.sod.violated`, operator Equals, Value 2 static `true`. Its matching branch goes to a new **End Steps > Failure** named `Payment Duties Conflict`, details `Conflicting Acme payment duties; no approval started`.
5. On the nonmatching branch, add a second Compare Strings for the same path, Equals static `false`. Only its matching branch goes to the existing Single/Access Item Owner Approval Policy. Connect its nonmatching branch to SoD Input Unavailable. Keep approval connected to Success.
6. Save every step, resolve validation errors and inspect all connections. There must be no path from a failure end to approval or Success. Save `AR-077-02.png`.

**Check:** Only a recognized clean value reaches approval. Do not substitute Deny Access Request with `$.trigger.accessRequestId`: that action needs an approval ID, which is not established at this point. Record the stop's actual request status rather than calling it a reviewer denial. [Action inputs](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html#deny-access-request), [operators and Failure ends](https://documentation.sailpoint.com/saas/help/workflows/workflow-operators.html)

### 3. Prove the conflicting request stops without access

1. Enable the workflow and reselect it for APPROVE's grant configuration only. Reopen the saved association. Confirm Lucas still has imported PREPARE, no APPROVE and no pending payment request.
2. As Lucas, submit APPROVE with `AR-077 enforce conflict stop`. Record the new request ID. In the matching workflow execution inspect the actual string value, comparison result and Payment Duties Conflict end.
3. Inspect **Admin > Dashboard > Approval Management > Access Requests**, Lucas's My Requests and [Account Activity](../../LAB-DESK.md#find-the-account-activity). Require the request itself to reach a terminal no-grant state, no actionable Daniel review, no outstanding connector write and native APPROVE False. Save the actual labels and `AR-077-03.png`.
4. If it remains pending, errors before the intended branch, or grants access, mark the gate Not accepted. Immediately restore direct grant review for future requests. Resolve an eligible pending request with **Approval Management > matching request > More > Cancel Request**, or have Daniel deny an actionable review. For an unintended grant, remove its assignment using AR-076 Section 5 and verify absence. An association change does not repair the old request.
5. Do not continue to the clean grant until this negative case is accepted. If the original request cannot be resolved, keep its IDs and next action Pending, disable requestability for APPROVE, and perform the remaining cleanup in Section 5.

**Check:** The request and target, not just the workflow canvas, demonstrate the stop. Do not extend this gate to other items based solely on this one entitlement test.

### 4. Prove the clean branch and missing-data behavior

1. With the accepted gate still selected, verify Olivia has neither payment group. As Olivia, submit APPROVE with `AR-077 clean grant` using the same entitlement request route.
2. Inspect the matching execution: actual `"false"`, clean branch and Daniel review. As Daniel, approve that Grant with `AR-077 clean duty allowed`. Follow its activity and require Olivia APPROVE True/PREPARE False. Save `AR-077-04.png`.
3. As Olivia, remove APPROVE through **My Access > Entitlements > Assignment > Revoke Assignment**, reason `AR-077 clean test complete`. Daniel approves Remove. Verify the separate removal operation and Olivia both False before testing anything else.
4. In the workflow editor select **Test Workflow**. Use a private copy of the captured trigger input in the same JSON shape as the tester's sample; remove only `sod.violated`. Test and inspect the Exists nonmatching branch and SoD Input Unavailable end. Repeat with the value `"unknown"`; require the two string comparisons to reject it. Neither test should reach an approval action.
5. Keep these labelled synthetic tester executions; do not edit tenant HR/access data to pretend the trigger omitted a value. Do not run the clean `"false"` sample through the tester because its approval action can create real work. Save `AR-077-05.png` with input variations and reached steps.

**Check:** The clean live request grants and removes correctly. The missing/unknown tests check branch routing; they are not live request outcomes.

### 5. Restore direct review and close the track

1. Restore APPROVE's saved direct Primary Owner grant review and verify Daniel's removal review. Disable WF-Acme-SoD-Gate after all live executions are resolved. Retain the definition and evidence for later review.
2. As Lucas, remove PREPARE through the same entitlement removal route, reason `AR-077 payment track complete`; Daniel approves Remove. Follow the operation, rerun the four native checks and require all False. Reconcile AD account data and preserve Lucas's existing VPN and both accounts.
3. Run SOD-Acme-Payment-Duties again and record the current violation state after aggregation. Disable this course policy and turn off requestability for both payment entitlements. Retain both groups and their IDs; do not delete them or their history.
4. Record original/current grant and removal settings, each request's terminal outcome, workflow enabled state and unresolved work. Save `AR-077-06.png`. If you stopped early, complete these restoration steps where possible and explicitly retain any unresolved request for investigation.

**Check:** Payment memberships are gone, the experimental gate is disabled, and no future request depends on an unaccepted stop.

## Check the result

A conflicting live request stops without access and a clean live request reaches Daniel, provisions and is removed. Missing/unknown inputs take the stop branch in labelled tests. Any failed acceptance check remains recorded as Not accepted rather than described as enforced policy.

## Finish

Keep the input types, paths, actual request outcomes and disabled workflow. Leave both payment groups absent from Lucas/Olivia and non-requestable. The independent disconnected-source exercise in AR-078 does not require a passing SoD gate.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-077-01.png | Two live trigger inputs and diagnostic denials |
| AR-077-02.png | Guarded workflow connections and failure details |
| AR-077-03.png | Conflict execution, terminal request and native absence |
| AR-077-04.png | Clean review, grant and separate removal |
| AR-077-05.png | Labelled missing and unknown input tests |
| AR-077-06.png | Restored direct settings, disabled policy/workflow and final native state |

[Previous: AR-076](../AR-076/README.md) · [Course outline](../../README.md) · [Next: AR-078](../AR-078/README.md)
