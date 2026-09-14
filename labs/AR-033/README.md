# AR-033 · Verify the approval setup and save C05

You will run fresh approval and denial controls, then leave the environment ready for request forms.

## Before you start

Complete AR-031 and either finish AR-032's observations or close its requests and mark the timed portion deferred. AP-Production-Support must have its original timing settings restored before you create new requests.

Use Acme Admin, Acme Henry, Acme Harper, Acme Ava and Acme Evelyn. Keep the Module 5 journals and the [AR-033 journal](EVIDENCE.md) open.

## Follow the steps

### 1. Verify the saved configuration

1. Open **Admin > Access Model > Access Profiles > AP-Production-Support**. Confirm owner Ava, your AD source and only GG-PROD-SUPPORT.
2. Open **Access Requests**. Confirm grant reviewers **Manager** then **GOV-Security-Review**, required request/denial comments, and removal reviewer **Primary Owner**. Confirm the original timing settings from AR-029/032 are restored. Forms and required end dates remain off for the first course pass.
3. Open **Admin > Identities > Governance Groups > GOV-Security-Review > Membership**. Verify Noah, Evelyn and William. Confirm Henry and Harper both have Ava as Manager on their identities.
4. Verify Finance Reporting's owner/reviewers are restored to Daniel and VPN's primary-owner grant/removal review resolves to Priya. Keep the AD source owner unchanged.
5. In Approval Management, inspect every request ID recorded in AR-028–032. No diagnostic request should remain pending. Use **Actions > Cancel Request**, a lab comment and confirmation for an unwanted pending diagnostic; verify any concluded grant was removed through ISC.
6. Run native checks for Henry and Harper: Production Support False, baseline True. Reuse their existing accounts.

**Check:** The policies, identities and accounts are ready for fresh tests. Save `AR-033-01.png` showing the restored Production Support reviewer order.

### 2. Run a fresh approval as Henry

1. In Acme Henry, open **Request Center > Access Items > Access Profiles**, find AP-Production-Support, add reason `AR-033 final approval control`, then **Save > Review Request > Submit Request**. Confirm Henry and his standard account.
2. Record the ID from My Requests and find it in **Admin > Dashboard > Approval Management > Access Requests**. Inspect Process/Assignees and verify Ava is first.
3. In Acme Ava, open the matching Grant under **Approvals > Access Requests > Requested** and approve. Confirm Security is now the active step.
4. In Acme Evelyn, open the matching Grant and approve for Security. Record both decisions in the admin Process view.
5. Follow the [Account Activity lookup](../../LAB-DESK.md#find-the-account-activity) for `acme.e018` and the exact source. Record the group-add result, then verify native GG-PROD-SUPPORT True and unchanged baseline/account identifiers.

**Check:** Fresh manager and Security decisions produced the intended AD change. Save `AR-033-02.png` showing the completed review process.

### 3. Remove Henry's grant and deny Harper's control

1. In Acme Admin, open **Henry > Access > Access Profiles > AP-Production-Support > Details > Revoke Access Profile**. Enter `AR-033 approval test complete` and select **Revoke**.
2. In Acme Ava, find Henry's Remove request and approve it. Follow the removal operation, then verify native Production Support False again. Refresh imported account data using [the source aggregation steps](../../M02-CHECKS.md#refresh-imported-ad-data) if needed.
3. In Acme Harper, submit AP-Production-Support through the same Request Center route with reason `AR-033 final denial control`.
4. Record the new ID, verify Ava as reviewer, then deny it in Acme Ava with the same reason. Confirm Denied and no Security decision needed.
5. Check Harper's Production Support False and baseline True. Record Henry's removal separately from Harper's denied Grant.

**Check:** Henry's test grant was removed and Harper's denial granted nothing. Save `AR-033-03.png` showing the denied request and `AR-033-04.png` showing the final native checks.

### 4. Save the module handoff

1. Create a private folder named `C05-Acme-Approvals` and save the Module 5 journals and sanitized screenshots there. Keep credentials, registration links and private HR emails out of shared evidence.
2. Record the Production Support profile ID, Security group ID/members, grant order, removal reviewer and restored timing settings.
3. Link each result below to its request ID. Use **Observed**, **Not run**, or **Timed observation pending**; a written procedure is not execution evidence.

| Case | Evidence to retain |
|---|---|
| Manager / primary owner / source owner | AR-028's three assignments and denials |
| Manager then Security | AR-029 and the fresh AR-033 approval |
| One member acts for Security | Actual group decision maker and completed group step |
| Reassignment | AR-030's original/new assignee and fresh control |
| Missing manager, engineering exercise | Actual fallback and restored manager, or Not run |
| Consolidated reviewer / self-approval handling | AR-031's separate request variants |
| Reminder / escalation / timeout | AR-032's actual events, or Timed observation pending |
| Removal / denial | AR-033's removal and denied Grant with native absence |

4. Confirm Olivia has no Reporting or VPN test access, Henry and Harper have no Production Support, and Lucas retains his original VPN. Sofia still has two accounts with no test VPN and baseline only on her standard account.
5. Retain the 24-identity baseline role and its standard-account memberships. On the first pass, the course still has 24 HR identities and 25 AD accounts because Sofia has a second account. The request tests did not create new employees.

**Check:** C05 identifies the current configuration, fresh working controls and any unverified timed evidence. Save `AR-033-05.png` showing the completed results table.

## Check the result

Accept the working approval setup only when Henry's new grant/removal and Harper's new denial agree with the native AD checks and no temporary diagnostic request remains. Full timed-lab acceptance still requires the real AR-032 observations.

If the fresh control routes incorrectly, inspect the restored profile reviewer order and the recipient's Manager before changing Security membership. If access remains, inspect the exact removal activity and assignment origin. Keep the failed check open; a successful approval alone does not close it.

[Approval process and assignment inspection](https://documentation.sailpoint.com/saas/help/requests/approvals_admin.html)

## Engineering practice

### Close a support ticket from your evidence

Use the fresh Henry request to answer: who requested access, who reviewed each stage, what changed in AD, and how was it removed? Then answer this supplied ticket: “The request still says Pending, so provisioning must have failed.”

<details>
<summary>Compare your diagnosis</summary>

Open Process and Assignees for that exact request. A pending reviewer stage means the approval is unfinished; it is not evidence of a failed AD operation. If reviews finished, inspect the provisioning stage and target separately. Your closure should identify the current stage, responsible person, request/activity IDs and the next required action.

</details>

## Finish

Keep GOV-Security-Review, AP-Production-Support, all existing identities/accounts and the restored policies. Carry C05 into AR-034, where the Production Support request form will be added. If AR-032 is deferred, keep that clearly marked and rerun its before/after requests when ready; do not mark the timed observations passed.

### Screenshots to capture

Capture these as you reach the matching step. If a result needs two screens, add `a` and `b` to that filename.

| Filename | What to show |
|---|---|
| AR-033-01.png | Restored Production Support grant order |
| AR-033-02.png | Fresh Henry manager/Security approval |
| AR-033-03.png | Fresh Harper denial |
| AR-033-04.png | Final Henry/Harper native membership checks |
| AR-033-05.png | C05 results with observed and pending items distinguished |

[Previous: AR-032](../AR-032/README.md) · [Course outline](../../README.md) · [Next: AR-034](../AR-034/README.md)
