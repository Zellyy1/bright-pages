# Plan: Profile Header, Nav Sections, Compact Post List

## Goal
Turn the blog home into a personal site: a profile block at the top (avatar + short bio), a small nav with Blogs and Projects, and tighter, simpler post rows.

## 1. Profile block (home page)
- Circular profile picture (96px), name, one-line role, and a 2-3 sentence description beside it.
- Stacks vertically on mobile, side-by-side on desktop.
- Image: a placeholder avatar stored in `src/assets/` and imported directly. You can later swap the file or point it at your own URL. Name/bio live in a single editable `src/data/profile.ts` so text changes are one-line edits.
- Optional small links row (GitHub, X, email) driven by the same file.

## 2. Site headers / navigation
- Header gets nav links: Blogs (`/`), Projects (`/projects`), plus the existing theme toggle.
- New route `/projects` listing project cards: name, one-line description, tech tags, optional link.
- Projects content seeded from `src/data/projects.ts` (same style as posts).
- Each route gets its own unique title/description/OG tags.

## 3. Compact post boxes
- Replace the current card (large padding, big title, excerpt paragraph) with a tight list row:
  - Line 1: title (base size, medium weight) + date right-aligned, muted and small.
  - Line 2: single-line excerpt, truncated, muted.
  - Category as a small text tag, no filled pill.
- Rows separated by hairline borders instead of individual bordered cards; hover tints the row.
- Same treatment reused for project rows so both pages feel consistent.

## Technical notes
- Files touched: `src/components/Header.tsx`, `src/components/PostCard.tsx`, `src/routes/index.tsx`, `src/routes/__root.tsx` (nav only).
- New files: `src/data/profile.ts`, `src/data/projects.ts`, `src/components/ProfileHeader.tsx`, `src/routes/projects.tsx`, avatar asset.
- No backend; all content stays local and typed. Existing dark mode tokens and toggle unchanged.

## Out of scope
- Uploading a profile picture through the UI (would need Lovable Cloud storage). Say the word and I'll add it.
- Auth, CMS, comments, search.
