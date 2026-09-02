export type NowItem = {
  label: string;
  value: string;
  detail: string;
};

/** Last time this page was reviewed — shown so readers know how fresh it is. */
export const nowUpdated = "2026-08-28";

export const now: NowItem[] = [
  {
    label: "Building",
    value: "This site",
    detail: "A small, fast personal site in TanStack Start with no backend at all.",
  },
  {
    label: "Learning",
    value: "Python & Java",
    detail: "Working through data structures and writing up what finally clicks.",
  },
  {
    label: "Watching",
    value: "Frieren: Beyond Journey's End",
    detail: "Slow fantasy that respects your patience.",
  },
  {
    label: "Playing",
    value: "Elden Ring",
    detail: "Exploring far more than progressing.",
  },
  {
    label: "Reading",
    value: "Tech writing & design systems",
    detail: "Mostly engineering blogs, CSS deep dives and release notes.",
  },
  {
    label: "Open to",
    value: "Internships & collaborations",
    detail: "Tamil Nadu, India — remote friendly.",
  },
];
