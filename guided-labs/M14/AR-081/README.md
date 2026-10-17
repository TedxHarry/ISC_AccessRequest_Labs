# AR-081 · Inspect group reviewers and compare owner categories

In this lab, you'll expose the members behind a group review, identify the person who decides, and compare Primary Owner with All Owners.

## Before you start

Complete [AR-029](../../M05/AR-029/README.md), [AR-049](../../M08/AR-049/README.md) and [AR-052](../../M09/AR-052/README.md). Use Henry, Priya, Evelyn (`acme.e021`), William (`acme.e022`), Samuel (`acme.e024`) and Acme Admin. Prepare missing sessions with AR-029's registration steps. GOV-Security-Review contains Noah, Evelyn and William. AR-080 is optional; this lab includes its own profile preparation.

## Follow the steps

### 1. Prepare the isolated group review

1. Verify Henry has no disposable-group membership, profile assignment or pending request. Reuse AP-Acme-Approval-Features from AR-080, or create it through **Admin > Access Model > Access Profiles > Create New**: Priya owner, AD source, only GG-ACME-FAULT-049. Save its original settings.
2. Set its grant approval to **Reviewer > Governance Group > GOV-Security-Review** only. Keep removal Primary Owner/Priya, user reason required, no form/date or reauthentication requirement. Enable the profile and requestability, Save and Apply Changes when offered.
3. Open **Admin > Identities > Governance Groups > GOV-Security-Review > Membership** and record member identity IDs. Do not change the group for this test.
4. Use [Configuration changes](../../../reference/API-WORKBENCH.md#configuration-changes) to GET `/access-request-config/v2`, save `govGroupVisibilityEnabled`, set only that field true through the complete PUT and GET to verify.

   <!-- AUTHOR_SCREENSHOT_START: AR-081-01 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-081-01.png`
   >
   > **Show:** Group, profile and visibility setting.

   <!-- AUTHOR_SCREENSHOT_END: AR-081-01 -->

**Check:** Group membership and request configuration are known before testing requester visibility. [Visibility enhancement](https://developer.sailpoint.com/discuss/t/enhancement-approvals-expiration-governance-group-visibility-and-more/193947)

### 2. Compare visible reviewers with the actual decision maker

1. As Henry, request AP-Acme-Approval-Features through **Request Center > Access Items > Access Profiles**, reason `AR-081 visible group`, then Save, Review Request and Submit Request.
2. Open Henry's **My Requests > matching request > Process** and expand the group review. Compare displayed people with the saved group list. Record any hidden or substituted reviewer rather than assuming the flag guarantees every person is displayed.

   <!-- AUTHOR_SCREENSHOT_START: AR-081-02 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-081-02.png`
   >
   > **Show:** Requester-expanded group review.

   <!-- AUTHOR_SCREENSHOT_END: AR-081-02 -->
3. In Evelyn and William's separate sessions, locate the matching Grant under **Approvals > Access Requests > Requested**. Only Evelyn approves, comment `AR-081 group decision by Evelyn`. Refresh William's queue and verify no second group decision is required.
4. As Acme Admin, inspect Process/Assignees and record Evelyn as decision actor. Follow Account Activity and verify Henry's native disposable membership True.
5. Henry removes the profile through **My Access > Access Profiles > Revoke Access Profile**, reason `AR-081 group test complete`; Priya approves Remove. Verify native False and assignment gone.

   <!-- AUTHOR_SCREENSHOT_START: AR-081-03 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-081-03.png`
   >
   > **Show:** Evelyn decision, provisioning and removal.

   <!-- AUTHOR_SCREENSHOT_END: AR-081-03 -->

**Check:** A visible list of eligible reviewers is different from a requirement that every member approve.

### 3. Compare Primary Owner and All Owners on one entitlement

1. Disable requestability and the isolated profile after cleanup. Open GG-ACME-FAULT-049 under **Admin > Access Model > Entitlements > Actions > Edit**. Save its original primary/additional owners and grant/removal settings.
2. Set primary owner Priya and add Samuel as an additional owner in the ownership configuration. Under Access Requests enable requests, Require Approval with Reviewer/Primary Owner only, a user reason and Primary Owner removal review. Leave form/date requirements off. Save/reopen.
3. Henry requests the entitlement directly on the AD source with `AR-081 primary owner`. Inspect Process/Assignees and both Priya/Samuel queues. Require Priya as the Primary Owner reviewer; Priya denies with `AR-081 comparison complete`. Verify terminal denial and native False.
4. Change only the grant reviewer category to **All Owners**, removing the Primary Owner row so it is not a second stage. Save. Henry makes a fresh request, reason `AR-081 all owners`.
5. Inspect the eligible assignees and both queues. Samuel denies this case with `AR-081 additional owner decision`. Confirm the step finishes, Priya has no remaining actionable review for it and native membership stays False.

   <!-- AUTHOR_SCREENSHOT_START: AR-081-04 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-081-04.png`
   >
   > **Show:** Primary Owner versus All Owners tasks.

   <!-- AUTHOR_SCREENSHOT_END: AR-081-04 -->

**Check:** All Owners allows an eligible owner to complete the review; two serial reviewer rows are a different configuration. [Owner categories](https://documentation.sailpoint.com/saas/help/requests/config_entitlements.html)

### 4. Restore configuration and verify cleanup

1. Restore the entitlement's original owners and approval settings, then mark it non-requestable. Restore the profile's saved settings and keep the course-only profile disabled/non-requestable when it began that way; a newly created profile finishes disabled.
2. Read the current global configuration, restore only govGroupVisibilityEnabled to its original value and preserve unrelated fields. GET after the PUT and compare.
3. Verify Henry retains baseline and his original account, with no disposable membership or unresolved request.

   <!-- AUTHOR_SCREENSHOT_START: AR-081-05 -->

   > **Author: Capture screenshot**
   >
   > **Filename:** `AR-081-05.png`
   >
   > **Show:** Restored settings and clean account.

   <!-- AUTHOR_SCREENSHOT_END: AR-081-05 -->

**Check:** The exercise changed neither Security group membership nor Production Support's existing workflow.

## Check the result

Requester visibility, reviewer eligibility and the decision actor are recorded separately. Primary Owner and All Owners are compared through two fresh terminal requests; temporary changes are restored.

## Finish

Keep the group/member/decision comparison and original owner settings. The disposable entitlement remains non-requestable and Henry remains clean.

[Previous: AR-080](../AR-080/README.md) · [Course outline](../../../README.md) · [Next: AR-082](../AR-082/README.md)
