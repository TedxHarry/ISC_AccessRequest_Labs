# AR-059 — Compare serial and parallel reviews

In this lab, you'll give Ava and Evelyn the same review in sequence and then in parallel, checking when each can act and when access is granted.

## Before you start

Complete [AR-058](../AR-058/README.md). Henry is clean and WF-Acme-AR058 is attached. Use Acme Admin, Henry, Ava and Evelyn (`acme.e021`) in separate sessions, plus AD verification. Evelyn's session was prepared in AR-029. Open your [journal](EVIDENCE.md).

## Follow the steps

### 1. Configure the serial copy

1. Open **Admin > Workflows > Manager**. Beside WF-Acme-AR058, select **Actions > Duplicate Workflow**. Open the copy in the builder and rename it `WF-Acme-AR059-Serial`. Reuse that named copy on a repeat after resolving prior requests.
2. Select Approval Policy. Set **Approval Type: Multi-Step**, **Approval Scheme: Serial**, then **Add Reviewers**. Add Manager and **Identity (Other): Evelyn**, selecting acme.e021. Drag Manager first and Evelyn second. Save the list and inspect its preview.
3. Keep Priority Medium, Reminder No, Timeout 2 days, Action at Timeout Expire and the trigger/end connections. Save, resolve validation errors and enable the copy.
4. On Production Support's **Access Requests**, select Workflow WF-Acme-AR059-Serial, save and reopen. Preserve Ava's removal review and form/date settings. Save `AR-059-01.png`.

**Check:** The same two distinct people must approve in order. The original control definition remains available.

### 2. Observe the serial case

1. Verify Henry's Support False. Use only steps 1–2 of [AR-058's submission section](../AR-058/README.md#3-submit-a-complete-request-and-inspect-its-execution), with reason `AR-059 serial control` and ticket `CHG-LAB-059-S` if required. Inspect the serial copy's execution, not the original control's history. Stop before any approval; the decisions are below.
2. Inspect Ava's and Evelyn's **Approvals > Access Requests > Requested** queues before either decision. Ava should act first. Record whether Evelyn has a later-stage preview or no task; the important observation is whether she can act now.
3. As Ava, inspect and approve the matching Grant. Refresh the request process and Evelyn's queue. Before Evelyn acts, verify Support remains False.
4. As Evelyn, approve her now-actionable Grant. Record policy output and both decision times, then verify Support True. Save `AR-059-02.png`.
5. Remove the profile as Henry through **My Access > Access Profiles > AP-Production-Support > Revoke Access Profile**, reason `AR-059 serial complete`. Have Ava approve removal. Follow its activity and verify Support False and no assignment before changing the workflow.

**Check:** Ava advanced the review; Evelyn completed the required approvals.

### 3. Change only the scheme to parallel

1. Duplicate the serial copy and name it `WF-Acme-AR059-Parallel`. Change Approval Scheme to Parallel; keep Multi-Step, Manager, Evelyn and the same timeout/reminder settings. Save, validate and enable.
2. Attach the parallel copy to Production Support and reopen the saved selection. Submit a fresh Henry request with reason `AR-059 parallel control`, using valid current form/date values.
3. Inspect both queues before either decision. Both reviews should be available. Save `AR-059-03.png`.
4. Approve as Ava only. Inspect Evelyn's outstanding review and verify Support False. Then approve as Evelyn, inspect policy/request results and verify Support True.
5. Remove the profile as Henry, have Ava approve removal and verify Support False and no assignment/pending write. Save `AR-059-04.png` with intermediate, grant and cleanup evidence.

**Check:** Parallel delivery does not mean first approval wins. Multi-Step requires both approvals.

### 4. Deny a fresh request and restore the control

1. Submit another Henry request with reason `AR-059 parallel denial`. Leave Ava undecided and have Evelyn deny with `AR-059 requirement denied`.
2. Inspect the final policy/request outcome and Ava's remaining task state. After processing, verify no further decision is needed and Support remains False. Save `AR-059-05.png`.
3. Restore Production Support's Workflow selection to WF-Acme-AR058, save and reopen. After all test requests/executions are resolved, disable the two AR-059 copies and retain their definitions. Keep the original control enabled.

**Check:** Denial ends this Multi-Step grant. The original association is ready for the next lab.

## Check the result

The same reviewers act serially and in parallel. Membership stays absent until all required approvals, and denial grants nothing. Both successful grants are removed.

## Finish

Keep Henry clean, WF-Acme-AR058 attached and the serial/parallel copies disabled. Preserve form/date/removal settings and the comparison evidence.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary identity details. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-059-01.png | Serial reviewers and association |
| AR-059-02.png | Serial intermediate/final result and removal |
| AR-059-03.png | Parallel settings and both pending reviews |
| AR-059-04.png | Parallel intermediate/final native results and removal |
| AR-059-05.png | Denial, remaining task closure and restored association |

[Previous: AR-058](../AR-058/README.md) · [Course outline](../../README.md) · [Next: AR-060](../AR-060/README.md)
