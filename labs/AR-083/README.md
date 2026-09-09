# AR-083 · Request access for a machine identity

**Before you start:** AR-045 account-selection/removal controls and the required Machine Identity Security/Agent Identity Security products. Use an existing isolated machine identity with an owned, correlated lab account; do not reclassify a human account merely to enable this exercise.

## Trace the machine recipient

1. Open the machine identity's details and record its ID, owner, associated account, source and every other identity sharing that account. Confirm the account is a test account.
2. Inspect **Admin > Global > System Settings > Feature Settings > Access Requests > Enable Machine Identity Access Requests**. Save its original value and enable it when required.
3. Make the disposable entitlement from AR-049 requestable with a known reviewer. Use a requester authorized for machine access.
4. In Request Center choose the machine identity recipient, select the entitlement and the intended account. Read the shared-account impact confirmation before submitting.
5. Have the assigned reviewer inspect the machine recipient/account and approve. Track activity and verify membership on that native account.
6. Read the status through the current machine-capable API operation and record the recipient type separately from a human identity request.
7. Submit removal for the same machine/account assignment and verify native removal. Check shared-account consumers before claiming the change affects only one identity.

**Check:** Requester, machine identity, native account and account owner are distinguished in your evidence.

**Reset:** Restore the global flag, hide the disposable entitlement and preserve the machine identity/account's original state.

If the required products or a governed test machine account are absent, record this track as unavailable. The human AD exercise does not count as machine-identity practice.

[Machine requests](https://documentation.sailpoint.com/saas/help/requests/requests_for_machine_identities.html), [Machine account preparation](https://documentation.sailpoint.com/saas/help/machine/account_requests.html)

## Screenshots to capture

1. Test machine, owned account and shared-account relationships.
2. Recipient/account selection and impact confirmation.
3. Review, native grant/removal and status recipient type.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-082](../AR-082/README.md) · [Course outline](../../README.md) · [Next: AR-084](../AR-084/README.md)
