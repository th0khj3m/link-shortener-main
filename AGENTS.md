# Agent Instructions

This project maintains strict standards to ensure consistency, quality, and maintainability across the codebase.

## CRITICAL: Documentation First

**It is incredibly important to ALWAYS read the relevant documentation in the [docs/](docs/) directory BEFORE generating any code.** These documents contain the architectural decisions and coding standards specific to this project.

### Standards Documentation

- [Authentication Standards](docs/auth.md)
- [General Coding Standards](docs/general.md)
- [TypeScript Standards](docs/typescript.md)
- [Next.js Standards](docs/nextjs.md)
- [Styling Standards](docs/styling.md)
- [Shadcn UI Standards](docs/shadcn.md)

## Implementation Notes

### Middleware and Proxying

- **Do not use `proxy.ts` and `middleware.ts` simultaneously.**
- Prefer using the `proxy.ts` file, as `middleware.ts` has been deprecated in later versions of Next.js for certain use cases in this project.

## How to Use These Instructions

When starting a new task:

1. **Identify the scope** of the task (e.g., UI, Auth, API).
2. **Read the corresponding .md files** in the [docs/](docs/) directory.
3. **Align your implementation** with the project's established architecture and style.
