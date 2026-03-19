# React Server Components, Explained Simply

Here's a useful mental model: React Server Components are like a restaurant kitchen. The kitchen (server) does the heavy prep work — chopping vegetables, slow-cooking sauces — and sends finished dishes to the table. The table (browser) handles the interactive part: you pick up your fork, season to taste, have a conversation.

Before RSCs, React put almost everything at the table. Now you can keep the prep work in the kitchen, where it belongs.

## Two Kinds of Components

**Server Components** run on the server, once, at request time. They can:
- Query databases directly
- Read environment variables and secrets
- Access the filesystem
- Import large libraries without affecting bundle size

They cannot use `useState`, `useEffect`, or anything browser-specific.

**Client Components** are the React you already know. Mark them with `'use client'` at the top of the file. They handle clicks, form inputs, animations — anything that needs to respond to user interaction.

## A Concrete Example

```tsx
// This runs on the server — no 'use client' needed
async function ProductPage({ id }: { id: string }) {
  const product = await db.products.find(id); // direct DB query
  
  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <AddToCartButton productId={id} /> {/* client component */}
    </main>
  );
}
```

The `ProductPage` fetches data and renders the static parts. `AddToCartButton` handles the interactive bits. The database query never touches the browser, and the product data arrives pre-rendered in the HTML.

## The Practical Benefits

**Less JavaScript in the browser.** Any library used only in a Server Component stays on the server. Import a 200KB date-formatting library in a Server Component — your users never download it.

**Simpler data fetching.** Fetch data where you need it. No prop drilling, no context juggling, no `useEffect` + `useState` pairs for initial loads.

**Faster time to content.** The server sends rendered HTML. Users see your content before any JavaScript runs.

## What to Watch Out For

The boundary between server and client is strict. You can't pass functions or class instances from server to client — only serializable values (strings, numbers, plain objects, arrays).

The easiest rule to remember: if a component needs interactivity, add `'use client'`. If it only displays data, leave it as a Server Component.

## Try It Today

In Next.js 13+, every component is a Server Component by default. Convert one of your data-fetching components: make it `async`, move the fetch into the component body, and delete the `useEffect`. That's it — you're using RSCs.

Once it clicks, you'll wonder how you wrote React apps without them.
