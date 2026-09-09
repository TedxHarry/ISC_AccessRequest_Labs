# AR-027 · Resolve visibility and account-selection tickets

**Before you start:** AR-026. Keep the Finance segment and Sofia's two accounts.

## Work three tickets

1. Ticket A: `Liam cannot find Finance Reporting`. Record Liam's department, the enabled segment and the item association. Decide whether this is the intended policy or a configuration fault. Do not widen visibility simply to close the ticket.
2. Ticket B: `An administrator can find an item that Lucas cannot`. Compare actor type, item requestability and segment membership. Explain the admin exception with evidence from both sessions.
3. Ticket C: `Sofia says VPN reached the wrong account`. Use AR-026's request history, compare its selected account with both account IDs and AD memberships. Identify whether the request selection or fulfillment differed from the intended account.
4. For each ticket, record the reported requirement, observed state, cause and either a targeted repair or an explanation of correct behavior.
5. Repeat the affected user's catalog/account check after any repair. Preserve the Finance restriction, both Sofia accounts and baseline profile selection.

**Independent challenge:** Ask a partner to mark one business item non-requestable or change one test user's department using the complete HR file. Diagnose without knowing which fault was selected. Restore the original value and verify the full chain.

**Pass when:** You avoid treating three different symptoms as one generic synchronization problem, and every closure includes requester/account-specific evidence.

[Segments](https://documentation.sailpoint.com/saas/help/requests/segments.html)

## Screenshots to capture

1. Evidence supporting each ticket diagnosis.
2. Any changed configuration and its restored value.
3. Requester/account verification after the repair.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-026](../AR-026/README.md) · [Course outline](../../README.md) · [Next: AR-028](../AR-028/README.md)
