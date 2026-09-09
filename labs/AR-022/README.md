# AR-022 · Restrict Finance catalog visibility

**Before you start:** C03. Lucas is Finance; Liam is IT. Both need their own requester session.

## Configure the segment

1. Record the current visibility of the Finance profiles and role in both sessions.
2. Open **Admin > Access Model > Segments > New**. Name the segment `SEG-Acme-Finance` and describe its requester scope. Save.
3. Edit the segment. Under **Define Segment**, select the mapped identity attribute `department` and value `Finance`. Save and inspect the matching identities. Lucas and Olivia should match; Liam should not.
4. Under **Define Access**, add `AP-Finance-Reporting`, `AP-Finance-AP` and `ROLE-Finance-Analyst`. Save, review and enable the segment.
5. Wait for the configuration to take effect, then refresh both requester sessions. Compare the three items, not just the application name.
6. Confirm Liam can still find the unsegmented Remote Worker profile. This is the control that distinguishes restricted Finance items from a broken catalog.

**Check:** Finance items are visible to Lucas and absent for Liam; unsegmented requestable access remains available. Record any other segment that grants visibility to the same items before diagnosing a mismatch.

**Leave enabled:** The Finance segment is used in AR-023–025. It controls the requester who can see the item; it does not establish the recipient's business eligibility.

[Segment behavior and setup](https://documentation.sailpoint.com/saas/help/requests/segments.html)

## Screenshots to capture

1. Segment criterion and matching population.
2. The three included access items and enabled state.
3. Lucas/Liam catalog comparison with Remote Worker control.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-021](../AR-021/README.md) · [Course outline](../../README.md) · [Next: AR-023](../AR-023/README.md)
