# AR-077 · Reject a conflicting request through a workflow

**Before you start:** AR-076 and native approval workflows. Lucas still holds PAYMENT-PREPARE, not PAYMENT-APPROVE.

## Make the policy decision explicit

1. Create `WF-Acme-SoD-Gate` with the native Access Request Submitted trigger. Use a saved conflicting request input to inspect `sod.violated` and its actual data type.
2. Add a comparison on `$.trigger.sod.violated`. If the payload uses a string, compare with string `true`; if it uses a boolean, use the boolean operator. The workflow test must prove the selected comparison matches the actual payload.
3. Route a violation to **Deny Access Request**, request ID `$.trigger.accessRequestId`, comment `Conflicting Acme payment duties`.
4. On the nonmatching branch, explicitly test for the documented false value before allowing **Approval Policy: Single, Access Item Owner**. Route missing or unrecognized data to denial with `SoD result unavailable; investigation required`. Connect completed decisions to the end.
5. Save, enable and select this workflow on PAYMENT-APPROVE's individual request configuration. Keep the SoD policy enabled.
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
