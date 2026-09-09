# AR-008 — Prepare Requester and Reviewer Sessions

**Level:** Beginner

## Goal

Prepare separate ISC sign-in sessions for Lucas, Daniel, Priya, and the administrator so the next access-request labs can be tested with the correct requester and reviewers.

## Prerequisites

Complete [AR-007](../AR-007/README.md).

You should already have:

- 24 Acme identities.
- 24 standard Acme AD accounts.
- Lucas's manager set to Daniel Brooks.
- Three distinct test email addresses that you control.
- Access to each test inbox.

This lab uses **User Name & Password** as the sign-in method for the Acme Employees identity profile.

Keep your [evidence journal](EVIDENCE.md) open.

## Users for this lab

| Person | ISC username | Use in later labs |
|---|---|---|
| Lucas Brown | acme.e012 | Requester |
| Daniel Brooks | acme.e003 | Manager reviewer |
| Priya Shah | acme.e002 | Access-item owner/reviewer |
| Administrator | Your admin username | Configuration |

---

## 1. Verify the three identities

1. Sign in with the administrator account.
2. Open **Admin > Identity Management > Identities**.
3. Open Lucas (`acme.e012`).
4. Confirm:
   - Identification Number = E012
   - Manager = Daniel Brooks
5. Open Daniel (`acme.e003`) and confirm Identification Number = E003.
6. Open Priya (`acme.e002`) and confirm Identification Number = E002.
7. Confirm all three identities are enabled.

**Check:** Lucas, Daniel, and Priya are enabled and Lucas's Manager is Daniel.

**Screenshot:** Capture Lucas's identity with Daniel shown as Manager.

## 2. Add working email addresses

Use three different test email addresses that you control.

1. Open the latest complete `acme-hr-working.csv` used in your tenant.
2. Update only the `email` field for:

| Employee | Employee ID | Username |
|---|---|---|
| Priya Shah | E002 | acme.e002 |
| Daniel Brooks | E003 | acme.e003 |
| Lucas Brown | E012 | acme.e012 |

3. Keep all 24 employee rows in the file.
4. Save the file as UTF-8 CSV.
5. Open **Admin > Connections > Sources > Acme HR > Account Management > Account Aggregation**.
6. Upload the complete working CSV.
7. Wait for aggregation and identity processing to finish.
8. Reopen all three identities.
9. Confirm each **Work Email** shows the intended test address.
10. Confirm Acme HR still contains 24 accounts and Acme Employees still contains 24 identities.

Reference: [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html)

**Check:** Lucas, Daniel, and Priya each have a different working email address.

**Screenshot:** Capture the completed HR aggregation and one identity with the updated Work Email. Hide the actual mailbox address if the screenshot will be shared.

## 3. Configure the sign-in method

1. Open **Admin > Identity Management > Identity Profiles > Acme Employees**.
2. Open **Settings**.
3. Set the sign-in method to **User Name & Password**.
4. Use manual invitations for registration.
5. Save the profile settings.

Reference: [Identity profile settings](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html)

**Check:** Acme Employees uses User Name & Password and supports manual invitations.

**Screenshot:** Capture the saved sign-in and invitation settings.

## 4. Invite Lucas

1. As administrator, open Lucas's identity.
2. Select **Actions > Invite Identity**.
3. Open Lucas's test inbox.
4. Open the invitation email.
5. Open the registration link in a separate browser profile named **Acme Lucas**.
6. Complete the registration prompts.
7. Set the ISC password required by the tenant.
8. Sign out.
9. Sign in again through the normal tenant sign-in page as `acme.e012`.
10. Open the user menu and confirm the signed-in username is Lucas.

The ISC password is separate from the AD password generated during account provisioning.

Reference: [Inviting users](https://documentation.sailpoint.com/saas/help/common/users/inviting_users.html)

**Check:** Lucas can sign in to ISC as `acme.e012`.

## 5. Invite Daniel and Priya

Repeat the same registration process using separate browser profiles:

- **Acme Daniel** → `acme.e003`
- **Acme Priya** → `acme.e002`

For each user:

1. Send the invitation from the identity.
2. Open the correct test inbox.
3. Complete registration in that user's browser profile.
4. Sign out and sign in again.
5. Verify the username from the user menu.

**Check:** Lucas, Daniel, and Priya can each sign in independently.

## 6. Verify ordinary user access

As administrator:

1. Open each of the three identities.
2. Open **Actions > Set User Levels**.
3. Confirm none of the three has administrator-level access added for this lab.
4. Keep the administrator's permissions unchanged.

Reference: [User levels](https://documentation.sailpoint.com/saas/help/common/users/user_levels.html)

**Check:** The three course users have ordinary user access.

## 7. Verify the four separate sessions

Keep four browser profiles:

- Acme Admin
- Acme Lucas
- Acme Daniel
- Acme Priya

Then verify:

### Lucas
1. Sign in as Lucas.
2. Open **Request Center**.
3. Confirm the page loads.

An empty catalog is acceptable at this stage.

### Daniel
1. Sign in as Daniel.
2. Open **Approvals**.
3. Confirm the page loads.

An empty approval queue is expected.

### Priya
1. Sign in as Priya.
2. Open **Approvals**.
3. Confirm the page loads.

### Administrator
1. Sign in as the administrator.
2. Open **Admin > Connections > Sources**.
3. Confirm administrative configuration pages remain available.

Reference: [User-level access matrix](https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html)

**Check:** Every browser profile shows the intended signed-in identity and the required page loads.

**Screenshots:** Capture Lucas in Request Center, Daniel in Approvals, Priya in Approvals, and the relevant user-level checks. Do not capture passwords, invitation links, MFA codes, or personal mailbox details.

## Final verification

- [ ] Lucas's manager is Daniel.
- [ ] Lucas, Daniel, and Priya have distinct working Work Email values.
- [ ] The working HR CSV still contains all 24 employees.
- [ ] Acme Employees uses User Name & Password.
- [ ] Lucas is registered and can sign in.
- [ ] Daniel is registered and can sign in.
- [ ] Priya is registered and can sign in.
- [ ] Lucas opens Request Center.
- [ ] Daniel opens Approvals.
- [ ] Priya opens Approvals.
- [ ] The three users have ordinary user permissions.
- [ ] The administrator session remains separate and usable.

## Leave this in place

Keep the three registered user accounts, their test email addresses, the separate browser profiles, and the administrator session available.

Next: **[AR-009 — Verify the Environment and Save C01](../AR-009/README.md)**

[Previous: AR-007](../AR-007/README.md) · [Lab index](../README.md)
