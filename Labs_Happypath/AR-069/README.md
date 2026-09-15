# AR-069 · Verify recovery and save the subscriber handover

In this lab, you'll verify one final grant and removal, account for the failed requests, and save a restart procedure for the subscriber.

## Before you start

Complete [AR-068](../AR-068/README.md), or retain its unresolved cases with all subscriptions disabled. Have the module's journals, service/mode file, HTTPS route and Acme Admin/Taylor/Priya sessions. Keep the [journal](EVIDENCE.md) open; you'll save C11 here.

## Follow the steps

### 1. Inspect the integration before restarting

1. Open **Admin > Event Triggers > Subscriptions**. Record the IDs of SUB-Acme-AR-Submitted, SUB-Acme-AR-Dynamic and SUB-Acme-AR-Decision with trigger, endpoint, authentication type, response mode, filter and Disabled state. Exclude passwords/tokens. Save `AR-069-01.png`.
2. Review AR-068's request/invocation list. For each old request, open its actual process/activity and record terminal status or the next supported action. A new successful request does not repair an old failed one. Resolve outstanding diagnostic reviews or writes before another live grant; keep the integration disabled if resolution is pending.
3. Verify the private file has submitted approve, approver acme.e002, dynamic reviewer with Evelyn's original identity object, and no async flag. Start the service using [the workbench command](../../SUBSCRIBER-WORKBENCH.md#start-the-local-service) if it is stopped; keep the same port and matching Basic Auth credentials.
4. With subscriptions disabled, run local synthetic approve and deny checks, restoring approve immediately afterward. Repeat authenticated HTTPS approval and unauthenticated 401. Verify the saved filter's positive and negative inputs through the validation API. Do not enable until these checks pass.

**Check:** Service/authentication/filter controls work, and old diagnostic requests are accounted for before a new request is created.

### 2. Verify the complete grant and removal

1. Verify Taylor's native disposable membership False and no Subscriber Test assignment. Enable only SUB-Acme-AR-Submitted.
2. Submit as Taylor with reason `AR-069 final recovery grant`, using [the single-item request procedure](../../SUBSCRIBER-WORKBENCH.md#submit-one-taylor-request). Match its invocation and preliminary approved true response.
3. As Priya, inspect and approve the matching normal Grant with `AR-069 owner approved`. Follow the operation and verify native membership True on the retained Taylor account. Save `AR-069-02.png`.
4. Disable Submitted, then complete [Taylor's removal procedure](../../SUBSCRIBER-WORKBENCH.md#decide-and-remove-the-test-access), including Priya's Remove approval, native False, account retained and refreshed assignment absence. Save `AR-069-03.png`.
5. If either write fails, keep that case Pending and use the operation evidence to investigate. Do not mark C11 passed solely because the subscriber returned 200.

**Check:** The final control demonstrates service delivery, normal approval, AD grant and AD removal separately.

### 3. Save C11 and shut down in order

1. In the journal, record each AR-064–068 outcome, the final control IDs, private evidence locations and any Not run/Not reproduced/Pending cases. Include the original failure records. Preserve enough sanitized input/output to explain the observed contract.
2. Write the restart steps using your actual paths and subscription IDs: start the local service; verify authenticated HTTPS and 401; verify the mode and filter; enable only the required course subscription; submit one control; match Activity Log and request evidence. Include how to recognize a successful response for each of the three trigger types.
3. Verify all three course subscriptions Disabled and save. In **Admin > Access Model > Access Profiles**, turn off requestability and disable AP-Acme-Subscriber-Test after its requests are resolved. Retain its definition/current entitlement reference and keep the direct entitlement non-requestable.
4. Verify Taylor has no disposable, VPN, Remote Users or baseline membership; preserve his account and the complete private HR file. Keep Lucas's VPN unchanged. If you completed Module 10, preserve its recorded workflow policies. No on-behalf setting was needed here; if you changed one outside these steps, restore its recorded original value.
5. Stop Python with Ctrl+C only after subscription disablement is verified. Close the course's dedicated HTTPS forwarding route if you opened it for these labs. Preserve shared infrastructure and keep credentials private; record whether the named service credentials were retained or retired. Save `AR-069-04.png`.

**Check:** C11 explains how to restart and how to stop. A stopped terminal alone does not disable an ISC subscription.

## Check the result

The final request is fulfilled and removed, prior failed requests are reconciled, all course subscriptions and the isolated profile are disabled, and C11 records the restart sequence and unresolved cases honestly.

## Finish

Keep C11, disabled subscription/profile definitions, the current group/account identifiers and clean Taylor access. Service and dedicated forwarding may remain stopped. AR-070 starts the support-operation labs; asynchronous subscriber callbacks remain a separate AR-090 exercise.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and callback secrets. Use letter suffixes when one result needs several images. Label synthetic requests separately from tenant requests.

| Filename | What to show |
|---|---|
| AR-069-01.png | Subscription inventory with disabled states |
| AR-069-02.png | Fresh preliminary pass, normal approval and AD grant |
| AR-069-03.png | Removal, retained account and refreshed absence |
| AR-069-04.png | C11 reconciliation, restart steps and safe final state |

[Previous: AR-068](../AR-068/README.md) · [Course outline](../../README.md) · [Next: AR-070](../../labs/AR-070/README.md)
