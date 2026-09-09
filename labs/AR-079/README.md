# AR-079 · Activate and expire Just-In-Time access

**Before you start:** AR-078, Privilege on Demand/JIT capability and a supported direct-connected source. Use `GG-IT-ADMINS` only as the ordinary simulated lab group described in the environment.

## Distinguish assignment from activation

1. Verify Sofia has no standing IT-ADMINS membership on the account selected for this lab. Record any existing assignment before proceeding.
2. Configure the entitlement as requestable with Priya reviewing. Open **Admin > System Settings > Feature Settings > Just-In-Time > Entitlements Assignments** and save the existing settings.
3. Enable JIT for future assignments, add only GG-IT-ADMINS and save. On Activation, select supported default/maximum durations you can observe and record them.
4. As Sofia, request the entitlement for the standard account and have Priya approve. Inspect the JIT assignment and verify AD membership is absent before activation.
5. Open Sofia's **Launchpad > Just-In-Time Access**, select the entitlement and activate it for an allowed duration. Follow the activity and prove native membership appears.
6. Deactivate and verify removal. Activate again and let the session expire; record the scheduled expiry and completed native removal separately.
7. Inspect **Admin > Dashboard > Just-In-Time Access** and match the activation to Sofia's account.

**Check:** Approval makes activation available; activation drives temporary provisioning. A future-dated standing assignment is a different test.

**Reset:** Remove Sofia's test assignment, remove the entitlement from future JIT assignments and restore saved global durations. Verify existing assignments separately because changing the future-assignment setting does not convert them automatically.

[JIT setup](https://documentation.sailpoint.com/saas/help/access/jit_access_provisioning.html), [Activation](https://documentation.sailpoint.com/saas/help/privilege/privilege_on_demand.html)

## Screenshots to capture

1. JIT entitlement/duration configuration.
2. Approved assignment before activation and activated target result.
3. Monitor, deactivation, real expiry and restored settings.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-078](../AR-078/README.md) · [Course outline](../../README.md) · [Next: AR-080](../AR-080/README.md)
