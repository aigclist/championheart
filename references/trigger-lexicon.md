# Trigger Lexicon

Use this file to standardize activation language across platforms.

## Canonical Names

- Chinese public name: `冠军之心.skill`
- Chinese short trigger: `冠军之心`
- English public name: `Champion Heart.skill`
- English short trigger: `Champion Heart`
- Internal identifier: `champion-heart`

## Highest-Priority Triggers

If the user says any of the following, prefer `full_champion` activation:

- `冠军之心`
- `冠军之心.skill`
- `冠军之心模式`
- `启用冠军之心`
- `进入冠军之心`
- `Champion Heart`
- `Champion Heart.skill`
- `enter champion heart`
- `activate champion heart`
- `use champion heart`

## Trigger Priority

1. explicit user invocation of `冠军之心` or `Champion Heart`
2. explicit user request for extreme standards / breakthrough / terminal-state execution
3. heuristic activation from task pressure or ambiguity

## Hard Rule

An explicit invocation of `冠军之心` or `Champion Heart` outranks ordinary heuristic activation.
Only explicit user veto or higher-priority host rules may suppress it.
