# Module 6 learner walkthrough review

## Final learner walkthrough review, 17 September 2026

Scope: AR-034–039 in both paths, all 12 journals and the C06 handoff to AR-040. Learner progress remains AR-001–006 reported complete; AR-007 tenant execution has not started. No tenant actions or new screenshot validation were performed.

- Added resume guidance and checks for outstanding requests before new form tests.
- AR-034 checks for the existing form, section and field keys before creation. The request ID is distinguished from the access profile ID, and the denial reason appears before the decision.
- AR-035 reuses the optional field, explains how to recover from an unexpected validation result, and captures the submitted empty optional answer before denial.
- AR-036 reuses the rollback field and condition, checks native membership before testing, and discards unsent selections before retesting a changed definition. The engineering repair has its own screenshot prompt.
- AR-037 clears copied rollback text while the field is visible, verifies each item's saved answers and preserves the original association for restoration. It checks native membership before Security approval and waits for successful provisioning before checking the grant or starting removal.
- AR-038 verifies the initial native state and captures reviewer answers before denial. Association changes are saved and checked on fresh requests.
- AR-039 opens the form builder explicitly, handles failed validation controls, waits for provisioning/removal, and saves the completed journal and captures in a private C06 folder.
- AR-037 and AR-039 compare the same AD account and controller before and after changes, refresh imported access before revocation, and recheck Lucas's retained VPN. Their journals now include account identifiers, activity outcomes and retained access.

## References checked

- [Form builder, field settings and conditions](https://documentation.sailpoint.com/saas/help/forms/index.html)
- [Native request forms, copied answers and item associations](https://developer.sailpoint.com/discuss/t/new-capability-forms-for-access-request/217255)
- [Saving access profile changes and revoking access](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)

Tenant validation remains pending for required-field errors, conditional visibility and answer retention, copied item answers, reviewer details, and native group additions/removals. Expected outcomes in the walkthroughs are not recorded tenant results.

## Local verification

All 12 walkthrough structures, six paired working procedures, screenshot filename inventories and expandable answers passed. Reviewed all 12 journal field sets against their exercises and updated four journals. The changed learner-file check resolved 108 local links and referenced heading anchors; whitespace checks passed.
