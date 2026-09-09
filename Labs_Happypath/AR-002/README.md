# AR-002 — Resolve the Manager Hierarchy

**Level:** Beginner

## Goal

Use the manager reference already present in Acme HR to resolve ISC manager relationships for the 24 Acme identities.

By the end of this lab:

```text
Lucas Brown (E012)
        ↓ reports to
Daniel Brooks (E003)
        ↓ reports to
Morgan Reed (E001)
```

Morgan is the hierarchy root and has no manager.

Use the [Module 1 configuration record](../../M01-STATE.md) for actual environment values and the required retained state.

## Session for this lab

Use your ISC administrator session.

## Prerequisites

Complete [AR-001](../AR-001/README.md).

You should already have:

- Acme HR with 24 accounts.
- Acme Employees with 24 identities.
- `identificationNumber` mapped to Acme HR `employeeNumber`.
- Lucas Brown as `acme.e012` / E012.

Keep your [evidence journal](EVIDENCE.md) open.

## What you will finish with

| Employee | Expected manager |
|---|---|
| Lucas Brown — E012 | Daniel Brooks — E003 |
| Daniel Brooks — E003 | Morgan Reed — E001 |
| Morgan Reed — E001 | No manager |

The original 24-person dataset contains **23 manager relationships and one root**.

---

## 1. Understand the matching values

1. Open **Admin > Connections > Sources > Acme HR > Account Management > Accounts**.
2. Open `acme.e012`.
3. Confirm:

| Attribute | Value |
|---|---|
| employeeNumber | E012 |
| managerEmployeeNumber | E003 |

4. Open **Admin > Identity Management > Identities**.
5. Search for `acme.e003` and open Daniel Brooks.
6. Confirm Daniel's **Identification Number** is `E003`.

The relationship is:

```text
Lucas HR account: managerEmployeeNumber = E003
                                  │
                                  └── matches ──> Daniel identity: identificationNumber = E003

Result: Lucas's Manager = Daniel Brooks
```

**Check:** Lucas's manager reference is `E003`, and Daniel's identification number is also `E003`.

## 2. Map Manager Name

1. Open **Admin > Identity Management > Identity Profiles > Acme Employees**.
2. Open **Mappings**.
3. Locate **Manager Name**.
4. Configure:

| Field | Value |
|---|---|
| Source | Acme HR |
| Attribute | managerEmployeeNumber |
| Transform | None |

5. Confirm **Identification Number** still maps to:

| Field | Value |
|---|---|
| Source | Acme HR |
| Attribute | employeeNumber |

6. Save the mappings.

