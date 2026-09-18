# AR-057 · Produce a repeatable request report and save C09

In this lab, you'll run the read-only report for Taylor and Henry, check it against your request evidence, and record a usable handover.

## Before you start

Complete [AR-056](../AR-056/README.md). Use the course repository, Python 3, the three private API environments and the journals from AR-053–056. Taylor's diagnostic access and pending work are cleared. You will generate the reports here. Keep your [journal](EVIDENCE.md) open.

## Follow the steps

### 1. Establish the folder and prove the fixture

1. Open Windows PowerShell. Follow [the workbench's folder and fixture steps](../../API-WORKBENCH.md#open-the-correct-folder-and-run-the-fixture-first) from the repository root. Those steps create `$LabEvidenceFolder`, run the fixture and establish the variables used below. Repeat the setup if you opened a new PowerShell session.
2. Open the generated fixture report and verify three rows, including the final page's record. Compare with `fixtures/request-status-pages.json`; do not describe synthetic IDs as tenant IDs. Save `AR-057-01.png` showing the count and command without credentials.
3. Inspect `tools/request_report.py`. Confirm its live route is `/access-request-status/v1`, its recipient filter comes from `--recipient`, and it only makes GET requests. Its output uses create-new mode, so an existing filename is not silently overwritten. A repeated run needs a new output filename.

**Check:** The command runs locally and reads every fixture page. Tenant permission is still a separate check.

### 2. Produce Taylor's live report

1. Select Acme API Taylor in Postman and verify an own-history GET still succeeds. If its token expired, obtain a fresh one through the existing token exchange. Keep the value private for the hidden prompt below.
2. In the same PowerShell session used for the fixture, run:

```powershell
$LabApiBase = Read-Host 'Confirmed tenant API origin, without a path'
$LabRecipientId = Read-Host 'Taylor ISC identity ID from your journal'
$LabLiveReport = Join-Path $LabEvidenceFolder ('taylor-requests-' + (Get-Date -Format 'yyyyMMdd-HHmmss') + '.json')
python ./tools/request_report.py --base $LabApiBase --recipient $LabRecipientId --output $LabLiveReport
if ($LASTEXITCODE -ne 0) { throw 'Taylor report failed; inspect the error before continuing.' }
$LabRows = @(Get-Content -LiteralPath $LabLiveReport -Raw | ConvertFrom-Json)
$LabRows.Count
```

3. At the hidden prompt, paste Taylor's current access token and press Enter. Do not put it on the command line. Wait for the saved-record count. If the command reports 401, renew the token; for 403, verify owner/recipient and scopes; for 429, observe Retry-After before another read. The script sends no automatic retry. A failed run is not an empty successful report.
4. Open the saved file privately. Check every non-null `requestedFor.id` is Taylor's recorded ID. Compare its AR-053–056 records with your journal by parent tracking ID, type, comment and created time. The report contains item-status rows, so its count need not equal the number of POST calls or parent requests.
5. Check whether the same status `id` occurs more than once. Compare the report with your earlier grant, removal, denial and cancellation records; a missing known item needs investigation even if the total count looks plausible. Retain the original output and rerun after processing settles if rows repeat or expected rows are missing. Account for denied/canceled outcomes and ignored duplicates that have no additional history row. Compare with the same status filters in Postman and the matching ISC requests. If records changed while paging, rerun after the diagnostic work settles using a new filename. Save `AR-057-02.png`.

**Check:** The report is a dated observation of request history, not a live approval queue or a current-access inventory.

### 3. Build a short action table and verify another recipient

1. In your journal, make one row for each relevant lab record using these columns:

| Parent accessRequestId | accountActivityItemId | Item/type | Created | State | Next action |
|---|---|---|---|---|---|
| Copy actual field | Copy actual field | Returned name/type | Returned time | Actual state | None, inspect review, inspect operation, or unresolved |

2. For a completed request, use your native evidence to explain whether access was later removed. For any unresolved record, link its matching activity/error or pending approval. Do not mark every EXECUTING row as an approval problem; inspect the phase. Preserve an old failed record as history even after a later repair succeeded.
3. Copy Henry's identity ID from AR-052. Select Acme API Admin and obtain a current admin token. Run the report for Henry into a different private file:

```powershell
$LabHenryId = Read-Host 'Henry ISC identity ID from your journal'
$LabHenryReport = Join-Path $LabEvidenceFolder ('henry-requests-' + (Get-Date -Format 'yyyyMMdd-HHmmss') + '.json')
python ./tools/request_report.py --base $LabApiBase --recipient $LabHenryId --output $LabHenryReport
if ($LASTEXITCODE -ne 0) { throw 'Henry report failed; inspect the error before continuing.' }
$LabHenryRows = @(Get-Content -LiteralPath $LabHenryReport -Raw | ConvertFrom-Json)
$LabHenryRows.Count
```

4. At this hidden prompt use the administrator token, because this is another user's history. Verify returned recipient IDs are Henry's and compare at least one available record with his earlier course requests. An empty array needs a verified filter/caller and matching live read; it is not automatically a failure. Save `AR-057-03.png` with the action table and recipient comparison.

**Check:** Changing the recipient changes the permitted dataset. Taylor's ordinary token is not used to report on Henry.

### 4. Save C09 and retain a clean tenant

1. Record C09 in the journal: repository revision, command, service path, caller identity/authority, collection time, filters, report filenames, row counts and unresolved cases. Record the observed outcome of each AR-052–056 case; use Not run or Not reproduced where appropriate.
2. Verify Taylor has no Remote Worker assignment, VPN/Remote Users/disposable-group/baseline membership or pending diagnostic work. Keep his original account, the complete private HR file including Taylor and any later-course records (25 rows on the first pass), the original 24-person baseline list and current disabled reference-test profile from C08. Save `AR-057-04.png`.
3. Keep raw reports in the private evidence folder. For any shared sample, remove credentials and unnecessary identity details; retain enough labelled fields to explain the example. Do not export the local vault.
4. If you will continue API labs soon, retain the named PATs privately and renew only expired bearer tokens. If finished with them, use each owner's **Preferences > Personal Access Tokens** to delete only that module's named token. Record which credentials need recreating before a later API lab.

**Check:** C09 identifies what another practitioner needs to rerun a permitted read and interpret it. The report itself made no access changes.

## Check the result

The fixture yields three records, Taylor and Henry reports use the correct callers/filters, and the action table agrees with actual request/native evidence. C09 records remaining uncertainty and the preserved tenant state.

## Engineering practice

Inspect a report with a terminal failed item beside a later successful control. Explain which row requires action now. Also explain why offset paging during concurrent updates can miss or repeat records, and why the fixture cannot prove snapshot consistency. Use a settled lab window for comparison and retain timestamps instead of claiming the report is an audit-complete snapshot.

## Finish

Keep C09, private reports, caller provenance and clean Taylor access. Retain or retire only the named lab credentials as recorded. Module 10 starts native approval-workflow exercises when the required capability is available; ordinary Workflows access alone does not establish that capability.

### Screenshots to capture

Capture these beside the matching steps. Hide token values and secrets. Add a letter suffix when one result needs several images.

| Filename | What to show |
|---|---|
| AR-057-01.png | Fixture command and three-row result |
| AR-057-02.png | Taylor live report and matching request evidence |
| AR-057-03.png | Action table and separate Henry/admin report |
| AR-057-04.png | C09 and clean retained account/access state |

[Previous: AR-056](../AR-056/README.md) · [Course outline](../../README.md) · [Next: AR-058](../AR-058/README.md)
