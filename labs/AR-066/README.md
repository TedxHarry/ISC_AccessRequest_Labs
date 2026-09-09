# AR-066 · Add an additional reviewer dynamically

**Before you start:** AR-065. Keep the Submitted subscription disabled so this case isolates Dynamic Approval.

## Add a final reviewer

1. Set the subscriber's `reviewer` object to Evelyn's actual identity ID, display name and type `IDENTITY`.
2. Create a filtered HTTP subscription for **Access Request Dynamic Approval** to `/dynamic`, synchronous response, using the workbench authentication and the same isolated profile filter.
3. Test the filter, enable the subscription and submit a matching request.
4. Complete the profile's normal approval. Verify the additional review appears for Evelyn. Record where it falls in the request process.
5. Have Evelyn approve and verify membership. Remove the assignment.
6. Set `dynamic: none` in the mode file and submit a fresh case. Inspect the documented empty additional-review response and confirm no extra Evelyn step is added.
7. Resolve the control and disable the subscription. Restore `dynamic: reviewer` in the file.

**Check:** The response identifies a real identity or governance group, and the added review is observed after the configured reviews. Do not use a display name as the reviewer ID.

**Challenge:** Use GOV-Security-Review's ID and type `GOVERNANCE_GROUP` for another isolated control. Compare the group's review with an individual review, then disable the subscription.

[Dynamic Approval contract](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval/)

## Screenshots to capture

1. Filtered subscription and sanitized reviewer response.
2. Normal review followed by Evelyn's additional step.
3. No-additional-review control and final disabled state.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-065](../AR-065/README.md) · [Course outline](../../README.md) · [Next: AR-067](../AR-067/README.md)
