export type ShelfEntry = {
  id: string;
  title: string;
  meta: string;
  tag: string;
  note: string;
  /** 0-5, rendered as dots. */
  rating?: number;
  href?: string;
};

/** AniList: https://anilist.co/user/zellyy */
export const anilistProfile = "https://anilist.co/user/zellyy";

/** Steam profile — swap in your own vanity URL. */
export const steamProfile = "https://steamcommunity.com/id/zellyy";

export const anime: ShelfEntry[] = [
  {
    id: "frieren",
    title: "Frieren: Beyond Journey's End",
    meta: "2023",
    tag: "Watching",
    note: "Quiet, patient fantasy about what an elf does with all that time.",
    rating: 5,
    href: "https://anilist.co/anime/154587",
  },
  {
    id: "vinland-saga",
    title: "Vinland Saga",
    meta: "2019",
    tag: "Completed",
    note: "Revenge arc that turns into the best pacifism arc in anime.",
    rating: 5,
    href: "https://anilist.co/anime/101348",
  },
  {
    id: "steins-gate",
    title: "Steins;Gate",
    meta: "2011",
    tag: "Completed",
    note: "Time travel done with actual rules — and a brutal second half.",
    rating: 5,
    href: "https://anilist.co/anime/9253",
  },
  {
    id: "cyberpunk-edgerunners",
    title: "Cyberpunk: Edgerunners",
    meta: "2022",
    tag: "Completed",
    note: "Ten episodes, zero filler, Trigger at full volume.",
    rating: 4,
    href: "https://anilist.co/anime/141410",
  },
  {
    id: "monogatari",
    title: "Monogatari Series",
    meta: "2009",
    tag: "Planning",
    note: "Been told the dialogue is the whole point. Starting soon.",
    href: "https://anilist.co/anime/5081",
  },
];

export const games: ShelfEntry[] = [
  {
    id: "elden-ring",
    title: "Elden Ring",
    meta: "120 h",
    tag: "Playing",
    note: "Still getting lost in Caelid instead of finishing the main path.",
    rating: 5,
    href: "https://store.steampowered.com/app/1245620/",
  },
  {
    id: "hades",
    title: "Hades",
    meta: "60 h",
    tag: "Completed",
    note: "The run loop I keep coming back to when I have 20 free minutes.",
    rating: 5,
    href: "https://store.steampowered.com/app/1145360/",
  },
  {
    id: "valorant",
    title: "VALORANT",
    meta: "Ongoing",
    tag: "Playing",
    note: "Late-night ranked with friends. Aim is a work in progress.",
    rating: 4,
  },
  {
    id: "outer-wilds",
    title: "Outer Wilds",
    meta: "25 h",
    tag: "Completed",
    note: "A game made entirely of knowledge. Do not read anything about it.",
    rating: 5,
    href: "https://store.steampowered.com/app/753640/",
  },
  {
    id: "balatro",
    title: "Balatro",
    meta: "30 h",
    tag: "Playing",
    note: "One more run. Every single time.",
    rating: 4,
    href: "https://store.steampowered.com/app/2379780/",
  },
];
