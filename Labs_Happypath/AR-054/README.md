# AR-054 · Map request, approval and activity identifiers

In this lab, you'll read every page of Taylor's request history, connect a pending approval to its parent request, and compare live records with a small reporting fixture.

## Before you start

Complete [AR-053](../AR-053/README.md) and keep its labelled IDs. Taylor has no Remote Worker assignment or pending request. Use the three API environments, Taylor/Priya ISC sessions and the AD workstation. Have Python 3 available for the fixture; the [workbench setup](../../API-WORKBENCH.md#open-the-correct-folder-and-run-the-fixture-first) explains how to check it. Open your [journal](EVIDENCE.md).

## Follow the steps

### 1. Read all pages without starting another request

1. Select Acme API Taylor. Send **GET `{{apiBase}}/access-request-status/v1`** with Params `requested-for={{recipientId}}`, `limit=2`, `offset=0`, `sorters=created,accountActivityItemId`, `count=true`. Save the response privately and record the row count and X-Total-Count header when returned.
2. Keep every parameter unchanged except offset. If two rows returned, request offset 2, then 4 and onward. Stop when a page has fewer than two rows. A full last page still requires one more read, which can be empty.
3. Combine the pages in your private evidence notes. Record page offsets/counts and locate the AR-053 Grant and its separate removal. Use created time, request type and requester comment; the same profile name appears in more than one request.
4. Avoid submissions or decisions while collecting these pages. If records changed during paging, repeat after the controls settle and record that limitation. A count header is a useful comparison, not proof of a frozen snapshot. Save `AR-054-01.png`.

**Check:** Your history includes every returned page. An error response is not an empty final page.

### 2. Build the identifier map from the AR-053 record

1. Copy the fields below from the matching status record into the journal, preserving their field names. Leave an absent field labelled Not returned.

| Field | Use in this module |
|---|---|
| Status `id` | Record identifier; retain as labelled, without assuming it is the parent |
| Status `accessRequestId` | Candidate parent account activity/identity-request tracking ID; verify with the parent GET |
| Status `accountActivityItemId` | Child item inside that activity |
| Status `approvalIds[]` | Associated approval identifiers, when returned |
| Pending approval `id` | Approve/reject path parameter |
| Profile `id` | Requested access object; used in requestedItems |

2. Select Acme API Admin, set `activityId` from that status `accessRequestId` and send **GET `{{apiBase}}/account-activities/v1/{{activityId}}`**. Check returned `id`, `targetIdentitySummary`, creation time and `items` against Taylor and AR-053. Find the child item ID within `items` when present. Save `AR-054-02.png`.
3. If the parent cannot be verified, use the UI activity lookup from AR-053 and record the discrepancy. Do not strip hyphens, exchange IDs or guess a relationship to make a mutation work.

**Check:** Each ID is connected to the object that owns it. The source field and successful read establish its use, not its length or appearance.

### 3. Create one pending review and compare the queues

1. Select Acme API Taylor. Set `requestTag` to `AR-054 pending approval map` with a unique run suffix if repeating. Reuse the AR-053 POST body to **`{{apiBase}}/access-requests/v1`** and send once. Leave it awaiting Priya.
2. Select Acme API Priya. Send **GET `{{apiBase}}/access-request-approvals/v1/pending`** with Params `owner-id=me`, `limit=50`, `offset=0`, and `filters=requestedFor.id eq "{{recipientId}}"`. Enter the filter in Params so Postman encodes it. Read further pages if necessary.
3. Select the record with Taylor as requestedFor, Priya as owner, Remote Worker as requestedObject and your AR-054 comment/time. Record its `id` as `approvalId`, and its `accessRequestId` separately. Compare with the status record's parent/approval fields and Priya's visible UI work item. Save `AR-054-03.png` before acting.
4. In Priya's ISC session, open **Approvals > Access Requests > Requested**, inspect the matching AR-054 Grant, choose **Deny**, enter `AR-054 mapping captured; no grant needed`, and confirm.
5. Read Priya's pending queue again. That approval should leave the queue after processing. Read Taylor's status history: retain the rejected historical record and actual final state. Verify VPN and Remote Users remain False. Do not deny another pending request because it has the same profile name.

**Check:** The pending queue describes work still awaiting a decision. History preserves the outcome after that work leaves the queue.

### 4. Run the small reporting fixture

1. Follow [Open the correct folder and run the fixture first](../../API-WORKBENCH.md#open-the-correct-folder-and-run-the-fixture-first). Use the course repository root, confirm both file paths, create the private evidence folder and run the exact fixture command there.
2. Expect three output records across two supplied pages. Open `fixtures/request-status-pages.json` and compare its two rows on page one with its one row on page two. The fixture is synthetic and deliberately small; its IDs are not tenant IDs.
3. Verify the states include REQUEST_COMPLETED, REJECTED and EXECUTING. These describe three sample records, not the outcome of your live AR-054 request. Save `AR-054-04.png` with the fixture command/count and the live rejected-request/native-absence comparison.

**Check:** The script reads both fixture pages without authenticating or making tenant changes.

## Check the result

The journal connects a verified parent activity, its item and a matching approval. Paging retains all returned records, the diagnostic review is rejected without a grant, and the fixture produces three rows.

## Finish

Leave the AR-054 request rejected, Taylor's groups absent and no diagnostic approval pending. Keep the private identifier map and fixture output for AR-055–057. Do not overwrite the AR-053 evidence when collecting a newer record.

### Screenshots to capture

Capture these beside the matching steps. Hide token values and secrets. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-054-01.png | Pages, offsets and combined count |
| AR-054-02.png | Parent activity and child-item mapping |
| AR-054-03.png | Matching Priya pending approval and subsequent rejection |
| AR-054-04.png | Fixture three-row result and final native absence |

[Previous: AR-053](../AR-053/README.md) · [Course outline](../../README.md) · [Next: AR-055](../AR-055/README.md)
