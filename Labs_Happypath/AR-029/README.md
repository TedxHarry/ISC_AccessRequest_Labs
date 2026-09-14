# AR-029 · Require manager review followed by Security

## Before you start

Complete AR-028. Use Henry (`acme.e018`) as requester, Ava (`acme.e006`) as manager, and Noah (`acme.e007`), Evelyn (`acme.e021`) and William (`acme.e022`) as Security reviewers. Keep Acme Admin and the AD workstation available.

You will create AP-Production-Support and require two decisions: Ava first, then one member of Security. Keep the [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Prepare the five sessions and check Henry

1. In Acme Admin, open **Admin > Identity Management > Identities** and find each username above. Confirm Acme Employees, the expected employee number and a linked standard AD account. Henry's Manager must be Ava.
2. For anyone without a working session, update their email in the latest complete private HR CSV to a unique inbox you control. Preserve all rows and existing controlled addresses. Upload the complete file through **Acme HR > Account Management > Account Aggregation**, wait for processing, and reopen each identity to verify Work Email.
3. Keep the Acme Employees sign-in method established in AR-008. For an unregistered ISC-password user, select **Actions > Invite Identity** and complete registration in a separate browser profile named for that person. For existing external authentication, use that person's established sign-in route. [Registration steps](../../labs/AR-008/README.md#4-register-users-who-use-isc-credentials)
4. Sign out and back in to each profile. Verify the username in the user menu. Henry needs Request Center; Ava and the three Security members need Approvals. Ordinary reviewer access is sufficient.
5. Run [native membership checks](../../M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e018`: `GG-PROD-SUPPORT` must be False and `GG-ACME-BASELINE` True. Record his original account DN and objectGUID.

**Check:** Every actor can use their own session and Henry starts without Production Support.

### 2. Create the Security governance group

1. Open **Admin > Identities > Governance Groups > Create Group**.
2. Enter **Name: GOV-Security-Review**, **Description: Reviews Acme production support requests**, and **Owner: Noah (acme.e007)**. Select **Save**. If this exact course group already exists, inspect and reuse it.
3. Open **Membership > Add Members**. Select Noah, Evelyn and William by their usernames, then **Add**. Verify exactly those three members; selecting Noah as owner did not replace this membership step.
4. Record the group ID from its URL or details in the journal. Do not create an AD group for this reviewer group.

**Check:** GOV-Security-Review contains three eligible identities. Save `AR-029-01.png` showing its membership.

### 3. Configure the Production Support profile

1. Open **Admin > Access Model > Access Profiles > Create New**. Enter **AP-Production-Support**, description `Production support for approved maintenance`, primary owner **Ava**, and your AD source. Save. If this course profile already exists from a partial run, reopen it and verify its name and source instead of creating a second copy.
2. Open **Manage Entitlements**. Find `GG-PROD-SUPPORT`, verify the source and native group DN, add it with **+**, and save. This profile contains only that entitlement.
3. Open **Access Requests**. Enable **Allow Access Requests**. Under **Reviewing Access Requests**, select **Require Approval > Reviewer**. Add **Manager**, then **Governance Group**, selecting `GOV-Security-Review`. Use the arrows to put Manager first. Remove unintended extra reviewer rows.
4. Require comments **When the user requests access** and **When a reviewer denies the request**. Leave forms and required end dates off for this new profile.
5. Under **Reviewing Removal Requests**, enable **Require Approval for Removal** and add only **Primary Owner**. This gives Ava a separate removal decision after the grant test.
6. For this new profile's grant review, set **Timeout: 90 days**, **Reminders: off**, and **Escalations: off**. Record the saved settings and leave global settings unchanged. AR-032 will test a shorter schedule. Save the page.
7. Enable the profile from the Access Profiles list and select **Apply Changes**. Reopen it after processing to verify the entitlement, reviewer order and removal reviewer. Leave it outside the Finance segment and any automatic role or lifecycle assignment.

**Check:** Manager is first, GOV-Security-Review second, and Primary Owner reviews removals. Save `AR-029-02.png` showing the grant reviewer order.

### 4. Submit as Henry and approve as Ava

1. In Acme Henry, open **Request Center > Access Items > Access Profiles**. Search `AP-Production-Support`, verify its source and select it.
2. Enter `AR-029 production maintenance` as the reason, keep immediate access, select **Save > Review Request**, confirm Henry and the profile, then **Submit Request**. Use Henry's standard AD account if account selection appears.
3. Open **My Requests**, record the request ID, then find that ID in **Acme Admin > Admin > Dashboard > Approval Management > Access Requests**. Open **Process** and **Assignees**. Ava should be the current reviewer; the Security step is later in the process.
4. In Acme Evelyn, open **Approvals > Access Requests > Requested**. Confirm this request is not yet actionable for her. Return to Acme Ava, open Henry's matching Grant details, select **Approve** and confirm.
5. Before the Security decision, repeat Henry's native Production Support check. It must still be False.

**Check:** Ava's approval advances the process but does not yet grant the group. Save `AR-029-03.png` showing the process after Ava's decision.

### 5. Complete the Security review and verify AD

1. Refresh the request in Approval Management. Open **Assignees** and inspect the current members behind **Multiple**. Match them to GOV-Security-Review.
2. In Acme Evelyn and Acme William, locate Henry's request under **Approvals > Access Requests > Requested**. Only Evelyn should act: open Details, verify the recipient/profile, then **Approve** and confirm.
3. Refresh William's queue. The group decision should no longer need his approval. In the admin Process view, record Evelyn as the person who acted for the group.
4. Follow [the Account Activity lookup](../../LAB-DESK.md#find-the-account-activity), using `acme.e018`, the exact AD source and this request's time. Open the source operation and record the group-add result.
5. Repeat Henry's native check: Production Support must be True, baseline True, and account DN/objectGUID unchanged. If imported access lags AD, [aggregate and refresh the account](../../M02-CHECKS.md#refresh-imported-ad-data).

**Check:** One Security member completed the group step and the native group was added. Save `AR-029-04.png` showing the group decision and `AR-029-05.png` showing the AD result.

### 6. Remove the grant, then test manager denial

1. In Acme Admin, open **Admin > Identity Management > Identities > Henry > Access > Access Profiles**. Open **AP-Production-Support > Details > Revoke Access Profile**. Enter `AR-029 test complete`, then **Revoke**.
2. In Acme Ava, find Henry's **Remove** request, open its details and approve it. Record this removal ID separately from the grant.
3. Follow the removal operation and verify native `GG-PROD-SUPPORT` is False again. Refresh imported account data if needed. Keep the profile and baseline role.
4. In Acme Henry, repeat Section 4's submission with reason `AR-029 manager denial`. Record the new ID. In Acme Ava, open that Grant and **Deny** with the same reason.
5. Inspect Process to confirm the request ended at Ava's denial. Verify no Security decision is needed and Production Support remains False.

**Check:** The positive test was granted and removed; the negative test never granted access. Save `AR-029-06.png` showing the denied control.

## Check the result

Confirm three different request records: grant through Ava and Evelyn, removal through Ava, and a fresh denial by Ava. Henry must finish without Production Support and with baseline intact.

If Security can act before Ava, reopen the saved reviewer order and check that you requested the profile itself. If membership appears before both required decisions, inspect other assignments and the account activity. If the group's members are hidden in the requester's Process view, inspect them as administrator under Assignees; requester expansion depends on the tenant's governance-group visibility setting.

[Governance groups](https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html) · [Ordered profile reviews and removal](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html)

## Finish

Keep GOV-Security-Review and AP-Production-Support. Grant order is Manager then Security; removal reviewer is Primary Owner (Ava). Henry has no Production Support grant. Keep the recorded 90-day grant timeout with reminders/escalations off until AR-032.

If interrupted, find the recorded request before submitting another. Complete its current stage, verify any grant, then use Section 6 to remove it. Do not remove membership directly in AD.

### Screenshots to capture

Capture these as you reach the matching step. If a result needs two screens, add `a` and `b` to that filename.

| Filename | What to show |
|---|---|
| AR-029-01.png | Noah, Evelyn and William in the governance group |
| AR-029-02.png | Manager followed by Security on the profile |
| AR-029-03.png | Process after Ava approves, before Security decides |
| AR-029-04.png | Evelyn recorded as the group decision maker |
| AR-029-05.png | Henry native Production Support membership after fulfillment |
| AR-029-06.png | Fresh manager-denied request |

[Previous: AR-028](../AR-028/README.md) · [Course outline](../../README.md) · [Next: AR-030](../AR-030/README.md)
