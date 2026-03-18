# A/B Test Data

Sample A/B test projects for the [A/B Testing Dashboard](https://ercrvr.github.io/ab-testing/).

## Projects

### homepage-redesign
- **hero-banner** (easy) — Bold CTA vs minimal design
- **cta-button** (easy) — Green vs orange button color
- **nav-layout** (medium) — Top bar vs sidebar navigation

### checkout-flow
- **payment-form** (hard) — Single-page vs multi-step checkout
- **pricing-display** (medium) — Monthly vs annual pricing format

## Structure

```
project-name/
  .abtest              ← project marker
  test-name/
    meta.json          ← test metadata
    variant-a/         ← variant files
    variant-b/
```
