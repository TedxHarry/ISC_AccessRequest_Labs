# AR-004 Lab Journal

Use this journal while following [AR-004](README.md). Record actual results; leave unfinished checks blank. Keep credentials out of this file.

## Configuration and aggregation

| Item | Your value or result |
|---|---|
| AD source name and ID | |
| Users OU DN | |
| AdminAccounts OU DN | |
| Original user search scopes and changes made | |
| Identification Number mapping verified | |
| AD employeeID schema type | |
| Original correlation criteria and order | |
| Saved correlation criteria and order | |
| Original Delta Aggregation setting | |
| Aggregation response status and task reference | |
| Completed aggregation status | |
| Optimization disabled confirmed | |
| Delta setting restored, if changed | |
| Warnings/errors and resolution | |

## Check every account

Copy each AD account's DN. Confirm its imported employeeID and inspect the linked identity in ISC. In the last column, record the actual identity username and whether it is correct.

| Expected identity | AD username | Expected employeeID | Actual AD DN | Imported employeeID | Actual linked identity / result |
|---|---|---|---|---|---|
| acme.e001 | acme.e001 | E001 | | | |
| acme.e002 | acme.e002 | E002 | | | |
| acme.e003 | acme.e003 | E003 | | | |
| acme.e004 | acme.e004 | E004 | | | |
| acme.e005 | acme.e005 | E005 | | | |
| acme.e006 | acme.e006 | E006 | | | |
| acme.e007 | acme.e007 | E007 | | | |
| acme.e008 | acme.e008 | E008 | | | |
| acme.e009 | acme.e009 | E009 | | | |
| acme.e010 | acme.e010 | E010 | | | |
| acme.e011 | acme.e011 | E011 | | | |
| acme.e012 | acme.e012 | E012 | | | |
| acme.e013 | acme.e013 | E013 | | | |
| acme.e014 | acme.e014 | E014 | | | |
| acme.e015 | acme.e015 | E015 | | | |
| acme.e016 | acme.e016 | E016 | | | |
| acme.e017 | acme.e017 | E017 | | | |
| acme.e018 | acme.e018 | E018 | | | |
| acme.e019 | acme.e019 | E019 | | | |
| acme.e020 | acme.e020 | E020 | | | |
| acme.e021 | acme.e021 | E021 | | | |
| acme.e022 | acme.e022 | E022 | | | |
| acme.e023 | acme.e023 | E023 | | | |
| acme.e024 | acme.e024 | E024 | | | |
| acme.e009 | acme.e009.admin | E009 | | | |

## Final counts

| Check | Expected | Actual |
|---|---:|---|
| Acme employee identities | 24 | |
| Standard Acme AD accounts | 24 | |
| Sofia admin test accounts | 1 | |
| Total Acme AD accounts linked correctly | 25 | |
| Uncorrelated Acme AD accounts | 0 | |
| Incorrectly linked Acme AD accounts | 0 | |

## Screenshots

Use the [screenshot checklist at the end of AR-004](README.md#screenshots-to-capture-as-you-work). Record filenames or notes here:

## Corrections made

Record the affected account, original value, correction, and verified result:

## Completion

- [ ] Every account row has an actual verification result.
- [ ] Sofia has two AD accounts linked to one identity.
- [ ] All completion checks in AR-004 pass.

[Return to AR-004](README.md)