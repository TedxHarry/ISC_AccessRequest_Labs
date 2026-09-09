# Start Here

This course is designed to be completed as an engineering lab path, not read like a textbook. Build the environment once, complete the labs in order, capture evidence, and use the investigation exercises to learn how to diagnose failures instead of only following happy-path steps.

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

Use the [coverage and prerequisite matrix](COVERAGE.md) to choose tracks available in your tenant. Keep the [lab desk](LAB-DESK.md) open while following the walkthroughs. Each lab ends with the screenshots to capture and links to its evidence journal.

## How to complete each lab

1. **Read the assignment first.** Understand the business outcome before touching the tenant.
2. **Predict the result.** Write down what you expect ISC and the target system to do.
3. **Build or investigate.** Follow the lab steps, but stop whenever a Check does not match.
4. **Verify every layer.** Do not treat a successful request or aggregation message as final proof.
5. **Capture evidence.** Save the required screenshots, IDs, target state, and observations.
6. **Explain the result.** You should be able to describe why the behavior occurred, not only reproduce it.
7. **Restore the baseline.** Failure-injection labs should finish in a known good state before you continue.

**Check:** Do not move to the next lab because a button returned Success. Move on when the stated verification result and required evidence match the lab.

## Lab types

| Type | What it means | How to approach it |
|---|---|---|
| **Build** | Configure a working solution | Follow the requirement, implement it, then prove the outcome |
| **Practice** | Compare behavior or use an engineering tool | Record what changed and explain the difference |
| **Investigate** | Diagnose a deliberately broken or realistic scenario | Classify the failing layer before making changes |
| **Check** | Complete a practical assessment with less guidance | Treat it like an engineer-owned task or support ticket |

## Evidence standard

For important labs, keep enough evidence that another engineer could understand what happened without watching you perform the exercise.

Capture, where relevant:

- the requester and requested-for identity
- the requested access object
- request or activity identifiers
- expected and actual reviewer
- approval or denial result
- provisioning/account-activity result
- target-system state such as AD group membership
- relevant identity/account attributes
- timestamps for sequence-sensitive investigations
- the root cause and the change that resolved it

**Important:** Screenshots are evidence, not the explanation. Record the reasoning that connects the request, approval, provisioning, aggregation, and target state.

## Before Lab AR-001

Use the [Module 1 readiness checklist](M01-READINESS.md) to confirm the AD administration tools, provisioning prerequisites and expected counts.

Complete these items first:

- Read the [Lab Environment](LAB-ENVIRONMENT.md) page.
- Confirm you have access to the ISC training tenant and isolated AD lab required by the course.
- Download the course datasets when the lab asks for them rather than editing the repository copy.
- Create a place for your evidence journal and screenshots.
- Use dedicated requester and reviewer sessions when a lab tests requester-facing behavior.

Then begin with **[AR-001 — Import Acme's HR Records](labs/AR-001/README.md)**.

## When a lab does not match your tenant

ISC capabilities and UI labels can change. Do not blindly substitute an unrelated control just to finish a step.

1. Compare the lab requirement with the current official SailPoint documentation linked in the lab.
2. Confirm whether the capability is enabled in your tenant and whether your account has the required permissions.
3. Record the actual UI or API behavior you see.
4. If the documented workflow has changed, update the lab notes before continuing so your evidence remains reproducible.

**Note:** The goal is engineering confidence. A useful lab teaches you how to prove the current behavior, including when the product does not behave as expected.
