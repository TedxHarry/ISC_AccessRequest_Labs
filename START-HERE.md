# Start Here

Begin with the Guided Labs. Each lab tells you who to sign in as, where to go, what to change, what result to expect, and what to leave in place.

## 1. Check your environment

You need an ISC training tenant and an isolated AD environment with the connector infrastructure already installed. Follow the [preparation checklist](M01-READINESS.md) to confirm access and tools. You will create the Acme course objects in the setup labs.

| Your starting point | Begin here |
|---|---|
| Infrastructure is ready, but the Acme course objects do not exist | [AR-001: import the HR records](guided-labs/AR-001/README.md) |
| The Acme identities, accounts, baseline access and sessions are already prepared | [AR-009: verify the exact course environment](guided-labs/AR-009/README.md). Complete any missing setup before AR-010. |
| You paused partway through the course | Reopen your current lab and compare its **Before you start** and **Finish** sections with the current environment. Keep later legitimate objects. |

An unrelated working ISC tenant is not automatically the prepared Acme environment.

## 2. Follow the everyday-work sequence

Complete setup AR-001 to AR-009, then AR-010 to AR-051, then daily operations AR-070 to AR-075. Use the [Guided Lab map](guided-labs/README.md) to continue. The map separates feature-dependent exercises and automation extensions.

AR-012 completes your first approved request and verifies the AD result. You will then practice denial, packaged access, visibility, approvals, removal and support work.

## 3. Work through one lab at a time

1. Read **Before you start** and confirm the named user and starting state.
2. Follow the numbered actions. Use the actual values from your environment where a placeholder is shown.
3. Stop at each **Check** and compare the result before continuing.
4. Complete **Check the result** and leave the configuration described in **Finish**.

Keep a request ID or original setting only when you need it for a later action or restoration. There is no journal to fill in. You do not need to write explanations or submit screenshots to finish a regular lab.

If a result differs, open the separate [Troubleshooting Practice](troubleshooting/README.md) guide for that module. The [Reference desk](REFERENCE.md) explains how to locate unfamiliar values and request activity.

## 4. Return for independent practice

After the guided labs, use [Try It Yourself](try-it-yourself/README.md) for variations with less guidance, then attempt the [capstones](guided-labs/README.md#capstones). Use [Troubleshooting Practice](troubleshooting/README.md) to work through the supplied incident cases.

You can then add the API, workflow, event-subscriber and specialist labs that match your available features and work. Each extension names its own starting requirements.
