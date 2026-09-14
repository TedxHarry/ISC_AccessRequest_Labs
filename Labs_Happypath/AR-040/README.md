# AR-040 · Enforce an end date and maximum duration

In this lab, you'll require an end date on Production Support, test its seven-day limit, and approve then remove one valid request.

## Before you start

Complete [AR-039](../AR-039/README.md) and its cleanup, or use the clean C05 state from AR-033 if native forms are unavailable. Keep any completed Module 6 form attached. Use Acme Admin, Henry (`acme.e018`), Ava (`acme.e006`), Evelyn (`acme.e021`) and the AD workstation. Keep your [journal](EVIDENCE.md) open. You will configure the date policy below; it is not a prerequisite.

## Follow the steps

### 1. Check the starting state and set the limit

1. As administrator, open **Admin > Identity Management > Identities > Henry**. Confirm his linked standard AD account and Manager Ava. Under Access and **Admin > Dashboard > Approval Management > Access Requests**, verify no existing or pending Production Support assignment.
2. Run [the direct membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e018`: Support False and baseline True. Use group names `GG-PROD-SUPPORT` and `GG-ACME-BASELINE`. An error is not proof of absence.
3. Open **Admin > Access Model > Access Profiles**, find `AP-Production-Support`, select **Edit > Access Requests**. Record the current form, date and reviewer settings. Grant review must remain Manager then GOV-Security-Review; removal review must remain Primary Owner/Ava.
4. Turn on **Require End Date** and set maximum duration to **7 Days**. Save, leave and reopen the page to verify. Keep the form association, comments and approval timing unchanged. Save `AR-040-01.png`.
5. If date controls are unavailable, record that limitation and leave AR-040–041 unexecuted. Continue with AR-042 using its no-date starting route; do not substitute a custom form question for an enforced end date.

**Check:** The saved date policy applies to requests for this profile. It does not configure its entitlement or a containing role automatically.

### 2. Test missing and excessive end dates

1. As Henry, open **Request Center > Access Items > Access Profiles** and select `AP-Production-Support`.
2. If its form is attached, enter ticket `CHG-LAB-040`, Environment `Production`, Work description `Test the seven-day support limit`, Rollback plan `Revoke the lab profile after verification`, and leave optional Implementation notes empty. Enter standard comments `AR-040 date validation`.
3. Leave the standard start and end dates empty. Try to save/continue. Record the required-end-date error. If the UI supplied an end date, record that default and clear it for this test. Do not count a populated default as a missing-date test.
4. In **Edit Request Details**, keep no future start date and set the end eight calendar days ahead at the same local clock time. Record the displayed time zone and rejection. Save `AR-040-02.png` for both validation cases. Neither case should have a submitted request ID.
5. Correct the end to tomorrow at a quarter-hour time you can review before it passes. Keep the start empty. Record the full date, time and zone, including the UTC offset for that date. If converting to UTC, use that date's offset rather than assuming summer and winter offsets match.

**Check:** Missing and out-of-range dates fail; the corrected end is comfortably inside the allowed period.

### 3. Approve and verify the valid request

1. Save the corrected form/details, select **Review Request**, and reopen **Edit Request Details**. Confirm the end, zone, Henry and his standard account. Select **Submit Request** once. Record its ID from **My Requests** and the submission time.
2. As Ava, open **Approvals > Access Requests > Requested**, open Henry's matching Grant, and inspect the dates, reason and form answers. Approve with `AR-040 valid duration` and confirm.
3. As administrator, locate the ID in **Approval Management > Access Requests**. Open the access name and check **Process/Assignees** for GOV-Security-Review. As Evelyn, open the matching Grant, approve with `AR-040 Security approved`, and confirm.
4. Follow [Account Activity](../../LAB-DESK.md#find-the-account-activity) until the group-add operation finishes. Verify native Support True and baseline True. Record the activity ID and actual completion time.
5. In Henry's **My Access > Access Profiles**, inspect Production Support's effective end date. Compare it with the submitted timestamp, accounting for the viewer's time zone. Save `AR-040-03.png` showing the approved dates and native result.
6. Compare submission, final approval and effective end. With no future start selected, approval delay consumes part of the available window; it does not restart a fresh seven days. If the end passed before approval finished, record that missed window and repeat with a new valid window after resolving the old request.

**Check:** The requested and assigned end represent the same instant, and access was actually provisioned.

### 4. Remove the control grant

1. As Henry, open the home dashboard's **My Access > Access Profiles**, select `AP-Production-Support`, choose **Revoke Access Profile**, enter the lab number and `test complete`, then **Submit**. Record the removal request ID.
2. As Ava, open **Approvals > Access Requests > Requested**, open Henry's matching removal details, select **Approve**, enter `Lab access no longer needed`, and confirm.
3. As administrator, follow [Account Activity](../../LAB-DESK.md#find-the-account-activity) for the removal. Run [the direct AD membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e018`: `GG-PROD-SUPPORT` must become **False**, while `GG-ACME-BASELINE` stays **True**. Keep the same domain controller for each comparison.
4. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data), then reopen Henry's Access and Accounts. Verify no Production Support assignment remains. Preserve his account and baseline role. If the assignment has already expired, inspect that removal instead of submitting a duplicate.

Save `AR-040-04.png` showing the completed removal and final membership.

## Check the result

Verify the missing/excessive-date cases, effective end, completed grant and removal. Henry must finish without Production Support; the saved seven-day maximum remains.

## Finish

Keep Production Support requestable with its required end date, seven-day maximum, existing form and reviewers. Keep Henry free of test access. Continue to AR-041.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-040-01.png | Saved required end date and seven-day limit |
| AR-040-02.png | Missing and excessive date errors |
| AR-040-03.png | Approved effective end and native grant |
| AR-040-04.png | Completed removal and final memberships |

[Previous: AR-039](../AR-039/README.md) · [Course outline](../../README.md) · [Next: AR-041](../AR-041/README.md)
