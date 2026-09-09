# AR-032 · Test reminders, escalation and approval expiration

**Before you start:** AR-031. Use Production Support and Henry/Harper. Set aside later observation times for this lab.

For any actor whose ISC sign-in is not prepared, complete [AR-008’s additional-session procedure](../AR-008/README.md) before submitting or reviewing.

## Configure an observable schedule

1. Save the profile's approval settings and inspect **Admin > Global > System Settings > Feature Settings > Approval Settings**. Record Global, Access Requests and item-level overrides, including time zone.
2. Submit a Henry request before changing anything; label it `AR-032 before`. Keep it pending.
3. On the Production Support item, configure an approval timeout of 2 days, one reminder starting after 1 day, and a daily schedule/time zone you can observe. Enable Escalations, set Days After the Request to Start Escalation to 1, choose Daily and a recorded time, then open Edit Approvers. Add Reviewer Category Identity and select Samuel (`acme.e024`); save. Select a valid lab fallback approver and record it. Set the page time zone and check both schedule previews before saving. This direct-review timeout expires the request; the separate workflow Action at Timeout field is introduced in AR-058.
4. Submit Harper's request with label `AR-032 after`. Record its creation time and the expected reminder, escalation and timeout boundaries from the saved configuration.
5. At each boundary, inspect Approval Management, the assignee's queue and the controlled mailbox. Record actual delivery/assignment times. A preview proves configuration only, not notification delivery.
6. After timeout, record the approval outcome and prove no Production Support membership was granted. Do not confuse this with expiration of access that was previously granted.
7. Compare the earlier request with the later one. Pending requests retain the configuration in effect when submitted.

**Check:** The later request follows its saved settings, and your journal separates configuration, notification, assignment and decision evidence. Keep the timed checks open until observed; do not invent elapsed results.

**Reset:** Restore the saved item settings, then cancel remaining pending diagnostic requests. A restored configuration does not cancel them automatically.

[Current approval settings](https://documentation.sailpoint.com/saas/help/requests/config_approval_settings.html)

## Screenshots to capture

1. Effective settings and schedule preview with time zone.
2. Before/after request IDs and reminder/escalation evidence.
3. Timeout outcome and absent target membership when observed.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-031](../AR-031/README.md) · [Course outline](../../README.md) · [Next: AR-033](../AR-033/README.md)
