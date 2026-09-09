# AR-009 · Verify the Environment and Save C01

**Prerequisites:** Complete [AR-008](../AR-008/README.md) and retain the evidence from AR-001 through AR-007.

## If this configuration already exists

Recheck current foundation state. Keep later legitimate additions and record them separately from the original 24-person baseline. Read the configuration sections to compare your saved settings, but skip creation actions for objects already verified. Start the additional practice at [Repeat the check with a different employee](#repeat-the-check-with-a-different-employee). Capture current results and label earlier creation activity as historical.

Use the [Module 1 configuration record](../../M01-STATE.md) for actual environment values and the required retained state.

## Before you open the settings

Use the administrator, Lucas, Daniel and Priya sessions from AR-008 and keep the AR-001–008 journals available.

You expect 24 HR accounts, 24 Acme identities, 24 standard AD accounts and 24 course baseline members. No course business request has been submitted yet.

This is a readiness assessment. Check the current records as well as your saved screenshots; a screenshot from yesterday does not establish today’s state.

## What you’ll do

Before opening VPN requests, walk through the environment once more. Use current records to check what exists, then save enough evidence that you could explain it to another engineer.

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

**Screenshot reminder:** Save `AR-009-01-population.png`, `AR-009-02-baseline-role.png`, `AR-009-03-target-baseline.png`, `AR-009-04-sessions.png`. Use the matching descriptions in the screenshot checklist at the end.

## 2. Record C01

Create a private folder named `C01-Acme-Foundation` and retain:

1. Your complete working HR CSV and journals.
2. Actual source IDs, OU DNs, group DNs/entitlement values, baseline profile ID, and baseline role ID where exposed.
3. Saved account-search, group-search, membership-search, correlation, and Create Account settings. Exclude credentials.
4. The 24-account verification table and current group membership record.
5. The screenshots listed below and a short reconstruction note: create the HR baseline, correlate Lucas, configure provisioning, assign the baseline role in stages, then prepare user sessions.

Keep ROLE-Acme-AD-Baseline enabled and its identity list intact. Removing baseline eligibility can remove its group access; it is not a reset method. A folder of evidence is not a whole-tenant restore image.

## Repeat the check with a different employee

1. Select James acme.e014 instead of the Lucas/Liam samples.
2. Without following his earlier screenshots, find his HR account, resolved manager, AD account, role selection and native baseline membership.
3. Compare with the roster: his manager is Elena acme.e004 and his employee number is E014.
4. Add the current evidence to C01. If a value is wrong, identify its source before making a correction.

You should be able to follow the same checks for an employee whose setup you did not memorize.

## Your ticket: A colleague says 24 identities means we are ready for access requests.

The colleague has only a screenshot of the identity count.

Write the additional evidence you would request, then locate it in your journals. Identify any missing evidence without marking it passed.

Write your diagnosis and the evidence you would accept before opening the solution. If you use the supplied case, label it a ticket exercise; do not record it as a tenant failure you observed.

<details>
<summary>Compare your diagnosis with the mentor’s solution</summary>

Ask for correct manager links, individually verified AD accounts, baseline membership, source scope and creation settings, clean operation outcomes, and separate requester/reviewer sign-ins. These establish C01. They still do not prove a business approval or revocation; that evidence comes from the following request labs.

</details>

## If you stopped midway or want to repeat this lab

If any check fails, record its identity/object and return to that check’s lab. Keep the rest of the working environment. When resuming, repeat the failed check and inspect pending activity before accepting C01. Keep the baseline role assigned and the source, accounts, profiles and sessions available for Module 2. On later repeats, record legitimate additions separately rather than deleting objects to force the original counts.

## What you should leave in place

| Item | State before you continue |
|---|---|
| C01 | Current counts, object IDs, configuration and reconstruction notes saved |
| Pending problems | None unresolved in the foundation provisioning checks |
| Next action | Configure VPN in AR-010; keep the baseline assignment |

## Completion and screenshots

- [ ] The practice/comparison and your ticket diagnosis are recorded in the journal.
- [ ] Any temporary change is restored and the retained state matches the next lab.
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
