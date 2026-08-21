export type Post = {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: Array<{ type: "paragraph"; text: string } | { type: "code"; code: string; language: string }>;
};

export const posts: Post[] = [
  {
    id: "1",
    slug: "getting-started-with-react-server-components",
    title: "Getting Started with React Server Components",
    date: "2026-08-15",
    category: "React",
    excerpt:
      "A practical introduction to React Server Components and how they change the way we build data-driven UIs.",
    content: [
      {
        type: "paragraph",
        text: "React Server Components blur the line between client and server in a React application. Instead of shipping every component to the browser, you can render parts of your UI directly on the server and stream the result to the client.",
      },
      {
        type: "paragraph",
        text: "This pattern is especially useful for data-heavy pages. You can query a database or call an API inside a component, without exposing those endpoints or credentials to the client.",
      },
      {
        type: "code",
        code: "async function NoteList() {\n  const notes = await db.notes.findAll();\n  return (\n    <ul>\n      {notes.map((note) => (\n        <li key={note.id}>{note.title}</li>\n      ))}\n    </ul>\n  );\n}",
        language: "tsx",
      },
      {
        type: "paragraph",
        text: "The key thing to remember is that server components cannot use hooks or browser APIs. They are meant to be async data loaders and layout shells, while interactivity still lives in client components.",
      },
    ],
  },
  {
    id: "2",
    slug: "tailwind-v4-css-first-config",
    title: "Tailwind CSS v4: A CSS-First Configuration",
    date: "2026-08-08",
    category: "CSS",
    excerpt:
      "Tailwind v4 moves the design system from JavaScript configuration into CSS. Here is what that means for your next project.",
    content: [
      {
        type: "paragraph",
        text: "With Tailwind CSS v4, the configuration file is gone. Theme tokens are defined directly in your CSS using the @theme directive, which makes the relationship between design tokens and generated utilities much clearer.",
      },
      {
        type: "code",
        code: "@theme {\n  --color-brand: oklch(0.62 0.19 256);\n  --font-display: \"Inter\", sans-serif;\n}\n\n.brand {\n  background-color: var(--color-brand);\n}",
        language: "css",
      },
      {
        type: "paragraph",
        text: "Custom utilities are now registered with @utility, and custom variants with @custom-variant. This keeps the styling surface in one place and reduces the mental overhead of jumping between a JS config and your components.",
      },
    ],
  },
  {
    id: "3",
    slug: "tanstack-start-server-functions",
    title: "TanStack Start Server Functions in Practice",
    date: "2026-07-28",
    category: "Full-stack",
    excerpt:
      "How createServerFn gives you type-safe RPC between your React components and the server without writing API routes by hand.",
    content: [
      {
        type: "paragraph",
        text: "TanStack Start ships with a first-class server function primitive. createServerFn lets you write a function that runs on the server and call it from a client component as if it were local.",
      },
      {
        type: "paragraph",
        text: "The framework serializes the input, sends it over the wire, executes the handler in the server runtime, and returns the result. All of this is type-safe end-to-end.",
      },
      {
        type: "code",
        code: "export const getPost = createServerFn({ method: \"GET\" })\n  .inputValidator((data) => z.object({ slug: z.string() }).parse(data))\n  .handler(async ({ data }) => {\n    return db.posts.findBySlug(data.slug);\n  });",
        language: "ts",
      },
      {
        type: "paragraph",
        text: "Use server functions for internal app logic, and reserve raw server routes for public endpoints, webhooks, or anything that needs to speak plain HTTP.",
      },
    ],
  },
  {
    id: "4",
    slug: "design-tokens-for-developers",
    title: "Design Tokens for Developers",
    date: "2026-07-12",
    category: "Design Systems",
    excerpt:
      "Why design tokens matter and how to implement them with CSS custom properties so your UI stays consistent across themes.",
    content: [
      {
        type: "paragraph",
        text: "A design token is a single source of truth for a visual decision: a color, a spacing value, a font size, a shadow. By storing tokens as CSS custom properties, you can theme an entire application by updating a handful of variables.",
      },
      {
        type: "paragraph",
        text: "The real power comes from semantic tokens. Instead of using a literal color like #3b82f6, you refer to --color-primary. The same component code can render correctly in light mode, dark mode, or a brand refresh without any changes.",
      },
      {
        type: "code",
        code: ":root {\n  --background: oklch(1 0 0);\n  --foreground: oklch(0.13 0.04 265);\n}\n\n.dark {\n  --background: oklch(0.13 0.04 265);\n  --foreground: oklch(0.98 0 0);\n}",
        language: "css",
      },
      {
        type: "paragraph",
        text: "Pair semantic tokens with a framework that understands them, and you get a UI that is maintainable, testable, and ready for theming.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
