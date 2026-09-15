# AR-074 · Prepare a reproducible support handover

In this lab, you'll turn the mixed-results investigation into a support handover another engineer can follow without your browser session.

## Before you start

Complete [AR-073](../AR-073/README.md), including cleanup. Keep its basket, per-item decisions and native evidence. Use a private evidence folder and your [journal](EVIDENCE.md). You may substitute an actual recorded AR-048/068 failure, but do not invent a product defect or an error message.

## Follow the steps

### 1. State the report and established facts

1. Use this report from AR-073: `Taylor requested two items but received only Remote Worker`. Write what the requester expected, then state the observed facts: one item approved/fulfilled, the other deliberately denied, with later removal of the approved grant.
2. Record the case as explained policy behavior unless evidence shows otherwise. If substituting a real failure, retain its exact error and actual unresolved stage. A support handover does not require alleging a SailPoint defect.
3. In your private journal, list source, recipient, account DN/GUID, item ID/type, each request/approval/activity ID and observation time zone. Copy values from the evidence; leave unavailable values marked Missing with the next lookup needed.
4. Save `AR-074-01.png` showing the symptom and the two decisions, with private identifiers hidden in the shareable image.

**Check:** A reader can distinguish the business report from the conclusion supported by evidence.

### 2. Write the smallest reproduction

1. Write the starting state: clean Taylor account, no VPN/Remote/disposable membership, Priya reviews Remote Worker and the temporarily requestable disposable entitlement, and developer subscriptions are disabled. Identify the source lab that establishes those conditions.
2. Write numbered actor/action/observation steps: Taylor selects the two exact item types and submits once; Priya denies the disposable item and approves Remote Worker; administrator reads each decision; AD operator checks the three groups on the same account. Include the actual reasons and account selection from your record.
3. Add expected versus observed results for each item. State that the basket can have different request IDs. Include the later removal as cleanup, not as evidence that the original grant never occurred.
4. For a substituted failure, include only the smallest changed condition and comparable working control. Distinguish instructions that another engineer could run from actions you actually executed. Do not reintroduce an AD permission fault just to capture a cleaner screenshot.

**Check:** Reproduction steps name actors, values and observations rather than saying only “submit and check.”

### 3. Build the timeline and requested next action

1. Make a timeline with timestamp/time zone, actor or system, event, request/item ID and evidence filename. Include submission, each decision, native observation, removal request, removal outcome and any configuration restoration. Use the observed timestamps; mark missing times instead of estimating them.
2. Add changes tried and their results. If none were needed because denial explains the missing item, say so. Identify the current native state and whether any request/write remains pending.
3. Write the requested next action. For AR-073, explain the denied item to the requester and require a new business justification if it is still wanted. For an unresolved case, name the missing evidence and whether the source administrator or SailPoint support can supply it.
4. Save `AR-074-02.png` with the timeline and conclusion. Keep the private ID map separate from the shareable narrative.

**Check:** The next engineer knows what is established, what remains uncertain and what to do next.

### 4. Review a shareable copy

1. Create a copy in your private evidence folder, such as `AR-074-support-case.md`, containing symptom, scope/impact, prerequisites, reproduction, expected/observed results, timeline, changes tried, current state and next action. Keep this within the existing journal if you prefer one file.
2. Replace private identity/account values consistently in the shareable copy; preserve stable labels such as Recipient A, Profile A and Entitlement B so the events can still be correlated. Remove tokens, passwords, callback secrets and unrelated exports.
3. Reread only that copy, with the walkthrough closed. Check whether you can identify the two items, reproduce the observations and find cleanup/current state. Fix every missing actor, input, timestamp reference or evidence link you notice.
4. Save `AR-074-03.png` of the corrected shareable copy. Retain the private original and identifier map. This lab prepares the package; it does not send an email or open a support case.

**Check:** Another engineer can follow the evidence without needing your open sessions or credentials.

## Check the result

The package gives a reproducible sequence, per-item evidence, timestamped timeline, current state and justified next action. Facts, predictions and missing evidence remain distinct.

## Finish

Keep the private evidence and sanitized handover. Leave all tenant objects in their AR-073 restored state. If using a historical failure, preserve its later resolution and do not present it as a current outage.

### Screenshots to capture

Capture these beside the matching steps. Hide credentials and unnecessary personal data. Use letter suffixes when a result needs several images. Label historical and synthetic evidence separately from current tenant observations.

| Filename | What to show |
|---|---|
| AR-074-01.png | Reported symptom and separate observed decisions |
| AR-074-02.png | Timeline, current state and next action |
| AR-074-03.png | Reviewed shareable reproduction package |

[Previous: AR-073](../AR-073/README.md) · [Course outline](../../README.md) · [Next: AR-075](../AR-075/README.md)
