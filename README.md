# A/B Test Data

Sample A/B test projects for the [A/B Testing Dashboard](https://ercrvr.github.io/ab-testing/).

## Projects

### homepage-redesign
- **test1** (Simple) — Hero Banner: Bold CTA vs minimal design
- **test2** (Simple) — CTA Button: Green vs orange button color
- **test3** (Medium) — Nav Layout: Top bar vs sidebar navigation

### checkout-flow
- **test1** (Complex) — Payment Form: Single-page vs multi-step checkout
- **test2** (Medium) — Pricing Display: Monthly vs annual pricing format

## Structure

```
project-name/
  tests/
    testN/
      meta.json          <- test metadata (name, prompt, difficulty required)
      variant-a/         <- variant files (user-defined names)
        results.md       <- narrative writeup (required)
        ...outputs
      variant-b/
        results.md
        ...outputs
```

See [AB_TEST_GUIDE.md](https://github.com/ercrvr/ab-testing/blob/main/AB_TEST_GUIDE.md) for the full structure specification.
