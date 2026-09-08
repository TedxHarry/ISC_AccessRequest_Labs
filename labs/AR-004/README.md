# AR-004 · Correlate Lucas's Existing AD Account

**Prerequisites:** Complete [AR-003](../AR-003/README.md). Lucas exists in AD and ISC has imported his account. Have your administrator session and Postman available.

## Your assignment

Link Lucas's existing AD account to his Acme Employees identity. Keep the remaining employees without AD accounts; you will provision their accounts in AR-006 and AR-007.

## 1. Verify both employee identifiers

1. In ISC, open **Admin > Identity Management > Identity Profiles > Acme Employees > Mappings**. Confirm **Identification Number (`identificationNumber`)** maps to **Acme HR > employeeNumber**. If changed, save, select **Apply Changes**, and wait for processing in **Admin > Dashboard > Monitor**.
2. Open Lucas's identity (`acme.e012`). Verify `identificationNumber = E012`. Check that no other identity uses E012 as its employee identifier.
3. In **Active Directory Users and Computers**, select **View > Advanced Features**. Open Lucas directly from his OU, then **Properties > Attribute Editor**.
4. Set `employeeID` to `E012`, select **Apply**, and reopen the attribute to verify it. Record his DN. Do not change the separate AD employeeNumber attribute.

**Check:** The same employee identifier exists on Lucas's identity and AD account.

## 2. Configure correlation on the AD source

1. Open **Admin > Connections > Sources > your AD source > Account Management > Account Schema**.
2. Find `employeeID`. If absent, select **Add New Attribute**, use that exact name and type **string**, leave Multi-Valued and Entitlement unselected, and save. Preserve Account ID and Account Name selections. [Account schema](https://documentation.sailpoint.com/saas/help/accounts/schema.html)
3. Open **Account Correlation**. Record existing criteria before changing them.
4. Add **Identity Attribute: Identification Number (`identificationNumber`)**, **Operation: Equals**, **Account Attribute: employeeID**. Place this pair first.
5. On a course-only source, use this single criterion. If the source serves other lab users, preserve necessary fallback criteria and check they cannot match Lucas to someone else. Save. Leave Manager Correlation unchanged.

Criteria are alternatives, rather than conditions that all need to match. [Account correlation](https://documentation.sailpoint.com/saas/help/accounts/correlation.html)

## 3. Reexamine the imported account

Follow the [aggregation walkthrough](AGGREGATION.md) to run the AD aggregation with optimization disabled. It includes authentication and the request body. Restore the original delta setting afterward.

**Check:** The job completes without unresolved errors. Inspect the imported Lucas account and confirm employeeID is E012 before checking its identity link.

## 4. Verify the owner of the account

1. Open **Admin > Identity Management > Identities > acme.e012 > Accounts**.
2. Find the account on your AD source. Compare its DN and sAMAccountName with AD.
3. Confirm Lucas retains his Acme HR account and has exactly one course AD account.
4. Check the AD source's **Uncorrelated Accounts** for Lucas. Record whether he was previously correlated and whether that link was correct.

If the identifier is blank, check the schema, AD value, and aggregation. If a previous manual link points to another person, record it and follow the [manual-correlation correction guidance](https://documentation.sailpoint.com/saas/help/accounts/correlation.html). Do not delete the identity or AD user to repair a link.

## Completion checklist

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