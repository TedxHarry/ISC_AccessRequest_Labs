<a id="ar-008--prepare-requester-and-reviewer-sessions"></a>

# AR-008: Prepare Requester and Reviewer Sessions

<a id="goal"></a>

In this lab, you'll prepare separate ISC sessions for Lucas, Daniel and Priya, then verify who is signed in to each session.

<a id="if-you-stopped-midway-or-want-to-repeat-this-lab"></a>

## Before you start

Use the [Module 1 configuration record](../../../reference/M01-STATE.md) for actual environment values and the required retained state.

<a id="session-for-this-lab"></a>

Start in your ISC administrator session. Switch to the named user’s separate browser profile only when the step tells you to sign in as that person.

<a id="prerequisites"></a>

Complete [AR-007](../AR-007/README.md).

From the previous labs, you need:

- 24 Acme identities.
- 24 standard Acme AD accounts.
- Lucas's manager set to Daniel Brooks.
- Three distinct test email addresses that you control.
- Access to each test inbox.

Use the sign-in method configured for Acme Employees. The registration steps below apply to **User Name & Password**; retain working SSO or Directory Connection settings when your tenant uses those.

<a id="users-for-this-lab"></a>

| Person | ISC username | Use in later labs |
|---|---|---|
| Lucas Brown | acme.e012 | Requester |
| Daniel Brooks | acme.e003 | Manager reviewer |
| Priya Shah | acme.e002 | Access-item owner/reviewer |
| Administrator | Your admin username | Configuration |

---

<a id="completion-checklist"></a>

<a id="prepare-additional-actors-when-their-first-lab-begins"></a>

## Follow the steps

<a id="1-check-the-three-identities"></a>

<a id="4-register-users-who-use-isc-credentials"></a>

### 1. Verify the three identities

1. Sign in with the administrator account.
2. Open **Admin > Identity Management > Identities**.
3. Open Lucas (`acme.e012`).
4. Confirm:
   - Employee Number = E012
   - Manager = Daniel Brooks
5. Open Daniel (`acme.e003`) and confirm Employee Number = E003.
6. Open Priya (`acme.e002`) and confirm Employee Number = E002.
7. Inspect each identity's sign-in status. **Not Invited** is expected for a new ISC-password user; it is not the same as **Disabled**. If a dedicated lab identity is Disabled, select **Actions > Enable Identity** and recheck it. Re-enabling returns it to Not Invited, so complete the applicable registration steps below. Resolve Error, Incomplete or Locked states before the sign-in test.

