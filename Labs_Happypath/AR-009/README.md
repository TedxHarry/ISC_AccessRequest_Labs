# AR-009 — Verify the Environment and Save C01

**Level:** Beginner

## Goal

Verify the complete Module 1 foundation and save a clean evidence checkpoint before starting Access Request configuration.

Use the [Module 1 configuration record](../../M01-STATE.md) for actual environment values and the required retained state.

## Session for this lab

Use the ISC administrator and AD workstation for configuration checks. In Section 7, switch to each named browser profile and verify its signed-in username.

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

**Screenshot:** Save `AR-009-01-population.png`. Capture the records that prove this check.

## 2. Verify manager relationships

1. Open Lucas and confirm Manager = Daniel Brooks.
2. Open Daniel (`acme.e003`) and confirm Manager = Morgan Reed.
3. Open Morgan (`acme.e001`) and confirm no Manager is assigned.
4. Reopen the remaining identities and check their current Manager against the AR-002 table. Update the journal if an earlier screenshot no longer matches.

**Check:** Morgan is the hierarchy root and the original roster has 23 manager relationships.

## 3. Verify the 24 standard AD accounts

1. Open the AD source in ISC.
2. Open **Account Management > Accounts**.
3. Confirm every username `acme.e001` through `acme.e024` has a standard AD account.
4. Use the AR-007 journal to verify each account has:

- Correct `employeeID`
- Correct DN / Users OU placement
- Correct ISC identity link
- Provisioning evidence: Lucas’s membership update; ISC account creation for the other 23 employees

5. In Active Directory, confirm the standard accounts are present in **AcmeLab > Users**.
6. Confirm **AcmeLab > AdminAccounts** is still empty.

**Check:** All 24 standard AD accounts are present and linked correctly.

Open **Entitlement Management > Entitlements** on the AD source. Check the 14 business group names from AR-003 and GG-ACME-BASELINE from AR-005. Count these 15 course groups separately from unrelated source entitlements.

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

**Screenshot:** Save `AR-009-02-baseline-members.png`. Capture the records that prove this check.

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

**Screenshot:** Save `AR-009-03-user-sessions.png`. Capture the records that prove this check.

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

**Check:** The private C01 folder contains the complete working file, journals, configuration values and current target evidence. This folder is an evidence checkpoint, not a tenant backup.

## Try it yourself

Without following the earlier sample screenshots, inspect James (`acme.e014`) from HR through identity, manager Elena (`acme.e004`), linked AD account, role assignment and native baseline membership. Record current evidence for every link. Keep all configuration intact.

Write these answers in your [journal](EVIDENCE.md):

1. Which parts of the foundation can you prove with current target evidence?
2. Which request, approval and revocation behavior remains to be tested?

<details>
<summary>Check your assessment result</summary>

James is E014 and reports to Elena E004. His HR and identity employee values agree, his AD employeeID is E014, and his standard account is linked to his identity and directly belongs to GG-ACME-BASELINE. The baseline role includes him. Record actual IDs and DNs from your tenant. These checks prove the foundation; they do not prove a business request, approval or revocation.

</details>

## If a check does not match

If a check fails, record the affected identity or object and return to the lab that configured it. Keep the working foundation. Do not mark C01 passed while any required check is unresolved.

## Final verification

- [ ] The independent check and both explanations are recorded.
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

## Screenshots to capture

Capture results after the checks above. Hide passwords, tokens, invitation links and private mailbox details. Use additional images when all required fields do not fit.

| Filename | Evidence |
|---|---|
| `AR-009-01-population.png` | The authoritative population contains 24 HR accounts and 24 Acme identities. |
| `AR-009-02-baseline-members.png` | The native target state matches the baseline role assignment. |
| `AR-009-03-user-sessions.png` | The requester, reviewers, and administrator are signed in through separate sessions. |

**Module 1 is complete when the C01 checks pass.**

Next: [AR-010 · Make VPN access requestable](../AR-010/README.md).

[Previous: AR-008](../AR-008/README.md) · [Lab index](../README.md)
