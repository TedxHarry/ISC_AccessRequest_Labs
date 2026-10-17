# Live Operations Practice

Use these exercises after the regular labs. They create controlled training faults instead of requiring you to pretend a historical failure is still happening. Use only the Acme training objects and restore each case before the next one.

## Before choosing a case

Complete AR-075 and its cleanup. Taylor (`acme.e025`) keeps his existing AD account with no Remote Worker, VPN, Remote Users or disposable-group test access and no pending request. Remote Worker has Priya as owner and direct Primary Owner grant/removal review. Keep course developer subscriptions disabled. Inspect the current settings and retain the values you actually need for restoration.

## Case 1: a requester cannot find Remote Worker

**Report:** Taylor can sign in, but the expected profile is absent from Request Center.

<details>
<summary>Set up the isolated fault</summary>

Use [AR-075's catalog-fault setup](../guided-labs/M12/AR-075/README.md#2-repair-the-missing-catalog-case): change only Remote Worker's requestability, save, and confirm Taylor's current catalog actually loses the choice. Preserve owner, entitlements and review settings. If the symptom is not reproduced, inspect propagation/session state rather than introducing a second fault.

</details>

Diagnose from Taylor's signed-in session and the exact item's saved configuration. Make the smallest repair supported by the difference you find. Restoring visibility should not itself grant access.

**Acceptance:** The profile is visible again to Taylor, its original request setting is restored, and no new assignment, native grant or pending request was created.

## Case 2: a new review reaches the wrong owner

**Report:** The new Remote Worker request is assigned to Samuel, but the intended service owner is Priya.

<details>
<summary>Set up the isolated fault</summary>

Follow [AR-075's owner-change control](../guided-labs/M12/AR-075/README.md#3-repair-the-unexpected-reviewer-case). Retain the original owner ID, change only the course profile's owner to Samuel, keep Primary Owner review, and submit one labelled Taylor request. Inspect its actual assignee before claiming the fault occurred. Do not approve this diagnostic grant.

</details>

Compare the actual review category, resolved assignee and current owner. Restore the original owner, then inspect the pending task separately. Use supported reassignment only if it is still assigned to Samuel; have the actual authorized reviewer deny the diagnostic Grant. Use a separate fresh control to check new routing.

**Acceptance:** Priya is restored, the older task's actual history is explained, a fresh request routes correctly, all diagnostic requests are denied/cancelled appropriately, and Taylor gains no test access.

## Case 3: an approved change fails in AD

This case additionally requires the isolated group and scoped AD-permission setup from AR-048. Skip it if you cannot isolate the permission change from other accounts or groups.

Use [AR-048](../guided-labs/M08/AR-048/README.md) to reproduce only its documented group-specific permission fault. Diagnose from the exact failed operation and native result before changing the permission. Preserve the original ACL and restore that narrow change even if the planned failure is not reproduced. Use the lab's supported recovery method, then test a fresh grant and removal.

**Acceptance:** The failure was actually observed or explicitly left unreproduced; the original permission is restored; the justified recovery and fresh controls agree with native membership; no permission fault or diagnostic access remains.

## Case 4: one submission has different item outcomes

Follow [AR-073](../guided-labs/M12/AR-073/README.md) to prepare its two-item controlled submission and separate decisions. Before deciding, predict each item's target result. Inspect each review, activity and native group independently. Do not label the whole submission successful because one item arrived.

**Acceptance:** Both items have their own explained outcomes. Only approved access appears, denied access does not appear, and the approved diagnostic access is removed using the supported path. All original settings and unrelated access remain.

## Stop and restore

If interrupted, first identify the current request state and target access. Restore the original saved setting or scoped permission; that alone may not resolve an older review or write. Finish the relevant guided lab's cleanup, inspect the existing operation and verify native state. Do not reset shared configuration or resubmit blindly.

You can explain the diagnosis aloud. Keep only request IDs and original settings needed to finish the operation; no journal, queue worksheet or screenshot submission is required.

[Try It Yourself: operations](../try-it-yourself/M12.md) · [Processing and recovery](../reference/PROCESSING-AND-RECOVERY.md)
