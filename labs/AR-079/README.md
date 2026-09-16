# AR-079 · Activate, extend and expire Just-In-Time access

In this lab, you'll request a JIT assignment for Sofia, activate it, compare early deactivation with expiry, and verify the selected AD account each time.

## Before you start

Complete [AR-026](../AR-026/README.md) and [AR-045](../AR-045/README.md). Use Sofia (`acme.e009`), Priya, Acme Admin and the AD workstation. Your tenant needs Privilege on Demand/JIT and the direct-connected AD source. GG-IT-ADMINS must still be an ordinary course group with no real administrative permissions. Open your [journal](EVIDENCE.md). If this capability is unavailable, mark this lab Not run and continue with an available track.

## Follow the steps

### 1. Save the assignment and activation settings

1. Record both Sofia account DNs from AR-026. Verify neither has GG-IT-ADMINS membership, a standing assignment for it or a pending request. Use [native checks](../../M02-CHECKS.md#inspect-direct-ad-membership) separately for `acme.e009` and `acme.e009.admin`. Preserve baseline on the standard account only.
2. In **Admin > Access Model > Entitlements**, open GG-IT-ADMINS on your AD source. Save its ID, owner, requestability and approval settings. Set owner Priya; under **Access Requests** enable requests and Require Approval, choose Reviewer/Primary Owner, require a user comment and add Primary Owner for removal. Leave form and required end date off.
3. Open **Admin > System Settings > Feature Settings > Just-In-Time > Entitlements Assignments**. Record the toggle and full existing entitlement list. Enable Just-In-Time for future assignments and use **Add Entitlements > GG-IT-ADMINS > Add Selected Entitlements**. Add only this group; preserve the other entries.
4. On **Activation**, record maximum/default activation and extension durations. Prefer the existing values if you can observe them. Otherwise choose the shortest supported activation and extension values offered by the tenant, with defaults no greater than their maxima; record exact values and Save. These are global settings, so use a dedicated lab window with no other test activations. Save `AR-079-01.png`.

**Check:** These settings affect future assignments/activations. An older standing assignment is not converted by adding the entitlement to this list. [JIT configuration](https://documentation.sailpoint.com/saas/help/access/jit_access_provisioning.html)

### 2. Request eligibility without standing membership

1. As Sofia, open **Request Center > Access Items > Entitlements**, select GG-IT-ADMINS on the AD source, choose the standard `acme.e009` account and enter `AR-079 JIT eligibility`. Save, Review Request and Submit Request once. Record the ID.
2. Priya opens **Approvals > Access Requests > Requested**, verifies Sofia and the standard account, then approves with `AR-079 JIT lab approved`.
3. As Sofia, open **Home > Launchpad > Just-In-Time Access** and locate the entitlement. Record the assignment and account. Verify native membership is still False on both accounts before activation. Save `AR-079-02.png`. If it provisioned standing access, inspect the assignment type and resolve it before continuing; do not count that as a JIT result.

**Check:** Sofia can activate the entitlement but does not yet hold its target membership.

### 3. Activate, extend and deactivate

1. From Sofia's JIT list select **Activate** for this entitlement, review the duration/account and confirm. Record the activation time and scheduled end. Follow [Account Activity](../../LAB-DESK.md#find-the-account-activity) and require standard membership True, administrative account False.
2. As administrator, open **Admin > Dashboard > Just-In-Time Access**, select the assignment type and match Sofia's activation. Record its ID, account and end time.
3. When 30 minutes or less remain, inspect **Extend** in Sofia's JIT list. Select an allowed extension, confirm it and record the old/new end times. If the selected duration or tenant capability prevents this case, mark extension Not run rather than pretending an early invisible button is a fault.
4. Select **Deactivate** and confirm Deactivate. Verify actual native removal on the standard account and no change on the other account. Record the completed operation time, separately from the click. Save `AR-079-03.png`.

**Check:** Extension changes the activation window; deactivation ends the current session without deleting eligibility. [Activation, extension and deactivation](https://documentation.sailpoint.com/saas/user-help/launchpad.html)

### 4. Observe real expiry and remove eligibility

1. Activate again for the supported duration recorded above. Verify native membership appears and note the new end time. Do not manually deactivate this case. Observe through expiry, recording scheduled end, removal operation and first confirmed native absence. If you stop observing early, label expiry Pending.
2. After removal, verify the JIT assignment still exists for activation. Save `AR-079-04.png` with both account checks and the expired activation.
3. As Sofia, open **My Access > Entitlements > GG-IT-ADMINS > Assignment**, select the standard-account assignment and **Revoke Assignment** with `AR-079 eligibility no longer needed`. Priya approves the matching Remove. Verify eligibility disappears and both native memberships remain False.
4. Restore the entitlement's original requestability/owner/review settings. Remove only the lab-added future-assignment list entry, restore the original toggle and any changed durations. Reopen settings and record final assignment absence in `AR-079-05.png`. Changing the list alone does not remove an existing JIT assignment.

**Check:** Both temporary access and the authorization to activate it are removed. Preserve Sofia's two accounts and original baseline.

## Check the result

The evidence distinguishes approved eligibility, activation, extension, early deactivation, real expiry and final assignment removal. Each native change targets Sofia’s standard account only.

## Engineering practice

Compare your two activation histories. Identify what proves one ended by a user action and the other by expiry. Use the actual operation and native timestamps; do not report scheduled expiry as completed removal.

## Finish

Keep the before/after settings and activation timeline. Resolve any active session before pausing, and restore all settings changed in this lab. Mark any unobserved timed case Pending.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-079-01.png | JIT list, durations and original settings |
| AR-079-02.png | Approved JIT eligibility with no native membership |
| AR-079-03.png | Activation, extension and early deactivation |
| AR-079-04.png | Second activation and actual expiry |
| AR-079-05.png | Eligibility removal and restored settings |

[Previous: AR-078](../AR-078/README.md) · [Course outline](../../README.md) · [Next: AR-080](../AR-080/README.md)
