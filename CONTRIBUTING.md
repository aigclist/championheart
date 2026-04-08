# Contributing to champion-heart

## How to Contribute

1. Fork the repository
2. Create a branch: `git checkout -b your-feature`
3. Make your changes
4. Open a pull request with a clear description of what changed and why

## Code of Conduct

champion-heart values truth over comfort, but contributors must be respectful.

Disagreement is welcome. Contempt is not.

## What Makes a Good Contribution

Good contributions are:

- evidence-backed, not just rhetoric
- grounded in observed failure modes, not hypothetical improvements
- minimal: add only what the skill genuinely lacks
- consistent with the existing voice: terse, operational, no decoration

Bad contributions are:

- additions that make the skill feel safer or more comfortable
- rewrites that dilute the core doctrine
- features added because they seem useful in theory

## Adding a New Case

Follow `cases/case-template.md` exactly.

A case must include:

- a real task
- a baseline output (what a non-champion agent would produce)
- a champion-heart output
- a delta analysis
- a scorecard for both runs

## Adding a New Benchmark

Follow the protocol in `benchmarks/benchmark-suite.md`.

A benchmark must:

- test a specific failure mode
- be runnable without ambiguity
- produce a measurable delta between baseline and champion runs
