# AR-015 · Deliver a second working request independently

**Before you start:** AR-014. Liam (`acme.e008`) requests; Priya owns and reviews.

Acme wants a Remote Worker bundle containing VPN and remote-tool access.

## Build and demonstrate

1. Record Liam's membership in `GG-VPN-USERS` and `GG-REMOTE-USERS`. Identify any existing grant before proceeding.
2. Follow the lab desk profile procedure to create `AP-Remote-Worker`, owner Priya, AD source, with exactly those two entitlements.
3. Require primary-owner approval and a request reason. Enable the profile and apply its changes.
4. As Liam, find and request the profile with reason `AR-015: Remote Worker acceptance test`.
5. Predict the reviewer, then inspect the real pending approval. Have Priya approve.
6. Track the activity and prove both direct group memberships in AD. Record the profile assignment and source account in ISC.
7. As a separate negative case, request the profile for a clean recipient using that person's own session and deny it. Verify neither group is newly added.
8. Write a short handover containing profile/source IDs, owner, groups, reviewer and the two test outcomes.

**Pass when:** Both groups are proven for the approved case, the denied case has no new grants, and your handover explains how to investigate a failure.

**Reset:** Retain the enabled profile. Remove Liam's test profile through the lab desk removal procedure unless its memberships existed before this lab; preserve pre-existing access. Record the final state.

[Profile management](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)

## Screenshots to capture

1. Profile entitlements and approval configuration.
2. Approved and denied control requests.
3. Both target memberships and cleanup result.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-014](../AR-014/README.md) · [Course outline](../../README.md) · [Next: AR-016](../AR-016/README.md)
