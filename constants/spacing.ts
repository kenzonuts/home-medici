/**
 * Design system spacing guidelines.
 * Prefer these tokens over magic numbers in components.
 */
export const spacing = {
  section: {
    sm: "var(--section-space-sm)",
    md: "var(--section-space-md)",
    lg: "var(--section-space-lg)",
    xl: "var(--section-space-xl)",
  },
  component: {
    xs: "var(--component-space-xs)",
    sm: "var(--component-space-sm)",
    md: "var(--component-space-md)",
    lg: "var(--component-space-lg)",
    xl: "var(--component-space-xl)",
  },
  card: {
    sm: "var(--card-padding-sm)",
    md: "var(--card-padding-md)",
    lg: "var(--card-padding-lg)",
    gap: "var(--card-gap)",
  },
  text: {
    xs: "var(--text-space-xs)",
    sm: "var(--text-space-sm)",
    md: "var(--text-space-md)",
    lg: "var(--text-space-lg)",
  },
} as const;

export type SectionSpacing = keyof typeof spacing.section;
export type ComponentSpacing = keyof typeof spacing.component;
export type CardSpacing = keyof typeof spacing.card;
export type TextSpacing = keyof typeof spacing.text;
