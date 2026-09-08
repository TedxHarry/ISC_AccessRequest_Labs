# AR-003 Lab Journal

Record actual results as you complete [AR-003](README.md). Leave unfinished checks blank. Keep passwords and connector credentials out of this file.

## Directory and source

| Item | Your value |
|---|---|
| AD source name | |
| AD source ID | |
| Connection-test result | |
| Training domain / UPN suffix | |
| Users OU DN | |
| AdminAccounts OU DN | |
| Groups OU DN | |
| User Search DNs and filters before changes | |
| Group Search DNs and filters before changes | |
| Group Membership Search DN and filter | |
| Scope changes made, or none | |

## Account check

| Item | Your result |
|---|---|
| Lucas account reused or created | |
| AD sAMAccountName (expected acme.e012) | |
| AD distinguishedName | |
| ISC account ID | |
| ISC account sAMAccountName and DN match AD | |
| Correlated identity, or uncorrelated | |
| Latest account aggregation status | |
| Accounts scanned | |
| Warnings/errors and resolution | |

## Group check

For each group, record its actual DN, whether it appears in ISC on your AD source, and any existing members. Use `none` for an empty group.

| Group | AD DN | Found in ISC | Existing members |
|---|---|---|---|
| GG-VPN-USERS | | | |
| GG-REMOTE-USERS | | | |
| GG-FIN-AP | | | |
| GG-FIN-REPORTING | | | |
| GG-HR-PAYROLL | | | |
| GG-HR-BENEFITS | | | |
| GG-IT-HELPDESK | | | |
| GG-IT-ADMINS | | | |
| GG-ENG-GITHUB | | | |
| GG-ENG-DEVOPS | | | |
| GG-SALES-CRM | | | |
| GG-SEC-SOC | | | |
| GG-PROD-SUPPORT | | | |
| GG-INTERNAL-NOREQUEST | | | |

| Entitlement detail | Your result |
|---|---|
| Latest entitlement aggregation status | |
| Warnings/errors and resolution | |
| GG-VPN-USERS source | |
| GG-VPN-USERS entitlement attribute/type | |
| GG-VPN-USERS entitlement value | |
| GG-VPN-USERS ISC entitlement ID, if exposed | |

## Screenshots to retain

- Successful AD connection test, with credentials hidden.
- AD Users and Groups OUs showing the lab objects.
- Search scopes covering the lab OUs.
- Completed account aggregation and Lucas's imported AD account.
- Completed entitlement aggregation and the lab entitlements.
- GG-VPN-USERS entitlement details showing its source and value.

## Issues to carry into AR-004

Record any unresolved account matches or differences from the lab names here:

## Completion

- [ ] I completed each check in the lab's completion checklist.
- [ ] My journal identifies the actual AD source, Lucas account, and VPN entitlement.

[Return to AR-003](README.md)
