# Premnath — Personal Blog & Projects

A small, fast personal site: short technical notes, a projects list, and a light/dark theme toggle. No CMS, no database — all content is typed data in the repo.

Live: https://prem-folio.lovable.app

## Features

- File-based routing with TanStack Start (home, `/projects`, `/blog/:slug`)
- Compact list rows for posts and projects, editorial typography
- Light / dark theme that follows the system preference and persists in `localStorage`, with no flash on first paint
- Per-route SEO metadata (title, description, Open Graph, canonical) plus Article JSON-LD on posts
- Reading time, formatted dates, and prev/next navigation on posts
- Subtle staggered entrance animation that respects `prefers-reduced-motion`

## Tech stack

| | |
| --- | --- |
| Framework | TanStack Start v1 (React 19) |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 (CSS-first, `src/styles.css`) |
| Language | TypeScript |
| Icons | lucide-react |

## Project structure

```text
src/
  assets/           avatar image
  components/       Header, Footer, ProfileHeader, ListRow, PostCard, ProjectCard, ThemeToggle
  data/             posts.ts, projects.ts, profile.ts, site.ts  <- all content lives here
  lib/              formatting + utility helpers
  routes/           __root.tsx, index.tsx, projects.tsx, blog.$slug.tsx
  styles.css        design tokens, theme, animations
```

## Editing content

| What | Where |
| --- | --- |
| Blog posts | `src/data/posts.ts` — add an object with `slug`, `title`, `date` (`YYYY-MM-DD`), `category`, `excerpt`, and `content` blocks (`paragraph` or `code`) |
| Projects | `src/data/projects.ts` |
| Name, role, bio, links | `src/data/profile.ts` |
| Site name / URL / default meta | `src/data/site.ts` |
| Profile picture | replace `src/assets/avatar.jpg` |
| Colors, fonts, animation | `src/styles.css` |

Content is read-only for visitors — there is no upload or edit UI.

## Development

Requires Node.js and npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

```sh
git clone <this-repository-url>
cd <repository-name>
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run lint     # eslint
npm run format   # prettier
```

## Deploying

The site is built and hosted through [Lovable](https://lovable.dev/projects/97f4577c-d933-4bcf-8152-f9ce9bda3efa) — open the project and hit **Publish**. Every change made in Lovable is committed straight to this repository, and pushes to `main` sync back into Lovable.
