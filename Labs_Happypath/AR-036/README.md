# AR-036 · Show an extra field for Production work

In this lab, you'll show a rollback question when Production is selected and check what happens when the requester changes that selection.

## Before you start

Complete [AR-035](../AR-035/README.md). Keep its required questions and optional Implementation notes. Use Acme Admin, Acme Henry (`acme.e018`) and Acme Ava (`acme.e006`) in separate browser profiles, plus your AD workstation. Keep your [journal](EVIDENCE.md) open.

If you are resuming, check your journal and Henry's **My Requests** before submitting again. Finish or remove any earlier test grant before starting another. These steps use the configuration left by the preceding lab; if you have already completed later modules, compare their saved settings before changing them.

## Follow the steps

As Acme Admin, check **Admin > Dashboard > Approval Management > Access Requests** for Henry's pending Production Support requests. Resolve any previous diagnostic request before continuing. Run [the direct AD membership check](../../M02-CHECKS.md#inspect-direct-ad-membership): Henry's `GG-PROD-SUPPORT` must be **False** and `GG-ACME-BASELINE` **True**. A failed check needs investigation; it does not mean the group is absent.

### 1. Add the rollback question and condition

1. As administrator, open **Admin > Global > Forms > FORM-Acme-Production-Support** and select **Edit in Builder**.
2. Inside Maintenance details, edit `rollbackPlan` if it exists. Otherwise select **+ Add > Text Area Field**. Set Label `Rollback plan`, Technical Key `rollbackPlan`, and leave **Mark as required** off. Select **Apply**.
3. Open **Settings > Conditions**. Edit the existing rule for `rollbackPlan` if present; otherwise select **+ Create New**. Set **If** to the Environment field's technical key `environment`. For a single-value field, select **Equals** and enter exact String Value `Production`.
4. If your builder represents that Select field as an array and offers **A List of Values** instead of String Value, use **Includes** with the single value `Production`. Record the actual operator and representation. Do not compare an array to a scalar string.
5. Add the effect **Action: Show**, **Element: Rollback plan**. Select **Apply**, exit Settings and **Save** the form. Reopen the condition to verify the key, value and target field. Save `AR-036-01.png`.

SailPoint applies the contrary effect when the condition is false, so this Show rule hides the field for a nonmatching selection. Do not add a second competing visibility rule. See [form conditions](https://documentation.sailpoint.com/saas/help/forms/index.html#conditions).

**Check:** One condition controls one optional field. A visibility condition does not make the field required.

### 2. Test both directions in a request

1. In Henry's session, open **Request Center > Access Items > Access Profiles** and select `AP-Production-Support`. Use a new request after saving the definition; do not reuse an already-open form from before the change.
2. Enter ticket `CHG-LAB-036-A`, Work description `Test conditional rollback guidance`, and standard comments `AR-036 condition check`. Keep immediate access and leave Implementation notes blank.
3. Select `Test`. Confirm Rollback plan is hidden. Save `AR-036-02.png`.
4. Change Environment to `Production`. Confirm Rollback plan appears. Enter `Remove the lab support assignment and verify group removal.` Save `AR-036-03.png`.
5. Change back to `Test`, then back to `Production`. Record whether your entered plan is retained or cleared. Reenter it if necessary. Hiding an answer is not proof that its stored value was erased.
6. Save, select **Review Request**, open **Edit Request Details**, and verify Production and the rollback text. Confirm Henry and his standard account, then **Submit Request**. Record the ID.
7. As Ava, open **Approvals > Access Requests > Requested** and open Henry's matching Production Support **Grant** details. Compare each answer with your journal. Save `AR-036-04.png` showing the plan in Ava's details before deciding. Select **Deny**, enter `AR-036 condition inspection complete`, and confirm. As administrator, verify **Denied** under **Admin > Dashboard > Approval Management > Access Requests** using that request ID. Check Henry's direct `GG-PROD-SUPPORT` membership is **False** using [the AD membership procedure](../../M02-CHECKS.md#inspect-direct-ad-membership). An error is not a False result.

**Check:** Test hides the field, Production shows it, and the submitted Production answer reaches Ava.

### 3. Check what optional means for Production

1. Start a fresh Henry Production Support request after the first is Denied. Enter ticket `CHG-LAB-036-B`, Environment `Production`, Work description `Test an omitted rollback plan`, and comments `AR-036 optional rollback control`.
2. Leave Rollback plan and Implementation notes blank. Save and review. The three required questions are filled, so an optional rollback field should not block submission. Submit and record the new ID.
3. As Ava, inspect the empty plan and deny with reason `Production work needs a rollback plan for this exercise`. Verify Denied and native Production Support False.
4. If the form blocks the empty plan, inspect the saved field's required setting and any additional conditions. Remove the unsent item from Henry’s **Review Request** before changing the definition. Restore Rollback plan to optional, save, and repeat with a fresh form. If a request was submitted, resolve that ID first rather than submitting another copy.

**Check:** The reviewer can reject an incomplete business plan even when field validation allows submission. This lab has not configured a conditional-required control.

## Check the result

You verified Test → Production → Test → Production, recorded hidden-answer retention, and compared a populated plan with an empty optional plan. Both submitted requests are denied.

## Finish

Keep the form definition and its Production Support association. Leave Henry without Production Support membership or a pending diagnostic request. Preserve existing accounts, baseline access and Lucas's VPN. Keep Rollback plan optional and the working Production visibility condition saved.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs more than one image.

| Filename | What to show |
|---|---|
| AR-036-01.png | Saved condition, key, operator and target |
| AR-036-02.png | Test with rollback hidden |
| AR-036-03.png | Production with rollback visible |
| AR-036-04.png | Ava’s submitted rollback answer |

[Previous: AR-035](../AR-035/README.md) · [Course outline](../../README.md) · [Next: AR-037](../AR-037/README.md)
