# AR-025 · Trace a wrong department into catalog visibility

**Before you start:** AR-024. Use your latest private complete HR file, not a partial import. On the first course pass it has 24 rows; after AR-047 it has 25. Record the current count and preserve it throughout this repeatable exercise.

## Introduce and repair the attribute fault

1. Save a private copy of the working HR file. Confirm Lucas's department is `Finance` in both the HR account and identity.
2. In a separate working copy, change only E012's department to `Sales`. Preserve every record in that saved working file, including Taylor if present, plus employee numbers and working email addresses.
3. Import through Acme HR using AR-001's account-import procedure. Complete processing and open Lucas's identity to verify the changed department.
4. Inspect the Finance segment's matching identities. Refresh Lucas's Request Center after the segment change takes effect and search for Finance access.
5. Compare the chain: CSV value, HR account value, mapped identity value, segment criterion and requester result. Identify the first incorrect value.
6. Restore the saved full HR file, import and process again. Verify Finance is restored at each point and the catalog returns.
7. Check Lucas's already-owned VPN access separately. Catalog visibility is not evidence of revocation.

**Check:** The source correction restores the mapped attribute and intended visibility without changing the segment to accommodate bad data.

If the identity remains unchanged, inspect the department mapping's selected source and processing result before editing the segment.

**Reset:** The starting HR record count is preserved; Lucas back in Finance; manager relationships and baseline role intact.

[Identity processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html)

## Screenshots to capture

1. Incorrect HR account and identity department.
2. Segment membership and missing requester result.
3. Restored department and Finance catalog.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-024](../AR-024/README.md) · [Course outline](../../README.md) · [Next: AR-026](../AR-026/README.md)
