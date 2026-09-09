# AR-006 — Provision Your First AD Account

**Level:** Beginner

## Goal

Use one access profile and one role to prove both AD provisioning paths:

1. Add group membership to Lucas's existing AD account.
2. Create Liam's missing AD account and add the same group membership.

Use the [Module 1 configuration record](../../M01-STATE.md) for actual environment values and the required retained state.

## Session for this lab

Use your ISC administrator session for ISC steps and your AD administration workstation for directory steps.

## Prerequisites

Complete [AR-005](../AR-005/README.md).

You should already have:

- Lucas's existing AD account correctly linked.
- Liam with no AD account.
- `GG-ACME-BASELINE` aggregated into ISC.
- The AD Create Account configuration saved.

Keep your [evidence journal](EVIDENCE.md) open.

## What you will finish with

| Identity | Expected AD result |
|---|---|
| Lucas Brown — acme.e012 | Existing account retained; baseline group added |
| Liam Patel — acme.e008 | New AD account created; baseline group added |

---

## 1. Create the baseline access profile

1. Open **Admin > Access Model > Access Profiles**.
2. Select **Create New**.
3. Configure:

| Setting | Value |
|---|---|
| Name | AP-Acme-AD-Baseline |
| Owner | Your ISC administrator |
| Source | Your AD source |

4. Under **Manage Entitlements**, add only `GG-ACME-BASELINE`.
5. Save the access profile.
6. Enable it.
7. Leave access requests disabled.

Reference: [Access profiles](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)

**Check:** `AP-Acme-AD-Baseline` contains exactly one entitlement: `GG-ACME-BASELINE`.

**Screenshot:** Save `AR-006-01-baseline-profile.png`. Capture the access profile and entitlement.

## Record Lucas before assigning access

In **Active Directory Users and Computers**, enable **View > Advanced Features**, open Lucas’s **Properties > Attribute Editor** and record `distinguishedName` and `objectGUID` in the journal. Open **GG-ACME-BASELINE > Properties > Members** and confirm Lucas is absent. Compare these before-values after provisioning.

**Check:** You recorded Lucas’s original identifiers and the group has no Lucas membership.

**Screenshot:** Save `AR-006-02-lucas-before.png`. Capture Lucas’s DN, objectGUID and absence from baseline membership.

## 2. Create the baseline role for Lucas

1. Open **Admin > Access Model > Roles**.
2. Select **Create New**.
3. Configure:

| Setting | Value |
|---|---|
| Name | ROLE-Acme-AD-Baseline |
| Owner | Your ISC administrator |

4. Add `AP-Acme-AD-Baseline` to the role.
5. Leave access requests disabled.
6. Open **Define Assignment**.
7. Select **Identity List**.
8. Add only Lucas Brown (`acme.e012`).
9. Save the role.
10. Enable the role.
11. Select **Apply Changes**.

Reference: [Role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html)

**Check:** The role assignment contains only Lucas.

**Screenshot:** Save `AR-006-03-lucas-role.png`. Capture the role with Lucas in the identity list.

## 3. Verify Lucas's existing account was updated

1. In **Admin > Dashboard > Monitor**, check identity processing. Then open the account activity below and wait for its operation to finish. Do not add Liam while Lucas’s update is pending or failed.
2. Open **Search > Account Activity**.
3. Find the activity for Lucas and the AD source.
4. Record the activity ID, operation time, final status and membership operation. If it fails, read the operation error before continuing; verify the group DN and write permissions identified by that error.
5. In Active Directory, open Lucas's existing account and record its current DN and objectGUID.
6. Open `GG-ACME-BASELINE > Members`.
7. Confirm Lucas is now a direct member.
8. Confirm Lucas's DN and objectGUID are unchanged.
9. Confirm no second `acme.e012` account was created.

Reference: [Tracking provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html)

**Check:** ISC updated Lucas's existing account by adding baseline membership.

**Screenshot:** Save `AR-006-04-lucas-update.png`. Capture Lucas's successful activity and native group membership.

## 4. Add Liam to the same role

1. Confirm `acme.e008` is still absent from AD and the ISC AD-source accounts.
2. Open `ROLE-Acme-AD-Baseline`.
3. Open **Define Assignment > Identity List**.
4. Keep Lucas selected.
5. Add Liam Patel (`acme.e008`).
6. Confirm the list contains exactly Lucas and Liam.
7. Save the role.
8. Select **Apply Changes**.
9. Open Liam’s Account Activity as described below. Wait for a final result; do not repeatedly apply the role while processing is running.

**Check:** The role now contains Lucas and Liam.

