# AR-010 · Make VPN access requestable

<a id="goal"></a>

In this lab, you'll make the imported VPN group available in Lucas's catalog. You will configure approval in AR-011 before submitting a request.

Importing a group makes its entitlement available for configuration. Requestability lets an eligible user ask for it; membership changes only through a separate assignment and fulfilled operation.

## Before you start

Keep the [Module 2 starting checks](../../../reference/M02-READINESS.md) beside the current request details.

Complete [AR-009](../../M01/AR-009/README.md). Keep Acme Admin and Acme Lucas in separate browser profiles, plus your AD administration workstation. Confirm usernames in the ISC user menu.

Lucas (`acme.e012`) has one linked standard AD account and baseline membership. He must have no VPN assignment, VPN membership or pending VPN request on the first pass. Keep the 24-person baseline intact. Have permission to edit request settings and entitlements.

Keep [request and target checks](../../../reference/M02-CHECKS.md) open. Use the AD source and group DNs recorded in AR-003; an item’s name alone is not enough to identify it.

If you are returning after a break, read [where to resume](../../../troubleshooting/M02.md#ar-010) before changing settings or submitting a request.

## Follow the steps

### 1. Record Lucas’s current access

1. As administrator, open **Admin > Identity Management > Identities**, search `acme.e012` and open Lucas.
2. Open **Accounts**, select his AD account and record its DN. Open **Access** and check that VPN is not already assigned.
3. In Acme Lucas, open **Request Center > My Requests**. Check for a pending VPN request before starting another exercise.
4. Run the [direct membership check](../../../reference/M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e012` and `GG-VPN-USERS`. Record the account DN, objectGUID and group DN.

**Check:** VPN is absent in AD and ISC, with no pending VPN request. An existing grant needs investigation; do not delete it to force this starting state.

<!-- AUTHOR_SCREENSHOT_START: AR-010-01 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-010-01.png`
>
> **Show:** Lucas before membership, DN and objectGUID.

<!-- AUTHOR_SCREENSHOT_END: AR-010-01 -->

### 2. Enable entitlement requests

Use Acme Admin.

1. Open **Admin > Global > System Settings**.
2. Select **Feature Settings > Access Request**.
3. Record the current **Enable Entitlement Requests** setting. Enable it if off.
4. Keep other settings, including machine-identity and request-for-others options, unchanged.
5. Select **Save**, reopen the page and confirm the saved setting.

**Check:** Entitlement requests are enabled globally. This does not select which individual groups can be requested.

<!-- AUTHOR_SCREENSHOT_START: AR-010-02 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-010-02.png`
>
> **Show:** Global entitlement-request setting.

<!-- AUTHOR_SCREENSHOT_END: AR-010-02 -->

### 3. Configure the VPN item

1. Open **Admin > Access Model > Entitlements**.
2. Search `GG-VPN-USERS`. Match the AD source and native group DN from Section 1.
3. Select that item’s **Actions > Edit**. Record its existing owner and request settings.
4. Set **Primary Owner** to Priya Shah (`acme.e002`). Set the description to `Remote connectivity for Acme employees using the lab network`. Save.
5. Select **Access Requests** and enable **Allow Access Requests**. Save. You can also mark the selected entitlement requestable from the entitlement list using **Actions > Mark as Requestable**.
6. Reopen the item. Confirm the owner, description, source and requestability persisted. Do not change approval settings yet; AR-011 configures them before submission.
7. Find `GG-INTERNAL-NOREQUEST` on the same source. Confirm its **Allow Access Requests** is off. If enabled on this dedicated course control, turn it off, select **Save** and reopen it to verify.

**Check:** The intended VPN entitlement is requestable and Priya owns it. The internal control remains non-requestable.

<!-- AUTHOR_SCREENSHOT_START: AR-010-03 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-010-03.png`
>
> **Show:** VPN source, owner and requestability.

<!-- AUTHOR_SCREENSHOT_END: AR-010-03 -->

### 4. Check the catalog as Lucas

1. Switch to Acme Lucas and verify `acme.e012` in the user menu.
2. Open **Request Center** and search `GG-VPN-USERS` in access items. Clear unrelated filters.
3. Open the result and compare its name, description and source with your record. Do not submit a request.
4. Search `GG-INTERNAL-NOREQUEST` using the same cleared filters. Record that no requestable result is available.
5. Repeat the native VPN membership check. It must still be absent.

**Check:** Lucas can find VPN but cannot request the internal control. Catalog configuration has not granted VPN membership.

<!-- AUTHOR_SCREENSHOT_START: AR-010-04 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-010-04.png`
>
> **Show:** VPN visible as Lucas.

<!-- AUTHOR_SCREENSHOT_END: AR-010-04 -->

<!-- AUTHOR_SCREENSHOT_START: AR-010-05 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-010-05.png`
>
> **Show:** Hidden internal-control search and filters.

<!-- AUTHOR_SCREENSHOT_END: AR-010-05 -->

## Check the result

### Final verification

- [ ] The correct VPN source and group DN are recorded.
- [ ] Global and individual request settings are saved; Priya is primary owner.
- [ ] Lucas can find VPN; the internal control is unavailable.
- [ ] Lucas still has no VPN membership or pending request.

## Finish

### Leave this in place

Keep VPN requestable, Priya as owner, the internal control hidden and all baseline assignments intact. Continue to AR-011 without submitting yet.

[Entitlement request configuration](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html)
