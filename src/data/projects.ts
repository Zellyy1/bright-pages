export type Project = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  href?: string;
  year: string;
};

export const projects: Project[] = [
  {
    id: "1",
    name: "Tokenkit",
    description: "A tiny CLI that turns a Figma variables export into typed CSS custom properties.",
    tags: ["TypeScript", "CLI"],
    href: "https://github.com",
    year: "2026",
  },
  {
    id: "2",
    name: "Streamnotes",
    description: "Realtime collaborative markdown notes with offline-first sync.",
    tags: ["React", "CRDT"],
    href: "https://github.com",
    year: "2025",
  },
  {
    id: "3",
    name: "Hue",
    description: "An oklch color playground for building accessible light and dark palettes.",
    tags: ["CSS", "Design"],
    href: "https://github.com",
    year: "2025",
  },
];
