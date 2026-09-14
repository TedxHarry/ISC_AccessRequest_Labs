# AR-027 · Resolve visibility and account-selection tickets

## Before you start

<a id="goal"></a>

Finish the module by checking an intended catalog restriction, tracing an incorrect department, and delivering VPN to Sofia's standard account. Use evidence to explain whether a reported result is correct behavior, a data problem or an account-selection problem.

Complete [AR-026](../AR-026/README.md), including VPN removal. Open Acme Admin, Acme Lucas, Acme Liam, Acme Sofia and Acme Priya. Keep the latest complete private HR file, AR-023's original permission record, AR-026's two-account evidence and your [journal](EVIDENCE.md) open.

Finance segmentation is enabled; Lucas is Finance; Liam is IT. Sofia has two correlated AD accounts, neither with VPN. Only her standard account has baseline. No test request is pending.

## Follow the steps

### 1. Check Liam's intended restriction

1. As administrator, open Liam under **Admin > Identity Management > Identities** and record Department=IT.
2. Open **Admin > Access Model > Segments > SEG-Acme-Finance > Edit Segment**. Check **Define Segment** and **Define Access**: Finance criterion, both Finance profiles and the Finance Analyst role. Verify the segment is enabled.
3. In Acme Liam, confirm acme.e008 and search the three Finance items in **Request Center > Access Items**, using Profiles or Roles as appropriate.
4. Search AP-Remote-Worker as the unsegmented control.
5. Record the explanation for a report saying “Liam cannot find Finance Reporting.” Leave the Finance restriction intact.

**Check:** Finance items are absent and Remote Worker is visible. Liam's result matches the configured policy; no repair is required.

**Screenshot:** `AR-027-01.png`: identity, segment and Liam's restricted/control searches.

### 2. Compare an administrator while Lucas has the wrong department

1. Save a new private backup of the latest complete HR file. Confirm Lucas is Finance on the file, HR account and identity before the comparison.
2. In a separate working copy, change only E012's department to Sales. Preserve every current row, email and manager value. Verify the row count and single-field change.
3. Upload the full edited file through **Admin > Connections > Sources > Acme HR > Account Management > Account Aggregation**.
4. Inspect completed aggregation, then **Acme HR > Account Management > Accounts > acme.e012**. Wait for identity processing and verify Sales on Lucas's identity.
5. Allow segment/catalog propagation as in AR-025. Confirm Lucas no longer matches SEG-Acme-Finance.
6. In Acme Lucas, search AP-Finance-Reporting and Remote Worker. In Acme Admin's Request Center, search AP-Finance-Reporting separately without submitting.
7. Record the current username beside each result. Do not grant Lucas administrator access to make his ordinary-user result match.

**Check:** Lucas cannot see the Finance profile while the org administrator can. Remote Worker remains visible to Lucas. The administrator's exception does not prove ordinary-user visibility is correct.

**Screenshot:** `AR-027-02.png`: Sales identity value and administrator/ordinary-user catalog comparison.

### 3. Restore the source data and retest Lucas

