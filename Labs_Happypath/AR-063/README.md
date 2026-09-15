# AR-063 — Send a notification that reflects the real decision

In this lab, you'll send a message based on the approval policy's actual decision, compare it with access fulfillment, and save the Module 10 handover.

## Before you start

Complete [AR-062](../AR-062/README.md). WF-Acme-AR058 is enabled and attached; Henry has no Support access or pending request. Use Acme Admin, Henry, Ava, AD verification and a mailbox you control. Have the Module 10 journals available; you'll record C10 in this lab's [journal](EVIDENCE.md).

## Follow the steps

### 1. Inspect the copy's real decision output

1. In **Admin > Workflows > Manager**, use **Actions > Duplicate Workflow** beside WF-Acme-AR058. Open the copy and rename it `WF-Acme-AR063`. Keep its native trigger, Single/Manager policy, two-day Expire timeout and Success end. Save, validate and enable it.
2. Record Production Support's current association, then change only its grant Workflow selection to WF-Acme-AR063. Save and reopen. Keep Ava's removal review and all form/date requirements.
3. As Henry, follow only steps 1–2 of [AR-058's submission section](../AR-058/README.md#3-submit-a-complete-request-and-inspect-its-execution), using reason `AR-063 inspect decision output`, ticket `CHG-LAB-063-OUTPUT` if required, and valid current dates. Stop after submission.
4. Match this copy's execution under **Admin > Workflows > WF-Acme-AR063 > Executions**. As Ava, inspect the matching Grant in **Approvals > Access Requests > Requested**, deny with `AR-063 inspect returned decision`, and confirm.
5. Open the completed execution and expand Approval Policy's output. Record its actual status field/value, approval ID and technical step name. Record trigger accessRequestId and requestedFor.name separately. Verify the request is denied and native Support False. Save `AR-063-01.png`.

**Check:** You have this copy's actual output. Do not use the workflow's overall Success state as the approval decision.

### 2. Add the comparison and two message branches

1. After the diagnostic request is resolved, open the copy in the builder. Replace the direct Approval Policy-to-Success connection with **Compare Strings**. For Value 1, use the variable picker to select **Approval Policy > status**. Set Comparison Operator Equals and Value 2 to static `APPROVED`.
2. Copy the generated JSONPath into your journal and compare it with the actual step output from Section 1. For a technical step named approvalPolicy, the path is `$.approvalPolicy.status`; a renamed or duplicated step may have a different technical name. Use the picker value, not a guessed path.
3. On the matching branch add **Send Email**, named `Send Approval Decision`. Enter your controlled mailbox as the static Recipient Email Addresses value, leave From and Reply-To Address blank to use the tenant's branding sender, and leave CC/BCC empty. Set Subject to `AR-063 approval decision`.
4. In this action's Templating Context, enter the JSON below. Replace only the decision path if Section 1 showed a different technical step name. Keep the `.$` suffixes on the keys; the values are JSONPaths, not text to print.

```json
{
  "requestId.$": "$.trigger.accessRequestId",
  "recipient.$": "$.trigger.requestedFor.name",
  "decision.$": "$.approvalPolicy.status"
}
```

5. Enter this Body. If the editor changes the variable expressions, open its formatting toolbar's Source Code view and preserve each `${...}` expression.

```text
The access review has finished.
Request: ${requestId}
Recipient: ${recipient}
Decision: ${decision}

Check the request's provisioning result and the target account before treating access as available.
```

6. On the non-matching branch add another Send Email, named `Send Other Decision`. Use the same mailbox, blank sender/reply fields, empty CC/BCC, context and body. Set Subject to `AR-063 decision outcome`. This branch reports the actual value; it does not label every non-APPROVED result as Denied.
7. Connect each email action to an End Steps Success. Save all changed steps, validate the workflow and confirm it remains enabled and selected for Production Support. Save `AR-063-02.png` showing the comparison, branches and context with your address hidden if sharing.

**Check:** Both messages carry the native request ID and actual policy status. Email success, workflow completion and AD provisioning remain separate observations.

### 3. Approve a fresh request and compare the message

1. As Henry, repeat the submission-only steps with reason `AR-063 approved notification` and ticket `CHG-LAB-063-YES` if required. Match its execution and Ava's task by recipient, profile, reason and time.
2. As Ava, approve the matching Grant with `AR-063 manager approved`. Inspect the execution: Approval Policy status should be APPROVED, the matching branch should run, and Send Approval Decision should finish successfully.
3. Open your mailbox and find the subject `AR-063 approval decision`. Match its body request ID, recipient and status to this execution. Check junk/quarantine if needed. Record delivery separately from the Send Email action's status.
4. Follow the request's [Account Activity](../../LAB-DESK.md#find-the-account-activity) and run the [native membership check](../../M02-CHECKS.md#inspect-direct-ad-membership). Confirm Henry's Support True and baseline True. Save `AR-063-03.png` with message, decision and membership evidence.
5. As Henry, use **My Access > Access Profiles > AP-Production-Support > Revoke Access Profile**, comment `AR-063 notification test complete`, and submit. As Ava, inspect and approve the matching Remove. Follow the operation, verify Support False/baseline True, [refresh imported data](../../M02-CHECKS.md#refresh-imported-ad-data) and confirm the assignment is gone.

**Check:** The message accurately reported approval. The separate native check established whether that approval was fulfilled.

### 4. Deny a new request and inspect any mail failure

1. Submit a new Henry request with reason `AR-063 denied notification`, ticket `CHG-LAB-063-NO` if required, and fresh valid dates. As Ava, inspect and deny with `AR-063 manager denied`.
2. Inspect the actual Approval Policy status and non-matching branch. Find `AR-063 decision outcome` in your mailbox and match its body fields with this request. Verify native Support False and no outstanding review. Save `AR-063-04.png`.
3. If a message contains blank or literal variable text, inspect that action's context and the preceding step output. Correct the JSONPath or body expression in the copy. If the action failed, record its error, recipient value and sender settings; if it succeeded but mail is absent, inspect mailbox filtering and delivery evidence. Do not resubmit or rerun an already-approved access request just to send its email again.
4. After resolving any access from the first test, a notification retest can use a fresh Henry request that Ava denies. Record that this verifies the non-approved message only. Mark delivery Pending where it was not observed; do not report both branches passed from one email.
5. Restore Production Support's grant association to WF-Acme-AR058. Save and reopen. After all diagnostic requests and executions are resolved, disable WF-Acme-AR063 while retaining its definition. If any execution remains unresolved, record it and leave it for investigation; changing the association affects future requests.

**Check:** There is no test grant left. The original working control is selected for the next module.

### 5. Save C10 in this journal

1. Record each Module 10 lab's observed outcome, request/execution IDs and screenshots. Use Not run, Not reproduced or Pending for cases without evidence. The configured two-day timeout was not tested by prompt approval/denial; record its actual observation status separately.
2. Record WF-Acme-AR058's ID, enabled state and Production Support association: Single/Manager grant, original form/date requirements and Primary Owner/Ava removal. Also retain the pre-Module 10 Manager-then-Security snapshot; that is different from the active workflow control.
3. Record the disabled serial, parallel, quorum and email copies. For Finance, list each object's actual grant association and restored original removal policy. Mark automatic enforcement accepted only where AR-061's isolated stop, missing-data and recipient tests actually passed; otherwise retain original policies and the unresolved evidence.
4. Verify Henry has no Support access/pending or scheduled request; Olivia has no diagnostic Finance access; Liam has IT department, original access and no disposable-group grant; Lucas keeps his original VPN. Confirm the complete private HR file and original Requests on Behalf setting are restored. Keep the AR-061 disposable profile disabled/non-requestable after its requests are resolved.
5. Preserve C08/C09's retained Taylor account, private HR population and credential-retention record. Native workflow labs did not require changing PATs or the original baseline assignment. Save `AR-063-05.png` with the final recorded state.

**Check:** C10 states which policies are active and which outcomes remain untested. Later labs can start without guessing the reviewer route.

## Check the result

A fresh approval and denial each reach the intended notification branch. Delivered messages match the actual policy output; native checks and cleanup establish the separate access outcome. C10 records active policies, restored data and unresolved observations.

## Finish

Keep the original control enabled/attached, the notification copy disabled after resolved tests, Henry clean and C10 saved. Retain only Finance policies supported by your AR-061 evidence. Module 11 continues with developer event-trigger/subscriber exercises; it uses a different integration model from these native workflows.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary identity details. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-063-01.png | Actual policy output and native request fields |
| AR-063-02.png | Comparison, email branches and templating context |
| AR-063-03.png | Approved message, policy result, native grant and cleanup |
| AR-063-04.png | Other-decision message, denied request and absent membership |
| AR-063-05.png | C10 active policies, restored data and clean test accounts |

[Previous: AR-062](../AR-062/README.md) · [Course outline](../../README.md) · [Next: AR-064](../AR-064/README.md)
