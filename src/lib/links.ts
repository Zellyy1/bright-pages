/** Props for an anchor: external links open in a new, isolated tab. */
export function linkProps(href: string) {
  const external = /^https?:/i.test(href);
  return external ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
