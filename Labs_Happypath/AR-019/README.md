# AR-019 · Compare entitlement, profile and role requests

## Goal

Request three different access objects for the same person, one at a time. Compare what Olivia selects, who reviews it, what AD receives and how you remove it.

## Before you start

Complete [AR-018](../AR-018/README.md), including role removal. Open Acme Admin, Acme Olivia (`acme.e011`), Acme Priya (`acme.e002`), Acme Daniel (`acme.e003`) and the AD workstation. Keep your [journal](EVIDENCE.md) open.

All three items below are enabled/requestable. Olivia starts without the three business groups or their Finance assignments. Preserve Lucas's VPN and all baseline assignments.

| Test | Select in Request Center | Grant reviewer | Groups expected after grant |
|---|---|---|---|
| A | Entitlement: GG-VPN-USERS | Priya | VPN only |
| B | Access profile: AP-Finance-Reporting | Daniel | VPN + FIN-REPORTING |
| C | Role: ROLE-Finance-Analyst | Daniel | VPN + FIN-REPORTING + FIN-AP |

## 1. Prepare the comparison and VPN removal review

1. As administrator, inspect Olivia's **Accounts**, **Access** and pending requests. Record her standard AD account DN/objectGUID.
2. Run the [native membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for Olivia against GG-VPN-USERS, GG-FIN-REPORTING, GG-FIN-AP and GG-ACME-BASELINE. Business results must be False and baseline True.
3. Open **Admin > Access Model > Entitlements**, locate GG-VPN-USERS on your recorded AD source and choose **Actions > Edit**.
4. Confirm its primary owner is Priya and its **Access Requests** page retains the individual primary-owner grant review from Module 2.
5. Under the same page's removal settings, select **Require Approval for Removal**, choose **Primary Owner** and add it with **+**. Keep one removal reviewer and select **Save**. Reopen and verify the saved setting.
6. Inspect both Finance profiles and the Finance Analyst role. Record their IDs/types, groups, Daniel's grant policies and removal settings using [actual object values](../../LAB-VALUES.md).
7. Prepare three rows in your journal: selected type/ID, recipient, grant reviewer, grant request/activity, native before/after, removal route/decision/activity and final native state.

**Check:** Olivia is clean and direct VPN removals now explicitly route to Priya. Keep this item-level policy for later labs; leave global settings unchanged.

**Screenshot:** `AR-019-01.png`: initial memberships and saved VPN removal policy.

## 2. Test A — request and remove the entitlement

1. In Acme Olivia, verify the username. Open **Request Center**, choose **Request for Myself** if prompted, then **Access Items > Entitlements**.
2. Search GG-VPN-USERS, inspect its source/DN in **Details** and select it. Enter reason `AR-019 A: Direct VPN comparison` in request details, keep immediate access and the standard account, then **Save**.
3. Select **Review Request**, verify one entitlement for Olivia, then **Submit Request** once. Record its **My Requests** entry.
4. In Acme Priya, open **Approvals > Access Requests > Requested**, inspect Olivia's VPN **Grant**, approve and verify **Reviewed**.
5. In Acme Admin, inspect [request and activity](../../M02-CHECKS.md#inspect-a-request-as-administrator) until completion. Check all four native groups.
6. Record VPN=True, FIN-REPORTING=False, FIN-AP=False, baseline=True and the original account identifiers.
7. In Acme Olivia, return to the home dashboard and open **My Access > Entitlements**. Select GG-VPN-USERS, then its **Assignment** in the left navigation. Check the target account and select **Revoke Assignment**.
8. Enter `AR-019 A: Direct VPN test complete` and select **Submit Request**.
9. In Acme Priya, find the matching VPN **Remove** request in **Approvals > Access Requests > Requested**. Approve it and record the decision.
10. Inspect the removal activity as administrator. Repeat all four native checks. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data) if needed and verify the requested entitlement assignment is gone.

**Check:** Only VPN was added; after removal all three business groups are False and baseline is True. Do not start Test B until that cleanup passes.

**Screenshots:** `AR-019-02.png`: Test A grant and native result. `AR-019-03.png`: self-removal, Priya's decision and clean result.

## 3. Test B — request and remove the profile

1. Recheck Olivia has no business membership, Finance assignment or pending request.
2. In Acme Olivia, open **Request Center > Access Items > Access Profiles** for herself. Search and select AP-Finance-Reporting.
3. Enter `AR-019 B: Reporting profile comparison`, keep immediate access and the standard account, then **Save > Review Request > Submit Request**. Record this separate request.
4. In Acme Daniel, open Olivia's profile **Grant** under **Approvals > Access Requests > Requested**, inspect and approve it. Verify **Reviewed**.
5. In Acme Admin, follow this request's activity. After completion, check all four native groups and original account identifiers.
6. Record VPN=True, FIN-REPORTING=True, FIN-AP=False, baseline=True. Inspect Olivia's **Access > Access Profiles** and record the profile assignment.
7. Open **Admin > Identity Management > Identities > Olivia > Access > Access Profiles > AP-Finance-Reporting > Details**. Select **Revoke Access Profile**, enter `AR-019 B: Profile test complete` and select **Revoke**.
8. In Acme Daniel, inspect and approve Olivia's profile **Remove** request.
9. Follow the removal activity, repeat the four native checks and refresh imported AD data if needed. Verify the profile assignment is gone.

**Check:** The profile added two groups, then its removal returned all three business groups to False. Baseline and the account remain. Do not start Test C with leftover profile access.

**Screenshots:** `AR-019-04.png`: Test B grant and native result. `AR-019-05.png`: profile removal and clean result.

## 4. Test C — request and remove the role

1. Recheck the clean recipient state.
2. In Acme Olivia, open **Request Center > Access Items > Roles** for herself. Search and select ROLE-Finance-Analyst.
3. Enter `AR-019 C: Finance role comparison`, keep immediate access and the standard account, then **Save > Review Request > Submit Request**. Record its separate request ID.
4. In Acme Daniel, inspect and approve Olivia's role **Grant**. Verify the decision under **Reviewed**.
5. As administrator, follow the request's activity to completion. Check the four native groups and account identifiers.
6. Record all three business groups=True and baseline=True. Open **Admin > Access Model > Roles > ROLE-Finance-Analyst > View Details > Identities > Olivia > View Assignments** and record the requested assignment.
7. Select that assignment, confirm its target account and select **Revoke Assignment**. Enter `AR-019 C: Role test complete`, then **Revoke**.
8. Record this administrator revocation separately from a user removal request. Inspect its audit/account activity; do not wait for a notification or assume the profile removal-review flow applies to this administrative route.
9. After the operations finish, repeat all four native checks. Refresh imported data and verify the requested role assignment is gone.

**Check:** The role added three business groups and its targeted revocation removed them. Baseline remains True on the same account.

**Screenshots:** `AR-019-06.png`: Test C grant, assignment and target result. `AR-019-07.png`: administrative role revocation and final native state.

## 5. Compare the three records

1. Complete each comparison row using your observed IDs, reviewer and native result.
2. Look at the grant request details for A, B and C. Confirm their item types differ even though all three delivered VPN.
3. Compare the identity's current Access view with historical request records. If ISC recognizes a profile from its complete set of entitlements, that display alone does not prove the person requested that profile.
4. Recheck Lucas's VPN is still present and Olivia's three business memberships are absent.
5. Keep the enabled entitlement, profiles, role and application. Do not delete definitions to clear history.

**Check:** Your evidence explains the request origin and the target outcome independently. It also records which removal route you used; different routes are not a controlled comparison of approval policy alone.

**Screenshot:** `AR-019-08.png`: completed comparison with final control memberships.

## If the result differs

If a later card is unavailable, check whether the previous assignment or imported membership still exists. Finish the preceding removal and refresh before retrying. If My Access does not offer Revoke Assignment, verify the direct requested entitlement and account; do not revoke a role-supplied entitlement. Use [the shared diagnosis checks](../../M03-READINESS.md#if-your-result-differs) for partial writes or unexplained retention.

## Explain the result

A reviewer says, “All three tests delivered VPN, so they are the same request.” Use two differences from your journal to respond.

<details>
<summary>Check your explanation</summary>

The requested type/ID and approval policy differ. The profile also delivered Reporting, and the role delivered Reporting and FIN-AP. Native VPN membership alone cannot identify the requested object. Test A used user entitlement removal, Test B used administrator profile revocation with review, and Test C used administrator role revocation; record those route differences rather than attributing them all to object type.

</details>

## Final verification

- [ ] Three distinct grant tests and their native results are recorded.
- [ ] Each test was removed before the next began.
- [ ] VPN direct grant/removal review remains assigned to Priya.
- [ ] Finance object policies remain assigned to Daniel.
- [ ] Olivia has no Finance/VPN assignment or pending test operation.
- [ ] Baseline, original accounts, Lucas's VPN and all course definitions remain.

## Leave this in place

Retain the access model and the explicit VPN removal policy. Olivia finishes with none of the three business groups. Follow [resume guidance](../../M03-READINESS.md#resume-or-repeat-safely) before repeating any cycle.

[Entitlement request/removal policies](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html) · [User removal steps](https://documentation.sailpoint.com/saas/user-help/requests/requesting_access_removal.html) · [Role revocation](https://documentation.sailpoint.com/saas/help/access/roles.html)

## Screenshots to capture

| Filename | What to show |
|---|---|
| AR-019-01.png | Clean starting state and VPN removal policy |
| AR-019-02.png | A: entitlement grant and VPN only |
| AR-019-03.png | A: removal and clean state |
| AR-019-04.png | B: profile grant and two groups |
| AR-019-05.png | B: removal and clean state |
| AR-019-06.png | C: role grant and three groups |
| AR-019-07.png | C: administrator revocation and clean state |
| AR-019-08.png | Comparison and preserved controls |

Use extra captures for decision/activity/native panels. Exclude credentials.

[Previous: AR-018](../AR-018/README.md) · [Lab index](../README.md) · [Next: AR-020](../AR-020/README.md)
