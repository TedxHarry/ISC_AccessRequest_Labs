# AR-062 — Repair a workflow that is not invoked

In this lab, you'll compare a working workflow review with a direct review, restore the workflow association, and prove the repair with a new request.

## Before you start

Complete [AR-061](../AR-061/README.md), including its restoration steps, or record why Finance enforcement was not accepted and leave its original policies in place. Use the working WF-Acme-AR058 control, Acme Admin, Henry, Ava and AD verification. Henry has no Production Support access or unresolved request. Keep your [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Prove the working association first

1. Open **Admin > Access Model > Access Profiles > AP-Production-Support > Edit > Access Requests**. Record this profile's ID and its grant Workflow selection, WF-Acme-AR058. Check removal still uses Primary Owner/Ava and preserve the form/date settings.
2. Open **Admin > Workflows > Manager**, then WF-Acme-AR058. Record its ID, Enabled status and Access Request Submitted trigger. Its policy should still be Single/Manager. Save `AR-062-01.png` with both the profile selection and workflow details.
3. As Henry, follow only steps 1–2 of [AR-058's submission section](../AR-058/README.md#3-submit-a-complete-request-and-inspect-its-execution). Use reason `AR-062 before repair control`, ticket `CHG-LAB-062-A` if required, and valid current form/date values. Stop after submission; do not follow that section's approval instruction.
4. Open WF-Acme-AR058's **Executions**, refresh, and match the new run by time, Henry's requestedFor ID and the profile's requestedItem ID. Record its execution and accessRequestId. Open **Admin > Dashboard > Approval Management > Access Requests** and inspect the matching process and Ava assignee.
5. As Ava, open **Approvals > Access Requests > Requested**, inspect that Grant, choose Deny, enter `AR-062 control observed`, and confirm. Verify the request is denied and Henry's GG-PROD-SUPPORT membership is False. Use the [native membership check](../../M02-CHECKS.md#inspect-direct-ad-membership); baseline must remain True.

**Check:** You have a current positive control for invocation. The request is resolved before the association changes.

### 2. Make and observe one controlled association change

1. Return to Production Support's **Edit > Access Requests**. Keep grant approval required, change its approval type from Workflow to direct reviewers, and select Manager as the only grant reviewer. Save and reopen. Leave WF-Acme-AR058 enabled. Preserve removal/form/date settings.
2. As Henry, submit a fresh request using the same submission steps, reason `AR-062 direct review test` and ticket `CHG-LAB-062-B` if required. Record its new ID and submission time.
3. Inspect this request in Approval Management. Open Ava's review and verify its reason and recipient. Leave it pending while you inspect the workflow history.
4. Refresh WF-Acme-AR058's Executions and search the interval containing this submission. Open candidate runs and compare requestedItem/requestedFor IDs, request ID and time. Do not mistake the earlier control for this request. Record that the item now selects a direct Manager review and no matching execution has been found. Save `AR-062-02.png`.
5. As Ava, deny this matching direct review with `AR-062 direct path observed`. Verify denial and Support False. Do not disable the workflow or change its trigger to manufacture a second fault.

**Check:** The direct approval and saved item configuration explain the route. A temporarily empty execution list alone would not establish that cause.

### 3. Restore the association and prove a fresh invocation

1. Change Production Support's grant approval back to **Workflow > WF-Acme-AR058**. Save and reopen the exact profile. Verify the workflow remains Enabled and the trigger remains Access Request Submitted.
2. Submit as Henry with reason `AR-062 restored association`, ticket `CHG-LAB-062-C` if required, and fresh valid dates. Open the matching new execution and verify recipient, item and request identifiers.
3. Inspect the process and Ava's task. As Ava, deny with `AR-062 repair verified`. Confirm the policy returned a denied decision, the request is terminal and native Support remains False/baseline True. Save `AR-062-03.png`.
4. In the journal, put the three requests side by side: before-control, direct-review test and restored-control. Record the saved approval type, workflow ID, execution ID or no matching execution found, reviewer and outcome for each.
5. If the repaired request still has no matching execution, recheck its actual item ID against the edited object, the saved association, Enabled status and native trigger. Preserve the fresh request and configuration evidence. Mark the repair Pending instead of treating the old control as proof.

**Check:** A new request demonstrates the repair. Existing requests keep their original routing; changing the profile is not an in-flight retry.

## Check the result

The two workflow controls have their own matching executions. The request submitted while direct Manager review was selected follows that direct route. All three are denied without granting Support, and the final saved association is WF-Acme-AR058.

## Finish

Keep WF-Acme-AR058 enabled and selected for Production Support. Verify no diagnostic review, scheduled grant or removal is outstanding and Henry remains clean. Leave Finance's recorded AR-061 policies unchanged. Preserve the three-request comparison for later investigations.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary identity details. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-062-01.png | Working profile association and enabled native workflow |
| AR-062-02.png | Saved direct-review setting, matching task and execution-history comparison |
| AR-062-03.png | Restored association, fresh execution, denial and native absence |

[Previous: AR-061](../AR-061/README.md) · [Course outline](../../README.md) · [Next: AR-063](../AR-063/README.md)
