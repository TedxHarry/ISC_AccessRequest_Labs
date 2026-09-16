# AR-076 · Investigate a separation-of-duties conflict

In this lab, you'll give Lucas one payment duty, inspect a conflicting request, and compare a reviewer warning with an actual decision and detected violation.

## Before you start

Complete [AR-075](../AR-075/README.md). You need SoD capability and an administrator allowed to manage policies. Use Acme Admin, Lucas (`acme.e012`), Olivia (`acme.e011`), Daniel (`acme.e003`) and the AD workstation. Prepare a missing session with [the registration steps](../../labs/AR-029/README.md#1-prepare-the-five-sessions-and-check-henry), preserving your complete private HR file. Keep course developer subscriptions disabled and open your [journal](EVIDENCE.md).

You will create the two groups below. They must be ordinary lab groups with no permissions on real payment systems. If SoD is unavailable, mark AR-076/077 Not run; [AR-078](../AR-078/README.md) can be completed independently.

## Follow the steps

### 1. Create and discover the two payment groups

1. On the AD workstation, open **Server Manager > Tools > Active Directory Users and Computers**. Locate your recorded **AcmeLab > Groups** OU. Search the domain for each name below first; reuse only the existing course group with the recorded DN/GUID.
2. In the Groups OU, select **New > Group**. Create `GG-ACME-PAYMENT-PREPARE` and `GG-ACME-PAYMENT-APPROVE`, each with Global scope and Security type. Keep both groups empty. Record their distinguishedName and objectGUID from **Properties > Attribute Editor** with **View > Advanced Features** enabled.
3. In ISC, open **Admin > Connections > Sources > your AD source**. Confirm the group search scope includes this Groups OU. Run entitlement aggregation using [the source checks](../../labs/AR-003/README.md). Wait for completion, then find both entries under **Admin > Access Model > Entitlements** by source and native DN. Record their ISC IDs separately from AD GUIDs.
4. Open each entitlement, select **Actions > Edit**, and set Primary Owner to Daniel. Under **Access Requests**, turn on Allow Access Requests and Require Approval, choose Reviewer, and add Primary Owner. Under Require Comments, select user requests, reviewer denies and reviewer approves with violations. Turn on Require Approval for Removal and add Primary Owner there too. Leave request form and required end date off. Save and reopen. Keep the existing global entitlement-request setting; do not add either group to a role, profile, segment or baseline.
5. Verify Lucas and Olivia lack both groups and have no pending payment request. Record their existing accounts and unrelated memberships; preserve Lucas's VPN. Use the read-only check below. Save `AR-076-01.png` with group identities and request settings.

```powershell
Import-Module ActiveDirectory
$paymentGroups = 'GG-ACME-PAYMENT-PREPARE','GG-ACME-PAYMENT-APPROVE'
foreach ($login in 'acme.e012','acme.e011') {
    $person = Get-ADUser -Identity $login -Properties memberOf
    foreach ($groupName in $paymentGroups) {
        $group = Get-ADGroup -Identity $groupName
        [pscustomobject]@{
            Account = $login
            Group = $groupName
            DirectMember = $person.memberOf -contains $group.DistinguishedName
        }
    }
}
```

**Check:** Four False results establish a clean start. If a previous run left access, remove its assignment using Section 5 before repeating.

### 2. Define and enable the conflict

1. As Acme Admin, open **Admin > SoD Policies > Create New**. Use `SOD-Acme-Payment-Duties`, description `The same lab identity must not prepare and approve payments`, Policy Owner Daniel, Violation Owner Noah (`acme.e007`) and Level High. Leave optional controls and schedules empty.
2. Select Next. Name List A `Prepare payments`; choose **Add Access Items > Entitlements**, find the PREPARE group by source/native value, select it and Add.
3. Name List B `Approve payments`; add only the APPROVE group from the same source. Select Next, review both lists, and Finish. On the policy row choose **Actions > Enable Policy** if not already enabled.
4. Reopen the definition and verify both ISC entitlement IDs. Record policy ID, enabled state and owners. The violation owner is not a substitute for the item's configured request reviewer. Save `AR-076-02.png`.

**Check:** The policy compares the two isolated entitlements. [Policy setup and evaluation](https://documentation.sailpoint.com/saas/help/sod/manage-policies.html)

### 3. Compare a conflict with a clean request

1. As Lucas, open **Request Center > Access Items > Entitlements**, select PREPARE on your AD source, enter `AR-076 first duty`, choose his standard account if prompted, then **Save > Review Request > Submit Request**. Record the ID in My Requests.
2. As Daniel, open **Approvals > Access Requests > Requested**, inspect Lucas's PREPARE Grant and approve with `AR-076 one duty allowed`. Follow [Account Activity](../../LAB-DESK.md#find-the-account-activity), rerun the native check and verify Lucas PREPARE True, APPROVE False. Run [AD account aggregation](../../M02-CHECKS.md#refresh-imported-ad-data) and confirm his imported account shows PREPARE before the next request.
3. As Lucas, request APPROVE by the same route, reason `AR-076 conflicting duty`. Record any requester warning and the request ID. As Daniel, open that Grant and **Review Violations** where shown. Match the policy and the existing/requested items. Save `AR-076-03.png` before deciding.
4. Deny with `AR-076 payment duties must remain separate`. Verify terminal denial and Lucas APPROVE False. If no warning appeared, record that missing result, deny anyway, then check policy enabled state, exact IDs and imported PREPARE membership. Do not count a missing warning as a passed warning test or repeatedly submit duplicates.
5. As Olivia, request APPROVE, reason `AR-076 clean control`. Daniel inspects the violation context, confirms she has no PREPARE, and approves with `AR-076 clean duty approved`. Verify native APPROVE True for Olivia and False for Lucas; capture decision and membership evidence in `AR-076-04.png`.

**Check:** Daniel's denial stopped the conflicting request. The clean control shows that the APPROVE entitlement itself can provision. [Reviewing violation information](https://documentation.sailpoint.com/saas/user-help/approvals/reviewing_access.html)

### 4. Observe a deliberately approved lab conflict

1. Verify these groups still carry no real permissions and Lucas holds only PREPARE. Submit a fresh Lucas APPROVE request, reason `AR-076 isolated warning-versus-decision test`.
2. Daniel inspects the warning and approves with `AR-076 controlled lab conflict; remove after observation`. This comment does not create a formal SoD exception. Record the actual decision and operation; if another control blocks it, retain that evidence instead of disabling that control.
3. If granted, verify Lucas has both groups in AD and aggregate the account. As administrator, open the policy and select **Actions > Run Policy > Run Policy**. Wait for evaluation, then inspect the policy's violation list for Lucas and the two item IDs. Record status, owner and observation time. Save `AR-076-05.png`.
4. If no violation appears after completed evaluation, inspect imported memberships and the definition. Record the gap; do not claim detection merely because native memberships conflict. Continue with cleanup even if the expected result was not reproduced.

**Check:** Request warning, decision, native access and policy evaluation are separate observations.

### 5. Remove the temporary conflict and retain the next lab's starting state

1. As Lucas, open **My Access > Entitlements**, select APPROVE on the AD source, open **Assignment > Revoke Assignment**, enter `AR-076 remove controlled conflict` and submit. Do this only if that assignment was granted. As Daniel, approve the matching Remove request.
2. As Olivia, remove her APPROVE assignment by the same route, reason `AR-076 clean control complete`; Daniel approves Remove. Follow both operations and rerun the native check.
3. Aggregate AD accounts. Require Lucas PREPARE True/APPROVE False and Olivia both False, original accounts retained and no pending payment work. Run the policy again and record its current violation state separately from historical records. Save `AR-076-06.png`.
4. Leave the policy enabled and both entitlements on direct Daniel review for AR-077. If you will skip AR-077, also remove Lucas's PREPARE through the same reviewed removal, verify absence, then disable this course policy and requestability for both groups.

**Check:** No conflicting access remains. Lucas's first duty is retained only when continuing to AR-077.

## Check the result

The conflict and clean case have separate decisions and native proof. The controlled grant has either a detected violation or a clearly recorded blocking condition/gap. Cleanup leaves no identity holding both payment groups.

## Finish

Keep policy/group/request IDs and the actual warning/evaluation results. Continue to AR-077 with Lucas PREPARE only and Olivia neither; use Section 5 cleanup if stopping this track. Preserve Lucas VPN and both original accounts.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when several images are needed. Label synthetic tests separately from live requests.

| Filename | What to show |
|---|---|
| AR-076-01.png | Group identities, request settings and four starting checks |
| AR-076-02.png | Policy lists, owners and enabled state |
| AR-076-03.png | Conflicting review before denial |
| AR-076-04.png | Clean approval and separate native results |
| AR-076-05.png | Controlled conflict and policy evaluation or observed block |
| AR-076-06.png | Reviewed removals and next-lab starting state |

[Previous: AR-075](../AR-075/README.md) · [Course outline](../../README.md) · [Next: AR-077](../AR-077/README.md)
