# Repository Guidelines

## Project Structure & Module Organization

The repository contains a static Astro landing page in `site/`. Page entrypoints
are in `site/src/pages/`, reusable layouts in `site/src/layouts/`, and global
styles in `site/src/styles/`. Public, directly served assets—including fonts,
screenshots, icons, and tour captures—belong in `site/public/`. Browser tests
are in `site/tests/`, with Playwright configuration in
`site/playwright.config.ts`.

## Build, Test, and Development Commands

Run commands from `site/` with Node 22 (see `.nvmrc`):

```sh
npm ci              # Install the locked dependency set
npm run dev         # Start the local Astro server
npm run check       # Run Astro/TypeScript checks
npm run build       # Create the production build
npm run preview     # Serve the production build locally
npm run test:e2e    # Run Playwright browser tests
```

The site uses the `/hunt-companion/` base path. Check links and assets under
that path when testing locally or reviewing a production build.

## Coding Style & Naming Conventions

Use two-space indentation in Astro, TypeScript, and CSS, and keep TypeScript
strict and readable. Prefer semantic HTML, accessible names and states, and
small, focused components. Use PascalCase for component filenames (for example,
`SiteLayout.astro`), kebab-case for static asset names (for example,
`hunt-board.png`), and descriptive lower-case test filenames. Keep formatting
consistent with the surrounding code; `npm run check` is the required static
validation command.

## Testing Guidelines

Playwright tests in `site/tests/` cover content, navigation, tour interaction,
and responsive behavior. Name tests after observable user behavior. Run
`npm run test:e2e` before submitting changes; add or update a test whenever
markup, anchors, controls, or responsive layout behavior changes.

## Commit & Pull Request Guidelines

The repository currently has a minimal history, so use concise imperative
subjects (for example, `Improve tour keyboard navigation`). Pull requests should
explain the user-visible change, list validation commands run, link related
issues when applicable, and include screenshots for visual changes. Keep
generated or unrelated files out of the change.

## Configuration & Asset Notes

This is intentionally local-only: do not add analytics, cookies, forms,
embeds, or external requests without an explicit architectural decision. Treat
the checked-in tour captures as approved assets; preserve their naming and
device/stage pairing when regenerating them.
