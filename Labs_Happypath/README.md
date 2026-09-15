# ISC Access Request Labs

Complete the labs in order. Keep the [Module 1 configuration record](../M01-STATE.md), the [lab desk](../LAB-DESK.md), and each lab’s journal beside you. Use actual tenant values wherever the instructions identify a placeholder. When a step says **find**, **locate**, **reopen**, or **follow** a request or provisioning activity, use the lab desk's exact [request/approval/account-activity lookup procedure](../LAB-DESK.md#find-a-specific-request-approval-or-account-activity) rather than scanning the tenant and guessing.

## Module 1 · Foundations

1. [AR-001 — Import Acme's HR Records](AR-001/README.md)
2. [AR-002 — Resolve the Manager Hierarchy](AR-002/README.md)
3. [AR-003 — Prepare and Aggregate the AD Lab](AR-003/README.md)
4. [AR-004 — Correlate Lucas's Existing AD Account](AR-004/README.md)
5. [AR-005 — Configure AD Account Creation](AR-005/README.md)
6. [AR-006 — Provision Your First AD Account](AR-006/README.md)
7. [AR-007 — Provision the Remaining Standard Accounts](AR-007/README.md)
8. [AR-008 — Prepare Requester and Reviewer Sessions](AR-008/README.md)
9. [AR-009 — Verify the Environment and Save C01](AR-009/README.md)

## Lab method

For each lab:

1. Confirm the prerequisites and starting state.
2. Follow the numbered steps in order.
3. Stop at every **Check** and confirm the expected result.
4. Capture the requested screenshots and evidence.
5. Complete the final verification before moving to the next lab.
6. Keep the stated configuration in place for the next exercise.

## Module 2 · First access requests

Keep the [request and target checks](../M02-CHECKS.md) open when preparing new sessions or verifying native AD results.

10. [AR-010 · Make VPN access requestable](AR-010/README.md)
11. [AR-011 · Require a reviewer and a business reason](AR-011/README.md)
12. [AR-012 · Approve the first request and prove the AD change](AR-012/README.md)
13. [AR-013 · Deny a request and verify that access was not added](AR-013/README.md)
14. [AR-014 · Control VPN catalog availability](AR-014/README.md)
15. [AR-015 · Request and remove a two-group access profile](AR-015/README.md)

## Module 3 · Business access

Complete the [Module 3 starting checks](../M03-READINESS.md). Keep the existing accounts and baseline assignments throughout the grant/removal exercises.

16. [AR-016 · Bundle Finance reporting access](AR-016/README.md)
17. [AR-017 · Present Finance access through an application](AR-017/README.md)
18. [AR-018 · Offer the Finance Analyst role](AR-018/README.md)
19. [AR-019 · Compare entitlement, profile and role requests](AR-019/README.md)
20. [AR-020 · Manage the profiles offered by Finance Services](AR-020/README.md)
21. [AR-021 · Deliver HR Services from a business requirement](AR-021/README.md)

## Module 4 · Visibility and accounts

Complete the [Module 4 starting checks](../M04-READINESS.md). Record original permissions before changing them and keep both account identifiers visible during the Sofia exercises.

22. [AR-022 · Restrict Finance catalog visibility](AR-022/README.md)
23. [AR-023 · Test who can request for another person](AR-023/README.md)
24. [AR-024 · Separate requester visibility from recipient eligibility](AR-024/README.md)
25. [AR-025 · Follow a department change into the catalog](AR-025/README.md)
26. [AR-026 · Select the correct account for Sofia's access](AR-026/README.md)
27. [AR-027 · Verify visibility and account targeting](AR-027/README.md)

## Module 5 · Approval routing

Continue from AR-027 with the existing accounts and access configuration. Each lab identifies its requester and reviewer sessions.

28. [AR-028 · Compare manager, item-owner and source-owner routing](AR-028/README.md)
29. [AR-029 · Require manager review followed by Security](AR-029/README.md)
30. [AR-030 · Reassign a review and investigate an unresolved reviewer](AR-030/README.md)
31. [AR-031 · Compare consolidated review and self-approval handling](AR-031/README.md)
32. [AR-032 · Observe reminders, escalation and approval expiration](AR-032/README.md)
33. [AR-033 · Verify the approval setup and save C05](AR-033/README.md)

## Module 6 · Request forms

Continue from C05. You will create the form in AR-034, add and test its questions, then save C06 after the final grant and removal.

34. [AR-034 · Attach a native form to Production Support](AR-034/README.md)
35. [AR-035 · Test required and optional form answers](AR-035/README.md)
36. [AR-036 · Show an extra field for Production work](AR-036/README.md)
37. [AR-037 · Trace form answers through a multi-item request](AR-037/README.md)
38. [AR-038 · Repair a missing request form](AR-038/README.md)
39. [AR-039 · Verify the Production Support form and save C06](AR-039/README.md)

## Module 7 · Temporary access and removal

Keep the completed form and approval configuration. Start with date controls when available, then compare removal by assignment type, overlapping access and Sofia’s two accounts.

40. [AR-040 · Enforce an end date and maximum duration](AR-040/README.md)
41. [AR-041 · Observe scheduled access and compare date-change reviews](AR-041/README.md)
42. [AR-042 · Request removal at the correct access level](AR-042/README.md)
43. [AR-043 · Observe removal across overlapping standalone profiles](AR-043/README.md)
44. [AR-044 · Compare role-required access with requested access](AR-044/README.md)
45. [AR-045 · Remove access from one account and save C07](AR-045/README.md)

## Module 8 — Provisioning and reconciliation

Trace a working request, create Taylor’s missing AD account, repair a disposable-group fault and follow manual AD changes into ISC. Keep each lab’s cleanup complete before the next test.

46. [AR-046 — Trace a request from approval to the AD result](AR-046/README.md)
47. [AR-047 — Create Taylor’s AD account through an access request](AR-047/README.md)
48. [AR-048 — Diagnose and repair a group-specific AD permission failure](AR-048/README.md)
49. [AR-049 — Repair a profile after its AD group reference changes](AR-049/README.md)
50. [AR-050 — Reconcile AD and ISC after a manual group change](AR-050/README.md)
51. [AR-051 — Resolve a fulfillment incident and save C08](AR-051/README.md)

## Module 9 · Access Request APIs

Prepare the callers, submit and trace a request, compare identifiers, decide and cancel fresh controls, then produce a read-only report. Keep the same tenant objects from C08.

52. [AR-052 · Authenticate and verify the API caller](AR-052/README.md)
53. [AR-053 · Submit an API request and verify fulfillment](AR-053/README.md)
54. [AR-054 · Map request, approval and activity identifiers](AR-054/README.md)
55. [AR-055 · Approve, remove, deny and cancel through the API](AR-055/README.md)
56. [AR-056 · Handle duplicate submissions and uncertain responses](AR-056/README.md)
57. [AR-057 · Produce a repeatable request report and save C09](AR-057/README.md)
