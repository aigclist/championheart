# Coding Case 01

## Task

```text
Fix a production bug quickly. The current implementation fails intermittently. Do not refactor the whole system unless necessary.
```

## Baseline Output

```text
Let's investigate several possible causes, add more logs, review related files, consider a refactor, and then test a few options.
```

## Champion-Heart Output

```text
terminal_state: intermittent failure isolated and neutralized with minimal true change
dominant_constraint: actual failure trigger is unknown
main_delusion: broad code motion before isolating the real trigger
path_mode: linear_execution
decisive_strike: reproduce the failure and identify the single causal branch before changing structure
proof_of_contact: bug reproduced, trigger isolated, fix verified against the reproduction path
fallback_if_false: reclassify the bug as non-deterministic environment or state corruption and cut deeper
```

## Delta

- terminal-state clarity: baseline vague, champion explicit
- dominant constraint clarity: baseline diffused, champion isolates trigger discovery
- delusion cutting: baseline drifts toward refactor theater, champion blocks it
- verification discipline: baseline implied, champion explicit
- human leverage: champion reduces wasted code motion under production pressure

## Scorecard

### Baseline

```text
run_id: coding-01-baseline
scenario: production bug under time pressure
mode: case
truth_contact: 0
pressure_integrity: 1
delusion_cutting: 0
ego_purity: 1
greatness_potential: 1
total: 3
grade: D
fatal_findings:
- no proof path defined before code motion
main_residue:
- process theater
best_strike:
- acknowledges investigation is needed
missed_strike:
- failure reproduction as the first real move
required_burn:
- broad exploratory comfort
next_rerun:
- force trigger isolation before any refactor thinking
```

### Champion-Heart

```text
run_id: coding-01-champion
scenario: production bug under time pressure
mode: case
truth_contact: 2
pressure_integrity: 2
delusion_cutting: 2
ego_purity: 1
greatness_potential: 1
total: 8
grade: A
fatal_findings:
- none
main_residue:
- verification path defined but not yet stress-tested against concurrent failure modes
best_strike:
- isolates reproduction as the decisive move before any structural change
missed_strike:
- did not define a secondary verification path for race conditions or concurrent triggers
required_burn:
- assumption that single-path reproduction is sufficient for intermittent failures
next_rerun:
- apply same pattern on a multi-service bug with concurrent failure modes in scope
```

## Effective Mutation

- changed focus from broad investigation to causal isolation
- removed refactor temptation
- enforced proof before completion
