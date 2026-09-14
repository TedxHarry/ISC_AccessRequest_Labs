# AR-018 · Offer the Finance Analyst role

<a id="goal"></a>

In this lab, you'll create a requestable Finance Analyst role, approve it for Olivia, verify its three AD groups and revoke the test role assignment.

## Before you start

Complete [AR-017](../AR-017/README.md), including cleanup. Use Acme Admin, Acme Olivia (`acme.e011`), Acme Daniel (`acme.e003`) and the AD workstation. Keep the [module state](../../M03-READINESS.md) and your [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Check the recipient and the new entitlement

1. As administrator, open Olivia under **Admin > Identity Management > Identities**. Inspect **Accounts**, **Access** and her pending requests.
2. Record the standard AD account DN/objectGUID. Run the [native check](../../M02-CHECKS.md#inspect-direct-ad-membership) for `GG-FIN-REPORTING`, `GG-VPN-USERS`, `GG-FIN-AP` and `GG-ACME-BASELINE`.
3. Open **Admin > Connections > Sources > your AD source > Entitlement Management > Entitlements**. Search `GG-FIN-AP` and compare its native value with the AD group DN.
4. Record that entitlement's source, attribute, value and [ISC ID](../../LAB-VALUES.md#separate-entitlement-ids-from-native-group-values).

**Check:** Olivia lacks all three business groups and retains baseline. GG-FIN-AP already exists in AD and ISC; this lab does not create another group.

**Screenshot:** `AR-018-01.png`: clean recipient and the exact FIN-AP entitlement.

### 2. Create the accounts-payable profile

1. In **Admin > Access Model > Access Profiles**, search `AP-Finance-AP`. Inspect and reuse the matching course profile if present; otherwise select **Create New**.
2. Set **Name** to `AP-Finance-AP`, **Primary Owner** to Daniel (`acme.e003`), **Description** to `Accounts-payable access for Acme Finance work` and **Entitlement Source** to your recorded AD source. Select **Save**.
3. On **Manage Entitlements**, search `GG-FIN-AP`, verify its DN and add it with **+**. Select **Save**. This profile contains exactly one group.
4. On **Access Requests**, enable **Allow Access Requests**. Under **Reviewing Access Requests**, select **Require Approval > Reviewer**, add **Primary Owner** with **+**, and retain one grant reviewer.
5. Require request and denial comments. Leave request form and required end date off. Record timeout, reminder and escalation settings.
6. Under **Reviewing Removal Requests**, enable **Require Approval for Removal** and add **Primary Owner** as the single removal reviewer. Select **Save**.
7. Enable the profile. Reopen it and verify source, entitlement and policies.
8. Open **Admin > Access Model > Applications > Finance Services > Edit > Access Profiles**. In **Add Access Profile**, select AP-Finance-AP and use **+**, then **Save**. Keep AP-Finance-Reporting associated too.

**Check:** Finance Services has two separately requestable profiles. Reporting still contains Reporting + VPN; AP contains FIN-AP only.

**Screenshot:** `AR-018-02.png`: AP profile settings and both application associations.

### 3. Build a standard role with those profiles

1. Open **Admin > Access Model > Roles** and search `ROLE-Finance-Analyst`. Reuse only the matching course role; otherwise select **Create New**.
2. On **Configuration**, choose **Standard** for Role Type. Set **Name** to `ROLE-Finance-Analyst`, **Primary Owner** to Daniel (`acme.e003`) and **Description** to `Reporting, VPN and accounts-payable access for the Acme Finance Analyst assignment`.
3. Leave **Common Access** unselected if shown, and select **Save**.
4. Open **Manage Access > Add Access > Access Profiles**. Select AP-Finance-Reporting and AP-Finance-AP.
5. Select **Review**, check exactly these two profiles, then **Add Access**. Reopen Manage Access to confirm the saved contents.
6. Open **Define Assignment**. Leave automatic assignment criteria unconfigured. Do not add a Finance department criterion or individual identities. This role will be assigned only when requested.
7. Keep ROLE-Acme-AD-Baseline unchanged.

**Check:** The new standard role contains two profiles representing three distinct AD groups and has no automatic assignment rule.

### 4. Configure and enable role requests

1. On ROLE-Finance-Analyst, open **Access Requests** and enable **Allow Access Requests**.
2. Under **Reviewing Access Requests**, select **Require Approval > Reviewer**, add **Primary Owner** with **+** and keep one grant reviewer.
3. Require comments on requests and denials. Leave forms and required end dates off. Record timeout/reminder/escalation settings.
4. Under **Reviewing Removal Requests**, enable **Require Approval for Removal** and add **Primary Owner** as the single removal reviewer. Save the role settings. This prepares user removal requests; Section 7 uses the separate administrator revocation route.
5. Turn on **Enable Role**. Wait for any association-triggered refresh to finish. Return to the Roles list and select **Apply Changes** once after finishing the profile and role edits.
6. Wait for **Admin > Dashboard > Monitor** processing to finish. Reopen the role and both profiles to verify enabled/requestable states and saved access.
7. Inspect the role's **View Details > Identities**. Olivia should not be assigned before requesting. If identities were automatically assigned, stop and inspect Define Assignment before submitting.

**Check:** The role is enabled for requests, Daniel is the role grant reviewer, and no Finance-wide assignment has been introduced.

**Screenshot:** `AR-018-03.png`: role contents, empty automatic criteria and saved request controls.

### 5. Request the role as Olivia

1. In Acme Olivia, verify `acme.e011`, then open **Request Center > Request for Myself** if prompted.
2. Choose **Access Items > Roles**, search ROLE-Finance-Analyst and inspect **Details**.
3. Select the role. In request details enter `AR-018: Finance Analyst role acceptance test`, keep immediate access and verify Olivia's standard account if prompted. Select **Save**.
4. Select **Review Request**. Confirm one role for Olivia, not separate requests for its profiles, then **Submit Request** once.
5. Record its **My Requests** entry, time and ID.
6. In Acme Daniel, open **Approvals > Access Requests > Requested**. Inspect Olivia's role **Grant**, approve it and verify **Reviewed**.

**Check:** The grant request names ROLE-Finance-Analyst. Its role approval policy applies; contained profile policies do not each create another grant review for this role request.

**Screenshot:** `AR-018-04.png`: requested role and Daniel's decision.

### 6. Verify all three groups and assignment origin

1. In Acme Admin, inspect [the matching request and account activity](../../M02-CHECKS.md#inspect-a-request-as-administrator). Record operations against all three group DNs.
2. After provisioning finishes, repeat Section 1's native membership checks.
3. Open **Admin > Access Model > Roles > ROLE-Finance-Analyst > View Details > Identities**. Find Olivia and open **View Assignments**. Record the requested assignment and target account.
4. Inspect Olivia's identity **Access** and **Accounts**. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data) if needed.
5. Compare the original DN/objectGUID and write the role → two profiles → three groups relationship in your journal.

**Check:** Reporting, VPN and FIN-AP are all True on Olivia's original account, and baseline remains True. The role assignment is requested, not automatically assigned.

**Screenshot:** `AR-018-05.png`: requested assignment and all three native memberships.

### 7. Revoke Olivia's requested role assignment

1. Stay in Acme Admin. Open **Admin > Access Model > Roles**, find ROLE-Finance-Analyst and select **View Details**.
2. Open **Identities**, find Olivia and select **View Assignments**.
3. Select her requested assignment. Verify its target account matches Section 6, then select **Revoke Assignment**.
4. Enter `AR-018: Finance Analyst test complete` in the revocation dialog and select **Revoke** once.
5. Record the administrative action and inspect the resulting account activity for Olivia and the three group DNs. Administrative revocation is audited; do not use the absence of a notification as a failure test or assume a separate Daniel review is required for this route.
6. Wait for the operations to finish, then repeat all four native checks. Refresh imported AD data when needed and reopen View Assignments.
7. Confirm the requested role assignment is removed. Keep the role enabled, its profiles intact and both profiles associated with Finance Services.

**Check:** Olivia lacks all three business groups and the requested role assignment. Her baseline and original account remain. Do not disable/delete the role or revoke its contained profiles to perform this cleanup.

**Screenshot:** `AR-018-06.png`: administrative revocation/activity and final memberships.

## Check the result

### If the result differs

If the role cannot be enabled, check that it has saved access and is configured for requests. If revocation is unavailable, check the assignment origin: automatic roles use assignment criteria and are not manually revocable in this flow. If only two groups arrive, inspect the role contents and the third operation rather than adding a direct entitlement request.

### Explain what you observed

Why did Olivia submit one role request instead of two profile requests, and why did you remove the role assignment rather than either profile?

<details>
<summary>Check your explanation</summary>

The role packages both profiles into one requested job assignment and uses its own review policy. The contained access follows that role assignment. Its removal must address the requested role, while baseline remains supplied by the separate baseline role. Disabling or deleting a role is not the same operation as revoking a user's requested assignment.

</details>

### Final verification

- [ ] AP-Finance-AP is enabled/requestable with FIN-AP only and Daniel's grant/removal policies.
- [ ] Finance Services contains both Finance profiles.
- [ ] The standard Finance Analyst role contains both profiles and no automatic criteria.
- [ ] Olivia's requested role and all three native additions were verified.
- [ ] Administrative revocation removed that assignment and the three business groups.
- [ ] All baseline assignments, Lucas's VPN and the course definitions remain.

## Engineering practice

### Practice checkpoints

Compare your saved profile-origin and role-assignment evidence. Explain why you revoked the requested role assignment rather than one of its contained profiles.

### Diagnose this ticket

This is a supplied practice case. Write your diagnosis before opening the answer; keep it separate from failures you actually observe in the tenant.

> Olivia has Reporting, VPN and FIN-AP through ROLE-Finance-Analyst. A colleague opens AP-Finance-AP on her identity and cannot revoke it. They propose disabling the role.

Record the evidence you would inspect, the smallest correction, the repeat check and the state you would leave for the next lab.

<details>
<summary>Compare your diagnosis</summary>

Inspect role View Details > Identities > Olivia > View Assignments. The profile is supplied by the role; follow Section 7 for the requested role assignment. Do not disable the definition: that is not targeted deprovisioning. Verify all three native removals, baseline and the retained enabled definition.

</details>

## Finish

### Leave this in place

Keep the two Finance profiles, Finance Services and the role enabled/requestable. Olivia finishes with none of the three business groups or Finance assignments. Use [resume guidance](../../M03-READINESS.md#resume-or-repeat-safely) before repeating.

[Role configuration and revocation](https://documentation.sailpoint.com/saas/help/access/roles.html) · [Role and profile request policies](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html)

### Resume or repeat

Inspect the current object and request status before repeating. Reuse the saved course definitions when their source, access and policies match. A completed grant resumes at target verification and removal; a pending request resumes at its current review or provisioning stage. If cleanup is already complete, retain the definitions and use your evidence for the comparison. Follow the [module resume procedure](../../M03-READINESS.md#resume-or-repeat-safely); do not create duplicate objects or manually clear AD memberships.

### Screenshots to capture

| Filename | What to show |
|---|---|
| AR-018-01.png | Clean recipient and FIN-AP entitlement |
| AR-018-02.png | AP profile and two application associations |
| AR-018-03.png | Role contents, assignment criteria and policies |
| AR-018-04.png | Role request and approval |
| AR-018-05.png | Requested assignment and all target memberships |
| AR-018-06.png | Role revocation and final native state |

Exclude credentials and private registration details.

[Previous: AR-017](../AR-017/README.md) · [Course outline](../../README.md) · [Next: AR-019](../AR-019/README.md)
