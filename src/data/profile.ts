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
  role: "Frontend engineer & writer",
  location: "Kolkata, India · open to work",
  description:
    "I build web interfaces and write about the things I learn along the way — React, CSS, and design systems. This is my corner of the internet for short, practical notes and side projects.",
  links: [
    { label: "GitHub", href: "https://github.com" },
    { label: "X", href: "https://x.com" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
};
