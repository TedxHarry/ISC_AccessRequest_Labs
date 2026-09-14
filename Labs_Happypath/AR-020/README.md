# AR-020 · Manage the profiles offered by Finance Services

<a id="goal"></a>

In this lab, you'll change which profiles Finance Services offers, observe the catalog and restore both choices without changing existing AD access.

## Before you start

Complete [AR-019](../AR-019/README.md). Use Acme Admin, Acme Olivia (`acme.e011`) and the AD workstation. Keep your [journal](EVIDENCE.md) open.

Finance Services contains AP-Finance-Reporting and AP-Finance-AP. Both profiles are enabled/requestable, as is ROLE-Finance-Analyst. Olivia has no Finance/VPN access or pending request. Lucas retains his direct VPN.

## Follow the steps

### 1. Capture the working catalog

1. As administrator, open **Admin > Access Model > Applications**, find Finance Services and select **Edit**.
2. Record Configuration: owner, AD source, **Admin (IT)**, **Specific Users from Source**, both Request Center options and **Enable for Users**.
3. Open **Access Profiles**. Record both associated profile names/IDs. Open each under **Admin > Access Model > Access Profiles** and record its enabled/requestable state.
4. In Acme Olivia, confirm the username and open **Request Center > Applications** for herself. Search Finance Services and open its choices. Capture both Finance profiles without submitting a request.
5. In the same session, search each profile directly under **Access Items > Access Profiles**. Record the results.
6. Use the [native membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) to record Olivia without VPN, Reporting and FIN-AP, and Lucas with VPN. Record baseline=True for both.

**Check:** The application offers both profiles before any change. If this is already failing, use the recovery table below to restore this starting state first.

**Screenshot:** `AR-020-01.png`: saved application settings, two choices and direct profile search.

### 2. Change the application associations

1. In Acme Admin, return to **Finance Services > Edit > Access Profiles**.
2. Remove the AP-Finance-Reporting and AP-Finance-AP rows using each association's remove control. Verify you are editing this application's association list.
3. Select **Save**. Keep the profiles themselves, role contents and all request policies unchanged.
4. Wait for the resulting identity refresh in **Admin > Dashboard > Monitor**. Reopen the application and confirm its association list is empty.
5. In Acme Olivia, refresh **Request Center > Applications** and search Finance Services again. Record whether the card is absent or opens without usable profile choices; use the behavior you actually observe.

**Check:** Finance Services has no associated profiles. Do not require a particular empty-catalog message to pass this observation.

**Screenshot:** `AR-020-02.png`: empty saved associations and Olivia's catalog result.

### 3. Check the profiles and target independently

1. As administrator, open **Admin > Access Model > Access Profiles** and inspect each Finance profile.
2. Confirm its definition, source, groups and enabled/requestable state match Section 1.
3. In Acme Olivia, open **Request Center > Access Items > Access Profiles**. Search each exact profile name again without submitting.
4. Repeat the native checks for Olivia and Lucas from Section 1.
5. Write three separate observations: application association list, direct profile availability and native memberships.

**Check:** The profile definitions and direct requestability remain. Olivia has not received access, and Lucas still has VPN. Lucas is a control for his independent grant; this observation does not test removal of an already-assigned Finance profile.

**Screenshot:** `AR-020-03.png`: direct profile search, intact definitions and unchanged native controls.

### 4. Restore the two application choices

1. In Acme Admin, open **Admin > Access Model > Applications > Finance Services > Edit > Access Profiles**.
2. In **Add Access Profile**, search AP-Finance-Reporting, select it and use the **Add (+)** icon.
3. Repeat for AP-Finance-AP. Confirm exactly these two associations, then select **Save**.
4. On **Configuration**, compare all settings with Section 1. Restore any unintended change and save the tab. Confirm **Visible in Request Center**, **Allow Access Requests** and **Enable for Users** are on.
5. Wait for identity refresh to finish, then reopen the application to verify the saved associations.
6. In Acme Olivia, refresh Request Center and open Finance Services. Confirm both choices and inspect their details. Leave without submitting.

**Check:** Both Finance profiles are offered again and the application settings match the working starting configuration.

**Screenshot:** `AR-020-04.png`: restored associations and both requester choices.

### 5. Verify the handoff

1. Compare your three catalog captures: working, associations removed, restored.
2. Recheck the role still contains the same two profiles under **Admin > Access Model > Roles > ROLE-Finance-Analyst > Manage Access**.
3. Recheck Olivia has no Finance/VPN memberships or assignments and no pending request. Confirm her baseline and Lucas's VPN remain.
4. Record that this lab submitted no access grant or removal. Keep both application associations in place.

**Check:** Catalog configuration is restored without a business-access change to the test recipients.

**Screenshot:** `AR-020-05.png`: final configuration and preserved native state.

## Check the result

### If the result differs

Work down this table in the same Olivia session. Record what you inspect before changing another setting.

| Observation | Inspect and correct |
|---|---|
| Application absent before Section 2 or after restoration | Finance Services Configuration: Enable for Users and both Request Center options; save and reopen |
| Application opens but a profile is missing | Access Profiles association list; add the existing correct-source profile, save and wait for refresh |
| Profile also missing from direct search | Its enabled/requestable state, source, Olivia's existing access and any existing access-request segments |
| Administrator sees an item but Olivia cannot | Actual signed-in username and requester-specific catalog; administrator visibility is not Olivia's result |
| Saved associations are correct but old choices remain | Wait for processing, refresh the requester page and recheck before making another configuration change |

### Explain the result

Which observation distinguished an application-association problem from a disabled profile?

<details>
<summary>Check your explanation</summary>

During the empty-association state, the enabled/requestable profiles remained available through direct profile search. The missing application choices followed its saved association list. If direct search also failed, the evidence would not isolate an association-only issue; inspect profile controls, existing access and segmentation next.

</details>

### Final verification

- [ ] A working starting catalog was captured.
- [ ] Both application associations were removed, observed and restored.
- [ ] Direct profile availability was checked in the same recipient session.
- [ ] Native controls did not change.
- [ ] Finance Services ends enabled/visible/requestable with both profiles.
- [ ] The role, profile policies, baseline and Lucas's VPN remain intact.

## Finish

### Leave this in place

Keep the restored Finance Services application, both profiles and role. Olivia remains without Finance/VPN access. Use [resume guidance](../../M03-READINESS.md#resume-or-repeat-safely) and Section 4 if returning while associations are removed.

[Application configuration and associations](https://documentation.sailpoint.com/saas/help/access/app-config.html)

### Screenshots to capture

| Filename | What to show |
|---|---|
| AR-020-01.png | Working settings and two original choices |
| AR-020-02.png | Removed associations and catalog result |
| AR-020-03.png | Direct profiles and unchanged native controls |
| AR-020-04.png | Restored association list and requester choices |
| AR-020-05.png | Final role/application configuration and native state |

Keep private registration information out of captures.

[Previous: AR-019](../AR-019/README.md) · [Lab index](../README.md) · [Next: AR-021](../AR-021/README.md)
