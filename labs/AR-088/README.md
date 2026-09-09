# AR-088 · Regression-test a product or API update

**Before you start:** Core course complete and any enabled feature tracks identified. Use the [coverage matrix](../../COVERAGE.md).

## Establish the release baseline

1. Record the review date, enabled capabilities, API versions, client versions and source configuration. Read current SailPoint Access Request product announcements and the official pages linked in the affected labs.
2. Pick a concrete change, such as approval settings, native forms or start dates. Write its expected effect and identify the affected request paths and actors.
3. Compare the current writable API schema with your saved configuration payload. Mark removed/renamed fields and new defaults. Do not send an old payload merely to see whether it overwrites newer settings.
4. Run fresh grant, deny and removal controls for one entitlement, profile and role. Include a request for another person and a two-account case.
5. Run the relevant feature tests: form answers, date boundary/amendment, repeated reviewer, timeout configuration or JIT activation. Use real timed evidence when required.
6. Compare an existing pending request with one submitted after the configuration change. Record actual behavior and the documented effective-time rule.
7. Produce a result table: case, expected result, actual result, request ID, target evidence and pass/fail/unavailable. Investigate failures before accepting the update.
8. Restore temporary settings and rerun one control. Update the environment manifest and handover with any accepted behavior change.

**Pass when:** Every claimed capability has live evidence or a clearly stated unavailable/incomplete status, and the test results can guide another engineer through a regression.

No finite course can guarantee a fix for every future defect. This assessment requires you to recognize a new failure, gather the right evidence and either recover it safely or escalate it with a reproducible case.

[SailPoint Access Request discussions](https://developer.sailpoint.com/discuss/tag/access-requests/556), [API versioning](https://developer.sailpoint.com/docs/api/api-versioning-strategy/)

## Screenshots to capture

1. Capability/version baseline and reviewed change.
2. Relevant positive/negative regression results.
3. Completed acceptance matrix and restored final configuration.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-087](../AR-087/README.md) · [Course outline](../../README.md) · [Next: AR-089](../AR-089/README.md)
