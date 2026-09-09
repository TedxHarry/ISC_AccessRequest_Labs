# AR-053 · Submit and track an API request

**Before you start:** AR-052. Use Taylor, AP-Remote-Worker and authorized requester credentials. Taylor starts without that assignment.

## Run one submission

1. Read Taylor's identity and the profile by ID. Verify their names and source. Set `recipientId` and `itemId` in the private client environment.
2. Read Taylor's request history and current assignments to exclude an existing grant or pending duplicate.
3. Create the POST request from the API workbench. Set the comment to `AR-053: Taylor Remote Worker control`. Send once and record HTTP status, response and submission time.
4. Read status for Taylor and locate the item using the recipient, profile, comment and time. Record its accessRequestId and accountActivityItemId without assuming they are interchangeable.
5. Have Priya approve through the UI. Read status again and follow the matching account activity.
6. Check Taylor's native VPN and Remote Users memberships. Compare API acceptance, approval and actual fulfillment times.
7. Remove Taylor's test profile using the lab desk procedure and verify removal.

**Check:** A successful submission is followed through to a proven account change. If the response is empty, discover the result through the status query rather than resending immediately.

**Reset:** No new Remote Worker assignment remains for Taylor; keep sanitized request/response examples in the journal.

[Submit request](https://developer.sailpoint.com/docs/api/v3/create-access-request/)

## Screenshots to capture

1. Sanitized POST body and acceptance response.
2. Matching status record and activity identifiers.
3. Target memberships and removal result.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-052](../AR-052/README.md) · [Course outline](../../README.md) · [Next: AR-054](../AR-054/README.md)
