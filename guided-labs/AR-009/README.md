<a id="ar-009--verify-the-environment-and-save-c01"></a>

# AR-009: Verify the Environment

<a id="goal"></a>

In this lab, you'll verify the Module 1 environment using current ISC and AD records, and leave the foundation ready for AR-010.

<a id="2-record-c01"></a>

## Before you start

Use the [Module 1 configuration record](../../M01-STATE.md) for actual environment values and the required retained state.

<a id="session-for-this-lab"></a>

Use the ISC administrator and AD workstation for configuration checks. In Section 7, switch to each named browser profile and verify its signed-in username.

<a id="prerequisites"></a>

Complete [AR-008](../AR-008/README.md).

Keep the Module 1 configuration and current account results and your administrator, Lucas, Daniel, and Priya sessions available.

**Repeating C01 after later labs:** The counts and empty AdminAccounts expectation below describe the first Module 1 pass. Verify the original 24 standard accounts and baseline assignments, but retain later identities, Sofia's admin account and legitimate business access. Record those additions separately; do not delete them or revoke access to recreate an earlier screenshot. Use the original activity for historical provisioning evidence.

## Follow the steps

### 1. Verify Acme HR and identities

1. Open **Admin > Connections > Sources > Acme HR > Account Management > Accounts**.
2. Confirm there are **24 HR accounts**.
3. Open **Admin > Identity Management > Identities**.
4. Confirm Acme Employees contains **24 identities**.
5. Open Lucas (`acme.e012`) and confirm:

- Employee Number = E012
- Department = Finance
- Cost Center = FIN200
- Manager = Daniel Brooks

**Check:** The authoritative population contains 24 HR accounts and 24 Acme identities.

<!-- AUTHOR_SCREENSHOT_START: AR-009-01 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-009-01-population.png`
>
> **Show:** The authoritative population contains 24 HR accounts and 24 Acme identities.

<!-- AUTHOR_SCREENSHOT_END: AR-009-01 -->

<a id="if-you-stopped-midway-or-want-to-repeat-this-lab"></a>

### 2. Verify manager relationships

1. Open Lucas and confirm Manager = Daniel Brooks.
2. Open Daniel (`acme.e003`) and confirm Manager = Morgan Reed.
3. Open Morgan (`acme.e001`) and confirm no Manager is assigned.
4. Reopen the remaining identities and check their current Manager against the AR-002 table. Update the result checks if an earlier screenshot no longer matches.

**Check:** Morgan is the hierarchy root and the original roster has 23 manager relationships.

### 3. Verify the 24 standard AD accounts

1. Open the AD source in ISC.
2. Open **Account Management > Accounts**.
3. Confirm every username `acme.e001` through `acme.e024` has a standard AD account.
4. Check the matching request, operation and target results directly.

- Correct `employeeID`
- Correct DN / Users OU placement
- Correct ISC identity link
- Provisioning evidence: Lucas’s membership update; ISC account creation for the other 23 employees

5. In Active Directory, confirm the standard accounts are present in **AcmeLab > Users**.
6. Confirm **AcmeLab > AdminAccounts** is still empty.

**Check:** All 24 standard AD accounts are present and linked correctly.

Open **Entitlement Management > Entitlements** on the AD source. Check the 14 business group names from AR-003 and GG-ACME-BASELINE from AR-005. Count these 15 course groups separately from unrelated source entitlements.

<a id="1-verify-the-baseline"></a>

### 4. Verify the baseline access model

1. Open **Admin > Access Model > Access Profiles**.
2. Open `AP-Acme-AD-Baseline`.
3. Confirm it contains only `GG-ACME-BASELINE`.
4. Open **Admin > Access Model > Roles**.
5. Open `ROLE-Acme-AD-Baseline`.
6. Confirm the role is enabled.
7. Confirm its Identity List contains exactly the 24 Acme identities.

**Check:** The baseline access profile and role remain enabled and correctly configured.

### 5. Verify the native baseline membership

1. Open **Active Directory Users and Computers**.
2. Open **AcmeLab > Groups > GG-ACME-BASELINE**.
3. Open **Members**.
4. Confirm all 24 standard Acme accounts are direct members.
5. Confirm the role did not add the population to business groups such as `GG-VPN-USERS` or `GG-FIN-REPORTING`.

**Check:** The native target state matches the baseline role assignment.

<!-- AUTHOR_SCREENSHOT_START: AR-009-02 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-009-02-baseline-members.png`
>
> **Show:** The native target state matches the baseline role assignment.

<!-- AUTHOR_SCREENSHOT_END: AR-009-02 -->

### 6. Verify the key provisioning examples

