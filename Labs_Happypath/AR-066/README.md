# AR-066 · Add a final reviewer dynamically

In this lab, you'll add Evelyn after Priya's normal review, then run a second request with no additional reviewer.

## Before you start

Complete [AR-065](../AR-065/README.md). Keep Submitted disabled and Taylor clean. Use Acme Admin, Taylor, Priya, Evelyn and the AD workstation. The service and validated HTTPS route remain available. Open your [journal](EVIDENCE.md).

## Follow the steps

### 1. Configure the additional reviewer

1. Open Evelyn in **Admin > Identity Management > Identities**, search acme.e021 and copy her ISC ID and display name. Verify her separate session works. In the private mode file set dynamic reviewer and the reviewer object's id/name to those values, type IDENTITY. Keep submitted approve and async absent/false.
2. POST the workbench's authenticated synthetic Submitted input to `/dynamic`. Verify the response is Evelyn's id/name/type object, not an approved boolean. Save `AR-066-01.png`.
3. Inspect existing Access Request Dynamic Approval subscriptions. If another integration owns the single Response Required slot, retain local evidence and leave live cases Not run.
4. Follow [subscription setup and validation](../../SUBSCRIBER-WORKBENCH.md#scope-the-subscription-before-enabling-it): name `SUB-Acme-AR-Dynamic`, description `Taylor additional reviewer`, trigger Access Request Dynamic Approval, path `/dynamic`, Synchronous response and Basic Auth. Use the same requestedItems/Taylor/profile/Add filter and repeat its positive/negative tests. Save Disabled and reopen it before enabling.

**Check:** The service returns a real reviewer ID. The test profile's own Primary Owner/Priya review remains unchanged.

### 2. Observe Priya followed by Evelyn

1. Enable only SUB-Acme-AR-Dynamic. Submit as Taylor using [the submission steps](../../SUBSCRIBER-WORKBENCH.md#submit-one-taylor-request), reason `AR-066 Evelyn final review`.
2. Match the dynamic invocation and returned Evelyn object in Activity Log and the terminal. The trigger may run while building the approval list; the added reviewer becomes the final review step after configured requirements. Do not wait until Priya decides before looking for the invocation.
3. Inspect the request process and both reviewers' queues. As Priya, approve the matching Grant with `AR-066 primary owner approved`. Before Evelyn acts, require an outstanding Evelyn review and native disposable membership False. Save `AR-066-02.png`.
4. As Evelyn, open **Approvals > Access Requests > Requested**, inspect Taylor/profile/reason and approve with `AR-066 additional review approved`. Follow Account Activity and verify native membership True.
5. Disable Dynamic and complete [Taylor's profile removal](../../SUBSCRIBER-WORKBENCH.md#decide-and-remove-the-test-access), including Priya's Remove approval, native False and refreshed assignment absence. Save `AR-066-03.png`.

**Check:** Priya's decision advanced the request; Evelyn's separate decision completed its grant review.

### 3. Return no additional reviewer

1. With Dynamic disabled, change only dynamic to none and save. POST the synthetic input to `/dynamic`. Verify this documented no-review response:

```json
{"id": "", "name": "", "type": ""}
```

2. Enable Dynamic and submit a fresh Taylor request, reason `AR-066 no additional reviewer`. Match its invocation and returned empty fields.
3. Inspect the process before deciding. As Priya, approve the matching Grant. Verify no additional Evelyn step was added and the request fulfills after the normal review. Confirm native membership True. Save `AR-066-04.png`.
4. Disable Dynamic, remove the profile as Taylor, approve Remove as Priya, and verify membership False/assignment absent. Restore dynamic reviewer with Evelyn's original object. Leave Submitted and Dynamic disabled.

**Check:** The second response omitted only the additional step; it did not remove the profile's ordinary approval requirement.

## Check the result

The first request waits for Evelyn after Priya; the second completes its normal review without adding her. Both grants are verified and removed. The final file again selects Evelyn and subscriptions are disabled.

## Finish

Keep both request-response subscriptions disabled, dynamic reviewer restored to Evelyn and Taylor clean. Do not leave the group-reviewer override active. Preserve the profile and current group/account identifiers.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and callback secrets. Use letter suffixes when one result needs several images. Label synthetic requests separately from tenant requests.

| Filename | What to show |
|---|---|
| AR-066-01.png | Evelyn identity and local dynamic response |
| AR-066-02.png | Priya completed, Evelyn pending and membership absent |
| AR-066-03.png | Final grant, removal and disabled subscription |
| AR-066-04.png | No-additional-review response, completed normal review and cleanup |

[Previous: AR-065](../AR-065/README.md) · [Course outline](../../README.md) · [Next: AR-067](../AR-067/README.md)
