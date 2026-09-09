# AR-040 · Enforce an end date and maximum duration

**Before you start:** AR-033 and date controls available. If you completed AR-034–039, retain and complete the attached form; native forms are not required to learn date controls. Henry has no Production Support assignment.

## Configure and test the limit

1. Save Production Support's current dates and review settings. Enable **Require End Date** and set maximum duration to **7 days**. Save.
2. As Henry, start a request without an end date. Record the validation result. Then attempt an end date 8 days after the intended start and capture the rejected boundary.
3. Choose no future start date and an end date within the allowed duration. Record the browser time zone and the corresponding UTC timestamp before submission.
4. Complete the form and request reason. Submit, approve through manager and Security, and record the effective assignment end date.
5. Compare submission time with approval time. Without a selected future start, approval delay consumes part of the allowed period; it does not automatically restart the duration clock.
6. Remove the test assignment through the supported removal action and verify the membership disappears.
7. Inspect the contained entitlement and any role wrapping this profile. Record their own date settings rather than assuming this profile's maximum configures every request path.

**Check:** Missing and excessive dates are rejected, the valid assignment has a recorded end date, and removal is verified.

**Leave:** Keep the 7-day maximum on Production Support for subsequent labs. AR-082 covers API fallback behavior and AR-041 covers real timed provisioning.

[Date constraints](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html)

## Screenshots to capture

1. Required date and 7-day maximum.
2. Missing/excessive-date validation.
3. Valid effective dates, time zone and removal result.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-039](../AR-039/README.md) · [Course outline](../../README.md) · [Next: AR-041](../AR-041/README.md)
