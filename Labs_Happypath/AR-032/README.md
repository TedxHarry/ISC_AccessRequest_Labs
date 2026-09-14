# AR-032 · Observe reminders, escalation and approval expiration

## Before you start

Complete AR-031. Use Acme Henry, Acme Harper, Acme Ava and Acme Noah. Prepare Samuel's session (`acme.e024`) using [AR-029 Section 1](../AR-029/README.md#1-prepare-the-five-sessions-and-check-henry), substituting Samuel's username. Ava and Samuel need controlled inboxes for the reminder/escalation observations.

Use the item-level Timeout, Reminders and Escalations controls described below. If they are unavailable in your tenant, record the missing capability and defer this lab rather than changing global settings as a substitute.

This lab includes real scheduled events. You can write down the configuration today, but leave the timed results unverified until the events occur. Keep the [journal](EVIDENCE.md) for the next observation. Do not approve either diagnostic request.

## Follow the steps

### 1. Record the settings and submit the earlier request

1. Open **Admin > Global > System Settings > Feature Settings > Approval Settings**. Read the **Global** and **Access Requests** tabs and record their settings without changing them.
2. Open **Admin > Access Model > Access Profiles > AP-Production-Support > Access Requests**. Record grant/removal reviewers, grant timeout, reminder/escalation toggles, any escalation chain, fallback and time zone. The course grant setup from AR-029 is 90 days with reminders and escalations off. Resolve an unexplained difference before this comparison.
3. Verify Henry and Harper have Manager Ava and neither has a pending Production Support request. Run native checks for `acme.e018` and `acme.e019`: GG-PROD-SUPPORT False, baseline True.
4. In Acme Henry, request AP-Production-Support through **Request Center > Access Items > Access Profiles** with reason `AR-032 before schedule change`. Keep immediate access, then **Save > Review Request > Submit Request**.
5. Record its ID and Created time from My Requests. Find the ID in **Admin > Dashboard > Approval Management > Access Requests** and verify Ava is assigned. Leave it pending.

**Check:** The earlier request was created under the original settings. Save `AR-032-01.png` showing those profile settings before editing.

### 2. Save a separate reminder and escalation schedule

1. Return to AP-Production-Support's **Access Requests** page. Edit the **grant** timing controls only; keep Manager then Security and leave removal review unchanged.
2. Enter these values:

| Grant-review setting | Value |
|---|---|
| Timeout | 4 days |
| Reminders | On |
| Number of Reminders | 1 |
| Days After the Request to Start Reminders | 1 |
| Reminder Frequency / Times | Daily / 10:00 |
| Escalations | On |
| Days After the Request to Start Escalation | 2 |
| Escalation Frequency / Times | Daily / 10:00 |
| Time Zone | Choose your actual lab time zone and record it |

3. Under **Escalations > Reviewers**, select **Edit Approvers**. Add **Reviewer Category: Identity**, choose Samuel (`acme.e024`), and keep only Samuel in this lab escalation chain. Save the chain.
4. Under **Fallback Approver**, select **Identity** and Noah (`acme.e007`). Leave the normal Security review step in place; escalation is a separate change of the current overdue reviewer.
5. Check both **Schedule Preview** displays. Record the next eligible reminder and escalation times using the selected zone; a daily 10:00 schedule is not simply the submission time plus 24 hours. Verify the first reminder precedes escalation and both fall before timeout.
6. Select **Save**, leave and reopen the profile. Verify all values, the chain and the time zone persisted. Do not change the tenant clock or global settings to speed up the test.

**Check:** The item has a one-reminder schedule and a later escalation to Samuel. Save `AR-032-02.png` showing reminder settings and `AR-032-03.png` showing escalation settings and time zone.

### 3. Submit the later request and plan the observations

1. In Acme Harper, request AP-Production-Support with reason `AR-032 after schedule change`, using the same submission route as Henry. Record the new ID and Created time.
2. Inspect the new request in Approval Management. Ava is initially assigned. Record any displayed expiration date from request details; otherwise record the expected deadline from the four-day setting separately from the actual observed result.
3. In your journal, record the two IDs, their original settings and the next reminder/escalation observations. Keep both requests pending. Do not use manual **Remind User** or Reassign during this test; those would be different events.
4. Restore the profile's original grant timing settings from Section 1 now, then **Save** and reopen it. Existing requests retain the timing settings in force at submission. Restoring the profile prevents later new requests from using the temporary schedule.

