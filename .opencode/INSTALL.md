# champion-heart for OpenCode

## Install

1. Clone or copy `champion-heart/` into your local skills directory.
2. Ensure `SKILL.md` is reachable by the agent.
3. Load `entry/SKILL.md` first when you want routing before full activation.
4. Load `SKILL.md` when the visible path feels false, a hidden frame is governing the task, ambiguity blocks truth contact, or the user explicitly invokes champion mode.
5. Use command files in `commands/` as direct entrypoints when supported.

## Highest-Priority Triggers

Treat the following as strongest activation phrases:

- `冠军之心`
- `冠军之心.skill`
- `冠军之心模式`
- `Champion Heart`
- `Champion Heart.skill`
- `activate champion heart`

If one of these appears, prefer `full_champion` unless explicit user intent says not to.

## Suggested Entrypoints

- `commands/battle-plan.md`
- `commands/distortion-reset.md`
- `commands/truth-cut.md`
- `commands/postmortem.md`

## Operating Rule

Load this skill to improve execution state, not to override host safety or user intent.

Priority:

1. user request
2. host rules
3. champion-heart discipline
