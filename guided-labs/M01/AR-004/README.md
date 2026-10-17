<a id="ar-004--correlate-lucass-existing-ad-account"></a>

# AR-004: Correlate Lucas's Existing AD Account

<a id="goal"></a>

In this lab, you'll link Lucas's imported AD account to his ISC identity using the employee identifier. You created and imported the account in AR-003; you will configure and verify the match here.

## Before you start

Use the [Module 1 configuration record](../../../reference/M01-STATE.md) for actual environment values and the required retained state.

<a id="session-for-this-lab"></a>

Use your ISC administrator session for ISC steps and your AD administration workstation for directory steps.

<a id="prerequisites"></a>

Complete [AR-003](../AR-003/README.md).

From the previous labs, you need:

- Lucas Brown as ISC identity `acme.e012`.
- Lucas's AD account imported on the AD source.
- `identificationNumber = E012` on Lucas's ISC identity.
- The AD source ID and Lucas's AD distinguishedName recorded.

## Follow the steps

<a id="1-verify-both-employee-identifiers"></a>

### 1. Verify Lucas's ISC identifier

1. Open **Admin > Identity Management > Identity Profiles > Acme Employees > Mappings**.
2. Confirm **Employee Number (`identificationNumber`)** maps to **Acme HR > employeeNumber**.
3. Open **Admin > Identity Management > Identities**.
4. Search for `acme.e012` and open Lucas Brown.
5. Confirm **Employee Number = E012**.

**Check:** Lucas's ISC identity contains `E012` in Employee Number.

<!-- AUTHOR_SCREENSHOT_START: AR-004-01 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-004-01-identity-number.png`
>
> **Show:** Lucas's Employee Number.

<!-- AUTHOR_SCREENSHOT_END: AR-004-01 -->

![Lucas has Employee Number E012 on his ISC identity. In profile mappings, this field has technical name identificationNumber.](images/AR-004-01-identity-number.png)

Lucas has Employee Number E012 on his ISC identity. In profile mappings, this field has technical name identificationNumber.

<a id="4-check-which-identity-owns-this-account"></a>

<a id="completion-checklist"></a>

### 2. Set employeeID on Lucas's AD account

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

<!-- AUTHOR_SCREENSHOT_START: AR-004-02 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-004-02-ad-employee-id.png`
>
> **Show:** `employeeID = E012` on the AD account.

<!-- AUTHOR_SCREENSHOT_END: AR-004-02 -->

![Set AD employeeID to E012. The separate AD employeeNumber field is not used for this correlation and remains unset in this example.](images/AR-004-02-ad-employee-id.png)

Set AD employeeID to E012. The separate AD employeeNumber field is not used for this correlation and remains unset in this example.

### 3. Add employeeID to the AD account schema

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

<!-- AUTHOR_SCREENSHOT_START: AR-004-03 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-004-03-account-schema.png`
>
> **Show:** `employeeID` in the account schema.

<!-- AUTHOR_SCREENSHOT_END: AR-004-03 -->

![The AD account schema includes employeeID with type string. Check the remaining flags in its attribute settings before saving.](images/AR-004-03-account-schema.png)

The AD account schema includes employeeID with type string. Check the remaining flags in its attribute settings before saving.

<a id="2-configure-correlation-on-the-ad-source"></a>

### 4. Configure account correlation

1. Open **Admin > Connections > Sources > your AD source > Account Management > Account Correlation**.
2. Record the current account-correlation configuration.
3. Configure the course correlation pair:

| Field | Value |
|---|---|
| Identity Attribute | Employee Number (`identificationNumber`) |
| Comparison shown between the fields | Equals (fixed; no operator dropdown) |
| Account Attribute | employeeID |

4. Place this criterion first. Review remaining criteria: they are alternative matches, not conditions that must all pass. Retain criteria appropriate for this source and record their order.
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

<!-- AUTHOR_SCREENSHOT_START: AR-004-04 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-004-04-correlation.png`
>
> **Show:** the saved Account Correlation configuration.

