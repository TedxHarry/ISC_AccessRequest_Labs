# AR-005 · Prepare Requester and Reviewer Sessions

**Level:** Beginner

**Prerequisites:** Complete AR-002's manager checks and [AR-004](../AR-004/README.md). Have three distinct, working test email addresses you control, access to their inboxes, and your existing ISC administrator session.

## Your assignment

Sign in as the people who will request and review access. Use these three identities so the requester, manager, and planned VPN owner are different people:

| Person | ISC username | Responsibility in the next labs |
|---|---|---|
| Lucas Brown | acme.e012 | Requester |
| Daniel Brooks | acme.e003 | Lucas's manager and manager reviewer |
| Priya Shah | acme.e002 | Planned VPN item owner and owner reviewer |
| Your existing administrator | Record your username | Configure and investigate the lab |

Priya becomes the VPN item's owner when you configure that item in the request labs. Naming her here does not assign ownership or route an approval.

Finish with four separate browser sessions and record the checks in your [lab journal](EVIDENCE.md). Keep the 24-person HR dataset and 25 AD accounts from the previous labs.

## 1. Check the three identities

1. As administrator, open **Admin > Identity Management > Identities**.
2. Find each username in the table. Confirm the employee number and Acme Employees profile. Do not create replacement identities for sign-in.
3. Open Lucas and verify **Manager** is Daniel Brooks. If blank or incorrect, complete [AR-002](../AR-002/README.md) before testing manager review.
4. Record each identity's current registration status and user levels.
5. If one of these lab identities is disabled, select **Actions > Enable Identity**. Recheck its registration status afterward. Do not reset an already working identity simply to repeat registration.

