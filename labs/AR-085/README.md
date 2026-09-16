# AR-085 · Distinguish direct membership, nested access and account state

In this lab, you'll request a child group for Taylor, inspect the resulting parent membership and show why a disabled account can still belong to groups.

## Before you start

Complete the AD core through [AR-051](../AR-051/README.md). No external integration is required. Use Taylor, Priya, Acme Admin and an AD administrator session independent of Taylor. Taylor's retained test account must be enabled, have no pending request and carry no real workload. Keep its DN/GUID and enabled-state before-record in your [journal](EVIDENCE.md).

## Follow the steps

### 1. Create a harmless nested pair

1. In **Active Directory Users and Computers > AcmeLab > Groups**, search for and create `GG-ACME-NEST-PARENT` and `GG-ACME-NEST-CHILD` as Global Security groups. Reuse only matching course objects. Neither group should grant real permissions.
2. Open the parent's **Properties > Members > Add**, select the child group, Check Names and OK. Record both DNs/GUIDs and confirm the child has no members. Never nest the parent back into the child.
3. Aggregate AD entitlements. Find both in ISC by source/native DN and record their IDs. Leave the parent non-requestable. Configure only the child for direct requests: Priya owner, Primary Owner grant/removal approval, user reason required and no form/date requirement.
4. On the AD workstation run the checks below. Record the controller name once and use the same controller throughout. Initially Taylor must be absent from direct and recursive results. Save `AR-085-01.png`.

```powershell
Import-Module ActiveDirectory
$labDC = Read-Host 'Recorded lab domain controller hostname'
Get-ADGroupMember -Identity GG-ACME-NEST-PARENT -Server $labDC | Select-Object Name,SamAccountName,ObjectClass
Get-ADGroupMember -Identity GG-ACME-NEST-PARENT -Recursive -Server $labDC | Select-Object Name,SamAccountName,ObjectClass
Get-ADUser -Identity acme.e025 -Server $labDC -Properties memberOf,Enabled | Select-Object DistinguishedName,Enabled,memberOf
```

**Check:** The parent's direct member is the child group, not Taylor.

### 2. Request the child and compare the three views

1. Taylor opens **Request Center > Access Items > Entitlements**, selects the child on the AD source, reason `AR-085 nested access`, then Save, Review Request and Submit Request. Priya approves the matching Grant in Approvals.
2. Follow Account Activity and require an add to the child, with Taylor's retained account as target. Repeat the three checks above. Taylor should appear in the parent's recursive result and in the child's direct members, but not as a direct member of the parent.
3. Run AD account aggregation and inspect Taylor's Accounts/Access in ISC. Record which nested/direct values the connector actually represents; do not change connector settings to force the display to match your expectation. Save `AR-085-02.png` with all three views.

**Check:** A recursive parent result does not prove someone submitted a separate parent request. Membership alone does not prove access to a particular resource; its permissions and sign-in/session behavior are separate checks. [Microsoft membership behavior](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-adcap/3501d61e-43c7-499b-a596-6c261124e008)

### 3. Disable only the isolated account and restore it

1. In AD Users and Computers, find Taylor by the recorded DN/GUID and verify `acme.e025`. Right-click only that account and select **Disable Account**. Leave the independent AD administrator session open.
2. Repeat the read-only account and recursive checks. Record Enabled False while membership persists. Do not claim this test invalidates existing sessions or proves every application denies access. Save `AR-085-03.png`.
3. Immediately right-click the same account and **Enable Account**, restoring its original enabled state. Verify Enabled True before leaving this section. If ISC source provisioning changes the state concurrently, record the action/timing and resolve the cause rather than repeatedly toggling the user.

**Check:** Account state and group membership changed independently. Never leave Taylor disabled as the reset for an access request.

### 4. Remove the assignment and verify no inherited path remains

1. As Taylor, open **My Access > Entitlements > child group > Assignment > Revoke Assignment**, reason `AR-085 nested test complete`. Priya approves Remove. Follow the operation and require Taylor absent from the child and the parent's recursive result.
2. Reconcile AD data. Verify no pending request, Enabled True, original DN/GUID and no new baseline/business memberships. If the recursive result still contains Taylor, inspect other child paths and direct parent membership before another removal.
3. Mark the child non-requestable. Retain the two harmless groups and their child-to-parent link for repeat practice. Save `AR-085-04.png`.

**Check:** The requested membership and its inherited path are gone; the account remains available.

## Check the result

The evidence distinguishes the requested child membership, recursive parent relationship, imported ISC representation and account enabled state. Cleanup restores Taylor and removes only the test access.

## Engineering practice

Given a parent recursive result that still includes Taylor after child removal, inspect direct parent members and each remaining path before choosing a repair. Use a paper diagnosis unless the remaining path actually exists; do not grant a second path merely to invent an outage.

## Finish

Leave Taylor enabled with no nested-test access. Keep the two groups non-requestable and preserve unrelated accounts and memberships.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-085-01.png | Group nesting and clean controller-specific checks |
| AR-085-02.png | Request activity, direct/recursive and imported views |
| AR-085-03.png | Disabled account retaining memberships |
| AR-085-04.png | Enabled account and removed nested path |

[Previous: AR-084](../AR-084/README.md) · [Course outline](../../README.md) · [Next: AR-086](../AR-086/README.md)
