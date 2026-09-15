# AR-064 · Connect an isolated developer event subscriber

In this lab, you'll prepare a subscriber, validate its filter and trace one request from ISC to your service.

## Before you start

Complete [AR-049](../AR-049/README.md). Taylor's account and disposable group are retained with clean memberships and restored permissions. Have Python 3, Postman Desktop, an administrator who can manage event subscriptions, and your AD workstation. Prepare the Acme API Admin environment from [AR-052](../AR-052/README.md) for filter validation. An existing controlled HTTPS route is required for live delivery; local tests can be completed first. Open your [journal](EVIDENCE.md).

## Follow the steps

### 1. Prepare the profile and sessions

1. Follow [Prepare the isolated access item](../../SUBSCRIBER-WORKBENCH.md#prepare-the-isolated-access-item). This creates AP-Acme-Subscriber-Test with one disposable group and Priya as grant/removal reviewer, and verifies Taylor's sign-in.
2. Record Taylor's identity ID, profile ID, entitlement ID/native value, group GUID and account DN/GUID. Confirm Taylor has no disposable-group membership or pending request. Save `AR-064-01.png`.
3. Open **Admin > Event Triggers**. Verify Access Request Submitted is available as a Response Required trigger. Inspect its Input/Output Schema. Under Subscriptions, check whether another subscriber already occupies this trigger. Keep another integration untouched; use local tests if no dedicated course subscription can be created.

**Check:** The requester, access item and subscription slot are identified before the service is enabled.

### 2. Prove the local and HTTPS responses

1. Follow [Start the local service](../../SUBSCRIBER-WORKBENCH.md#start-the-local-service). Create the private mode file, start the service and send the authenticated synthetic Submitted body. Require approved true and a separate unauthenticated 401. Save `AR-064-02.png` without credentials.
2. Complete [Verify the HTTPS route](../../SUBSCRIBER-WORKBENCH.md#verify-the-https-route). Match the external test to the local terminal log. If this route is not ready, label tenant delivery Not run and keep live subscriptions disabled.
3. Keep submitted set to approve, dynamic set to reviewer and async absent/false. Priya's real username remains the response approver. Keep the service terminal open.

**Check:** An HTTPS request reaches the authenticated JSON service. A successful local response has not yet demonstrated tenant delivery.

### 3. Validate and save the subscription

1. Follow [Scope the subscription](../../SUBSCRIBER-WORKBENCH.md#scope-the-subscription-before-enabling-it), using name `SUB-Acme-AR-Submitted`, description `Taylor isolated preliminary review`, trigger Access Request Submitted and URL path `/submitted`.
2. Run the positive Taylor/profile/Add filter validation and the three negative input variants. Save `AR-064-03.png` with response fields and the final filter. Keep authentication separate: the validation API uses the administrator bearer token; the Integration URL uses the subscriber's Basic Auth.
3. Save the subscription Disabled, reopen and verify the exact trigger, Synchronous mode, URL and filter. Record its ID. Leave the test profile on direct Primary Owner review; do not attach a native workflow to it.

**Check:** Only the intended recipient/item grant matches. Do not proceed if the saved filter or any negative test differs.

### 4. Trace one live request without granting access

1. Enable SUB-Acme-AR-Submitted. As Taylor, use [Submit one Taylor request](../../SUBSCRIBER-WORKBENCH.md#submit-one-taylor-request), reason `AR-064 subscriber delivery`. Stop before a reviewer decision.
2. Open **Admin > Event Triggers > Subscriptions > Menu > Activity Log** for this subscription. Match the invocation input's request ID, requestedFor Taylor and requestedItems profile with the terminal record. Record invocation status and the approved true response.
3. Inspect Priya's matching Grant in **Approvals > Access Requests > Requested**. Verify the request reached normal review, then deny with `AR-064 delivery observed`. Confirm the request is terminal and native disposable membership False. Save `AR-064-04.png`.
4. Disable the subscription and reopen its saved state. If you completed AR-058, compare its native workflow input with this developer invocation: native requestedItem is one object; developer requestedItems is an array. Record the distinct configuration and IDs. Otherwise mark only that comparison Unavailable; this developer track does not require Adaptive Approvals.

**Check:** A live event reached the subscriber, its preliminary approval let normal review continue, and Priya's denial left no grant.

## Check the result

The local and HTTPS controls pass, the filter matches only the intended test inputs, and one real request has matching invocation/service/review evidence. Local-only work remains labelled separately from live delivery.

## Finish

Leave SUB-Acme-AR-Submitted disabled and submitted in approve mode. Keep the isolated profile enabled for AR-065, Taylor clean and the original account retained. Keep private mode/authentication details outside the repository. No Requests on Behalf change is needed.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and callback secrets. Use letter suffixes when one result needs several images. Label synthetic requests separately from tenant requests.

| Filename | What to show |
|---|---|
| AR-064-01.png | Isolated profile, identities and native starting state |
| AR-064-02.png | Local and HTTPS 200/401 controls |
| AR-064-03.png | Positive and three negative filter results |
| AR-064-04.png | Live invocation, normal denial, native absence and disabled subscription |

[Previous: AR-063](../AR-063/README.md) · [Course outline](../../README.md) · [Next: AR-065](../AR-065/README.md)
