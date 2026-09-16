# AR-080 · Require reauthentication for a sensitive approval

In this lab, you'll make Priya reauthenticate before approving an isolated profile, then compare a denied request and restore the settings.

## Before you start

Complete [AR-049](../AR-049/README.md) and [AR-052](../AR-052/README.md). Use Henry (`acme.e018`), Priya and Acme Admin. Priya must already be able to sign in through the tenant's working SSO. Keep that identity provider configuration intact. Prepare missing sessions with [AR-029](../../labs/AR-029/README.md#1-prepare-the-five-sessions-and-check-henry). Open your [journal](EVIDENCE.md); this lab does not depend on JIT.

## Follow the steps

### 1. Prepare an isolated approval

1. Verify Henry lacks GG-ACME-FAULT-049, has no pending request for it and retains his baseline account. Keep course developer subscriptions disabled.
2. Use **Admin > Access Model > Access Profiles > Create New** to create `AP-Acme-Approval-Features`, description `Isolated approval feature tests`, owner Priya and your AD source. Add only the current GG-ACME-FAULT-049 under Manage Entitlements. On a repeat, reuse the recorded profile after checking its contents.
3. Under Access Requests, enable requests, require grant approval by Primary Owner and a reason, and require removal approval by Primary Owner. Keep form/date requirements off. Save, enable and Apply Changes when offered. Do not add automatic eligibility or a segment.
4. Read **GET `{{apiBase}}/access-request-config/v2`** as Acme API Admin using [Configuration changes](../../API-WORKBENCH.md#configuration-changes). Save the original `reauthorizationEnabled` and complete configuration. Set only that field to true with the documented complete PUT, then GET and compare all other fields.
5. Edit the new profile's **Reauthentication** tab, record the original value and enable **Require Approval Reauthentication**. Save/reopen. If the tab is absent after confirmed global enablement and working SSO, mark capability Not available and restore the changed flag; do not alter SSO to force the test. Save `AR-080-01.png`.

**Check:** Only the course profile opts into the additional approval requirement. [Reauthenticated approval setup](https://documentation.sailpoint.com/saas/help/requests/reauthenticated_approvals.html)

### 2. Approve through the extra authentication step

1. As Henry, open **Request Center > Access Items > Access Profiles**, select AP-Acme-Approval-Features, reason `AR-080 authenticated approval`, then Save, Review Request and Submit Request. Record the ID.
2. As Priya, open the matching Grant under **Approvals > Access Requests > Requested**. Choose Approve, enter `AR-080 sensitive test access justified`, and complete the additional SSO authentication. Finish the approval confirmation. A screenshot of the earlier login is not evidence of this additional step.
3. As administrator, use **Search**, select Events and narrow to Priya and the decision time. Inspect the matching approval audit by recipient/item/request. Record actor, time, comment and indication of reauthentication. Hide the reauthentication token as well as ordinary credentials. Save `AR-080-02.png`.
4. Follow [Account Activity](../../LAB-DESK.md#find-the-account-activity) and verify Henry's native disposable membership True. A successful SSO prompt does not itself prove provisioning.

**Check:** The additional authentication and resulting decision are connected to this request.

### 3. Remove the grant and compare denial

1. As Henry, open **My Access > Access Profiles > AP-Acme-Approval-Features > Revoke Access Profile**, reason `AR-080 grant complete`, and submit. Priya reviews the matching Remove, completes any required authentication shown and approves. Follow the operation and verify disposable False and assignment gone.
2. Henry submits a new profile request with `AR-080 denial comparison`. Priya selects Deny with `AR-080 no business need`. Record whether extra authentication is requested; the documented requirement applies to approval, not denial/reassignment.
3. Verify the terminal denial and native absence. Save `AR-080-03.png` with both removal and denial evidence.

**Check:** Compare the two actual paths without removing protection to make a decision easier.

### 4. Restore and retain the isolated profile

1. Restore the profile's saved reauthentication setting. Use a fresh configuration GET, change only reauthorizationEnabled back to its original value, PUT the complete current body and GET to verify. Preserve concurrent unrelated changes.
2. Turn off requestability and disable AP-Acme-Approval-Features after all requests finish. Retain its ID, Priya owner, one entitlement and removal settings for AR-081. Verify Henry still has his original account and baseline, with no disposable membership or pending work. Save `AR-080-04.png`.

**Check:** SSO remains intact and temporary feature settings are restored.

## Check the result

The grant has authenticated approval evidence and native provisioning proof. Removal and denial leave Henry clean, and the global/item settings match their saved values.

## Finish

Keep sanitized decision evidence and the disabled isolated profile. Resolve any interrupted authentication request; retain no tokens in screenshots or journals.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-080-01.png | Saved global and item settings |
| AR-080-02.png | Additional authentication and sanitized approval audit |
| AR-080-03.png | Grant removal and denial comparison |
| AR-080-04.png | Restored settings and clean Henry account |

[Previous: AR-079](../AR-079/README.md) · [Course outline](../../README.md) · [Next: AR-081](../AR-081/README.md)
