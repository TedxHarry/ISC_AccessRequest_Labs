# AR-007 — Provision the Remaining Standard Accounts

**Level:** Beginner

## Goal

Expand the working baseline role from Lucas and Liam to all 24 Acme identities, provision the remaining AD accounts, and verify every account and baseline membership.

## Prerequisites

Complete [AR-006](../AR-006/README.md).

You should already have:

- Lucas with his existing AD account and baseline membership.
- Liam with an ISC-created AD account and baseline membership.
- `AP-Acme-AD-Baseline` enabled.
- `ROLE-Acme-AD-Baseline` enabled.
- The role currently assigned to Lucas and Liam.
- No unresolved provisioning failures.

Keep the [account verification journal](EVIDENCE.md) open.

## What you will finish with

- 24 Acme identities assigned to `ROLE-Acme-AD-Baseline`.
- 24 standard Acme AD accounts under the intended account population.
- All 24 standard accounts directly in `GG-ACME-BASELINE`.
- Each AD account linked to the correct ISC identity.

---

## 1. Verify the 24-person roster

1. Open the [Acme HR baseline CSV](../../datasets/acme-hr-baseline.csv).
2. Confirm the roster contains `acme.e001` through `acme.e024`.
3. In ISC, open **Admin > Identity Management > Identities**.
4. Confirm the Acme Employees population contains 24 identities.
5. Verify each identity has:

- Username
- Identification Number
- First Name
- Last Name
- Display Name

6. Confirm Lucas and Liam already have correctly linked AD accounts.
7. Confirm the saved Create Account configuration still points to **AcmeLab/Users**.
8. Confirm `AP-Acme-AD-Baseline` still contains only `GG-ACME-BASELINE`.

**Check:** The 24-person identity roster is ready and the baseline provisioning configuration is unchanged.

## 2. Add Priya and Daniel first

1. Open **Admin > Access Model > Roles > ROLE-Acme-AD-Baseline**.
2. Open **Define Assignment > Identity List**.
3. Keep Lucas (`acme.e012`) and Liam (`acme.e008`).
4. Add:

- Priya Shah — `acme.e002`
- Daniel Brooks — `acme.e003`

5. Confirm the list contains exactly four identities.
6. Save.
7. Select **Apply Changes**.
8. Wait for identity processing and provisioning to complete.
9. Open **Search > Account Activity** and confirm Priya and Daniel finish successfully.
10. In AD, confirm both accounts exist under the intended Users OU and are direct members of `GG-ACME-BASELINE`.

**Check:** Lucas, Liam, Priya, and Daniel all have standard AD accounts and baseline membership.

**Screenshot:** Capture the four-person assignment and successful provisioning results.

## 3. Add the remaining 20 identities

1. Return to `ROLE-Acme-AD-Baseline > Define Assignment > Identity List`.
2. Keep the existing four members.
3. Add the remaining Acme identities from the roster.
4. Verify every selected username before saving.
5. Confirm the final Identity List contains exactly **24 Acme identities**.
6. Save.
7. Select **Apply Changes**.
8. Wait for provisioning to finish.
9. Open **Search > Account Activity** and verify the batch completed without unresolved failures.

Reference: [Role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html)

**Check:** The role contains exactly the 24 Acme identities.

**Screenshot:** Capture the complete role assignment. Use multiple images if needed.

## 4. Run one AD account aggregation

1. Open the AD source.
2. Open **Account Management > Account Aggregation**.
3. Start one account aggregation after the provisioning batch is complete.
4. Wait for it to finish.
5. Confirm the aggregation status is successful.

Do not start a separate aggregation for each employee.

**Check:** The latest account aggregation completes successfully.

## 5. Verify all 24 AD accounts

Complete every row in [EVIDENCE.md](EVIDENCE.md).

For each employee:

1. Find the AD account by `sAMAccountName`.
2. Confirm `employeeID` matches the employee's Identification Number.
3. Confirm the account DN is in the intended Users OU.
4. Confirm the UPN uses the expected suffix.
5. Confirm the account is enabled as expected for your lab configuration.
6. Confirm direct membership in `GG-ACME-BASELINE`.
7. Open the ISC identity > **Accounts**.
8. Confirm the AD account is linked to the correct identity.

Use the journal rather than relying only on total counts.

**Check:** All 24 rows have the correct account, employeeID, baseline membership, and ISC link.

## 6. Verify the baseline group

1. In Active Directory, open `GG-ACME-BASELINE`.
2. Open **Members**.
3. Confirm all 24 standard Acme accounts are direct members.
4. Compare the usernames with the HR roster.
5. Confirm no unrelated account was added by this role.

**Check:** `GG-ACME-BASELINE` contains the 24 intended Acme accounts.

**Screenshot:** Capture the baseline group membership. Use multiple images if needed.

## 7. Confirm business groups were not changed

The baseline role should grant only `GG-ACME-BASELINE`.

Check representative business groups such as:

- `GG-VPN-USERS`
- `GG-FIN-AP`
- `GG-FIN-REPORTING`
- `GG-HR-PAYROLL`
- `GG-PROD-SUPPORT`

Confirm this lab did not add the 24 users to those groups.

**Check:** The baseline role created standard accounts and baseline membership only.

## Final verification

- [ ] Acme Employees contains 24 identities.
- [ ] ROLE-Acme-AD-Baseline contains exactly 24 identities.
- [ ] All provisioning activity is complete.
- [ ] The AD source has 24 standard Acme accounts for the roster.
- [ ] Every account has the correct `employeeID`.
- [ ] Every account is linked to the correct ISC identity.
- [ ] All 24 accounts are direct members of GG-ACME-BASELINE.
- [ ] No duplicate standard account exists for an Acme username.
- [ ] No unresolved provisioning failure remains.
- [ ] Business groups were not unintentionally granted.

## Leave this in place

Keep all 24 role assignments, AD accounts, account links, and baseline memberships in place.

Next: **[AR-008 — Prepare Requester and Reviewer Sessions](../AR-008/README.md)**

[Previous: AR-006](../AR-006/README.md) · [Lab index](../README.md)
