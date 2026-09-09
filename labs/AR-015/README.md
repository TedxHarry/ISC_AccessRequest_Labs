# AR-015 · Deliver a second working request independently

**Before you start:** AR-014. Liam (`acme.e008`) requests; Priya owns and reviews.

For any actor whose ISC sign-in is not prepared, complete [AR-008’s additional-session procedure](../AR-008/README.md) before submitting or reviewing.

Acme wants one Remote Worker request that supplies VPN and remote-tool access. Write your configuration plan and predicted outcomes first. Open the walkthrough only when you need help and record which parts you completed unaided.

Use the administrator, Liam, Olivia and Priya sessions and the AD workstation. Liam and Olivia must have neither business group, no existing Remote Worker assignment and no pending request for it. Keep the latest complete HR file when preparing Liam's sign-in.

## Your assignment

Create AP-Remote-Worker with exactly GG-VPN-USERS and GG-REMOTE-USERS on the AD source. Priya owns it and reviews grants and removals. Require request and denial reasons. Prove Liam's approved case and Olivia's denied case, then remove Liam's test assignment through ISC. Retain Lucas's directly requested VPN and everyone's baseline.

<details>
<summary>Open the mentor's walkthrough when you need it</summary>

### Build and demonstrate

1. Use the lab desk AD checks to record Liam's and Olivia's account DNs, objectGUIDs and direct membership in `GG-VPN-USERS` and `GG-REMOTE-USERS`. Resolve an existing grant before using this clean-start test, preserving unrelated access. Capture the before results as `AR-015-01.png`.
2. Check whether AP-Remote-Worker already exists and reuse it if appropriate. Otherwise open **Admin > Access Model > Access Profiles > Create New**. In Configuration, create `AP-Remote-Worker`, owner Priya, AD source, with description `VPN and remote-tool access for Acme remote workers`. Save. In **Manage Entitlements**, add exactly those two entitlements after checking their native DNs, then save.
3. Open **Access Requests**, enable **Allow Access Requests**, select **Require Approval > Reviewer**, and add **Primary Owner** as the only reviewer. Require comments for requests and denials. Use no form or required end date for this immediate-access test. Set **Require Approval for Removal** with **Primary Owner** too. Save, enable the profile, apply its changes from the profile list and wait for processing. Reopen the saved settings and capture them as `AR-015-02.png`.
4. As Liam, find and request the profile with reason `AR-015: Remote Worker acceptance test`. Check the result is an access profile, the recipient is Liam and any selected account is his standard AD account. Submit once and record the request ID and time.
5. Predict the reviewer, then inspect the real pending approval. In Priya's **Approvals > Access Requests > Requested**, confirm the Grant request and approve. Capture the decision now. In the administrator session, open **Admin > Dashboard > Approval Management > Access Requests**, match the request, and inspect Process. Open related account activity, or locate it using **Search > Account Activity**, matching Liam, source, group values and operation time. Save these views as `AR-015-03.png`.
6. Track the activity and prove both direct group memberships in AD. Verify the unchanged objectGUID. Record the profile under Liam's **Access > Access Profiles** and the source account in ISC. Aggregate AD accounts if imported data is stale. Save the two native memberships as `AR-015-04.png`.
7. As a separate negative case, confirm Olivia has no VPN or Remote Users access, request the profile in Olivia’s session, and deny it as Priya with reason `Remote-work requirement has not been approved`. Record its separate ID. Verify neither group is newly added on the same controller. Save the denial as `AR-015-05.png` and unchanged membership as `AR-015-06.png`.
8. Write a short handover containing profile/source IDs, owner, groups, reviewer and the two test outcomes.

**Pass when:** Both groups are proven for the approved case, the denied case has no new grants, and your handover explains how to investigate a failure.

### Remove the completed test grant

1. Open **Admin > Identity Management > Identities > Liam > Access > Access Profiles**. Open AP-Remote-Worker and inspect **Details**.
2. Confirm this is the test assignment and it is revocable. Select **Revoke Access Profile**, enter `AR-015: Remove completed Remote Worker test`, and select **Revoke** once.
3. Record the removal request. As Priya, locate the **Remove** request for Liam and AP-Remote-Worker, then approve it.
4. Track removal in administrator request details and account activity. Verify both native memberships are absent while GG-ACME-BASELINE remains. Aggregate account data if needed and recheck ISC Access.
5. Retain the enabled profile definition. Save removal and final membership evidence as `AR-015-07.png`.

If revocation is unavailable, inspect assignment origin and revocability. If a group remains, inspect other assignments and the failed operation. Do not remove native membership manually to hide an unresolved ISC assignment.

</details>

Configure the profile's approval policy explicitly; do not assume it inherits VPN's individual reviewer settings. [Profile request and removal configuration](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html)

[Profile management](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)

## Your ticket: the bundle is only partly present

Supplied case: Liam's profile request was approved. VPN was added but the Remote Users operation failed. Is this ready to close? Write what you would inspect before retrying.

<details>
<summary>Compare your diagnosis with the mentor's solution</summary>

Keep the case open. Match the account and group DNs, inspect the failed operation's exact error and verify native state. Correct the supported cause, then use an eligible retry or documented recovery. Do not submit the individual entitlements to disguise a partial profile fulfillment. Closure requires both memberships and a recorded final request/activity outcome.

</details>

## Save the handover as C02

Create a private `C02-First-Requests` folder. Retain the six module journals, source/item/profile IDs, saved policies, Lucas's retained VPN evidence, Liam's grant/removal evidence and Olivia's denial evidence. Explain where another engineer should look when approval succeeds but a group is missing. C02 is an evidence checkpoint, not a tenant backup.

## If you stopped midway or repeat later

Find existing grant, denial and removal requests before submitting another. If Liam has the test profile, finish verification and supported removal. If removal is pending, resume its review or operation. Start a new test only after checking both memberships and accounting for earlier requests. Preserve pre-existing access and label exceptions; do not claim clean removal while a group remains unexplained.

## What to leave in place

| Item | Required state |
|---|---|
| AP-Remote-Worker | Enabled and requestable; two entitlements; Priya grant/removal reviewer |
| Liam and Olivia | No Remote Worker test assignment or membership in either business group |
| Lucas and baseline | Lucas retains requested VPN; baseline remains assigned to all 24 |
| C02 | Approved, denied and removed outcomes supported by evidence |

## Completion checklist

- [ ] Grant, denial and completed removal are verified; C02 is saved.
- [ ] Your ticket diagnosis and comparison are recorded before checking the solution.
- [ ] Actual tenant observations are distinguished from the supplied ticket case.
- [ ] Pending requests are accounted for and the retained state matches the next lab.

Record results in your [evidence journal](EVIDENCE.md). Keep the [lab desk](../../LAB-DESK.md) open for native verification.

## Screenshots to capture

Capture these at the matching steps above. Use extra images when one view cannot show everything. Keep secrets and personal mailbox details out of shared images.

| Filename | What to show |
|---|---|
| AR-015-01.png | Liam and Olivia before memberships |
| AR-015-02.png | Profile entitlements, grant and removal policies |
| AR-015-03.png | Liam approved request and activity |
| AR-015-04.png | Liam two native memberships |
| AR-015-05.png | Olivia denied request |
| AR-015-06.png | Olivia unchanged memberships |
| AR-015-07.png | Liam removal request and final native memberships |

[Previous: AR-014](../AR-014/README.md) · [Course outline](../../README.md) · [Next: AR-016](../AR-016/README.md)
