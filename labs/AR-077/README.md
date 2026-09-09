# AR-077 · Reject a conflicting request through a workflow

**Before you start:** AR-076 and native approval workflows. Lucas still holds PAYMENT-PREPARE, not PAYMENT-APPROVE.

## Make the policy decision explicit

1. Save PAYMENT-APPROVE’s direct-review settings. Temporarily attach the working AR-058 native workflow, submit a conflicting Lucas request, and deny it through that reviewer. Inspect this execution’s `sod.violated` value and type, then restore the original association. A prior direct-review request has no native workflow execution to inspect. Create `WF-Acme-SoD-Gate` with the native Access Request Submitted trigger.
2. First add **Verify Data Type > Exists** on `$.trigger.sod.violated`, routing missing data to the denial step. Verify the present value’s type before comparing it. Add a comparison on `$.trigger.sod.violated`. If the payload uses a string, compare with string `true`; if it uses a boolean, use the boolean operator. The workflow test must prove the selected comparison matches the actual payload.
3. Route a violation to **Deny Access Request**, request ID `$.trigger.accessRequestId`, comment `Conflicting Acme payment duties`.
4. On the nonmatching branch, explicitly test for the documented false value before allowing **Approval Policy: Single, Access Item Owner**. Route missing or unrecognized data to denial with `SoD result unavailable; investigation required`. Connect completed decisions to the end.
5. Save and validate. Apply the isolated denial-identifier check in AR-061 before relying on the Deny action. Enable and select this workflow on PAYMENT-APPROVE’s individual request configuration only for the controlled tests below. Keep the SoD policy enabled; retain the original policy for rollback if denial errors or remains pending.
6. As Lucas, request APPROVE. Verify the violation input, denial branch and absent membership. As Olivia with no PREPARE access, request APPROVE, review as Daniel and verify the clean grant.
7. Use the workflow tester with a missing SoD value and confirm it cannot enter the approval branch. A test execution is not a substitute for the two live request cases.

**Check:** The workflow, not merely the warning banner, prevents the conflicting grant. Also test the role/profile path before extending this policy beyond the isolated entitlement.

**Reset:** Remove both users' test payment access. Retain the policy/workflow disabled or keep them enabled only for these clearly named isolated items; record the choice.

[Native request payload](https://documentation.sailpoint.com/saas/help/workflows/workflow-triggers.html), [Decision actions](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html)

## Screenshots to capture

1. Actual SoD field type and explicit true/false/missing branches.
2. Conflicting denial and clean approval.
3. Target results and missing-data test.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-076](../AR-076/README.md) · [Course outline](../../README.md) · [Next: AR-078](../AR-078/README.md)
