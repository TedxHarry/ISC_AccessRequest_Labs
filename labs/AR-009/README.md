# AR-009 · Verify the Environment and Save C01

**Prerequisites:** Complete [AR-008](../AR-008/README.md) and retain the evidence from AR-001 through AR-007.

## Your assignment

Check the environment before making business access requestable. Save checkpoint C01 as a record of the working configuration and how to reconstruct it.

## 1. Verify the baseline

Perform each check and record its actual result in the [journal](EVIDENCE.md).

| Check | Expected result |
|---|---|
| Acme HR accounts and Acme identities | 24 each |
| Manager hierarchy | 23 relationships and Morgan as the root |
| Standard AD accounts | 24, each linked to the correct employee |
| AdminAccounts OU | Empty until the later account-selection lab |
| Course groups imported into ISC | 15, including GG-ACME-BASELINE |
| Baseline assignment | 24 identities in ROLE-Acme-AD-Baseline |
| Baseline target membership | All 24 standard accounts in GG-ACME-BASELINE |
| Business group membership | Matches the recorded pre-request baseline |
| Provisioning operations | Lucas update and Liam creation verified in ISC and AD |
| Sessions | Lucas opens Request Center; Daniel and Priya open Approvals; administrator remains usable |
| Working HR file | Complete population and working test email addresses retained privately |

Reopen saved source settings, the baseline profile, and the role. Check the IDs and actual values against your journals. Recheck the current AD membership rather than relying only on an earlier screenshot.

If any check fails, return to its lab, correct the cause, and repeat that check. An empty approval queue is acceptable because this foundation has not yet submitted a business access request.

### Explain the chain before the first business request

Answer these questions in your journal using actual evidence:

1. Which operation created Lucas’s HR account, and which configuration produced his identity?
2. Which values resolve Daniel as his manager? Which different pair correlates his AD account?
3. Why did the baseline role update Lucas but create Liam? Identify both operation records.
4. Why do 24 HR identities not prove 24 AD accounts? Why does Test Connection not prove a successful write?
5. Which sign-in route/password does each reviewer use? Why can identity Work Email differ from AD mail?
6. Which business request, approval and revocation have you proved? At C01, **none yet**: you proved baseline role provisioning. User-submitted business requests begin in AR-010–012.

Return to a missing check instead of recreating the environment. Record any standard-account OU exception before moving into the account-selection labs.

## 2. Record C01

Create a private folder named `C01-Acme-Foundation` and retain:

1. Your complete working HR CSV and journals.
2. Actual source IDs, OU DNs, group DNs/entitlement values, baseline profile ID, and baseline role ID where exposed.
3. Saved account-search, group-search, membership-search, correlation, and Create Account settings. Exclude credentials.
4. The 24-account verification table and current group membership record.
5. The screenshots listed below and a short reconstruction note: create the HR baseline, correlate Lucas, configure provisioning, assign the baseline role in stages, then prepare user sessions.

Keep ROLE-Acme-AD-Baseline enabled and its identity list intact. Removing baseline eligibility can remove its group access; it is not a reset method. A folder of evidence is not a whole-tenant restore image.

## Completion and screenshots

- [ ] Every baseline check has an actual passing result.
- [ ] C01 contains the working data, configuration record, and reconstruction note.
- [ ] No unresolved provisioning failure remains.

| Filename | What to show |
|---|---|
| AR-009-01-population.png | Acme HR and identity population checks |
| AR-009-02-baseline-role.png | Enabled role, profile, and course membership |
| AR-009-03-target-baseline.png | AD baseline membership |
| AR-009-04-sessions.png | Correct requester and reviewer session identities; separate images are fine |

Next is [AR-010: Make VPN access requestable](../AR-010/README.md). Keep baseline access assigned while learning how requested VPN access is granted and removed.

[Previous: AR-008](../AR-008/README.md) · [Course outline](../../README.md)
