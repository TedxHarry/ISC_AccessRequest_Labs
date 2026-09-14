# AR-025 · Follow a department change into the catalog

<a id="goal"></a>

In this lab, you'll trace Lucas's Department from HR to his identity and catalog, temporarily change it to Sales and restore Finance after the comparison.

## Before you start

Complete [AR-024](../AR-024/README.md). Keep the Finance segment enabled and the original request-on-behalf setting restored. Use Acme Admin, Acme Lucas (`acme.e012`), Acme Liam (`acme.e008`) and the AD workstation.

Open the latest complete private HR working file and your [journal](EVIDENCE.md). A first pass has 24 rows; a repeat after AR-047 can have 25. Preserve the current population and controlled email addresses throughout.

## Follow the steps

### 1. Save a complete starting record

1. Make a private backup of your latest complete HR working file named `acme-hr-before-AR025.csv`. Keep the working file separate.
2. Open the file in a CSV-aware editor. Record its data-row count and confirm employee numbers and usernames are unique. Find employee E012, username acme.e012, and record Department=Finance.
3. In Acme Admin, open **Admin > Connections > Sources > Acme HR > Account Management > Accounts**, find acme.e012 and record its Department.
4. Open Lucas under **Admin > Identity Management > Identities** and record Department, identity ID and Manager.
5. Open **Admin > Identity Management > Identity Profiles > Acme Employees > Mappings**. Find Department and confirm its source is Acme HR and account attribute is department. Record any transform instead of assuming a direct mapping.
6. Inspect **Admin > Access Model > Segments > SEG-Acme-Finance > Edit Segment > Define Segment**. Record Finance and Lucas's matching membership.
7. In Acme Lucas, search AP-Finance-Reporting and AP-Finance-AP in **Request Center > Access Items > Access Profiles**. Both must be visible before changing the data.

**Check:** CSV, HR account and identity agree on Finance, and Lucas matches the unchanged Finance segment.

**Screenshot:** `AR-025-01.png`: Lucas's identity Details showing Department=Finance. Hide private email values.

### 2. Change only Lucas's department

1. In the separate working file, locate E012 again.
2. Change only that row's department from `Finance` to `Sales`. Keep employee number, username, email, manager and every other field unchanged.
3. Save and reopen the file. Compare E012 with the backup; the department should be the only changed field.
4. Verify the same data-row count and all other employee rows remain. Do not upload a file containing only Lucas.
5. Keep the backup out of the upload selection so that you submit the edited working file in the next section.

**Check:** The full working file contains one intended field change and preserves all current identities.

**Screenshot:** `AR-025-02.png`: E012's row in the complete working CSV showing department=Sales. Hide private email columns.

### 3. Import and inspect the source and identity

1. In Acme Admin, open **Admin > Connections > Sources > Acme HR > Account Management > Account Aggregation**.
2. Select the upload control, choose the complete edited working file and confirm the upload.
3. Inspect the latest aggregation until it finishes. Record status and accounts scanned, then verify the stored HR account population still matches the starting count.
4. Open **Account Management > Accounts > acme.e012** and record Department=Sales.
5. Wait for **Admin > Dashboard > Monitor** identity processing. Reopen Lucas's identity and inspect Department.
6. Record the source account value and identity value separately with times. If the account says Sales but the identity says Finance, inspect the mapping and processing before going on.

**Check:** The source account and mapped identity both show Sales without changing Lucas's identity ID or Manager.

**Screenshot:** `AR-025-03.png`: Lucas's identity Details showing Department=Sales after processing.

### 4. Observe the changed catalog

