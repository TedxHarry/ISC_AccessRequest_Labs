# AR-065 · Return a preliminary approval or denial

In this lab, you'll let one request continue to Priya and stop another at the subscriber, then compare their access outcomes.

## Before you start

Complete the live control in [AR-064](../AR-064/README.md). Keep its service/HTTPS route, validated disabled Submitted subscription, isolated profile and Taylor/Priya sessions. Taylor is clean. Use your [journal](EVIDENCE.md). If only local work was possible, run the local response comparison and mark the tenant cases Not run.

## Follow the steps

### 1. Let the preliminary approval continue to Priya

1. With the subscription disabled, edit the private mode file: submitted approve, approver acme.e002, async absent/false. Save and POST the authenticated synthetic body to `/submitted`. Require HTTP 200 and approved true. Save `AR-065-01.png`.
2. Check SUB-Acme-AR-Submitted's saved Taylor/profile/Add filter and HTTPS URL, then enable it. Keep any course Dynamic/Decision subscriptions disabled.
3. As Taylor, use [the submission steps](../../SUBSCRIBER-WORKBENCH.md#submit-one-taylor-request), reason `AR-065 preliminary approve`. Match its Activity Log input and terminal response by request ID.
4. Before Priya acts, inspect the pending Grant and verify native GG-ACME-FAULT-049 remains False. The subscriber has allowed review to continue; it has not completed Priya's decision.
5. As Priya, approve the matching Grant with `AR-065 normal review approved`. Follow [the native verification steps](../../SUBSCRIBER-WORKBENCH.md#decide-and-remove-the-test-access) and require membership True on Taylor's retained account. Save `AR-065-02.png` with before-review and after-fulfillment evidence.
6. Disable the subscription, then use that same removal procedure: Taylor revokes the profile, Priya approves Remove, and you verify membership False and the assignment gone. Finish removal before changing the response mode.

**Check:** The subscriber's approval and Priya's approval are separate decisions on this request.

### 2. Stop a fresh request with a valid denial response

1. Change only submitted to deny in the private file and save. Send the local authenticated synthetic request; require HTTP 200 with approved false, comment and approver acme.e002.
2. Enable the same validated Submitted subscription. As Taylor, submit reason `AR-065 preliminary deny`, selecting only the isolated profile.
3. Match the invocation to the service's approved false response. Inspect the request's process and actual terminal status. Confirm no normal Priya Grant remains actionable and no membership was granted. Save `AR-065-03.png`.
4. If the request fails with a schema/transport error instead of accepting the denial response, record that result separately. HTTP 200 by itself does not prove a valid preliminary decision. Disable the subscription and resolve any remaining request through its actual state before retesting.

**Check:** A valid negative decision stopped the request before ordinary approval. Preserve the actual status/comment evidence.

### 3. Restore and verify the working response

1. Disable the subscription, restore submitted approve and repeat the local 200/approved true test.
2. Enable it for one new Taylor request, reason `AR-065 restored control`. Verify a successful invocation and Priya's normal review; have Priya deny with `AR-065 control complete`.
3. Verify terminal denial, no native grant and no pending operation. Disable the subscription and save `AR-065-04.png` with the restored mode and final state.

**Check:** The restored service works for a new request. The earlier denial remains a completed historical outcome.

## Check the result

The preliminary approve case still needs Priya and fulfills only after her approval. The preliminary deny case grants nothing. The successful grant is removed and the restored mode passes a fresh control.

## Finish

Keep the Submitted subscription disabled, submitted approve, Taylor without the test assignment and the isolated profile enabled. Retain request/invocation IDs and native cleanup evidence for AR-066.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and callback secrets. Use letter suffixes when one result needs several images. Label synthetic requests separately from tenant requests.

| Filename | What to show |
|---|---|
| AR-065-01.png | Valid local approval response |
| AR-065-02.png | Preliminary pass, pending Priya task and fulfilled grant |
| AR-065-03.png | Preliminary denial and native absence |
| AR-065-04.png | Restored response, fresh control and disabled final state |

[Previous: AR-064](../AR-064/README.md) · [Course outline](../../README.md) · [Next: AR-066](../AR-066/README.md)
