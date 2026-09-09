# AR-004 — Correlate Lucas's Existing AD Account

**Level:** Beginner

## Goal

Correlate Lucas Brown's existing Active Directory account to his ISC identity by matching the same employee identifier on both records.

## Prerequisites

Complete [AR-003](../AR-003/README.md).

You should already have:

- Lucas Brown as ISC identity `acme.e012`.
- Lucas's AD account imported on the AD source.
- `identificationNumber = E012` on Lucas's ISC identity.
- The AD source ID and Lucas's AD distinguishedName recorded.

Keep your [evidence journal](EVIDENCE.md) open.

## What you will finish with

| Item | Expected result |
|---|---|
| ISC identity attribute | `identificationNumber = E012` |
| AD account attribute | `employeeID = E012` |
| Correlation pair | `identificationNumber` = `employeeID` |
| Lucas AD account | Linked to `acme.e012` |

---

## 1. Verify Lucas's ISC identifier

1. Open **Admin > Identity Management > Identity Profiles > Acme Employees > Mappings**.
2. Confirm **Identification Number (`identificationNumber`)** maps to **Acme HR > employeeNumber**.
3. Open **Admin > Identity Management > Identities**.
4. Search for `acme.e012` and open Lucas Brown.
5. Confirm **Identification Number = E012**.

**Check:** Lucas's ISC identity contains `E012` in Identification Number.

**Screenshot:** Capture Lucas's Identification Number.

## 2. Set employeeID on Lucas's AD account

1. Open **Active Directory Users and Computers**.
2. Select **View > Advanced Features**.
3. Open **AcmeLab > Users > Acme Lab - Lucas Brown**.
4. Open **Properties > Attribute Editor**.
5. Locate `employeeID`.
6. Set the value to `E012`.
7. Select **Apply** and reopen the attribute to confirm the saved value.
8. Record Lucas's `distinguishedName` and `sAMAccountName`.

Do not change the separate AD `employeeNumber` attribute.

**Check:** Lucas's AD account contains `employeeID = E012`.

**Screenshot:** Capture `employeeID = E012` on the AD account.

## 3. Add employeeID to the AD account schema

1. Open **Admin > Connections > Sources > your AD source**.
2. Open **Account Management > Account Schema**.
3. Find `employeeID`.
4. If it is not present, select **Add New Attribute** and enter:

| Setting | Value |
|---|---|
| Name | employeeID |
| Type | String |
| Multi-Valued | No |
| Entitlement | No |

5. Save the schema.
6. Leave the existing Account ID and Account Name settings unchanged.

Reference: [Account schemas](https://documentation.sailpoint.com/saas/help/accounts/schema.html)

**Check:** `employeeID` is present in the AD account schema.

**Screenshot:** Capture `employeeID` in the account schema.

## 4. Configure account correlation

1. Open **Admin > Connections > Sources > your AD source > Account Management > Account Correlation**.
2. Record the current account-correlation configuration in your journal.
3. Configure the course correlation pair:

| Field | Value |
|---|---|
| Identity Attribute | Identification Number (`identificationNumber`) |
| Operation | Equals |
| Account Attribute | employeeID |

4. Place this criterion first.
5. Save the configuration.
6. Leave **Manager Correlation** unchanged.

Reference: [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html)

The match is:

```text
Lucas ISC identity
identificationNumber = E012
           │
           └── matches ──> AD account employeeID = E012
```

**Check:** The saved correlation pair uses `identificationNumber` and `employeeID`.

**Screenshot:** Capture the saved Account Correlation configuration.

## 5. Run a full AD account aggregation

Use [AGGREGATION.md](AGGREGATION.md) to run an unoptimized AD account aggregation so the newly added `employeeID` schema attribute is read from the existing account.

Wait for the job to complete before continuing.

**Check:** The aggregation completes successfully and Lucas's imported AD account shows `employeeID = E012`.

**Screenshot:** Capture the completed account aggregation.

## 6. Verify the account link

1. Open **Admin > Identity Management > Identities**.
2. Search for `acme.e012` and open Lucas Brown.
3. Open **Accounts**.
4. Find the account on your AD source.
5. Confirm:

| Check | Expected result |
|---|---|
| sAMAccountName | acme.e012 |
| employeeID | E012 |
| DN | Matches the AD account |
| Linked identity | Lucas Brown / acme.e012 |

6. Confirm Lucas still has his Acme HR account as well.
7. Confirm only one course AD account is linked to Lucas.

**Check:** Lucas's existing AD account is linked to the correct ISC identity.

**Screenshot:** Capture Lucas's identity with the linked AD account.

## Final verification

- [ ] Lucas's ISC Identification Number is E012.
- [ ] Lucas's AD employeeID is E012.
- [ ] employeeID exists in the AD account schema.
- [ ] Account Correlation matches `identificationNumber` to `employeeID`.
- [ ] The full aggregation completed successfully.
- [ ] The imported AD account contains employeeID E012.
- [ ] Lucas's AD account is linked to `acme.e012`.
- [ ] No duplicate Lucas identity or AD account was created.

## Leave this in place

Keep:

- `employeeID = E012` on Lucas's AD account.
- `employeeID` in the AD account schema.
- The saved account-correlation criterion.
- Lucas's existing AD account linked to his ISC identity.

Next: **[AR-005 — Configure AD Account Creation](../AR-005/README.md)**

[Previous: AR-003](../AR-003/README.md) · [Lab index](../README.md)
