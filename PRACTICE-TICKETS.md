# Troubleshooting Practice Tickets

Investigate each report, identify the relevant evidence, explain the root cause, and verify your resolution. A symptom may have more than one possible cause. Difficulty progresses from beginner (B) through intermediate (I), advanced (A), and production operations (P).

| Ticket | Level | User or business report | Tested skill / lab |
|---|---|---|---|
| T01 | B | VPN is missing from the catalog | Requestability / AR-011 |
| T02 | B | I do not understand which access item to choose | Catalog design / AR-014 |
| T03 | B | My denied request did not give me access | Decision interpretation / AR-010 |
| T04 | B | The request succeeded; prove the AD change | End-to-end evidence / AR-009 |
| T05 | B | Finance needs two groups from one request | Access packaging / AR-013 |
| T06 | B | The application has no usable access | Application association / AR-017 |
| T07 | I | My colleague sees Finance access but I cannot | Segments and attributes / AR-022 |
| T08 | I | The admin can see everything, so why can I not? | Actor-specific testing / AR-020 |
| T09 | I | Can I request Finance access for someone in Sales? | Requester versus recipient / AR-021 |
| T10 | I | I cannot request for my team member | Request authority / AR-020 |
| T11 | I | Access went to my other AD account | Account selection / AR-023 |
| T12 | I | This employee has no manager in ISC | Manager correlation / AR-027 |
| T13 | I | The access owner is inactive | Reviewer resolution / AR-027 |
| T14 | I | Security expected every group member to review | Group versus review-policy semantics / AR-026 |
| T15 | I | A requester is also a reviewer | Self-approval handling / AR-028 |
| T16 | I | The reviewer needs to reassign the task | Authorized administration / AR-028 |
| T17 | I | Reminders did not start when expected | Effective settings and time / AR-029 |
| T18 | I | An old request ignored our new escalation settings | In-flight configuration / AR-029 |
| T19 | I | The request form did not appear | Form association / AR-035 |
| T20 | I | A ticket field exists, but nobody validated the ticket | Collection versus enforcement / AR-036 |
| T21 | I | Access has a future start date and is absent today | Timeline interpretation / AR-038 |
| T22 | I | Approval expired; did access also expire? | Distinct time semantics / AR-037 |
| T23 | I | Removal completed, but VPN is still present | Assignment-path analysis / AR-040 |
| T24 | I | Automatically assigned access returned | Assignment policy / AR-041 |
| T25 | A | Approval completed, but membership is absent | Fulfillment diagnosis / AR-043 |
| T26 | A | The user has no AD account | Account provisioning prerequisites / AR-044 |
| T27 | A | The connector cannot update one group | Scoped permissions / AR-045 |
| T28 | A | The referenced AD group was replaced | Object identity and refresh / AR-046 |
| T29 | A | AD shows access, but ISC still does not | Reconciliation / AR-047 |
| T30 | A | The API returned success, but access is not ready | Asynchronous processing / AR-050 |
| T31 | A | The client timed out; should we submit again? | Retry judgment / AR-053 |
| T32 | A | The report contains only the first page of requests | Pagination / AR-051 |
| T33 | A | Approval works in the UI but the API caller is forbidden | Authorization context / AR-049 |
| T34 | A | The approval workflow never started | Workflow association / AR-059 |
| T35 | A | Quorum completed earlier than expected | Policy threshold / AR-057 |
| T36 | A | An external subscriber is not responding | Request-response diagnosis / AR-065 |
| T37 | P | Several old requests are still pending | State-based triage / AR-067 |
| T38 | P | Someone closed a request; does the user have access? | Administration versus target state / AR-068 |
| T39 | P | Only some requested access appears to be present | Item/account evidence / AR-070 |
| T40 | P | Support needs a reproducible case and timeline | Evidence package / AR-071 |

[Return to the course outline](README.md)
