# REST API Client — Optimized

The optimized implementation adds retry logic with exponential backoff, rich error types, request interceptors, and comprehensive TypeScript generics.

## Process

1. Designed a generic `ApiError` class hierarchy
2. Implemented retry logic with exponential backoff and jitter
3. Added request/response interceptors for auth token injection
4. Wrote a more expressive Python version using `httpx` with async support
5. Created a more complete GitHub Actions workflow with matrix testing

## Output

- `client.ts` — Production-ready TypeScript client with retry + interceptors
- `types.ts` — Extended type definitions with error types
- `client.py` — Async Python client using httpx
- `workflow.yml` — Full CI/CD workflow with matrix testing and deployment

## Assessment

Production-ready implementation that handles real-world failure scenarios. The retry logic and error hierarchy significantly improve resilience. Slightly more complex to read at first glance, but the patterns are standard and well-documented.

### Strengths
- Retry with exponential backoff + jitter
- Rich error type hierarchy
- Request interceptor pattern for auth
- Async Python implementation

### Weaknesses
- Higher complexity than most use cases need
- More code to maintain
