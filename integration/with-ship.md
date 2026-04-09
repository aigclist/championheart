# Integration: champion-heart + ship

Use champion-heart above `ship` when deadline theater creates risk of ceremonial movement or vanity launch.

## Mutation

Champion-heart changes `ship` behavior:

- force one real go/no-go constraint
- refuse launch theater unsupported by verification
- separate deadline fear from actual readiness

## Sequence

1. `distortion-reset`
2. define true ship terminal state
3. identify false necessity created by deadline panic
4. execute ship workflow
5. verify contact with production reality

## Concrete Example

Task: ship a new feature by end of day. Deadline theater is distorting judgment.

**Baseline (unmutated):**

```text
Feature is mostly done. A few edge cases remain but we can fix them post-launch.
Staging looks good. Let's ship and monitor.
```

Baseline ships on hope. "Mostly done" is not a terminal state. "Monitor" is not a plan.

**Champion-mutated:**

```text
terminal_state: feature handles the three primary user paths without data loss
dominant_constraint: payment retry path is unresolved — data loss risk on failure
go/no-go: NO-GO
reason: unresolved data loss risk is not a post-launch fix
deadline distortion: real, but does not change the data loss risk
decision: delay 4 hours to resolve retry path, then re-evaluate go/no-go
```

Champion separates deadline fear from actual readiness. The 4-hour delay is cheaper
than a production incident with data loss.

## Common Shipping Delusions

| Delusion | Signal | Cut |
|---|---|---|
| Deadline panic | Shipping broken code because the deadline feels immovable | Ask: what is the actual cost of a 4-hour delay vs. a production incident? |
| Feature creep | Adding scope during the final push because it feels close | Freeze scope at go/no-go decision. New scope is a new ship cycle |
| Launch theater | Announcing the launch before verifying production behavior | Verify first. Announce after contact with production reality |
| Rollback avoidance | Refusing to roll back because it feels like failure | Rollback is a controlled decision. Staying broken is not |
| Metric vanity | Declaring success based on deployment completion, not user outcome | Define success metrics before shipping, not after |

## Integration Assertion Checklist

Before executing ship:

- [ ] terminal state was defined: what does a successful ship look like?
- [ ] one real go/no-go constraint was named
- [ ] deadline distortion was separated from actual readiness
- [ ] rollback path was verified before shipping
- [ ] at least one delusion was identified and cut

## When NOT to Use

Do not layer champion-heart over ship when:

- the release is a low-stakes internal tool with no production risk
- the user explicitly wants a fast iterative deploy-and-fix cycle
- the system has full rollback automation and zero user impact on failure

In these cases, ship freely and apply champion-heart only if a real go/no-go decision is needed.

## Rule

Shipping is not motion to production.
Shipping is verified consequence.
