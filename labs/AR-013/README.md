# AR-013 · Deny a request and verify that access was not added

**Before you start:** AR-012. Use Olivia (`acme.e011`) as requester and Priya as reviewer. Verify Olivia has no VPN assignment or membership.

For any actor whose ISC sign-in is not prepared, complete [AR-008’s additional-session procedure](../AR-008/README.md) before submitting or reviewing.

Before submitting, verify Olivia's username in her separate browser profile, her single linked standard AD account, and an empty pending VPN request list. Check the saved VPN settings still name Priya as primary-owner reviewer and require denial comments. Keep Lucas's approved grant from AR-012.

You will compare a real denial with the approved case. Denial should stop this request from granting access; it does not undo an unrelated assignment.

## Run the denial case

1. Use the lab desk AD check for `acme.e011` and `GG-VPN-USERS` on your recorded controller. Capture Olivia's account DN, objectGUID, direct groups and ISC Access as `AR-013-01.png`. Confirm both VPN and Remote Users are absent for the next exercises.
2. As Olivia, request VPN with reason `AR-013: Test denial for an unapproved remote-work need`. Confirm Olivia as recipient and her standard account if selection appears. Submit once and record the request ID, item and time.
3. As Priya, open the request, select Deny and first leave the comment empty. Capture the validation or disabled decision control as `AR-013-02.png`. If the denial completed without a comment, record the discrepancy and inspect the effective requirement before creating another request.
4. Enter `Remote-work requirement has not been approved` and finish the denial. Check Priya's Reviewed tab for the recorded decision.
5. As Olivia, inspect My Requests and record the decision explanation. As administrator, open **Admin > Dashboard > Approval Management > Access Requests**, locate that request and inspect Process and Details. Capture the denied result and comment as `AR-013-03.png`. Record which view exposes the explanation rather than assuming every view shows identical fields.
6. Recheck Olivia's native AD membership. There must be no new VPN grant caused by this request. Use the same controller and account as the before check; save the after result as `AR-013-04.png`.
7. Compare this evidence with Lucas's approved request. Explain which decision stopped this case and why there is no successful grant operation to find.

**Check:** The denial is recorded, the reason is visible in the applicable request details, and Olivia's target state is unchanged.

If VPN is present, inspect whether Olivia already received it through a role or profile. A denied request does not automatically remove access from another path. Record that path and resolve the baseline discrepancy before advancing. Do not remove unrelated access to make a denial screenshot look correct.

**Reset:** No access removal is needed for a correctly denied request. Retain its ID as a negative control.

[Reviewing requests](https://documentation.sailpoint.com/saas/user-help/approvals/reviewing_access.html)

## Compare approval with denial

Complete two rows in your journal: Lucas's approved request and Olivia's denied request. For each, record the reviewer, final decision, whether a successful grant operation exists, and before/after native membership. Explain why an empty search for provisioning activity alone cannot prove a denial. The request decision and unchanged target state supply the missing evidence.

## Your ticket: denied, but the user has VPN

Supplied case: the request was denied today, but before evidence shows VPN membership yesterday from another assignment. Would you close this as an unauthorized grant caused by the denied request?

<details>
<summary>Compare your answer with the mentor's solution</summary>

No. Match the decision and timestamps to the existing assignment and before membership. Denying this grant request did not revoke earlier access. Investigate whether that earlier access is still appropriate separately. Do not attribute it to today's denial without a matching write operation.

</details>

## If you stopped during the decision

Reopen the recorded request first. If denied, inspect the result and recheck native membership; do not resubmit merely to capture the comment prompt. If still pending, resume as Priya. A repeat denial test needs a fresh request only after confirming the earlier request ended and Olivia remains without VPN. Label each attempt separately.

## What to leave in place

| Item | Required state |
|---|---|
| Olivia | No VPN or Remote Users grant; denied request retained as evidence |
| Lucas | Existing approved VPN and baseline access preserved |
| VPN configuration | Priya reviewer and required comments unchanged |

## Completion checklist

- [ ] The denial is recorded and Olivia received neither business group.
- [ ] Your ticket diagnosis and comparison are recorded before checking the solution.
- [ ] Actual tenant observations are distinguished from the supplied ticket case.
- [ ] Pending requests are accounted for and the retained state matches the next lab.

Record results in your [evidence journal](EVIDENCE.md). Keep the [lab desk](../../LAB-DESK.md) open for native verification.

## Screenshots to capture

Capture these at the matching steps above. Use extra images when one view cannot show everything. Keep secrets and personal mailbox details out of shared images.

| Filename | What to show |
|---|---|
| AR-013-01.png | Olivia before memberships and account |
| AR-013-02.png | Empty denial-comment validation |
| AR-013-03.png | Denied request and explanation |
| AR-013-04.png | Olivia after memberships |

[Previous: AR-012](../AR-012/README.md) · [Course outline](../../README.md) · [Next: AR-014](../AR-014/README.md)
