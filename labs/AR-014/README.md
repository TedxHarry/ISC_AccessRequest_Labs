# AR-014 · Find why VPN disappeared from the catalog

**Before you start:** AR-013. Use Olivia's session and the administrator. Do not change Lucas's existing assignment.

Confirm Olivia's denied request is concluded, she has no VPN assignment, and no new VPN request is pending. Keep her separate browser session and your administrator session open. Record VPN's owner, reviewer, requestability and source before changing anything.

This time you will change one setting and watch its effect. Keep submission out of this experiment so you can isolate catalog visibility from approval and provisioning.

## Introduce one fault

1. Confirm Olivia can currently find VPN. Record its entitlement ID and requestable state. Save the visible result as `AR-014-01.png`. If it is already missing, diagnose that starting problem before adding a fault.
2. As administrator, open **Admin > Access Model > Entitlements**, match VPN by source and DN, select only that item and use **Actions > Mark as Not Requestable** (or disable Allow Access Requests on its edit page). Save the time of the change and the disabled setting as `AR-014-02.png`. Keep global entitlement requests enabled.
3. Refresh Olivia's Request Center after the change takes effect. Clear the same search filters and confirm the item is absent. Save the missing result, username and search text as `AR-014-03.png`. Search another known requestable item only if one already exists; otherwise record that no control item has been created yet.
4. Work backward: verify Olivia's session, the correct source, global entitlement enablement, individual requestability and segment membership. Write the failed check before repairing it.
5. Return to the same entitlement and use **Actions > Mark as Requestable**, then reopen Access Requests to confirm the saved value. Refresh Olivia's catalog and confirm it returns. Save the restored result as `AR-014-04.png`.
6. Check Lucas's existing VPN membership. Run the native check for Lucas on the same controller and save his retained direct membership as `AR-014-05.png`. Hiding the catalog item is not a revocation operation.

**Check:** You identify the individual entitlement setting as the cause and restore visibility without widening unrelated access.

**Challenge:** Have a partner choose either a wrong search name or the individual requestability fault. Ask for the requester, item and time before inspecting configuration. When working alone, use the recorded failed case and write the diagnosis without reopening these steps.

**Reset:** VPN requestable, its owner/reviewer unchanged, negative-control group still hidden.

[Catalog configuration](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html)

## Your ticket: it disappeared only for Lucas

Supplied case: the administrator confirms VPN is requestable and Olivia can find it, but Lucas cannot submit a new request. Lucas already received VPN in AR-012. Write the checks you would make before changing global settings.

<details>
<summary>Compare your answer with the mentor's solution</summary>

Verify Lucas's session, existing VPN assignment, account and pending requests. Compare the same item and filters with Olivia's session. An existing assignment can explain why a fresh request is unavailable; record the actual UI behavior. Olivia's result is a useful control against a global outage. Also inspect applicable segmentation if the assignment does not explain the difference. Do not revoke Lucas's retained grant or widen global visibility as a first fix.

</details>

## If you stopped while VPN was hidden

Reopen the recorded entitlement and restore Allow Access Requests before any new request exercise. Retest with Olivia, verify Priya's owner/reviewer settings, and confirm GG-INTERNAL-NOREQUEST remains hidden. Keep the before, faulty and restored results separate in your journal. For another attempt, start from the verified visible state each time.

## What to leave in place

| Item | Required state |
|---|---|
| VPN | Requestable again; original owner/reviewer retained |
| Olivia | Can find VPN; no new request or grant from this experiment |
| Lucas / negative control | Lucas retains VPN; GG-INTERNAL-NOREQUEST stays hidden |

## Completion checklist

- [ ] VPN visibility is restored and Lucas retains his earlier grant.
- [ ] Your ticket diagnosis and comparison are recorded before checking the solution.
- [ ] Actual tenant observations are distinguished from the supplied ticket case.
- [ ] Pending requests are accounted for and the retained state matches the next lab.

Record results in your [evidence journal](EVIDENCE.md). Keep the [lab desk](../../LAB-DESK.md) open for native verification.

## Screenshots to capture

Capture these at the matching steps above. Use extra images when one view cannot show everything. Keep secrets and personal mailbox details out of shared images.

| Filename | What to show |
|---|---|
| AR-014-01.png | VPN visible as Olivia before fault |
| AR-014-02.png | Individual requestability disabled |
| AR-014-03.png | VPN missing with username/search text |
| AR-014-04.png | Restored visible item |
| AR-014-05.png | Lucas retained native VPN membership |

[Previous: AR-013](../AR-013/README.md) · [Course outline](../../README.md) · [Next: AR-015](../AR-015/README.md)
