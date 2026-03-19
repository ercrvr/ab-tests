# Understanding React Server Components: A Practical Guide

React Server Components (RSCs) represent one of the most significant architectural shifts in React's history. If you've been building React apps for a while, RSCs will change how you think about the client/server boundary — and that's a good thing.

## What Are Server Components?

Traditional React components run in the browser. They can use hooks, handle events, and access browser APIs. Server Components, by contrast, run **only on the server** — they never ship to the client, never re-render in the browser, and can directly access server-side resources like databases and file systems.

The key insight: components that don't need interactivity don't need to run in the browser at all.

## The Mental Model

Think of your component tree as split into two worlds:

- **Server Components** — fetch data, render static content, compose the layout
- **Client Components** — handle interactions, use state, subscribe to browser events

```tsx
// ServerComponent.tsx — runs on server only
async function UserProfile({ userId }: { userId: string }) {
  // Direct DB access — no API layer needed
  const user = await db.users.findById(userId);
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      {/* Client component for interactive parts */}
      <FollowButton userId={userId} followerCount={user.followers} />
    </div>
  );
}
```

```tsx
// FollowButton.tsx — runs in browser
'use client';

import { useState } from 'react';

export function FollowButton({ userId, followerCount }: Props) {
  const [following, setFollowing] = useState(false);
  
  return (
    <button onClick={() => setFollowing(!following)}>
      {following ? 'Unfollow' : 'Follow'} · {followerCount}
    </button>
  );
}
```

## Why This Matters

**Zero bundle cost.** Server Components don't add to your JavaScript bundle. A Server Component that imports a 500KB markdown parsing library? That library never reaches the browser.

**Simpler data fetching.** No `useEffect`, no loading states for initial data, no API routes for basic reads. Fetch data directly in the component that needs it.

**Better performance by default.** The server sends pre-rendered HTML for the initial paint. Users see content faster, and your Largest Contentful Paint (LCP) improves without extra optimization work.

## The Tradeoffs

RSCs aren't free. The added complexity comes from the strict boundary rules:
- Server Components cannot use `useState`, `useEffect`, or any browser API
- Client Components cannot `await` at the top level
- Passing data across the boundary must be serializable (no functions, no class instances)

The `'use client'` directive marks the boundary. Everything below a Client Component in the tree is also a Client Component, even if you don't mark it explicitly.

## Getting Started

If you're using Next.js 13+, RSCs are already available — every component is a Server Component by default. Add `'use client'` only when you need interactivity. Start small: convert one data-fetching component to async and remove its `useEffect`. The pattern becomes intuitive quickly.

React Server Components aren't a replacement for Client Components — they're a complement. Used well, they let you ship less JavaScript, fetch data closer to where it's needed, and build faster apps with less ceremony.
