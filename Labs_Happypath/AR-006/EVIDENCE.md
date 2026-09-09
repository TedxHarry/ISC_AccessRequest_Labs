# AR-006 — Evidence Journal

## Access model

| Item | Expected | Observed |
|---|---|---|
| Access profile | AP-Acme-AD-Baseline | |
| Entitlement | GG-ACME-BASELINE | |
| Role | ROLE-Acme-AD-Baseline | |
| Initial role member | Lucas / acme.e012 | |
| Final pilot members | Lucas and Liam | |

## Before assignment

| Value | Before | After |
|---|---|---|
| Lucas distinguishedName | | |
| Lucas objectGUID | | |
| Lucas direct baseline membership | Absent | |
| Liam enabled/disabled state and password flags expected in AR-005 | | |

## Lucas existing-account update

| Check | Expected | Observed | Evidence |
|---|---|---|---|
| Activity status | Success | | |
| Original account retained | Yes | | |
| DN unchanged | Yes | | |
| objectGUID unchanged | Yes | | |
| Baseline membership | Added | | |
| Duplicate Lucas account | No | | |

## Liam account creation

| Check | Expected | Observed | Evidence |
|---|---|---|---|
| Account absent before assignment | Yes | | |
| Activity status | Success | | |
| sAMAccountName | acme.e008 | | |
| employeeID | E008 | | |
| Department | IT | | |
| Title | IT Analyst | | |
| UPN | Expected suffix | | |
| Baseline membership | Added | | |
| Correct ISC account link | Yes | | |

## Screenshots

- [ ] Baseline access profile
- [ ] Lucas-only role assignment
- [ ] Lucas activity and AD membership
- [ ] Lucas + Liam role assignment
- [ ] Liam provisioning activity
- [ ] Liam AD account and membership
- [ ] Liam linked account in ISC

## Completion

- [ ] All AR-006 final verification checks passed.
- [ ] Lucas and Liam remain assigned for AR-007.

[Return to AR-006](README.md)

## Explain and repeat

| Item | Your observation |
|---|---|
| Independent check: identity/object and result | |
| Why did Lucas receive a membership update while Liam needed account creation? | |
| Which evidence proves the write reached AD? | |
| State retained for the next lab | |
| Unresolved check, if any | |
