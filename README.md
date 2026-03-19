# A/B Test Data

This repository stores A/B test data for the [A/B Testing Dashboard](https://ercrvr.github.io/ab-testing/).

> **📘 Before adding tests, read [AB_TEST_GUIDE.md](./AB_TEST_GUIDE.md)** — it defines exactly how to structure your test data so the dashboard can automatically discover and render it.

## Projects

### homepage-redesign
- **test1** (Simple) — Hero Banner: Bold CTA vs minimal design
- **test2** (Simple) — CTA Button: Green vs orange button color
- **test3** (Medium) — Nav Layout: Top bar vs sidebar navigation

### checkout-flow
- **test1** (Complex) — Payment Form: Single-page vs multi-step checkout
- **test2** (Medium) — Pricing Display: Monthly vs annual pricing format

## Quick Reference

```
project-name/
  tests/
    testN/
      meta.json          ← test metadata (name, prompt, difficulty required)
      variant-a/         ← variant directory (user-defined name)
        results.md       ← narrative writeup (required)
        ...outputs       ← any output files
      variant-b/
        results.md
        ...outputs
```

For the full specification — including `meta.json` schema, `results.md` template, naming conventions, and complete examples — see **[AB_TEST_GUIDE.md](./AB_TEST_GUIDE.md)**.
