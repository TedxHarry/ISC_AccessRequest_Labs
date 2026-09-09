# AR-017 · Present Finance access through an application

**Before you start:** AR-016. Keep `AP-Finance-Reporting` enabled.

## Build the requester view

1. Open **Admin > Access Model > Applications > Create Application**. Name it `Finance Services`, describe its reporting purpose, select Daniel as owner and select the AD source. Save.
2. On **Configuration**, use **App Accounts Created By: Admin (IT)**. Retain AD as the account source. Record the selected account-source scope.
3. Under **Request Center Options**, enable **Visible in Request Center** and **Allow Access Requests**. Save this tab.
4. On **Access Profiles**, search for `AP-Finance-Reporting`, add it and save. Enable the application for users.
5. As Olivia, open Request Center, search for Finance Services and inspect its available profile. Compare the item name and description with the underlying group names.
6. Request the profile from this application view, approve as Daniel and verify the same two native memberships as AR-016.
7. Record that Finance Services is an ISC access application grouping AD access. No external Finance application account was created by this exercise.

**Check:** A requester can discover the business application and select a usable profile from it.

**Reset:** Retain the application and profile association. Remove the test assignment before the next independent grant test.

[Access application configuration](https://documentation.sailpoint.com/saas/help/access/app-config.html)

## Screenshots to capture

1. Application configuration and enabled state.
2. Associated access profile.
3. Olivia's application view and verified request result.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-016](../AR-016/README.md) · [Course outline](../../README.md) · [Next: AR-018](../AR-018/README.md)
