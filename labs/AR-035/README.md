# AR-035 · Test required and optional form answers

In this lab, you'll test missing required answers, an optional note and a ticket that looks valid but has not been approved.

## Before you start

Complete [AR-034](../AR-034/README.md). Its form must be attached and its diagnostic request denied. Use Acme Admin, Acme Henry (`acme.e018`) and Acme Ava (`acme.e006`) in separate browser profiles, plus your AD workstation. Keep your [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Add the optional note

1. Open **Admin > Global > Forms > FORM-Acme-Production-Support** and select **Edit in Builder**.
2. In Maintenance details, select **+ Add > Text Area Field**. Enter Label `Implementation notes`, Technical Key `implementationNotes`, and leave **Mark as required** off. Select **Apply**, then **Save**.
3. Reopen the field. Confirm it is optional and the other three questions remain required. Save `AR-035-01.png` showing the distinction.
4. Verify Henry has no pending Production Support request and direct `GG-PROD-SUPPORT` membership is False using [the membership check](../../M02-CHECKS.md#inspect-direct-ad-membership).

**Check:** You added one optional question without weakening the original three.

### 2. Try each missing answer

1. As Henry, open **Request Center > Access Items > Access Profiles** and select `AP-Production-Support`.
2. Leave Change ticket blank. Choose `Test`, enter Work description `Check the lab support group` and standard comments `AR-035 required ticket`. Attempt to **Save** or continue to **Review Request**. Record the exact validation message and where it blocks progress. No request should have been submitted.
3. Enter ticket `CHG-LAB-035-A`. Clear Environment while keeping the other required answers populated, then attempt to continue. Record its validation and restore `Test`.
4. Clear Work description and repeat. Record its validation, then restore `Check the lab support group`. Save `AR-035-02.png` with a suffix for each missing-field case.
5. Leave Implementation notes blank. Keep immediate access with no standard start/end dates. Save the corrected form, select **Review Request**, verify Henry and the answers using **Edit Request Details**, then **Submit Request**. Record the ID from **My Requests**.
6. As Ava, open **Approvals > Access Requests > Requested** and open Henry's matching Production Support **Grant** details. Compare each answer with your journal. Select **Deny**, enter the stated test reason and confirm. As administrator, verify **Denied** under **Admin > Dashboard > Approval Management > Access Requests** using that request ID. Check Henry's direct `GG-PROD-SUPPORT` membership is **False** using [the AD membership procedure](../../M02-CHECKS.md#inspect-direct-ad-membership). An error is not a False result. Use denial reason `AR-035 optional note may be blank`.

**Check:** Empty required answers block progress; an empty optional note allows submission.

### 3. Compare entered and saved text

1. After the previous request is Denied, start a fresh Henry request for the same profile. Enter ticket `CHG-LAB-035-UNAPPROVED`, Environment `Test`, and Implementation notes `No production work is authorized for this exercise.`
2. Enter these two lines in Work description:

```text
Check Henry's group, then record the result.
Do not change a production system.
```

3. Enter standard comments `AR-035 text and business review`, keep immediate access, save and review the form. Reopen **Edit Request Details** to verify the punctuation and text before submitting. Record the new ID.
4. As Ava, open the matching Grant details. Compare all answers, including notes. Record whether line breaks are displayed or normalized; check that no words were lost. Save `AR-035-03.png`.
5. Deny with reason `Test ticket is not an approved change`. Confirm Denied and native Production Support False.

**Check:** A nonempty ticket value passed field validation. No external change-management integration has been configured to validate that ticket; the reviewer still decides whether the work is authorized.

## Check the result

You recorded validation for all three required fields, a submitted request with empty optional notes, and one with populated notes. Both submitted requests are denied.

## Engineering practice

Use the unapproved-ticket request to answer: did ISC accept input, accept a submission, approve access or provision access? Identify the exact stage and its evidence. Explain why requiring a Text Field does not prove that a change ticket exists in an external system. Keep human review in place; an external ticket lookup would be a separate integration with its own tests.

## Finish

Keep the form definition and its Production Support association. Leave Henry without Production Support membership or a pending diagnostic request. Preserve existing accounts, baseline access and Lucas's VPN. Keep Implementation notes optional.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs more than one image.

| Filename | What to show |
|---|---|
| AR-035-01.png | Optional field configuration |
| AR-035-02.png | Validation for each missing required answer |
| AR-035-03.png | Saved multiline text and note in reviewer details |

[Previous: AR-034](../AR-034/README.md) · [Course outline](../../README.md) · [Next: AR-036](../AR-036/README.md)
