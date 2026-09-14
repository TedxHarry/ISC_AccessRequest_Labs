# AR-023 · Test who can request for another person

## Before you start

<a id="goal"></a>

Compare manager-only request authority with everyone-for-anyone authority. Build a recipient-selection matrix without granting access.

Complete [AR-022](../AR-022/README.md). Open Acme Admin, Acme Daniel (`acme.e003`), Acme Lucas (`acme.e012`) and Acme Liam (`acme.e008`). Keep the Finance segment enabled and your [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Save the original setting and manager relationships

1. As administrator, open **Admin > Global > System Settings > Feature Settings > Access Requests**.
2. Record **Enable Requests on Behalf of others** as on/off and the selected option: **By Managers for their Team** or **By Everyone for Anyone**. Capture the whole relevant section, including any disabled selection.
3. Label the record **AR-023 original request-on-behalf configuration**. Keep it for restoration in AR-024; do not replace it with a screenshot taken after your edit.
4. Open Lucas and Liam under **Admin > Identity Management > Identities**. Verify Lucas's manager is Daniel and Liam's is Priya.
5. Verify Lucas has no direct reports in the current lab data. Keep the ordinary-user sessions separate from Acme Admin.

**Check:** You can name the original configuration and explain why Lucas is Daniel's direct-report test while Liam is the non-report control.

**Screenshot:** `AR-023-01.png`: original global setting and manager relationships.

### 2. Enable manager-only requests

1. Return to **Admin > Global > System Settings > Feature Settings > Access Requests**.
2. Enable **Requests on Behalf of others** and select **By Managers for their Team**.
3. Select **Save**, leave and reopen the page to confirm the persisted setting.
4. Refresh or sign out/back in to the ordinary-user sessions before testing the changed permission.

**Check:** Manager-only is the saved mode. This controls which recipients can be selected; the Finance segment still controls item visibility.

**Screenshot:** `AR-023-02.png`: saved manager-only mode.

### 3. Check Daniel and Lucas in manager-only mode

1. In Acme Daniel, verify `acme.e003` and open **Request Center > Request for Your Team**.
2. Find Lucas by `acme.e012` in the recipient list. Select him and continue with **Request for These Identities** when shown.
3. Record that the recipient is Lucas, then leave the request flow without selecting an access item or submitting.
4. Reopen the team recipient picker and search Liam (`acme.e008`). Record that he is not an eligible direct-report choice.
5. In Acme Lucas, open Request Center. With no direct reports, he should have no eligible other-person choice in this mode. A self-only user may go straight to the access catalog without an audience-selection page.
6. Record the actual screen behavior, including the signed-in usernames. Clear any selected recipients/items by leaving the flow; verify no new request appears in **My Requests**.

**Check:** Daniel can begin for Lucas but not Liam. Lucas cannot choose Liam in manager-only mode. If a user is missing unexpectedly, verify active identity status and actual manager mapping before changing the global policy.

**Screenshot:** `AR-023-03.png`: Daniel's report/non-report comparison and Lucas's self-only view.

### 4. Compare everyone-for-anyone mode

1. In Acme Admin, change the same setting to **By Everyone for Anyone**, then **Save** and reopen it.
2. Refresh Acme Lucas. Open **Request Center > Request for Others**.
3. In **Select Identities**, search Liam, select `acme.e008`, then **Request for These Identities**. Verify Liam is the recipient.
4. Leave without selecting or submitting access.
5. Repeat the recipient selection as Daniel for Liam. Record the difference from manager-only mode.
6. Complete this matrix with your observed result and evidence file:

| Mode | Actor → recipient | Expected ability to begin |
|---|---|---|
| Managers | Daniel → Lucas | Yes |
| Managers | Daniel → Liam | No |
| Managers | Lucas → Liam | No |
| Everyone | Lucas → Liam | Yes |
| Everyone | Daniel → Liam | Yes |

**Check:** Changing the mode changed who could select Liam. No business access was granted.

**Screenshot:** `AR-023-04.png`: everyone-for-anyone setting, Lucas selecting Liam and completed matrix.

### 5. Keep item visibility separate

1. In Acme Lucas, start a fresh request for himself and search AP-Finance-Reporting. Record it is visible.
2. In Acme Liam, request for himself and search the same item, then AP-Remote-Worker. Finance remains absent; Remote Worker remains visible.
3. In Acme Admin's Request Center, inspect the Finance item without submitting. Record this as an administrator observation, not a pass for Liam.
4. Verify there are no requests from this lab in the ordinary users' **My Requests**.
5. Keep everyone-for-anyone temporarily enabled for the next lab and retain the original-setting record. If stopping here, restore the recorded original setting and note that AR-024 must re-enable everyone-for-anyone before its single test.

**Check:** Permission to choose a recipient and permission to see an item are separate observations.

**Screenshot:** `AR-023-05.png`: actor-specific catalog comparison and retained original-setting record.

## Check the result

### If the result differs

If Daniel cannot select Lucas, inspect Lucas's identity Manager and status. If Lucas can choose Liam in manager-only mode, verify the persisted global option and whether the session has administrator permissions. Reopen the flow after the change; do not interpret an old recipient picker as the saved policy's result.

### Explain the result

Why is Daniel's position in the manager hierarchy not enough to assume he can request for every person below him?

<details>
<summary>Check your explanation</summary>

Manager-only mode permits requests for direct reports. The identity's actual Manager relationship is the relevant evidence. Everyone-for-anyone broadens recipient selection, but neither setting makes every catalog item visible to every requester.

</details>

### Final verification

- [ ] Original on/off state and selected mode are saved for restoration.
- [ ] All five recipient-selection rows were tested in the correct sessions.
- [ ] Catalog visibility was checked separately.
- [ ] No request was submitted.
- [ ] Finance segmentation and native access remain unchanged.
- [ ] The temporary mode and resume/restoration instruction are recorded.

## Finish

### Leave this in place

For immediate continuation, keep everyone-for-anyone enabled through AR-024's denial test, then restore the original setting there. [Request-on-behalf configuration](https://documentation.sailpoint.com/saas/help/requests/requests_for_others.html) · [Recipient selection](https://documentation.sailpoint.com/saas/user-help/requests/request_center.html)

### Screenshots to capture

| Filename | What to show |
|---|---|
| AR-023-01.png | Original setting and manager relationships |
| AR-023-02.png | Saved manager-only configuration |
| AR-023-03.png | Manager/direct-report/non-report checks |
| AR-023-04.png | Everyone mode and recipient-selection matrix |
| AR-023-05.png | Separate catalog checks and restoration record |

[Previous: AR-022](../AR-022/README.md) · [Lab index](../README.md) · [Next: AR-024](../AR-024/README.md)
