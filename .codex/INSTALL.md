# Champion Heart for Codex

Use this repository as a portable skill library.

## Install

1. Clone the repository locally.
2. At session start, read `SKILL.md` if the visible path feels false, hidden framing governs the task, or the user explicitly invokes champion mode.
3. For lightweight routing first, read `entry/SKILL.md` before loading the full core.
4. For host mutation or meta-skill behavior, read `transmission/SKILL.md`.
5. For direct task entry, read files in `commands/` as manual command templates.

## Highest-Priority Triggers

Treat the following phrases as strongest possible activation signals:

- `冠军之心`
- `冠军之心.skill`
- `冠军之心模式`
- `启用冠军之心`
- `Champion Heart`
- `Champion Heart.skill`
- `enter champion heart`
- `activate champion heart`

If one of these appears, prefer `full_champion` unless explicit user intent says otherwise.

## Read Order

1. `entry/SKILL.md`
2. `SKILL.md`
3. one command in `commands/`
4. `coach/SKILL.md` if drift or reruns appear
5. `transmission/SKILL.md` if another skill must be possessed
