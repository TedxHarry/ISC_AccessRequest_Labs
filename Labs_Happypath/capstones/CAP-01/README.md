# CAP-01 · Launch Finance self-service access

In this capstone, you'll prepare the Finance catalog, prove separate profile and role requests, and hand over the service with its test access removed.

## Before you start

Complete AR-001–022 and the removal exercises in AR-042–045. Use Acme Admin, Olivia (`acme.e011`), Liam (`acme.e008`), Daniel (`acme.e003`) and your AD workstation. Open your [journal](EVIDENCE.md) and the [starting-state check](../../../LAB-DESK.md#check-the-starting-state-for-every-lab). Prepare any missing sign-in through [AR-008](../../../Labs_Happypath/AR-008/README.md).

Native workflows and SoD are optional extensions here. If you completed AR-061, keep its accepted Finance grant policies; the steps below do not replace them with direct review.

## Follow the steps

### 1. Inspect the service and its starting state

1. As Acme Admin, open **Admin > Identity Management > Identities > Olivia**. Confirm Department Finance, Manager Daniel and her linked standard AD account. Record its DN and objectGUID. Check Access and pending requests for earlier Finance tests.
2. Use [Inspect direct AD membership](../../../M02-CHECKS.md#inspect-direct-ad-membership) with `acme.e011`. Require GG-VPN-USERS, GG-FIN-REPORTING and GG-FIN-AP False, and GG-ACME-BASELINE True. If test access remains, finish its original removal before proceeding. Do not remove an unrelated assignment to manufacture a clean result.
3. Open each object below under **Admin > Access Model > Access Profiles** or **Roles**. Record its ID, enabled/requestable state, owner, grant policy, removal policy, form and dates. Compare its saved access with the table. If a definition is missing or differs, complete the relevant creation steps in [AR-016](../../../Labs_Happypath/AR-016/README.md), [AR-017](../../../Labs_Happypath/AR-017/README.md) or [AR-018](../../../Labs_Happypath/AR-018/README.md) before continuing; reuse the course names.

| Object | Required content | Owner |
|---|---|---|
| AP-Finance-Reporting | GG-VPN-USERS + GG-FIN-REPORTING on the recorded AD source | Daniel |
| AP-Finance-AP | GG-FIN-AP on the same source | Daniel |
| ROLE-Finance-Analyst | Both Finance profiles; no automatic membership selecting Olivia | Daniel |

4. Keep the accepted Finance workflow associations if AR-061 was completed. Otherwise retain the earlier direct Primary Owner/Daniel grant review. For this exercise, set each object's **Edit > Access Requests > Require Approval for Removal > Primary Owner**, add with **+**, and save. Record the original removal policies for restoration. Keep required request/denial comments and existing form/date constraints; these course Finance items normally have no form/date requirement.
5. Inspect **Admin > Access Model > Applications > Finance Services > Edit**. Confirm the course AD source, enabled state, **Visible in Request Center**, **Allow Access Requests**, and exactly the two Finance profile associations. Use [AR-020's restoration steps](../../../Labs_Happypath/AR-020/README.md#4-restore-the-two-application-choices) if the associations are missing.
6. Record Lucas's current VPN=True as a preserved control. Save `CAP-01-01.png` with the object table, policies and Olivia's clean state.

### 2. Check the requester choices

1. As Olivia, open **Request Center > Applications > Finance Services**. Confirm Reporting and Accounts Payable are offered. Open their details and compare their descriptions and underlying access with Section 1. Do not submit yet.
2. In Olivia's **Access Items > Access Profiles**, search both profile names; under **Roles**, search ROLE-Finance-Analyst. Record each result. Existing assignments can hide request choices, which is why Section 1 starts clean.
3. As Liam, verify the ordinary-user session and search the same profiles and role for himself. Confirm **SEG-Acme-Finance** remains enabled under **Admin > Access Model > Segments**, selecting Finance requesters and these three items. If absent or incorrect, use [AR-022 Sections 2–4](../../../Labs_Happypath/AR-022/README.md#2-define-the-finance-identities) to configure and test it, then return here.
4. Record Olivia's visible choices and Liam's restricted choices. Search AP-Remote-Worker in both sessions as the comparison. Keep application-card visibility separate from visibility of its usable profile choices. Save `CAP-01-02.png`.

**Check:** These observations test the requester's catalog. They do not establish that a Finance requester cannot request for a non-Finance recipient. Section 6 identifies the additional eligibility test.

### 3. Approve and remove Reporting

1. As Olivia, select **Request Center > Access Items > Access Profiles > AP-Finance-Reporting**. Enter `CAP-01 Reporting grant`, keep immediate access and her standard account, complete any recorded required fields, then **Save > Review Request > Submit Request** once. Record its My Requests ID and submission time.
2. As Acme Admin, locate that request in **Admin > Dashboard > Approval Management > Access Requests**. Open Process/Assignees. With the saved course policy, Daniel is either Primary Owner or Olivia's Manager. If another reviewer resolves, inspect the recorded policy and any delegation before deciding; do not approve an unexplained route.
3. As Daniel, open **Approvals > Access Requests > Requested**, match Olivia, Reporting and the reason, then approve with `CAP-01 Reporting approved`. If using AR-061, also match the workflow execution's requestedFor to Olivia and department Finance.
4. Follow [Account Activity](../../../LAB-DESK.md#find-the-account-activity). Repeat the four native checks: VPN=True, FIN-REPORTING=True, FIN-AP=False, baseline=True. Check Olivia's profile assignment and unchanged account identifiers. Save `CAP-01-03.png`.
5. As Olivia, open **My Access > Access Profiles > AP-Finance-Reporting > Revoke Access Profile**. Enter `CAP-01 Reporting cleanup` and submit. As Daniel, approve the matching Remove request. Follow removal activity and [refresh imported AD data](../../../M02-CHECKS.md#refresh-imported-ad-data).
6. Require all three business groups False, baseline True, no Reporting assignment and no pending operation. Save `CAP-01-04.png`. Do not begin the next request until cleanup passes.

### 4. Deny Accounts Payable, then test the role

1. As Olivia, select AP-Finance-AP in Request Center, enter `CAP-01 AP denial`, and **Save > Review Request > Submit Request**. Match its resolved reviewer as in Section 3. Daniel chooses **Deny**, enters `CAP-01 payment access not approved`, and confirms. Verify terminal denial, FIN-AP=False and no pending write. Save `CAP-01-05.png`.
2. With Olivia still clean, select **Request Center > Access Items > Roles > ROLE-Finance-Analyst**, enter `CAP-01 Analyst grant`, verify the standard account, then Save, Review Request and Submit Request. Record this new role request separately from the profile requests.
3. Inspect the resolved review, then have Daniel approve. Follow activity and require VPN, FIN-REPORTING and FIN-AP True, baseline True. Record the role assignment and its two profiles; a recognized profile alone does not prove a separate profile request. Save `CAP-01-06.png`.
4. As Olivia, open **My Access > Roles > ROLE-Finance-Analyst > Assignment > Revoke Assignment**, select the assignment from this request and enter `CAP-01 Analyst cleanup`. Submit; have Daniel approve the matching removal under the explicit policy prepared in Section 1.
5. Follow activity, refresh imported data, and verify the requested role assignment is gone and all three business groups False. If membership remains, inspect other assignments before retrying or changing AD directly. Use [AR-043](../../../Labs_Happypath/AR-043/README.md) for assignment-origin checks. Save `CAP-01-07.png`.

### 5. Verify the application configuration without changing access

1. Reopen **Finance Services > Edit > Access Profiles**. Compare the two names/IDs with the handover record. Reopen each profile's source and entitlement list and the role's profile list.
2. Refresh Olivia's application choices after reconciliation. Confirm both choices and direct role search work again with her clean account. If a choice is missing, inspect its requestability, association and segment in that order; change only a setting whose difference you can demonstrate.
3. Keep the working associations. Complete the working catalog checks before attempting a deliberate fault.

### 6. Record the scope and restore temporary settings

1. In the journal, record Reporting approval/removal, AP denial, Analyst approval/removal, and Olivia/Liam visibility as separate cases with request, activity and native evidence. Do not mark an unexecuted case Passed.
2. If automated recipient eligibility is required, complete [AR-061](../../../Labs_Happypath/AR-061/README.md), including its isolated non-Finance and missing-data checks before Finance attachment, and both recipient outcomes for each profile and the role. Label that requirement Not tested or Not accepted until all those checks pass. Keep segmentation enabled; it is not a substitute for this test.
3. If you include SoD, use the separate payment groups and clean/conflicting cases in [AR-076](../../../Labs_Happypath/AR-076/README.md) and [AR-077](../../../Labs_Happypath/AR-077/README.md). Keep their actual outcomes separate from Finance Reporting/AP evidence; no policy for those groups is created by this capstone.
4. Restore the original removal policies saved in Section 1 and reopen them. Preserve accepted grant workflows, the enabled Finance segment, both application associations and all object IDs. If AR-061 was run, verify its HR and on-behalf restoration too.
5. Recheck Olivia's three business groups False, baseline True, Lucas VPN True, and no pending capstone requests. Write the handover in the journal: exact object IDs/source/groups, current reviewers, available choices, proven cases, unmet requirements and restoration state. Save `CAP-01-08.png`.

## Check the result

Reporting and the Analyst role each have a separate grant/removal cycle; Accounts Payable has a fresh denial. Native access matches each request, catalog visibility is verified with two ordinary-user sessions, and the handover states whether recipient eligibility and SoD were actually tested.

## Finish

Leave the catalog enabled, original removal policies restored and only accepted grant policies attached. Olivia has no capstone access; Lucas retains VPN. Keep the journal and unresolved requirements available for the next engineer.

### Screenshots to capture

Capture these beside the matching steps. Add letter suffixes for multiple panels. Hide credentials and unnecessary personal data; label historical, synthetic and unobserved results accurately.

| Filename | What to show |
|---|---|
| CAP-01-01.png | Definitions, policies and clean recipient |
| CAP-01-02.png | Finance and non-Finance catalog comparison |
| CAP-01-03.png | Reporting approval and native grant |
| CAP-01-04.png | Reporting removal and clean account |
| CAP-01-05.png | Accounts Payable denial and absent membership |
| CAP-01-06.png | Analyst role approval and three groups |
| CAP-01-07.png | Role removal and clean account |
| CAP-01-08.png | Restored settings and handover; engineering fault/repair if performed |

[Course outline](../../../README.md) · [Choose a path](../../../Labs_Happypath/README.md) · [Practice path](../../../PRACTICE-PATH.md)
