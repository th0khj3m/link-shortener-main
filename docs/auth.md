# Authentication Standards

This project uses a manual authentication system built with Drizzle ORM and session-based cookies.

## 1. Manual Implementation

- **No External Providers**: Do not use Clerk, Auth0, or other managed auth services.
- **Database**: Use Drizzle ORM to manage `users` and `sessions` tables.
- **Security**: Hash passwords using `argon2id` or `scrypt`. Never store plain-text passwords.

## 2. Session Management

- **Cookies**: Use HTTP-only, secure, and SameSite=Lax cookies for session tokens.
- **Persistence**: Store session data in the database and validate it on the server for every protected request.

## 3. Route Protection

- **Protected Routes**: `/dashboard` and all nested routes require authentication.
- **Redirects**:
  - Unauthenticated users -> `/login` when accessing protected routes.
  - Authenticated users -> `/dashboard` when accessing `/login` or `/register`.

## 4. Implementation Patterns

- **Server Actions**: Use Next.js Server Actions for all authentication logic (login, signup, logout).
- **Validation**: Use `zod` for form validation and schema enforcement.
- **Context**: Provide user state via server-side session fetching; avoid client-side auth context if possible to reduce complexity.
