Plan: Simple Tech Blog Site

Goal
Build a minimal, content-first tech blog on the existing TanStack Start + Tailwind v4 stack. The home page becomes a clean blog listing; individual posts get their own route; a light/dark mode toggle is available in the header on every page.

Scope
- Static blog content seeded from a local data file (no CMS, no auth, no backend).
- Two routes: / (home listing) and /blog/$slug (post detail).
- A header with title, navigation, and a light/dark mode toggle.
- Fully responsive, readable typography.

Design direction
- Clean, editorial tech-blog aesthetic: lots of whitespace, crisp borders, a monospace accent for code/category tags.
- Keep the existing Tailwind v4 token system; add a `code` semantic token if needed.
- No purple/indigo gradients or generic startup-hero look.

Pages and routes
- /index.tsx
  - Hero section: blog title, short tagline, theme toggle in header.
  - List of blog posts as cards: title, date, category, short excerpt.
  - Clicking a card navigates to /blog/$slug.
  - Proper route head() with unique title, description, og and twitter tags.
- /blog/$slug.tsx
  - Back-to-home link.
  - Post title, metadata, category tag.
  - Markdown-style prose rendered from the post content (using plain JSX blocks or simple paragraphs).
  - Proper route head() derived from the post.

Theme toggle
- Add a reusable `ThemeToggle` component in src/components/ThemeToggle.tsx.
- Store preference in localStorage; default to system preference.
- Apply `dark` class on `<html>` to trigger the existing `.dark` CSS variables.
- Place toggle in the site header.
- Guard client-only reads in useEffect / useHydrated to avoid SSR mismatch.

Data
- Create src/data/posts.ts with a typed array of posts.
- Each post: id, slug, title, date, category, excerpt, content (array of paragraphs or sections).
- Keep content plain text/JSX so no markdown parser is needed.

Components
- ThemeToggle: sun/moon icon button with accessible aria-label.
- Header: blog title as Link to /, plus ThemeToggle.
- PostCard: compact card for the listing.
- ProseLayout: consistent max-width and typography wrapper for post content.

SEO / metadata
- Update __root.tsx meta/title to "Tech Blog" defaults.
- Each leaf route provides its own head() with unique title, description, og:title, og:description, og:type, twitter:card.
- No placeholder og:image; let hosting inject the preview screenshot.

Acceptance criteria
- / no longer renders the placeholder image.
- Home lists all seeded posts.
- Each post navigates and displays correctly.
- Theme toggle switches between light and dark and persists after reload.
- No build errors; no 401-prone loaders in public routes; all imports resolve.

Out of scope
- No auth, no CMS, no comments, no backend, no search, no pagination.
