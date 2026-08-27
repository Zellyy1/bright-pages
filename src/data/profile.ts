export type ProfileLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  description: string;
  links: ProfileLink[];
};

export const profile: Profile = {
  name: "Premnath",
  role: "Student & writer",
  location: "Tamil Nadu, India · open to work",
  description:
    "I explore new tech and write about the things I learn along the way — Python, Java and design systems. This is my corner of the internet for experimenting stuffs and side projects.",
  links: [
    { label: "GitHub", href: "https://github.com/Zellyy1" },
    { label: "X", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { label: "Email", href: "mailto:premnath4th@gmail.com" },
  ],
};
