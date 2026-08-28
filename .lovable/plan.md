# Plan: visible light gradient, site additions, perf + security pass

## 1. Fix the light-mode sky gradient

Current light tokens are `--bg-from: oklch(0.975 0.012 235)` fading to pure white — about a 2.5% lightness difference, which is invisible on most screens. The dark gradient works because its two stops differ by ~10%.

- Deepen the top stop to a real (still soft) sky tint and let it fade to near-white lower down, with the gradient reaching its base colour around 60% height so the sky reads as "at the top".
- Keep it a fixed, non-scrolling layer so it stays put across routes.
- Verify in the browser at both themes with a screenshot before/after, and confirm the circular theme transition still animates over it.

## 2. Suggested additions (pick what you like)

Ordered by how well they fit a minimal, clean personal site:

1. **Now page** — a short "what I'm currently playing / watching / reading / building" page, updated by editing one typed file. Cheapest way to make the site feel alive.
2. **Anime + games shelf** — a compact list (title, year, one-line take, optional rating dots) under `/watching` and `/playing`, reusing the existing `ListRow` primitive so it matches the blog rows exactly.
3. **Reading list / bookmarks** — links to tech articles worth keeping, with a one-line note each. Same row component.
4. **Tags and filtering on the blog** — clickable tag chips that filter the list client-side; useful once you have more than ~8 posts.
5. **Command palette (Cmd+K)** — fuzzy jump to any post, project or page. Small, keyboard-first, very much the minimal-site aesthetic.
6. **Polish animations** — scroll-reveal on rows (IntersectionObserver, one shared hook), an animated underline on the active nav item, and a subtle cursor-follow glow that respects `prefers-reduced-motion`.
7. **RSS feed** at `/rss.xml` plus a `sitemap.xml`, generated from the existing typed post data.

I'd start with 1 + 2 + 6, since they directly reflect your hobbies and keep the visual language unchanged. Tell me which ones you want and I'll fold them into the build.

## 3. Performance and security checks

- **Security scan** — run the project security scanner and report findings; the site is fully static with no backend, no auth and no user input, so the expected surface is limited to external links, the served PGP file and response headers.
- **Link hygiene audit** — confirm every outbound anchor carries `rel="noopener noreferrer"` through the shared `linkProps` helper.
- **Dependency scan** — check the installed packages for known advisories.
- **Performance pass** — production build, then measure bundle size per route, check the Google Fonts request count (currently three families; consider dropping unused weights), confirm the fixed background gradient isn't forcing repaints on scroll, and check that images (avatar) are sized and lazily handled.
- Report results as a short list with anything worth fixing, and fix the clear wins in the same pass.

## Technical notes

- Files touched for item 1: `src/styles.css` only (`--bg-from` / `--bg-to` under `:root`).
- Items in section 2 are not built until you choose; each new page would be a route file plus a typed data file, following the existing `posts.ts` / `projects.ts` pattern.
- No backend or database is needed for anything above.
