# AR-028 · Compare manager, item-owner and source-owner routing

You will request the same VPN entitlement three times, changing only its grant reviewer between requests. Each reviewer will deny the request so Olivia stays without VPN. Lucas keeps his existing VPN.

## Before you start

Complete [AR-027](../AR-027/README.md). Use Acme Admin, Acme Olivia (`acme.e011`), Acme Daniel (`acme.e003`) and Acme Priya (`acme.e002`). You will also need the existing AD source owner's working session for the third test. Keep the AD workstation and [journal](EVIDENCE.md) open.

If returning to an unfinished run, inspect its recorded request before submitting another. If later labs changed these course policies, record those changes before repeating this first-pass setup; do not overwrite later work without checking its assignments and requests.

## Follow the steps

### 1. Check Olivia and record the original settings

1. In Acme Admin, open **Admin > Identity Management > Identities**, find `acme.e011`, and confirm her Manager is Daniel and her standard AD account is linked.
2. Run [the direct AD membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) with username `acme.e011` and group `GG-VPN-USERS`. Record **False**. Repeat with `GG-ACME-BASELINE`; record **True**. Resolve leftover business access before requesting again.
3. Open **Admin > Access Model > Entitlements**, find `GG-VPN-USERS` on your AD source, then **Actions > Edit > Access Requests**. Record the grant reviewer, removal reviewer, comments, requestability and any timing settings. The course grant and removal reviewer should be **Primary Owner**, resolving to Priya.
4. Open **Admin > Connections > Sources > your AD source > Source Setup > Base Configuration**. Record the **Source Owner** identity. Do not change it for this test. Use that owner's existing session, or prepare it using [AR-008](../AR-008/README.md). Confirm its username before the test; if your source uses a governance-group owner, record its members and use a current member's session.
5. In **Admin > Dashboard > Approval Management > Access Requests**, use the filters for Olivia and VPN to confirm there is no pending duplicate. Keep a record of the source owner even if it is also Priya or Daniel.

**Check:** Olivia has baseline but no VPN. You know which person or group each reviewer category should resolve to.

### 2. Route the first request to Olivia's manager

1. Return to VPN's **Access Requests** page. Under **Reviewing Access Requests**, select **Require Approval > Reviewer**. Remove the existing grant-review row using its X, select **Manager**, and add it with **+**. Keep exactly one grant reviewer. Leave removal review and all other settings unchanged.
2. Select **Save**, leave the page and reopen it to verify Manager persisted.
3. In Acme Olivia, confirm the username in the user menu. Open **Request Center > Access Items > Entitlements**, search `GG-VPN-USERS`, and verify its AD source.
4. Select the item. Enter `AR-028 manager routing` as the reason, keep immediate access, select **Save**, then **Review Request**. Verify Olivia and the VPN entitlement before selecting **Submit Request**. If an account chooser appears, select her recorded standard AD account.
5. Open **Request Center > My Requests**, open that request and record its ID. In Acme Admin, paste the ID into **Approval Management > Access Requests**. Open the access name and inspect **Process** and **Assignees**. Record Daniel as the current reviewer. Capture `AR-028-01.png` now, before denying.
6. In Acme Daniel, open **Approvals > Access Requests > Requested**. Open Olivia's VPN **Grant** details, verify the reason, select **Deny**, enter `AR-028 manager routing control`, and confirm. Reopen the request in the admin view and verify **Denied**.

**Check:** A new request routed to Daniel and was denied. Save `AR-028-01.png` showing its ID and resolved reviewer before the decision.

### 3. Repeat for the item owner and source owner

1. As administrator, replace only the grant-review row with **Primary Owner**, then **Save** and reopen it.
2. Repeat Section 2's submission and inspection steps as Olivia, using reason `AR-028 primary owner routing`. Record the new request ID. Verify Priya is assigned and capture `AR-028-02.png`, then deny in Acme Priya with the same reason.
3. Replace only the grant-review row with **Source Owner**, save and reopen it.
4. Submit a third Olivia request with reason `AR-028 source owner routing`. Inspect its **Assignees** against the source owner recorded in Section 1. Capture `AR-028-03.png` before the decision. In the resolved reviewer's session, open the matching approval and deny it. If self-approval prevention resolved a different reviewer, use that person's session; do not assume the source owner still holds the task. For a group owner, inspect the individual assignees and have one eligible member deny.
Before each new variant, confirm the previous request concluded and Olivia still lacks VPN.

5. Record all three IDs and decisions separately. If two categories resolved to the same person, write that down; the configured categories can differ even when the reviewer is the same. If Olivia herself is the source owner, inspect the actual replacement reviewer: self-approval prevention can change the assignee. Record that exception without changing the source owner.

**Check:** Each category has its own fresh request and resolved-reviewer evidence. Save `AR-028-02.png` for the item-owner assignment and `AR-028-03.png` for the source-owner assignment.

### 4. Restore VPN and verify the target

1. Restore VPN's grant reviewer to **Primary Owner** and confirm Priya is still the entitlement's owner. Verify the saved removal review and other settings match Section 1. Select **Save** and reopen the page.
2. Reopen the three request IDs in Approval Management. All should be Denied; none should still need a decision.
3. Repeat Olivia's native VPN and baseline checks. VPN must remain False and baseline True. Check Lucas (`acme.e012`) still has VPN.

**Check:** The source owner never changed, the VPN policy is restored, and the tests granted no access. Save `AR-028-04.png` showing the restored grant/removal reviewer settings.

## Check the result

Your journal should show Manager → Daniel, Primary Owner → Priya, and Source Owner → the recorded AD owner or its eligible group members. Each request must be Denied with Olivia's VPN membership still False.

If a reviewer differs, first compare the request's creation time with the policy save time, then inspect the selected source, owner and Olivia's Manager. Editing a policy does not turn an older request into a fresh routing test.

[Individual entitlement reviewers](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html) · [Inspecting approval assignments](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html)

## Finish

Keep VPN requestable with Priya as its primary-owner grant/removal reviewer. Keep Olivia without VPN, Lucas with VPN, and all baseline access. If interrupted, locate the recorded request and finish its denial before submitting the next variant. Restore the grant reviewer before leaving this lab.

### Screenshots to capture

Capture these as you reach the matching step. If a result needs two screens, add `a` and `b` to that filename.

| Filename | What to show |
|---|---|
| AR-028-01.png | Manager request: ID and Daniel assigned |
| AR-028-02.png | Primary-owner request: ID and Priya assigned |
| AR-028-03.png | Source-owner request: ID and actual assignee |
| AR-028-04.png | Restored VPN grant/removal settings |

[Previous: AR-027](../AR-027/README.md) · [Course outline](../../README.md) · [Next: AR-029](../AR-029/README.md)
