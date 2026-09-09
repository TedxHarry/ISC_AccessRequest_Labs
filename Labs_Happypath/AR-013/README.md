# AR-013 · Deny a request and verify that access was not added

## Goal

Submit Olivia's VPN request, deny it with a reason, and verify that the decision leaves her AD access unchanged.

Keep the [Module 2 starting checks](../../M02-READINESS.md) beside your journal.

## Before you start

Complete [AR-012](../AR-012/README.md). Use Acme Olivia (`acme.e011`), Acme Priya (`acme.e002`), Acme Admin and the AD workstation. Prepare Olivia using [the additional-session steps](../../M02-CHECKS.md#prepare-olivia-or-liam-to-sign-in) before continuing. Keep your [journal](EVIDENCE.md) open.

Olivia must have her linked standard account and baseline access, but neither VPN nor Remote Users and no pending VPN request. Keep Lucas's approved VPN grant.

## 1. Check Olivia and the saved policy

1. In Acme Admin, open **Admin > Identity Management > Identities**, find `acme.e011` and inspect **Accounts** and **Access**.
2. In Acme Olivia, verify the username and check **Request Center > My Requests** for a pending VPN request.
3. Run the [native check](../../M02-CHECKS.md#inspect-direct-ad-membership) for Olivia with `GG-VPN-USERS`, then `GG-REMOTE-USERS`. Record both results, account DN and objectGUID.
4. As administrator, open **Admin > Access Model > Entitlements > GG-VPN-USERS > Actions > Edit > Access Requests**, matching the recorded source/DN. Confirm Priya is primary owner, Primary Owner is the reviewer, and denial comments are required.

**Check:** Neither business group is present for Olivia, and the saved policy will send her request to Priya.

**Screenshot:** `AR-013-01.png`: Olivia's before memberships and account identifiers.

## 2. Request VPN as Olivia

1. In Acme Olivia, open **Request Center** and choose **Request for Myself** if prompted.
2. Open **Access Items > Entitlements**, search VPN and inspect **Details** to confirm the source.
3. Select the item. Enter `AR-013: Test denial for an unapproved remote-work need` in request comments and select **Save**.
4. Keep access immediate. If an account is requested, select Olivia's recorded standard AD account.
5. Select **Review Request**, verify Olivia and VPN, then **Submit Request** once.
6. Open **My Requests**. Record the identifier where shown, recipient, item and time. Use administrator request details if the identifier is not displayed here.

**Check:** Olivia's request is pending and is separate from Lucas's earlier approved request.

**Screenshot:** `AR-013-02.png`: Olivia's submitted request and reason.

## 3. Deny as Priya

1. Switch to Acme Priya and verify her username.
2. Open **Approvals > Access Requests > Requested** and select Olivia's VPN request.
3. Confirm the action is **Grant**, with Olivia as recipient and the AR-013 reason.
4. Select **Deny**. Enter `Remote-work requirement has not been approved` in the denial comment and confirm the decision.
5. Open **Reviewed** and locate the same request. Record the decision and comment.
6. In Acme Olivia, inspect the request under **My Requests**. In Acme Admin, locate it under **Admin > Dashboard > Approval Management > Access Requests** and inspect **Process** and **Details**. Record which view displays the explanation.

**Check:** The denied result belongs to Olivia's request and includes the recorded reason. No grant approval remains pending for this case.

**Screenshot:** `AR-013-03.png`: denied request and explanation.

## 4. Verify unchanged target access

1. Repeat the same native checks for Olivia on the same controller.
2. Confirm both VPN and Remote Users remain absent and her baseline membership remains.
3. Compare with the before record. Keep the account DN and objectGUID with both results.
4. Compare this request with Lucas's approved case. Record the two decisions and their different target outcomes.

**Check:** Olivia's denial did not grant either business group. A missing activity search result alone is not proof; the recorded decision and unchanged native state support your result.

**Screenshot:** `AR-013-04.png`: Olivia's after memberships.

## If the result differs

If VPN is present, inspect whether it existed before the request or came from another assignment. Denying a new request does not revoke an earlier grant. Do not remove unrelated access to make this comparison pass.

## Explain the result

Use two journal rows for Lucas's approval and Olivia's denial. Identify the decision, actual reviewer, native before/after state and whether a successful grant operation occurred. Mark an operation ID not applicable when no grant operation occurred.

## Final verification

- [ ] Olivia signed in with ordinary user access and submitted one identified request.
- [ ] Priya denied it with the specified reason.
- [ ] Both native business memberships remain absent; baseline remains.
- [ ] Lucas's approved VPN grant is preserved.

## Leave this in place

Keep the denied request as evidence. No access removal is needed for a correctly denied request. Keep Olivia's session, VPN's request settings and Lucas's grant for AR-014.

[Reviewing access requests](https://documentation.sailpoint.com/saas/user-help/approvals/reviewing_access.html)

## Screenshots to capture

Capture these at the matching steps. Use extra images when needed to show all evidence. Exclude credentials, invitation links and private mailbox details.

| Filename | What to show |
|---|---|
| AR-013-01.png | Olivia before memberships and identifiers |
| AR-013-02.png | Olivia submitted request and reason |
| AR-013-03.png | Denied request and explanation |
| AR-013-04.png | Olivia after memberships |

[Previous: AR-012](../AR-012/README.md) · [Lab index](../README.md) · [Next: AR-014](../AR-014/README.md)
