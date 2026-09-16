# AR-088 · Regression-test a product or API change

In this lab, you'll build a repeatable request test matrix, execute fresh positive and negative cases, and decide which results are supported by evidence.

## Before you start

Complete the core controls through [AR-057](../AR-057/README.md) and [AR-075](../AR-075/README.md). Use Taylor, Liam, Sofia, Priya and Acme Admin. Keep the API workbench and earlier journals available. Optional feature tracks may be Not available; they are not prerequisites for unrelated rows. Open your [journal](EVIDENCE.md).

## Follow the steps

### 1. Choose the change and define the comparison

1. Record date, tenant, enabled capabilities, API service paths and available client/source versions. If a tenant build number is not exposed, write Not exposed instead of inventing a version.
2. Use the documented governance-group visibility setting from [AR-081](../AR-081/README.md) as the default change under review. Record its announcement URL, expected requester-visible effect and the current `/access-request-config/v2` field. Alternatively choose one specific published change already covered by an available lab and name that lab's test cases.
3. Save current configuration with Acme API Admin. Compare the current writable schema before any replacement PUT; preserve unrelated and newly added supported fields. This exercise validates present behavior; it does not install a SailPoint service update or prove a past tenant build behaved differently.
4. Create journal rows for Entitlement, Profile, Role, On behalf, Two accounts, Selected feature, Existing versus fresh request, and Restored control. For each record expected result, actual result, request IDs, native evidence and Pass/Fail/Not run/Not available. Save `AR-088-01.png`.

**Check:** The change has a source and a testable expectation. [API versioning](https://developer.sailpoint.com/docs/api/api-versioning-strategy/)

### 2. Prepare three isolated request types

1. Verify Taylor lacks GG-ACME-FAULT-049 and has no pending request. Save the disposable entitlement's original settings. Make it requestable with Priya primary owner, Primary Owner grant/removal review, user comments and no forms/dates. Keep developer subscriptions disabled.
2. Create `AP-Acme-Regression-Test` on the AD source with only that entitlement, owner Priya. Set the same direct grant/removal settings, enable/requestable and Apply Changes. Keep it outside automatic assignments and segments.
3. Create **Admin > Access Model > Roles > Create New** named `ROLE-Acme-Regression-Test`, owner Priya. Under Manage Access add only AP-Acme-Regression-Test. Configure grant/removal Primary Owner and user comments; enable role/requestability. Leave automatic assignment disabled with no criteria or identity list. Reopen and verify there are no automatically assigned identities.
4. Record all three item IDs/types and Taylor's account. Save `AR-088-02.png`.

**Check:** The role is requested access, not a birthright assignment.

### 3. Run grant, removal and denial for each type

1. Start with the entitlement. Taylor opens **Request Center > Access Items > Entitlements**, selects the disposable item/source and submits reason `AR-088 entitlement grant`. Priya approves the exact Grant. Follow Account Activity and require disposable membership True.
2. Taylor opens the corresponding **My Access** category and selects the exact assignment. For the entitlement choose **Assignment > Revoke Assignment**; for the profile choose **Revoke Access Profile**; for the role use its role revocation action. Use `AR-088 [type] cleanup`, submit and have Priya approve Remove. Require native False, assignment gone and no pending operation before continuing.
3. Taylor requests the same type again with `AR-088 [type] deny`; Priya denies with `AR-088 negative control`. Require terminal denial and native False.
4. Repeat Steps 1–3 for AP-Acme-Regression-Test under Access Profiles, then ROLE-Acme-Regression-Test under Roles. Replace [type] with profile or role in the reasons. Do not request the next object while another object still supplies the shared entitlement.
5. Record nine separate grant/removal/denial outcomes and actual IDs; save `AR-088-03.png` with the completed rows. A previous lab's screenshot is historical evidence, not a fresh regression run.

**Check:** All three item types are tested without overlapping grants obscuring removal.

### 4. Test the affected paths and compare existing work

1. For On behalf, verify Liam lacks the disposable entitlement. Record the current Requests on Behalf setting. Use Priya's Request Center **Request for Your Team**, select Liam, then request the regression profile with `AR-088 on behalf`. If that route is disabled, use [AR-023's manager-only configuration steps](../AR-023/README.md) and restore it afterward. Record the actual reviewer/self-review handling; as Acme Admin cancel this eligible pending diagnostic via Approval Management. Require no grant.
2. For Two accounts, perform [AR-045](../AR-045/README.md) with AR-088 reasons: grant VPN to each Sofia account, remove only the second, prove the standard remains, then remove the standard test grant. Copy new IDs/results into this matrix.
3. Execute the selected feature's full working and cleanup steps. For the default use AR-081 and record fresh group visibility, member decision and restored flag evidence. Mark unavailable feature cases honestly rather than changing the feature label to one you did not run.
4. For Existing versus fresh request, execute [AR-072](../AR-072/README.md), using AR-088 reasons and its old-Taylor/new-Liam owner comparison. Include the restored Priya routing control and all denials. This tests a configuration change, not a claim that an unobserved product upgrade rewrote old tasks.
5. Save `AR-088-04.png` with the cross-path results and actual test dates.

**Check:** A configuration expectation and a product-release expectation are identified separately; neither is assumed from the other.

### 5. Restore, retest and make the acceptance decision

1. Restore any global, owner, feature and date settings changed by the selected cases. Disable requestability and both regression objects; restore the disposable entitlement's original settings with requestability off. Verify Taylor/Liam clean, Sofia test VPN removed and original baseline/account states retained.
2. Submit one fresh Taylor Remote Worker request using [the operations procedure](../../LAB-DESK.md#submit-a-remote-worker-operations-control), reason `AR-088 restored control`; verify Priya and have her deny. Record terminal/native absence.
3. Review every matrix row. Accept only observed Pass cases. For Fail/Pending, record exact mismatch, affected boundary and next owner using [AR-074](../AR-074/README.md). Keep Not available separate from Pass. Save `AR-088-05.png`.

**Check:** The matrix tells the next engineer what was exercised, what remains unknown and what configuration is currently retained.

## Check the result

Fresh request-type and cross-path cases support the acceptance decision. No unexecuted feature is counted as passed, and temporary regression objects/settings are restored.

## Finish

Keep the dated matrix and configuration comparison in the journal. Leave regression objects disabled and outstanding cases assigned a concrete next check.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-088-01.png | Selected change, version/capability baseline and expected matrix |
| AR-088-02.png | Three isolated object configurations |
| AR-088-03.png | Nine grant/removal/denial outcomes |
| AR-088-04.png | On-behalf, two-account, feature and old/new cases |
| AR-088-05.png | Restored control and final acceptance matrix |

[Previous: AR-087](../AR-087/README.md) · [Course outline](../../README.md) · [Next: AR-089](../AR-089/README.md)
