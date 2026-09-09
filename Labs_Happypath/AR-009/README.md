# AR-009 — Verify the Environment and Save C01

**Level:** Beginner

## Goal

Verify the complete Module 1 foundation and save a clean evidence checkpoint before starting Access Request configuration.

## Prerequisites

Complete [AR-008](../AR-008/README.md).

Keep the AR-001 through AR-008 journals and your administrator, Lucas, Daniel, and Priya sessions available.

## Expected foundation

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

## 1. Verify Acme HR and identities

1. Open **Admin > Connections > Sources > Acme HR > Account Management > Accounts**.
2. Confirm there are **24 HR accounts**.
3. Open **Admin > Identity Management > Identities**.
4. Confirm Acme Employees contains **24 identities**.
5. Open Lucas (`acme.e012`) and confirm:

- Identification Number = E012
- Department = Finance
- Cost Center = FIN200
- Manager = Daniel Brooks

**Check:** The authoritative population contains 24 HR accounts and 24 Acme identities.

## 2. Verify manager relationships

1. Open Lucas and confirm Manager = Daniel Brooks.
2. Open Daniel (`acme.e003`) and confirm Manager = Morgan Reed.
3. Open Morgan (`acme.e001`) and confirm no Manager is assigned.
4. Use the AR-002 evidence table to confirm the remaining manager relationships are recorded.

**Check:** Morgan is the hierarchy root and the original roster has 23 manager relationships.

## 3. Verify the 24 standard AD accounts

1. Open the AD source in ISC.
2. Open **Account Management > Accounts**.
3. Confirm every username `acme.e001` through `acme.e024` has a standard AD account.
4. Use the AR-007 journal to verify each account has:

- Correct `employeeID`
- Correct DN / Users OU placement
- Correct ISC identity link
- Successful provisioning result

5. In Active Directory, confirm the standard accounts are present in **AcmeLab > Users**.
6. Confirm **AcmeLab > AdminAccounts** is still empty.

**Check:** All 24 standard AD accounts are present and linked correctly.

## 4. Verify the baseline access model

1. Open **Admin > Access Model > Access Profiles**.
2. Open `AP-Acme-AD-Baseline`.
3. Confirm it contains only `GG-ACME-BASELINE`.
4. Open **Admin > Access Model > Roles**.
5. Open `ROLE-Acme-AD-Baseline`.
6. Confirm the role is enabled.
7. Confirm its Identity List contains exactly the 24 Acme identities.

**Check:** The baseline access profile and role remain enabled and correctly configured.

## 5. Verify the native baseline membership

1. Open **Active Directory Users and Computers**.
2. Open **AcmeLab > Groups > GG-ACME-BASELINE**.
3. Open **Members**.
4. Confirm all 24 standard Acme accounts are direct members.
5. Confirm the role did not add the population to business groups such as `GG-VPN-USERS` or `GG-FIN-REPORTING`.

**Check:** The native target state matches the baseline role assignment.

## 6. Verify the key provisioning examples

Use Account Activity and your saved evidence to confirm:

### Lucas
- Existing AD account was reused.
- Baseline group membership was added.
- No duplicate account was created.

### Liam
- Missing AD account was created by ISC.
- Account attributes match the Create Account configuration.
- Baseline group membership was added.
- The account is linked to `acme.e008`.

**Check:** The foundation proves both an existing-account update and a missing-account creation.

## 7. Verify the user sessions

### Lucas
1. Open the **Acme Lucas** browser profile.
2. Confirm the signed-in identity is `acme.e012`.
3. Open **Request Center**.

### Daniel
1. Open the **Acme Daniel** browser profile.
2. Confirm the signed-in identity is `acme.e003`.
3. Open **Approvals**.

### Priya
1. Open the **Acme Priya** browser profile.
2. Confirm the signed-in identity is `acme.e002`.
3. Open **Approvals**.

### Administrator
1. Open the **Acme Admin** browser profile.
2. Confirm administrative pages remain available.

**Check:** The requester, reviewers, and administrator are signed in through separate sessions.

## 8. Confirm no business request has been tested yet

At this checkpoint:

- The AD foundation is working.
- Account creation is working.
- Account correlation is working.
- Baseline role provisioning is working.
- User sessions are ready.

No user-submitted business access request, approval, denial, or revocation has been completed yet.

**Check:** The first Access Request configuration will start after this foundation checkpoint.

## 9. Save the C01 foundation checkpoint

Create a private folder named:

```text
C01-Acme-Foundation
```

Save:

1. The latest complete working HR CSV.
2. AR-001 through AR-009 evidence journals.
3. Source IDs and identity-profile ID.
4. Users, AdminAccounts, and Groups OU DNs.
5. GG-ACME-BASELINE DN and entitlement value.
6. Account-correlation settings.
7. Create Account mappings.
8. Baseline access-profile and role IDs, if displayed.
9. The completed 24-account verification table.
10. Current GG-ACME-BASELINE membership evidence.
11. Requester/reviewer session screenshots.

Do not save passwords, Personal Access Token secrets, invitation links, MFA codes, or connector credentials in the evidence folder.

## Final verification

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
- [ ] C01-Acme-Foundation evidence is saved privately.

## Leave this in place

Keep the HR source, identity profile, manager relationships, AD source configuration, 24 standard accounts, baseline access profile, baseline role, baseline memberships, and separate user sessions in place.

**Module 1 is complete.**

[Previous: AR-008](../AR-008/README.md) · [Lab index](../README.md)
