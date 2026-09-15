# AR-071 · Choose between cancellation, closure and removal

In this lab, you'll cancel a pending request, remove a completed grant, and assess whether a stuck request is eligible for administrative closure.

## Before you start

Complete [AR-070](../AR-070/README.md). Use Taylor, Priya, Acme Admin and native verification. Taylor is clean and Remote Worker retains direct Priya review. Prepare or renew the Acme API Admin environment from [AR-052](../AR-052/README.md) for the optional live closure. Open your [journal](EVIDENCE.md).

## Follow the steps

### 1. Cancel while approval is still pending

1. Submit a Taylor Remote Worker request using [the operations control steps](../../LAB-DESK.md#submit-a-remote-worker-operations-control), reason `AR-071 cancel pending control`. Leave Priya undecided.
2. As administrator, open the matching request in **Approval Management > Access Requests**. Confirm recipient, item and pending approval. Open the access name, select **More > Cancel Request**, enter `AR-071 request no longer needed` and confirm Cancel Request. Do not use an approval ID as an API cancellation tracking ID.
3. Reopen its Process/Details and Taylor's My Requests. Record the canceled state and verify Priya no longer has an actionable matching review. Confirm VPN and Remote Users False. Save `AR-071-01.png`.

**Check:** Cancellation stopped an eligible pending request. It did not perform a membership removal.

### 2. Remove access after a completed grant

1. Submit a new Taylor request with reason `AR-071 completed grant control`. As Priya, approve the matching Grant and verify both native groups True on Taylor's retained account.
2. Record the completed grant's request/activity IDs. Inspect its available actions without trying to cancel it. The API cancellation contract applies before the approval step has passed; removing held access needs a removal request.
3. Follow [Remove a Remote Worker operations grant](../../LAB-DESK.md#remove-a-remote-worker-operations-grant), comment `AR-071 completed access removal`. Record the new removal request and operation IDs separately, Priya's Remove approval and both native groups False. Save `AR-071-02.png`.

**Check:** A second operation removed the access. The original grant remains part of request history.

### 3. Assess closure without manufacturing a stuck request

1. Inspect the permission/subscriber failures in your earlier journals and reopen their current Account Activity. Find whether any course request is genuinely still stuck in Pending after investigation. A historical terminal failure is not eligible merely because it once failed.
2. Compare with [the close procedure](../../API-WORKBENCH.md#close-one-stuck-pending-request-ar-071). Record request state, known cause, pending connector work/retries and actual native state. An ordinary pending approval should be decided or canceled instead. Do not stop the connector or leave permissions broken to create a closure candidate.
3. If no eligible case exists, fill the decision table below and label live closure Not run. If one exists, first account for any queued connector operation; closing the request is not proof that a target write cannot still complete. Record why closure is appropriate and what monitoring remains necessary.
4. For that verified single course request only, follow the workbench: locate its Tracking Number, use the ORG_ADMIN caller, inspect Provisioning Completed subscribers, send the one-ID close body, then read the started/completed audits and original request. Do not send a bulk list. Save `AR-071-03.png` with eligibility and observed outcome, or the labelled no-eligible-case assessment.
5. Recheck native access after closure. If access remains, record and remove its actual assignment through the applicable removal procedure. Do not label administrative closure as revoked access.

| State | Action for this exercise | Proof afterward |
|---|---|---|
| Still awaiting approval, no longer wanted | Cancel eligible request | Canceled process, no actionable review, native absence |
| Completed grant, access no longer wanted | Request assignment removal | Separate removal decision/operation and native absence |
| Genuinely stuck Pending after investigation | Assess supported closure | Closure audit/current record plus independent native state |
| Old terminal failure, no pending work | Preserve history | Current state and any later repair/control evidence |

**Check:** Eligibility comes from the current request. A 202 close response only acknowledges submission.

## Check the result

The cancellation and actual removal have distinct live evidence. Closure is either verified on an eligible course request or explicitly recorded as an unexecuted eligibility review. Native state is checked independently.

## Finish

Leave Taylor without Remote Worker and no pending control. Preserve original grant, cancellation, removal and any closure records separately. Keep any unresolved closure or connector work Pending with its next check.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when a result needs several images. Label historical and synthetic evidence separately from current tenant observations.

| Filename | What to show |
|---|---|
| AR-071-01.png | Pending cancellation, queue removal and native absence |
| AR-071-02.png | Completed grant followed by separate removal evidence |
| AR-071-03.png | Closure eligibility, audit/outcome or labelled unexecuted assessment |

[Previous: AR-070](../AR-070/README.md) · [Course outline](../../README.md) · [Next: AR-072](../AR-072/README.md)
