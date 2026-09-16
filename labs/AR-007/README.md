# AR-007 · Provision the Remaining Standard Accounts

<a id="what-youll-do"></a>

In this lab, you'll expand the baseline role from the two verified pilot accounts in AR-006 to all 24 Acme identities and check the remaining account creations.

## Before you start

**Prerequisites:** Complete both target checks in [AR-006](../AR-006/README.md). Lucas and Liam have working baseline membership and correctly linked accounts.

<a id="before-you-open-the-settings"></a>

Use the administrator session and the existing ROLE-Acme-AD-Baseline and AP-Acme-AD-Baseline.

Lucas and Liam must each have one correctly linked standard account and baseline membership. There must be no unresolved failure from either pilot operation.

Keep the 24-person journal open while selecting identities. A role-list count alone cannot tell you that the correct people were selected.

Use the [Module 1 configuration record](../../M01-STATE.md) for actual environment values and the required retained state.

**Returning after a completed batch:** Inspect the current role list and accounts first. Keep already selected course members; add only the missing identities. The four-person checkpoint below describes the first expansion, not a reason to reduce an existing 24-person role.

## Follow the steps

### 1. Check the population before expanding

1. Compare the 24 Acme identities with the [HR roster](../../datasets/acme-hr-baseline.csv). Verify uid, identificationNumber, first name, last name, and displayName are populated.
2. Search AD for the remaining usernames before assigning access. Record any account that already exists. Correlate a legitimate existing account using AR-004's employee-number match before giving it the baseline role. Do not permit an unexpected existing account to become a duplicate-creation attempt.
3. Confirm the saved Create Account policy still points to AcmeLab/Users and the baseline profile still contains only GG-ACME-BASELINE.

**Check:** The journal identifies which employees already have accounts and which require creation.

### 2. Expand in two stages

1. Open **Admin > Access Model > Roles > ROLE-Acme-AD-Baseline > Define Assignment**.
2. Retain Lucas and Liam in **Identity List**. Add Priya (`acme.e002`) and Daniel (`acme.e003`) with the + control. Verify the four selected identities, save, and select **Apply Changes** from the role list.
3. Wait for processing and provisioning. Use the activity and AD checks from AR-006 for both new accounts. Resolve errors before adding more identities.
4. Return to the identity list and add the remaining 20 Acme identities. Use the journal roster and verify usernames before selecting them. Retain the four existing members.
5. Confirm the list contains exactly the 24 Acme identities and no unrelated identities. Save and apply changes.

