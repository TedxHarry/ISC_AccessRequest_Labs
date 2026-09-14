# AR-024 · Separate requester visibility from recipient eligibility

## Goal

Have Lucas request Finance Reporting for Liam, then have Daniel deny it because Liam's task is outside Finance. Verify that visibility allowed the request to be submitted, while the human review prevented access.

## Before you start

Complete [AR-023](../AR-023/README.md). Keep its **original request-on-behalf configuration** record. Open Acme Admin, Acme Lucas (`acme.e012`), Acme Liam (`acme.e008`), Acme Daniel (`acme.e003`) and the AD workstation.

SEG-Acme-Finance remains enabled. Everyone-for-anyone must be enabled for this test; if you restored the original setting while pausing AR-023, enable the temporary mode again using its Section 4. Keep your [journal](EVIDENCE.md) open.

## 1. Verify the two different people

1. As administrator, inspect Lucas and Liam under **Admin > Identity Management > Identities**. Record their identity IDs, usernames and Departments: Finance and IT respectively.
2. Inspect Liam's **Accounts**, **Access** and pending requests. He must have no Finance Reporting assignment or unfinished matching request.
3. Run [native checks](../../M02-CHECKS.md#inspect-direct-ad-membership) for Liam against GG-FIN-REPORTING, GG-VPN-USERS and GG-ACME-BASELINE. Record the account DN/objectGUID.
4. Open **Admin > Access Model > Access Profiles > AP-Finance-Reporting > Access Requests**. Confirm its saved grant reviewer is **Primary Owner**, Daniel, and request/denial comments are required.
5. In Liam's own Request Center, verify AP-Finance-Reporting is absent while Remote Worker is visible. Record this before Lucas submits anything.

**Check:** Liam has neither business group and retains baseline. The profile has an explicit Daniel review, and Liam's own catalog remains restricted.

**Screenshot:** `AR-024-01.png`: requester/recipient departments, Liam's clean native state and catalog.

## 2. Submit as Lucas for Liam

1. In Acme Lucas, verify `acme.e012` in the user menu.
2. Open **Request Center > Request for Others**.
3. In **Select Identities**, search `acme.e008`, select Liam and choose **Request for These Identities**.
4. Check the request header identifies **Liam** as recipient. Lucas remains the signed-in requester.
5. Open **Access Items > Access Profiles**, search AP-Finance-Reporting and inspect its details.
6. Select the profile. Enter `AR-024: Recipient eligibility test; deny Finance access for Liam`, keep immediate access and verify Liam's standard account if prompted. Select **Save**.
7. Select **Review Request**, check Liam, one profile and the account, then **Submit Request** once.
8. Record the **My Requests** entry, request ID and time.

**Check:** Lucas submitted a visible Finance item for Liam under the temporary request-on-behalf permission. The submitted recipient must not be Lucas.

**Screenshot:** `AR-024-02.png`: selected Liam, request details and submitted requester/recipient evidence.

## 3. Inspect and deny the request

1. In Acme Daniel, open **Approvals > Access Requests > Requested** and find this AP-Finance-Reporting **Grant**.
2. Open **Details** and verify both the requester and requested-for identity, selected account and business reason.
3. In Acme Admin, locate [the matching request](../../LAB-DESK.md#find-the-request). Inspect **Assignees** and confirm Daniel. Read Liam's identity Department to support the decision; do not infer it from Lucas's department.
4. In Acme Daniel, select **Deny**, enter `Recipient is not eligible for Finance access for this task` and confirm.
5. Verify **Reviewed** and record the denied result in administrator request details.

**Check:** Daniel denied Liam's request based on the recipient. This is a deliberate human decision, not an automated department check.

**Screenshot:** `AR-024-03.png`: distinct requester/recipient details and the denial reason/result.

## 4. Prove the denial left access unchanged

1. Repeat Liam's three native checks on the same controller.
2. Inspect Liam's ISC **Access** and **Accounts** after processing. No reporting profile should have been added. If imported data differs, use [the AD refresh procedure](../../M02-CHECKS.md#refresh-imported-ad-data).
3. Reopen Liam's own Request Center and repeat the Finance/Remote Worker comparison.
4. Check Lucas still has his direct VPN and baseline. Do not remove Lucas's VPN as cleanup for a request made for Liam.
5. Record request/decision evidence and native results. A denied request need not produce a successful AD add operation.

**Check:** Liam still lacks Reporting and VPN; baseline remains. His catalog restriction and Lucas's retained access are unchanged.

**Screenshot:** `AR-024-04.png`: denied recipient's final memberships and control catalog.

## 5. Restore the original request-on-behalf permission

1. Open the original-setting record from AR-023, not the temporary everyone-mode screenshot.
2. As administrator, open **Admin > Global > System Settings > Feature Settings > Access Requests**.
3. Restore the original selected mode. If requests on behalf were originally disabled, turn **Enable Requests on Behalf of others** off after restoring any stored selection that is editable.
4. Select **Save**, leave and reopen to verify the original on/off state and mode.
5. Refresh the ordinary-user sessions. Recheck one appropriate row: if originally manager-only, Daniel can choose Lucas and Lucas cannot choose Liam; if originally disabled, Lucas has no ordinary request-for-others choice; if originally everyone, Lucas can choose Liam.
6. Leave that test without selecting or submitting access. Confirm no pending AR-024 request remains.

**Check:** The temporary broad permission has been replaced by the exact original configuration, and the ordinary-user behavior agrees with it.

**Screenshot:** `AR-024-05.png`: restored setting and corresponding recipient-selection check.

## If the result differs

If the profile is unavailable to Lucas, verify his session, Finance identity attribute and the segment before loosening visibility. If it was accidentally approved, do not report the denial exercise as passed: verify Liam's actual groups, remove the requested profile through the AR-016 removal procedure using Liam as recipient and Daniel as reviewer, then repeat from a clean state with a new request ID. Preserve Lucas's grant.

## Explain the result

Write the rule an automated approval would need to enforce for this scenario. Identify whose identity attributes it must read.

<details>
<summary>Check your explanation</summary>

The decision must evaluate the requested-for identity, Liam, against the approved Finance eligibility rule. Looking only at requester Lucas's Finance department would permit the wrong recipient. The segment and request-on-behalf setting allowed submission; Daniel's manual denial prevented fulfillment. Keep this evidence for the later recipient-check workflow exercise.

</details>

## Final verification

- [ ] Lucas and Liam were recorded as separate requester and recipient.
- [ ] Daniel reviewed the submitted profile request and denied it.
- [ ] Liam gained neither group and kept his original account/baseline.
- [ ] Liam's own catalog remains restricted.
- [ ] Original request-on-behalf settings and behavior are restored.
- [ ] Lucas's VPN and the Finance segment remain intact.

## Leave this in place

Retain the Finance segment and original request-on-behalf configuration. Liam finishes without Finance Reporting or VPN. [Requester segment scope](https://documentation.sailpoint.com/saas/help/requests/segments.html) · [Request-on-behalf settings](https://documentation.sailpoint.com/saas/help/requests/requests_for_others.html)

## Screenshots to capture

| Filename | What to show |
|---|---|
| AR-024-01.png | Different departments, clean recipient and restricted catalog |
| AR-024-02.png | Lucas's request for Liam |
| AR-024-03.png | Recipient-aware denial and request details |
| AR-024-04.png | Unchanged native access and catalog |
| AR-024-05.png | Restored original permission and behavior |

[Previous: AR-023](../AR-023/README.md) · [Lab index](../README.md) · [Next: AR-025](../AR-025/README.md)
