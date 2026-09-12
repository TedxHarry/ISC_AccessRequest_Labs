# AR-002 — Evidence Journal

## Configuration

| Item | Observed value |
|---|---|
| Manager Name mapping source and attribute | |
| Employee Number mapping source and attribute | |
| Manager Correlation: Identity Attribute | |
| Manager Correlation: Account Attribute | |
| Processing result | |

## Relationship verification

| Employee | Expected manager | Actual manager | Evidence reference |
|---|---|---|---|
| E001 | None | | |
| E002 | E001 | | |
| E003 | E001 | | |
| E004 | E001 | | |
| E005 | E001 | | |
| E006 | E001 | | |
| E007 | E001 | | |
| E008 | E002 | | |
| E009 | E002 | | |
| E010 | E002 | | |
| E011 | E003 | | |
| E012 | E003 | | |
| E013 | E003 | | |
| E014 | E004 | | |
| E015 | E004 | | |
| E016 | E005 | | |
| E017 | E005 | | |
| E018 | E006 | | |
| E019 | E006 | | |
| E020 | E006 | | |
| E021 | E007 | | |
| E022 | E007 | | |
| E023 | E007 | | |
| E024 | E002 | | |

## Explain your result

- Which value on Lucas's HR account identified Daniel?
- Which attribute on Daniel's identity matched that value?
- Why is Morgan's empty Manager expected?
- If a relationship failed, where did the evidence first differ from the expected configuration?

[Return to AR-002](README.md)

## Wrong-manager practice

| Stage | E012 HR manager reference | Resolved identity manager |
|---|---|---|
| Baseline | E003 | |
| Controlled wrong reference | E002 | |
| Restored | E003 | |

Capture `AR-002-wrong-manager.png` and `AR-002-restored-manager.png`; confirm other manager relationships remain unchanged.

## Practice and ticket notes

| Record | Your answer |
|---|---|
| First attempt, resumed, or repeat | |
| Starting state checked; any exception | |
| Guided result and evidence | |
| Variation/comparison and what it taught you | |
| Ticket diagnosis before opening the solution | |
| Evidence that would close the ticket | |
| Actual fault observed, or supplied case only | |
| Temporary changes restored | |
| Retained objects and memberships checked | |
| Next unfinished check, if any | |

## Existing-configuration entry check

| Item | Your record |
|---|---|
| First setup or existing configuration | |
| Current objects and values checked before the exercise | |
| Historical activity reused, including original date | |
| Live changes made and original values | |
| Restoration evidence and retained state | |
