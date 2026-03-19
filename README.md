# A/B Test Data

This repository stores A/B test data for the [A/B Testing Dashboard](https://ercrvr.github.io/ab-testing/).

> **📘 Before adding tests, read [AB_TEST_GUIDE.md](./AB_TEST_GUIDE.md)** — it defines exactly how to structure your test data so the dashboard can automatically discover and render it.

## Projects

### examples *(renderer test suite)*
- **test1** (Simple) — Icon Generation: Image files (PNG, SVG, WebP, JPG, GIF) — with-skill vs without-skill
- **test2** (Medium) — Blog Post: Markdown output — gpt4o vs claude
- **test3** (Medium) — REST API Client: Code files (TS, Python, YAML) — baseline vs optimized
- **test4** (Simple) — Analytics Report: Data files (CSV, JSON, XML) — synthetic vs realistic
- **test5** (Medium) — Landing Page: HTML files — minimal vs rich
- **test6** (Simple) — App Config: Plaintext files (.env, .cfg, .log, .txt) — minimal vs production
- **test7** (Medium) — Performance Report: PDF files — executive vs detailed
- **test8** (Simple) — Notification Sound: Audio files (WAV, MP3) — alert vs calm
- **test9** (Simple) — Loading Screen: Video files (MP4, WebM) — blue vs green

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
