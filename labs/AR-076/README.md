# AR-076 · Investigate a separation-of-duties conflict

**Before you start:** AR-075, SoD capability and an administrator with policy permissions. Use two new ordinary lab groups; they represent conflicting duties without granting real financial access.

## Build a visible conflict

1. In AcmeLab/Groups create `GG-ACME-PAYMENT-PREPARE` and `GG-ACME-PAYMENT-APPROVE` as Global Security groups. Aggregate entitlements and record their IDs.
2. Make both requestable with Daniel as primary owner and reviewer. Do not add them to the baseline role or existing Finance Analyst role.
3. Open **Admin > SoD Policies > Create New**. Name it `SOD-Acme-Payment-Duties`, owner Daniel, violation owner Noah and risk High. Define List A with PAYMENT-PREPARE and List B with PAYMENT-APPROVE. Review, finish and enable.
4. As Lucas, request PAYMENT-PREPARE and have Daniel approve. Verify native membership and reconcile the account.
5. Request PAYMENT-APPROVE as Lucas. As Daniel, inspect **Review Violations** on the approval and identify the conflict. Deny it with an explanation and verify APPROVE was not added.
6. As Olivia, who holds neither entitlement, request PAYMENT-APPROVE. Compare the violation context, approve the clean case and verify its membership.
7. For a deliberate lab-only exception, request APPROVE again for Lucas and have Daniel approve with a comment identifying this controlled conflict test. Verify the native result, run the SoD policy and inspect the violation. This tests what your current controls actually enforce; a warning must not be claimed to be an automatic block.

**Check:** You can distinguish preventive review, the actual approval decision and a detected violation after access exists.

**Reset:** Remove Lucas's APPROVE assignment and Olivia's test assignment. Keep Lucas's PREPARE assignment and the enabled policy for AR-077.

[SoD policy setup](https://documentation.sailpoint.com/saas/help/sod/manage-policies.html), [Reviewer violations](https://documentation.sailpoint.com/saas/user-help/approvals/reviewing_access.html)

## Screenshots to capture

1. Policy sides and native entitlement IDs.
2. Conflicting and clean review cases.
3. Controlled exception, detected violation and reset.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-075](../AR-075/README.md) · [Course outline](../../README.md) · [Next: AR-077](../AR-077/README.md)
