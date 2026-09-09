# AR-072 · Change an owner without losing pending work

**Before you start:** AR-071. Use Remote Worker, Priya and Samuel. Save the original owner/reviewer settings.

## Compare existing and new requests

1. Submit a Taylor Remote Worker request with primary-owner review. Confirm Priya is assigned and leave it pending.
2. Change the profile owner to Samuel and save. Do not edit the existing request yet.
3. Submit a separate request for Liam, who must start without Remote Worker. Inspect the resolved reviewer for this fresh request.
4. Compare the existing Priya assignment with the new Samuel assignment. Record actual pending behavior rather than assuming ownership edits migrate tasks.
5. Reassign the old pending task to Samuel through Approval Management if the business handover requires it. Include a comment and inspect the audit trail.
6. Deny both diagnostic requests. Restore Priya as owner and submit/deny one fresh control to prove normal routing.
7. Save a change record with before/after values, affected pending IDs, test results and rollback steps.

**Check:** The owner change and the treatment of already-pending work are both accounted for.

**Reset:** Priya restored, original review policy preserved and no diagnostic request remains pending.

[Approval administration](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html)

## Screenshots to capture

1. Old request and original owner.
2. New owner/new request comparison and reassignment audit.
3. Restored owner and change record.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-071](../AR-071/README.md) · [Course outline](../../README.md) · [Next: AR-073](../AR-073/README.md)
