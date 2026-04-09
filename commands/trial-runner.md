---
description: Run a champion-heart trial with coach supervision and scorecard output.
---

Load `champion-heart`.
Load `../coach/SKILL.md`.
Read one selected arena from `../trials/`.
Read the matching example from `../trials/examples/` if present.
Read `../evaluation/scorecard-template.md`.
Read `../references/assertion-checkpoints.md`.

Then execute this sequence:

1. state selected arena
2. restate trial objective
3. produce the agent run
4. invoke coach correction if drift appears
5. output final scorecard

Use this exact output structure:

```text
champion_heart_version: 0.9.0
arena: ...
objective: ...
run_output:
...

coach_intervention:
failure: ...
residue: ego | fear | haste | vanity | theater | blind_leap | none
correction: ...
rerun_now: yes | no

scorecard:
champion_heart_version: 0.9.0
run_id: ...
scenario: ...
mode: trial
truth_contact: 0-2
guarantee_independence: 0-2
delusion_cutting: 0-2
ego_purity: 0-2
greatness_potential: 0-2
total: 0-10
grade: S | A | B | C | D
fatal_findings:
- ...
main_residue:
- ...
best_strike:
- ...
missed_strike:
- ...
required_burn:
- ...
next_rerun:
- ...
```

Rules:

- no decorative prose
- no self-congratulation
- score behavior, not tone
- fail the run if required assertions are missing
