# AR-029 · Require manager review followed by Security

**Before you start:** AR-028. Henry (`acme.e018`) requests; Ava is his manager. Security reviewers have working sessions.

For any actor whose ISC sign-in is not prepared, complete [AR-008’s additional-session procedure](../AR-008/README.md) before submitting or reviewing.

## Build the ordered review

1. Open **Admin > Identities > Governance Groups > Create Group**. Create `GOV-Security-Review`, owner Noah (`acme.e007`), and save. Open **Membership > Add Members**, select Noah, Evelyn (`acme.e021`) and William (`acme.e022`), then Add. Verify all three identities.
2. Create `AP-Production-Support`, owner Ava, AD source, entitlement `GG-PROD-SUPPORT` using the lab desk procedure.
3. In Access Requests, select reviewers **Manager**, then **Governance Group: GOV-Security-Review**. Require a business reason, save, enable and apply.
4. As Henry, request the profile. Before Ava decides, inspect the pending review and Security's queue.
5. Approve as Ava. Refresh Evelyn's Approvals and locate Henry's request. Approve as Evelyn.
6. Inspect the process and verify native Production Support membership. Check William's queue after the group decision.
7. Remove Henry's test assignment. Submit a fresh request and have Ava deny. Verify that the denied request adds no membership.

**Check:** Manager review precedes Security. A standard governance-group step is satisfied by one group member; it is not a three-person quorum. AR-060 implements quorum separately.

**Reset:** Keep the group and profile with the two review stages. Remove only test assignments.

[Governance groups](https://documentation.sailpoint.com/saas/help/common/users/governance_groups.html), [Ordered review](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html)

## Screenshots to capture

1. Group members and profile reviewer order.
2. Pending manager step and subsequent Security step.
3. Group decision and AD membership/removal.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-028](../AR-028/README.md) · [Course outline](../../README.md) · [Next: AR-030](../AR-030/README.md)
