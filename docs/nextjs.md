# Next.js Standards

This project uses Next.js with the App Router.

## 1. Server vs. Client Components

- **Server Components by Default**: Use Server Components for data fetching.
- **Client Components**: Use `'use client'` only for interactivity or hooks.

## 2. Data Fetching

- Fetch data directly in Server Components using `async/await`.
