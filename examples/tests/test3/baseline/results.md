# REST API Client — Baseline

The baseline implementation covers all CRUD operations with clear, readable code and basic error handling.

## Process

1. Defined TypeScript interfaces for the Todo model and API responses
2. Implemented a client class with methods for each CRUD operation
3. Added basic fetch-based HTTP calls with JSON parsing
4. Wrote Python equivalent using `requests` library
5. Created a GitHub Actions workflow for CI

## Output

- `client.ts` — TypeScript API client class
- `types.ts` — TypeScript type definitions
- `client.py` — Python equivalent
- `workflow.yml` — GitHub Actions CI workflow

## Assessment

Clean, readable implementation suitable for most use cases. Lacks retry logic and advanced error types, but straightforward to understand and extend.

### Strengths
- Readable and self-documenting
- All CRUD operations covered
- Good TypeScript types

### Weaknesses
- No retry on network failure
- Error handling limited to status codes
- No request/response interceptors