**Check:** The profile is restored while the earlier and later requests retain different submitted configurations. Save `AR-032-04.png` showing both recorded request IDs and creation times.

### 4. Observe the reminder and escalation

1. At the expected reminder boundary, open the later request by ID. Record current status and assignee. Check Ava's controlled inbox for the reminder and match its recipient, profile and request link/ID. Record actual receipt time and zone. A missing email is not proof that the review was unassigned.
2. At the expected escalation boundary, reopen the later request's **Process** and **Assignees**. Record the transition from Ava to Samuel and its time. In Acme Samuel, confirm the matching pending review appears. Check his inbox separately for notification.
3. Leave the request undecided. If it later advances to the configured fallback, record Noah and that event separately. Do not confuse the fallback with the normal second Security stage, which would follow approval of the first required review.
4. Reopen Henry's earlier request and compare its assignment/history. It should not acquire the new reminder/escalation schedule merely because the profile was edited.

**Check:** Record observed notification and assignment events separately. Save `AR-032-05.png` for the reminder, hiding mailbox details, and `AR-032-06.png` for the escalation history.

### 5. Observe expiration and close the diagnostics

1. After the later request's expiration boundary, reopen its Process and Details. Record the actual final status and event time. A timeout is expiration of an undecided approval request; it is not removal of previously granted access.
2. Run native Production Support checks for Harper and Henry. The normal expiration outcome denies the later request without granting access. If an existing timeout configuration instead auto-approves it, record that event and inspect fulfillment; do not mark the no-grant expectation passed.
3. For any unexpected grant, use [AR-029 Section 6](../AR-029/README.md#6-remove-the-grant-then-test-manager-denial) with the actual recipient to revoke the profile and approve removal as Ava. Verify native absence.
4. Cancel Henry's still-pending earlier request in **Approval Management > Actions > Cancel Request**. Enter `AR-032 comparison complete` and confirm. If either request has already concluded, record its outcome rather than trying to cancel a completed grant.
5. Reopen the profile and verify original settings, Manager then Security, and Primary Owner removal. Verify no pending diagnostic request or test membership remains.

**Check:** Each timed observation has an actual result or is explicitly unverified. Save `AR-032-07.png` showing the later request's expiration outcome.

## Check the result

Compare the saved schedule with actual reminder receipt, escalation assignment and expiration. Configuration previews alone do not complete this lab. If an event differs, inspect its request ID, submission time, selected time zone and item settings before changing anything.

If you will do the timed portion later, cancel both pending diagnostic requests through Approval Management, verify neither granted access, and restore the profile. Mark AR-032 **timed observations pending**. Start a new before/after pair when ready; canceled requests cannot be used to prove future scheduled events.

[Approval settings and submission-time behavior](https://documentation.sailpoint.com/saas/help/requests/config_approval_settings.html) · [Approval expiration options](https://developer.sailpoint.com/discuss/t/enhancement-approvals-expiration-governance-group-visibility-and-more/193947)

## Finish

Keep AP-Production-Support's original timing configuration, Manager then Security grant review, and Primary Owner removal review. Henry and Harper must have no Production Support membership or pending diagnostic request before AR-033. Save the actual observations, or explicitly record that the timed portion was deferred. Keep Samuel's prepared session for later work.

### Screenshots to capture

Capture these as you reach the matching step. If a result needs two screens, add `a` and `b` to that filename.

| Filename | What to show |
|---|---|
| AR-032-01.png | Original profile timing settings |
| AR-032-02.png | Saved reminder configuration |
| AR-032-03.png | Escalation chain, fallback and time zone |
| AR-032-04.png | Earlier and later request IDs and creation times |
| AR-032-05.png | Actual reminder when received |
| AR-032-06.png | Actual escalation history when observed |
| AR-032-07.png | Actual expiration outcome when observed |

[Previous: AR-031](../AR-031/README.md) · [Course outline](../../README.md) · [Next: AR-033](../AR-033/README.md)
