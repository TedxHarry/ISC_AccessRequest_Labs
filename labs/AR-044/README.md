# AR-044 · Compare automatic access with requested access

**Before you start:** AR-043. Use Alexander and GG-REMOTE-USERS. Do not alter the foundation role.

## Create a narrowly scoped automatic assignment

1. Create `AP-Acme-Auto-Test` containing only GG-REMOTE-USERS, owner Priya, using the lab desk profile procedure. It does not need to be requestable.
2. Create `ROLE-Acme-Auto-Test` containing this profile. Set membership to an explicit identity list containing only Alexander. Enable the role and apply changes.
3. Verify the role is assigned and Remote Users membership appears. Record the automatic assignment origin.
4. Inspect the removal actions on Alexander's Access. Record any restriction on removing policy-assigned access. Do not bypass it by deleting the AD account.
5. Remove Alexander from this test role's membership list, save and apply changes. Follow the resulting activity and verify membership disappears if no other assignment requires it.
6. Compare with AP-Remote-Worker requested access from AR-043. Explain why eligibility policy must be corrected when the access is automatically required.

**Check:** The assignment follows the explicit test role criteria, and removing that eligibility provides a controlled removal path.

**Reset:** Disable the empty test role and test profile after verifying removal. Keep ROLE-Acme-AD-Baseline and its 24-member list unchanged.

[Automatic role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html)

## Screenshots to capture

1. Test role's one-identity membership criteria.
2. Automatic assignment and native membership.
3. Eligibility removal and preserved baseline access.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-043](../AR-043/README.md) · [Course outline](../../README.md) · [Next: AR-045](../AR-045/README.md)
