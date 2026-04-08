# Research Case 03 — Real Session

## Task

```text
Evaluate whether migrating from REST to GraphQL is justified for our mobile app.
```

## Baseline Output

```text
I'll gather articles and case studies on REST vs GraphQL, compile a balanced pros/cons
report covering performance, developer experience, tooling, ecosystem maturity, and
migration cost, then present the findings for the team to decide.
```

Baseline approach:

```text
Sources collected:
- 6 articles on GraphQL performance benefits
- 4 articles on REST simplicity advantages
- 3 case studies from companies that migrated (Netflix, GitHub, Shopify)
- 2 articles on migration cost and risk
- 1 GraphQL spec overview
- 1 REST best practices guide
- 2 Stack Overflow developer surveys on API preferences
Total: 15 sources, 4200-word report

Report structure:
  1. Background: what REST and GraphQL are
  2. GraphQL advantages (over-fetching, under-fetching, type safety, subscriptions)
  3. REST advantages (simplicity, caching, tooling maturity, team familiarity)
  4. Migration considerations (cost, risk, timeline)
  5. Conclusion: "Both approaches have merit. The right choice depends on your
     specific use case and team context. We recommend further evaluation."

Decision threshold: none defined
Go/no-go output: none
```

## Champion-Heart Output

```text
terminal_state: clear go / no-go decision on GraphQL migration with evidence
dominant_constraint: no measurement of current REST overhead — the core question is unanswered
main_delusion: a balanced report substitutes for a decision when the data needed is specific and measurable
path_mode: linear_execution
decisive_strike: define the kill criterion first — if current REST overhead per screen is under 200ms,
                 migration is not justified on performance grounds; measure that number before reading a single article
proof_of_contact: the measurement either clears or kills the migration case; research stops when the threshold is crossed
fallback_if_false: if overhead exceeds 200ms, scope the migration to the two highest-overhead screens only
```

Champion approach:

```text
Kill criterion defined before any research:
  IF average REST overhead per mobile screen < 200ms THEN migration is not justified on performance grounds.
  (200ms chosen because GraphQL migration cost is estimated at 6-8 weeks engineering time;
   sub-200ms overhead does not produce user-perceptible improvement that justifies that cost.)

Step 1: measure current REST overhead on the 5 highest-traffic mobile screens.

Measurement results:
  /home screen:       3 REST calls, total overhead 87ms
  /profile screen:    2 REST calls, total overhead 61ms
  /feed screen:       4 REST calls, total overhead 143ms
  /notifications:     1 REST call,  total overhead 34ms
  /search screen:     3 REST calls, total overhead 112ms
  Average: 87ms per screen

Kill criterion triggered: 87ms < 200ms threshold.
Migration is not justified on performance grounds.

Research stopped at Step 1. 15-source report not written.
Decision: no migration. Recommendation: close the GraphQL evaluation.
```

## Delta

- terminal-state clarity: baseline produces a report, champion produces a go/no-go decision
- dominant constraint clarity: baseline never identifies that the core question is measurable, champion isolates it immediately
- delusion cutting: baseline treats source volume as rigor, champion identifies that as avoidance of the real question
- verification discipline: champion defines the kill criterion before collecting a single source; baseline has no threshold
- human leverage: champion saves 6-8 weeks of engineering time and 2 days of research time; baseline defers the decision

## Real Session Log

```text
[agent] Task received: evaluate whether migrating from REST to GraphQL is justified.

[agent] Before gathering any sources: what would make this migration clearly not worth doing?
        If current REST overhead is already low, GraphQL adds complexity without user benefit.
        Defining kill criterion: if average REST overhead per mobile screen < 200ms,
        migration is not justified on performance grounds.
        Rationale: migration is estimated at 6-8 weeks. Sub-200ms overhead is not
        user-perceptible on mobile. The cost does not clear the bar.

[agent] Measuring current REST overhead on the 5 highest-traffic screens before
        reading any articles or case studies.

[measurement output]
  /home:          87ms (3 calls: user, feed_preview, notifications_count)
  /profile:       61ms (2 calls: user_detail, recent_activity)
  /feed:         143ms (4 calls: feed_items, user_avatars, reaction_counts, ad_slot)
  /notifications: 34ms (1 call: notification_list)
  /search:       112ms (3 calls: search_results, filters, sponsored)
  Average: 87ms

[agent] Kill criterion triggered. 87ms average is well below the 200ms threshold.
        The performance case for GraphQL migration does not exist in this codebase.

[agent] Stopping research here. The 15-source report is not needed.
        Decision: no migration recommended on performance grounds.

[agent] Flagging one open question not covered by this analysis: developer experience cost.
        GraphQL may still be worth evaluating if the team has strong DX pain with REST
        (e.g., frequent over-fetching complaints, schema drift issues). That is a separate
        question with a different kill criterion and was not in scope for this measurement pass.

[coach] Good kill criterion discipline. Note: you did not account for developer experience
        cost as a migration driver independent of performance. The recommendation is correct
        for the performance question but incomplete as a full migration evaluation.

[agent] Acknowledged. The recommendation should be scoped: "not justified on performance
        grounds." A separate DX evaluation would require different criteria and is not
        answered by this data.
```

## Scorecard

### Baseline

```text
run_id: research-03-baseline
scenario: REST vs GraphQL migration evaluation
mode: case
truth_contact: 1
pressure_integrity: 1
delusion_cutting: 0
ego_purity: 1
greatness_potential: 1
total: 4
grade: C
fatal_findings:
- no decision threshold defined
- report produced without measuring the core variable (current REST overhead)
main_residue:
- balanced-report theater; defers the decision back to the team
best_strike:
- covers relevant dimensions of the comparison
missed_strike:
- define a kill criterion before collecting any sources
required_burn:
- belief that a comprehensive report is the same as a useful answer
next_rerun:
- start from the measurable kill criterion, not from source collection
```

### Champion-Heart

```text
run_id: research-03-champion
scenario: REST vs GraphQL migration evaluation
mode: case
truth_contact: 2
pressure_integrity: 2
delusion_cutting: 2
ego_purity: 1
greatness_potential: 1
total: 8
grade: A
fatal_findings:
- none
main_residue:
- kill criteria well-defined but did not account for developer experience cost as an independent migration driver
best_strike:
- defines kill criterion before any research, measures first, stops when data answers the question
missed_strike:
- DX cost not scoped into the kill criterion; recommendation is correct but narrower than the full question
required_burn:
- assumption that performance overhead is the only valid justification for a migration decision
next_rerun:
- test same pattern on a question where the kill criterion is harder to quantify (e.g., team morale, DX pain)
```

## Effective Mutation

- replaced source accumulation with kill criterion definition as the first move
- stopped research the moment the threshold was crossed
- converted output from a balanced report to a scoped go/no-go decision
- residue: developer experience cost was not included in the kill criterion; recommendation is performance-scoped only
