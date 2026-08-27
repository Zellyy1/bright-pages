export const site = {
  name: "Premnath",
  url: "https://prem-folio.lovable.app",
  tagline: "Blogs, notes and projects",
  description:
    "Personal site of Premnath: short, practical notes on React, CSS, full-stack development, and design systems.",
} as const;

type MetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function buildMeta({ title, description, path, type = "website" }: MetaInput) {
  const url = `${site.url}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
