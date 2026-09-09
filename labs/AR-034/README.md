# AR-034 · Attach a native form to Production Support

**Before you start:** C05 and native access-request forms available in the tenant. A generic interactive workflow form does not satisfy this prerequisite.

## Create and attach the form

1. Open **Admin > Global > Forms > New Form**. Name it `FORM-Acme-Production-Support` and describe the maintenance details reviewers need.
2. Continue to Builder and add a section named `Maintenance details`.
3. Inside Maintenance details, select **+ Add > Text Field**. Set Label to `Change ticket`, Technical Key to `changeTicket`, and turn on **Mark as required**. Select **Apply**.
4. Select **+ Add > Select Field**. Set Label to `Environment`, Technical Key to `environment`, and turn on Mark as required. Configure static choices `Production` and `Test`; keep this a single selection. Apply.
5. Select **+ Add > Text Area**. Set Label to `Work description`, Technical Key to `workDescription`, and turn on Mark as required. Apply, then **Save** the form. Reopen it and verify all three keys and required flags.
6. Open `AP-Production-Support > Access Requests`. Enable **Require Access Request Form**, select this form and save. Retain manager/Security review.
7. As Henry, request the profile. Confirm the native form appears during the request. Enter `CHG-LAB-034`, `Production` and `Verify the simulated support group during maintenance`.
8. Inspect the standard date/comment fields separately. Submit with an AR-034 reason and leave the request pending for the reviewer check.
9. As Ava, open the request and inspect the submitted answers. Deny this first control after capturing them.

**Check:** A native access item requires the form during submission, and the reviewer can inspect the answers. If the item has no form setting, record capability availability and stop this feature exercise rather than substituting an unrelated form.

**Leave:** Form attached; no new Production Support assignment.

[Forms](https://documentation.sailpoint.com/saas/help/forms/index.html), [Native request forms](https://developer.sailpoint.com/discuss/t/new-capability-forms-for-access-request/217255)

## Screenshots to capture

1. Form fields, keys and required settings.
2. Profile's saved form association.
3. Requester input and reviewer answers.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-033](../AR-033/README.md) · [Course outline](../../README.md) · [Next: AR-035](../AR-035/README.md)
