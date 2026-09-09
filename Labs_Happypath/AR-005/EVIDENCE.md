# AR-005 — Evidence Journal

## AD provisioning readiness

| Item | Your result |
|---|---|
| AD source name | |
| AD source ID | |
| Test Connection | |
| Users OU DN | |
| UPN suffix | |
| Provisioning/IQService configuration checked | |

## Baseline group

| Item | Expected | Observed |
|---|---|---|
| Group name | GG-ACME-BASELINE | |
| Group type | Global Security | |
| AD distinguishedName | Recorded | |
| Imported into ISC | Yes | |
| Entitlement value | Recorded | |

## Create Account configuration

| Mapping | Expected value | Observed |
|---|---|---|
| distinguishedName | `CN=$(uid),<Users OU DN>` | |
| sAMAccountName | uid | |
| userPrincipalName | `${sAMAccountName}@<UPN suffix>` | |
| displayName | displayName | |
| givenName | firstname | |
| sn | lastname | |
| employeeID | identificationNumber | |
| department | department | |
| title | title | |
| mail | email | |
| password | Create Password | |
| manager | Disabled | |

## Liam pre-check

| Item | Expected | Observed |
|---|---|---|
| Username | acme.e008 | |
| Identification Number | E008 | |
| AD account before AR-006 | None | |
| Expected DN | Recorded | |
| Expected UPN | Recorded | |

## Screenshots

- [ ] GG-ACME-BASELINE in AD
- [ ] Baseline entitlement in ISC
- [ ] Create Account mappings
- [ ] Naming expressions and order
- [ ] Liam identity attributes

## Completion

- [ ] All AR-005 final verification checks passed.
- [ ] Create Account configuration is retained for AR-006.

[Return to AR-005](README.md)
