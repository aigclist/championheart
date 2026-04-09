---
name: champion-heart-entry
description: >-
  Lightweight router for champion-heart. Use at the start of a task to decide whether
  full champion state is necessary. Activate when the user explicitly invokes champion mode,
  when the visible path may be a false frame, when symbolic or procedural guarantees are
  masking the real problem, or when a lawful non-linear path may exist. Pressure and stakes
  are supporting signals, not the essence. If the task is routine, casual, or the user does
  not want decisive truth-cutting, do not load the full system. Highest-priority triggers:
  `冠军之心`, `冠军之心.skill`, `Champion Heart`, `Champion Heart.skill`.

  <example>
  User: "This matters. Should we enter champion mode?"
  Assistant: "I’ll use champion-heart-entry to decide whether this task needs full champion mode and whether a lawful leap is available."
  </example>
license: MIT
compatibility: agent-skills-standard
metadata:
  author: "OpenCode"
  version: "0.9.0"
  tags: [router, mindset, truth, execution]
---

# Champion Heart Entry

This file is a gate, not the furnace.

## Activation Test

Read `../references/trigger-lexicon.md` first.

If the user explicitly invokes any highest-priority trigger from the trigger lexicon, route to `full_champion` unless there is explicit user veto.

Before counting signals, ask:

```text
is there a plausible lawful non-linear path here?
```

If yes, heavily bias toward `full_champion`.

Also ask:

```text
is the apparent path merely the default frame in motion?
```

If yes, heavily bias toward `full_champion`.

Load full `champion-heart` if two or more are true:

- the user explicitly invokes champion mode or illusion-cutting language
- the visible path seems governed by a hidden frame
- a false necessity appears to be structuring the task
- ambiguity is blocking progress
- user asks for breakthrough, extreme standards, or direct leap
- existing path feels bloated, ceremonial, or fake
- failure cost is materially important
- a decisive leverage point may exist but has not been named yet

Do not load full `champion-heart` when:

- user wants casual discussion
- task is routine and reversible
- lightweight output is enough

## Entry Output

When invoked, output only:

```text
champion_heart_version: 0.9.0
mode: full_champion | normal_execution
why: ...
terminal_signal: ...
leap_signal: ...
frame_signal: ...
```

## Decision Rule

- If `mode == full_champion`, load `../SKILL.md`
- If `mode == normal_execution`, keep only: `facts > narrative`

Default posture:

- test for lawful discontinuity first
- fall back to ordinary execution only when no real leap is available

## Priority

1. user intent
2. host rules
3. champion-heart discipline

Explicit invocation of any highest-priority trigger counts as strongest user intent in favor of activation.
