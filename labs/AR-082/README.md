# AR-082 · Test API dates and account-specific removal

**Before you start:** AR-055, API workbench, date capability and Sofia's two accounts. Use Remote Worker for dates and VPN for account removal.

## Date policy through the API

1. Save Remote Worker's date settings. Require an end date and set maximum duration to 1 day. Read the item's saved configuration.
2. Submit Remote Worker for Taylor through the workbench without removeDate. Inspect the eventual effective end date or error under the current policy. With a configured maximum, the documented API behavior applies a maximum-based end date when omitted; verify the returned assignment rather than assuming the request body tells the whole story.
3. Resolve/remove the case. Submit with a future removeDate more than one day beyond the relevant start and capture the validation failure. Submit a valid future start/remove pair within one day and inspect the effective dates. Cancel while eligible or remove the assignment after resolving it.
4. For required-date-without-maximum, first inspect the current writable configuration schema for `fallbackAccessDurationInDays`. Product news describes this field, but the currently published AccessRequestConfig2 model does not list it. Do not add it to a replacement PUT. Run this optional fallback-setting comparison only after a current supported operation/schema is confirmed; otherwise record that subtest as deferred and retain the explicit-date and maximum-duration tests above.

## Remove the intended account assignment

1. Repeat only AR-045’s grant steps: request VPN on Sofia’s standard account, approve, then request it on the admin account and approve. Verify both memberships; do not run AR-045’s removal/reset steps yet. Read the admin account’s nativeIdentity from the source account data.
2. Submit a REVOKE_ACCESS body using Sofia's identity ID, type ENTITLEMENT, VPN's entitlement ID, a comment and the admin account's `nativeIdentity`. Do not supply startDate on a revoke request.
3. Complete any removal review and verify only the selected account changes. Compare the supplied nativeIdentity with the source schema’s Account ID attribute, not merely a display name. After proving the standard account retained VPN, remove its test assignment too unless it existed before this exercise.

**Check:** API inputs, effective dates and selected native account are all documented. Configuration defaults and UI validation can differ.

**Reset:** Restore date/fallback settings, resolve pending cases and remove only test assignments.

[API date fallback](https://developer.sailpoint.com/discuss/t/enhancement-mandatory-end-date-and-max-duration-on-access-requests/192669), [Request schema](https://developer.sailpoint.com/redoc/sailpoint-api-v3-light.html)

## Screenshots to capture

1. Date policy and omitted/excessive/valid date results.
2. Sanitized revoke payload identifying the account.
3. Both account results and restored settings.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-081](../AR-081/README.md) · [Course outline](../../README.md) · [Next: AR-083](../AR-083/README.md)
