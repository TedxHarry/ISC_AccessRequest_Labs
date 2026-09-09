# AR-013 · Deny a request and verify that access was not added

**Before you start:** AR-012. Use Olivia (`acme.e011`) as requester and Priya as reviewer. Verify Olivia has no VPN assignment or membership.

## Run the denial case

1. Capture Olivia's AD groups and ISC Access before the request.
2. As Olivia, request VPN with reason `AR-013: Test denial for an unapproved remote-work need`.
3. As Priya, open the request, select Deny and first leave the comment empty. Record the validation behavior.
4. Enter `Remote-work requirement has not been approved` and finish the denial.
5. As Olivia, inspect My Requests and record the decision explanation. As administrator, inspect the process for that request ID.
6. Recheck Olivia's native AD membership. There must be no new VPN grant caused by this request.
7. Compare this evidence with Lucas's approved request. Explain which decision stopped this case and why there is no successful grant operation to find.

**Check:** The denial is recorded, the reason is visible in the applicable request details, and Olivia's target state is unchanged.

If VPN is present, inspect whether Olivia already received it through a role or profile. A denied request does not automatically remove access from another path. Record that path and repeat with a clean recipient if necessary.

**Reset:** No access removal is needed for a correctly denied request. Retain its ID as a negative control.

[Reviewing requests](https://documentation.sailpoint.com/saas/user-help/approvals/reviewing_access.html)

## Screenshots to capture

1. Empty denial-comment validation.
2. Denied request and explanation.
3. Olivia's unchanged target membership.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-012](../AR-012/README.md) · [Course outline](../../README.md) · [Next: AR-014](../AR-014/README.md)
