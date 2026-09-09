# CAP-02 · Recover the request service queue

**Prerequisites:** AR-001–057 and AR-070–075. Include integration cases only after their track is complete.

Take ownership of six tickets covering visibility, reviewer assignment, failed fulfillment, retained access, duplicates and mixed results.

## Work the incident queue

1. Ask a partner to select controlled faults from the completed labs, or use their saved evidence packets when working alone. Keep the setup instructions separate from the initial user reports.
2. Create a queue with ticket, impact, requester, recipient, item, account, time, observed state and next owner. Identify any failed removal needing priority.
3. For each report, inspect the request or prove that none was submitted. Follow the relevant approval, activity and native-account evidence.
4. Write a hypothesis and the observation that would disprove it. Run that check before changing configuration.
5. Repair only the identified fault using its supported recovery. Record what you changed and why a broader reset was unnecessary.
6. Retest with the affected actor and account. Run one fresh positive request and one denial after the repairs.
7. For retained membership, identify all remaining assignment paths. For mixed results, write a separate outcome for every item.
8. Produce one support escalation using AR-074 for a condition that cannot be resolved with available evidence or permissions. Clearly state what further service-side evidence is needed.
9. Restore every injected fault and account for all pending/failed diagnostic requests. Confirm the foundation role and required business definitions remain intact.

## Acceptance

Pass when every ticket has a verified resolution, an evidence-supported explanation of intended behavior or a reproducible escalation. Do not mark a ticket resolved solely because its administrative record was closed.

## Screenshots to capture

1. Initial prioritized queue.
2. Evidence proving each root cause and narrow repair.
3. Fresh positive/negative controls and native results.
4. Final queue, reset record and sanitized escalation.

[Course outline](../../README.md) · [Practice tickets](../../PRACTICE-TICKETS.md)
