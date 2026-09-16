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
| Employee Number | E008 | |
| AD account before AR-006 | None | |
| Expected DN | Recorded | |
| Expected UPN | Recorded | |

## Lookup results

| Value | Observed result |
|---|---|
| Lucas full UPN from Account tab | |
| Selected UPN suffix without @ | |
| Users OU distinguishedName copied from the OU | |
| ISC password policy and sync group, if any | |
| AD default requirements and applicable fine-grained policy | |
| Password-policy difference to resolve before creation | |
| UPN, OU and policy screenshot filenames | |

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

## Explain and repeat

| Item | Your observation |
|---|---|
| Independent check: identity/object and result | |
| What will supply Liam’s username in the DN and UPN expressions? | |
| Why does saving Create Account leave Liam absent from AD? | |
| State retained for the next lab | |
| Unresolved check, if any | |

## Supplied screenshot checks

The walkthrough includes the supplied UPN, OU, imported baseline entitlement, partial mapping and Liam identity images. The Liam image has a blank Manager; record the current result below rather than assuming the screenshot proves Priya resolved.

| Check | Current result / additional evidence |
|---|---|
| Liam Manager resolves to Priya (E002) | |
| Remaining mapping rows and UPN order checked | |
| AD baseline group settings/membership checked | |
| Assigned password policy compared with AD | |