**Check:** None of the three ISC identities is disabled, and Lucas's Manager is Daniel. This checks ISC sign-in status; the AD account's Enabled flag is a separate setting. [Identity statuses](https://documentation.sailpoint.com/saas/help/identities/identity_mgmt.html#viewing-identity-statuses)

<!-- AUTHOR_SCREENSHOT_START: AR-008-01 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-008-01-lucas-manager.png`
>
> **Show:** Lucas's identity with Daniel shown as Manager.

<!-- AUTHOR_SCREENSHOT_END: AR-008-01 -->

<a id="compare-identity-email-with-the-already-created-ad-account"></a>

### 2. Add working email addresses

Use three different test email addresses that you control. Check that none is already assigned to another identity in the tenant; duplicate invitation email addresses can prevent the intended person from receiving an invitation.

1. Open the latest complete `acme-hr-working.csv` used in your tenant.
2. Update only the `email` field for:

| Employee | Employee ID | Username |
|---|---|---|
| Priya Shah | E002 | acme.e002 |
| Daniel Brooks | E003 | acme.e003 |
| Lucas Brown | E012 | acme.e012 |

3. Keep every row in the latest complete file: 24 on the first pass, including Taylor and other legitimate additions on a later repeat.
4. Save the file as UTF-8 CSV.
5. Open **Admin > Connections > Sources > Acme HR > Account Management > Account Aggregation**.
6. Upload the complete working CSV.
7. Inspect the matching run in the source's **Aggregation History**, then **Admin > Dashboard > Monitor**, Active Jobs. Continue when aggregation/processing has finished and the updated email appears on each named identity. Use [Processing and Recovery](../../../reference/PROCESSING-AND-RECOVERY.md) for an unresolved job.
8. Reopen all three identities.
9. Confirm each **Work Email** shows the intended test address.
10. Confirm the HR account and identity populations match their pre-edit counts: 24 on the first pass, or your recorded larger population on a repeat.

Reference: [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html)

**Check:** Lucas, Daniel, and Priya each have a different working email address.

<!-- AUTHOR_SCREENSHOT_START: AR-008-02 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-008-02-hr-email-import.png`
>
> **Show:** the completed HR aggregation and one identity with the updated Work Email. Hide the actual mailbox address if the screenshot will be shared.

<!-- AUTHOR_SCREENSHOT_END: AR-008-02 -->

The identity Work Email is used for invitations. AD mail can still show the placeholder used during creation; Create Account mappings do not configure ongoing attribute synchronization. Keep the latest complete working CSV privately for future imports. [Attribute synchronization](https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html)

Before registration, use your browser’s profile menu to create **Acme Lucas**, **Acme Daniel** and **Acme Priya** profiles. Keep **Acme Admin** separate. Ordinary tabs in one profile share the sign-in session.

<a id="3-confirm-how-these-users-will-sign-in"></a>

### 3. Configure the sign-in method

1. Open **Admin > Identity Management > Identity Profiles > Acme Employees**.
2. Open **Settings**.
3. Record the current sign-in method. For the ISC-credentials route, select **User Name & Password**. If working SSO or Directory Connection is already configured, retain it and use that route in Sections 6-7; skip the password invitation steps.
4. For the ISC-credentials route, use manual invitations for registration. Do not change tenant-wide SSO or MFA to follow these steps.
5. Save the profile settings.

Reference: [Identity profile settings](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html)

**Check:** The sign-in route is recorded. ISC-credential users can proceed to invitations; externally authenticated users must be able to sign in as the correct Acme identities.

<!-- AUTHOR_SCREENSHOT_START: AR-008-03 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-008-03-sign-in-settings.png`
>
> **Show:** the saved sign-in and invitation settings.

<!-- AUTHOR_SCREENSHOT_END: AR-008-03 -->

### 4. Invite Lucas

For working SSO or Directory Connection, use the established sign-in route and continue to Section 6. For ISC-password users, follow the invitation steps below. If an invitation expires, resend it from the same identity; do not reset or recreate a working account.

1. As administrator, open Lucas's identity. If he already has a working registration, keep it and skip to Step 8 for the fresh sign-in check.
2. Select **Actions > Invite Identity**.
3. Open Lucas's test inbox.
4. Open the invitation email.
5. Open the registration link in a separate browser profile named **Acme Lucas**.
6. Complete the registration prompts.
7. Set the ISC password required by the tenant.
8. Sign out.
9. Sign in again through the normal tenant sign-in page using the username supplied in Lucas's invitation. It must resolve to the `acme.e012` identity. If the invitation or sign-in page shows a different identifier, check the configured sign-in mapping before proceeding; do not rename HR usernames or AD accounts to work around a failed sign-in.
10. Open the user menu and confirm the signed-in username is Lucas.

The ISC password is separate from the AD password generated during account provisioning.

Reference: [Inviting users](https://documentation.sailpoint.com/saas/help/common/users/inviting_users.html)

**Check:** Lucas can sign in to ISC as `acme.e012`.

### 5. Invite Daniel and Priya

For ISC-password users, repeat the same registration process using separate browser profiles. Keep an existing working registration; perform a fresh sign-in instead of sending another invitation:

- **Acme Daniel** → `acme.e003`
- **Acme Priya** → `acme.e002`

For each user:

1. Send the invitation from the identity.
2. Open the correct test inbox.
3. Complete registration in that user's browser profile.
4. Sign out and sign in again.
5. Verify the username from the user menu.

**Check:** Lucas, Daniel, and Priya can each sign in independently.

### 6. Verify ordinary user access

As administrator:

1. Open each of the three identities.
2. Open **Actions > Set User Levels**.
3. Confirm none of the three has administrator-level access added for this lab.
4. Keep the administrator's permissions unchanged.

Reference: [User levels](https://documentation.sailpoint.com/saas/help/common/users/user_levels.html)

**Check:** The three course users have ordinary user access.

<a id="check-for-accidental-administrator-permissions"></a>

### 7. Verify the four separate sessions

Keep four browser profiles:

- Acme Admin
- Acme Lucas
- Acme Daniel
- Acme Priya

Then verify:

#### Lucas
1. Sign in as Lucas.
2. Open **Request Center**.
3. Confirm the page loads.

An empty catalog is acceptable at this stage.

#### Daniel
1. Sign in as Daniel.
2. Open **Approvals**.
3. Confirm the page loads.

An empty approval queue is expected.

#### Priya
1. Sign in as Priya.
2. Open **Approvals**.
3. Confirm the page loads.

#### Administrator
1. Sign in as the administrator.
2. Open **Admin > Connections > Sources**.
3. Confirm administrative configuration pages remain available.

Reference: [User-level access matrix](https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html)

**Check:** Every browser profile shows the intended signed-in identity and the required page loads.

<!-- AUTHOR_SCREENSHOT_START: AR-008-04 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-008-04-user-sessions.png`
>
> **Show:** Lucas in Request Center, Daniel in Approvals, Priya in Approvals, and the relevant user-level checks. Do not capture passwords, invitation links, MFA codes, or personal mailbox details.

<!-- AUTHOR_SCREENSHOT_END: AR-008-04 -->

<a id="if-a-check-fails"></a>

## Check the result

### Final verification

- [ ] Lucas's manager is Daniel.
- [ ] Lucas, Daniel, and Priya have distinct working Work Email values.
- [ ] The working HR CSV preserves the full current population, including the original 24 employees.
- [ ] The configured sign-in route is recorded and works for all three users.
- [ ] Lucas can complete a fresh sign-in through that route.
- [ ] Daniel can complete a fresh sign-in through that route.
- [ ] Priya can complete a fresh sign-in through that route.
- [ ] Lucas opens Request Center.
- [ ] Daniel opens Approvals.
- [ ] Priya opens Approvals.
- [ ] The three users have ordinary user permissions.
- [ ] The administrator session remains separate and usable.

## Finish

<a id="2-replace-the-email-placeholders-in-hr"></a>

<a id="5-keep-the-sessions-separate-and-check-access"></a>

<a id="what-you-should-leave-in-place"></a>

### Leave this in place

Keep the three registered user accounts, their test email addresses, the separate browser profiles, and the administrator session available.

Next: **[AR-009: Verify the Environment](../AR-009/README.md)**

[Previous: AR-007](../AR-007/README.md) · [Lab index](../../README.md)