Reference: [Identity-profile mappings](https://documentation.sailpoint.com/saas/help/setup/identity_profiles.html)

**Check:** Manager Name reads `managerEmployeeNumber`, while Identification Number reads `employeeNumber`.

**Screenshot:** Save `AR-002-01-identity-mappings.png`. Capture both mappings.

## 3. Configure Manager Correlation

1. Open **Admin > Connections > Sources > Acme HR**.
2. Open **Account Management > Account Correlation**.
3. Find **Manager Correlation**.
4. Configure:

| Manager Correlation field | Value |
|---|---|
| Identity Attribute | Identification Number (`identificationNumber`) |
| Account Attribute | managerEmployeeNumber |

5. Save the configuration.

Reference: [Manager correlation](https://documentation.sailpoint.com/saas/help/sources/manager_correlation.html)

The direction is:

```text
Employee's HR account
managerEmployeeNumber
        ↓
matches
        ↓
Manager's ISC identity
identificationNumber
```

**Check:** The saved configuration compares `managerEmployeeNumber` from the employee HR account with `identificationNumber` on the manager identity.

**Screenshot:** Save `AR-002-02-manager-correlation.png`. Capture the Manager Correlation settings.

## 4. Apply changes and process identities

1. Return to **Acme Employees**.
2. Select **Apply Changes**.
3. Open **Admin > Dashboard > Monitor**.
4. Wait for identity processing to complete.
5. Do not start another processing job while one is still running.

Reference: [Identity processing](https://documentation.sailpoint.com/saas/help/setup/identity_processing.html)

**Check:** Processing completes without unresolved identity errors.

## 5. Verify Lucas → Daniel → Morgan

### Lucas

1. Open **Admin > Identity Management > Identities**.
2. Search for `acme.e012`.
3. Open Lucas Brown.
4. Confirm **Manager = Daniel Brooks**.

### Daniel

1. Search for `acme.e003`.
2. Open Daniel Brooks.
3. Confirm **Manager = Morgan Reed**.

### Morgan

1. Search for `acme.e001`.
2. Open Morgan Reed.
3. Confirm **Manager is blank / no manager**.

**Check:** The hierarchy is:

```text
Morgan Reed
   └── Daniel Brooks
          └── Lucas Brown
```

**Screenshot:** Save `AR-002-03-manager-hierarchy.png`. Capture Lucas with Daniel as manager, Daniel with Morgan as manager, and Morgan with no manager.

## 6. Verify the full hierarchy

Use the table below to validate the complete Acme population.

| Expected manager | Employee IDs |
|---|---|
| Morgan Reed — E001 | E002, E003, E004, E005, E006, E007 |
| Priya Shah — E002 | E008, E009, E010, E024 |
| Daniel Brooks — E003 | E011, E012, E013 |
| Elena Cruz — E004 | E014, E015 |
| Marcus Lee — E005 | E016, E017 |
| Ava Chen — E006 | E018, E019, E020 |
| Noah Williams — E007 | E021, E022, E023 |
| No manager | E001 |

Open every employee identity listed in the table and compare its Manager with the expected manager. Record each relationship in your journal. Do not infer all 23 matches from the three sample identities.

**Check:** Morgan is the only intended root, and no identity is its own manager.

## Try it yourself

Find James (`acme.e014`) and follow his Manager link. Confirm Elena (`acme.e004`), then confirm Elena reports to Morgan. Record the usernames; leave the manager data unchanged.

Write these answers in your [journal](EVIDENCE.md):

1. Why does Lucas’s E003 manager reference match Daniel rather than Lucas?
2. What proves Morgan is the only root?

## If a check does not match

If a manager differs, compare the employee’s stored managerEmployeeNumber with the intended manager’s identificationNumber, then inspect saved mappings and completed processing. Do not substitute display names for employee IDs.

## Final verification

- [ ] The independent check and both explanations are recorded.
- [ ] Manager Name maps to `Acme HR > managerEmployeeNumber`.
- [ ] Identification Number maps to `Acme HR > employeeNumber`.
- [ ] Manager Correlation uses `identificationNumber` as Identity Attribute.
- [ ] Manager Correlation uses `managerEmployeeNumber` as Account Attribute.
- [ ] Identity processing completed successfully.
- [ ] Lucas resolves to Daniel.
- [ ] Daniel resolves to Morgan.
- [ ] Morgan has no manager.
- [ ] All 23 manager relationships match the table.
- [ ] Acme HR still contains 24 accounts.
- [ ] Acme Employees still contains 24 identities.

## Leave this in place

Keep the manager mapping and manager-correlation configuration. These relationships are required later for manager-based Access Request approvals.

## Screenshots to capture

Capture results after the checks above. Hide passwords, tokens, invitation links and private mailbox details. Use additional images when all required fields do not fit.

| Filename | Evidence |
|---|---|
| `AR-002-01-identity-mappings.png` | Capture both mappings. |
| `AR-002-02-manager-correlation.png` | Capture the Manager Correlation settings. |
| `AR-002-03-manager-hierarchy.png` | Capture Lucas with Daniel as manager, Daniel with Morgan as manager, and Morgan with no manager. |

Next: **[AR-003 — Prepare and Aggregate the AD Lab](../AR-003/README.md)**

[Previous: AR-001](../AR-001/README.md) · [Labs Home](../README.md)
