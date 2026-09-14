# AR-031 · Compare consolidated review and self-approval handling

You will compare two reviewer categories resolving to one person, two different people, and a requester who is also the profile owner.

## Before you start

Complete AR-030. Use Acme Admin, Acme Olivia, Acme Daniel and Acme Priya. AP-Finance-Reporting contains Reporting and VPN; Olivia's Manager is Daniel. Keep the [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Save the Finance profile's original configuration

1. Open **Admin > Access Model > Access Profiles > AP-Finance-Reporting**. Record primary owner Daniel, the current grant reviewer, removal reviewer, comments and timing settings. Keep the removal reviewer **Primary Owner** as established in Module 3.
2. Verify Olivia's Manager is Daniel under **Admin > Identity Management > Identities**. Run [native checks](../../M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e011` against GG-FIN-REPORTING, GG-VPN-USERS and GG-ACME-BASELINE. Start with False, False and True respectively.
3. Check Approval Management for any pending Olivia Finance Reporting request. Finish an earlier run before submitting another.

**Check:** Olivia starts clean, and you have the original profile settings to restore.

### 2. Resolve Manager and Primary Owner to Daniel

1. Keep Daniel as the profile's primary owner. Under **Access Requests > Reviewing Access Requests**, select **Require Approval > Reviewer**. Replace the grant-review list with **Manager** followed by **Primary Owner**, using + and the order arrows. Save and reopen.
2. In Acme Olivia, open **Request Center > Access Items > Access Profiles**, select AP-Finance-Reporting, enter `AR-031 same reviewer`, and choose **Save > Review Request > Submit Request**. Verify Olivia, the profile and her standard account.
3. Record the ID from My Requests. In Acme Admin, search that ID under **Admin > Dashboard > Approval Management > Access Requests**, then inspect **Process** and **Assignees**.
4. In Acme Daniel, open the matching Grant under **Approvals > Access Requests > Requested**, select **Approve** once and confirm. Inspect Process to verify Daniel's decision satisfies his required reviews without another Daniel task. The current service consolidates multiple assignments to the same person for the same request/item. A denial would end the request even without consolidation, so use approval for this test.
5. Follow [the Account Activity lookup](../../LAB-DESK.md#find-the-account-activity) for `acme.e011` and this request's time. Inspect both group-add operations, then verify native Reporting True and VPN True. If another Daniel task remains, record the actual process and investigate before treating consolidation as verified.
6. Before changing the owner, open **Admin > Identity Management > Identities > Olivia > Access > Access Profiles > AP-Finance-Reporting > Details > Revoke Access Profile**. Enter `AR-031 same-reviewer test complete`, then **Revoke**. In Acme Daniel, approve the separate Remove request.
7. Follow its removal operation and verify Reporting False, VPN False and baseline True. Record the removal ID separately. Do not begin the next grant with this assignment still present.

**Check:** One Daniel approval completed his required grant reviews, both groups were added, and the test grant was removed. Save `AR-031-01.png` showing the grant process and decision before removal.

### 3. Separate the two reviewers

1. Change only the profile's primary owner to Priya under its **Configuration** page. Save. Keep grant reviewers Manager then Primary Owner and reopen Access Requests to confirm them.
2. Submit a fresh Olivia request using reason `AR-031 different reviewers`. Find the new ID in Approval Management and verify Daniel is the first current reviewer.
3. In Acme Daniel, approve that Grant. Refresh the admin Process/Assignees view and confirm Priya is now the current reviewer. Verify neither business group has been added yet.
4. In Acme Priya, open that Grant and deny with `AR-031 second-stage denial`. Confirm Denied and both business groups absent.

**Check:** Daniel's approval exposed Priya's separate review. Save `AR-031-02.png` showing Priya's stage after Daniel approved.

### 4. Observe the requester-owner case

1. Change the profile's primary owner to Olivia. Under Access Requests, set only **Primary Owner** as grant reviewer. Save and reopen both pages. Keep the recorded removal policy.
2. Submit one Olivia request with reason `AR-031 requester is owner`. Record its ID and inspect Process/Assignees as administrator before anyone acts.
3. Under default self-approval prevention, Olivia's individual review is reassigned to her manager Daniel. If Daniel is assigned, deny it in Acme Daniel with the same reason. Record the actual assignee and decision rather than assuming Olivia can approve her own request.
4. If an existing tenant auto-approval setting concludes the request automatically, record that event and check the provisioning activity and both native groups. Do not change tenant-wide self-approval settings for this comparison. If another reviewer receives a pending task, record the route and use **Approval Management > Actions > Cancel Request**, enter the lab reason and confirm cancellation.
5. Restore Daniel as owner and the original grant/removal policies now. Save and reopen before any removal or final control.
6. If the requester-owner test granted the profile, open **Admin > Identity Management > Identities > Olivia > Access > Access Profiles > AP-Finance-Reporting > Details > Revoke Access Profile**. Enter `AR-031 self-review test cleanup` and select **Revoke**. Approve its Remove request in Acme Daniel. Follow its activity and verify Reporting and VPN are both absent. Cancellation cannot undo a completed grant.

**Check:** The result reflects the tenant's actual self-approval behavior, and Olivia finishes without either business group. Save `AR-031-03.png` showing the requester-owner request's actual outcome.

### 5. Confirm the original policy works again

1. Reopen the profile to confirm Daniel owns it and the grant/removal policies match Section 1.
2. Submit one fresh Olivia request with reason `AR-031 restored policy`. Verify it routes to Daniel, deny it in Acme Daniel, and record the final ID.
3. Check all four grant-request variants and any removal requests are concluded. Recheck Olivia's Reporting False, VPN False and baseline True; Lucas's existing VPN remains untouched.

**Check:** The restored configuration passes a fresh control. Save `AR-031-04.png` showing the restored profile settings.

## Check the result

Record the configured categories separately from the resolved people. Same-person consolidation is different from preventing a requester from reviewing their own access. The default is self-approval prevention, but an existing auto-approval configuration can change that outcome.

If the result differs, compare the actual requested object, submission time, owner and Manager with the saved policy. Use Process and Assignees to establish what happened. Keep unexpected behavior and evidence open for investigation rather than recording an unobserved success.

[Consolidated approvals announcement](https://developer.sailpoint.com/discuss/t/enhancement-approvals-expiration-governance-group-visibility-and-more/193947) · [Self-approval prevention and configuration](https://documentation.sailpoint.com/saas/help/requests/config_ap_roles.html#preventing-self-approval)

## Engineering practice

### Diagnose two categories but one decision

Your colleague wants to add another Daniel reviewer because the same-person test shows one action. Compare that request with the different-person test. Explain which evidence shows consolidation and which shows a real second reviewer.

<details>
<summary>Compare your diagnosis</summary>

Manager and Primary Owner both resolved to Daniel in the first test. In the second, Manager resolved to Daniel and Primary Owner to Priya; after Daniel approved, Priya's stage became active. Adding Daniel again would not create independent oversight. The reviewer identities, not the number of category labels, establish the distinction.

</details>

## Finish

Keep Daniel as Finance Reporting owner, restore its original grant/removal review and keep Olivia without Reporting or VPN. If interrupted, inspect the recorded request before acting. Restore Daniel before requesting removal of any self-review test grant, then finish the exact assignment's cleanup. Keep all baseline assignments and the Finance segment.

### Screenshots to capture

Capture these as you reach the matching step. If a result needs two screens, add `a` and `b` to that filename.

| Filename | What to show |
|---|---|
| AR-031-01.png | Same-person request and recorded decision |
| AR-031-02.png | Priya stage after Daniel approved |
| AR-031-03.png | Actual requester-owner handling |
| AR-031-04.png | Restored Finance Reporting settings |

[Previous: AR-030](../AR-030/README.md) · [Course outline](../../README.md) · [Next: AR-032](../AR-032/README.md)
