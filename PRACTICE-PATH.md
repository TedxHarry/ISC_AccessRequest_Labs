# State and Dependency Lookup

Follow the [Guided Lab map](guided-labs/README.md) for the learning sequence. Use this reference when resuming or repeating a task after later labs changed the environment. Keep current legitimate accounts and settings; do not delete them to recreate an old count.

## Keep the shared state straight

| After | Retain | Do not assume |
|---|---|---|
| AR-009 | 24 HR identities, 24 standard AD accounts, 24-member baseline role | Every employee has a registered ISC session |
| AR-012 | Lucas’s directly requested VPN | A separate grant guarantees VPN survives an overlapping profile revocation |
| AR-021 | [C03 business-access configuration](M03-READINESS.md#state-passed-between-labs), clean Olivia/James and retained Lucas VPN | Catalog visibility proves a native grant |
| AR-022 | Enabled Finance segment | Segmentation checks the recipient’s business eligibility |
| AR-026 | Sofia’s standard and admin accounts; baseline selects standard | Account creation or correlation grants admin privileges |
| AR-027 | [C04 visibility and account evidence](M04-READINESS.md#what-each-lab-leaves-behind), original request-on-behalf mode and Sofia without test VPN | Current cleaned-up membership proves a historical grant |
| AR-029 | Production Support with manager then Security review | Later workflow experiments leave those direct reviewers active |
| AR-039, if completed | Required Production Support form | Later requests may omit its fields |
| AR-040, if completed | Production Support required end date and seven-day maximum | Approval delay restarts the duration |
| AR-045 | C07: completed removals, original on-behalf mode, clean Sofia accounts and resolved Henry schedules | An unobserved timed boundary is a passed test |
| AR-047 | Taylor E025; complete 25-row HR file; baseline role still 24 | Reimporting the public 24-row CSV preserves Taylor |
| AR-049 | GG-ACME-FAULT-049 current DN/GUID/ISC ID; restored ACL; AP-Acme-Reference-Test disabled | Changing its display name alone changes every identifier |
| AR-051 | C08: Taylor’s retained account, clean test memberships, no pending writes, 25 HR identities and 26 AD accounts on a first full pass | A historical failure proves the current connector is broken |
| AR-057 | C09: private caller environments, verified parent/item/approval IDs, permitted reports and clean Taylor access | A 202 response proves fulfillment, or a status-row count equals POST count |
| AR-063 | C10: enabled WF-Acme-AR058/Single Manager on Production Support; original form/date/removal settings; tested Finance grant policies or original policies if unaccepted; HR/on-behalf settings restored and diagnostic copies disabled | All later grants still route through manager then Security, or a successful workflow proves access was granted |
| AR-069 | C11: reconciled request/invocation records, disabled course subscriptions and Subscriber Test profile, clean retained Taylor account, private mode/restart details | A stopped local service disables subscriptions, or a fresh success repairs older failed requests |
| AR-075 | C12: reconciled six-ticket queue, verified visibility/owner repairs, Priya on Remote Worker, disposable entitlement non-requestable and Taylor clean | Closing a record removes access, or one basket has a single outcome |
| AR-077, if completed | Payment access removed; course SoD policy/workflow disabled; payment entitlements non-requestable | A workflow Failure alone proves the request ended without access |
| AR-078, if completed | Current two-row disconnected register, correlated accounts, completed tasks and Reader non-requestable | Task completion proves reconciliation, or this file is safe to import into Acme HR |

Before repeating an earlier lab, use the [lab desk’s starting-state check](LAB-DESK.md). Record the current state and prepare that lab’s named control without deleting later identities or unrelated assignments. A repeat of AR-025 after AR-047 must preserve all 25 HR records even though its original first-run population was 24.

## Capstone starting points

- [Finance service](guided-labs/capstones/CAP-01/README.md): AR-001-022 and AR-042-045, clean Olivia, retained Finance definitions and segment. Preserve accepted AR-061 policies when present.
- [Service queue](guided-labs/capstones/CAP-02/README.md): AR-070-075 and their earlier incident evidence, clean Taylor, Priya on Remote Worker. Six reports include two controlled live faults; historical evidence stays labelled.
- [Temporary support](guided-labs/capstones/CAP-03/README.md): AR-034-041, AR-049 and AR-058-063, native forms/dates/Adaptive Approvals and clean Henry/Liam/Olivia. Create dedicated CAP03 objects, accept the isolated gate before service use and disable the capstone objects after cleanup. Preserve the original Production Support policy.

The [Guided Lab map](guided-labs/README.md#capstones) lists the capstones. Additional diagnostic cases and independent exercises are in [Troubleshooting Practice](troubleshooting/README.md) and [Try It Yourself](try-it-yourself/README.md).

[Course outline](README.md) · [Coverage](COVERAGE.md)
