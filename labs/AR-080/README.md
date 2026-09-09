# AR-080 · Require reauthentication for a sensitive approval

**Before you start:** AR-079, working tenant SSO and reauthenticated-approval capability. Keep the existing SSO configuration; this lab does not replace the identity provider.

## Test an authenticated decision

1. Read and save the current access-request configuration using the current configuration API procedure in the workbench. Enable only `reauthorizationEnabled` through the matching current update operation. Re-read to verify unrelated values remain unchanged.
2. Open AP-Production-Support's **Reauthentication** tab and enable **Require Approval Reauthentication**. Save. Ensure the selected review workflow/policy is known and a reviewer can use SSO.
3. As Henry, submit a valid request. As the assigned reviewer, select approval, supply the required justification and complete the SSO reauthentication prompt.
4. Finish the remaining reviews and inspect the decision audit for actor, time and justification. Hide authentication-token material in screenshots.
5. Verify native membership, then remove the assignment.
6. Submit a second request and deny it. Compare the denial path with the approval reauthentication requirement.

**Check:** The approval is authenticated and auditable. An ordinary initial login screenshot is not evidence of the extra approval step.

If the item lacks the tab, check the tenant capability and global enablement before changing SSO. Do not remove SSO protection to make the exercise proceed.

**Reset:** Restore the item's reauthentication setting and the exact global field value through the current configuration operation. Retain the working SSO connection.

[Reauthenticated approvals](https://documentation.sailpoint.com/saas/help/requests/reauthenticated_approvals.html)

## Screenshots to capture

1. Enabled item setting and sanitized configuration comparison.
2. Reauthentication prompt and resulting decision audit.
3. Denial comparison, native result and reset.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-079](../AR-079/README.md) · [Course outline](../../README.md) · [Next: AR-081](../AR-081/README.md)
