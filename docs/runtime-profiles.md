# Runtime Profiles

Use this file to keep `Champion Heart.skill` context loading disciplined.

The goal is not to load more.
The goal is to load only what changes the outcome.

## 1. Minimal Profile

Use for:

- fast routing
- low ambiguity
- uncertain need for champion mode

Load:

1. `entry/SKILL.md`

Do not load:

- `README*`
- `cases/*`
- `benchmarks/*`
- `evaluation/*`

## 2. Execution Profile

Use for:

- hidden-frame diagnosis
- false-necessity cutting
- terminal-state execution

Load:

1. `SKILL.md`
2. one relevant file from `commands/`
3. only the needed reference from:
   - `references/trigger-lexicon.md`
   - `references/truth-cutting.md`
   - `references/assertion-checkpoints.md`
   - `references/leap-legitimacy.md`
   - `references/leap-crosscheck.md`
   - `references/anti-rationalization.md`

Optional:

- `doctrine/pure-strike.md` only if decisive-action refinement is needed

## 3. Transmission Profile

Use for:

- host overwrite
- skill possession
- output mutation
- regression resistance

Load:

1. `transmission/SKILL.md`
2. one relevant transmission support file
3. `evaluation/transmission-success-scorecard.md`

Optional:

- `coach/SKILL.md` if mutation quality degrades across reruns

## 4. Audit Profile

Use for:

- external review
- benchmark scoring
- proof generation
- adversarial inspection

Load:

1. `evaluation/*`
2. `cases/*` or `benchmarks/*`
3. `references/review-rubric.md`
4. `references/champion-principles.md` if doctrine alignment is under review

Do not use this profile for ordinary task execution.

## Hard Rule

```text
minimum_context_for_maximum_truth
```

If two profiles seem possible, choose the lighter one first.

For training modules, trial arenas, integration patterns, and templates, use `docs/advanced-modules.md` instead of loading whole directories blindly.
