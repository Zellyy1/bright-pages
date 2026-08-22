# Plan: Read-only profile, load animation, cleanup

## 1. Make the profile read-only

- Remove the avatar upload UI entirely from the profile block: no camera button, no remove button, no hidden file input, no localStorage read/write of image data.
- The avatar becomes a plain image sourced from the bundled asset in `src/assets/`, with name, role, description and links coming from `src/data/profile.ts`.
- To change your picture later, you replace the file in `src/assets/` (or point the profile data at an image URL) — visitors can never change it, and nothing user-supplied is rendered.

## 2. Startup animation

- A short, tasteful entrance on first paint: content fades in and rises slightly (roughly 400-500ms), staggered so the profile block appears first, then the section heading, then the list rows.
- Pure CSS keyframes defined in `src/styles.css` plus small utility classes with delay steps — no animation library, no layout shift.
- Respects `prefers-reduced-motion`: animation is disabled for users who ask for reduced motion.
- Applied on both the home page and the projects page for consistency.

## 3. Security pass

- Dropping the file-upload path removes the only untrusted input surface (data-URL images written to storage and rendered back).
- External project links get `rel="noopener noreferrer"` alongside `target="_blank"`.
- Profile links (GitHub, X) get the same treatment; mail links stay plain.
- No secrets, no backend, no user data — the site stays fully static, so there is nothing else to lock down.

## 4. Code cleanup

- Delete the unused shadcn UI kit (`src/components/ui/*`) and `src/hooks/use-mobile.tsx` — nothing in the app imports them; this trims a large amount of dead code.
- Remove now-unused dependencies from `package.json` that only those files pulled in (Radix packages, embla, recharts, react-day-picker, etc.), keeping ones still in use (lucide-react, clsx, tailwind-merge, TanStack).
- Simplify `ProfileHeader.tsx` down to markup only (no state, no effects, no refs).
- Keep `src/lib/utils.ts` (`cn`) since components use it.

## Technical notes

- Files changed: `src/components/ProfileHeader.tsx`, `src/routes/index.tsx`, `src/routes/projects.tsx`, `src/styles.css`, `package.json`.
- Files deleted: `src/components/ui/`, `src/hooks/use-mobile.tsx`.
- Verification: build plus a browser pass to confirm the animation runs, the upload controls are gone, and both routes render unchanged otherwise.

## Out of scope

- Cloud-hosted avatar or an admin-only editor (would need Lovable Cloud auth + storage).
