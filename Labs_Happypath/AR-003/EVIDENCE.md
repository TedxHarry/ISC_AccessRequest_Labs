# AR-003 — Evidence Journal

## AD source

| Item | Your result |
|---|---|
| AD source name | |
| AD source ID | |
| Test Connection | |
| Training domain / UPN suffix | |

## OU structure

| OU | Distinguished Name |
|---|---|
| Users | |
| AdminAccounts | |
| Groups | |

## Lucas AD account

| Item | Expected | Observed |
|---|---|---|
| sAMAccountName | acme.e012 | |
| Display name | Acme Lab - Lucas Brown | |
| Department | Finance | |
| Title | Reporting Analyst | |
| Distinguished Name | AcmeLab/Users location | |

## AD source scope

| Check | Observed |
|---|---|
| User Search Scope covers Users | |
| User Search Scope covers AdminAccounts | |
| Group Search Scope covers Groups | |
| Membership search can reach Groups | |
| Existing source coverage preserved | |

## Account aggregation

| Check | Expected | Observed | Evidence |
|---|---|---|---|
| Aggregation status | Success | | |
| Lucas found | Yes | | |
| Lucas sAMAccountName | acme.e012 | | |
| Lucas DN matches AD | Yes | | |
| Correlation state | Record actual state | | |

## Entitlement aggregation

| Check | Expected | Observed | Evidence |
|---|---|---|---|
| Aggregation status | Success | | |
| Acme groups found | 14 | | |
| GG-VPN-USERS source | AD source | | |
| GG-VPN-USERS native value recorded | Yes | | |

## Group checklist

- [ ] GG-VPN-USERS
- [ ] GG-REMOTE-USERS
- [ ] GG-FIN-AP
- [ ] GG-FIN-REPORTING
- [ ] GG-HR-PAYROLL
- [ ] GG-HR-BENEFITS
- [ ] GG-IT-HELPDESK
- [ ] GG-IT-ADMINS
- [ ] GG-ENG-GITHUB
- [ ] GG-ENG-DEVOPS
- [ ] GG-SALES-CRM
- [ ] GG-SEC-SOC
- [ ] GG-PROD-SUPPORT
- [ ] GG-INTERNAL-NOREQUEST

## Screenshots

- [ ] Successful AD connection test
- [ ] AcmeLab OU structure
- [ ] Lucas AD account
- [ ] Lucas distinguishedName
- [ ] 14 AD groups
- [ ] Saved user/group/membership search settings
- [ ] Completed account aggregation
- [ ] Lucas AD account in ISC
- [ ] Completed entitlement aggregation
- [ ] Acme entitlements in ISC
- [ ] GG-VPN-USERS details

## Completion

- [ ] All AR-003 final verification checks passed.
- [ ] Lucas and the 14 groups are retained for the next labs.

[Return to AR-003](README.md)
