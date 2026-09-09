# AR-061 · Enforce eligibility using the recipient's department

**Before you start:** AR-058–060, Lucas and Liam’s sessions, and working Finance requests. Keep the original direct-review settings for each Finance item. This lab tests a recipient rule; Finance segment visibility alone does not enforce it.

## Build the workflow without changing the live item yet

1. Create `WF-Acme-Finance-Eligibility` with the native **Access Request Submitted** trigger.
2. Add **Get Identity**, name it `Get Recipient`, and set Identity to `$.trigger.requestedFor.id`. Use the variable picker to include `attributes.department` in Additional Output Data if it is not already retained.
3. Add **Verify Data Type**, select Get Recipient’s department using the variable picker, and choose **Exists**. On the matching branch add a second Verify Data Type for **Is a string**. Send either failed check to the missing-data denial step below.
4. After the valid-string branch add **Compare Strings**, using the same department variable, **Equals**, and static `Finance`. Keep the generated JSONPath; a renamed step can change that path.
5. Connect the Finance branch to **Approval Policy: Single**, reviewer **Manager**, timeout **2 days**, Action at Timeout **Expire**. Connect its output to Success.
6. Connect the non-Finance branch to **Deny Access Request** with comment `Recipient department is not Finance`. Add a separate Deny Access Request for missing/invalid data with comment `Recipient department unavailable; investigation required`. Connect each to Success.
7. For each denial action, inspect its Access Request ID input. The action documentation describes this as an Approval ID, while the native trigger supplies `accessRequestId`. Use the trigger field only as a candidate to verify in the isolated test below; do not substitute an accountActivityId or assume differently named IDs are interchangeable. Save and validate the workflow.

## Prove the denial operation on an isolated item

1. Create `AP-Acme-Eligibility-Control` containing the disposable `GG-ACME-FAULT-049`, with Daniel as owner and direct primary-owner review. Confirm Liam has no membership or pending request for this item.
2. Enable the workflow and select it only on this control profile. As Liam, request the control. Inspect Get Recipient’s output, the non-Finance branch and the denial action result.
3. Require both a successful denial action and a **Denied** result on that same access request, with no group membership. A failed execution or request still pending does not pass. If the identifier is rejected, restore direct review, resolve the test request and retain the error/IDs for investigation. Do not attach this workflow to Finance until this check passes.
4. Test missing data: save the latest complete working HR file, clear only Liam’s department in a copy, import/process and verify his mapped department. Submit another control request. Verify the missing/invalid-data branch reaches an actual denial. Immediately restore/import the saved full file and verify Liam is back in IT. Preserve Taylor’s 25th row if present.
5. Test an empty string, null and an unrecognized value using the workflow tester at the applicable operator input when supported. Changing a trigger sample alone does not alter what Get Identity reads from the real identity. Record which cases used real identity data and which were operator fixtures.

## Apply the proven control to Finance

1. Save AP-Finance-Reporting’s current policy, attach the verified workflow and submit as Lucas for himself. Verify Get Recipient returns Lucas, department Finance, and the review reaches Daniel. Approve and verify FIN-REPORTING. Remove the profile afterward. Preserve Lucas’s separately requested VPN from AR-012.
2. Temporarily enable authorized requests for others using AR-023. As Lucas, request Finance Reporting for Liam. Verify Liam’s IT department causes an actual denial and no new Finance membership.
3. Inspect the other Finance entry points: AP-Finance-AP and ROLE-Finance-Analyst. Their requests use their own policies. Save those policies, attach the same verified eligibility workflow to each, and repeat the eligible Lucas / ineligible Liam tests independently. Remove each successful test assignment before the next case.
4. Confirm the Finance group entitlements themselves are not directly requestable unless you deliberately configure and test the same eligibility rule on those paths. Do not claim this blocks manual AD grants or automatic role assignments.
5. Restore request-on-behalf settings. Disable requests on the temporary control profile and resolve its pending requests or grants. Retain the proven Finance associations and record their IDs and outcomes.

**Check:** Each of the three Finance request paths allows the eligible recipient through review and denies the ineligible recipient. Missing-data tests produce a known denied outcome, not merely a workflow error. If the isolated denial cannot be verified, leave the original direct-review policies in place and record automated enforcement as not accepted.

[Workflow actions and output](https://documentation.sailpoint.com/saas/help/workflows/workflow-actions.html), [Type checks and comparisons](https://documentation.sailpoint.com/saas/help/workflows/workflow-operators.html)

## Screenshots to capture

- Isolated denial action output and the matching denied request.
- Missing-data guard, restored Liam department, and results for all three Finance items.

1. Recipient lookup, comparison and branches.
2. Lucas/Liam execution inputs and results.
3. Denied target check and missing-data test.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-060](../AR-060/README.md) · [Course outline](../../README.md) · [Next: AR-062](../AR-062/README.md)