Open **Search > Account Activity** and use the exact AD source name from the matching object details. For Lucas, run `recipient.name:acme.e012 AND sources:"YOUR-AD-SOURCE-NAME"`. For Liam, run `recipient.name:acme.e008 AND sources:"YOUR-AD-SOURCE-NAME" AND @accountRequests(op:create)`. Use the AR-006 timestamps to select the correct historical rows, then open each activity and inspect its AD source operation. See [Find the Account Activity](../../LAB-DESK.md#find-the-account-activity).

Use those activities and your saved evidence to confirm:

#### Lucas
- Existing AD account was reused.
- Baseline group membership was added.
- No duplicate account was created.

#### Liam
- Missing AD account was created by ISC.
- Account attributes match the Create Account configuration.
- Baseline group membership was added.
- The account is linked to `acme.e008`.

**Check:** The foundation proves both an existing-account update and a missing-account creation.

### 7. Verify the user sessions

#### Lucas
1. Open the **Acme Lucas** browser profile.
2. Confirm the signed-in identity is `acme.e012`.
3. Open **Request Center**.

#### Daniel
1. Open the **Acme Daniel** browser profile.
2. Confirm the signed-in identity is `acme.e003`.
3. Open **Approvals**.

#### Priya
1. Open the **Acme Priya** browser profile.
2. Confirm the signed-in identity is `acme.e002`.
3. Open **Approvals**.

#### Administrator
1. Open the **Acme Admin** browser profile.
2. Confirm administrative pages remain available.

**Check:** The requester, reviewers, and administrator are signed in through separate sessions.

<!-- AUTHOR_SCREENSHOT_START: AR-009-03 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-009-03-user-sessions.png`
>
> **Show:** The requester, reviewers, and administrator are signed in through separate sessions.

<!-- AUTHOR_SCREENSHOT_END: AR-009-03 -->

<a id="explain-the-chain-before-the-first-business-request"></a>

### 8. Confirm no business request has been tested yet

At this checkpoint:

- The AD foundation is working.
- Account creation is working.
- Account correlation is working.
- Baseline role provisioning is working.
- User sessions are ready.

No user-submitted business access request, approval, denial, or revocation has been completed yet.

**Check:** The first Access Request configuration will start after this foundation checkpoint.

<a id="9-save-the-c01-foundation-checkpoint"></a>

### 9. Keep the verified foundation ready

Keep the complete working HR CSV, the Acme sources and identity profile, the saved account mappings, the baseline role and its accounts. Keep the actual source IDs and directory values available for the next lab; do not create a separate evidence pack.

**Check:** The configuration and target checks above pass, the ordinary-user sessions work, and no unexplained operation remains. Later labs call this prepared state **C01**.

## Check the result

### Expected foundation

| Area | Expected result |
|---|---|
| Acme HR accounts | 24 |
| Acme Employees identities | 24 |
| Manager relationships | 23 relationships; Morgan is the root |
| Standard AD accounts | 24 |
| Course groups | 15 including GG-ACME-BASELINE |
| Baseline role assignments | 24 identities |
| Baseline native membership | 24 standard accounts |
| Requester session | Lucas opens Request Center |
| Reviewer sessions | Daniel and Priya open Approvals |
| Business access requests submitted | 0 |

---

<a id="final-checks"></a>

### Final verification

- [ ] Acme HR contains 24 accounts.
- [ ] Acme Employees contains 24 identities.
- [ ] Manager hierarchy is correct.
- [ ] All 24 standard AD accounts exist.
- [ ] All 24 AD accounts are linked correctly.
- [ ] 15 course groups are present, including GG-ACME-BASELINE.
- [ ] AP-Acme-AD-Baseline contains only GG-ACME-BASELINE.
- [ ] ROLE-Acme-AD-Baseline contains exactly 24 Acme identities.
- [ ] GG-ACME-BASELINE contains all 24 standard accounts.
- [ ] Lucas existing-account update is verified.
- [ ] Liam account creation is verified.
- [ ] Lucas, Daniel, Priya, and administrator sessions are ready.
- [ ] No unresolved provisioning failure remains.
- [ ] The verified configuration is retained for AR-010.

## Finish

<a id="what-you-should-leave-in-place"></a>

### Leave this in place

Keep the HR source, identity profile, manager relationships, AD source configuration, 24 standard accounts, baseline access profile, baseline role, baseline memberships, and separate user sessions in place.

**Module 1 is complete when the C01 checks pass.**

Next: [AR-010 · Make VPN access requestable](../AR-010/README.md).

[Previous: AR-008](../AR-008/README.md) · [Lab index](../README.md)
