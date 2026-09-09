# AR-015 evidence journal

| Record | Your evidence |
|---|---|
| Date, tenant and available capability | |
| Requester / recipient / reviewer | |
| Source, access item and account IDs | |
| Starting configuration and native access | |
| Predicted result | |
| Request / approval / activity IDs | |
| Actual result and timestamps | |
| Changed condition and result | |
| Root cause, recovery and repeat test | |
| Final configuration and native access | |
| Remaining observation or support case | |

## Screenshots

Use the capture list at the end of the [lab](README.md). Name the files `AR-015-01.png`, `AR-015-02.png` and so on in that order. Record a separate filename for each test variant. Exclude credentials and callback secrets.

## Explain the result

Which evidence proves the requested outcome? Which other cause did you rule out? Could another engineer repeat your recovery from these notes?
## Practice and ticket notes

| Record | Your notes |
|---|---|
| First run or repeat; steps completed without the walkthrough | |
| Actual signed-in identities and starting-state exceptions | |
| Before and after native membership; controller; account DN/objectGUID | |
| Request ID versus approval/activity IDs; matching evidence | |
| Prediction compared with observed result | |
| Independent ticket diagnosis before opening the solution | |
| Supplied case or tenant failure actually observed | |
| Restored settings, retained grants and unresolved requests | |
| Next lab starting state checked | |

### Request and target timeline

Use a separate row for each actual request. Write Not applicable for stages that did not occur; do not invent a provisioning ID for a denied request. Record displayed time zones.

| Recipient/item | Request ID/time | Reviewer/decision/time | Activity IDs/result | Native before/after | Removal or retained state |
|---|---|---|---|---|---|
| | | | | | |

## Walkthrough acceptance record

| Check | Expected | Actual / evidence |
|---|---|---|
| Profile / source | AP-Remote-Worker / recorded AD source | |
| Entitlements | GG-VPN-USERS and GG-REMOTE-USERS only | |
| Grant / removal reviewer | Priya as Primary Owner for both | |
| Liam grant | Both groups on existing account | |
| Olivia denial | Neither group granted | |
| Liam removal | Both groups and test profile assignment absent | |
| Baseline / Lucas VPN | All retained | |
| C02 | Saved privately | |

Use the screenshot names in the current README. Additional control captures in AR-011 and AR-013 follow the main walkthrough captures.
