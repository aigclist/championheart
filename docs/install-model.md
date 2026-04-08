# Install Model

This file defines the canonical install contract for `champion-heart`.

If `README.md`, `docs/platforms.md`, platform docs, or install stubs disagree with this file, this file wins.

## Supported Platforms

- Claude Code
- OpenCode
- Codex
- OpenClaw

## Canonical Contract

1. Clone or copy the repository into the host's skill or prompt directory.
2. Use the platform-specific install doc for host-specific placement and loading details.
3. Use `entry/SKILL.md` when routing is needed before full activation.
4. Use `SKILL.md` for full champion-heart activation.
5. Use `transmission/SKILL.md` only when champion-heart must mutate a host or another skill.
6. Use `commands/` as direct task entrypoints only after the repository is loadable from the host.

## Platform Mapping

| Platform | Install stub | Platform doc | Recommended placement |
|---|---|---|---|
| Claude Code | `.claude-plugin/plugin.json` | `docs/README.claude-code.md` | `~/.claude/skills/champion-heart` |
| OpenCode | `.opencode/INSTALL.md` | `docs/README.opencode.md` | `~/.config/opencode/skills/champion-heart` |
| Codex | `.codex/INSTALL.md` | `docs/README.codex.md` | local cloned repository |
| OpenClaw | `.openclaw/INSTALL.md` | `docs/README.openclaw.md` | local skill or prompt workspace |

## Consistency Rules

- Unsupported platforms must not appear in `README.md`, `README.zh-CN.md`, `docs/platforms.md`, or `CHANGELOG.md` as active support claims.
- Platform docs must reference the same supported-platform set as this file.
- Command files inside subdirectories must use correct relative paths.
- Validation must fail if local referenced files do not exist.
