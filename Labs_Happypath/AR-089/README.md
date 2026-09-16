# AR-089 · Change a profile and compare assignment origins

In this lab, you'll edit one profile used by requested and automatic access, compare the resulting memberships, and explicitly clean up residual entitlements.

## Before you start

Complete [AR-049](../AR-049/README.md) and the automatic role exercise in [AR-006](../AR-006/README.md). AR-088 is not a prerequisite. Use Lucas, Taylor, Priya, Acme Admin and AD checks. Both people must lack GG-ACME-FAULT-049 and GG-REMOTE-USERS with no pending request for them; preserve Lucas's VPN and baseline and Taylor's baseline exclusion. Keep course developer subscriptions disabled and open your [journal](EVIDENCE.md).

## Follow the steps

### 1. Establish requested access and a narrow automatic role

1. Record both account DNs/GUIDs, the two target group IDs and four native False results using [native checks](../../M02-CHECKS.md#inspect-direct-ad-membership). Stop if either group supplies existing business access; resolve that starting-state difference rather than removing it as lab cleanup.
2. Create **Admin > Access Model > Access Profiles > Create New** named `AP-Acme-Change-Test`, owner Priya, AD source, with only GG-ACME-FAULT-049 under Manage Entitlements. Require Primary Owner grant/removal review, user comments and no forms/dates. Save, enable/requestable and Apply Changes. Reuse only the recorded course profile on a repeat.
3. Lucas requests this profile from Request Center with `AR-089 requested origin`; Priya approves. Follow Account Activity and require Lucas disposable True/Remote False.
4. Create **Admin > Access Model > Roles > Create New** named `ROLE-Acme-Change-Test`, owner Priya. Under Manage Access add only the test profile. Under **Define Assignment > Identity List** add only Taylor (`acme.e025`). Keep role requestability off. Save, verify one listed identity, enable and Apply Changes.
5. Follow Taylor's operation and require disposable True/Remote False on his existing account. Inspect both identities' Access: Lucas has a requested profile, Taylor has the automatic role/profile path. Save `AR-089-01.png`.

**Check:** The same initial entitlement reaches two people through different assignment origins.

### 2. Add an entitlement and observe both identities

1. Edit the test profile's **Manage Entitlements**, add only GG-REMOTE-USERS from the same source and save. Record the definition and Apply Changes once. Do not submit a new Lucas request.
2. Follow resulting activities for both identities and repeat the four native checks. The documented behavior adds the new entitlement for role/lifecycle assignments, but not for a previously requested/detected profile. Record actual results and processing times; expect Taylor Remote True and Lucas Remote False while both retain the disposable group.
3. Aggregate AD accounts and inspect both Access views. Record whether Lucas still appears to match the changed profile and how his original request/assignment is represented. Do not infer a new request from a changed profile label. Save `AR-089-02.png`.

**Check:** Definition changes and target changes are separately observed. [Profile update behavior](https://documentation.sailpoint.com/saas/help/access/access-profiles.html)

### 3. Remove an entitlement from the definition

1. In the test profile, remove only GG-ACME-FAULT-049 from Manage Entitlements. Leave Remote Users, save and Apply Changes. This edits the profile; it does not delete the source group.
2. Inspect operations and repeat native checks. Record the disposable membership still held by each person and any independent entitlement representation. The documented behavior does not revoke existing access merely because its entitlement was removed from the profile.
3. Reconcile accounts and record current role/profile/independent access paths on each identity. Save `AR-089-03.png`. Do not label residual membership a connector failure without checking the definition-change behavior.

**Check:** Removal from a bundle is not an explicit account-level revocation.

### 4. Remove the automatic path before cleaning residual access

1. Edit the test role's **Define Assignment > Identity List**, remove Taylor, save and Apply Changes. Verify he is no longer eligible/assigned and inspect any deprovisioning. Leave the role disabled and non-requestable after this processing. Do not remove ROLE-Acme-AD-Baseline.
2. If Lucas retains a requested test-profile assignment, revoke that exact profile through his **My Access > Access Profiles**, reason `AR-089 requested profile cleanup`; Priya approves any matching Remove. Record when no such assignment remains rather than inventing one.
3. As administrator, open each identity's **Access > Entitlements**, find each residual disposable/Remote Users entitlement on the recorded account and inspect its origin. Use the available **Revoke/Remove** assignment action, enter `AR-089 residual test access cleanup` and submit. Complete the actual configured removal review before checking the target.
4. If an independent detected entitlement has no supported removal action in your tenant, record that limitation and first confirm no role, profile or requested assignment still requires it. On the AD workstation, remove only the confirmed residual test membership through **group Properties > Members > select exact account > Remove**. Record that this was a manual source cleanup, not proof of ISC revocation. Reconcile accounts afterward. Never use this fallback while an assignment would reprovision it.
5. Require disposable and Remote Users False for both people, Lucas's prior VPN/baseline intact and Taylor's baseline absent. Keep original accounts. Disable requestability and the test profile; retain the empty/disabled role and definition/history. Save `AR-089-04.png`.

**Check:** Assignment paths are removed before any residual native membership, preventing immediate reprovisioning.

### 5. Write the change handover

1. In the journal record the original definition, each edit/apply time, Lucas and Taylor's separate resulting access, cleanup method and final state.
2. Write a short change instruction for another engineer: enumerate assignment origins, predict the two update behaviors, identify residual-access removal, test one identity per origin and verify the target afterward. Name any result that differed from the documented behavior and the evidence needed to investigate it.
3. Save `AR-089-05.png` with the comparison and final disabled objects.

**Check:** The handover does not promise that changing a bundle changes every existing assignment in the same way.

## Check the result

Requested and automatic assignments have separate before/after evidence for adding and removing an entitlement. All test memberships and assignment paths are explicitly cleaned up.

## Finish

Keep both test objects disabled/non-requestable and Taylor removed from the identity list. Preserve the changed source groups and their IDs, with no residual test access on either account.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-089-01.png | Requested and automatic origins with initial memberships |
| AR-089-02.png | Added entitlement and different target results |
| AR-089-03.png | Removed definition item and residual access |
| AR-089-04.png | Explicit cleanup, eligibility removal and native state |
| AR-089-05.png | Change handover and disabled objects |

[Previous: AR-088](../AR-088/README.md) · [Course outline](../../README.md) · [Next: AR-090](../AR-090/README.md)
