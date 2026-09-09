# AR-023 · Test who can request for another person

**Before you start:** AR-022. Prepare Daniel, Lucas, Liam and administrator sessions.

## Compare request authority

1. Record the existing **Admin > Global > System Settings > Feature Settings > Access Requests** request-on-behalf settings.
2. Enable requests on behalf of others and select **By Managers for their Team**. Save.
3. In Daniel's session, start a request for his direct report Lucas. Record whether Lucas is selectable. Check Liam, who reports to Priya, without submitting access for him.
4. In Lucas's session, inspect whether he can choose another recipient. Verify his manager relationships before interpreting the result.
5. Temporarily choose **By Everyone for Anyone**, save, and repeat the recipient-selection checks as Lucas. Record the difference.
6. Compare the administrator's catalog with Lucas's and Liam's. Do not use admin visibility as the acceptance test for segmentation.
7. Build a matrix of actor, recipient, setting and whether the request can be started. Cancel any unsent carts.

**Check:** You distinguish permission to choose a recipient from visibility of an access item. Manager mode covers direct reports, so an organizational hierarchy alone is not proof of request authority for every descendant.

**Leave for AR-024:** Everyone-for-anyone temporarily enabled. Retain the original setting for restoration after that exercise.

[Requests for others](https://documentation.sailpoint.com/saas/help/requests/requests_for_others.html)

## Screenshots to capture

1. Both request-on-behalf configurations.
2. Daniel's direct-report and non-report comparisons.
3. Completed actor/recipient matrix.

Record the results in your [evidence journal](EVIDENCE.md). Use the [lab desk](../../LAB-DESK.md) for the shared request, AD verification and removal procedures.

[Previous: AR-022](../AR-022/README.md) · [Course outline](../../README.md) · [Next: AR-024](../AR-024/README.md)
