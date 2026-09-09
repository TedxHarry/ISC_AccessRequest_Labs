# AR-010 · Make VPN access requestable

**Before you start:** Complete AR-009. Use the administrator and Lucas (`acme.e012`).

Lucas needs remote connectivity. Make only the VPN entitlement available, then check the catalog using his ordinary session.

## Before you open the settings

Keep the administrator and Lucas browser profiles separate. Check Lucas's **Access**, linked AD account and **My Requests**. On the first pass he must have baseline access, no VPN membership or assignment, and no pending VPN request. Run the [native membership check](../../LAB-DESK.md#check-membership-in-ad), recording his DN and objectGUID. Use the [Module 2 starting checks](../../M02-READINESS.md) if your state differs.

Record VPN's current owner, requestability, source and native group DN before editing. Capture the before membership as `AR-010-01.png`.

## Configure and check

1. As administrator, open **Admin > Global > System Settings > Feature Settings > Access Request**. Record the current settings. Enable entitlement requests and save. Do not change machine-identity or request-for-others options.
2. Open **Admin > Access Model > Entitlements**. Search for `GG-VPN-USERS`. Confirm the AD source and group DN match AR-003. If more than one result has that name, use the source and DN to select the correct one.
3. Choose **Actions > Edit** for that entitlement. Set Priya (`acme.e002`) as primary owner. Give the item a description such as `Remote connectivity for Acme employees using the lab network`. Save.
4. Select its **Actions > Mark as Requestable**. Reopen **Access Requests** and verify **Allow Access Requests** is on. Capture the global setting as `AR-010-02.png` and the saved item settings as `AR-010-03.png`.
5. In Lucas's session, open Request Center and search for VPN. Open the result and verify the description and source. Do not submit yet. AR-011 configures the reviewer before the first request.
6. Search for `GG-INTERNAL-NOREQUEST`. It must remain unavailable. If it appears, inspect that specific entitlement's requestability; do not turn off all entitlement requests.

Capture the visible VPN item as `AR-010-04.png` and the negative search, including search text and username, as `AR-010-05.png`. Clear filters before treating an empty search as proof. Repeat the AD check to confirm membership is unchanged.

**Check:** Lucas can find the intended VPN entitlement, while the negative control remains unavailable. Catalog configuration has not itself added him to VPN in AD.

If VPN is missing, check global enablement, the individual entitlement and any existing segment restrictions. Allow the saved catalog change to become effective, then refresh Lucas's session.

**Leave for the next lab:** VPN remains requestable with Priya as owner.

[Entitlement configuration](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html)

## Your ticket: the item is requestable but nobody can request it

Supplied case: VPN is imported and marked requestable, but global entitlement requests are off. Write the setting you would change and how you would prove the fix without granting access.

<details>
<summary>Compare your answer with the mentor's solution</summary>

Enable entitlement requests globally in the training tenant, retain the individual VPN setting, and retest as Lucas. Verify the hidden comparison item remains unavailable and native VPN membership stays unchanged. Importing a group does not by itself make a working request catalog.

</details>

## If you return to this lab later

Reuse the same entitlement. If Lucas already received VPN in AR-012, preserve that access. Use Olivia's prepared session for a repeat visibility comparison after checking her assignments and pending requests. Record the changed actor. Do not remove Lucas's retained grant to recreate an empty starting state.

## What to leave in place

| Item | Required state |
|---|---|
| VPN | Requestable; Priya is primary owner; correct source and DN |
| GG-INTERNAL-NOREQUEST | Not requestable |
| Lucas, first pass | Baseline retained; no VPN request submitted or membership added |

## Completion checklist

- [ ] Catalog visibility and unchanged target membership agree.
- [ ] Your ticket diagnosis and comparison are recorded before checking the solution.
- [ ] Actual tenant observations are distinguished from the supplied ticket case.
- [ ] Pending requests are accounted for and the retained state matches the next lab.

Record results in your [evidence journal](EVIDENCE.md). Keep the [lab desk](../../LAB-DESK.md) open for native verification.

## Screenshots to capture

Capture these at the matching steps above. Use extra images when one view cannot show everything. Keep secrets and personal mailbox details out of shared images.

| Filename | What to show |
|---|---|
| AR-010-01.png | Lucas before membership, DN and objectGUID |
| AR-010-02.png | Global entitlement-request setting |
| AR-010-03.png | VPN source, owner and saved requestability |
| AR-010-04.png | VPN visible as Lucas |
| AR-010-05.png | Hidden comparison item search, username and filters |

[Previous: AR-009](../AR-009/README.md) · [Course outline](../../README.md) · [Next: AR-011](../AR-011/README.md)
