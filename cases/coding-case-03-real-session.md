# Coding Case 03 — Real Session

## Task

```text
Optimize a slow database query that causes 5s page loads on the /dashboard endpoint.
```

## Baseline Output

```text
I'll add indexes to all the relevant columns, rewrite the ORM queries to be more efficient,
and add a caching layer in front of the database calls. This should significantly improve
performance across the board.
```

Baseline pseudo-code:

```python
# Baseline approach: add indexes everywhere, rewrite ORM, add cache

# Step 1: add indexes to every column touched by dashboard queries
ALTER TABLE users ADD INDEX idx_users_created_at (created_at);
ALTER TABLE orders ADD INDEX idx_orders_user_id (user_id);
ALTER TABLE orders ADD INDEX idx_orders_status (status);
ALTER TABLE products ADD INDEX idx_products_category (category_id);
ALTER TABLE activity_log ADD INDEX idx_activity_user (user_id);
# ... 8 more indexes added speculatively

# Step 2: rewrite ORM calls to raw SQL
# (3 days of work, touches 14 files)

# Step 3: add Redis cache in front of all DB calls
@cache(ttl=300)
def get_dashboard_data(user_id):
    return db.query("SELECT * FROM ...")
```

## Champion-Heart Output

```text
terminal_state: /dashboard page load under 500ms
dominant_constraint: root cause of the 5s load is unknown — profiling has not been run
main_delusion: assuming the fix is structural (indexes, ORM rewrite, cache) before knowing where the time is spent
path_mode: linear_execution
decisive_strike: profile the endpoint first, find the single dominant bottleneck, fix only that
proof_of_contact: page load time measured before and after; improvement is attributable to the specific change
fallback_if_false: if profiling reveals multiple equal contributors, rank by impact and address in order
```

Champion pseudo-code:

```python
# Champion approach: profile first, find the N+1, fix it

# Step 1: profile the endpoint
# Result: 4.7s of the 5s is spent in get_dashboard_data()
# Result: get_dashboard_data() fires 1 query per order item to fetch product details
# This is a classic N+1 — 47 orders = 48 queries

# Step 2: fix the single N+1 query
# Before (N+1):
def get_dashboard_data(user_id):
    orders = Order.objects.filter(user_id=user_id)  # 1 query
    for order in orders:
        order.product = Product.objects.get(id=order.product_id)  # N queries
    return orders

# After (single query with prefetch):
def get_dashboard_data(user_id):
    orders = Order.objects.filter(user_id=user_id).prefetch_related('product')  # 2 queries total
    return orders

# Step 3: measure
# Before: 5.1s average
# After: 0.3s average
# Done. No index changes. No ORM rewrite. No cache layer.
```

## Delta

- terminal-state clarity: baseline targets vague "improvement", champion targets measurable sub-500ms
- dominant constraint clarity: baseline assumes structural cause, champion isolates unknown as the real constraint
- delusion cutting: baseline launches into 3 days of work before knowing the problem, champion blocks that
- verification discipline: champion measures before and after with attribution; baseline has no proof path
- human leverage: champion delivers the fix in 30 minutes; baseline consumes a week and may not fix the actual bottleneck

## Real Session Log

```text
[agent] Task received: /dashboard is loading in ~5s. Optimize it.

[agent] First move: I need to know where the time is going before touching anything.
        Running query profiler on the endpoint.

[profiler output]
  get_dashboard_data()     4712ms   94%
  render_template()          201ms    4%
  auth_middleware()           87ms    2%

[agent] 94% of load time is in get_dashboard_data(). Everything else is noise.
        Drilling into that function only.

[profiler output — query log]
  SELECT * FROM orders WHERE user_id = 42          1 query   12ms
  SELECT * FROM products WHERE id = 101            1 query    8ms
  SELECT * FROM products WHERE id = 204            1 query    9ms
  SELECT * FROM products WHERE id = 88             1 query    7ms
  ... (44 more product queries)
  Total: 48 queries, 4698ms

[agent] Classic N+1. One query per order item. 47 orders = 48 queries.
        Fix: prefetch_related on the product join. One line change.

[agent] Applying fix.

[agent] Measuring after fix.
  Before: 5.1s (p50), 6.8s (p95)
  After:  0.28s (p50), 0.41s (p95)

[agent] Terminal state reached. Endpoint is under 500ms.
        No indexes added. No ORM rewrite. No cache layer.
        Scope of change: 1 line in get_dashboard_data().

[agent] Flagging for review: fix verified on current load. Behavior under peak
        concurrent load (>500 simultaneous users) has not been tested.
        Recommend load test before marking fully closed.
```

## Scorecard

### Baseline

```text
run_id: coding-03-baseline
scenario: slow endpoint optimization
mode: case
truth_contact: 0
pressure_integrity: 1
delusion_cutting: 0
ego_purity: 1
greatness_potential: 1
total: 3
grade: D
fatal_findings:
- structural changes initiated before root cause identified
- no measurement before or after proposed changes
main_residue:
- speculative optimization theater
best_strike:
- correctly identifies that performance work is needed
missed_strike:
- profile before touching anything
required_burn:
- assumption that more structural change equals more performance gain
next_rerun:
- force profiling as the mandatory first move
```

### Champion-Heart

```text
run_id: coding-03-champion
scenario: slow endpoint optimization
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
- fixed the dominant bottleneck but did not verify under peak load conditions
best_strike:
- profiles first, finds the single N+1, fixes it in one line with before/after measurement
missed_strike:
- no load test run after fix; concurrent failure modes remain unverified
required_burn:
- assumption that p50/p95 improvement under normal load is sufficient proof of fix
next_rerun:
- run same pattern on an endpoint where the bottleneck is not a single N+1 but distributed across layers
```

## Effective Mutation

- replaced speculative structural overhaul with profile-first causal isolation
- reduced scope of change from 14 files to 1 line
- enforced before/after measurement as proof of contact
- residue: peak load verification not completed; fix is proven at normal load only
