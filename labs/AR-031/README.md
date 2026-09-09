# AR-031 · Test consolidated reviewers and self-approval

**Before you start:** AR-030. Use `AP-Finance-Reporting`, Olivia and Daniel. Save its owner/reviewer settings.

## Separate two different overlaps

1. Set the profile owner to Daniel and reviewers to **Manager**, then **Primary Owner**. Olivia's manager is Daniel, so both categories resolve to him.
2. Submit as Olivia. Inspect Daniel's queue and the full request process. Decide once and record how the 2026 approval service represents the consolidated requirements.
3. Remove Olivia's test grant. Change the owner to Priya, retain the reviewer categories and submit again. Confirm Daniel and Priya are now distinct stages; deny the request after observing routing.
4. Restore Daniel as owner. For the self-approval case, temporarily make Olivia the primary owner and use only Primary Owner review. Submit as Olivia and inspect where the request actually routes. Do not approve it with an administrator merely to bypass the experiment.
5. As administrator, capture the assignment evidence, then cancel or deny the diagnostic request using the permitted action.
6. Restore Daniel as owner and the original reviewer configuration. Submit and deny a final fresh control.

**Check:** Same-reviewer consolidation and requester/reviewer overlap have separate test records. A historical report of duplicate approvals is not proof of current behavior.

If the current behavior differs from the announcement, save the effective configuration and request process for a support case; do not mark the expectation as passed.

[2026 approval changes](https://developer.sailpoint.com/discuss/t/enhancement-approvals-expiration-governance-group-visibility-and-more/193947)

## Screenshots to capture

1. Same-person and different-person reviewer configurations.
2. Consolidated decision and self-approval routing evidence.
3. Restored owner and fresh control.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-030](../AR-030/README.md) · [Course outline](../../README.md) · [Next: AR-032](../AR-032/README.md)