**Screenshot:** Save `AR-006-05-pilot-role.png`. Capture the two-person identity list.

## 5. Verify Liam's new AD account

1. Open **Search > Account Activity**.
2. Find Liam's provisioning activity.
3. Record the activity ID, final status, and account-create operation.
4. In Active Directory, refresh **AcmeLab > Users**.
5. Open `acme.e008`.
6. Confirm:

| Attribute | Expected result |
|---|---|
| sAMAccountName | acme.e008 |
| employeeID | E008 |
| Display Name | Acme Lab - Liam Patel |
| Department | IT |
| Title | IT Analyst |
| DN | AcmeLab/Users location |
| UPN | acme.e008@your UPN suffix |

7. Inspect enabled/disabled state and password-change flags against your AR-005 expectations.
8. Open **GG-ACME-BASELINE > Properties > Members** and confirm Liam is a direct member.

**Check:** Liam's AD account exists with the expected attributes and baseline membership.

**Screenshot:** Save `AR-006-06-liam-created.png`. Capture Liam's provisioning activity, AD account, and group membership.

## 6. Aggregate and verify Liam's account link

1. Run one AD account aggregation from **Account Management > Account Aggregation**.
2. Wait for completion.
3. Open **Admin > Identity Management > Identities**.
4. Search for `acme.e008` and open Liam.
5. Open **Accounts**.
6. Confirm the new AD account is linked to Liam.
7. Confirm the imported account contains `employeeID = E008`.
8. Confirm baseline membership is visible after aggregation.

**Check:** Liam's AD account is linked to the correct ISC identity.

**Screenshot:** Save `AR-006-07-liam-linked.png`. Capture Liam's identity with the linked AD account.

## 7. Compare the two provisioning results

Record the difference:

| Identity | Starting state | Provisioning result |
|---|---|---|
| Lucas | Existing correlated AD account | Add baseline group membership |
| Liam | No AD account | Create account, then add baseline group membership |

Both users received the same access profile. Their account state determined the operation required on the target.

**Check:** Your journal identifies the update operation for Lucas and create operation for Liam, with native AD evidence for each.

## Try it yourself

Reopen both provisioning activities and locate the exact operation that added baseline membership. Compare Lucas’s before/after objectGUID. Retain both accounts and assignments; do not remove access to repeat creation.

Write these answers in your [journal](EVIDENCE.md):

1. Why did Lucas receive a membership update while Liam needed account creation?
2. Which evidence proves the write reached AD?

## If a check does not match

If an activity is pending, inspect that activity before applying again. If it fails, read the account-create and membership results separately and inspect AD; a failed membership operation may still leave a created account. Resolve the reported cause before adding another person.

## Final verification

- [ ] The independent check and both explanations are recorded.
- [ ] `AP-Acme-AD-Baseline` exists and contains only GG-ACME-BASELINE.
- [ ] `ROLE-Acme-AD-Baseline` exists and is enabled.
- [ ] Lucas and Liam are both assigned to the role.
- [ ] Lucas's original AD account was retained.
- [ ] Lucas is a direct member of GG-ACME-BASELINE.
- [ ] Liam's AD account was created by ISC.
- [ ] Liam's AD attributes match the Create Account configuration.
- [ ] Liam is a direct member of GG-ACME-BASELINE.
- [ ] Liam's account is linked to `acme.e008` after aggregation.
- [ ] No unresolved provisioning activity remains.

## Leave this in place

Keep the access profile, role, Lucas assignment, Liam assignment, both AD accounts, and both baseline memberships in place.

## Screenshots to capture

Capture results after the checks above. Hide passwords, tokens, invitation links and private mailbox details. Use additional images when all required fields do not fit.

| Filename | Evidence |
|---|---|
| `AR-006-01-baseline-profile.png` | Capture the access profile and entitlement. |
| `AR-006-02-lucas-before.png` | Capture Lucas’s DN, objectGUID and absence from baseline membership. |
| `AR-006-03-lucas-role.png` | Capture the role with Lucas in the identity list. |
| `AR-006-04-lucas-update.png` | Capture Lucas's successful activity and native group membership. |
| `AR-006-05-pilot-role.png` | Capture the two-person identity list. |
| `AR-006-06-liam-created.png` | Capture Liam's provisioning activity, AD account, and group membership. |
| `AR-006-07-liam-linked.png` | Capture Liam's identity with the linked AD account. |

Next: **[AR-007 — Provision the Remaining Standard Accounts](../AR-007/README.md)**

[Previous: AR-005](../AR-005/README.md) · [Lab index](../README.md)
