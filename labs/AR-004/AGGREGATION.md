# Reexamine existing AD accounts

### Get an API access token

If you already have a working admin API session in Postman, reuse it and continue to the aggregation request.

1. In ISC, open your user menu and select **Preferences > Personal Access Tokens > New Token**. Create a token named `Acme lab aggregation`. Store its Client ID and Secret privately.
2. In Postman, create a **POST** request to `https://<tenant>.api.identitynow.com/oauth/token`. Replace `<tenant>` with your tenant name; use your tenant's actual API base URL if different.
3. Under **Body > x-www-form-urlencoded**, enter `grant_type` = `client_credentials`, `client_id` = your Client ID, and `client_secret` = your Secret.
4. Send the request. A successful response contains `access_token`. Keep that value private for the next request.

The token inherits the generating user's permissions. [ISC API authentication](https://developer.sailpoint.com/docs/api/authentication/)

### Submit the aggregation

Before sending the request, open the AD source's **Aggregation Settings**. Record **Delta Aggregation**. If enabled, turn it off and save for this run so the connector reads the full configured scope. Restore the previous setting after the job completes. Keep account-deletion settings unchanged.

1. Create another Postman **POST** request:

```text
https://<tenant>.api.identitynow.com/beta/sources/<AD-source-ID>/load-accounts
```

2. Replace both placeholders. Use the **AD source ID** recorded in AR-003.
3. Under **Authorization**, select **Bearer Token** and enter the `access_token`.
4. Under **Body > form-data**, add a Text field named `disableOptimization` with value `true`. Do not attach the HR CSV. Let Postman generate the multipart Content-Type header.
5. Select **Send** once. Record the response status and returned task reference if present. A successful submission starts a job; it does not prove that the account matches are correct.
6. If rejected, inspect the response: 401 requires a valid token; 403 requires appropriate source-administration permissions. Recheck the AD source ID and multipart field for an invalid request. Do not grant requester identities administrative access to run this operation.
7. Return to the AD source's **Aggregation History** in ISC. Wait for the corresponding account aggregation to finish. Inspect its status and verify optimization was disabled. Resolve any warnings or errors before continuing.

This request and form field follow SailPoint's [documented unoptimized aggregation procedure](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html). Restore the Delta Aggregation setting you recorded before the request. Do not move accounts between OUs during this lab.

**Check:** The aggregation completed successfully. You are ready to inspect actual account ownership.


[Return to AR-004](README.md)
