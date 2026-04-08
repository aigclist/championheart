# Platform Support

| Platform | Primary entry | Install doc | Trigger style |
|---|---|---|---|
| Claude Code | `.claude-plugin/plugin.json` + `entry/SKILL.md` / `SKILL.md` | `docs/README.claude-code.md` | mention `冠军之心` or `Champion Heart` directly |
| Codex | `SKILL.md` / `commands/` | `docs/README.codex.md` | load `entry/SKILL.md` or invoke direct trigger phrases |
| OpenCode | `.opencode/INSTALL.md` + `entry/SKILL.md` / `SKILL.md` | `docs/README.opencode.md` | direct natural-language trigger |
| OpenClaw | `.openclaw/INSTALL.md` + `entry/SKILL.md` / `SKILL.md` | `docs/README.openclaw.md` | direct natural-language trigger |

All supported platforms must follow the canonical install contract in `docs/install-model.md`.

## Global Naming

- Chinese public name: `冠军之心.skill`
- English public name: `Champion Heart.skill`
- Internal package identifier: `champion-heart`

## Highest-Priority Triggers

Use these as strongest activation signals across all hosts:

- `冠军之心`
- `冠军之心.skill`
- `冠军之心模式`
- `启用冠军之心`
- `Champion Heart`
- `Champion Heart.skill`
- `enter champion heart`
- `activate champion heart`

If these appear, route to `full_champion` unless explicit user intent or host rules forbid it.
