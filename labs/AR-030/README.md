# AR-030 · Reassign a review and investigate an unresolved reviewer

You will first reassign a valid pending review to Noah and verify that the next request still uses Ava.

## Before you start

Complete AR-029. Prepare Acme Harper (`acme.e019`) using the same email, registration and browser-profile steps in [AR-029 Section 1](../AR-029/README.md#1-prepare-the-five-sessions-and-check-henry), substituting Harper's username. Use Acme Admin, Acme Ava and Acme Noah too.

Harper's Manager is Ava. AP-Production-Support still requires Manager then Security. Keep the [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Verify the starting state

1. Open Harper in **Admin > Identity Management > Identities**. Confirm E019, Manager Ava and the linked standard AD account. Record the identity ID and manager.
2. Reopen **AP-Production-Support > Access Requests** and record the grant order and current timing settings. Keep the profile owner Ava and GOV-Security-Review membership unchanged.
3. Run [native checks](../../M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e019`: Production Support False, baseline True. Check Approval Management for a pending Harper request before creating another.

**Check:** Harper has a valid manager and no Production Support grant.

### 2. Submit the request and find its current assignee

1. In Acme Harper, open **Request Center > Access Items > Access Profiles**, find AP-Production-Support and select it. Enter `AR-030 reassignment control`, keep immediate access, then **Save > Review Request > Submit Request**. Verify Harper and her standard account before final submission.
2. Open **My Requests** and record the ID. In Acme Admin, open **Admin > Dashboard > Approval Management > Access Requests**, paste that ID into Search, then open its access name.
3. Open **Process** and **Assignees**. Record Ava as the current reviewer. Leave the request pending.

**Check:** You found the exact request and its current review. Save `AR-030-01.png` showing Ava assigned.

### 3. Reassign this review to Noah

1. On the request's **Assignees** tab, select **Reassign** beside Ava. Enter Noah (`acme.e007`) in **Reassign To**.
2. Enter comment `AR-030 approved lab handoff to Noah`, then select **Reassign**. This changes the current request assignment; leave Harper's HR manager and the profile policy alone.
3. Reopen **Assignees** and **Process**. Record Noah as the current assignee and the reassignment event. If the table shows Multiple, use the individual row under Assignees; the table-level Reassign action can be unavailable for multiple assignees.
4. In Acme Noah, open **Approvals > Access Requests > Requested**. Find Harper's Production Support Grant, verify the reason, then **Deny** with comment `AR-030 reassignment control complete` and confirm.
5. Verify the request is Denied in Approval Management. Recheck Harper's native Production Support membership; it must remain False.

**Check:** Noah completed the reassigned review, and the audit trail identifies the change. Save `AR-030-02.png` showing that history.

### 4. Prove that new requests still use Ava

1. Reopen Harper's identity and the profile policy. Manager is still Ava and grant order is still Manager then Security.
2. In Acme Harper, submit a fresh request using Section 2 and reason `AR-030 original routing control`.
3. Find the new ID in Approval Management and verify Ava is assigned. In Acme Ava, open the matching Grant and deny it with the same reason.
4. Recheck Production Support False and baseline True for Harper. Record both IDs and their different current reviewers.

**Check:** Reassigning one request did not change the next request's routing. Save `AR-030-03.png` showing the fresh request assigned to Ava.

## Check the result

Both requests should be Denied, and Harper should retain Ava as Manager without Production Support membership. The first request records Ava → Noah; the fresh control starts with Ava.

If Noah cannot find the reassigned task, check his signed-in username and the request's Assignees before changing permissions. If Reassign is unavailable, confirm the request is still pending and use the individual assignee row. Do not use Overwrite Current Approver as a substitute for reassignment.

[Reassigning and canceling reviews](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html) · [Missing-reviewer behavior](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html#requests-missing-a-reviewer)

## Engineering practice

### Break and repair Harper's manager data

1. Make a private backup of the latest complete working HR CSV. Locate E019 and record `managerEmployeeNumber=E006`. Preserve the current population, including any later-added rows and controlled emails.
2. In the working copy, clear only E019's `managerEmployeeNumber`. Save, reopen and verify that one field changed.
3. Upload the complete edited file through **Admin > Connections > Sources > Acme HR > Account Management > Account Aggregation**. Wait for aggregation and identity processing in **Admin > Dashboard > Monitor**. Inspect Harper's HR account and identity separately. Continue only when the HR manager field and resolved identity Manager are both empty.
4. Submit one Harper request using Section 2 with reason `AR-030 missing manager`. Find its ID in Approval Management. Record the actual Assignees and Process history. Inspect the saved escalation/fallback configuration; do not assume the missing reviewer always routes to a particular administrator.
5. Restore E019's manager field to E006 in the latest complete file, preserving other edits. Upload it and verify Ava returns as Harper's identity Manager.
6. Inspect the existing diagnostic request separately. If pending with someone other than Ava, use Section 3's reassignment steps to move that individual review to Ava with comment `AR-030 manager data restored`. If already assigned to Ava through fallback, record that outcome without manufacturing a reassignment.
7. Deny the diagnostic request in its current authorized reviewer's session. If the diagnostic request already concluded, record its actual outcome. For an unexpected grant, use [AR-029 Section 6](../AR-029/README.md#6-remove-the-grant-then-test-manager-denial) with Harper as recipient to revoke the profile and have Ava approve removal. Verify Production Support is absent before continuing.
8. Repeat Section 4's fresh control and deny as Ava. Verify the restored HR row, identity Manager, clean request state and native membership.

Before closing the exercise, open **AP-Production-Support > Configuration** and verify Ava is still its owner. Open **GOV-Security-Review > Membership** and inspect Noah, Evelyn and William on their identity pages. Confirm their current identity state, controlled Work Email and working sessions. Group membership alone does not establish that a reviewer can receive mail or sign in. Record a notification failure separately from an unresolved reviewer; do not disable a shared reviewer to manufacture it.

**Ticket:** The HR manager is repaired, but an older request still names another reviewer. Does that prove the HR correction failed?

<details>
<summary>Compare your diagnosis</summary>

No. Check Harper's current identity Manager and a fresh request separately from the older assignment. Record how the missing review resolved in this tenant and any reassignment of that existing task. A correct new request does not erase the older request's history.

</details>

Capture the missing-manager identity as `AR-030-04.png`, actual fallback as `AR-030-05.png`, and restored Manager as `AR-030-06.png`.

## Finish

Keep Harper's Manager Ava, the complete corrected HR file, the original profile settings and Security membership. Both working-scenario requests must be concluded with no grant. If pausing during the engineering exercise, restore the HR manager first, then account for its diagnostic request. Never leave the HR fault in place for the next lab.

### Screenshots to capture

Capture these as you reach the matching step. If a result needs two screens, add `a` and `b` to that filename.

| Filename | What to show |
|---|---|
| AR-030-01.png | Original request assigned to Ava |
| AR-030-02.png | Reassignment history and Noah decision |
| AR-030-03.png | Fresh control assigned to Ava |
| AR-030-04.png | Missing Manager during the engineering exercise |
| AR-030-05.png | Actual missing-reviewer fallback |
| AR-030-06.png | Restored Harper Manager |

[Previous: AR-029](../AR-029/README.md) · [Course outline](../../README.md) · [Next: AR-031](../AR-031/README.md)
