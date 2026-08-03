export type SocialLink = {
  label: string;
  href: string;
  /** Lucide icon key resolved in the Footer component. */
  icon: "instagram" | "facebook" | "youtube";
};

/**
 * Social profiles — update `href` when accounts are ready.
 * Empty href hides the link from the UI.
 */
export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "", icon: "instagram" },
  { label: "Facebook", href: "", icon: "facebook" },
  { label: "YouTube", href: "", icon: "youtube" },
];
