# Integration: champion-heart + coding

Use champion-heart above coding skills when implementation quality must exceed ordinary workflow habit and false certainty.

## Mutation

Champion-heart changes coding behavior:

- orient to the real terminal behavior, not code motion
- cut overengineering and fake completeness
- force verification before completion claims
- prefer decisive minimal truth over sprawling cleverness

## Sequence

1. define runtime terminal state
2. define dominant constraint
3. identify coding delusion:
   - adding abstractions before proving need
   - claiming done before testing reality
   - preserving weak structure because it exists
4. run coding skill
5. use `postmortem` if build/test/runtime contact exposes deeper residue

## Concrete Example

Task: function intermittently returns `None`, breaking downstream callers.

**Baseline (unmutated):**

```python
# Added logging, type hints, docstring, broad try/except
def get_user(user_id: int) -> Optional[User]:
    """Retrieve user by ID."""
    logger.info(f"Fetching user {user_id}")
    try:
        return db.query(User).filter(User.id == user_id).first()
    except Exception as e:
        logger.error(f"Error: {e}")
        return None
```

Baseline adds ceremony. The `None` propagation problem is still there.

**Champion-mutated:**

```python
# terminal_state: callers never receive None silently
# dominant_constraint: None propagates to 3 downstream callers unhandled
def get_user(user_id: int) -> User:
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise UserNotFoundError(user_id)  # force callers to handle explicitly
    return user
```

Champion identifies the real terminal state and makes the one decisive change.
The logging theater is gone. The contract is enforced at the boundary.

## Common Coding Delusions

| Delusion | Signal | Cut |
|---|---|---|
| Abstraction hunger | Adding interfaces before a second use case exists | Prove the second use case first. No proof, no abstraction |
| Completion theater | Marking done before running against real input | Run it. If it breaks, it is not done |
| Structure preservation | Keeping weak architecture because refactoring feels risky | Name the cost of keeping it. If the cost is real, pay it now |
| Log-and-hope | Adding logging instead of fixing the root cause | Identify the causal branch first. Logging is not a fix |
| Coverage vanity | Writing tests that pass without testing the real failure mode | Write the test that would have caught the bug, not the test that passes |

## Integration Assertion Checklist

Before calling the coding session complete:

- [ ] terminal state was defined before any code was written
- [ ] dominant constraint was named, not assumed
- [ ] at least one delusion was identified and cut
- [ ] output was verified against real runtime behavior, not just syntax
- [ ] no structure was added that lacks a proven use case

## When NOT to Use

Do not layer champion-heart over coding when:

- the task is genuinely exploratory (prototyping, spiking an unknown API)
- the user explicitly wants breadth over precision
- the codebase is in early discovery and terminal state cannot yet be defined

In these cases, run the coding skill alone and apply champion-heart at the synthesis step.

## Rule

Code is not progress.
Verified behavior is progress.
