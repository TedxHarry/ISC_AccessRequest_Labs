# AR-014 · Find why VPN disappeared from the catalog

**Before you start:** AR-013. Use Olivia's session and the administrator. Do not change Lucas's existing assignment.

## Introduce one fault

1. Confirm Olivia can currently find VPN. Record its entitlement ID and requestable state.
2. As administrator, select only VPN and mark it **Not Requestable**. Save the time of the change.
3. Refresh Olivia's Request Center after the change takes effect. Confirm the item is absent. Search another known requestable item only if one already exists; otherwise record that no control item has been created yet.
4. Work backward: verify Olivia's session, the correct source, global entitlement enablement, individual requestability and segment membership. Write the failed check before repairing it.
5. Restore VPN requestability. Refresh Olivia's catalog and confirm it returns.
6. Check Lucas's existing VPN membership. Hiding the catalog item should not be used as a revocation operation.

**Check:** You identify the individual entitlement setting as the cause and restore visibility without widening unrelated access.

**Challenge:** Have a partner choose either a wrong search name or the individual requestability fault. Ask for the requester, item and time before inspecting configuration. When working alone, use the recorded failed case and write the diagnosis without reopening these steps.

**Reset:** VPN requestable, its owner/reviewer unchanged, negative-control group still hidden.

[Catalog configuration](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html)

## Screenshots to capture

1. Missing item from Olivia's session.
2. The incorrect individual setting.
3. Restored result and Lucas's retained membership.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-013](../AR-013/README.md) · [Course outline](../../README.md) · [Next: AR-015](../AR-015/README.md)
