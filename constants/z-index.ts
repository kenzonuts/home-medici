/**
 * Shared z-index scale for stacking contexts.
 */
export const zIndex = {
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  overlay: 40,
  modal: 50,
  popover: 60,
  toast: 70,
  tooltip: 80,
} as const;

export type ZIndexToken = keyof typeof zIndex;