Enabling an ISC identity and enabling its AD account are separate operations. [Identity administration](https://documentation.sailpoint.com/saas/help/identities/identity_mgmt.html)

**Check:** All three identities are available for sign-in setup, and Lucas resolves to Daniel as manager.

## 2. Replace the email placeholders in HR

Each person needs a different, deliverable work email address. Do not assign the same address to all three. Use controlled test addresses; verify that each inbox receives mail before continuing. [Invitation prerequisites](https://documentation.sailpoint.com/saas/help/common/users/inviting_users.html)

1. Make a private working copy of the latest complete Acme HR CSV you used in your tenant. Name it `acme-hr-working.csv`. If you have made no dataset changes, start from the [baseline CSV](../../datasets/acme-hr-baseline.csv).
2. Replace only the `email` values for E012, E003, and E002 with their test addresses. Preserve all 24 rows, column names, employee numbers, usernames, and manager references.
3. In ISC, open **Admin > Connections > Sources > Acme HR > Account Management > Account Aggregation**.
4. Upload the complete working CSV using the file-upload control. Wait for aggregation and identity processing to finish; inspect the job for warnings or errors.
5. Reopen the three identities and confirm their Work Email values show the intended addresses. If the values are old, inspect **Acme Employees > Mappings > Work Email**, which should read **Acme HR > email**, and check processing in **Admin > Dashboard > Monitor**.
6. Verify that Acme still has 24 HR accounts and identities. Keep this working CSV for later HR imports so you do not overwrite these addresses with the original placeholders.

Use the complete file for a flat-file import. [Loading HR account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html)

**Check:** Each of the three identities has its own working email address. No employee has disappeared from the baseline. Store your working file privately rather than committing real mailbox details to the public course repository.

## 3. Confirm how these users will sign in

1. Open **Admin > Identity Management > Identity Profiles > Acme Employees > Settings**.
2. Record **Sign-in Method**, **Invitation Options**, and the authentication requirements in your journal.
3. For an Acme profile using ISC credentials, use **User Name & Password** and manual invitations. Save any changes. Complete Section 4 below.
4. If your tenant already uses working SSO or Directory Connection for these users, keep that setup. Use its established sign-in route in Section 5 and verify it opens the correct Acme identity. Directory Connection uses the configured authentication source; an AD correlation alone does not configure authentication.

Do not change tenant-wide SSO, MFA, or network restrictions to follow this lab. If the existing authentication route cannot sign in these users, resolve that prerequisite before marking the session checks complete. [Profile sign-in settings](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html)

**Check:** You have recorded one working sign-in route for the three users. For ISC credentials, continue with registration; for existing external authentication, proceed to the session checks.

## 4. Register users who use ISC credentials

Perform these steps for each unregistered user using ISC User Name & Password:

1. As administrator, locate the identity under **Admin > Identity Management > Identities** and select **Actions > Invite Identity**.
2. Open that person's test inbox and locate the invitation. Confirm the username belongs to the intended person.
3. Open the registration link in that person's separate browser profile, as described in Section 5. Complete the password and authentication prompts required by the tenant.
4. Sign out, then sign in again through the tenant's normal sign-in page using the registered ISC username and password.

Use the registered ISC password for this path. The AD password created in AR-004 is not automatically the ISC password. If an invitation expires, resend it from the identity rather than resetting the identity. [Manual invitations and registration](https://documentation.sailpoint.com/saas/help/common/users/inviting_users.html)

**Check:** Lucas, Daniel, and Priya can each complete a fresh sign-in. Keep passwords, registration links, and MFA setup codes out of screenshots and the journal.

## 5. Keep the sessions separate and check access

Create four browser profiles named `Acme Admin`, `Acme Lucas`, `Acme Daniel`, and `Acme Priya`. In Chrome or Edge, use the browser profile menu to add a profile; browser-account synchronization is unnecessary. Separate normal tabs share a session, and multiple private windows can also share a private session.

1. Open the tenant in each profile and sign in as its named user. With SSO, check the identity-provider session too; it must not silently reuse your administrator identity.
2. In each ISC window, open the user menu and confirm the signed-in identity. Record the username and browser profile in the journal.
3. In Lucas's session, open **Request Center**. Confirm it loads. An empty catalog is acceptable here; VPN has not yet been configured as requestable.
4. In Daniel's and Priya's sessions, open **Approvals**. Confirm each page loads. An empty queue is expected when no work has been assigned.
5. In your admin session, open **Admin > Connections > Sources** and **Admin > Identity Management > Identities** to confirm you can continue configuring the course.

Ordinary users can access Request Center and Approvals. They do not need Org Admin or an approval-administration user level to review work assigned to them. [User-level access matrix](https://documentation.sailpoint.com/saas/help/common/users/user_level_matrix.html)

### Check for accidental administrator permissions

As administrator, inspect **Actions > Set User Levels** for Lucas, Daniel, and Priya. Record their effective levels. These dedicated course identities should have ordinary user access, with no elevated levels added for this exercise. If you previously assigned elevated levels solely for testing, deselect those levels, select **Save**, and have the user sign out and back in. Preserve permissions required by unrelated work and resolve that conflict before using the account as an ordinary-user test.

Keep your administrator's permissions unchanged. [Setting user levels](https://documentation.sailpoint.com/saas/help/common/users/user_levels.html)

**Check:** Every window shows the intended user, and the required page loads with that user's own permissions. Opening Approvals verifies page access; a later submitted request will verify actual routing and decision permissions.

## If a check fails

| Observation | Next action |
|---|---|
| No invitation arrives | Check the identity's current Work Email, inbox delivery, spam folder, and registration status. Confirm all three addresses are distinct. |
| Email changes disappear later | Check whether an older HR CSV was reimported. Update and retain the complete working file. |
| AD credentials fail on the ISC password page | Use the credentials for the sign-in method recorded in Section 3. |
| A reviewer window shows the administrator | Sign out of that browser profile and check its SSO session before retrying. |
| Request Center or Approvals is unavailable | Verify the signed-in identity, its access state, tenant capability, and user levels against the linked matrix. Do not grant Org Admin as a workaround. |
| Lucas's manager is missing | Return to AR-002 and verify the stored manager reference and resolved identity. |
| The approval queue is empty | No approval has been submitted in this lab. Record page access only. |

## Completion checklist

- [ ] Lucas, Daniel, and Priya have distinct working email addresses on their identities.
- [ ] The complete working HR CSV preserves all 24 records and the new addresses.
- [ ] Lucas's manager is Daniel.
- [ ] All three users can sign in through the recorded authentication route.
- [ ] Separate browser profiles show the correct user identities.
- [ ] Lucas opens Request Center; Daniel and Priya open Approvals.
- [ ] The three course users have ordinary user permissions for these checks.
- [ ] The administrator session remains usable.

Retain the sessions and working HR file for AR-006's readiness checks. Assign item ownership and approval policies when the corresponding request lab asks for them.

## Screenshots to capture as you work

Hide credentials, invitation links, MFA codes, and personal mailbox details before sharing.

| After section | Suggested filename | What to show |
|---|---|---|
| 1 | `AR-005-01-lucas-manager.png` | Lucas's identity with Daniel as Manager |
| 2 | `AR-005-02-hr-import.png` | Completed HR import and 24 accounts scanned |
| 3 | `AR-005-03-sign-in-settings.png` | Acme Employees sign-in method and invitation option |
| 4 or 5 | `AR-005-04-registration-status.png` | The three identities' actual registration/access status for the chosen sign-in route |
| 5 | `AR-005-05-lucas-request-center.png` | Lucas's signed-in identity and Request Center |
| 5 | `AR-005-06-daniel-approvals.png` | Daniel's signed-in identity and Approvals |
| 5 | `AR-005-07-priya-approvals.png` | Priya's signed-in identity and Approvals |
| 5 | `AR-005-08-user-levels.png` | User levels for the course users; use separate images if needed |

[Previous: AR-004](../AR-004/README.md) · [Course outline](../../README.md)
