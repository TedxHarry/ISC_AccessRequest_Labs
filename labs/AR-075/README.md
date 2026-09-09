# AR-075 · Run an IAM support shift

**Before you start:** AR-074. Use the practice tickets and evidence from earlier labs.

## Work the queue independently

1. Select six cases: missing catalog item, unexpected reviewer, approved-but-missing membership, retained access after removal, duplicate submission and partial result.
2. For each, record the requester, recipient, item, account, time and reported requirement before inspecting configuration.
3. Triage by impact and actual state. Link the evidence that supports your proposed action.
4. Reproduce at least two cases using the earlier isolated faults. Repair them without changing global settings unnecessarily.
5. Run a fresh approval and denial after the repairs. Verify native results, not only request status.
6. Prepare one escalation package for a case where available evidence cannot establish or fix the cause. State the missing evidence and who can obtain it.
7. Review the final tenant state: baseline role, business assignments, profile owners, forms, dates, source settings and disabled test subscriptions.

**Pass when:** Every ticket has a verified resolution, an explanation of intended behavior or a useful escalation. A plausible guess is not a resolved ticket.

**Challenge:** Repeat with a peer selecting the faults. Complete the diagnosis without reading the corresponding repair section until you have written your hypothesis.

**Reset:** Restore every injected fault and document intentionally retained assignments. Continue with AR-076 for SoD and the additional feature tracks.

[Practice tickets](../../PRACTICE-TICKETS.md)

## Screenshots to capture

1. Prioritized six-ticket queue.
2. Two repairs with before/after proof.
3. Final-state checklist and escalation package.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-074](../AR-074/README.md) · [Course outline](../../README.md) · [Next: AR-076](../AR-076/README.md)
