# AR-034 · Attach a native form to Production Support

In this lab, you'll build a maintenance form, attach it to Production Support, and check its answers as the manager.

## Before you start

Complete [AR-033](../AR-033/README.md), including C05 cleanup. The form does not need to exist yet. Use Acme Admin, Acme Henry (`acme.e018`) and Acme Ava (`acme.e006`) in separate browser profiles, plus your AD workstation. Keep your [journal](EVIDENCE.md) open.

If you are resuming, check your journal and Henry's **My Requests** before submitting again. Finish or remove any earlier test grant before starting another. These steps use the configuration left by the preceding lab; if you have already completed later modules, compare their saved settings before changing them.

## Follow the steps

### 1. Check Henry and the profile

1. As administrator, open **Admin > Identity Management > Identities**, find `acme.e018`, and verify Henry's Manager is Ava and his standard AD account is linked.
2. Run [the direct AD membership check](../../M02-CHECKS.md#inspect-direct-ad-membership) for Henry: `GG-PROD-SUPPORT` must be **False** and `GG-ACME-BASELINE` **True**. Resolve errors rather than recording them as absence.
3. Under **Admin > Dashboard > Approval Management > Access Requests**, check Henry has no pending Production Support diagnostic request. If one remains, Henry can open **Request Center > My Requests**, locate it, select **Cancel**, enter a reason and **Submit**. Cancellation does not remove an already completed grant.
4. Open **Admin > Access Model > Access Profiles > AP-Production-Support > Access Requests**. Confirm grant reviewers **Manager**, then **Governance Group: GOV-Security-Review**. Removal reviewer remains **Primary Owner**, resolving to Ava. Keep timeout 90 days, reminders/escalations off and required end date off. The profile contains only `GG-PROD-SUPPORT` on your AD source.
5. If the profile opens read-only, select **Edit** to change its request settings. Find **Require Access Request Form** and its selector. Record its original setting. If the control is absent, confirm administrator permissions and record the missing capability. Leave this module pending until native access-request forms are available; a standalone workflow form is not a replacement for this control.

**Check:** Henry is ready for a new request and you can configure a native form association.

### 2. Build the questions

Before adding each field below, check its technical key in the existing section. Edit the matching field if present; add it only when missing. Keep optional fields and conditions added by later labs.

1. Open **Admin > Global > Forms** and look for `FORM-Acme-Production-Support`. If it exists, open it and select **Edit in Builder**. For a new form, select **+ New Form** and enter name `FORM-Acme-Production-Support` and description `Maintenance details for Acme Production Support requests`. For the new form, leave **Add to MySailPoint** unselected and select **Continue to Builder**.
2. If Maintenance details already exists, open that section. Otherwise select **Add Section**. Enter **Section Header** `Maintenance details`, leave the header displayed and select **Apply**.
3. Inside the section, select **+ Add > Text Field**. Set Label `Change ticket`, Technical Key `changeTicket`, and **Mark as required** on. Select **Apply**.
4. Select **+ Add > Select Field**. Set Label `Environment`, Technical Key `environment`, and Mark as required on. Choose **Static** options, add `Production` and `Test`, enable **Require Selection**, and set **Maximum Selection** to `1`. Select **Apply**.
5. Select **+ Add > Text Area Field**. Set Label `Work description`, Technical Key `workDescription`, and Mark as required on. Select **Apply**, then **Save** the form.
6. Reopen the saved form, select **Edit in Builder**, and verify all three keys and required settings. Save `AR-034-01.png`; use extra images where needed to show field settings.

**Check:** There are three required questions. Help text or a placeholder is not a submitted answer.

### 3. Attach the form

1. Return to **Admin > Access Model > Access Profiles > AP-Production-Support > Access Requests**.
2. Select **Require Access Request Form**, choose `FORM-Acme-Production-Support`, and **Save**. If **Apply Changes** is offered, select it and wait for completion.
3. Leave the page and reopen it. Verify the association and unchanged manager/Security review order. Save `AR-034-02.png`.

**Check:** The definition exists and the profile requires it. Those are separate configuration checks.

### 4. Submit and inspect the answers

1. In Henry's session, confirm his username. Open **Request Center > Access Items > Access Profiles**, find `AP-Production-Support` and select it.
2. Enter Change ticket `CHG-LAB-034`, Environment `Production`, and Work description `Verify the simulated support group during maintenance.`
3. Leave the standard start/end dates empty for immediate access and enter standard comments `AR-034 inspect maintenance answers`. The standard dates and comments are included with the form; do not create duplicate custom fields for them.
4. Select **Save**, then **Review Request**. Open **Edit Request Details** for this item to check the saved answers. Confirm Henry as recipient and select his standard AD account if an account chooser appears. Save `AR-034-03.png`, then **Submit Request** once.
5. Open **My Requests** and record the request ID together with Henry's username and the access profile name. As administrator, find that ID under **Approval Management > Access Requests**. Open the access name and inspect **Process**, **Assignees** and **Details**. Ava should hold the first review.
6. As Ava, open **Approvals > Access Requests > Requested** and open Henry's matching Production Support **Grant** details. Compare each answer with your journal. Save `AR-034-04.png` showing Ava's matching answers and request ID before deciding. Select **Deny**, enter `AR-034 form inspection complete`, and confirm. As administrator, verify **Denied** under **Admin > Dashboard > Approval Management > Access Requests** using that request ID. Check Henry's direct `GG-PROD-SUPPORT` membership is **False** using [the AD membership procedure](../../M02-CHECKS.md#inspect-direct-ad-membership). An error is not a False result.

**Check:** Ava can read the submitted answers. The denied manager stage does not proceed to Security or grant access.

## Check the result

The saved form appears on a new Production Support request, its answers reach Ava, and the diagnostic request is Denied. Henry remains without Production Support.

## Finish

Keep the form definition and its Production Support association. Leave Henry without Production Support membership or a pending diagnostic request. Preserve existing accounts, baseline access and Lucas's VPN.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs more than one image.

| Filename | What to show |
|---|---|
| AR-034-01.png | Saved three-question form and required settings |
| AR-034-02.png | Saved profile association |
| AR-034-03.png | Henry’s completed form |
| AR-034-04.png | Ava’s matching answers and request ID |

[Previous: AR-033](../AR-033/README.md) · [Course outline](../../README.md) · [Next: AR-035](../AR-035/README.md)
