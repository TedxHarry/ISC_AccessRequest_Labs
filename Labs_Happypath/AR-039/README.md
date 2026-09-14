# AR-039 · Verify the Production Support form and save C06

In this lab, you'll repeat the form checks, approve one complete request through both reviewers, remove its access, and save the Module 6 results.

## Before you start

Complete [AR-038](../AR-038/README.md). Its form must be restored and its request denied. Have Acme Evelyn (`acme.e021`) available for Security review. Use Acme Admin, Acme Henry (`acme.e018`) and Acme Ava (`acme.e006`) in separate browser profiles, plus your AD workstation. Keep your [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Check the saved configuration

1. As administrator, open **Admin > Global > Forms > FORM-Acme-Production-Support**. Verify Change ticket (`changeTicket`), Environment (`environment`) and Work description (`workDescription`) are required. Implementation notes (`implementationNotes`) and Rollback plan (`rollbackPlan`) remain optional.
2. Check Environment permits one listed value, Production or Test. Open **Settings > Conditions** and verify the working Production-to-Show-Rollback condition from AR-036. Exit without changing it.
3. Open **Admin > Access Model > Access Profiles > AP-Production-Support > Access Requests**. Confirm this form is required, grant review is Manager then GOV-Security-Review, removal reviewer is Primary Owner/Ava, timeout is 90 days, reminders/escalations are off and required end date is off.
4. Verify Remote Worker's original form association from AR-037 is restored. Check Henry has no pending diagnostic request or Production Support assignment. Run [the direct membership check](../../M02-CHECKS.md#inspect-direct-ad-membership): Support, VPN and Remote Users False; baseline True.
5. Record the form and profile IDs and capture the saved field and condition settings as `AR-039-01.png`.

**Check:** These are the settings created in AR-034–038. This lab verifies them; you do not create a second form.

### 2. Repeat the input checks

1. As Henry, start a fresh Production Support form in **Request Center > Access Items > Access Profiles**. Use ticket `CHG-LAB-039-CONTROL`, Environment `Test`, Work description `Repeat the module form checks`, and standard comments `AR-039 validation control`. Leave standard dates empty.
2. Clear only Change ticket and attempt to save/continue. Record the error, then restore the ticket. Clear only Environment, record its error and restore Test. Clear only Work description, record its error and restore the text. These attempts should not create submitted request IDs.
3. Choose Production, verify Rollback plan appears, then return to Test and verify it hides. Leave Implementation notes empty. Save and review, checking Henry and his standard account, then submit this corrected Test request. Record the ID.
4. As Ava, open **Approvals > Access Requests > Requested** and open Henry's matching Production Support **Grant** details. Compare each answer with your journal. Select **Deny**, enter the stated test reason and confirm. As administrator, verify **Denied** under **Admin > Dashboard > Approval Management > Access Requests** using that request ID. Check Henry's direct `GG-PROD-SUPPORT` membership is **False** using [the AD membership procedure](../../M02-CHECKS.md#inspect-direct-ad-membership). An error is not a False result. Use reason `AR-039 Test control complete`. Save `AR-039-02.png` for validation and the resulting diagnostic denial.

**Check:** Required-field validation and the Test branch still work on the saved form.

### 3. Approve the complete Production case

1. After the control is Denied, start a fresh Henry Production Support request. Enter ticket `CHG-LAB-039-PASS`, Environment `Production`, Work description `Verify the simulated support group for the module acceptance test`, Implementation notes `Record the before and after membership`, Rollback plan `Revoke the profile and confirm group removal`, and standard comments `AR-039 complete Production case`.
2. Keep immediate access with no standard dates. Save, select **Review Request**, reopen **Edit Request Details** and compare all five answers. Confirm recipient/account, submit once and record the new request ID.
3. As Ava, open **Approvals > Access Requests > Requested**, open Henry's matching Grant and read all answers. Approve with comment `AR-039 lab maintenance approved` and confirm.
4. As administrator, find this request under **Admin > Dashboard > Approval Management > Access Requests**. Open the access name and confirm the next stage is GOV-Security-Review. Check direct Support membership is still False before the group decision.
5. As Evelyn, open the matching Grant, verify its answers and approve with `AR-039 Security approved`. Save `AR-039-03.png` showing the submitted answers and both completed review stages.
6. Follow [Account Activity](../../LAB-DESK.md#find-the-account-activity) for Henry's support-group addition. Record the activity ID, source and operation. Run the native membership check: Support must become True, VPN and Remote Users stay False, baseline stays True. Save `AR-039-04.png`.

**Check:** Both approvals completed and the intended AD group changed. An approved request alone is not proof that provisioning succeeded.

### 4. Remove the test grant

1. As administrator, open **Admin > Identity Management > Identities > Henry > Access > Access Profiles**. Select `AP-Production-Support`, open **Details**, then **Revoke Access Profile**. Enter the lab number and `test complete`, then confirm **Revoke**. Record the removal request ID.
2. As Ava, open **Approvals > Access Requests > Requested**. Open Henry's matching **Remove** request, verify the profile, select **Approve**, enter a completion comment and confirm.
3. Follow [Account Activity](../../LAB-DESK.md#find-the-account-activity) for the removal. Run [the direct AD membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for `acme.e018`: `GG-PROD-SUPPORT` must be **False** and `GG-ACME-BASELINE` **True**.
4. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data). Reopen Henry's identity and verify the Production Support assignment and group are removed. Preserve his AD account and baseline role. Resolve a failed removal before another grant test.

5. Recheck VPN and Remote Users remain False. Save `AR-039-05.png` showing completed removal and final memberships.

### 5. Save C06

1. Complete the [journal](EVIDENCE.md) with the validation cases, request IDs, decisions, activity IDs and final native results. Label an unexecuted case **Not run**; a written expected result is not a tenant observation.
2. Record the form name/ID, five labels/keys/types, required settings, environment options, condition operator/value/effect and Production Support association. Use the saved configuration captures to make this record repeatable.
3. Record the unchanged grant/removal reviewers and timing settings, Remote Worker's restored association, no pending diagnostic requests, and Henry's final group results.
4. Keep this as **C06** for AR-040. If any check failed, name the failed case and resolve it before calling C06 complete. If native forms are unavailable, mark Module 6 unexecuted rather than treating a standalone form preview as a pass.

**Check:** You can show what was configured, what was submitted, who decided, what AD received and how it was removed.

## Check the result

C06 contains observed form validation, both condition branches, reviewer answers, a completed grant and its completed removal. The definition remains attached for the date labs; Henry has no test business access.

## Finish

Keep the form definition and its Production Support association. Leave Henry without Production Support membership or a pending diagnostic request. Preserve existing accounts, baseline access and Lucas's VPN. Keep the five-field form, its Production condition and C06. Continue to AR-040 without changing these settings; complete the form alongside the date fields when that lab asks for a request.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs more than one image.

| Filename | What to show |
|---|---|
| AR-039-01.png | Final saved form, condition and profile association |
| AR-039-02.png | Required-field errors and Test control denial |
| AR-039-03.png | Production answers and both review stages |
| AR-039-04.png | Completed group addition and native result |
| AR-039-05.png | Completed removal and final native result |

[Previous: AR-038](../AR-038/README.md) · [Course outline](../../README.md) · [Next: AR-040](../AR-040/README.md)