1. Reopen **SEG-Acme-Finance > Edit Segment > Define Segment**. Keep the criterion Finance; inspect the matching identities.
2. After the saved attribute/segment result reaches the catalog, refresh Acme Lucas's Request Center for himself.
3. Search both Finance profiles and the Finance Analyst role. They should be absent for Lucas while he is Sales.
4. Search AP-Remote-Worker; it remains visible. Repeat Liam's Finance/Remote Worker comparison as the unchanged outside-Finance control.
5. Run [native checks](../../M02-CHECKS.md#inspect-direct-ad-membership) for Lucas against GG-VPN-USERS and GG-ACME-BASELINE.

**Check:** Lucas no longer matches the Finance segment and loses its three catalog choices, but his existing VPN and baseline remain True. Do not change the segment to Sales.

**Screenshot:** `AR-025-04.png`: Lucas's Request Center search for AP-Finance-Reporting showing no matching item.

### 5. Restore Finance through the full HR file

1. Restore E012's department to Finance in the complete working file. If no other data changed during the exercise, you may use the saved complete backup; otherwise preserve newer records/edits and restore only E012's department in the latest complete file.
2. Verify row count, unique employee IDs/usernames, controlled emails and manager values are preserved. Reopen E012 to confirm Finance.
3. Upload that full restored file through **Acme HR > Account Management > Account Aggregation**.
4. Wait for aggregation and identity processing to finish. Confirm Finance first on the HR account, then on Lucas's identity.
5. Reopen the Finance segment and confirm Lucas matches again.
6. Refresh his Request Center until both Finance profiles and the role return; Remote Worker remains available. Follow [the propagation checks](../../M04-READINESS.md#wait-for-a-saved-change-to-reach-the-catalog) if the catalog lags the saved identity.
7. Recheck Lucas's native VPN and baseline, identity ID and Manager.

**Check:** The restored source value restores the intended visibility. The segment definition, population and pre-existing access remain intact.

**Screenshot:** `AR-025-05.png`: Lucas's Request Center search for AP-Finance-Reporting showing the item again after restoring Finance.

## Check the result

### If the result differs

| First mismatch | Inspect next |
|---|---|
| CSV changed but HR account did not | Uploaded filename, aggregation result and E012 row/header |
| HR account changed but identity did not | Department mapping source/attribute/transform and processing |
| Identity changed but segment membership did not | Saved criterion, exact mapped value and processing |
| Segment membership changed but catalog did not | Propagation, current session, other enabled segments and item requestability |
| Access changed unexpectedly | Native membership and request/activity/automatic-assignment evidence; catalog visibility alone does not explain deprovisioning |

### Explain the result

Where would you correct this case if Sales was an accidental HR value? Why would broadening the segment be the wrong repair?

<details>
<summary>Check your explanation</summary>

The incorrect value begins in the authoritative HR row. Correct that field in the complete HR file and verify each downstream stage. Changing the Finance segment to include Sales would hide the source error and broaden visibility for other Sales users.

</details>

### Final verification

- [ ] One department field was changed in a complete file with the current population preserved.
- [ ] CSV, source account, identity, segment and catalog were checked separately.
- [ ] Lucas is restored to Finance at every relevant stage.
- [ ] Manager, identity ID, baseline and direct VPN remain unchanged.
- [ ] The Finance segment and original request-on-behalf settings remain.
- [ ] The restored complete working file is retained for future imports.

## Finish

### Leave this in place

Lucas finishes in Finance. Keep the restored current HR file and private before/change/after evidence. If pausing while Sales is active, restore through Section 5 before moving on. [Identity processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html) · [Segment behavior](https://documentation.sailpoint.com/saas/help/requests/segments.html)

### Screenshots to capture

Save these five screens. Record the other checks in your journal.

| Filename | What to show |
|---|---|
| AR-025-01.png | Lucas's identity Details showing Department=Finance. Hide private email values. |
| AR-025-02.png | E012's row in the complete working CSV showing department=Sales. Hide private email columns. |
| AR-025-03.png | Lucas's identity Details showing Department=Sales after processing. |
| AR-025-04.png | Lucas's Request Center search for AP-Finance-Reporting showing no matching item. |
| AR-025-05.png | Lucas's Request Center search for AP-Finance-Reporting showing the item again after restoring Finance. |

[Previous: AR-024](../AR-024/README.md) · [Lab index](../README.md) · [Next: AR-026](../AR-026/README.md)
