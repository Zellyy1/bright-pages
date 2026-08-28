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
  pgp: {
    href: string;
    fingerprint: string;
  };
};

export const profile: Profile = {
  name: "Premnath",
  role: "Student & writer",
  location: "Tamil Nadu, India · open to work",
  description:
    "I explore new tech and write about the things I learn along the way — Python, Java and design systems. This is my corner of the internet for experimenting stuffs and side projects.",
  links: [
    { label: "GitHub", href: "https://github.com/Zellyy1" },
    { label: "X", href: "https://tinyurl.com/mu2x3exb" },
    { label: "Email", href: "mailto:premnath4th@gmail.com" },
    { label: "PGP", href: "/pgp.asc" },
  ],
  pgp: {
    href: "/pgp.asc",
    fingerprint: "B482 0ACE 5C27 2151 AA24  FE8F 48F6 EB4D 1757 5C19",
  },
};
