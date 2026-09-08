# Troubleshooting Practice Tickets

Investigate each report, identify the relevant evidence, explain the root cause, and verify your resolution. A symptom may have more than one possible cause. Difficulty progresses from beginner (B) through intermediate (I), advanced (A), and production operations (P).

| Ticket | Level | User or business report | Tested skill / lab |
|---|---|---|---|
| T01 | B | VPN is missing from the catalog | Requestability / AR-014 |
| T02 | B | I do not understand which access item to choose | Catalog design / AR-017 |
| T03 | B | My denied request did not give me access | Decision interpretation / AR-013 |
| T04 | B | The request succeeded; prove the AD change | End-to-end evidence / AR-012 |
| T05 | B | Finance needs two groups from one request | Access packaging / AR-016 |
| T06 | B | The application has no usable access | Application association / AR-020 |
| T07 | I | My colleague sees Finance access but I cannot | Segments and attributes / AR-025 |
| T08 | I | The admin can see everything, so why can I not? | Actor-specific testing / AR-023 |
| T09 | I | Can I request Finance access for someone in Sales? | Requester versus recipient / AR-024 |
| T10 | I | I cannot request for my team member | Request authority / AR-023 |
| T11 | I | Access went to my other AD account | Account selection / AR-026 |
| T12 | I | This employee has no manager in ISC | Manager correlation / AR-030 |
| T13 | I | The access owner is inactive | Reviewer resolution / AR-030 |
| T14 | I | Security expected every group member to review | Group versus review-policy semantics / AR-029 |
| T15 | I | A requester is also a reviewer | Self-approval handling / AR-031 |
| T16 | I | The reviewer needs to reassign the task | Authorized administration / AR-031 |
| T17 | I | Reminders did not start when expected | Effective settings and time / AR-032 |
| T18 | I | An old request ignored our new escalation settings | In-flight configuration / AR-032 |
| T19 | I | The request form did not appear | Form association / AR-038 |
| T20 | I | A ticket field exists, but nobody validated the ticket | Collection versus enforcement / AR-039 |
| T21 | I | Access has a future start date and is absent today | Timeline interpretation / AR-041 |
| T22 | I | Approval expired; did access also expire? | Distinct time semantics / AR-040 |
| T23 | I | Removal completed, but VPN is still present | Assignment-path analysis / AR-043 |
| T24 | I | Automatically assigned access returned | Assignment policy / AR-044 |
| T25 | A | Approval completed, but membership is absent | Fulfillment diagnosis / AR-046 |
| T26 | A | The user has no AD account | Account provisioning prerequisites / AR-047 |
| T27 | A | The connector cannot update one group | Scoped permissions / AR-048 |
| T28 | A | The referenced AD group was replaced | Object identity and refresh / AR-049 |
| T29 | A | AD shows access, but ISC still does not | Reconciliation / AR-050 |
| T30 | A | The API returned success, but access is not ready | Asynchronous processing / AR-053 |
| T31 | A | The client timed out; should we submit again? | Retry judgment / AR-056 |
| T32 | A | The report contains only the first page of requests | Pagination / AR-054 |
| T33 | A | Approval works in the UI but the API caller is forbidden | Authorization context / AR-052 |
| T34 | A | The approval workflow never started | Workflow association / AR-062 |
| T35 | A | Quorum completed earlier than expected | Policy threshold / AR-060 |
| T36 | A | An external subscriber is not responding | Request-response diagnosis / AR-068 |
| T37 | P | Several old requests are still pending | State-based triage / AR-070 |
| T38 | P | Someone closed a request; does the user have access? | Administration versus target state / AR-071 |
| T39 | P | Only some requested access appears to be present | Item/account evidence / AR-073 |
| T40 | P | Support needs a reproducible case and timeline | Evidence package / AR-074 |

[Return to the course outline](README.md)
