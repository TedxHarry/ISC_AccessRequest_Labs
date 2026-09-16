# AR-078 · Fulfill and reconcile a disconnected application

In this lab, you'll request Reader access for Lucas, fulfill it manually as Samuel, import the updated application register and repeat the process for removal.

## Before you start

Complete [AR-047](../AR-047/README.md) and the entitlement grant/removal exercise in [AR-019](../AR-019/README.md). Use Acme Admin, Lucas (`acme.e012`), Taylor (`acme.e025`) and Samuel (`acme.e024`). Samuel needs a working ISC session; prepare it with [the registration procedure](../../labs/AR-029/README.md#1-prepare-the-five-sessions-and-check-henry) if needed. Preserve all HR rows and controlled addresses.

You need permission to create a Delimited File source and a private folder for a CSV. SoD and approval workflows are not required. This lab creates a separate source and two source accounts; it does not create identities or AD accounts. Open your [journal](EVIDENCE.md).

## Follow the steps

### 1. Create the application's register

1. In your private evidence folder, create `Acme-Disconnected-Reports.csv` as UTF-8 plain text with the exact content below. Keep its full path in your journal. Use a text editor so blank cells and leading identifiers are preserved.
2. Treat this file as the simulated application's current access register. A manual fulfillment changes this file. An ISC request does not write it automatically. Keep it separate from every Acme HR file.

```csv
accountId,userName,employeeNumber,groups
D012,acme.e012,E012,
D025,acme.e025,E025,Reader
```

3. Verify four headers, two distinct account IDs, Lucas with an empty groups cell and Taylor with Reader. Save a starting copy named `AR-078-before.csv`; do not import that old copy after fulfilling a change.
4. In **Admin > Identity Management > Identities**, confirm Lucas E012 and Taylor E025 already exist and their Employee Number values are unique. Record their identity IDs and current source-account count. Record the tenant identity count for comparison after import.

**Check:** Taylor supplies one existing Reader value for discovery. Lucas begins without it; neither row belongs in Acme HR.

### 2. Configure the separate source and correlate its accounts

1. As Acme Admin, open **Admin > Connections > Sources > Create New**. Select **Delimited File**, name `Acme Disconnected Reports`, description `Two-account manual fulfillment exercise`, and source owner Samuel (acme.e024). Save. On a repeat run, inspect and reuse only this course source rather than creating a duplicate.
2. Keep it a flat-file source. Do not select a direct connector or service-desk integration, make it authoritative, or attach it to an identity profile. Record its source ID and Samuel's identity ID.
3. Under **Source Setup > Parsing Settings**, use a comma delimiter and a header row. Under **Account Management > Account Schema**, use **Add New Attribute** for the exact four CSV headers and type String. Set `accountId` as Account ID and `userName` as Account Name through Edit Schema. Leave employeeNumber unflagged. Mark `groups` as Entitlement; this exercise uses one value per account, so leave Multi-Valued off. Save and reopen. Remove unused defaults only on this new unaggregated source.
4. Open **Account Management > Account Correlation**. Add the mapping **Identity Attribute: Employee Number (identificationNumber)** to **Account Attribute: employeeNumber**. Save. This links the D012/D025 source accounts to the existing E012/E025 identities.
5. Open **Account Management > Account Aggregation** and upload the complete current two-row file. Confirm the preview/header mapping and start the import. Wait for the result; require two accounts scanned and investigate any skipped row/error.
6. Open each identity's **Accounts** tab. Verify exactly one account from Acme Disconnected Reports: Lucas D012 and Taylor D025. Verify no new identities appeared. Lucas's groups is empty and Taylor's is Reader. If either account is uncorrelated, inspect the source's Uncorrelated Accounts, exact employeeNumber values and correlation mapping; correct that source and reimport before requesting access.
7. Under **Admin > Access Model > Entitlements**, filter to this new source. Open Reader and record its ISC ID, attribute `groups` and native value `Reader`. If absent, inspect the entitlement flag and successful Taylor row import before proceeding. Save `AR-078-01.png` with source, schema, correlation and the two linked accounts.

**Check:** The new source is non-authoritative and uses existing identities. [Account imports](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html), [account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html)

### 3. Enable requests and inspect the manual grant

1. Open Reader's **Actions > Edit**. Set primary owner Samuel. Under **Access Requests**, turn on Allow Access Requests and Require Approval, choose Reviewer and add Primary Owner. Require a comment when the user requests access. Turn on Require Approval for Removal and add Primary Owner there too. Leave request form and required end date off. Save/reopen. Keep direct review for this exercise and course developer subscriptions disabled.
2. As Lucas, open **Request Center > Access Items > Entitlements**. Search Reader, verify source Acme Disconnected Reports and select account D012 if prompted. Enter `AR-078 Reader manual grant`, then **Save > Review Request > Submit Request**. Record its ID in My Requests.
3. As Samuel, open **Approvals > Access Requests > Requested**. Verify Lucas, Reader and the disconnected source, then approve with `AR-078 Reader approved for lab`.
4. Still as Samuel, open **Task Manager**, select the generated task and use **Show Details** where available. Match Lucas/D012, source, attribute groups and the requested Reader value. Record task ID, requested operation, assignee and linked request information. It should add Reader to an existing account, not create another account. Save `AR-078-02.png` before completing it.
5. If no task appears, inspect the request's current stage and Account Activity; verify source owner Samuel and no service-desk integration. Refresh Samuel's task list. Do not submit another request to force a task. If it requests account creation, resolve the missing account correlation first and record the original request's disposition.

**Check:** Approval authorizes the change. The source owner still has manual work to perform. [Flat-file provisioning](https://documentation.sailpoint.com/saas/help/provisioning/index.html)

### 4. Make the change, import it and complete the task

1. Before editing the register, inspect Lucas's imported D012 account and record what ISC currently shows. Then edit only Lucas's groups cell to Reader in the current register; preserve Taylor's row. Save the full file with these two records:

```csv
accountId,userName,employeeNumber,groups
D012,acme.e012,E012,Reader
D025,acme.e025,E025,Reader
```

2. This saved change is the manual target action. Record its time. Inspect ISC again before import and record the observed view, even if it already reflects an optimistic update. Do not treat an ISC display as proof that someone changed the register.
3. From Samuel's task, upload the complete updated CSV when the task offers the upload control; the upload starts aggregation. If your UI has no upload control, have Acme Admin open **Connections > Sources > Acme Disconnected Reports > Account Aggregation** and upload the same full file. Record which route you used and wait for successful aggregation.
4. Inspect Lucas D012 and Taylor D025 on the identities' Accounts tabs. Require Reader on both, two source accounts and no new identities. Return to Samuel's task, add `AR-078 D012 Reader added; updated register imported` if a comment field is offered, and select **Mark Complete**. Confirm it appears under **Completed**. If reconciliation has already completed the task, record that state instead of creating another task.
5. Inspect Lucas's request and matching Account Activity. Record request, task, register-change and aggregation timestamps separately. Save `AR-078-03.png` with final register and imported result.

**Check:** The register and imported account agree before the task is closed. SailPoint documents that marking complete without a subsequent aggregation can generate another work item after 24 hours; do not use completion as a replacement for importing the change. [Task completion and reconciliation](https://documentation.sailpoint.com/saas/user-help/task_manager.html)

### 5. Remove Reader through the same manual process

1. As Lucas, open **My Access > Entitlements**, select Reader on Acme Disconnected Reports, inspect D012, then **Assignment > Revoke Assignment**. Enter `AR-078 Reader manual removal` and submit. Record the new request ID separately from the grant.
2. Samuel approves the matching Remove request in Approvals, then opens the new Task Manager work item. Verify it removes Reader from groups on D012. Do not act on Taylor D025 or select Delete Account. Save `AR-078-04.png`.
3. In the current register, clear only Lucas's groups value while keeping the trailing comma. Preserve Taylor Reader. The full file must match the two data rows in Section 1. Record the change time and save.
4. Upload this complete current file through the task's upload control or the same source's Account Aggregation. Wait for success and inspect both linked accounts. Require Lucas without Reader, Taylor with Reader and both accounts retained.
5. Samuel marks the removal task complete after reconciliation, with `AR-078 D012 Reader removed; updated register imported` where comments are available. Verify Completed and the request/activity result. Check Lucas's requested Reader assignment is gone. Save `AR-078-05.png`.
6. If Reader remains, compare the actual uploaded file/path, source ID, successful aggregation and D012 value. If the register is correct but the imported value remains, keep the task unresolved while investigating source parsing/reconciliation. Do not repeatedly submit removal or delete the account to make the entitlement disappear.

**Check:** Grant and removal each have a business decision, manual target action, successful import and task evidence.

### 6. Leave the source ready for later reconciliation practice

1. Verify the current register still has exactly D012 with blank groups and D025 with Reader. Retain both correlated accounts and Samuel as source owner. Keep the schema and correlation settings; leave the source outside identity profiles.
2. Turn off requestability for Reader and save. Keep its owner and direct grant/removal configuration recorded. Confirm no actionable course task or unresolved Reader request remains; record anything unresolved as Pending with its ID and next check.
3. Save `AR-078-06.png` with final account values, task states and disabled requestability. Preserve Lucas's AD VPN, Taylor's existing AD account and the complete private HR file; this exercise does not change them.

**Check:** The final register is the current source of truth for this simulated application, not an HR import file.

## Check the result

Lucas receives Reader through approved manual fulfillment and then loses it through a separate reviewed removal. Each change is imported and checked before task completion. Taylor retains Reader and both source accounts remain correlated to existing identities.

## Finish

Keep the current two-row register, source/account/entitlement IDs and both task histories. Reader stays non-requestable, Lucas lacks Reader and Taylor retains it. Keep this file separate from Acme HR and record any unresolved work before continuing.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-078-01.png | Separate source, schema, correlation and two existing identities |
| AR-078-02.png | Approved request and uncompleted manual grant task |
| AR-078-03.png | Updated register, successful import and completed grant |
| AR-078-04.png | Separate removal review and correct D012 work item |
| AR-078-05.png | Manual removal, reconciliation and completed task |
| AR-078-06.png | Final register/accounts, requestability and pending-work check |

[Previous: AR-077](../AR-077/README.md) · [Course outline](../../README.md) · [Next: AR-079](../AR-079/README.md)
