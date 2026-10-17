<a id="ar-007--provision-the-remaining-standard-accounts"></a>

# AR-007: Provision the Remaining Standard Accounts

<a id="goal"></a>

In this lab, you'll expand the baseline role from the two verified pilot accounts in AR-006 to all 24 Acme identities and check the remaining account creations.

<a id="if-you-stopped-midway-or-want-to-repeat-this-lab"></a>

## Before you start

Use the [Module 1 configuration record](../../../reference/M01-STATE.md) for actual environment values and the required retained state.

<a id="session-for-this-lab"></a>

Use your ISC administrator session for ISC steps and your AD administration workstation for directory steps.

<a id="prerequisites"></a>

Complete [AR-006](../AR-006/README.md).

From the previous labs, you need:

- Lucas with his existing AD account and baseline membership.
- Liam with an ISC-created AD account and baseline membership.
- `AP-Acme-AD-Baseline` enabled.
- `ROLE-Acme-AD-Baseline` enabled.
- The role currently assigned to Lucas and Liam.
- No unresolved provisioning failures.

**Returning after a completed batch:** Inspect the current role list and accounts first. Keep already selected course members; add only the missing identities. The four-person checkpoint below describes the first expansion, not a reason to reduce an existing 24-person role.

## Follow the steps

### 1. Verify the 24-person roster

1. Open the [Acme HR baseline CSV](../../../datasets/acme-hr-baseline.csv).
2. Confirm the roster contains `acme.e001` through `acme.e024`.
3. In ISC, open **Admin > Identity Management > Identities**.
4. Confirm the Acme Employees population contains 24 identities.
5. Verify each identity has:

- Username
- Employee Number
- First Name
- Last Name
- Display Name

6. Confirm Lucas and Liam already have correctly linked AD accounts.
7. Confirm the saved Create Account configuration still points to **AcmeLab/Users**.
8. Confirm `AP-Acme-AD-Baseline` still contains only `GG-ACME-BASELINE`.
9. Before selecting the remaining employees, use Active Directory Users and Computers to search each username in the domain. Record any existing account and compare its employeeID with the intended employee. If it is a legitimate course account, verify or establish its ISC link using [AR-004](../AR-004/README.md) before assigning the role. Do not delete or rename an existing account to force a new creation.

**Check:** The 24-person identity roster is ready and the baseline provisioning configuration is unchanged.

### 2. Add Priya and Daniel first

1. Open **Admin > Access Model > Roles > ROLE-Acme-AD-Baseline**.
2. Open **Define Assignment > Identity List**.
3. Keep Lucas (`acme.e012`) and Liam (`acme.e008`).
4. Add:

- Priya Shah ; `acme.e002`
- Daniel Brooks ; `acme.e003`

5. Confirm the list contains exactly four identities.

   <!-- AUTHOR_SCREENSHOT_START: AR-007-01 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-007-01-four-person-batch.png`
   >
   > **Show:** the four selected identities before saving or applying this expansion. Capture successful provisioning separately after Step 10 passes.

   <!-- AUTHOR_SCREENSHOT_END: AR-007-01 -->

6. Save.
7. Select **Apply Changes**.
8. Open **Admin > Dashboard > Monitor** and follow Active Jobs for the role-change processing. Then inspect the individual account operations below. A finished processing job alone does not prove both AD writes succeeded.
9. Open **Search > Account Activity**. Search Priya and Daniel separately with `recipient.name:acme.e002 AND sources:"YOUR-AD-SOURCE-NAME"` and `recipient.name:acme.e003 AND sources:"YOUR-AD-SOURCE-NAME"`. Replace the source placeholder with the exact recorded AD source name. For each person, open the newest activity from this batch and confirm the create/membership operations reach a final successful result before expanding the role.
10. In AD, confirm both accounts exist under the intended Users OU and are direct members of `GG-ACME-BASELINE`.
11. Run one AD account aggregation using Section 4, then verify Priya and Daniel’s identity links using Section 5 before expanding to the remaining employees.

**Check:** Lucas, Liam, Priya, and Daniel all have standard AD accounts and baseline membership.

### 3. Add the remaining 20 identities

1. Return to `ROLE-Acme-AD-Baseline > Define Assignment > Identity List`.
2. Keep the existing four members.
3. Add the remaining Acme identities from the roster.
4. Verify every selected username before saving.
5. Confirm the final Identity List contains exactly **24 Acme identities**.
6. Save.
7. Select **Apply Changes**.
8. Follow processing in **Admin > Dashboard > Monitor**, then inspect the individual provisioning results below. Keep this batch incomplete if any intended account or membership operation is unresolved.
9. Open **Search > Account Activity** and start with `sources:"YOUR-AD-SOURCE-NAME"`, using the exact recorded source name. Use the time you applied the 24-person role change to review the newest batch rows. For any employee whose result is missing, pending, or failed, narrow to `recipient.name:COURSE-USERNAME AND sources:"YOUR-AD-SOURCE-NAME"` and replace `COURSE-USERNAME` with that employee's username. Open the activity and inspect the source operation rather than relying on the batch count. See [Find the Account Activity](../../../reference/LAB-DESK.md#find-the-account-activity).

Reference: [Role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html)

**Check:** The role contains exactly the 24 Acme identities.

<!-- AUTHOR_SCREENSHOT_START: AR-007-02 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-007-02-complete-role.png`
>
> **Show:** the complete role assignment. Use multiple images if needed.

