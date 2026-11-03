// Shared by every nav-style control (navbar, footer, command palette, hero
// CTA) so clicking any of them scrolls the same way. If we're not on the
// home page, route there with the section as a hash; otherwise scroll the
// section into view directly.
export function scrollToSection(id: string, router: { push: (href: string) => void }) {
  if (window.location.pathname !== "/") {
    router.push(`/#${id}`);
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
