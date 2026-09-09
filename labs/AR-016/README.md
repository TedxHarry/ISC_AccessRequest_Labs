# AR-016 · Bundle Finance reporting access

**Before you start:** AR-015. Olivia requests; Daniel (`acme.e003`) owns and reviews.

## Create the bundle

1. Verify Olivia has no Finance Reporting profile. Capture her VPN and `GG-FIN-REPORTING` memberships.
2. Create `AP-Finance-Reporting` using the lab desk procedure. Use Daniel as owner and add exactly `GG-FIN-REPORTING` and `GG-VPN-USERS` from the AD source.
3. Use description `Finance reporting with the remote connectivity needed to reach it`. Require primary-owner approval and a reason. Enable and apply changes.
4. Request the profile as Olivia. Verify Daniel receives it, then approve.
5. Inspect the requested object: it is one access profile. Inspect the native result: both groups must be present on Olivia's existing account.
6. Compare the profile's entitlement list with the activity. If VPN was already present, explain why a new VPN add operation is not required to establish the bundle's final state.
7. Open Olivia's Access and record how ISC represents the profile after processing.

**Check:** You can explain one business request and its two required native memberships, including a pre-existing membership when applicable.

**Reset:** Keep the profile. Remove Olivia's test assignment and verify the expected groups are removed only when no other assignment requires them.

[Access profile behavior](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)

## Screenshots to capture

1. Finance Reporting entitlement list.
2. Daniel's review of the profile.
3. Olivia's two native memberships and final reset.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-015](../AR-015/README.md) · [Course outline](../../README.md) · [Next: AR-017](../AR-017/README.md)
