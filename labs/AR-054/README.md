# AR-054 · Join request, approval and activity evidence

**Before you start:** AR-053. Use its saved request identifiers and the API workbench.

## Build an identifier map

1. Read Taylor's request status with `limit=2` and `offset=0`. Save the returned records and count.
2. Repeat with offsets 2, 4 and onward until a page is shorter than two. Combine the records; do not drop a page because its first item looks familiar.
3. Locate AR-053 and record the returned request, account-activity item and approval identifiers, along with each field name.
4. Read the associated activity using the appropriate activity ID from the request. Match source, recipient and item to the UI.
5. Create a fresh pending Remote Worker request, then read Priya's pending approvals with her own token. Locate the matching approval and compare its ID with the request ID.
6. Deny that fresh control and verify the pending-approval list changes while the historical request remains available.
7. Run the report script against the supplied fixture with `--fixture fixtures/request-status-pages.json --output` pointing to a new private file. Verify it contains three records across two pages.

**Check:** Your map uses the identifier expected by each operation. Request history and the current approval queue serve different purposes.

**Reset:** Diagnostic request denied; no new membership.

[Status and approval API reference](https://developer.sailpoint.com/redoc/sailpoint-api-v3-light.html)

## Screenshots to capture

1. Two API pages and the combined record count.
2. Identifier map connected to UI evidence.
3. Pending-versus-historical comparison and fixture output.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-053](../AR-053/README.md) · [Course outline](../../README.md) · [Next: AR-055](../AR-055/README.md)
