# AR-038 · Repair a missing request form

In this lab, you'll reproduce a missing form association, restore it, and verify a fresh request from Henry's session.

## Before you start

Complete [AR-037](../AR-037/README.md), including removal and restoration of Remote Worker. Use Acme Admin, Acme Henry (`acme.e018`) and Acme Ava (`acme.e006`) in separate browser profiles, plus your AD workstation. Keep your [journal](EVIDENCE.md) open.

If you are resuming, check your journal and Henry's **My Requests** before submitting again. Finish or remove any earlier test grant before starting another. These steps use the configuration left by the preceding lab; if you have already completed later modules, compare their saved settings before changing them.

## Follow the steps

As Acme Admin, check **Admin > Dashboard > Approval Management > Access Requests** for Henry's pending Production Support requests. Resolve any previous diagnostic request before continuing. Run [the direct AD membership check](../../M02-CHECKS.md#inspect-direct-ad-membership): Henry's `GG-PROD-SUPPORT` must be **False** and `GG-ACME-BASELINE` **True**. A failed check needs investigation; it does not mean the group is absent.

### 1. Confirm the working request

1. As Henry, open **Request Center > Access Items > Access Profiles** and select `AP-Production-Support`. Verify the maintenance questions appear. Do not submit this request.
2. Record the selected object's type and exact name. As administrator, open **Admin > Access Model > Access Profiles > AP-Production-Support** and record its ID from the page URL. Verify its source and `GG-PROD-SUPPORT` entitlement so a similarly named object cannot be mistaken for it.
3. Open the profile's **Access Requests** page. Record **Require Access Request Form** and the selected `FORM-Acme-Production-Support`, plus the reviewer order. Save `AR-038-01.png` showing the working association.
4. Close the unsent form. If the item is already in Henry's selections, open **Review Request** and use the item's remove control to empty the selection. Do not press Submit Request. Check My Requests if you are unsure whether anything was submitted.

**Check:** You know the exact working profile, its form and the requester view before changing anything.

### 2. Reproduce the missing association

1. As administrator, clear **Require Access Request Form** on Production Support and **Save**. Apply changes if offered and wait for completion. Do not delete the form definition or change reviewers. This temporary change applies to new requests for this lab profile; keep other lab sessions from submitting it during the test.
2. Leave the settings page and reopen it to verify the unchecked state.
3. In Henry's session, return to the access catalog and start a new selection of the same profile. The custom maintenance questions should be absent. Standard comments may still be required; those are separate from the custom form.
4. Save `AR-038-02.png` showing the missing custom questions. Do not submit this incomplete business case. Remove the unsent item as in Step 1.
5. As administrator, open **Admin > Global > Forms** and verify `FORM-Acme-Production-Support` still exists with its questions. Record: definition present, profile association disabled.

**Check:** You reproduced the fault by changing one saved setting. The form was not deleted.

### 3. Repair and prove the result

1. Return to **Admin > Access Model > Access Profiles > AP-Production-Support > Access Requests**. Enable **Require Access Request Form**, select `FORM-Acme-Production-Support`, and **Save**. Apply changes if offered and wait for completion. Reopen to verify both the checkbox and selection.
2. Confirm Manager then GOV-Security-Review grant approval and Primary Owner removal approval remain unchanged.
3. As Henry, start another fresh request for that exact profile. Enter ticket `CHG-LAB-038`, Environment `Production`, Work description `Verify restored request questions`, Rollback plan `Revoke any approved test access`, and standard comments `AR-038 repaired association`. Leave Implementation notes and standard dates empty.
4. Save, select **Review Request**, and reopen **Edit Request Details**. Verify the saved answers, Henry and his standard account. Select **Submit Request** once and record the ID from **My Requests**.
5. As Ava, open **Approvals > Access Requests > Requested** and open Henry's matching Production Support **Grant** details. Compare each answer with your journal. Save `AR-038-03.png` showing Ava’s answers before deciding; include the requester’s saved form as a second image. Select **Deny**, enter `AR-038 repaired form verified`, and confirm. As administrator, verify **Denied** under **Admin > Dashboard > Approval Management > Access Requests** using that request ID. Check Henry's direct `GG-PROD-SUPPORT` membership is **False** using [the AD membership procedure](../../M02-CHECKS.md#inspect-direct-ad-membership). An error is not a False result.

**Check:** The repair is proved with a newly submitted request and its reviewer details, not just a saved administrator checkbox.

## Check the result

The form disappeared when its association was disabled and returned after that association was restored. Ava received the repaired request’s answers and denied it; no access was added.

## Finish

Keep the form definition and its Production Support association. Leave Henry without Production Support membership or a pending diagnostic request. Preserve existing accounts, baseline access and Lucas's VPN. If you pause during the fault demonstration, restore the association before leaving the lab.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs more than one image.

| Filename | What to show |
|---|---|
| AR-038-01.png | Working association and exact profile |
| AR-038-02.png | Missing custom questions with definition still present |
| AR-038-03.png | Restored fresh form and reviewer answers |

[Previous: AR-037](../AR-037/README.md) · [Course outline](../../README.md) · [Next: AR-039](../AR-039/README.md)
