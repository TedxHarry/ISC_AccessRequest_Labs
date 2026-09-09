# AR-021 · Deliver HR Services from a business requirement

**Before you start:** AR-020. James (`acme.e014`) requests; Elena (`acme.e004`) owns and reviews.

For any actor whose ISC sign-in is not prepared, complete [AR-008’s additional-session procedure](../AR-008/README.md) before submitting or reviewing.

HR needs separate Payroll and Benefits choices under one application. Neither choice should include Finance access.

## Complete the delivery

1. Record James's starting membership in HR-PAYROLL, HR-BENEFITS and FIN-AP.
2. Create `AP-HR-Payroll` containing only `GG-HR-PAYROLL`, and `AP-HR-Benefits` containing only `GG-HR-BENEFITS`. Select Elena and the AD source for both.
3. Enable requests with primary-owner review and a reason on both profiles. Enable the profiles and apply changes.
4. Create `HR Services` using AR-017's application procedure, with Elena as owner, AD as source and both profiles associated. Enable its requester options and user visibility.
5. As James, request Payroll; Elena approves. Verify Payroll membership and absence of unintended Finance membership.
6. Request Benefits separately; Elena denies with a business reason. Verify Benefits was not newly granted.
7. Remove the Payroll test assignment and prove the reset. Save checkpoint C03 with the access-model IDs, associations and test records.

**Pass when:** A colleague can use your configuration record to explain both outcomes and identify the exact group each choice controls.

If a result fails, follow the request's stage and repair one cause. Do not count a manually added AD membership as proof that the request worked.

[Application setup](https://documentation.sailpoint.com/saas/help/access/app-config.html)

## Screenshots to capture

1. Both HR profile entitlement lists.
2. HR Services requester choices.
3. Approved/denied evidence and James's final target state.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-020](../AR-020/README.md) · [Course outline](../../README.md) · [Next: AR-022](../AR-022/README.md)
