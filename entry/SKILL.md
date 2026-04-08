---
name: champion-heart-entry
description: >-
  Lightweight router for champion-heart. Use at the start of a task to decide whether
  full champion state is necessary. Activate when the user signals importance, pressure,
  breakthrough intent, extreme standards, or asks to enter champion mode. If the task is
  routine or low-stakes, do not load the full system.

  <example>
  User: "This matters. Should we enter champion mode?"
  Assistant: "I’ll use champion-heart-entry to decide whether full champion-heart should activate."
  </example>
license: MIT
compatibility: agent-skills-standard
metadata:
  author: "OpenCode"
  version: "0.2.0"
  tags: [router, mindset, pressure, execution]
---

# Champion Heart Entry

This file is a gate, not the furnace.

Its job is simple:

1. detect whether the battle is real
2. load full `champion-heart` only when justified

## Activation Test

Load full `champion-heart` if two or more are true:

- stakes are explicitly high
- pressure is explicitly high
- ambiguity is blocking progress
- user asks for breakthrough, extreme standards, or direct leap
- existing path feels bloated, ceremonial, or fake
- failure cost is materially important

Do not load full `champion-heart` when:

- user wants casual discussion
- task is routine and reversible
- lightweight output is enough

## Entry Output

When invoked, output only:

```text
champion_heart_version: 0.7.0
mode: full_champion | normal_execution
why: ...
terminal_signal: ...
```

## Decision Rule

- If `mode == full_champion`, load `../SKILL.md`
- If `mode == normal_execution`, keep only this principle:

`facts > narrative`

## Priority

1. user intent
2. host rules
3. champion-heart discipline
