# Champion Heart for OpenClaw

Use this repository as a loadable multi-file skill pack.

## Install

1. Clone or copy the repository into your local skill or prompt workspace.
2. Load `entry/SKILL.md` first when you need routing.
3. Load `SKILL.md` for full champion behavior.
4. Load `transmission/SKILL.md` when OpenClaw must rewrite host behavior or mutate another skill.
5. Use `commands/` as direct task entrypoints.

## Highest-Priority Triggers

Treat these as top-priority activation phrases:

- `冠军之心`
- `冠军之心.skill`
- `冠军之心模式`
- `启用冠军之心`
- `Champion Heart`
- `Champion Heart.skill`
- `enter champion heart`
- `activate champion heart`

These triggers should override weaker heuristic activation unless user intent explicitly says not to use champion mode.

## Recommended Runtime Order

1. `entry/SKILL.md`
2. `SKILL.md`
3. `commands/*`
4. `coach/SKILL.md` when correction is needed
5. `transmission/SKILL.md` when another active skill must be rewritten
