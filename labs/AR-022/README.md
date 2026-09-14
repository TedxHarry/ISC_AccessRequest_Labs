# AR-022 · Restrict Finance catalog visibility

<a id="goal"></a>

In this lab, you'll restrict Finance catalog items to Finance requesters, using Remote Worker as a visible comparison while leaving existing AD access unchanged.

## Before you start

Complete [AR-021](../AR-021/README.md) and the [Module 4 starting checks](../../M04-READINESS.md). Open Acme Admin, Acme Lucas (`acme.e012`) and Acme Liam (`acme.e008`). Keep your [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Capture the catalog before segmentation

1. As administrator, open Lucas and Liam under **Admin > Identity Management > Identities**. Confirm Lucas's Department is Finance and Liam's is IT. Verify neither ordinary-user session has administrator permissions.
2. Inspect the two Finance profiles and ROLE-Finance-Analyst under **Admin > Access Model**. Confirm each is enabled/requestable and record the [object IDs](../../LAB-VALUES.md#find-an-access-profile-or-role-id).
3. Inspect both identities' **Access** for existing Finance assignments. Neither should already hold the tested profiles or role.
4. In each user's own **Request Center**, request for self and search the two Finance profiles under **Access Items > Access Profiles**, then the role under **Access Items > Roles**. Record each result without selecting or submitting.
5. Search AP-Remote-Worker in both sessions too.
6. Inspect **Admin > Access Model > Segments** for existing Finance-item associations. On a first run without an existing restriction, both users should find all four items. On a repeat with the course segment already enabled, inspect/reuse it and record that starting state; do not disable a working restriction merely to recreate a before image.

**Check:** Your record identifies the actual starting visibility and existing segments. Missing access before the exercise is a condition to investigate, not proof that the new segment works.

**Screenshot:** `AR-022-01.png`: departments and each user's starting item searches.

### 2. Define the Finance identities

1. In Acme Admin, open **Admin > Access Model > Segments**. Search `SEG-Acme-Finance`.
2. If absent, select **New**, enter that name and description `Finance requester visibility for Acme Finance profiles and role`, then **Save**.
3. Select the saved segment and **Edit Segment > Define Segment**.
4. Choose the mapped identity attribute **Department (`department`)** and value **Finance**. Select **Add Criteria**; do not leave the choice only in the dropdown.
5. Inspect the matching-identity table. Confirm Lucas and Olivia appear and Liam does not. Use their usernames to identify them.
6. Keep this one criterion and select **Save**. Reopen it to verify the saved attribute/value.

**Check:** The segment uses the identity's mapped Department and its matching population agrees with the three named controls. If department is unavailable, inspect Acme Employees > Mappings and the identity values before continuing.

### 3. Add the exact access items and enable

1. On **Edit Segment > Define Access**, search AP-Finance-Reporting. Check its name/type/ID and select its checkbox, then **+ Add to Segment**.
2. Add AP-Finance-AP and ROLE-Finance-Analyst the same way, using the appropriate profile/role search.
3. Verify exactly these three items are included and select **Save**. Leave AP-Remote-Worker and GG-VPN-USERS outside this course segment.
4. Open **Review**, inspect the criterion and three items, then **Save**.
5. Return to the Segments list and set this segment's **Enabled** toggle to **Yes**.
6. Reopen the saved segment and record its enabled state and save time.

**Check:** One enabled Finance segment contains both profiles and the role. Associating only the application name would not perform this three-item test.

**Screenshot:** `AR-022-02.png`: criterion, matching identities, three items and enabled state.

### 4. Verify both requester views

1. Allow the saved segment change to reach the catalog using [the processing checks](../../M04-READINESS.md#wait-for-a-saved-change-to-reach-the-catalog).
2. In Acme Lucas, refresh Request Center for himself. Search each Finance item by its exact name, then Remote Worker.
3. Repeat in Acme Liam. Record the username and result for every row.

| Item | Lucas: Finance | Liam: IT |
|---|---|---|
| AP-Finance-Reporting | Visible | Absent |
| AP-Finance-AP | Visible | Absent |
| ROLE-Finance-Analyst | Visible | Absent |
| AP-Remote-Worker | Visible | Visible |

4. Do not submit requests. If Liam can still see a Finance item, inspect all enabled segments containing that item and check whether another segment includes Liam.
5. Keep administrator catalog observations separate: org administrators are exempt from this requester segmentation.

**Check:** The four-row matrix matches. Remote Worker distinguishes the intended restriction from a generally empty or failed catalog.

**Screenshot:** `AR-022-03.png`: both requester searches and Remote Worker control.

### 5. Confirm that visibility did not revoke access

1. Use the [native check](../../M02-CHECKS.md#inspect-direct-ad-membership) for Lucas against GG-VPN-USERS and GG-ACME-BASELINE; both remain True.
2. Check Liam still lacks GG-FIN-REPORTING, GG-FIN-AP and GG-VPN-USERS and retains baseline.
3. Verify there are no requests from this lab in either user's **My Requests**.
4. Leave the Finance segment enabled.

**Check:** The exercise changed catalog visibility without granting or revoking test memberships.

**Screenshot:** `AR-022-04.png`: preserved native controls and final segment state.

## Check the result

### If the result differs

Check the current session username, existing access, object enabled/requestable state, saved segment membership and other segments in that order. Do not widen the Finance criterion to hide an incorrect HR department. Record a delayed result before making another change.

### Explain the result

Can Lucas see the Finance role because he already has VPN? Would this segment alone stop him requesting Finance access for someone outside Finance?

<details>
<summary>Check your explanation</summary>

Lucas's Finance identity attribute puts him in the segment; his existing VPN does not establish that membership. The segment controls the requester. If he is authorized to request for another person, visibility alone does not establish that recipient's business eligibility. AR-023–024 will test those separate questions.

</details>

### Final verification

- [ ] The mapped Finance criterion and three exact access items are saved.
- [ ] Lucas sees all three; Liam sees none; Remote Worker is visible to both.
- [ ] Existing segments and ordinary-user sessions were checked.
- [ ] The segment stays enabled and no request was submitted.
- [ ] Baseline, Lucas's VPN and Liam's clean business access remain.

## Engineering practice

### Practice checkpoints

Use your recorded requester views to explain which identities could find each Finance profile and the role. Check the individual access items rather than relying on the application card alone.

### Diagnose this ticket

This supplied practice case is separate from your observed tenant results. Write the first inspection, likely cause, smallest correction and repeat check before opening the answer.

> Liam is IT and outside SEG-Acme-Finance, but he still sees AP-Finance-Reporting. Another enabled segment includes all IT identities and also contains that profile.

<details>
<summary>Compare your diagnosis</summary>

The second segment supplies another visibility path. Inspect and record both segments' identities and item associations before proposing a change. If the extra association is an accidental course-only edit, remove that profile association from the extra segment, save and recheck Liam plus the Remote Worker control. Preserve unrelated segment access. Do not change Liam's department or disable the intended Finance segment.

</details>

## Finish

### Leave this in place

Keep SEG-Acme-Finance enabled for AR-023–025 and later exercises. Record its ID/settings and the visibility matrix. [Segment configuration and behavior](https://documentation.sailpoint.com/saas/help/requests/segments.html)

### Resume or repeat

Reopen SEG-Acme-Finance and compare its saved criterion and three access items with Sections 2–3. Reuse that segment, then repeat the Lucas/Liam checks in Sections 4–5. Keep the segment enabled and existing memberships unchanged. This lab does not submit or revoke requests.

### Screenshots to capture

| Filename | What to show |
|---|---|
| AR-022-01.png | Starting departments and catalog |
| AR-022-02.png | Saved criterion, identities, items and enabled state |
| AR-022-03.png | Lucas/Liam matrix with Remote Worker |
| AR-022-04.png | Preserved memberships and retained segment |

[Previous: AR-021](../AR-021/README.md) · [Course outline](../../README.md) · [Next: AR-023](../AR-023/README.md)
