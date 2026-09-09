# Run a Full AD Account Aggregation

Use this procedure after adding `employeeID` to the AD account schema.

## 1. Record the current aggregation setting

1. Open **Admin > Connections > Sources > your AD source**.
2. Open **Aggregation Settings**.
3. Record the current **Delta Aggregation** setting.
4. If Delta Aggregation is enabled, turn it off temporarily and save.

Keep account-deletion settings unchanged.

## 2. Get an API access token

If you already have a working administrator API session in Postman, reuse it.

Otherwise:

1. In ISC, open **Preferences > Personal Access Tokens**.
2. Create a token for the lab.
3. Store the Client ID and Secret privately.
4. In Postman, create a **POST** request to:

```text
https://<tenant>.api.identitynow.com/oauth/token
```

5. Under **Body > x-www-form-urlencoded**, enter:

| Key | Value |
|---|---|
| grant_type | client_credentials |
| client_id | your Client ID |
| client_secret | your Client Secret |

6. Send the request and copy the returned `access_token`.

Reference: [ISC API authentication](https://developer.sailpoint.com/docs/api/authentication/)

## 3. Start the unoptimized aggregation

1. Create a new **POST** request:

```text
https://<tenant>.api.identitynow.com/beta/sources/<AD-source-ID>/load-accounts
```

2. Replace `<tenant>` and `<AD-source-ID>` with your values.
3. Under **Authorization**, select **Bearer Token** and enter the access token.
4. Under **Body > form-data**, add:

| Key | Type | Value |
|---|---|---|
| disableOptimization | Text | true |

5. Send the request once.
6. Record the HTTP status and returned task reference if present. An accepted response starts a job; it is not completion. For 401, check token validity; for 403, check permissions; for 400, inspect the body format and source ID. Do not resubmit while a job is running. Let Postman supply the multipart Content-Type boundary.

Reference: [Loading account data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html)

## 4. Verify completion

1. Return to the AD source in ISC.
2. Open **Aggregation History**.
3. Find the aggregation you just started.
4. Wait until it finishes.
5. Confirm the status is successful.
6. Open Lucas's imported AD account and confirm `employeeID = E012`.

## 5. Restore the setting

If you changed **Delta Aggregation** in Step 1, restore its original value and save.

If you created a temporary Personal Access Token only for this procedure, revoke it after you finish.

**Check:** The aggregation completed successfully, Lucas's imported account contains `employeeID = E012`, and the original Delta Aggregation setting is restored.

[Return to AR-004](README.md)
