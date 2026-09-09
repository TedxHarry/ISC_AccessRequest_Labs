# AR-052 · Authenticate and inspect Access Request APIs

**Before you start:** AR-051 and a REST client. Follow the [API workbench](../../API-WORKBENCH.md).

## Establish the caller and scope

1. Create a private client environment and obtain a token using the workbench's token procedure. Record the token owner's identity and assigned permissions without recording the secret.
2. Read that identity with the identity endpoint. Compare its ID with your manifest.
3. Read a known access profile and your own access-request status. Save the method, URL version and sanitized response status.
4. Remove the bearer token from one read-only request and send it once. Record the authentication failure, then restore the token.
5. Using an ordinary user's token, attempt a read requiring a different permission only when that user is genuinely unauthorized. Record the returned result; do not manufacture a 403 if the current operation permits the read.
6. Read the current access-request configuration with an authorized admin token. Inspect request-on-behalf and entitlement settings. Do not update configuration in this lab.
7. Compare an incorrect API path with the documented one on a read-only call. Distinguish an invalid route from a missing permission.

**Check:** Your notes identify caller, operation, permissions and API version for each result. You can distinguish authentication, authorization and route errors.

**Reset:** Remove test credentials from shared exports; retain only private local variables for the next lab.

[API authentication](https://developer.sailpoint.com/docs/api/authentication/), [API workbench](../../API-WORKBENCH.md)

## Screenshots to capture

1. Successful read with authorization value hidden.
2. Authentication/authorization or route error comparisons.
3. Caller and operation matrix without credentials.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-051](../AR-051/README.md) · [Course outline](../../README.md) · [Next: AR-053](../AR-053/README.md)
