# Processing and Recovery

Follow the current request or job before starting another one. A saved configuration, a finished review and a completed target change are different results.

| What you are waiting for | Where to check | Ready to continue when | If it fails or remains pending |
|---|---|---|---|
| HR or AD aggregation | The source's aggregation result/history | The intended run finished, its errors/skipped records are understood, and the named account contains the expected values | Inspect that run's error and the actual input, scope or connection. Correct the demonstrated cause before another import. Use the complete current file for file sources. |
| Identity processing | **Admin > Dashboard > Monitor**, Active Jobs | Processing has finished and the named identity has the expected mapped value | Compare the source account with the identity mapping and inspect the job. An unchanged source account needs an import correction before an identity refresh can help. |
| Approval | The matching request's **Process** and **Assignees** | The actual required reviewers have acted or the intended denial is terminal | Identify the current reviewer and saved policy. A pending review is not proof of an AD failure. Inspect an older task separately after changing an owner or policy. |
| Provisioning | The matching Account Activity's source operation | Its actual result is understood and the same native account/group shows the intended change | Read the exact operation error. Inspect only the relevant target permission, native reference or connection. Do not submit another grant to hide an unresolved one. |
| Imported access after a native write | Native AD check, then the source account after completed aggregation | The current target and imported result agree | Compare timestamps and the exact account/group DNs. Refresh imported data using the lab's aggregation procedure; do not change a correct native group merely to repair a stale view. |
| Scheduled activation or expiry | Effective dates/time zone, request/activity, then the target at the boundary | The real time boundary has passed and the expected native result is observed | Check the schedule and current stage. A configured end date does not prove that removal already happened. |

For Account Activity, current product guidance uses **Admin > Identity Management > Activities**. Some tenant layouts expose the **Account Activity** tab through **Search**. Use the available route to the same activity records, then match the recipient, source, account, item and time. [Monitoring provisioning](https://documentation.sailpoint.com/saas/help/provisioning/tracking.html)

There is no fixed completion time supplied by this course. Reopen the current job or request to inspect progress. If it remains unresolved, preserve its ID, actual status and error for the administrator rather than repeatedly submitting new work.

## Resume without duplicating work

1. Find the existing job/request named in the lab, including any action completed before the break.
2. Check the current assignment and native state. Distinguish completed work from a future schedule or unfinished review.
3. Resume the first incomplete action. Repeat a successful submission only when a separate fresh control is explicitly required.
4. Restore the lab's temporary settings. Preserve later legitimate identities, accounts, assignments and unrelated configuration.

[Identity processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html#monitoring-identity-processing) · [Find the matching activity](LAB-DESK.md#find-the-account-activity) · [Troubleshooting Practice](../troubleshooting/README.md)
