# Lab Environment

Acme Corporation has six departments: IT, Finance, HR, Sales, Engineering, and Security. You will work as part of its IAM team, configuring and supporting Access Requests.

### Architecture

```text
HR delimited file → authoritative source → identity profile → ISC identities
                                                               │
                                                   correlated AD accounts
                                                               │
AD group aggregation → ISC entitlements → requestable access catalog
                                           │
                         direct entitlement / access profile / role
                                           │
Requester → Request Center or API → approval → provisioning → AD membership
                                           │                      │
                              request and activity evidence       │
                                           └── reconciliation ←───┘
```

Entitlements, access profiles, and roles are alternative requested objects, not mandatory consecutive runtime stages. Distinguish the requested object, assignment, account activity, and actual target membership. [Access Request overview](https://documentation.sailpoint.com/saas/help/requests/index.html)

### Required facilities

- A dedicated ISC training tenant with Access Requests and the capabilities needed for the labs you undertake.
- An isolated AD training domain; a Windows administration workstation; suitable connector service-account permissions; working network and name resolution.
- The required virtual appliance and IQService setup, including the applicable TLS configuration, established against current connector prerequisites. [AD prerequisites](https://documentation.sailpoint.com/connectors/active_directory/help/integrating_active_directory/prerequisites.html)
- Separate usable requester, manager, owner, and administrator sessions. Do not perform every test as an administrator.
- Approved test mailboxes or a controlled notification destination. Dataset email placeholders must be replaced with usable addresses for email exercises.
- A REST client and a PowerShell environment for API labs. Record the SDK and client versions you use.
- For M11, a controlled HTTPS subscriber with configurable responses, logs, and a reset procedure.

AR-009 is the environment gate: demonstrate correlation, group aggregation, target membership change through the configured provisioning path, requester/approver sign-in, evidence access, and recovery to the baseline. Prebuilt infrastructure users still complete this validation.

### Dataset: 24 identities

Use employeeNumber as the stable HR identifier. Map managerEmployeeNumber through the chosen manager-correlation configuration; a populated CSV column alone is not proof of a resolved ISC manager.

Download the [HR baseline CSV](datasets/acme-hr-baseline.csv) and follow [AR-001](labs/AR-001/README.md) to import it.

Columns: employeeNumber, userName, firstName, lastName, displayName, email, department, title, managerEmployeeNumber, location, employeeType, costCenter, status, startDate.

The file uses usernames `acme.e001` through `acme.e024`, display names prefixed with `Acme Lab -`, and placeholder emails at `example.com`. Use controlled test mailboxes before sign-in and notification exercises. In AR-001, `employeeNumber` maps to the identity's `identificationNumber` attribute.

| ID | Name | Department | Manager | Course responsibility or controlled variant |
|---|---|---|---|---|
| E001 | Morgan Reed | IT | — | Executive manager; intentional hierarchy root |
| E002 | Priya Shah | IT | E001 | IT manager and VPN owner |
| E003 | Daniel Brooks | Finance | E001 | Finance manager and Finance application owner |
| E004 | Elena Cruz | HR | E001 | HR manager and HR application owner |
| E005 | Marcus Lee | Sales | E001 | Sales manager and Sales application owner |
| E006 | Ava Chen | Engineering | E001 | Engineering manager and application owner |
| E007 | Noah Williams | Security | E001 | Security manager and Security review owner |
| E008 | Liam Patel | IT | E002 | Standard requester |
| E009 | Sofia Martin | IT | E002 | Standard and separate administrative AD accounts |
| E010 | Ethan Davis | IT | E002 | Service Desk operator; scoped permissions |
| E011 | Olivia Wilson | Finance | E003 | Finance request and removal exercises |
| E012 | Lucas Brown | Finance | E003 | Controlled department-mismatch variant |
| E013 | Mia Garcia | Finance | E003 | Controlled existing-VPN-access variant |
| E014 | James Miller | HR | E004 | HR requester |
| E015 | Amelia Thomas | HR | E004 | Controlled inactive-identity variant |
| E016 | Benjamin Moore | Sales | E005 | Sales requester |
| E017 | Charlotte Taylor | Sales | E005 | Controlled missing-AD-account variant |
| E018 | Henry Anderson | Engineering | E006 | Production-support requester |
| E019 | Harper Jackson | Engineering | E006 | Controlled missing-manager variant |
| E020 | Alexander White | Engineering | E006 | Overlapping assignment-path experiments |
| E021 | Evelyn Harris | Security | E007 | Security reviewer |
| E022 | William Clark | Security | E007 | Security reviewer |
| E023 | Abigail Lewis | Security | E007 | Security reviewer; temporary inactive-owner variant |
| E024 | Samuel Walker | IT | E002 | IAM operations reviewer/fallback test identity |

The HR baseline has all employees marked active with correct attributes. HR account creation in AR-001 does not establish AD account creation or correlation. Validate AD in AR-003, correlate Lucas in AR-004, and provision the remaining standard accounts in AR-005 through AR-007. C01 has 24 standard AD accounts. Add E009's second account in AR-026. Enable fault variants only for the corresponding exercise; record before/after values. E003's missing-email variant is used temporarily in approval investigations.

Use fictional titles appropriate to each department, employeeType=Employee, location=Chicago, a fixed valid past startDate, and cost centers IT100/FIN200/HR300/SAL400/ENG500/SEC600. Real test mailbox values and tenant object IDs are environment parameters.

### Access inventory

AD containers: AcmeLab/Users, AcmeLab/AdminAccounts, and AcmeLab/Groups. Record actual distinguished names in an environment manifest. The following are ordinary lab groups; names implying privilege do not grant real domain-administration rights.

| AD group | Purpose | Request configuration |
|---|---|---|
| GG-ACME-BASELINE | Standard account baseline, introduced in AR-005 | Automatic role assignment; not requestable |
| GG-VPN-USERS | Shared remote connectivity | Direct request and shared bundle membership |
| GG-REMOTE-USERS | Remote-work tools | Access profile |
| GG-FIN-AP | Accounts payable | Access profile |
| GG-FIN-REPORTING | Financial reporting | Direct request comparison and access profile |
| GG-HR-PAYROLL | Payroll | Access profile |
| GG-HR-BENEFITS | Benefits | Access profile |
| GG-IT-HELPDESK | Support tools | Access profile |
| GG-IT-ADMINS | Simulated elevated access | Controlled advanced exercises |
| GG-ENG-GITHUB | Engineering repository access simulation | Access profile |
| GG-ENG-DEVOPS | Engineering operations simulation | Access profile |
| GG-SALES-CRM | Sales tooling simulation | Access profile |
| GG-SEC-SOC | Security operations simulation | Access profile |
| GG-PROD-SUPPORT | Temporary production-support simulation | Time-based access and capstones |
| GG-INTERNAL-NOREQUEST | Negative visibility control | Never requestable baseline |

The AD groups simulate application access; this course does not provision real GitHub, CRM, or payroll accounts.

| Access profile | Entitlements | Application | Owner |
|---|---|---|---|
| AP-Acme-AD-Baseline | ACME-BASELINE | Foundation provisioning | Lab administrator |
| AP-Remote-Worker | VPN + REMOTE | Remote Services | E002 |
| AP-Finance-Reporting | FIN-REPORTING + VPN | Finance Services | E003 |
| AP-Finance-AP | FIN-AP | Finance Services | E003 |
| AP-HR-Payroll | HR-PAYROLL | HR Services | E004 |
| AP-HR-Benefits | HR-BENEFITS | HR Services | E004 |
| AP-IT-Helpdesk | IT-HELPDESK | IT Services | E002 |
| AP-Engineering-Tools | ENG-GITHUB + ENG-DEVOPS | Engineering Services | E006 |
| AP-Sales-CRM | SALES-CRM | Sales Services | E005 |
| AP-Security-SOC | SEC-SOC | Security Services | E007 |
| AP-Production-Support | PROD-SUPPORT | Engineering Services | E006 |

Group names in the entitlement column omit the GG- prefix for readability. All these profiles use the same AD source.

Baseline role: ROLE-Acme-AD-Baseline contains AP-Acme-AD-Baseline and uses an explicit identity list expanded from Lucas to all 24 employees. Retain this assignment throughout the request labs.

Roles: ROLE-Finance-Analyst = AP-Finance-Reporting + AP-Finance-AP; ROLE-Remote-Engineer = AP-Engineering-Tools + AP-Remote-Worker; ROLE-Service-Desk = AP-IT-Helpdesk + AP-Remote-Worker. Add a narrowly scoped automatic-assignment role only for the assignment comparison lab and restore its criteria afterward.

Governance Groups: GOV-Security-Review = E007/E021/E022; GOV-Finance-Review = E003/E011; GOV-IAM-Operations = E002/E010/E024. Governance Group membership is distinct from AD group membership. Give owners and reviewers the required ISC capabilities explicitly.

### Checkpoints and recovery

Create checkpoints after M01, M03, M05, M07, M09, and each advanced extension. A checkpoint consists of a manifest, supported configuration exports where available, target membership baseline, and reconstruction instructions. It is not a promise of whole-tenant snapshot restoration.

Start each module from its prerequisite checkpoint. Retain business configuration and remove temporary faults after each exercise. Never leave an unresponsive event subscriber enabled after its exercise. In a shared tenant, coordinate global-setting changes with other participants; object prefixes do not isolate global configuration.

[Return to the course outline](README.md)
