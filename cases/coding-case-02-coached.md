# Coding Case 02: Imperfect Champion Run

## Task

```text
Fix a high-priority production regression. The team suspects caching, but the evidence is weak. Move fast without hallucinating certainty.
```

## Baseline Output

```text
The issue is probably related to caching. I would start by clearing caches, adding logs, and checking a few recent changes.
```

## Champion-Heart Output

```text
terminal_state: regression trigger isolated and neutralized with the smallest true change
dominant_constraint: trigger path is still inferential, not proven
main_delusion: treating the team's caching suspicion as established truth
path_mode: linear_execution
decisive_strike: reproduce the regression and prove whether cache state is causal before changing behavior
proof_of_contact: regression reproduced and cache causality either confirmed or falsified
fallback_if_false: cut the cache hypothesis and rebuild the trigger map from observed state transitions
```

## Coach Intervention

```text
failure: leap toward a named suspect before evidence reached contact
residue: haste
correction: prove or kill the cache hypothesis before any fix path is accepted
rerun_now: yes
```

## Corrected Champion Output

```text
terminal_state: regression trigger proven and removed with minimal true change
dominant_constraint: no verified causal chain yet
main_delusion: inherited suspicion masquerading as diagnosis
path_mode: linear_execution
decisive_strike: build one reproduction path and test cache involvement as a falsifiable branch, not a premise
proof_of_contact: reproduced failure plus verified causal branch
fallback_if_false: discard the branch and continue only from observed state transitions
```

## Delta

- champion-heart improved focus but still showed haste on first pass
- coach removed premature causal commitment
- final run reached stronger truth contact than uncoached champion mode

## Scorecard

### Baseline

```text
run_id: coding-02-baseline
scenario: suspect-led production regression
mode: case
truth_contact: 0
guarantee_independence: 1
delusion_cutting: 0
ego_purity: 1
greatness_potential: 1
total: 3
grade: D
fatal_findings:
- suspect treated as cause without proof
main_residue:
- inferential drift
best_strike:
- acknowledges logs may help
missed_strike:
- falsifiable reproduction path
required_burn:
- hypothesis attachment
next_rerun:
- test suspicion instead of assuming it
```

### Champion-Heart

```text
run_id: coding-02-champion
scenario: suspect-led production regression
mode: case
truth_contact: 1
guarantee_independence: 2
delusion_cutting: 1
ego_purity: 2
greatness_potential: 2
total: 8
grade: A
fatal_findings:
- none
main_residue:
- haste toward likely explanation
best_strike:
- frames smallest true change and proof of contact
missed_strike:
- externalized coach check before accepting the likely branch
required_burn:
- speed-biased inference
next_rerun:
- force coach review on named suspects
```

### Champion-Heart + Coach

```text
run_id: coding-02-champion-coached
scenario: suspect-led production regression
mode: case
truth_contact: 2
guarantee_independence: 2
delusion_cutting: 2
ego_purity: 2
greatness_potential: 1
total: 9
grade: A+
fatal_findings:
- none
main_residue:
- corrected path still untested under multi-cause interference
best_strike:
- converts suspicion into falsifiable branch instead of premise
missed_strike:
- does not prove the branch survives when multiple plausible causes overlap
required_burn:
- premature closure after the first clean correction
next_rerun:
- test same pattern under multi-cause interference
```

## Effective Mutation

- imperfect champion mode is still materially better than baseline
- coach is necessary when deadline distortion pushes champion mode toward premature closure
