# Analytics Report — Realistic

Generated realistic data with natural variance, weekend traffic dips, and a Tuesday traffic spike anomaly for testing dashboard resilience.

## Process

1. Modeled realistic weekday/weekend traffic patterns
2. Added a Tuesday spike (marketing campaign day)
3. Applied natural variance to all metrics
4. Validated files parse and chart correctly

## Output

- `metrics.csv` — Daily metrics with natural variance (7 rows)
- `dashboard.json` — Chart config with realistic data series
- `sitemap.xml` — XML sitemap with 5 pages, realistic change frequencies

## Assessment

Much more useful for production testing. The weekend dip (Sat/Sun drop to ~40% of weekday traffic) and the Tuesday spike test edge cases in charting and data display renderers.

### Strengths
- Realistic traffic patterns (weekday/weekend variance)
- Anomaly on Tuesday tests charting edge cases
- Natural variance in all metrics

### Weaknesses
- Harder to validate correctness at a glance
