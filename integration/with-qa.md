# Integration: champion-heart + qa

Use champion-heart above `qa` when the user needs bug-finding under pressure without drift into checklist theater.

## Mutation

Champion-heart changes `qa` behavior:

- focus on terminal failure, not exhaustive ritual
- identify the one defect with highest mission impact first
- verify reality contact before writing long reports
- compress findings until only mission-relevant signal remains

## Sequence

1. `entry/` decides if champion mode is needed
2. `champion-heart` defines terminal state and dominant constraint
3. `qa` executes test exploration
4. `coach` interrupts if report volume exceeds signal

## Concrete Example

Task: QA a payment flow before a release in 2 hours.

**Baseline (unmutated):**

```text
Ran 47 test cases. Found 12 issues:
- 3 UI alignment issues
- 2 copy typos
- 4 edge cases in non-critical flows
- 1 missing loading spinner
- 1 error message not localized
- 1 payment failure not retried on network error
```

Baseline produces volume. The one mission-critical defect is buried at the bottom.

**Champion-mutated:**

```text
terminal_state: payment flow completes or fails with clear user recovery path
dominant_constraint: 2-hour window, production traffic on payment path
dominant_defect: payment failure not retried on network error — user loses
  transaction silently, no recovery path shown
all other findings: deferred, non-blocking for this release window
```

Champion names the one defect that can kill the mission. Everything else waits.

## Common QA Delusions

| Delusion | Signal | Cut |
|---|---|---|
| Checklist theater | Running all test cases regardless of mission relevance | Define mission-critical path first. Test that first, always |
| Coverage vanity | Reporting high coverage while the real failure mode is untested | Ask: does this coverage include the path that would kill the mission? |
| Report inflation | Filing 20 issues when 1 is blocking and 19 are noise | Triage by mission impact before filing. Noise is not signal |
| False-positive tolerance | Accepting known flaky tests as a normal cost of doing business | Each flaky test is a lie in the signal. Fix it or delete it |
| Severity inflation | Marking UI issues as high severity to appear thorough | Severity equals mission impact, not personal discomfort with the defect |

## Integration Assertion Checklist

Before closing a QA session:

- [ ] terminal state was defined before testing began
- [ ] dominant defect was named first, not buried in a list
- [ ] report volume was compressed to mission-relevant signal only
- [ ] at least one delusion was identified and cut
- [ ] findings were verified against real runtime behavior, not test scaffolding

## When NOT to Use

Do not layer champion-heart over QA when:

- the task is a full regression sweep where breadth is the explicit goal
- the user needs a complete audit trail for compliance or legal purposes
- the system under test is new enough that all failure paths are genuinely unknown

In these cases, run full QA and apply champion-heart only at the triage and reporting step.

## Rule

`bug_count` is not victory.
`mission_risk_exposed` is victory.
