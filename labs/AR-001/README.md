# AR-001 — Import Acme's HR Records

**Level:** Beginner

**Prerequisites:** An ISC training tenant, an existing AD connection, and permission to manage sources and identity profiles.

## Your assignment

Acme's HR team has supplied employee records for six departments. Import them into ISC and make each employee available as an identity. Then demonstrate that a corrected HR value reaches the corresponding identity.

## Lab files

- [HR baseline CSV](../../datasets/acme-hr-baseline.csv)
- [Evidence journal](EVIDENCE.md)
- [Company and environment reference](../../LAB-ENVIRONMENT.md)

Open the CSV on GitHub and select **Download raw file**. Keep an unchanged copy and use a separate working copy for the exercise.

## Starting state

Your tenant and AD connection are already available. Use a new **Acme HR** Delimited File source for this lab.

Check that the usernames `acme.e001` through `acme.e024` are not already assigned to unrelated identities. If this tenant already contains the Acme population, inspect the existing HR source and profile before importing it again.

Review existing automatic role criteria and identity-triggered workflows for rules that could include newly created lab employees. Use a training configuration that keeps these test identities outside unrelated automation.

## Before you configure anything

There are two records to inspect: the imported **HR account** and the resulting **ISC identity**. The source schema describes the CSV fields; identity-profile mappings choose which of those values populate the identity.

An identity profile makes the HR source authoritative. The file's `managerEmployeeNumber` is raw HR data; resolving it to an ISC manager is AR-002. [Identity profiles](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html)

Write down your prediction:

- How many HR accounts should the file create?
- How many Acme identities should you find?
- Where should Lucas Brown's department appear?
- What would distinguish an import problem from an identity-mapping problem?

## 1. Inspect the HR file

The file contains **24 employees and 14 columns**. Identifiers remain text, including the leading zeros in `E001` and `acme.e001`.

| Column | Example | Purpose |
|---|---|---|
| employeeNumber | E012 | Stable HR account identifier |
| userName | acme.e012 | Distinct Acme account and identity username |
| firstName | Lucas | Given name |
| lastName | Brown | Family name |
| displayName | Acme Lab - Lucas Brown | Recognizable training identity label |
| email | acme.e012@example.com | Placeholder email |
| department | Finance | Department used in later request scenarios |
| title | Reporting Analyst | Job title |
| managerEmployeeNumber | E003 | HR manager reference |
| location | Chicago | Work location |
| employeeType | Employee | Worker classification |
| costCenter | FIN200 | Department cost center |
| status | active | HR status text |
| startDate | 2025-01-06 | HR start date in YYYY-MM-DD format |

The `example.com` addresses are placeholders. They can remain for this import exercise; use controlled test mailboxes before invitation and email-notification labs. If you customize them now, retain that personalized baseline for recovery.

Keep the comma delimiter, exact column names, and all 24 rows. Save edited files as UTF-8 CSV. Morgan Reed (`E001`) is the hierarchy root and has an empty manager field.

## 2. Create the HR source

1. Open **Admin > Connections > Sources > Create New**.
2. Find **Delimited File** and choose **Configure** or **Actions > Standard Setup**.
3. Name the source **Acme HR** and describe it as `Acme lab employee records`.
4. Select your existing administrator as owner; the Acme identities do not exist yet.
5. Choose the file-based connection option if prompted and select **Authoritative Source**.
6. Continue and save the source configuration. Keep this HR feed read-only.

