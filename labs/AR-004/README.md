# AR-004 · Correlate Lucas's Existing AD Account

**Prerequisites:** Complete [AR-003](../AR-003/README.md). Lucas exists in AD and ISC has imported his account. Have your administrator session and Postman available.

## If this configuration already exists

Confirm Lucas’s existing HR and AD links and E012 match. Do not unlink him to manufacture an unmatched account. Read the configuration sections to compare your saved settings, but skip creation actions for objects already verified. Start the additional practice at [Check the same person through two sources](#check-the-same-person-through-two-sources). Capture current results and label earlier creation activity as historical.

Use the [Module 1 configuration record](../../M01-STATE.md) for actual environment values and the required retained state.

## Before you open the settings

Use your ISC administrator session, AD Users and Computers and an administrator-owned REST client session.

Lucas has one AD account imported in AR-003 and one Acme identity. Record whether the imported account is uncorrelated, correctly linked or incorrectly linked before changing anything.

Keep the actual source ID, Lucas’s account DN and the original correlation criteria in your journal. Do not use a display name as the matching identifier.

## What you’ll do

Lucas already has an AD account. Your job here is to connect that account to the right ISC identity. Follow the employee number through both records; a matching display name is not enough.

## 1. Verify both employee identifiers

1. In ISC, open **Admin > Identity Management > Identity Profiles > Acme Employees > Mappings**. Confirm **Identification Number (`identificationNumber`)** maps to **Acme HR > employeeNumber**. If changed, save, select **Apply Changes**, and wait for processing in **Admin > Dashboard > Monitor**.
2. Open Lucas's identity (`acme.e012`). Verify `identificationNumber = E012`. Check that no other identity uses E012 as its employee identifier.
3. In **Active Directory Users and Computers**, select **View > Advanced Features**. Open Lucas directly from his OU, then **Properties > Attribute Editor**.
4. Set `employeeID` to `E012`, select **Apply**, and reopen the attribute to verify it. Record his DN. Do not change the separate AD employeeNumber attribute.

**Check:** The same employee identifier exists on Lucas's identity and AD account.

**Screenshot reminder:** Save `AR-004-01-identity-number.png`, `AR-004-02-ad-employee-id.png`, `AR-004-03-schema.png`. Use the matching descriptions in the screenshot checklist at the end.

## 2. Configure correlation on the AD source

1. Open **Admin > Connections > Sources > your AD source > Account Management > Account Schema**.
2. Find `employeeID`. If absent, select **Add New Attribute**, use that exact name and type **string**, leave Multi-Valued and Entitlement unselected, and save. Preserve Account ID and Account Name selections. [Account schema](https://documentation.sailpoint.com/saas/help/accounts/schema.html)
3. Open **Account Correlation**. Record existing criteria before changing them.
4. Add **Identity Attribute: Identification Number (`identificationNumber`)**, **Operation: Equals**, **Account Attribute: employeeID**. Place this pair first.
5. On a course-only source, use this single criterion. If the source serves other lab users, preserve necessary fallback criteria and check they cannot match Lucas to someone else. Save. Leave Manager Correlation unchanged.

Criteria are alternatives, rather than conditions that all need to match. [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html)

**Screenshot reminder:** Save `AR-004-04-correlation.png`. Use the matching descriptions in the screenshot checklist at the end.

## 3. Reexamine the imported account

Follow the [aggregation walkthrough](AGGREGATION.md) to run the AD aggregation with optimization disabled. It includes authentication and the request body. Restore the original delta setting afterward.

**Check:** The job completes without unresolved errors. Inspect the imported Lucas account and confirm employeeID is E012 before checking its identity link.

**Screenshot reminder:** Save `AR-004-05-aggregation.png`. Use the matching descriptions in the screenshot checklist at the end.

## 4. Check which identity owns this account

1. Open **Admin > Identity Management > Identities > acme.e012 > Accounts**.
2. Find the account on your AD source. Compare its DN and sAMAccountName with AD.
3. Confirm Lucas retains his Acme HR account and has exactly one course AD account.
4. Check the AD source's **Uncorrelated Accounts** for Lucas. Record whether he was previously correlated and whether that link was correct.

If the identifier is blank, check the schema, AD value, and aggregation. If a previous manual link points to another person, record it and follow the [manual-correlation correction guidance](https://documentation.sailpoint.com/saas/help/accounts/correlation.html). Do not delete the identity or AD user to repair a link.

**Screenshot reminder:** Save `AR-004-06-linked-account.png`. Use the matching descriptions in the screenshot checklist at the end.

## Check the same person through two sources

1. Open Lucas’s identity and its Acme HR account. Record HR Account ID E012.
2. Open the linked AD account and record its actual Account ID, DN and employeeID.
3. Compare the Account IDs. They identify records on different sources and need not be identical. The matching pair in this lab is identity identificationNumber and AD employeeID.
4. Reopen the correlation rule and point to that exact pair. Keep both account links unchanged.

This comparison is repeatable after the link already exists. It does not require deliberately assigning Lucas to the wrong person.

## Your ticket: AD shows E012, but the imported account has no employeeID.

The supplied case says the identity identificationNumber is E012, while the imported AD account attribute is missing.

Inspect where the AD account schema is configured and identify what to check before editing correlation rules.

Write your diagnosis and the evidence you would accept before opening the solution. If you use the supplied case, label it a ticket exercise; do not record it as a tenant failure you observed.

<details>
<summary>Compare your diagnosis with the mentor’s solution</summary>

Check the saved AD schema includes employeeID, compare the actual AD account and source scope, then run the documented unoptimized aggregation. Inspect the imported value before the identity link. A creation mapping alone does not add an aggregation attribute. Do not delete the account or create another identity.

</details>

## If you stopped midway or want to repeat this lab

If interrupted after the API call, inspect its aggregation job before sending another call. Verify the stored employeeID, then the linked identity. Keep the working correlation criterion and E012 on Lucas. Restore the original Delta Aggregation setting. On repeat, a correct existing link passes the ownership check; do not unlink it merely to manufacture an uncorrelated case. An incorrect manual link requires the documented correction procedure, not identity deletion.

## What you should leave in place

| Item | State before you continue |
|---|---|
| Lucas’s records | E012 in AD employeeID and identity identificationNumber |
| Account ownership | One course AD account linked to Lucas’s existing identity |
| Other employees | No accounts created by this correlation exercise |

## Completion checklist

- [ ] The practice/comparison and your ticket diagnosis are recorded in the journal.
- [ ] Any temporary change is restored and the retained state matches the next lab.
- [ ] Lucas has employeeID E012 in AD and identificationNumber E012 in ISC.
- [ ] The saved AD correlation pair matches those attributes.
- [ ] His imported AD account belongs to the correct identity.
- [ ] The course still has 24 HR identities and only Lucas's standard AD account.

## Screenshots to capture

| Filename | What to show |
|---|---|
| AR-004-01-identity-number.png | Lucas's identity employee identifier |
| AR-004-02-ad-employee-id.png | AD employeeID E012 |
| AR-004-03-schema.png | employeeID in the source schema |
| AR-004-04-correlation.png | Saved correlation pair and fallback order |
| AR-004-05-aggregation.png | Completed aggregation and optimization setting |
| AR-004-06-linked-account.png | Lucas's identity with its linked AD account |

Record actual values in the [journal](EVIDENCE.md).

[Previous: AR-003](../AR-003/README.md) · [Next: AR-005](../AR-005/README.md)