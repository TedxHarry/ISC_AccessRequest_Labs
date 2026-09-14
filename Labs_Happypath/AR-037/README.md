# AR-037 · Trace form answers through a multi-item request

In this lab, you'll reuse one form on two profiles, edit the copied answers for each item, and follow different review outcomes from one submission.

## Before you start

Complete [AR-036](../AR-036/README.md). Add Acme Priya (`acme.e002`) and Acme Evelyn (`acme.e021`) to the sessions below; both were prepared earlier. Use Acme Admin, Acme Henry (`acme.e018`) and Acme Ava (`acme.e006`) in separate browser profiles, plus your AD workstation. Keep your [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Prepare two clean items

1. Run [the direct AD membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for Henry and each group: `GG-PROD-SUPPORT`, `GG-VPN-USERS` and `GG-REMOTE-USERS` must all be **False**; `GG-ACME-BASELINE` must be **True**.
2. Check Henry's **Access > Access Profiles** and pending requests. He must have neither Production Support nor Remote Worker and no pending request for either. Resolve leftovers before this comparison.
3. Open **Admin > Access Model > Access Profiles > AP-Remote-Worker > Access Requests**. Record its current required-form checkbox, selected form, grant/removal reviewers, comments and date settings. Its grant reviewer should be Primary Owner, Priya. Save the original configuration in the journal before changing it.
4. Enable **Require Access Request Form**, select `FORM-Acme-Production-Support`, and **Save**. Reopen to verify. Leave other settings unchanged. Confirm Production Support still uses the same form and Manager then Security review. Save `AR-037-01.png` showing the two associations.

**Check:** Two different profiles require the same form definition. Henry starts without any of their groups.

### 2. Inspect copied values before editing

1. As Henry, open **Request Center > Access Items > Access Profiles** and select `AP-Production-Support` first. Enter ticket `CHG-LAB-037-A`, Environment `Production`, Work description `Inspect the simulated production support group`, Rollback plan `Revoke Production Support after the test`, and comments `AR-037 Production Support`. Keep immediate access and save.
2. Add `AP-Remote-Worker` to the same request. Inspect its form before editing. SailPoint documents [automatic copying when the same form is required by multiple items](https://developer.sailpoint.com/discuss/t/new-capability-forms-for-access-request/217255); record which values were copied in your tenant. Save `AR-037-02.png` before overwriting them.
3. For Remote Worker, set ticket `CHG-LAB-037-B`, Environment `Test`, Work description `Compare the remote access review without granting it`, and comments `AR-037 Remote Worker control`. Clear any copied optional text that does not apply. Save.
4. Select **Review Request**. Open **Edit Request Details** separately for each profile. Verify ticket A belongs to Production Support and ticket B to Remote Worker. If an edit affected both, correct them and recheck both item summaries before submission. Capture `AR-037-03.png` showing the final association of each item with its answers.
5. Confirm Henry is the recipient and his standard account is selected wherever requested. Select **Submit Request** once. In **My Requests**, record each item's request ID separately; do not assume one basket means one shared ID.

**Check:** The two submitted items have distinguishable answers. A copied value has been reviewed for the item that will use it.

### 3. Follow the two decisions

1. As Priya, open **Approvals > Access Requests > Requested** and find Henry's Remote Worker **Grant** details. Verify ticket B and the Test description. Select **Deny**, enter `AR-037 Remote Worker is not authorized`, and confirm.
2. As Ava, open Henry's Production Support **Grant** details. Verify ticket A, Production and the rollback plan. Select **Approve**, enter `AR-037 simulated support work approved`, and confirm.
3. In Acme Admin, find the Production Support ID under **Admin > Dashboard > Approval Management > Access Requests**. Open the access name and confirm **Process/Assignees** now show GOV-Security-Review. It must not have provisioned before the second review.
4. As Evelyn, open the matching Grant under **Approvals > Access Requests > Requested**. Compare the Production Support answers, approve with `AR-037 Security control approved`, and confirm. One eligible group member's approval completes the group stage.
5. Inspect [Account Activity](../../LAB-DESK.md#find-the-account-activity) for the resulting Production Support operation. Run direct membership checks: Production Support must become **True**, while VPN and Remote Users remain **False**. Save `AR-037-04.png` showing both item decisions and target results.

**Check:** The approved item provisions independently of the denied item. Form answers give request context; no mapping was added here to write a change ticket into an AD account attribute.

### 4. Restore the temporary association and remove the grant

1. Reopen Remote Worker's **Access Requests** settings. Restore the exact form checkbox and selected form recorded in Step 1, save, then reopen to confirm. Keep the Production Support association.
2. As administrator, open **Admin > Identity Management > Identities > Henry > Access > Access Profiles**. Select `AP-Production-Support`, open **Details**, then **Revoke Access Profile**. Enter the lab number and `test complete`, then confirm **Revoke**. Record the removal request ID.
3. As Ava, open **Approvals > Access Requests > Requested**. Open Henry's matching **Remove** request, verify the profile, select **Approve**, enter a completion comment and confirm.
4. Follow [Account Activity](../../LAB-DESK.md#find-the-account-activity) for the removal. Run [the direct AD membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e018`: `GG-PROD-SUPPORT` must be **False** and `GG-ACME-BASELINE` **True**.
5. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data). Reopen Henry's identity and verify the Production Support assignment and group are removed. Preserve his AD account and baseline role. Resolve a failed removal before another grant test.

6. Recheck Henry's VPN and Remote Users memberships are False. Save `AR-037-05.png` showing restored settings and final membership checks.

## Check the result

Production Support was approved through both stages, Remote Worker was denied, and only the support group was added. After removal, all three business groups are absent and Remote Worker’s original form setting is restored.

## Finish

Keep the form definition and its Production Support association. Leave Henry without Production Support membership or a pending diagnostic request. Preserve existing accounts, baseline access and Lucas's VPN. Keep Remote Worker’s original form association restored.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs more than one image.

| Filename | What to show |
|---|---|
| AR-037-01.png | Two saved associations and Remote Worker’s original setting |
| AR-037-02.png | Automatically copied answers before editing |
| AR-037-03.png | Distinct answers in each item’s final review |
| AR-037-04.png | Independent decisions and native group results |
| AR-037-05.png | Restored association and completed removal |

[Previous: AR-036](../AR-036/README.md) · [Course outline](../../README.md) · [Next: AR-038](../AR-038/README.md)
