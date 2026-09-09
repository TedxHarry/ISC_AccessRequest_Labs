# AR-085 · Distinguish direct access, nested membership and account state

**Before you start:** AR-084 or the completed AD core. Use Taylor's isolated test account and two new ordinary lab groups.

## Investigate effective access

1. Create Global Security groups `GG-ACME-NEST-PARENT` and `GG-ACME-NEST-CHILD` under AcmeLab/Groups. Add the child group as a member of the parent. Record the group hierarchy.
2. Aggregate entitlements and make only the child requestable with Priya reviewing. Request the child for Taylor and approve.
3. Compare `Get-ADGroupMember GG-ACME-NEST-PARENT` with `Get-ADGroupMember GG-ACME-NEST-PARENT -Recursive` on the same controller. Record direct child membership versus Taylor's effective nested membership.
4. Inspect ISC's account entitlements and the request activity. Explain why effective membership in the parent does not prove a separate parent entitlement request occurred.
5. Record Taylor's Enabled state. Disable only this isolated account in AD Users and Computers, then check that group memberships still exist. Do not infer successful sign-in from membership alone.
6. Restore Taylor's original enabled state. Remove the requested child assignment and verify the nested effective access is gone if no other path remains.

**Check:** Direct provisioning, inherited access and account usability are separately checked. A connector's nested-entitlement representation must be verified before treating it as the same as native AD recursive membership.

**Reset:** Account state restored, child request removed, child entitlement non-requestable. Preserve the two harmless groups for repeat practice or document their later cleanup.

[AD group membership command](https://learn.microsoft.com/en-us/powershell/module/activedirectory/get-adgroupmember)

## Screenshots to capture

1. Parent/child group hierarchy.
2. Direct and recursive membership comparison.
3. Disabled account with retained memberships, then restored state/removal.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-084](../AR-084/README.md) · [Course outline](../../README.md) · [Next: AR-086](../AR-086/README.md)