Record its name and identifier in your journal. [Source configuration](https://documentation.sailpoint.com/saas/help/sources/config_sources.html)

## 3. Define the account schema

1. In **Acme HR**, open **Account Management > Account Schema**.
2. Use **+ Add New Attribute** for each missing CSV column. Reuse an existing attribute when its name already matches exactly.
3. Set these 14 attributes to **String**, single-valued, and not entitlements.
4. Select **Edit Schema**. Set **Account ID** to `employeeNumber` and **Account Name** to `userName`, then select **Update**.
5. On this new, unaggregated source, remove unused default attributes through their **Actions > Delete** option so the schema matches the CSV header. If an attribute is referenced by another configuration, resolve that dependency before proceeding.

Set the identifying attributes before importing accounts; changing them afterward can disrupt account references. [Account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html)

The supplied header is a custom HR schema. Delimited File defaults such as `id`, `name`, `givenName`, and `e-mail` are not the column names in this file. [Delimited File account attributes](https://documentation.sailpoint.com/connectors/delimited_file/help/integrating_delimited_file/account_attributes.html)

## 4. Import the accounts

1. Open **Acme HR > Account Management > Account Aggregation**.
2. Select the upload control and choose your working CSV.
3. Follow the import prompts and inspect the completed aggregation result.
4. Confirm that the source contains 24 accounts. Inspect `E012` and compare its department and other values with the file.

Uploading a schema and aggregating accounts are separate operations. Account data must be loaded after the schema is defined. [Delimited File data import](https://documentation.sailpoint.com/connectors/delimited_file/help/integrating_delimited_file/data_import.html)

Use the uploaded filename and aggregation result to confirm which file was processed. **Aggregate Using Latest File** reuses the previously uploaded file; it does not read edits from your computer. [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html)

## 5. Create the identity profile

1. After aggregation completes, open **Admin > Identity Management > Identity Profiles > Create New**.
2. Name it **Acme Employees**, select **Acme HR**, and save. Leave automatic invitations off for placeholder mailboxes.
3. Open **Mappings**. Select **Acme HR** as the source for each mapping below.
4. Save, then select **Apply Changes**. Use **Preview** once an identity is available to inspect its values.

User Name must be unique tenant-wide. User Name, Work Email, and Last Name must have nonempty mappings. [Required mappings and profile setup](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html)

| Identity attribute | HR source attribute |
|---|---|
| User Name (`uid`) | userName |
| First Name (`firstname`) | firstName |
| Last Name (`lastname`) | lastName |
| Display Name (`displayName`) | displayName |
| Work Email (`email`) | email |
| Identification Number (`identificationNumber`) | employeeNumber |
| Department (`department`) | department |
| Title (`title`) | title |
| Location (`location`) | location |
| Cost Center (`costCenter`) | costCenter |

Keep `managerEmployeeNumber`, `employeeType`, `status`, and `startDate` on the HR account for now. The CSV value `active` is HR text; do not map it to Lifecycle State or enable lifecycle provisioning in this exercise.

## 6. Verify the identities

Open **Admin > Identity Management > Identities** and locate the Acme identities by username or display name. Open their details and **Accounts** to compare identity values with their **Acme HR** account data.

Count the Acme population associated with **Acme Employees**, rather than all identities in the tenant.

| Check | Expected result |
|---|---|
| HR accounts on Acme HR | 24 |
| Identities associated with Acme Employees | 24, assuming no pre-existing correlation/profile conflicts |
| Identification numbers | E001 through E024, each represented once |
| Usernames | acme.e001 through acme.e024, each represented once |
| E001 | Acme Lab - Morgan Reed; IT; IT100 |
| E012 | Acme Lab - Lucas Brown; Finance; FIN200 |
| E018 | Acme Lab - Henry Anderson; Engineering; ENG500 |
| E023 | Acme Lab - Abigail Lewis; Security; SEC600 |

Department counts should be IT **6**, Finance **4**, HR **3**, Sales **3**, Engineering **4**, and Security **4**.

Capture both Lucas's HR account and identity attributes. A successful aggregation alone is not the complete verification.

## 7. Practice challenge: investigate a wrong department

HR reports that Lucas Brown belongs in Finance, but ISC displays Sales.

### Introduce the problem

1. In your working CSV, change only `E012`'s `department` from `Finance` to `Sales`.
2. Upload the full 24-row file again through **Account Aggregation**.
3. After processing, compare Lucas's HR account and identity department. Record the observed result.

### Investigate

- What department is in the exact file you uploaded?
- Did the latest aggregation process that file successfully?
- What is stored on Lucas's HR account?
- Which source and attribute supply his identity Department?
- Do the account and identity disagree, or do both agree with the incorrect file?

Explain which layer needs correction before applying a fix. If the identity has not updated, distinguish pending processing from an incorrect mapping.

<details>
<summary>Hint: compare three values</summary>

Compare `E012`'s CSV department, Acme HR account department, and identity Department in that order. The first point of disagreement tells you where to investigate next.

</details>

### Restore and prove the correction

Correct Lucas's department to `Finance`, upload the complete working file, and repeat the account and identity checks. Keep your customized mailboxes if you changed them earlier.

Your final result must show Finance in both records, 24 HR accounts, and no additional Lucas identity. Retain `FIN200` as his cost center throughout the exercise.

## Troubleshooting checks

| Symptom | Investigate |
|---|---|
| Import rejects the file | Actual CSV format, delimiter, headers, and source schema |
| One field is empty on every HR account | Spelling and case of that column and schema attribute |
| Accounts exist but identities are missing | Profile source, required mappings, and profile exceptions |
| An existing identity received the HR account | Source correlation and other authoritative profiles; do not create another profile to hide the conflict |
| HR department is correct but identity Department is wrong | Mapping source/attribute, applied changes, and processing state |
| The old value remains after reimport | Uploaded filename, account value, and whether the old latest file was reused |
| More than one record appears for an employee | Stable Account ID/Name and existing correlation; preserve identifiers while investigating |

## Completion checklist

- [ ] Acme HR contains all 24 employee accounts.
- [ ] Acme Employees has the expected Acme identity population and required mappings.
- [ ] Sample identity values match the corresponding HR accounts.
- [ ] Lucas's department is restored to Finance without duplicate records.
- [ ] The unchanged or personalized baseline CSV is retained.
- [ ] Your journal contains the evidence and your explanation of the fault.

Keep **Acme HR** and **Acme Employees** for AR-002, where you will resolve the manager hierarchy. AD account correlation is covered in AR-004.

[Return to the course outline](../../README.md)
