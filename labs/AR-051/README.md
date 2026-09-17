# AR-051 — Resolve a fulfillment incident and save C08

In this lab, you'll use your saved failures to explain a fulfillment incident, prove the current request path works, and leave Taylor ready for the API labs.

## Before you start

Complete [AR-050](../AR-050/README.md). Have the journals from AR-046–050 available, including actual failure evidence from AR-048 if reproduced. Use Acme Taylor, Priya, Acme Admin and the AD workstation. Taylor's account remains, with no VPN, Remote Users, baseline or disposable-group membership. Open your [journal](EVIDENCE.md).

If you are resuming, open your journal and inspect the current assignments, pending requests and retries before making another change. Continue from the first unfinished step; do not repeat a grant that can still complete.

## Follow the steps

Use the same recorded account and verification domain controller for each native comparison. For a working control, wait for the matching source operation to finish successfully, then check AD. For a fault test, record the actual failure and check native membership as directed. Investigate a pending operation before submitting another request.

### 1. Reconstruct one incident from your own evidence

1. Open the AR-048 journal and find the denied-write request. Record its request ID, recipient, ISC account ID, native account/group, approval time, operation ID, actual error and final status. If the fault was not reproduced, label that case **Not reproduced** and use the observed AR-049 reference change or AR-050 reconciliation instead. Do not invent an error.
2. Open the corresponding request in **Admin > Dashboard > Approval Management > Access Requests** and its operation using [Account Activity](../../LAB-DESK.md#find-the-account-activity). Confirm these are the saved records, not a newer request with the same item name. If an older operation is no longer available in the live view, use the saved journal/capture and label it historical; do not replace it with another operation. For a manual AD change, use its native timestamps and aggregation records instead; an access-request ID is not applicable.
3. In AD, inspect the current disposable group's **Properties > Security > Advanced** and compare it with the original/restored ACL. Verify the temporary deny is absent. Confirm the current name is `GG-ACME-FAULT-049` with the recorded original objectGUID.
4. Classify the incident using the evidence below, then save `AR-051-01.png` with the records that support your conclusion.

| Observation | What to investigate |
|---|---|
| Review is still pending | Current assignee and decision |
| Approved assignment starts later | Saved start time and current time zone |
| Group write failed with the recorded permission error | Effective principal and that group's member-write permission |
| Profile references an obsolete native group value | Current aggregated entitlement and saved profile selection |
| Native AD membership differs from the imported account | Controller, aggregation and scope |
| Imported account is current but Search is behind | Processing/indexing and observation times |

**Check:** Your report names the failing stage and supporting record. An old Failed status alone says nothing about today's connector health.

### 2. Prove the current request path works

1. Record Taylor’s account DN/GUID and verification controller. Check Taylor’s VPN and Remote Users membership are both False, and no earlier Remote Worker request can still run. Confirm AP-Remote-Worker is enabled/requestable, contains only these two groups and uses Priya for grant/removal.
2. As Taylor, open **Request Center > Access Items > Access Profiles**, select `AP-Remote-Worker`, enter `AR-051 current fulfillment control`, keep immediate access and Taylor's standard account, then save, review and submit. Record the ID from My Requests.
3. As Priya, open **Approvals > Access Requests > Requested**, inspect Taylor's matching Grant, approve with `AR-051 verified control`, and confirm.
4. As administrator, find the matching Account Activity for `recipient.name:acme.e025`. Record its AD operation, actual account/group values and result. Run [the native checks](../../M02-CHECKS.md#inspect-direct-ad-membership): VPN True and Remote Users True. Save `AR-051-02.png`.
5. [Refresh imported AD data](../../M02-CHECKS.md#refresh-imported-ad-data), then as Taylor reopen **My Access > Access Profiles > AP-Remote-Worker > Revoke Access Profile**, enter `AR-051 control complete`, and **Submit**. Have Priya inspect and approve the matching removal. Follow its operation and verify both groups False. Refresh imported account data and confirm the requested assignment is gone. Save `AR-051-03.png`.

**Check:** Today's grant and removal worked on Taylor's existing account. Use AR-048's repaired disposable-group request to prove that specific permission repair; this Remote Worker control alone would not prove it.

### 3. Write the incident outcome and save the next starting state

1. In the journal, write six short entries: reported symptom; affected account/item; timeline with record IDs; evidence-supported cause; exact repair; and verification/remaining uncertainty. For example, cite your actual denied property and recovered request, not simply ‘fixed permissions.’ Keep a diagnosis provisional if the evidence does not establish it.
2. Create a private `C08` folder alongside your earlier checkpoints. Save the AR-046–051 journals and captures there. Mark the module Complete only when all required observations were performed and passed. Keep **Not run**, **Not reproduced** and unresolved cases visible; a successful current control does not turn them into passes. Record readiness for AR-052 separately: Taylor’s login works, the account is retained, memberships are clean and no temporary permission or pending write remains.
3. Verify Taylor's AD account remains with its recorded DN/GUID and ISC account ID. Check VPN, Remote Users, baseline and GG-ACME-FAULT-049 all False. Keep the original 24-person baseline membership and Sofia’s extra account, preserving legitimate later additions if repeating these labs. Run the direct check for Lucas (`acme.e012`) and verify his retained VPN=True. On a first full-course pass, retain 25 HR identities and 26 AD accounts.
4. Verify the disposable group has its original ACL, current name and non-requestable entitlement; AP-Acme-Reference-Test remains disabled and references the current entitlement. Resolve pending requests/retries before later tests. Keep the complete private HR CSV with Taylor for subsequent imports.
5. Record Taylor's ISC identity ID, AD source ID, ISC account ID, current disposable entitlement ID and AP-Remote-Worker ID using [the value lookup guide](../../LAB-VALUES.md). Label each ID; they are not interchangeable with AD objectGUID or native DN. Confirm Remote Worker remains requestable with Priya’s reviews and no required form or end date, as restored earlier. These values will help you identify the correct objects in AR-052. Save `AR-051-04.png` showing final state without credentials or tokens.

**Check:** C08 gives you a verified account, clean memberships and current identifiers for the API module. Any unresolved case remains visible in the journal.

## Check the result

Your incident explanation is supported by actual records, a fresh Remote Worker grant/removal succeeds, and the retained state agrees with C08. A hypothetical or unobserved failure is not presented as a completed tenant test.

## Engineering practice

Read only the symptom you wrote, then solve it again using the request, operation and native evidence without looking at your conclusion. Identify one misleading observation—for example, an old Failed request after a successful repair—and explain which newer evidence resolves it. If you cannot distinguish two possible causes, name the next read-only check that would separate them instead of guessing or injecting another fault.

## Finish

Keep C08 evidence, Taylor's account and sign-in, current group identifiers, restored permissions and disabled reference-test profile. Leave no test memberships or pending writes. Continue to AR-052 to prepare the API caller and look up these same objects.

### Screenshots to capture

Capture these at the matching step. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-051-01.png | Incident evidence and present permission/reference state |
| AR-051-02.png | Fresh request, successful operation and native grant |
| AR-051-03.png | Approved removal and native absence |
| AR-051-04.png | C08 retained account, clean groups and labelled object IDs |

[Previous: AR-050](../AR-050/README.md) · [Course outline](../../README.md) · [Next: AR-052](../AR-052/README.md)
