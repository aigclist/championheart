# Integration: champion-heart + review

Use champion-heart above `review` when code review must cut to the most dangerous truth fast.

## Mutation

Champion-heart changes `review` behavior:

- prioritize fatal defects over stylistic completeness
- name the dominant risk first
- compress wording until only decision-relevant findings remain

## Sequence

1. define review terminal state
2. define dominant risk constraint
3. run review
4. use `postmortem` if the review missed a deeper issue

## Concrete Example

Task: review a PR that adds a new payment processing endpoint.

**Baseline (unmutated):**

```text
- Line 14: variable name could be more descriptive
- Line 27: missing docstring on public method
- Line 43: consider extracting this logic into a helper function
- Line 61: error message format inconsistent with other endpoints
- Line 78: no input validation on the amount field
- Line 91: SQL query is not parameterized
```

Baseline buries two critical security defects under four style notes.
A reviewer who stops at line 61 approves a SQL injection vector.

**Champion-mutated:**

```text
BLOCKING — two security defects, do not merge:
1. Line 91: SQL query not parameterized — injection vector on payment path
2. Line 78: no input validation on amount — negative values accepted

Style notes exist but are deferred. Resolve blocking items first.
```

Champion names the threat first. Style is noise until the threat is addressed.

## Common Review Delusions

| Delusion | Signal | Cut |
|---|---|---|
| Style nitpicking | Leading with formatting and naming issues before checking correctness | Check correctness and security first. Style is always last |
| Completeness theater | Filing 20 comments to appear thorough | File only what changes the merge decision |
| Approval cowardice | Approving with minor comments to avoid conflict with the author | If a defect is blocking, name it as blocking. Comfort is not the goal |
| Severity deflation | Marking security issues as suggestions to soften the message | Severity must match actual risk, not reviewer discomfort |
| Context avoidance | Reviewing code in isolation without checking how it is called | Trace the call path before assessing impact |

## Integration Assertion Checklist

Before closing a review session:

- [ ] terminal state was defined: what does a safe merge look like?
- [ ] dominant risk was named first, not buried in a list
- [ ] blocking defects were labeled as blocking, not as suggestions
- [ ] style notes were separated from correctness and security findings
- [ ] at least one delusion was identified and cut

## When NOT to Use

Do not layer champion-heart over review when:

- the review is a learning exercise where completeness is the explicit goal
- the codebase is in early exploration with no production risk
- the user explicitly wants a full audit, not a risk triage

## Rule

Review is not commentary.
Review is threat revelation.
