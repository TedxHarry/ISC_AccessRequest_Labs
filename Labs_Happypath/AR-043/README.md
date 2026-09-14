# AR-043 · Observe removal across overlapping standalone profiles

In this lab, you'll give Alexander two profiles that share VPN, remove one, and inspect both the shared group and the remaining independent group.

## Before you start

Complete [AR-042](../AR-042/README.md). Use Acme Admin, Alexander (`acme.e020`), Lucas (`acme.e012`), Priya and Daniel, plus the AD workstation. Alexander’s ISC session will be prepared below; it does not need to be registered already. Keep the [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Prepare Alexander and record the original permissions

1. As administrator, open **Admin > Identity Management > Identities** and find `acme.e020`. Confirm Alexander White, Engineering, Manager Ava, and one linked standard AD account. Prepare his sign-in with [AR-029 Section 1](../AR-029/README.md#1-prepare-the-five-sessions-and-check-henry), substituting Alexander's username and a unique controlled email. Preserve the complete private HR file and other controlled addresses.
2. In a separate Acme Alexander browser profile, sign in and verify the username. Use [the native check](../../M02-CHECKS.md#inspect-direct-ad-membership) for Alexander: `GG-VPN-USERS`, `GG-REMOTE-USERS` and `GG-FIN-REPORTING` must be False; `GG-ACME-BASELINE` True. Confirm no pending requests or business role assignments. Record his account DN/GUID.
3. Verify `AP-Remote-Worker` contains VPN + Remote Users and is reviewed by Priya for grants/removals. Verify `AP-Finance-Reporting` contains VPN + Finance Reporting and is reviewed by Daniel for grants/removals. Keep Remote Worker's original form setting restored from AR-037.
4. Open **Admin > Global > System Settings > Feature Settings > Access Requests**. Record the original **Enable Requests on Behalf of others** state and mode. Temporarily enable it with **By Everyone for Anyone**, save and reopen. Keep the Finance segment enabled. Lucas will request the Finance item for Alexander; do not change Alexander's department to make it visible.

**Check:** Alexander has no overlapping business access yet. The temporary permission permits the controlled on-behalf request.

### 2. Grant the two profiles

1. As Alexander, open **Request Center > Access Items > Access Profiles**, select `AP-Remote-Worker`, enter `AR-043 standalone Remote Worker`, keep immediate access and his standard account, then save, review and submit. Record the ID. As Priya, open the matching Grant under **Approvals > Access Requests > Requested**, approve and confirm.
2. Follow [Account Activity](../../LAB-DESK.md#find-the-account-activity) and verify VPN and Remote Users True, Reporting False and baseline True.
3. As Lucas, open **Request Center > Request for Others**, search `acme.e020`, select Alexander and **Request for These Identities**. Verify the header identifies Alexander, not Lucas.
4. Select `AP-Finance-Reporting` under **Access Items > Access Profiles**. Enter `AR-043 authorized lab overlap test for Alexander`, keep immediate access and Alexander's standard account, then save, review and submit. Record the ID.
5. As Daniel, inspect requester Lucas, recipient Alexander and the lab-only reason in the matching Grant. Approve with `AR-043 controlled overlap approved`. Follow the activity and verify all three business groups True.
6. As administrator, inspect Alexander's Access Profiles and request history. Record both standalone profile grants; confirm neither is supplied by a business role. Save `AR-043-01.png` showing assignments and the three memberships.
7. Restore the original request-on-behalf state/mode from Step 1, save and reopen it. Do this now; the remaining steps do not need on-behalf permission.

**Check:** Two standalone requested profiles share VPN. Lucas's own memberships did not change.

### 3. Remove Reporting and inspect the overlap

1. As administrator, open **Admin > Identity Management > Identities > Alexander > Access > Access Profiles > AP-Finance-Reporting > Details**. Select **Revoke Access Profile**, enter `AR-043 inspect standalone overlap`, then **Revoke**.
2. As Daniel, inspect Alexander's matching profile Remove request and approve. Follow the removal activity and inspect which group operations it contains.
3. Check Alexander's native groups: **Reporting=False, VPN=False, Remote Users=True, baseline=True**. Save `AR-043-02.png` showing the completed removal and all four results.
4. Refresh imported AD data. Reopen Alexander's Access Profiles and Entitlements. Remote Worker can disappear because its full entitlement set is no longer present; Remote Users remains as an individual entitlement. Record the current display separately from the historical Remote Worker request.

**Check:** A second standalone profile does not protect the shared VPN entitlement during this revocation. This is the documented [standalone-profile overlap behavior](https://documentation.sailpoint.com/saas/help/access/access-profiles.html#deprovisioning-with-access-profiles). AR-044 tests access still required by a role.

### 4. Remove the remaining Remote Users access

1. After aggregation/identity processing completes, reopen Alexander's Access and verify Remote Worker is no longer assigned because VPN was removed. Record Remote Users as the remaining individual entitlement.
2. As Alexander, re-request `AP-Remote-Worker` through **Request Center > Access Items > Access Profiles** with reason `AR-043 restore complete profile for cleanup`, immediate access and his standard account. Save, review and submit. As Priya, inspect and approve the Grant. Follow the activity and verify VPN and Remote Users both True. If a stale profile prevents the request, finish aggregation/identity processing and inspect its assignment before retrying; do not submit repeated duplicates.
3. As Alexander, open **My Access > Access Profiles > AP-Remote-Worker**, select **Revoke Access Profile**, enter `AR-043 cleanup complete`, and **Submit**. As Priya, inspect and approve the removal. Follow its activity and verify VPN and Remote Users both False.
4. Refresh imported AD data. Verify all three business groups False, baseline True and no pending test request. Save `AR-043-03.png`. Reconfirm the original request-on-behalf configuration is restored.


**Check:** Both the shared group and the leftover independent entitlement have been accounted for and removed through ISC.

## Check the result

You recorded the two standalone grants, loss of shared VPN on Reporting revocation, and the remaining Remote Users entitlement. All test business memberships are removed and the original on-behalf mode is restored.

## Finish

Keep Alexander’s standard account and working ISC session for AR-044. Leave all three business groups absent, preserve baseline, restore request-on-behalf permissions and retain the business profiles.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-043-01.png | Both standalone profiles and all three business groups |
| AR-043-02.png | Reporting and shared VPN removed; Remote Users retained |
| AR-043-03.png | Cleanup and final four memberships |

[Previous: AR-042](../AR-042/README.md) · [Course outline](../../README.md) · [Next: AR-044](../AR-044/README.md)
