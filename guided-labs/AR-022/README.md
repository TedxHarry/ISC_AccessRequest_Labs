# AR-022 · Restrict Finance catalog visibility

<a id="goal"></a>

In this lab, you'll restrict Finance catalog items to Finance requesters, using Remote Worker as a visible comparison while leaving existing AD access unchanged.

## Before you start

Complete [AR-021](../AR-021/README.md) and the [Module 4 starting checks](../../M04-READINESS.md). Open the AD workstation, Acme Admin, Acme Lucas (`acme.e012`) and Acme Liam (`acme.e008`). If you are returning after a break, read [the module resume checks](../../M04-READINESS.md#resume-without-losing-the-previous-state) before changing settings or submitting another request.

## Follow the steps

<a id="1-capture-the-catalog-before-segmentation"></a>

### 1. Check the catalog before segmentation

1. As administrator, open Lucas and Liam under **Admin > Identity Management > Identities**. Confirm Lucas's Department is Finance and Liam's is IT. Verify neither ordinary-user session has administrator permissions.
2. Inspect the two Finance profiles and ROLE-Finance-Analyst under **Admin > Access Model**. Confirm each is enabled/requestable and record the [object IDs](../../LAB-VALUES.md#find-an-access-profile-or-role-id).
3. Inspect both identities' **Access** for existing Finance assignments. Neither should already hold the tested profiles or role.
4. In each user's own **Request Center**, request for self and search the two Finance profiles under **Access Items > Access Profiles**, then the role under **Access Items > Roles**. Record each result without selecting or submitting.
5. Search AP-Remote-Worker in both sessions too.
6. Record native access before editing: use [the membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for Lucas with GG-VPN-USERS and GG-ACME-BASELINE (both True), and Liam with GG-FIN-REPORTING, GG-FIN-AP and GG-VPN-USERS (all False), plus baseline (True). Record the controller and account identifiers.
7. Inspect **Admin > Access Model > Segments** for existing Finance-item associations. On a first run without an existing restriction, both users should find all four items. On a repeat with the course segment already enabled, inspect/reuse it and record that starting state; do not disable a working restriction merely to recreate a before image.

**Check:** Your record identifies the actual starting visibility and existing segments. Missing access before the exercise is a condition to investigate, not proof that the new segment works.

<!-- AUTHOR_SCREENSHOT_START: AR-022-01 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-022-01.png`
>
> **Show:** Starting departments, catalog and native memberships.

<!-- AUTHOR_SCREENSHOT_END: AR-022-01 -->

### 2. Define the Finance identities

1. In Acme Admin, open **Admin > Access Model > Segments**. Search `SEG-Acme-Finance`.
2. If absent, select **New**, enter that name and description `Finance requester visibility for Acme Finance profiles and role`, then **Save**.
3. Select the saved segment and **Edit Segment > Define Segment**.
4. If the saved Department=Finance criterion already exists, keep it and continue to Step 5. Otherwise choose the mapped identity attribute **Department (`department`)** and value **Finance**. Select **Add Criteria**; do not leave the choice only in the dropdown.
5. Inspect the matching-identity table. Confirm Lucas and Olivia appear and Liam does not. Use their usernames to identify them.
6. Keep this one criterion and select **Save**. Reopen it to verify the saved attribute/value.

**Check:** The segment uses the identity's mapped Department and its matching population agrees with the three named controls. If department is unavailable, inspect Acme Employees > Mappings and the identity values before continuing.

### 3. Add the exact access items and enable

1. On **Edit Segment > Define Access**, inspect the saved items and keep matching associations. Add only missing items: search AP-Finance-Reporting. Check its name/type/ID and select its checkbox, then **+ Add to Segment**.
2. Add AP-Finance-AP and ROLE-Finance-Analyst the same way, using the appropriate profile/role search.
3. Verify exactly these three items are included and select **Save**. Leave AP-Remote-Worker and GG-VPN-USERS outside this course segment.
4. Open **Review**, inspect the criterion and three items, then **Save**.
5. Return to the Segments list and set this segment's **Enabled** toggle to **Yes**.
6. Reopen the saved segment and record its enabled state and save time.

**Check:** One enabled Finance segment contains both profiles and the role. Associating only the application name would not perform this three-item test.

<!-- AUTHOR_SCREENSHOT_START: AR-022-02 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-022-02.png`
>
> **Show:** Saved criterion, identities, items and enabled state.

<!-- AUTHOR_SCREENSHOT_END: AR-022-02 -->

<a id="resume-or-repeat"></a>

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

<!-- AUTHOR_SCREENSHOT_START: AR-022-03 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-022-03.png`
>
> **Show:** Lucas/Liam matrix with Remote Worker.

<!-- AUTHOR_SCREENSHOT_END: AR-022-03 -->

### 5. Confirm that visibility did not revoke access

1. On the same controller recorded in Section 1, use the [native check](../../M02-CHECKS.md#inspect-direct-ad-membership) for Lucas against GG-VPN-USERS and GG-ACME-BASELINE; both remain True.
2. Check Liam still lacks GG-FIN-REPORTING, GG-FIN-AP and GG-VPN-USERS and retains baseline.
3. Verify there are no requests from this lab in either user's **My Requests**.
4. Leave the Finance segment enabled.

**Check:** The exercise changed catalog visibility without granting or revoking test memberships.

<!-- AUTHOR_SCREENSHOT_START: AR-022-04 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-022-04.png`
>
> **Show:** Preserved memberships and retained segment.

<!-- AUTHOR_SCREENSHOT_END: AR-022-04 -->

## Check the result

### Final verification

- [ ] The mapped Finance criterion and three exact access items are saved.
- [ ] Lucas sees all three; Liam sees none; Remote Worker is visible to both.
- [ ] Existing segments and ordinary-user sessions were checked.
- [ ] The segment stays enabled and no request was submitted.
- [ ] Baseline, Lucas's VPN and Liam's clean business access remain.

## Finish

### Leave this in place

Keep SEG-Acme-Finance enabled for AR-023-025 and later exercises. Record its ID/settings and the visibility matrix. [Segment configuration and behavior](https://documentation.sailpoint.com/saas/help/requests/segments.html)

[Previous: AR-021](../AR-021/README.md) · [Lab index](../README.md) · [Next: AR-023](../AR-023/README.md)
