# AR-011 · Require a reviewer and a business reason

**Before you start:** AR-010. Lucas requests; Priya reviews.

Keep the administrator, Lucas and Priya in separate browser profiles. Lucas must have no VPN assignment, direct membership or pending VPN request. This lab submits one request and leaves it pending; AR-012 continues that same request.

## Configure a controlled review

1. As administrator, open **Admin > Access Model > Entitlements**, locate VPN by source and DN, and choose **Actions > Edit > Access Requests**. Record its saved approval, comment, form, date and escalation settings.
2. Under **Reviewing Access Requests**, select **Require Approval**, choose **Reviewer**, and add **Primary Owner** using the add control. Confirm Priya is the saved primary owner. Keep just this one reviewer row for the first request. Keep Allow Access Requests enabled. For this simple course item, use no attached form or required end date and no approval workflow. Record and resolve any existing requirement that prevents this baseline.
3. Require comments when the user requests access and when the approver denies. Save and reopen the configuration. Capture the owner and reviewer/comment settings as `AR-011-01.png`. Write your prediction: Priya reviews as VPN owner; Daniel being Lucas's manager does not make him the selected reviewer here.
4. In Lucas's Request Center session, add VPN. Leave the business reason empty and try to continue. Record the validation message; no valid request should be submitted with the required reason missing. Capture the validation or disabled submit control as `AR-011-02.png`. Check My Requests before retrying if the attempt appears to have submitted.
5. Enter `AR-011: Remote access for the Finance lab`, keep immediate access, and do not select a future start date. If account selection appears, match Lucas's standard AD account DN. Review and submit once. Record the request ID where shown in My Requests, or obtain it from the administrator details in step 7. Match recipient, item and submission time across views. Capture the submitted details as `AR-011-03.png`.
6. Sign in as Priya and open Approvals. Find Lucas's VPN request and inspect its reason. Confirm it is a **Grant** request. Leave it pending for AR-012. Save the pending review as `AR-011-04.png`.
7. As administrator, open **Admin > Dashboard > Approval Management > Access Requests**, open the same request, and inspect **Process**, **Assignees** and **Details**. Record Priya as the resolved reviewer, not merely the configured category `Primary Owner`. Save this as `AR-011-05.png`, then run the native VPN membership check again to verify it is still absent.

The individual approval configuration takes precedence over source/global approval configuration. Leaving Require Approval unchecked does not prove approval is disabled: inherited settings can still apply. Global required comments remain required even if the item leaves them unchecked.

**Check:** The request is pending with Priya, contains Lucas's reason and has not added VPN membership. If another reviewer appears, inspect the effective override and whether you opened a request submitted before the change.

**Leave for the next lab:** Keep this exact request pending. Do not submit another VPN request for Lucas.

[Entitlement request controls](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html)

## Your ticket: Priya's queue is empty

Supplied case: VPN now names Primary Owner, but administrator details show Daniel assigned on a request submitted before the policy edit. What would you compare before changing permissions?

<details>
<summary>Compare your answer with the mentor's solution</summary>

Compare the request's item, creation time and actual assignee with the saved configuration and edit time. Verify Priya's session. An older request does not prove a newly saved policy failed. Account for the existing request before using a fresh request to test the new configuration. Do not grant Priya administrator rights or override the approval to make the test pass.

</details>

## If you stopped after submitting

Find the recorded request before submitting again. If still pending with Priya, continue in AR-012. If it completed, inspect the actual decision and AD result and label missed observations historical. If it expired or was canceled, verify no active duplicate or VPN grant remains, then submit one replacement with a repeat label. Record both identifiers. Screenshots do not keep a request pending indefinitely.

## What to leave in place

| Item | Required state |
|---|---|
| VPN policy | One Primary Owner reviewer; request and denial comments required |
| Request | One identified Lucas request pending with Priya |
| AD | Lucas's baseline retained; VPN absent before approval |

## Completion checklist

- [ ] The recorded Lucas request is pending with Priya and VPN is absent.
- [ ] Your ticket diagnosis and comparison are recorded before checking the solution.
- [ ] Actual tenant observations are distinguished from the supplied ticket case.
- [ ] Pending requests are accounted for and the retained state matches the next lab.

Record results in your [evidence journal](EVIDENCE.md). Keep the [lab desk](../../LAB-DESK.md) open for native verification.

## Screenshots to capture

Capture these at the matching steps above. Use extra images when one view cannot show everything. Keep secrets and personal mailbox details out of shared images.

| Filename | What to show |
|---|---|
| AR-011-01.png | VPN owner, reviewer and required comments |
| AR-011-02.png | Empty-reason validation or disabled control |
| AR-011-03.png | Submitted request details |
| AR-011-04.png | Priya pending Grant review and reason |
| AR-011-05.png | Administrator Process and Assignees |

[Previous: AR-010](../AR-010/README.md) · [Course outline](../../README.md) · [Next: AR-012](../AR-012/README.md)
