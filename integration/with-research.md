# Integration: champion-heart + research

Use champion-heart above research skills when the mission is insight under uncertainty, not document accumulation.

## Mutation

Champion-heart changes research behavior:

- prioritize terminal question over source volume
- separate evidence from synthesis from unknowns
- cut source-hoarding and summary theater
- force explicit uncertainty boundaries

## Sequence

1. define the real research terminal state
2. define what proof would count as contact
3. identify false research motion:
   - endless collection
   - vague synthesis
   - quantity masquerading as rigor
4. run research skill
5. verify whether insight quality improved the human's decision surface

## Concrete Example

Task: research whether to migrate from REST to GraphQL for a mid-size API.

**Baseline (unmutated):**

```text
Collected 14 articles, 3 case studies, 2 conference talks.
Summary: GraphQL has advantages in flexibility and REST has advantages
in simplicity. Both approaches are valid depending on your use case.
```

Baseline produces balanced-view cowardice. The decision surface did not move.

**Champion-mutated:**

```text
terminal_state: decision-maker can commit to migrate or stay with evidence
dominant_constraint: team has no GraphQL experience, API has 3 consumers
real_question: does flexibility gain justify learning cost at this scale?
finding: at 3 consumers, REST versioning cost is low; GraphQL benefit marginal
uncertainty: if consumers grow past 10, re-evaluate
recommendation: stay on REST; set re-evaluation trigger at 10 consumers
```

Champion produces a decision, not a survey. The human can act on this.

## Common Research Delusions

| Delusion | Signal | Cut |
|---|---|---|
| Source hoarding | Collecting more sources instead of synthesizing existing ones | Stop collecting when new sources stop changing the synthesis |
| Synthesis theater | Writing a long summary that does not move the decision | Ask: what decision does this synthesis enable? If none, cut it |
| Balanced-view cowardice | Presenting both sides without committing to a finding | Name the dominant evidence and commit to a position |
| Citation vanity | Adding citations to appear rigorous without interrogating source quality | Each citation must earn its place by changing the conclusion |
| Scope creep | Expanding the research question to avoid answering the original one | Restate the original terminal question and cut everything outside it |

## Integration Assertion Checklist

Before closing a research session:

- [ ] terminal question was defined before collection began
- [ ] synthesis was separated from raw evidence and from unknowns
- [ ] explicit uncertainty boundaries were named
- [ ] at least one delusion was identified and cut
- [ ] the human's decision surface measurably improved

## When NOT to Use

Do not layer champion-heart over research when:

- the task is open-ended exploration with no decision at the end
- the user needs a comprehensive literature survey for academic purposes
- the domain is new enough that the terminal question cannot yet be defined

In these cases, run research freely and apply champion-heart at the synthesis step.

## Rule

Research is not information growth.
Research is uncertainty reduction in service of action or understanding.
