# AR-014 · Control VPN catalog availability

## Goal

Temporarily stop new VPN requests, verify the catalog change, then make VPN available again. Check that Lucas's existing access remains throughout.

Keep the [Module 2 starting checks](../../M02-READINESS.md) beside your journal.

## Before you start

Complete [AR-013](../AR-013/README.md). Use Acme Admin, Acme Olivia (`acme.e011`) and the AD workstation. Olivia's denied request is concluded; she has no VPN grant or pending VPN request. Lucas keeps his approved VPN membership. Keep your [journal](EVIDENCE.md) open.

This is a catalog administration task. Do not submit a request or remove an existing assignment during it.

## 1. Record current availability

1. In Acme Olivia, verify `acme.e011` in the user menu.
2. Open **Request Center**, choose **Request for Myself** if prompted, then **Access Items > Entitlements**.
3. Clear unrelated filters, search `GG-VPN-USERS` and inspect its details. Confirm the recorded AD source.
4. In Acme Admin, open **Admin > Access Model > Entitlements**, find the same source/group DN and open **Actions > Edit**.
5. Record the entitlement ID, primary owner, reviewer and **Access Requests > Allow Access Requests** setting.

**Check:** Olivia can find the intended VPN item. Priya remains owner and reviewer.

**Screenshot:** `AR-014-01.png`: visible VPN item in Olivia's session.

## 2. Stop new requests for this item

1. In the administrator edit page, open **Access Requests**.
2. Turn **Allow Access Requests** off for this VPN entitlement only and select **Save**. The list action **Mark as Not Requestable** is another route to the same change.
3. Reopen the item and verify the saved off setting. Record the change time.
4. Keep global entitlement requests enabled and leave the owner/reviewer settings unchanged.
5. In Acme Olivia, refresh Request Center after the catalog change becomes effective. Use the same search text and filters as Section 1.

**Check:** VPN is unavailable for a new request in Olivia's catalog. You changed individual requestability, not the global feature.

**Screenshots:** `AR-014-02.png`: saved off setting. `AR-014-03.png`: Olivia's catalog search with username and filters.

## 3. Restore availability

1. Return to the same VPN entitlement in Acme Admin.
2. Enable **Allow Access Requests**, select **Save**, then reopen to verify it stayed on.
3. Confirm Priya's owner/reviewer settings still match Section 1.
4. Refresh Olivia's catalog and repeat the same VPN search.
5. Search `GG-INTERNAL-NOREQUEST` with cleared filters and confirm it remains unavailable.

**Check:** VPN is available again, with the original reviewer. The internal control remains hidden.

**Screenshot:** `AR-014-04.png`: restored VPN item in Olivia's session.

## 4. Verify existing access was retained

1. Run the [native membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for Lucas (`acme.e012`) and `GG-VPN-USERS` on the recorded controller.
2. Confirm direct membership remains and his account identifiers match AR-012.
3. Check Olivia's **My Requests** and **Access**. No request or grant should have been added by this exercise.

**Check:** Changing catalog availability did not revoke Lucas's grant or provision Olivia.

**Screenshot:** `AR-014-05.png`: Lucas's retained native VPN membership.

## If the result differs

Check the signed-in user, item source/DN, saved requestability and search filters before changing another setting. If interrupted while VPN is unavailable, restore Section 3 before continuing to AR-015. Do not toggle global entitlement requests to correct one item's visibility.

## Explain the result

Record the visible, unavailable and restored states with their times. Explain which separate action would be needed to remove an existing assignment. Do not perform that removal here.

## Final verification

- [ ] The individual off setting changed Olivia's catalog result.
- [ ] VPN is requestable again with Priya's policy unchanged.
- [ ] The internal control remains unavailable.
- [ ] Lucas retains VPN; Olivia received no grant or pending request.

## Leave this in place

Keep VPN requestable and all existing assignments intact. Keep Olivia's session for the profile denial in AR-015.

[Entitlement catalog configuration](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html)

## Screenshots to capture

Capture these at the matching steps. Use extra images when needed to show all evidence. Exclude credentials, invitation links and private mailbox details.

| Filename | What to show |
|---|---|
| AR-014-01.png | VPN visible as Olivia |
| AR-014-02.png | Individual requestability off |
| AR-014-03.png | VPN unavailable with username and search |
| AR-014-04.png | Restored visible item |
| AR-014-05.png | Lucas retained VPN membership |

[Previous: AR-013](../AR-013/README.md) · [Lab index](../README.md) · [Next: AR-015](../AR-015/README.md)
