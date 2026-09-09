# AR-039 · Accept the Production Support form

**Before you start:** AR-038.

## Run the acceptance cases

1. Write the requirement: ticket, environment and description are required; Production work displays a rollback plan; reviewers can read the answers.
2. Test missing ticket, missing description, Test environment, Production environment and a populated optional note. Use fresh request forms for each case.
3. For submitted cases, inspect the reviewer view and compare each answer with the requester's entry. Deny diagnostic cases after inspection.
4. Submit a complete Henry request and approve through manager and Security. Verify Production Support membership, then remove the assignment.
5. Record which requirements are enforced by form validation and which remain reviewer decisions. A syntactically valid ticket is not proof of approved work, and a custom duration answer does not schedule removal.
6. Export or record the form definition, field keys, conditions and item association so another engineer can reconstruct it.

**Pass when:** Required-field failures are demonstrated, both conditional branches are checked, reviewer answers match and the positive request reaches AD.

**Challenge:** Give a reviewer a fabricated ticket value and ask them to identify the missing evidence before approval. Document the external-system integration that would be needed to validate it automatically; do not present the current form as providing that integration.

**Reset:** Keep the accepted form and association; no new Henry assignment remains.

[Form configuration](https://documentation.sailpoint.com/saas/help/forms/index.html)

## Screenshots to capture

1. Acceptance case results.
2. Complete requester and reviewer views.
3. Positive fulfillment and subsequent removal.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-038](../AR-038/README.md) · [Course outline](../../README.md) · [Next: AR-040](../AR-040/README.md)
