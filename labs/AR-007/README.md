# AR-007 · Provision the Remaining Standard Accounts

**Prerequisites:** Complete both target checks in [AR-006](../AR-006/README.md). Lucas and Liam have working baseline membership and correctly linked accounts.

## Your assignment

Extend the proven baseline assignment to all 24 Acme employees. Use the existing role and profile. Finish with one standard AD account per identity. Sofia's extra account belongs to the later AR-026 account-selection exercise.

## 1. Check the population before expanding

1. Compare the 24 Acme identities with the [HR roster](../../datasets/acme-hr-baseline.csv). Verify uid, identificationNumber, first name, last name, and displayName are populated.
2. Search AD for the remaining usernames before assigning access. Record any account that already exists. Correlate a legitimate existing account using AR-004's employee-number match before giving it the baseline role. Do not permit an unexpected existing account to become a duplicate-creation attempt.
3. Confirm the saved Create Account policy still points to AcmeLab/Users and the baseline profile still contains only GG-ACME-BASELINE.

**Check:** The journal identifies which employees already have accounts and which require creation.

## 2. Expand in two stages

1. Open **Admin > Access Model > Roles > ROLE-Acme-AD-Baseline > Define Assignment**.
2. Retain Lucas and Liam in **Identity List**. Add Priya (`acme.e002`) and Daniel (`acme.e003`) with the + control. Verify the four selected identities, save, and select **Apply Changes** from the role list.
3. Wait for processing and provisioning. Use the activity and AD checks from AR-006 for both new accounts. Resolve errors before adding more identities.
4. Return to the identity list and add the remaining 20 Acme identities. Use the journal roster and verify usernames before selecting them. Retain the four existing members.
5. Confirm the list contains exactly the 24 Acme identities and no unrelated identities. Save and apply changes.

Identity List keeps the provisioning population explicit. Removing a user from that list can remove the assigned access, so preserve existing members while expanding it. [Role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html)

## 3. Verify every account

After each provisioning batch finishes, run **one AD account aggregation** using AR-003 Section 6. Wait for completion and inspect its result. Do not start an aggregation for every employee. Then complete each row in the [journal](EVIDENCE.md):

1. Inspect the AD account's sAMAccountName, employeeID, UPN, and DN. Compare them with the intended employee and Users OU. Record its enabled state.
2. Confirm direct membership in GG-ACME-BASELINE. Check for unintended duplicate usernames or accounts in another OU.
3. Review failed or pending Account Activity. Do not count a submitted operation as a completed account.
4. After the batch aggregation, open the employee’s ISC identity > **Accounts** and verify the actual linked AD DN. Investigate a wrong link using AR-004 before starting another source-wide aggregation.
5. Check the 14 business groups against the membership baseline recorded in AR-003. This role should have granted only baseline access.

**Check:** There are 24 standard course AD accounts, correctly linked to 24 identities, and 24 course members in GG-ACME-BASELINE. Source-wide counts may include unrelated users. Lucas was reused; in a fresh run, the other 23 accounts were provisioned.

## Troubleshooting practice

If an account fails, record the employee, failing operation, exact error, target state, correction, and retest. Compare it with a successful account from the same batch. Keep successful assignments in place while diagnosing the failed account.

For a deliberate fault exercise later, use a separate test identity and a configuration isolated from this baseline. Do not change the shared Create Account OU to an invalid value while these assignments can retry.

## Completion and screenshots

- [ ] All 24 expected accounts and identity links are individually verified.
- [ ] The role's identity list contains exactly the course population.
- [ ] All 24 course accounts have baseline membership.
- [ ] No duplicate, failed, or pending course account remains unresolved.
- [ ] Business group memberships are unchanged by the baseline assignment.

| Filename | What to show |
|---|---|
| AR-007-01-four-person-batch.png | Lucas, Liam, Priya, and Daniel in the saved list |
| AR-007-02-complete-assignment.png | All 24 selected identities; multiple images if needed |
| AR-007-03-account-activity.png | Batch outcomes and any resolved failure |
| AR-007-04-ad-users.png | Standard accounts in the Users OU |
| AR-007-05-baseline-members.png | Baseline group's 24 course members |
| AR-007-06-account-links.png | Representative linked accounts; journal covers every identity |

[Previous: AR-006](../AR-006/README.md) · [Next: AR-008](../AR-008/README.md)
