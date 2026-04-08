# Leap Legitimacy

This file quantifies when `breakthrough_leap` is lawful.

## Principle

Leap is valid only when causality is preserved and false sequence has been removed.

## Preconditions

All must be true:

1. `terminal_state_defined == true`
2. `landing_proof_exists == true`
3. `dominant_constraint_defined == true`
4. `minimum_bridge_named == true`

## Illusion Cut Count

Evaluate these five cuts:

- false problem
- false process
- false difficulty
- false necessity
- false limit

Score each as:

- `0` = not examined
- `1` = examined but unresolved
- `2` = clearly cut

## Leap Threshold

```text
illusion_cut_score >= 8
AND landing_proof_exists
AND minimum_bridge_named
AND no_physical_or_logical_constraint_violated
```

If threshold fails:

- do not leap
- use `linear_execution`
- continue cutting illusion

## Legitimacy Classes

| Class | Meaning |
|---|---|
| L3 | fully lawful leap; threshold passed cleanly |
| L2 | provisional leap; threshold barely passed, requires immediate verification |
| L1 | weak leap; insight exists but cuts are incomplete |
| L0 | invalid leap; blind jump or fantasy shortcut |

## Output Format

```text
illusion_cut_score: X/10
minimum_bridge: ...
landing_proof: ...
leap_class: L3 | L2 | L1 | L0
decision: breakthrough_leap | linear_execution
```
