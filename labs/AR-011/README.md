# AR-011 · Require a reviewer and a business reason

**Before you start:** AR-010. Lucas requests; Priya reviews.

## Configure a controlled review

1. Open the VPN entitlement's **Access Requests** settings. Record whether it inherits approval configuration or has an override.
2. Enable an individual approval override, require approval and select **Primary Owner**. Confirm Priya is the saved primary owner. Keep just this one reviewer for the first request.
3. Require comments when the user requests access and when the approver denies. Save and reopen the configuration.
4. In Lucas's Request Center session, add VPN. Leave the business reason empty and try to continue. Record the validation message; no valid request should be submitted with the required reason missing.
5. Enter `AR-011: Remote access for the Finance lab`, review and submit once. Record the request ID from My Requests.
6. Sign in as Priya and open Approvals. Find Lucas's VPN request and inspect its reason. Leave it pending for AR-012.
7. As administrator, inspect the same request in Approval Management. Record Priya as the resolved reviewer, not merely the configured category `Primary Owner`.

**Check:** The request is pending with Priya, contains Lucas's reason and has not added VPN membership. If another reviewer appears, inspect the effective override and whether you opened a request submitted before the change.

**Leave for the next lab:** Keep this exact request pending. Do not submit another VPN request for Lucas.

[Entitlement request controls](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html)

## Screenshots to capture

1. Saved VPN reviewer and comments configuration.
2. Missing-comment validation.
3. Priya's pending request showing Lucas and his reason.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-010](../AR-010/README.md) · [Course outline](../../README.md) · [Next: AR-012](../AR-012/README.md)