1. Restore E012 to Finance in the latest complete working file, preserving all other current rows and fields. Use the Section 2 backup only if no newer data has changed.
2. Upload the complete restored file through Acme HR's Account Aggregation.
3. Wait for completion and inspect the HR account, mapped identity Department and segment match in that order.
4. Refresh Acme Lucas's Request Center until both Finance profiles and the Finance Analyst role return.
5. Check his original identity ID, Manager, GG-VPN-USERS and GG-ACME-BASELINE against the starting evidence using [the native check](../../M02-CHECKS.md#inspect-direct-ad-membership).
6. Record the first incorrect value and the source correction. Keep the segment criterion unchanged.

**Check:** Lucas is Finance again, his catalog is restored and existing access remains. The complete HR population is preserved.

**Screenshot:** `AR-027-03.png`: restored data chain, catalog and native control.

### 4. Request VPN for Sofia's standard account

The earlier AR-026 grant targeted the second account. This request deliberately targets standard, so you can compare both choices with actual results.

1. As administrator, open Sofia's **Accounts** and verify both recorded accounts remain correlated. Recheck the baseline Multiple Account Options criterion under AP-Acme-AD-Baseline.
2. Run native checks for both acme.e009 and acme.e009.admin against GG-VPN-USERS and GG-ACME-BASELINE. VPN must be False on both; baseline must be True only on standard.
3. Confirm GG-VPN-USERS remains requestable with Priya as owner and primary-owner grant/removal reviewer.
4. In Acme Sofia, verify acme.e009 and open **Request Center > Access Items > Entitlements** for herself.
5. Find GG-VPN-USERS on the recorded AD source. Select it and enter `AR-027: VPN for the standard acme.e009 account`. Keep immediate access and **Save**.
6. Select **Review Request**, verify the recipient/item and proceed to submission. In **Select Accounts**, select **acme.e009**, matching the standard account name/ID from the journal and its Users OU DN where displayed.
7. Capture the selection, then select **Submit Request** in that panel. Record the confirmation, request ID and time.
8. If the account choice is missing or ambiguous, close before completing submission and use AR-026's correlation/account-label checks.

**Check:** The new request selects standard, while AR-026's earlier request selected the second account. Keep their IDs separate.

**Screenshot:** `AR-027-04.png`: clean two-account state and explicit standard-account selection.

### 5. Compare intended, selected and fulfilled targets

1. In Acme Priya, open **Approvals > Access Requests > Requested**, find Sofia's new VPN **Grant** and inspect **Details**.
2. Confirm the selected account is acme.e009, then approve and verify **Reviewed**.
3. In Acme Admin, use [Find the Account Activity](../../LAB-DESK.md#find-the-account-activity) with recipient acme.e009, the exact AD source and this request's decision time.
4. Inspect the operation's native target and group value. After completion, repeat both accounts' VPN/baseline checks.
5. Compare your evidence:

| Record | AR-026 | AR-027 |
|---|---|---|
| Intended account | acme.e009.admin | acme.e009 |
| Submitted account | Copy recorded selection | Copy current selection |
| Operation target | Copy recorded native value | Copy current native value |
| VPN during completed grant | Second=True, standard=False | Standard=True, second=False |

6. Use AR-026's saved grant-time membership capture for its historical row. Today's cleaned-up memberships cannot prove what was present before removal.

**Check:** Standard has VPN and baseline; the second account has neither. The submitted account and native operation agree with this request's intended standard target.

**Screenshot:** `AR-027-05.png`: approval/account activity, both native results and comparison.

### 6. Remove the standard-account test grant

1. In Acme Sofia, open **My Access > Entitlements > GG-VPN-USERS**.
2. Select the **Assignment** whose target is the standard account acme.e009. Compare its account identifier with Section 5.
3. Select **Revoke Assignment**, enter `AR-027: Standard-account VPN test complete` and **Submit Request**.
4. In Acme Priya, find the VPN **Remove** request, verify its target account, approve and record **Reviewed**.
5. Follow the matching removal activity as administrator. After completion, repeat both accounts' VPN/baseline checks.
6. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data) if needed. Confirm the requested VPN assignment is gone and both accounts remain.

**Check:** Neither account has VPN. Standard alone retains baseline, and the two correlated accounts are ready for later labs.

**Screenshot:** `AR-027-06.png`: exact removal target and final memberships.

### 7. Save the Module 4 handoff

1. Create a private **C04-Visibility-and-Accounts** evidence folder and copy the six module journals, request histories, configuration records and screenshots into it.
2. Reopen the Finance segment and verify it is enabled with its original Finance criterion and three items.
3. Reopen **Admin > Global > System Settings > Feature Settings > Access Requests**. Compare request-on-behalf on/off state and mode with AR-023's original record. Restore and save if different, then recheck the corresponding ordinary-user behavior from AR-024 Section 5.
4. Verify Lucas is Finance and Liam is IT; compare the complete HR row count with the start of the module. Verify their manager values are unchanged.
5. Check the two Sofia accounts and baseline account criterion. On a first pass there are 24 HR identities, 24 standard AD accounts and Sofia's one additional account; the baseline role still covers 24 identities.
6. Inspect **ROLE-Acme-AD-Baseline > View Details > Identities** and compare its members with C03. In AD Users and Computers, inspect **GG-ACME-BASELINE > Properties > Members** and confirm the standard users remain and Sofia's second account is absent.
7. Confirm Lucas retains VPN, Olivia and Liam remain without test Finance/VPN access, and both Sofia VPN assignments are absent.
8. Review the module's request/activity records. Resolve pending, failed or partial test operations before marking the handoff passed.
9. Write a short closure for each finding: intended Liam restriction, corrected Lucas source value, and verified Sofia target selection/removal. Name the evidence files another engineer would need.

**Check:** C04 matches [the retained-state table](../../M04-READINESS.md#what-each-lab-leaves-behind), and every temporary permission, HR value and test grant has been accounted for.

**Screenshot:** `AR-027-07.png`: final segment, original permission, HR values, baseline and C04 index.

## Check the result

### If the result differs

If a catalog result differs, find the first mismatch in identity data, segment membership or item settings before changing anything. If an account result differs, compare the written intent, submitted account, activity target and both native accounts. Complete removal of the exact requested assignment before another test; do not clear memberships directly in AD.

### Assess your diagnosis

Write your answer before opening the explanation: when does “access went to the wrong account” describe a selection error, and when does it describe a fulfillment problem? Include the evidence needed to distinguish them.

<details>
<summary>Check your explanation</summary>

If the selected account differs from the business intent but the native operation matches that selection, investigate the selection and its review. If the submitted target is correct but the operation or native change targets another account, investigate fulfillment and correlation using the actual identifiers. A person's name or one membership screenshot cannot distinguish those cases. Liam's missing Finance access is expected policy; Lucas's Sales value was a source-data issue, corrected without widening the segment.

</details>

### Final verification

- [ ] Liam's intended restriction and visible control are demonstrated.
- [ ] Administrator visibility is distinguished from Lucas's ordinary-user visibility.
- [ ] Lucas's temporary Sales value is restored throughout the data chain.
- [ ] Sofia's standard-account grant is compared with the earlier second-account grant.
- [ ] The exact standard assignment is removed; both accounts remain without VPN.
- [ ] Original request-on-behalf settings, baseline, Finance segment and Lucas's VPN remain.
- [ ] C04 includes complete evidence and no unresolved test operation.

## Engineering practice

### Practice checkpoints

Use your completed checks to write the three ticket closures before opening the supplied answers. State the evidence, any correction and the final state. Keep supplied cases separate from tenant failures you observed.

### Diagnose this ticket

This supplied practice case is separate from your observed tenant results. Write the first inspection, likely cause, smallest correction and repeat check before opening the answer.

> Three reports arrive together: Liam cannot find Finance Reporting; Lucas cannot see it while an org administrator can, and his identity says Sales; Sofia intended the second account but the recorded submission selected standard and the operation updated standard. Someone proposes rerunning every aggregation.

<details>
<summary>Compare your diagnosis</summary>

Separate the cases. Liam's Finance restriction matches policy when his IT identity and control catalog are correct. Lucas needs the source-to-identity department chain checked and corrected, followed by a requester retest; administrator visibility is exempt from segmentation. Sofia's operation matches the submitted selection, so inspect the selection/review error, remove the exact wrong test assignment and repeat with the intended account. Rerunning every aggregation does not correct all three causes. Use each case's own before/after and restoration evidence.

</details>

## Finish

### Leave this in place

Retain the Finance restriction, original request-on-behalf mode, current HR file, both Sofia accounts and standard-account baseline criterion. Keep C04 for the approval-routing labs.

[Segment behavior](https://documentation.sailpoint.com/saas/help/requests/segments.html) · [Account selection](https://developer.sailpoint.com/discuss/t/new-capability-multi-account-support/105600) · [Account-specific removal](https://documentation.sailpoint.com/saas/user-help/requests/requesting_access_removal.html)

### Resume or repeat

First confirm Lucas is back in Finance; if he is still Sales, complete Section 3. Find Sofia's standard-account VPN request before submitting another. Finish its verification and removal in Sections 5–6, then complete the handoff in Section 7. Keep both Sofia accounts, her baseline filter and the Finance segment; restore the original request-on-behalf setting.

### Screenshots to capture

| Filename | What to show |
|---|---|
| AR-027-01.png | Liam restriction and Remote Worker control |
| AR-027-02.png | Incorrect Lucas department and admin/user views |
| AR-027-03.png | Restored data, catalog and access |
| AR-027-04.png | Standard-account request selection |
| AR-027-05.png | Intended/selected/fulfilled comparison and native grant |
| AR-027-06.png | Targeted removal and final two-account state |
| AR-027-07.png | Restored configuration and C04 handoff |

Exclude passwords, invitation links and private HR email fields.

[Previous: AR-026](../AR-026/README.md) · [Course outline](../../README.md)
[Next: AR-028](../AR-028/README.md). Continue after the C04 checks pass.
