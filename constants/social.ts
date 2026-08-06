export type SocialLink = {
  label: string;
  href: string;
  /** Lucide icon key resolved in the Footer component. */
  icon: "instagram" | "facebook" | "youtube" | "tiktok";
};

/**
 * Social profiles — empty href hides the link from the UI.
 */
export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "", icon: "instagram" },
  { label: "Facebook", href: "", icon: "facebook" },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@rumah.sunat.modern.jati",
    icon: "tiktok",
  },
];
