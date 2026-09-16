# AR-084 · Trace an entitlement request from Slack to AD

In this lab, you'll compare a native ISC request with a Slack request for the same entitlement, then trace a denial across both views.

## Before you start

Complete [AR-049](../AR-049/README.md) and the core grant/removal controls. Use Taylor, Priya, Acme Admin and an already-installed **SailPoint for Slack** integration with Taylor and Priya linked to their correct ISC identities. Record the workspace and installed integration/version information available to you. The workspace must permit entitlement requests and approvals. A Slack source connector alone is not this integration.

Open your [journal](EVIDENCE.md). If Slack is not installed, mark this exercise Not run; a native request is not an external-channel result. Other channels need their own documented controls and are not assumed to have Slack's menus.

## Follow the steps

### 1. Prepare one entitlement and run the native control

1. Verify Taylor has no disposable-group membership or pending request. Keep subscriber/test profiles disabled. Save GG-ACME-FAULT-049's original owners and request settings, then set Priya owner, enable requestability, require Primary Owner grant/removal review and user comments. Leave forms/dates off.
2. In the SailPoint Slack app's **Home > Settings**, have the workspace administrator inspect **Create an Access Request**, supported request types and **Approvals**. Confirm Entitlement requests are enabled. Record any setting changed and its original value. Do not replace the existing tenant connection.
3. As Taylor in ISC, request the disposable entitlement through **Request Center > Access Items > Entitlements**, reason `AR-084 native control`. Priya approves in ISC. Follow Account Activity and verify native membership True.
4. Taylor removes that entitlement's Assignment through My Access, reason `AR-084 native control complete`; Priya approves Remove. Verify native False and assignment gone. Save `AR-084-01.png` with the native grant/removal IDs.

**Check:** A working direct control exists before you investigate the integration.

### 2. Submit the same access through Slack

1. Open the **SailPoint app > Messages** in Taylor's Slack session. Use the message-box shortcuts button and select **Create an access request with SailPoint**. This avoids depending on command capitalization.
2. Select **Entitlement**, find the recorded disposable item/source and choose **Myself**. Add `AR-084 Slack grant`, leave expiration empty for this control and inspect the selection before Submit. If duplicate labels cannot be distinguished, stop and clarify the item's source; do not guess.
3. Record the message reference/permalink where available, submission time, Slack user and mapped ISC requester. In ISC, locate the corresponding request through [Find the request](../../LAB-DESK.md#find-the-request), matching Taylor, item and reason/time. Save `AR-084-02.png`.
4. As Priya in Slack, open the SailPoint app's **My Approvals** view or its matching approval notification. Inspect recipient and item; approve the matching request with `AR-084 Slack approval`. If your installed version exposes no approval action, record that limitation and complete the same request in ISC, clearly labelling where the decision occurred.
5. Inspect the ISC process and Account Activity, verify native membership True and compare the Slack notification/status. Save `AR-084-03.png`. A Slack success message alone is not proof of target access.

**Check:** External reference, ISC request, reviewer and native result identify the same operation. [SailPoint for Slack](https://documentation.sailpoint.com/saas/help/collaboration_platform_integrations/slack/index.html)

### 3. Remove, deny and record channel differences

1. Remove Taylor's granted entitlement through ISC My Access with `AR-084 Slack grant cleanup`; Priya approves Remove. Verify membership False and assignment absence. Do not assume Slack offers a revocation action merely because it supports cancellation.
2. Submit a fresh Slack entitlement request with `AR-084 Slack denial`. Priya denies the matching request with `AR-084 no continuing need`. Compare Slack's notification with ISC's terminal item decision and native absence. Save `AR-084-04.png`.
3. Reopen the external request dialog without submitting. Record whether expiration, source/account selection, future start and forms are available in this installed version. Cancel the dialog. Do not claim that inspecting a field proves its end-to-end behavior; link timed/form proof only if separately executed.
4. If an external status is stale, first inspect the existing ISC request. Record delivery/status times and the installed integration's error evidence available to your administrator. Do not resubmit a completed request to repair a display. Use [AR-074](../AR-074/README.md) for a linked handover if unresolved.

**Check:** Denial and fulfillment are checked independently of the channel's displayed status.

### 4. Restore the lab settings

1. Restore the entitlement's original owner/review settings and non-requestability. Restore only workspace feature settings changed for this lab; retain the installed connection and identity mappings.
2. Confirm Taylor has no disposable assignment/membership or pending request and that both external cases map to terminal ISC records. Save `AR-084-05.png` with the final state and capability observations.

**Check:** The integration remains usable and no diagnostic grant is left behind.

## Check the result

A native control and a Slack grant/denial have linked evidence through ISC and AD. Installed-channel limitations are recorded without claiming feature parity.

## Engineering practice

Compare Slack and ISC timestamps for the same denied request. Identify whether a stale message is an external display/delivery problem or an unresolved ISC request before proposing a retry.

## Finish

Keep sanitized external references and the corresponding ISC IDs. Leave Taylor clean, the disposable entitlement hidden and the existing Slack connection intact.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-084-01.png | Native control and workspace prerequisites |
| AR-084-02.png | Slack submission matched to ISC |
| AR-084-03.png | Reviewer decision and native fulfillment |
| AR-084-04.png | Denied case and channel capability observations |
| AR-084-05.png | Restored settings and final access state |

[Previous: AR-083](../AR-083/README.md) · [Course outline](../../README.md) · [Next: AR-085](../AR-085/README.md)
