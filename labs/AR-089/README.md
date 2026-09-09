# AR-089 · Change a profile without assuming existing access changes

**Before you start:** AR-088 or the completed core course. Use Lucas for requested access and Taylor for a narrow automatic role. Record their existing memberships before selecting the groups below.

## Compare assignment origins

1. Create `AP-Acme-Change-Test` with only the disposable GG-ACME-FAULT-049 entitlement. Enable requests with Priya reviewing. Request it for Lucas and approve; verify membership.
2. Create `ROLE-Acme-Change-Test` containing this profile, with an explicit identity list containing only Taylor. Enable and apply. Verify Taylor receives the profile and group automatically.
3. Add `GG-REMOTE-USERS` to the test profile and apply changes. Inspect both identities and native accounts.
4. Record the difference: the role-driven assignment enforces its updated profile, while a previously requested/detected profile does not automatically provision its newly added entitlement. Check the resulting profile representation on Lucas rather than assuming it stays identical.
5. Remove GG-ACME-FAULT-049 from the profile and apply. Verify whether each existing native membership remains. Removed profile entitlements can become independent assignments rather than being revoked by the definition edit.
6. Open each identity's Access and identify the current assignment paths. Remove the test role's eligibility and any requested/independent test assignments with supported removal actions. Verify both native groups against the original record.
7. Disable the empty test role and profile. Write the change plan that would have prevented the mistaken promise `editing the bundle updates everyone the same way`.

**Check:** You separately prove definition changes, automatic enforcement, requested-assignment behavior and explicit cleanup.

**Reset:** No new test membership remains. Preserve any pre-existing Remote Users access and the foundation role.

[Changing profile entitlements](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)

## Screenshots to capture

1. Requested and automatic assignment origins.
2. Before/after profile definition and both target results.
3. Independent residual access, explicit cleanup and change plan.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-088](../AR-088/README.md) · [Course outline](../../README.md) · [Next: AR-090](../AR-090/README.md)
