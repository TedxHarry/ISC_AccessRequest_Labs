# Module 1 configuration record

Use this record alongside your private journals. Enter actual source names, IDs and directory values before using them in a lab. Counts refer to the original Acme roster, not the tenant-wide population. Keep later legitimate additions when revisiting these checks.

## Your environment values

| Value | Where to obtain it |
|---|---|
| AD source name and ID | Open the existing source in Admin > Connections > Sources; record its name and ID from the source URL |
| Users, AdminAccounts and Groups DNs | AD Users and Computers > View > Advanced Features; each OU > Properties > Attribute Editor > distinguishedName |
| AD UPN suffix | Lucas’s AD Properties > Account; use the configured suffix selected for the lab |
| Baseline entitlement value | AD source > Entitlement Management > Entitlements; open GG-ACME-BASELINE |
| Administrator username | Signed-in user menu in the administrator browser profile |
| Authentication route | Acme Employees > Settings > Sign-in Method |

Record these privately; example domains and YOUR-* values are not values to paste unchanged.

## Starting and retained states

| Lab | Before the first run | Leave in place |
|---|---|---|
| AR-001 | No Acme HR/profile on first run | Acme HR: 24 accounts; Acme Employees: 24 identities; Lucas Finance/FIN200; complete working CSV retained |
| AR-002 | AR-001 population and identificationNumber mapping | 23 resolved manager relationships; Morgan root; Lucas to Daniel to Morgan; E012 manager reference E003 |
| AR-003 | Working AD read connection and isolated training location | Users/AdminAccounts/Groups OUs; Lucas only standard AD user on first pass; 14 business groups imported; user/group/membership scopes saved; Delta setting restored |
| AR-004 | Lucas imported from AD | employeeID E012 imported and matched to identificationNumber E012; correct Lucas link retained; Delta setting restored |
| AR-005 | Lucas linked; direct provisioning prerequisites ready | 15 groups including GG-ACME-BASELINE; saved Create Account mappings; Liam absent on first pass |
| AR-006 | Baseline group and creation policy; Lucas present, Liam absent | Lucas account retained; Liam created by ISC; two linked standard accounts and two baseline members; enabled baseline profile/role with requests disabled |
| AR-007 | Lucas and Liam baseline complete | 24 linked standard accounts; 24 original identities selected in baseline role; 24 native baseline members; business access unchanged |
| AR-008 | 24-account foundation; three controlled inboxes | Separate admin/Lucas/Daniel/Priya sessions; recorded authentication route; ordinary user levels; complete private HR file with controlled emails |
| AR-009 | All previous checks complete | C01 evidence of current foundation; all 15 groups checked; no unresolved baseline operation; business requests not yet tested |

The HR source and identity profile establish identity data. Only Lucas is created manually in AD. The baseline role updates Lucas and provisions the other 23 standard accounts. Neither path submits a business access request in Module 1.
