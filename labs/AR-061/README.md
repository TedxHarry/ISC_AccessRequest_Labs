# AR-061 · Enforce eligibility using the recipient's department

**Before you start:** AR-060. This implements AR-024's missing business check. Use Finance Reporting, Lucas and Liam.

## Build the condition

1. Save Finance Reporting's approval settings. Create `WF-Acme-Finance-Eligibility` with the native Access Request Submitted trigger.
2. Add **Get Identity**, name the step `Get Recipient`, and set Identity using variable `$.trigger.requestedFor.id`. Preserve the department attribute in Additional Output Data if required by the editor.
3. Add **Compare Strings**. Use the variable picker to select **Get Recipient > attributes > department**, compare **Equals** with static `Finance`. Use the picker's generated JSONPath so it matches the saved step name.
4. Connect the matching branch to **Approval Policy: Single, Manager**, timeout 2 days, Expire. Connect the nonmatching branch to **Deny Access Request**, using `$.trigger.accessRequestId` and comment `Recipient department is not Finance`. Connect both to completion. Save and enable.
5. Associate the workflow with Finance Reporting. As Lucas, request for himself; verify the retrieved recipient and Finance branch, then approve as Daniel and remove the test assignment.
6. Temporarily enable authorized requests for others. As Lucas request for Liam. Verify Get Recipient returns Liam, the nonmatching branch denies, and Liam gets no Finance Reporting grant.
7. Test unavailable department data using the workflow test input or a separate controlled identity. Confirm a missing attribute cannot fall into an approval branch; an execution error is not an approved result.

**Check:** The same eligible requester produces different outcomes for eligible and ineligible recipients, based on the recipient's actual data.

**Reset:** Restore request-on-behalf settings. Retain the workflow and association as Finance's explicit eligibility control.

[Get Identity and decision actions](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html), [Operators](https://documentation.sailpoint.com/saas/help/workflows/workflow-operators.html)

## Screenshots to capture

1. Recipient lookup, comparison and branches.
2. Lucas/Liam execution inputs and results.
3. Denied target check and missing-data test.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-060](../AR-060/README.md) · [Course outline](../../README.md) · [Next: AR-062](../AR-062/README.md)
