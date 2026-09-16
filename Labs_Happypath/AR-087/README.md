# AR-087 · Reassign review work during an absence

In this lab, you'll route Priya's new reviews to Samuel during a dated absence, then restore routing and account for work already transferred.

## Before you start

Complete [AR-072](../AR-072/README.md). Use Priya, Samuel, Taylor, Liam and Acme Admin. Remote Worker must have direct Primary Owner/Priya grant/removal review; Taylor and Liam must lack its assignment and both native groups. Keep Liam baseline and Taylor's exclusion. Open your [journal](EVIDENCE.md). No new service-desk privilege is needed.

## Follow the steps

### 1. Save the current configuration and enable the feature

1. As administrator, open **Admin > Global > System Settings > Feature Settings > Other Features**. Record Enable Work Reassignment and enable it if off, then Save.
2. Open **Admin > Identity Management > Identities > Priya > Work Reassignment**. Record all Scheduled Reassignments, including work type, delegate, start/end and time zone. Only one configuration per work type can exist; a new one replaces an existing one.
3. Inspect Samuel's reassignment settings too. Do not create a loop or silently replace an active non-course delegation. This exercise expects no currently effective Access Requests delegation on either course reviewer; resolve that prerequisite or mark this case Not run.
4. Record that Priya remains Remote Worker's primary owner. Save `AR-087-01.png`.

**Check:** Configuration for one work type and one reviewer is separated from item ownership. [Work reassignment rules](https://documentation.sailpoint.com/saas/help/users/work_reassignment.html)

### 2. Schedule the absence and inspect fresh work

1. On Priya's Work Reassignment tab, choose **Work Item Type: Access Requests**, **Assign To: Samuel (acme.e024)**. Select today's Start Date and a Start Time at or just before the current time. Set End Date to tomorrow at the same local time; select the explicit time zone and leave No end date off. Select **Add Reassignment**.
2. Reopen the scheduled row and verify the window is active, accounting for the displayed time zone and daylight saving. If the start must be later in your UI, wait until it is effective before submitting the controls.
3. Taylor submits Remote Worker through [the operations procedure](../../LAB-DESK.md#submit-a-remote-worker-operations-control), reason `AR-087 delegated A`. Stop before a decision. As administrator inspect Process/Assignees; record the original owner and the resulting Samuel review/reassignment event.
4. Liam submits a second clean request with `AR-087 delegated B`; leave it pending with Samuel. Record its separate ID. Do not approve either diagnostic grant.
5. Samuel opens **Approvals > Access Requests > Requested** and denies Taylor's A with `AR-087 absence control complete`. Verify terminal denial and Taylor's native absence. Save `AR-087-02.png` with the schedule, delegation evidence and decision actor.

**Check:** The configured absence redirects newly created review work; the profile still belongs to Priya.

### 3. End the absence and inspect old versus fresh work

1. Acme Admin deletes only the test Access Requests row from Priya's Scheduled Reassignments. Restore a saved future/inactive row if one was replaced, preserving its original values. Do not delete other work types.
2. Inspect Liam's already-moved request B. Record its actual assignee; ending a schedule does not automatically move previous tasks back. Have Samuel deny B with `AR-087 transferred work resolved`. If an independent change moved it, resolve it through its actual assigned reviewer and record the difference.
3. Taylor submits a fresh Remote Worker request, reason `AR-087 restored routing`. Verify Priya is assigned and has the actionable review. Priya denies with `AR-087 normal route restored`. Verify native absence for both people and all three requests terminal. Save `AR-087-03.png`.

**Check:** A fresh request proves restored routing; inspecting B proves what happened to already-transferred work.

### 4. Restore the global feature and hand over

1. Restore the global Enable Work Reassignment value if changed. Reopen Priya and Samuel's settings and verify they match the saved state. Record create/delete and automatic reassignment events, including their actors.
2. Verify Remote Worker owner/review settings unchanged, Liam baseline retained, Taylor clean and no pending diagnostic review. Save `AR-087-04.png`.
3. If you pause while the schedule is active, remove the test row first and resolve transferred work individually. Disabling the global feature alone does not send tasks back or delete saved schedules.

**Check:** Configuration and previously moved work are both accounted for.

## Check the result

New work goes to Samuel only during the test window; already-transferred work is explicitly resolved, and a fresh request returns to Priya after restoration.

## Finish

Restore the original feature toggle and reassignment rows. Keep the three request IDs, actual assignees and final native checks.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-087-01.png | Original global and reviewer configurations |
| AR-087-02.png | Active schedule, transferred work and Samuel decision |
| AR-087-03.png | Old transferred task and fresh Priya control |
| AR-087-04.png | Restored settings and resolved requests |

[Previous: AR-086](../AR-086/README.md) · [Course outline](../../README.md) · [Next: AR-088](../AR-088/README.md)
