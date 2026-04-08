# Champion Heart in Claude Code

## Install

1. Clone this repository to `~/.claude/skills/champion-heart`, or place it in another Claude Code skills location your setup already uses.
2. Keep `.claude-plugin/plugin.json` in the repository root.
3. Make sure Claude Code can reach `entry/SKILL.md`, `SKILL.md`, and `commands/`.
4. Invoke with the highest-priority trigger phrases listed below.

This flow must stay consistent with `docs/install-model.md` and `README.md`.

## Trigger Phrases

- `冠军之心`
- `冠军之心.skill`
- `冠军之心模式`
- `启用冠军之心`
- `Champion Heart`
- `Champion Heart.skill`
- `enter champion heart`
- `activate champion heart`

## Recommended Entry

- Start with `entry/SKILL.md` for gating.
- Load `SKILL.md` for full champion behavior.
- Load `transmission/SKILL.md` for host overwrite or skill possession.
