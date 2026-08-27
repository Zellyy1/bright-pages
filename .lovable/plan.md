# Plan: Design polish, code refactor, README rewrite

## 1. Design improvements

Keep the minimal personal-site feel, sharpen the details:

- **Typography & identity**: swap the default system sans for a distinctive pairing (heading + body) loaded via a `<link>` in the root head, with a mono face for dates/tags. This is the single biggest change away from the generic look.
- **Sticky, quieter header**: translucent blurred header that sticks on scroll, with an underline indicator on the active nav item instead of just bolder text.
- **Profile block**: subtle ring + soft shadow on the avatar, availability/location line, and links rendered as small bordered chips with icons rather than plain underlined text.
- **List rows**: keep them compact, but add a hover state that shifts the title slightly and reveals a chevron; category becomes a small monospace tag with a leading dot; dates formatted as "Aug 15, 2026" instead of raw ISO.
- **Blog post page**: reading-time estimate next to the date, better prose rhythm (measure ~68ch), styled code blocks with a language label, and a footer with prev/next post links.
- **Projects page**: same row rhythm as blogs, with tags as chips.
- **Footer**: small site footer with copyright and links, shared across routes.
- **Empty/interaction polish**: visible focus rings on all links, smooth scroll behaviour, and the existing entrance animation reused consistently.

## 2. Codebase refactor

- Move shared page chrome (`max-w-3xl px-4 py-12` main wrapper) into a `PageContainer` component so routes stop repeating layout classes.
- Extract the duplicated list-row markup used by `PostCard` and the projects page into one `ListRow` primitive; `PostCard` and a new `ProjectCard` become thin wrappers.
- Add `src/lib/format.ts` with `formatDate` and `readingTime` helpers; remove date strings formatted inline.
- Centralise site metadata (name, title, description, URL) in `src/data/site.ts` and build route `head()` meta through a small `buildMeta()` helper — removes the copy-pasted og/twitter blocks in every route.
- Type cleanup: shared `Post`/`Project` types stay in `src/data`, drop redundant inline annotations in `blog.$slug.tsx`.
- Move the animation delay utilities into a single `rise-delay-*` set already in `styles.css` and remove any unused tokens (chart/sidebar variables) that no component references.
- Prune remaining unused dependencies and confirm no dead files remain.

## 3. README rewrite

Replace the boilerplate with a real project README:

- Project title and one-line description of the site (personal blog + projects, light/dark).
- Feature list (file-based routing, static content, theme toggle, SEO metadata per route, entrance animations).
- Tech stack (TanStack Start, React 19, Vite 7, Tailwind v4, TypeScript).
- Project structure tree of `src/`.
- How to edit content: where posts, projects and profile data live, and how to swap the avatar.
- Local development commands, plus deploy notes and the Lovable link.

## Technical notes

- Files added: `src/components/PageContainer.tsx`, `src/components/ListRow.tsx`, `src/components/Footer.tsx`, `src/lib/format.ts`, `src/data/site.ts`.
- Files changed: `Header.tsx`, `PostCard.tsx`, `ProfileHeader.tsx`, `routes/__root.tsx`, `routes/index.tsx`, `routes/projects.tsx`, `routes/blog.$slug.tsx`, `styles.css`, `README.md`.
- No backend; all content stays local and typed. Verified with a build plus a browser pass on both themes.

## Out of scope

- CMS/database-backed posts, search, comments, RSS (can be added later).