<!-- AUTHOR_SCREENSHOT_END: AR-004-04 -->

![The first criterion compares Employee Number with employeeID. The recommendation refresh shows Error; that is separate from the configured criterion. Save and reopen the criterion, inspect any lower fallback rows, and verify the aggregation result.](images/AR-004-04-correlation.png)

The first criterion compares Employee Number with employeeID. The recommendation refresh shows Error; that is separate from the configured criterion. Save and reopen the criterion, inspect any lower fallback rows, and verify the aggregation result.

<a id="if-you-stopped-midway-or-want-to-repeat-this-lab"></a>

### 5. Run an unoptimized AD account aggregation

Use [AGGREGATION.md](AGGREGATION.md) to run an unoptimized AD account aggregation so the newly added `employeeID` schema attribute is read from the existing account.

The API procedure requires Postman and an authorized administrator API token. Use the recorded source ID, not the source name. Wait for the job to complete before continuing.

**Check:** The aggregation completes successfully and Lucas's imported AD account shows `employeeID = E012`.

<!-- AUTHOR_SCREENSHOT_START: AR-004-05 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-004-05-aggregation.png`
>
> **Show:** Postman request body and 202 Accepted response; submission only.

<!-- AUTHOR_SCREENSHOT_END: AR-004-05 -->

<!-- AUTHOR_SCREENSHOT_START: AR-004-06 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-004-07-aggregation-history.png`
>
> **Show:** AR-004-05-aggregation.png. Capture the Postman request and response. Also capture the completed job separately as AR-004-07-aggregation-history.png.

<!-- AUTHOR_SCREENSHOT_END: AR-004-06 -->

![Postman submits disableOptimization=true and receives 202 Accepted. This confirms submission only. Check the completed job in Aggregation History before continuing.](images/AR-004-05-aggregation.png)

Postman submits disableOptimization=true and receives 202 Accepted. This confirms submission only. Check the completed job in Aggregation History before continuing.

If Lucas was already linked correctly, retain that link. Record that you verified the existing association; an unchanged link alone does not prove which criterion originally matched it.

<a id="3-reexamine-the-imported-account"></a>

### 6. Verify the account link

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

<!-- AUTHOR_SCREENSHOT_START: AR-004-07 -->

> **Author: Capture screenshot**
>
> **Filename:** `AR-004-06-linked-account.png`
>
> **Show:** Lucas's identity with the linked AD account.

<!-- AUTHOR_SCREENSHOT_END: AR-004-07 -->

![Lucas retains Acme HR and has one account on the course AD source. This tenant also lists an IdentityNow account; count accounts on the selected AD source rather than requiring two total rows.](images/AR-004-06-linked-account.png)

Lucas retains Acme HR and has one account on the course AD source. This tenant also lists an IdentityNow account; count accounts on the selected AD source rather than requiring two total rows.

## Check the result

### What you will finish with

| Item | Expected result |
|---|---|
| ISC identity attribute | `identificationNumber = E012` |
| AD account attribute | `employeeID = E012` |
| Correlation pair | `identificationNumber` = `employeeID` |
| Lucas AD account | Linked to `acme.e012` |

---

### Final verification

- [ ] Lucas's ISC Employee Number is E012.
- [ ] Lucas's AD employeeID is E012.
- [ ] employeeID exists in the AD account schema.
- [ ] Account Correlation matches `identificationNumber` to `employeeID`.
- [ ] The full aggregation completed successfully.
- [ ] The imported AD account contains employeeID E012.
- [ ] Lucas's AD account is linked to `acme.e012`.
- [ ] No duplicate Lucas identity or AD account was created.

## Finish

<a id="what-you-should-leave-in-place"></a>

### Leave this in place

Keep:

- `employeeID = E012` on Lucas's AD account.
- `employeeID` in the AD account schema.
- The saved account-correlation criterion.
- Lucas's existing AD account linked to his ISC identity.

Next: **[AR-005: Configure AD Account Creation](../AR-005/README.md)**

[Previous: AR-003](../AR-003/README.md) · [Lab index](../../README.md)
