# Plan: PGP key link, new type, gradient backgrounds, lean refactor

## 1. PGP public key

- Serve your key as a static file at `/pgp.asc` (public folder), rebuilt from the block you pasted with proper line wrapping.
- Add a "PGP" chip to the profile links next to GitHub / X / Email, using a key icon, opening the file in a new tab.
- Add the same link in the footer, plus a short fingerprint line (last 16 hex of the key ID) under the profile chips so people can verify it.

## 2. Typography

- Switch to Space Grotesk for headings and DM Sans for body; keep JetBrains Mono for code, dates and tags.
- Load both via a single Google Fonts `<link>` in the root head (replacing the Instrument Serif / Work Sans link), and update the `--font-display` / `--font-sans` tokens in `styles.css`.
- Retune heading sizes/tracking slightly since the display face is now a sans, not a serif.

## 3. Subtle gradient backgrounds

- Dark: near-black top fading into a deep-sea blue at the bottom.
- Light: soft off-white base with a hint of sky blue at the top.
- Implemented as a fixed, non-scrolling gradient layer on `body` via two theme tokens (`--bg-gradient-from` / `--bg-gradient-to`) so it stays consistent across routes and works with the existing circular theme transition.
- Keep the header's translucent blur so it reads correctly over the gradient; cards/rows stay transparent so the gradient shows through.

## 4. Refactor for speed and readability

- Remove unused design tokens (chart-1..5 and all sidebar-* variables) from `styles.css` — nothing references them.
- Drop the global `html *` transition rule (it animates every element on every property change and costs paint time); scope transitions to the elements that need them.
- Consolidate the shared external-link logic used by `ProfileHeader` and `Footer` into one small `links` helper so the `target`/`rel` handling isn't duplicated.
- Prune any dependencies still in `package.json` that no source file imports.
- Keep the current component structure (`PageContainer`, `ListRow`, `PostCard`, `ProjectCard`) — it is already the right shape.

## Technical notes

- Files added: `public/pgp.asc`.
- Files changed: `src/data/profile.ts` (PGP link + fingerprint), `src/components/ProfileHeader.tsx`, `src/components/Footer.tsx`, `src/routes/__root.tsx` (font link), `src/styles.css` (fonts, gradients, token cleanup), `package.json`.
- Verified with a build plus a browser pass on both themes to confirm the gradient stays subtle and the theme transition still animates cleanly.

## Out of scope

- Keyserver upload or automated key rotation.
