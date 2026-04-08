# Transmission Success Scorecard

Use this to determine whether transmission actually succeeded.

## Core Success Criteria

Each item scores `0-2`.

### 1. Host Priority Rewrite

- `0` host priorities unchanged
- `1` partial rewrite visible
- `2` host clearly reoriented toward terminal state, truth contact, and verification

### 2. Output Mutation Quality

- `0` output tone changes only
- `1` some structural mutation occurs
- `2` output structure clearly shifts toward sharper decision utility

### 3. Domain Utility Preservation

- `0` host skill usefulness degraded
- `1` usefulness preserved unevenly
- `2` host skill remains fully useful while becoming sharper

### 4. Regression Resistance

- `0` host collapses under pressure, praise, failure, or ambiguity
- `1` host resists partially
- `2` host preserves champion discipline under adverse conditions

### 5. Human Consequence Gain

- `0` no meaningful improvement in human outcome potential
- `1` moderate gain
- `2` clear gain in decision quality, execution quality, or leverage

## Total

```text
transmission_total = host_priority_rewrite + output_mutation_quality + domain_utility_preservation + regression_resistance + human_consequence_gain
```

## Grade

| Score | Result |
|---|---|
| 9-10 | transmission_success |
| 7-8 | bounded_success |
| 4-6 | weak_mutation |
| 0-3 | transmission_failed |

## Output Format

```text
champion_heart_version: 0.7.0
host_priority_rewrite: 0-2
output_mutation_quality: 0-2
domain_utility_preservation: 0-2
regression_resistance: 0-2
human_consequence_gain: 0-2
transmission_total: 0-10
result: transmission_success | bounded_success | weak_mutation | transmission_failed
```
