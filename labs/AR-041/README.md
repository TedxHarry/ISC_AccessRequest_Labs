# AR-041 · Observe future provisioning and scheduled removal

**Before you start:** AR-040 and future-start capability available. Choose a test window you can actually observe; Henry starts without this access.

## Follow the timeline

1. Choose a future start at least one hour ahead and an end two hours after that start, within the 7-day maximum. Write the local and UTC times in the journal. These are access-policy values, not a course-duration estimate.
2. As Henry, request Production Support using those dates and complete the form. Approve through both stages before the start.
3. Record the approved assignment and run the native membership check before the start. Membership should still be absent.
4. At or after the start, inspect the provisioning activity and repeat the same AD check until the operation completes or a specific error is reported. Record actual time separately from the scheduled time.
5. After the end, follow the removal activity and verify native membership disappears. Reconcile the ISC account view if necessary.
6. On a second future assignment, use **My Access** to request a later start with a shorter duration. Capture the modification and configured removal-review behavior. Compare a fresh Request Center re-request with altered dates, which uses the add-access review flow. Resolve both cases and remove any remaining test assignment.

**Check:** Evidence shows absence before start, presence during the window and absence after completed removal. Leave unobserved boundaries open in the journal until you check them.

If access appears early, capture the selected start, assignment, request and activity IDs. If it remains after the end, inspect overlapping assignments before claiming scheduler failure.

[Start dates and amendment routing](https://developer.sailpoint.com/discuss/t/new-capability-start-date-in-access-requests/206094)

## Screenshots to capture

1. Requested and approved dates with time zones.
2. Before-start, active-window and after-removal AD checks.
3. Date-change review and actual operation timestamps.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-040](../AR-040/README.md) · [Course outline](../../README.md) · [Next: AR-042](../AR-042/README.md)
