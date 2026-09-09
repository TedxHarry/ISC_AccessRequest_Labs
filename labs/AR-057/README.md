# AR-057 · Produce a repeatable request report

**Before you start:** AR-056 and Python 3. Use the read-only script in the API workbench.

## Build the handover

1. Run the script with the supplied fixture and a new output filename. Confirm all three records are included, not only the first two.
2. Run it live for Taylor using your tenant API base and Taylor's identity ID. Enter a current token at the hidden prompt. Keep the output in a private evidence folder.
3. Compare the report with the UI and the request IDs from AR-053–056. Account for pagination, ignored duplicates and the distinction between current approvals and historical requests.
4. Make a concise table of request ID, item, creation time, state and next action. Link unresolved items to their activity/error evidence.
5. Run the same command for another permitted recipient using a different output filename. Confirm the recipient filter changed the results.
6. Save C09 with the command, API version, token owner/permissions, sanitized example, report location and interpretation. Do not include the token.

**Pass when:** Another engineer can run the report for a permitted identity, explain the output and identify requests needing action without the script making any tenant changes.

**Reset:** Retain private reports; remove secrets from any shareable copy. An empty result is valid only after verifying the filter and caller permissions.

[API workbench and script](../../API-WORKBENCH.md)

## Screenshots to capture

1. Fixture result with three records.
2. Live report count and matching UI requests.
3. Sanitized operational table and C09 record.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-056](../AR-056/README.md) · [Course outline](../../README.md) · [Next: AR-058](../AR-058/README.md)
