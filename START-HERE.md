# Start Here

Build the environment once, then complete the labs in order. Choose the beginner path to follow the working scenario, or the engineering path for the same guided steps with additional troubleshooting practice. Both paths use the same lab environment.

## Your learning path

| Stage | Modules | What you are building |
|---|---|---|
| **Foundation** | M01–M02 | Reliable lab data and your first verified access request |
| **Access design** | M03–M04 | Access profiles, roles, applications, visibility, and requests for others |
| **Request engineering** | M05–M07 | Approval routing, forms, temporary access, and removal behavior |
| **Troubleshooting** | M08 | A repeatable method for approved-but-missing-access incidents |
| **Automation** | M09–M11 | APIs, workflows, and event-trigger integrations |
| **Operations** | M12 + Capstones | Production-style tickets, changes, investigations, and independent delivery |
| **Policy and disconnected systems** | M13 | SoD warning/enforcement and manual fulfillment with reconciliation |
| **Additional capabilities** | M14 | JIT, reauthentication, machine requests, permissions, delegation, model changes and callbacks |

Use the [coverage and prerequisite matrix](COVERAGE.md) to choose tracks available in your tenant. Keep the [lab desk](LAB-DESK.md) open while following the walkthroughs. Each lab ends with the screenshots to capture and links to its evidence result checks.

## How to complete each lab

If a step asks you to record an unfamiliar value, open [Find the values a lab asks you to record](LAB-VALUES.md). It covers domain controllers, directory paths, UPN references, object identifiers and the difference between an entitlement ID and its native value.

1. **Before you start:** Confirm the accounts, permissions and files needed for this lab.
2. **Follow the steps:** Use the named session and values. Capture screenshots where prompted.
3. **Check the result:** Compare what you see with the expected result. Use the nearby troubleshooting guidance if it differs.
4. **Finish:** Keep or restore the configuration specified for the next lab.

Engineering labs put their additional investigation after the working walkthrough. Complete the working steps first, then use that evidence to diagnose the supplied case.

## Lab types

| Type | What it means | How to approach it |
|---|---|---|
| **Build** | Configure a working solution | Follow the requirement, implement it, then prove the outcome |
| **Practice** | Compare behavior or use an engineering tool | Record what changed and explain the difference |
| **Investigate** | Diagnose a deliberately broken or realistic scenario | Classify the failing layer before making changes |
| **Check** | Complete a practical assessment with less guidance | Treat it like an engineer-owned task or support ticket |

## Check the result

At each expected-result check, compare the actual user, item, reviewer and target state with the walkthrough. An approval, a completed account operation and AD membership are separate results.

Keep a request ID or original setting only when the next action or restoration needs it. Screenshots in the walkthrough help you recognize the right screen; you do not need a separate worksheet or a screenshot submission to complete the lab.

## Before Lab AR-001

Use the [Module 1 readiness checklist](M01-READINESS.md) to confirm the AD administration tools, provisioning prerequisites and expected counts.

Complete these items first:

- Read the [Lab Environment](LAB-ENVIRONMENT.md) page.
- Confirm you have access to the ISC training tenant and isolated AD lab required by the course.
- Download the course datasets when the lab asks for them rather than editing the repository copy.
- Create a place for your evidence screenshots.
- Use dedicated requester and reviewer sessions when a lab tests requester-facing behavior.

Begin AR-001: **[Beginner walkthrough](Labs_Happypath/AR-001/README.md)** or **[Engineering lab](labs/AR-001/README.md)**. When switching paths, continue from your current lab and keep its required configuration.

## When a lab does not match your tenant

ISC capabilities and UI labels can change. Do not blindly substitute an unrelated control just to finish a step.

1. Compare the lab requirement with the current official SailPoint documentation linked in the lab.
2. Confirm whether the capability is enabled in your tenant and whether your account has the required permissions.
3. Record the actual UI or API behavior you see.
4. If the documented workflow has changed, update the lab notes before continuing so your evidence remains reproducible.

**Note:** The goal is engineering confidence. A useful lab teaches you how to prove the current behavior, including when the product does not behave as expected.
