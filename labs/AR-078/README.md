# AR-078 · Fulfill and reconcile a disconnected application

**Before you start:** AR-047 plus working entitlement request/removal controls. SoD and native workflows are not prerequisites. Use a separate non-authoritative source, Lucas and Taylor. Samuel owns the manual work.

## Create the small application register

1. Create a private CSV with columns `accountId,userName,employeeNumber,groups`. Add rows `D012,acme.e012,E012,` and `D025,acme.e025,E025,Reader`. This file is the simulated application's authoritative access register for this exercise, not the HR source.
2. Create a new **Delimited File** source named `Acme Disconnected Reports`, owner Samuel. Do not make it authoritative or attach it to an identity profile.
3. Configure its account schema to match the CSV: accountId as Account ID, userName as Account Name, employeeNumber as string, and groups as a string entitlement attribute. Use a multivalued groups attribute with the connector's delimiter setting if you plan to store multiple values; this lab uses one value per account.
4. Configure correlation: identity `identificationNumber` equals source `employeeNumber`. Import both rows and verify the accounts link to Lucas and Taylor without creating new identities.
5. Inspect the discovered Reader entitlement, set Samuel as its owner and make it requestable with owner review. If Reader is not present, inspect the groups entitlement schema and the import result before continuing.

## Separate completion from reconciliation

1. Request Reader for Lucas and approve as Samuel. Open Samuel's **Task Manager** and inspect the generated manual work item.
2. Before completing it, update Lucas's row in the application's private register to `Reader`. This represents the actual manual target change. Complete the work item with a comment recording that change.
3. Compare the request/task state with ISC's account data before import. Then import the complete two-row register and verify Lucas's Reader entitlement is reflected.
4. Request removal for Lucas. Complete review, update the register to remove Reader, complete the manual task and re-import. Verify both the register and ISC agree.

**Check:** An approval, a completed manual task and reconciled account data are distinct evidence. No direct connector changed this CSV for you.

**Reset:** Lucas has no Reader access; Taylor's seed Reader row remains. Keep the two-account source for reconciliation practice and do not import this file into Acme HR.

[Manual provisioning](https://documentation.sailpoint.com/saas/help/provisioning/index.html), [File imports](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html)

## Screenshots to capture

1. Non-authoritative source, schema and correlated accounts.
2. Manual grant/removal tasks and private register changes without personal data.
3. Account state before and after reconciliation.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-077](../AR-077/README.md) · [Course outline](../../README.md) · [Next: AR-079](../AR-079/README.md)
