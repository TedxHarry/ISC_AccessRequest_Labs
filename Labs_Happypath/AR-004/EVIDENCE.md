# AR-004 — Evidence Journal

## Correlation values

| Item | Expected | Observed |
|---|---|---|
| Lucas ISC username | acme.e012 | |
| ISC Employee Number | E012 | |
| AD sAMAccountName | acme.e012 | |
| AD employeeID | E012 | |
| AD distinguishedName | AcmeLab/Users location | |

## Source configuration

| Item | Expected | Observed |
|---|---|---|
| employeeID in account schema | Yes | |
| Correlation Identity Attribute | Employee Number (identificationNumber) | |
| Correlation Account Attribute | employeeID | |
| Aggregation result | Success | |
| Imported employeeID | E012 | |

## Account link

| Check | Expected | Observed | Evidence |
|---|---|---|---|
| Lucas AD account linked | Yes | | |
| Linked identity | acme.e012 | | |
| AD DN matches native account | Yes | | |
| Duplicate AD account | No | | |

## Screenshots

- [ ] Lucas Employee Number
- [ ] AD employeeID
- [ ] employeeID in the AD account schema
- [ ] Account Correlation configuration
- [ ] Postman request body and accepted response (submission only)
- [ ] Completed account aggregation with optimization disabled
- [ ] Imported AD account employeeID E012
- [ ] Lucas with linked AD account

## Completion

- [ ] All AR-004 final verification checks passed.
- [ ] Lucas's account correlation is retained for AR-005.

[Return to AR-004](README.md)

## Explain and repeat

| Item | Your observation |
|---|---|
| Independent check: identity/object and result | |
| Which two values identify Lucas across ISC and AD? | |
| Why did this schema/correlation change require an unoptimized aggregation? | |
| State retained for the next lab | |
| Unresolved check, if any | |
