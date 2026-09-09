# AR-087 · Reassign review work during an absence

**Before you start:** AR-086. Use Priya as the absent reviewer, Samuel as delegate and Taylor as recipient. Save existing work-reassignment settings.

## Test delegation without changing ownership

1. As administrator, open **Admin > Global > System Settings > Feature Settings > Other Features**. Record **Enable Work Reassignment** and enable it if necessary. Open Priya's identity and **Work Reassignment**. Record current settings and any existing delegate.
2. Configure the Access Requests work type to reassign to Samuel for a test period covering the current date. Use the documented start/end controls and save.
3. Keep Priya as AP-Remote-Worker's primary owner. Submit a fresh Taylor request and inspect the resulting task assignment and delegation evidence.
4. As Samuel, inspect and deny the request. Verify the decision actor and absence of a grant.
5. Restore or end the reassignment. Submit a fresh control and verify normal Priya routing returns; deny it.
6. Compare this with AR-072's owner change and one-off task reassignment. Record which configuration affects future work and which operation moved a particular existing task.

**Check:** The item remains owned by Priya while the configured work delegation is independently observable. Do not assume an email forwarding rule delegates an ISC approval.

If the reassignment is scheduled for later, record its effective window and wait for that window before calling the routing test passed.

**Reset:** Priya's original reassignment settings and global feature toggle restored; diagnostic requests resolved. Ending a reassignment does not automatically return previously moved tasks to Priya, so account for those separately.

[Work reassignment](https://documentation.sailpoint.com/saas/help/users/work_reassignment.html)

## Screenshots to capture

1. Reassignment work type, delegate and dates.
2. Samuel's task/decision with Priya still the owner.
3. Restored configuration and normal routing control.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-086](../AR-086/README.md) · [Course outline](../../README.md) · [Next: AR-088](../AR-088/README.md)
