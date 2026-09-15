# AR-060 — Test a quorum with three separate reviewers

In this lab, you'll configure a 60 percent quorum and observe when approvals or denials determine its outcome.

## Before you start

Complete [AR-059](../AR-059/README.md). Use Henry and three individual reviewers: Noah (`acme.e007`), Evelyn (`acme.e021`) and William (`acme.e022`), with sessions from AR-029. Keep Acme Admin, Ava for removals, AD verification and your [journal](EVIDENCE.md) available.

## Follow the steps

### 1. Configure the three-person quorum

1. Verify Henry is clean. Duplicate WF-Acme-AR058 through **Admin > Workflows > Manager > Actions > Duplicate Workflow** and name the copy `WF-Acme-AR060`.
2. In Approval Policy, choose **Approval Type: Quorum**, **Approval Scheme: Parallel**, **Quorum Approval Percentage: 60**.
3. Under Add Reviewers, add three separate **Identity (Other)** entries: Noah, Evelyn and William by username. Save and verify exactly three identities. Do not use one GOV-Security-Review entry; that is a different participant model.
4. Keep Reminder No, Timeout 2 days and Action at Timeout Expire. Save, validate, enable and attach the copy to Production Support. Preserve form/date requirements and Ava's removal approval. Save `AR-060-01.png`.
5. Write the prediction: two approvals out of three exceed 60 percent. After one denial, two approvals are still possible; after two denials, the target cannot be reached.

**Check:** The percentage and denominator are explicit. See [Adaptive Approvals](https://documentation.sailpoint.com/saas/help/adaptive_approvals/index.html).

### 2. Reach the quorum before the third reviewer acts

1. Submit as Henry using only steps 1–2 of [the submission section](../AR-058/README.md#3-submit-a-complete-request-and-inspect-its-execution), reason `AR-060 two approvals` and ticket `CHG-LAB-060-A` if required. Match its AR-060 execution and three tasks. Stop before any approval; the decisions are below.
2. As Noah, inspect and approve the matching Grant. Leave the others undecided. Record the process and verify Support False.
3. As Evelyn, approve. Before William acts, inspect the final policy/request result and William's task state. Verify Support True after provisioning. Save `AR-060-02.png`.
4. Remove the profile through Henry's **My Access > Access Profiles > AP-Production-Support > Revoke Access Profile**, comment `AR-060 case A complete`. Have Ava approve removal and verify Support False and no assignment.

**Check:** Two approvals completed the quorum without a required third approval.

### 3. Continue after one denial

1. Submit a fresh Henry request with reason `AR-060 one denial then approvals`, valid form/date values and a new execution.
2. As Noah, deny with `AR-060 first reviewer disagrees`. Inspect before the others act: two approvals are still possible. Record the open request and Support False.
3. As Evelyn, approve. One approval and one denial still leave William's decision outstanding. Inspect the process and verify Support False.
4. As William, approve. Record policy output, request decision and Support True. Remove the profile as Henry, have Ava approve removal and verify Support False. Save `AR-060-03.png` with the sequence and cleanup.

**Check:** One denial did not automatically decide this quorum request.

### 4. Make the threshold unreachable

1. Submit another Henry request with reason `AR-060 two denials`. Have Noah deny, inspect the remaining tasks, then have Evelyn deny. Leave William undecided.
2. Inspect policy/request results and William's queue. Verify the denied outcome and no Support membership. Record the actual completion point; arithmetic alone is not execution evidence. Save `AR-060-04.png`.
3. If behaviour differs, retain resolved reviewers, percentage, decision order and output. Do not change the threshold to fit the result. Resolve the request before another test.
4. Restore Production Support to WF-Acme-AR058, save and reopen. After all AR-060 requests are terminal and grants removed, disable the quorum copy while retaining its definition.

**Check:** Both successful cases are cleaned up and the denied case granted nothing.

## Check the result

Three distinct identities and each decision sequence are recorded. The observations identify the completion threshold. Henry has no Support or unresolved quorum request.

## Finish

Keep the quorum copy disabled, the original control attached/enabled and Henry clean. Retain the case records and original profile settings.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary identity details. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-060-01.png | Three individual reviewers and threshold |
| AR-060-02.png | Two approvals and third task state |
| AR-060-03.png | One denial plus two approvals and cleanup |
| AR-060-04.png | Two denials, final absence and restored control |

[Previous: AR-059](../AR-059/README.md) · [Course outline](../../README.md) · [Next: AR-061](../AR-061/README.md)
