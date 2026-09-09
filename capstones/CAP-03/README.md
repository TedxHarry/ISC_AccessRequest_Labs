# CAP-03 · Deliver temporary Production Support

**Prerequisites:** Core request, form, date and workflow labs. Native forms, future dates and workflows must be available. Use the subscriber track only if it is part of your chosen implementation.

IT and Engineering require Production Support with a valid business reason, change-ticket field, manager review followed by Security, a maximum seven-day access period and auditable removal. Ineligible recipients must not receive access.

## Implement and prove the requirement

1. Save the current Production Support configuration and native membership baseline. Use Henry as an eligible Engineering recipient and a non-IT/non-Engineering identity as the negative recipient.
2. Inspect the profile's single entitlement, owner and account selection. Ensure no baseline/automatic role independently grants that entitlement.
3. Attach the native form from AR-034–039. Test required input and the Production rollback-plan condition. State whether the change ticket is only collected or validated against an external system.
4. Adapt AR-061's recipient lookup: allow department Engineering or IT through two explicit comparisons; deny other or unavailable values. On the allowed branch configure Multi-Step Serial review: recipient Manager, then GOV-Security-Review. Save, enable and attach the workflow.
5. Set the native required end date and seven-day maximum. Try an excessive duration and record rejection.
6. Request future-dated access as Henry. Complete both reviews before the start, then prove absence before the start, presence after provisioning and absence after scheduled removal completes. Keep the real timed checks open until observed.
7. Request for the ineligible recipient using an authorized requester. Verify workflow denial and absent native membership. Visibility alone does not pass this test.
8. Run a reviewer denial for an eligible recipient and prove no grant. Test a date amendment and inspect its actual review route.
9. Introduce one scoped configuration fault from the completed labs, diagnose it, restore it and run a fresh control.
10. Write the support runbook: owners, configuration, field keys, date behavior, evidence locations, common failures, recovery and escalation.

## Acceptance

Pass when the positive, negative, date and recovery results are backed by request and native evidence. An unobserved expiry, form-only duration field or unvalidated ticket must be recorded accurately; none proves a stronger control than you implemented.

## Screenshots to capture

1. Form, recipient gate, review order and native date limit.
2. Eligible/ineligible requests and actual decisions.
3. Before-start, provisioned and removed native states with timestamps.
4. Fault/recovery proof and support runbook.

[Course outline](../../README.md) · [Coverage](../../COVERAGE.md)
