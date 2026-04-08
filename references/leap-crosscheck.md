# Leap Crosscheck

This file reduces self-scoring illusion in leap decisions.

## Principle

`illusion_cut_score` must not rely on self-declaration alone.

## Crosscheck Protocol

For any `breakthrough_leap`, require one additional verifier:

1. `coach review`, or
2. `assertion crosscheck against leap-legitimacy.md`

## Crosscheck Questions

- Was each of the five cuts explicitly examined?
- Is the `minimum_bridge` a real causal bridge or just a shortened story?
- Is `landing_proof` external and observable?
- Would a skeptical reviewer accept the leap as lawful?

## Output Format

```text
illusion_cut_score_self: X/10
illusion_cut_score_crosscheck: X/10
crosscheck_source: coach | assertion
leap_authorized: yes | no
```

## Hard Rule

If self-score and crosscheck score diverge materially, trust the lower score.
