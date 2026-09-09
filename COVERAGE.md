# Engineering practice and feature coverage

Complete the core path in order. Then take the additional tracks for the capabilities available in your training environment. Use the checkpoints in the lab prerequisites when entering a track directly; an unavailable optional product does not block unrelated AD practice.

| Engineering task | Walkthroughs | Evidence needed |
|---|---|---|
| Import identities, resolve managers and correlate accounts | AR-001–004 | Correct identity/account relationship and attributes |
| Configure and verify account creation | AR-005–009, AR-047 | Native account attributes, operation and correlation |
| Deliver entitlement/profile/role requests | AR-010–021 | Approval, denial and native membership |
| Control catalog visibility and request authority | AR-022–027, AR-061 | Requester/recipient matrix and eligibility decisions |
| Resolve manager, owner and group reviews | AR-028–033, AR-081 | Resolved assignee, decision actor and effective configuration |
| Use native request forms | AR-034–039 | Required/optional/conditional inputs and per-item reviewer answers |
| Enforce dates and modify assignments | AR-040–045, AR-082 | Effective UTC/local dates and real target observations |
| Diagnose connector and reconciliation failures | AR-046–051 | Isolated fault, actual operation error and verified recovery |
| Operate and investigate through APIs | AR-052–057, AR-082 | Correct actor/IDs, pagination and safe retry decisions |
| Implement native approval workflows | AR-058–063 | Positive/negative execution paths and target results |
| Integrate developer triggers | AR-064–069, AR-090 | Scoped delivery, valid responses, callback and failure recovery |
| Own a support queue and change | AR-070–075, AR-086–089 | Triage, audited actions, rollback and reproducible escalation |
| Separate SoD warnings from enforced denial | AR-076–077 | Conflict, clean control, decision and native access |
| Handle disconnected fulfillment | AR-078 | Manual task, application register and reconciled state |
| Use Just-In-Time access | AR-079 | Assignment, activation, deactivation and actual expiration |
| Require approval reauthentication | AR-080 | Additional authentication and decision audit |
| Govern machine-account requests | AR-083 | Machine recipient, shared account impact and target result |
| Investigate external request channels | AR-084 | External reference linked to ISC and target state |
| Explain nested access and disabled accounts | AR-085 | Direct/recursive membership and account state |
| Delegate review work | AR-087 | Effective dates, reassigned task and restoration |
| Change access-model definitions | AR-089 | Requested versus automatic assignment effects and residual access |

## Newer features and their practical tests

| Feature | Course exercise | Availability check |
|---|---|---|
| 2026 approval expiration, consolidated reviewers and revised settings | AR-031–033, AR-081, AR-088 | Current approval configuration and service behavior |
| Required end dates and maximum duration | AR-040, AR-082 | Item date controls and current API behavior |
| Future start dates and date amendments | AR-041, AR-082 | Start-date capability for the tenant/subscription |
| Native forms attached to access items | AR-034–039 | Require Access Request Form on the actual item |
| Multi-account grant/removal | AR-026, AR-045, AR-082 | Two correctly correlated accounts and explicit selection |
| JIT entitlement assignment and activation | AR-079 | Privilege on Demand and supported direct source |
| Reauthenticated approvals | AR-080 | SSO, global flag and item setting |
| Machine identity access requests | AR-083 | Required machine/agent products and governed test account |

The release review and sources are in [COURSE-REVIEW.md](COURSE-REVIEW.md). Product announcements describe a release; your tenant's enabled capability and observed behavior determine which practical you can complete.

## Prerequisites for additional tracks

| Track | Additional requirement | Entry point |
|---|---|---|
| SoD | SoD policy administration and native workflows for enforced denial | AR-076 after the core request/approval labs |
| Disconnected source | Permission to create a separate non-authoritative file source | AR-078 after AR-047 |
| JIT | Privilege on Demand/JIT enabled | AR-079 after the AD request/removal labs |
| Reauthentication | Existing SSO and supported reauthentication | AR-080 after approval/API labs |
| Machine identity | Existing isolated governed machine identity/account and required products | AR-083 after the request/account-selection labs |
| External channel | Installed supported lab integration, authorized users and integration documentation | AR-084 after the core request labs |
| Subscriber | Controlled authenticated HTTPS route to the supplied service | AR-064 after AR-063; AR-090 after AR-069 |

## Demonstrate independence

For each topic, complete a guided case, change one condition and solve a ticket without looking at the repair steps. Record **Passed**, **Failed**, **Awaiting timed observation** or **Unavailable in this tenant**. A fixture exercise may pass as a fixture exercise; it does not count as live provisioning evidence.

Complete the [Finance delivery](capstones/CAP-01/README.md), [support queue](capstones/CAP-02/README.md) and [temporary Production Support](capstones/CAP-03/README.md) capstones. A passing submission includes a working positive case, a negative case, native verification, cleanup and an explanation another engineer can use.

When a new issue does not match a known lab, use the same process: locate the failing stage, compare a working control, collect the relevant IDs and error, make a narrow change and retest. Escalate service defects or unsupported requirements with evidence instead of promising a fix that the available tools cannot deliver.

[Course outline](README.md)
