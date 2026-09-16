# Module 3 · Prepare for business access requests

Start with C02 from AR-015. Keep your private journals, [actual environment values](LAB-VALUES.md), and [request and AD checks](M02-CHECKS.md) open. You will reuse the existing AD accounts and groups.

## Check your starting point

1. As administrator, open **Admin > Identity Management > Identities**. Find Olivia (`acme.e011`, E011), Daniel (`acme.e003`, E003), Priya (`acme.e002`, E002) and Lucas (`acme.e012`, E012). Confirm Acme Employees and one linked standard AD account each.
2. Sign in to their existing browser profiles and verify the username in each user menu. Olivia requests Finance access; Daniel reviews Finance profiles and the role; Priya reviews the direct VPN grant.
3. In Acme Admin, inspect Olivia's identity **Access**. Switch to Acme Olivia for **Request Center > My Requests**. Also use [administrator request details](M02-CHECKS.md#inspect-a-request-as-administrator) to find requests submitted for Olivia by another person. She must have no unfinished business request, Remote Worker assignment, or Finance assignment.
4. Run the [direct AD membership check](M02-CHECKS.md#inspect-direct-ad-membership) for Olivia against `GG-VPN-USERS`, `GG-FIN-REPORTING` and `GG-FIN-AP`. All three must be False. Confirm `GG-ACME-BASELINE` is True. Confirm Lucas's VPN is True.
5. Check C02's retained configuration: 24 standard accounts and baseline assignments, requestable VPN, enabled/requestable AP-Remote-Worker, and Liam and Olivia without Remote Worker groups. Resolve incomplete C02 operations before proceeding.

**Check:** You have a clean Finance recipient and working requester/reviewer sessions. Record the AD source name/ID, account DNs and objectGUIDs, three group DNs and the verification controller. A failed lookup is an error to resolve, not evidence of absent membership.

## State passed between labs

| Finish | Keep configured | Recipient state after cleanup |
|---|---|---|
| AR-016 | AP-Finance-Reporting: GG-FIN-REPORTING + GG-VPN-USERS; Daniel owns and reviews grants/removals | Olivia lacks both groups and the requested profile |
| AR-017 | Finance Services application with Reporting profile; enabled for users and requests | Olivia remains without Finance business access |
| AR-018 | AP-Finance-AP: GG-FIN-AP; Finance Services has both profiles; ROLE-Finance-Analyst contains both | Olivia has no requested Finance role/profile and none of the three groups |
| AR-019 | Same definitions; explicit Priya review for direct VPN removals; evidence from three separate grant/removal cycles | Olivia returns to no Finance/VPN access between cycles and at the end |
| AR-020 | Finance Services restored with both profiles and its original settings | Olivia still lacks all three groups; Lucas retains VPN |
| AR-021 / C03 | HR Services, separate Payroll and Benefits profiles owned by Elena; Finance configuration retained | James lacks both HR groups after Payroll removal; Olivia remains clean |

Every row preserves all baseline assignments and Lucas's direct VPN grant. A definition remaining enabled is different from a recipient retaining an assignment.

## Prepare James and Elena before AR-021

James is `acme.e014` (E014); Elena is `acme.e004` (E004). They already have standard AD accounts from Module 1.

1. In **Admin > Identity Management > Identities**, open each identity. Check employee number, Acme Employees profile and the linked AD account. Confirm James's manager is Elena.
2. Open the latest complete private `acme-hr-working.csv`. Give these two rows unique email inboxes you control. Record the current row count and preserve every row and the controlled addresses already used by other lab participants. The first pass has 24 rows; after AR-047 the file may also include Taylor. Do not replace this file with the original public CSV.
3. Open **Admin > Connections > Sources > Acme HR > Account Management > Account Aggregation**. Upload the complete working file, inspect the aggregation result and wait for **Admin > Dashboard > Monitor** processing to finish.
4. Reopen both identities and confirm their Work Email values. Keep this version of the file for later imports.
5. Create separate browser profiles **Acme James** and **Acme Elena** before opening either invitation. Read **Acme Employees > Settings > Sign-in Method**. Keep the current route. For an unregistered ISC-password identity, select **Actions > Invite Identity**, open the invitation in that person's separate browser profile, and finish registration as in AR-008. For external authentication, use the route already established in AR-008. Do not copy an invitation into another person's session.
6. In each prepared browser profile, sign out and back in to confirm each username. James needs ordinary requester access; Elena can review requests assigned to her without administrator permissions.

**Check:** Both sessions work and the imported population matches your recorded current row count, including all original 24 employees. Keep passwords and registration links out of your journal and screenshots.

## Resume or repeat safely

If later labs changed the profile policies, application associations or role contents, record that current configuration before repeating this earlier module. Do not reset later work to the first-pass values without accounting for its assignments and requests.

Inspect an existing course object before choosing Create. Reuse it when its source, groups and policies match the lab. Stop on a same-name object with a different source or unexpected assignments; do not delete it to make the instructions fit.

If a request is pending, reopen that request and finish its current stage. If the grant completed, continue with verification and removal. If cleanup completed, retain the definition and begin the next exercise. Do not remove a business group directly in AD to reset a requested assignment.

When following the other folder after completing this module, use C03 and the retained definitions. Repeat the requested grant/removal cycles only after checking the recipient is clean. Engineering investigations can use the saved configuration and evidence without recreating the objects.

## If your result differs

| Observation | Next check |
|---|---|
| An item is missing | Verify the signed-in recipient, existing assignments, object enablement/requestability, then application association and any existing segments |
| Owner did not receive approval | Match recipient/item/time in administrator Approval Management; inspect actual Assignees and the requested object's policy |
| Approved but only some groups arrived | Inspect each account activity operation and group DN; resolve partial fulfillment before removal or a new test |
| Revoke is unavailable | Check requested versus automatic assignment and whether a role supplies the profile; follow the lab's removal route for that object type |
| A group remains after removal | Check the operation result, other roles/assignments and AD replication on the recorded controller; do not infer success from the disappearance of a card |

Two standalone profiles sharing a group do not provide a universal guarantee that the group survives either profile's removal. These exercises separate grants and remove them between tests. Record any overlapping assignment before acting. [Profile revocation behavior](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)