Identity List keeps the provisioning population explicit. Removing a user from that list can remove the assigned access, so preserve existing members while expanding it. [Role assignment](https://documentation.sailpoint.com/saas/help/provisioning/role_assignment.html)

**Screenshot reminder:** Save `AR-007-01-four-person-batch.png`, `AR-007-02-complete-assignment.png`, `AR-007-03-account-activity.png`. Use the matching descriptions in the screenshot checklist at the end.

### 3. Verify every account

After each provisioning batch finishes, run **one AD account aggregation** using AR-003 Section 6. Wait for completion and inspect its result. Do not start an aggregation for every employee. Then complete each row in the [journal](EVIDENCE.md):

1. Inspect the AD account's sAMAccountName, employeeID, UPN, and DN. Compare them with the intended employee and Users OU. Record its enabled state.
2. Confirm direct membership in GG-ACME-BASELINE. Check for unintended duplicate usernames or accounts in another OU.
3. Open **Search > Account Activity** and start with `sources:"YOUR-AD-SOURCE-NAME"`, replacing the placeholder with the exact recorded AD source name. Use the batch **Apply Changes** time to review the newest rows. For any employee whose result is missing, pending, or failed, narrow to `recipient.name:COURSE-USERNAME AND sources:"YOUR-AD-SOURCE-NAME"`, replace the username, open the activity, and inspect the source operation. Do not count a submitted operation as a completed account. See [Find the Account Activity](../../LAB-DESK.md#find-the-account-activity).
4. After the batch aggregation, open the employee’s ISC identity > **Accounts** and verify the actual linked AD DN. Investigate a wrong link using AR-004 before starting another source-wide aggregation.
5. Check the 14 business groups against the membership baseline recorded in AR-003. This role should have granted only baseline access.

**Check:** There are 24 standard course AD accounts, correctly linked to 24 identities, and 24 course members in GG-ACME-BASELINE. Source-wide counts may include unrelated users. Lucas was reused; in a fresh run, the other 23 accounts were provisioned.

**Screenshot reminder:** Save `AR-007-04-ad-users.png`, `AR-007-05-baseline-members.png`, `AR-007-06-account-links.png`. Use the matching descriptions in the screenshot checklist at the end.

## Check the result

### Troubleshooting practice

If an account fails, record the employee, failing operation, exact error, target state, correction, and retest. Compare it with a successful account from the same batch. Keep successful assignments in place while diagnosing the failed account.

For a deliberate fault exercise later, use a separate test identity and a configuration isolated from this baseline. Do not change the shared Create Account OU to an invalid value while these assignments can retry.

### Completion and screenshots

- [ ] All 24 expected accounts and identity links are individually verified.
- [ ] The role's identity list contains exactly the course population.
- [ ] All 24 course accounts have baseline membership.
- [ ] No duplicate, failed, or pending course account remains unresolved.
- [ ] Business group memberships are unchanged by the baseline assignment.

## Engineering practice

### Compare the small batch with the full roster

The four-person batch and the remaining 20-person batch are your controlled variation. After completing both:

1. Compare Priya’s native DN, UPN and employeeID with your AR-005 prediction.
2. Select one employee from a different department, such as James acme.e014. Follow the same identity → role assignment → account activity → AD account checks.
3. Compare both with Lucas, whose account existed before provisioning. Record their different creation histories without assuming different departments require different source settings.

Keep all successful assignments in place. Your evidence must identify the accounts, not just show a total of 24.

### Your ticket: The role has 24 identities but only 23 course accounts have baseline membership.

This is a supplied case. The total of selected identities is correct, but it does not identify the missing account.

Use the 24-row journal to explain how you would find the missing person and separate a creation failure from a membership failure.

Write your diagnosis before opening the answer. Label this as a supplied ticket, not a failure observed in your tenant.

<details>
<summary>Compare your diagnosis with the mentor’s solution</summary>

Compare each selected username with native account existence, employeeID, membership, ISC link and activity outcome. For the missing row, inspect its specific operation. Preserve the other 23 assignments. Closure requires the missing native membership and correct identity link, not another screenshot of the role count.

</details>

## Finish

### What you should leave in place

| Item | State before you continue |
|---|---|
| Standard accounts | 24 roster accounts individually checked and linked |
| Baseline role/group | Original 24 identities selected; 24 course accounts in the group |
| AdminAccounts | Empty on the first pass; Sofia’s second account comes in AR-026 |

<a id="if-this-configuration-already-exists"></a>

### If you stopped midway or want to repeat this lab

Verify all 24 current account links and memberships. Use the saved batch history to compare operations; do not unassign employees to repeat provisioning. Label earlier activity as historical when repeating the lab.

If the batch was interrupted, identify which selected identities have successful, failed or running activity. Preserve successful assignments and investigate only the unfinished accounts. Resume by adding only missing roster members; keep the current members. Leave all 24 in the role and retain their accounts and memberships. On repeat, verify the full roster without unassigning/reassigning it. Later extra accounts or identities must be recorded separately, not deleted to restore a count.

### Screenshots to capture

| Filename | What to show |
|---|---|
| AR-007-01-four-person-batch.png | Lucas, Liam, Priya, and Daniel in the saved list |
| AR-007-02-complete-assignment.png | All 24 selected identities; multiple images if needed |
| AR-007-03-account-activity.png | Batch outcomes and any resolved failure |
| AR-007-04-ad-users.png | Standard accounts in the Users OU |
| AR-007-05-baseline-members.png | Baseline group's 24 course members |
| AR-007-06-account-links.png | Representative linked accounts; journal covers every identity |

[Previous: AR-006](../AR-006/README.md) · [Next: AR-008](../AR-008/README.md)
