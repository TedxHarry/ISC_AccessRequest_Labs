# AR-016 · Bundle Finance reporting access

<a id="goal"></a>

In this lab, you'll create one Finance reporting item that supplies Reporting and VPN, request it for Olivia and remove the test grant after checking AD.

## Before you start

Complete [AR-015](../AR-015/README.md) and the [Module 3 starting checks](../../M03-READINESS.md). Open Acme Admin, Acme Olivia (`acme.e011`), Acme Daniel (`acme.e003`) and your AD workstation. Keep your [journal](EVIDENCE.md) open.

If you are returning after a break, follow [the module resume checks](../../M03-READINESS.md#resume-or-repeat-safely) before creating an object or submitting another request.

## Follow the steps

### 1. Confirm Olivia's starting access

1. In Acme Admin, open **Admin > Identity Management > Identities**, find Olivia and verify E011 and Acme Employees.
2. Inspect **Accounts** and **Access**. Record the standard AD account DN and objectGUID. Confirm she has no Finance profile or role assignment. Switch to Acme Olivia to inspect **Request Center > My Requests**, then use [administrator request details](../../M02-CHECKS.md#inspect-a-request-as-administrator) to check for unfinished requests made for her by someone else.
3. Run the [native membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e011` against `GG-FIN-REPORTING`, `GG-VPN-USERS` and `GG-ACME-BASELINE`. Record the actual group DNs.
4. Keep the same controller for every before/after check.

**Check:** Reporting and VPN are False; baseline is True. If either business group is already present, inspect its assignment origin and finish the previous lab's cleanup first.

**Screenshot:** `AR-016-01.png`: Olivia's starting memberships and account identifiers.

### 2. Create the reporting profile

1. As administrator, open **Admin > Access Model > Access Profiles**. Search `AP-Finance-Reporting`. If it exists, inspect and reuse the course object; otherwise select **Create New**.
2. On **Configuration**, enter the following values:

| Field | Value |
|---|---|
| Name | AP-Finance-Reporting |
| Primary Owner | Daniel, acme.e003 |
| Description | Finance reporting with the VPN connectivity needed to reach it |
| Entitlement Source | Your recorded AD source |

3. Select **Save**. Check the source before this save; an existing profile's source cannot be changed.
4. Open **Manage Entitlements**. On a reused profile, keep matching existing rows and add only missing groups. Search `GG-FIN-REPORTING`, compare its source and DN with Section 1, and select **+**.
5. Add `GG-VPN-USERS` the same way. Select **Save**, leave the page and reopen it.
6. Confirm exactly these two groups are included. Keep the baseline profile and role separate.

**Check:** One profile contains Reporting and VPN from the intended AD source. Its definition alone has not granted either group to Olivia.

### 3. Set Daniel as the profile reviewer

1. On this profile, open **Access Requests** and turn on **Allow Access Requests**.
2. Under **Reviewing Access Requests**, select **Require Approval > Reviewer**. Choose **Primary Owner**, select **+**, and keep that as the single grant reviewer.
3. Require comments **When the user requests access** and **When a reviewer denies the request**.
4. Leave **Require Access Request Form** and **Require End Date** off for this exercise. Record the current timeout, reminders and escalation settings in your journal.
5. Under **Reviewing Removal Requests**, enable **Require Approval for Removal**, add **Primary Owner** with **+**, and keep one removal reviewer.
6. Select **Save**. Turn on **Enable Access Profile** (or use the list's **Actions > Enable**).
7. Return to the Access Profiles list and select **Apply Changes** once. Wait for **Admin > Dashboard > Monitor** processing to finish.
8. Reopen the profile and check the groups, enabled state, requestability and both reviewer lists.

**Check:** Daniel reviews this profile's grants and removals. Priya's direct VPN policy remains unchanged; requesting the profile uses the profile's policy.

**Screenshot:** `AR-016-02.png`: the two groups and saved grant/removal policies.

### 4. Request and approve the profile

1. Switch to Acme Olivia and verify `acme.e011` in the user menu.
2. Open **Request Center**, choose **Request for Myself** if prompted, then **Access Items > Access Profiles**.
3. Search `AP-Finance-Reporting`, inspect **Details**, and select that one profile.
4. Open request details, enter `AR-016: Finance reporting acceptance test`, keep immediate access and select Olivia's standard account if prompted. Select **Save**.
5. Select **Review Request**. Confirm Olivia and one profile, then **Submit Request** once.
6. Open **My Requests** and record the submission time and displayed identifier.
7. Switch to Acme Daniel. Open **Approvals > Access Requests > Requested**, open Olivia's profile **Grant**, verify the item/reason and select **Approve**. Confirm the decision, then find it under **Reviewed**.

**Check:** The request names the profile and its review was assigned to Daniel. If it is absent from his queue, inspect administrator Assignees before changing policies or resubmitting.

**Screenshot:** `AR-016-03.png`: Olivia's request and Daniel's recorded decision.

### 5. Prove the two target changes

1. As administrator, follow the [request and activity checks](../../M02-CHECKS.md#inspect-a-request-as-administrator). Match Olivia, the profile and submission time.
2. Inspect the operations for both recorded group DNs. Wait for final results; record account activity IDs separately from request and approval IDs.
3. Repeat Section 1's native checks. Compare the account DN and objectGUID with the starting values.
4. Open Olivia's **Access > Access Profiles** and her **Accounts > AD account**. If imported data is stale, [aggregate AD and recheck](../../M02-CHECKS.md#refresh-imported-ad-data).
5. In your journal, draw or write the path: Olivia's profile request → AP-Finance-Reporting → the two native groups.

**Check:** Both business groups are True on Olivia's original account; baseline remains True. An approved request with one failed group operation does not pass.

**Screenshot:** `AR-016-04.png`: both native memberships, unchanged account and matching activity.

### 6. Remove Olivia's test grant

1. In Acme Admin, open Olivia under **Admin > Identity Management > Identities > Access > Access Profiles**.
2. Open **AP-Finance-Reporting > Details**. Verify the recipient and that the assignment is revocable.
3. Select **Revoke Access Profile**, enter `AR-016: Reporting test complete`, then **Revoke**. Record the removal separately.
4. In Acme Daniel, find Olivia's **Remove** request under **Approvals > Access Requests > Requested**. Confirm its profile and approve it.
5. In Acme Admin, follow the removal activity to completion. Repeat the native checks and refresh imported data when needed.
6. Verify Olivia no longer holds the profile or either business group. Check Lucas (`acme.e012`) still has `GG-VPN-USERS`.

**Check:** Olivia returns to baseline-only access for these groups. Lucas's independent VPN grant and the reporting profile definition remain.

**Screenshot:** `AR-016-05.png`: removal decision/activity and final memberships.

## Check the result

### If the result differs

A missing revoke action may mean a role supplies the profile. A remaining group may mean another assignment or an unsuccessful removal operation. Inspect the origin and operation before acting; do not remove AD membership manually or delete the profile as cleanup. Use the [resume checks](../../M03-READINESS.md#resume-or-repeat-safely) if returning to an unfinished run.

### Explain what you observed

Before opening your notes, name the requested object, its reviewer and its two target changes. Then compare this with Lucas's direct VPN request.

<details>
<summary>Check your explanation</summary>

Olivia requested AP-Finance-Reporting and Daniel reviewed it. That one requested object supplied Reporting and VPN. Lucas requested the VPN entitlement directly and Priya reviewed that request. The common VPN group does not make the two requested objects or approval policies identical.

</details>

### Final verification

- [ ] The profile contains exactly Reporting and VPN from the recorded AD source.
- [ ] Daniel's grant decision and both native additions are recorded.
- [ ] Daniel's removal decision and both native removals are recorded.
- [ ] Olivia's original account and baseline remain; Lucas retains VPN.
- [ ] The profile stays enabled/requestable with Daniel reviewing grants and removals.
- [ ] No incomplete operation or pending test request remains.

## Finish

### Leave this in place

Keep AP-Finance-Reporting. Olivia finishes without Reporting or VPN. Preserve all 24 baseline assignments.

[Profile configuration and revocation](https://documentation.sailpoint.com/saas/help/access/access-profiles.html) · [Request policies](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html)

### Screenshots to capture

Capture at the matching steps; use additional images when a panel does not fit. Keep credentials and private mailbox information out of captures.

| Filename | What to show |
|---|---|
| AR-016-01.png | Starting memberships and original account |
| AR-016-02.png | Profile groups and grant/removal settings |
| AR-016-03.png | Request and Daniel's decision |
| AR-016-04.png | Successful activity and both memberships |
| AR-016-05.png | Removal and restored recipient state |

[Previous: AR-015](../AR-015/README.md) · [Lab index](../README.md) · [Next: AR-017](../AR-017/README.md)
