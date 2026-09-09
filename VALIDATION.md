# Course validation record

Updated: 9 September 2026.

See the [content audit](CONTENT-AUDIT.md) for corrected defects and unresolved acceptance checks. Written coverage is not a course-wide quality certification.

## Authored material

- AR-001–090 have walkthroughs and evidence journals.
- AR-010–090 include numbered procedures, expected-result checks, recovery/cleanup instructions and screenshot capture lists.
- Three capstones provide execution steps and acceptance criteria.
- The lab desk and API/subscriber workbenches supply shared procedures and local examples.

## Live tenant status

AR-001 is learner-reported complete. Later labs have not been executed end to end in the learner's tenant during this writing pass. Screenshots for later exercises remain pending. Instructions are based on cited documentation and must be checked against the tenant's actual feature availability and observed results.

This record does not certify every lab as tenant-tested. Timed expiration, external integration, machine identity, SSO reauthentication and JIT exercises require their stated facilities and live observations. Local fixtures verify only the sample tools and test-handling logic.

## Local checks completed

- 90 lab pages and 90 evidence journals present.
- 816 local Markdown links resolve to existing files.
- 80 linked SailPoint documentation and community pages returned HTTP 200. Reachability does not establish correctness of every instruction.
- Ten local tool tests passed, including Decision-event evidence and sensitive-field exclusion: pagination, invalid response handling, fixture export, overwrite protection, subscriber authentication, decision responses, invalid modes, dynamic responses and asynchronous metadata handling. These tests use synthetic data and do not contact ISC.

The content-audit pass also checked the baseline CSV: 24 unique employee IDs/usernames, valid manager references, no manager cycles and the expected six-department counts. All fenced JSON examples parse.

## Before accepting a live lab

1. Confirm the required service, permissions and starting state.
2. Follow the steps with the named actors and actual local IDs.
3. Capture the expected result and negative/control case.
4. Verify native target state and cleanup.
5. Record discrepancies and correct the procedure before marking it passed.

Keep the execution ledger in the private evidence folder. Use columns: lab ID, date, tenant capability, result, request/activity IDs, screenshots, cleanup and remaining issue. The choices are Passed, Failed, Awaiting timed observation or Unavailable in this tenant.

[Coverage](COVERAGE.md) · [Course outline](README.md)

## Module 1 review, 9 September 2026

[Focused review](M01-REVIEW.md): revised parsing checks, manager-data practice, standard-account layout, API error guidance, mapping edits, batch aggregation, email/sign-in expectations and C01 explanations. Local links, fenced-code structure and newly linked documentation were checked. No additional tenant execution is claimed.

Module 1 now has the additional hands-on guidance pass described in [the module review](M01-REVIEW.md#hands-on-guidance-pass): starting states, comparisons, diagnosis tickets and solutions, resume/retained-state guidance, and screenshot reminders within the procedures. All nine journals include practice and ticket evidence fields. This is authored and locally checked material; live status above is unchanged.