<!-- AUTHOR_SCREENSHOT_END: AR-007-02 -->

### 4. Run one AD account aggregation

1. Open the AD source.
2. Open **Account Management > Account Aggregation**.
3. Start one account aggregation after the provisioning batch is complete. Use this procedure once after the four-person batch and once after the remaining 20.
4. Open the source's **Aggregation History** and identify the run you started by its time. Do not start another while it is running.
5. Inspect that run's final result, warnings and errors. Confirm the imported accounts reflect the completed batch before continuing. Use [Processing and Recovery](../../../reference/PROCESSING-AND-RECOVERY.md) for an unresolved job.

Do not start a separate aggregation for each employee.

**Check:** The latest account aggregation completes successfully.

<a id="3-verify-every-account"></a>

### 5. Verify all 24 AD accounts

Compare the current AD and ISC records directly with the HR roster. No separate worksheet is required.

For each employee:

1. Find the AD account by `sAMAccountName`.
2. Confirm `employeeID` matches the employee's Employee Number.
3. Confirm the account DN is in the intended Users OU.
4. Confirm the UPN uses the expected suffix.
5. Compare enabled/disabled state and password-change flags with the expectation recorded in AR-005. Resolve an unexpected state before relying on directory sign-in.
6. Confirm direct membership in `GG-ACME-BASELINE`.
7. Open the ISC identity > **Accounts**.
8. Confirm the AD account is linked to the correct identity.

These baseline changes come from role assignment, not a user-submitted business access request. Match the role-change time to the account activity and verify the actual AD account and group membership.

**Check:** All 24 employees have the correct account, employeeID, baseline membership and ISC link.

### 6. Verify the baseline group

1. In Active Directory, open `GG-ACME-BASELINE`.
2. Open **Members**.
3. Confirm all 24 standard Acme accounts are direct members.
4. Compare the usernames with the HR roster.
5. Confirm no unrelated account was added by this role.

**Check:** `GG-ACME-BASELINE` contains the 24 intended Acme accounts.

<!-- AUTHOR_SCREENSHOT_START: AR-007-03 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-007-03-baseline-members.png`
>
> **Show:** the baseline group membership. Use multiple images if needed.

<!-- AUTHOR_SCREENSHOT_END: AR-007-03 -->

### 7. Confirm business groups were not changed

The baseline role should grant only `GG-ACME-BASELINE`.

Check representative business groups such as:

- `GG-VPN-USERS`
- `GG-FIN-AP`
- `GG-FIN-REPORTING`
- `GG-HR-PAYROLL`
- `GG-PROD-SUPPORT`

Confirm this lab did not add the 24 users to those groups.

**Check:** The baseline role created standard accounts and baseline membership only.

<a id="1-check-the-population-before-expanding"></a>

## Check the result

### What you will finish with

- 24 Acme identities assigned to `ROLE-Acme-AD-Baseline`.
- 24 standard Acme AD accounts under the intended account population.
- All 24 standard accounts directly in `GG-ACME-BASELINE`.
- Each AD account linked to the correct ISC identity.

---

<a id="final-checks"></a>

### Final verification

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

## Finish

<a id="2-expand-in-two-stages"></a>

<a id="troubleshooting-practice"></a>

<a id="what-you-should-leave-in-place"></a>

### Leave this in place

Keep all 24 role assignments, AD accounts, account links, and baseline memberships in place.

Next: **[AR-008: Prepare Requester and Reviewer Sessions](../AR-008/README.md)**

[Previous: AR-006](../AR-006/README.md) · [Lab index](../../README.md)
