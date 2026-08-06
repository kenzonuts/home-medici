export type NavItem = {
  label: string;
  href: string;
};

/**
 * Primary site navigation.
 * Keep labels/routes centralized — do not hardcode in layout components.
 */
export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Layanan", href: "/layanan" },
  { label: "Tim Medis", href: "/tim-medis" },
  { label: "Galeri", href: "/galeri" },
  { label: "Kontak", href: "/kontak" },
];

/** Footer quick links (subset or same as main nav). */
export const footerNavigation: NavItem[] = mainNavigation;
