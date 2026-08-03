import type { Transition, Variants } from "framer-motion";

import { transition as transitionTokens } from "@/constants/transition";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const baseTransition: Transition = {
  duration: transitionTokens.slow / 1000,
  ease: easeOut,
};

/** Fade in while rising from below. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

/** Fade in while descending from above. */
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

/** Fade in from the left. */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

/** Fade in from the right. */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

/** Soft scale-in entrance. */
export const scale: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: baseTransition,
  },
};

/** Slightly stronger zoom entrance. */
export const zoom: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...baseTransition,
      duration: transitionTokens.normal / 1000,
    },
  },
};

/** Parent container that staggers children. */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

/** Child item used with `staggerContainer`. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

export const motionPresets = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scale,
  zoom,
  staggerContainer,
  staggerItem,
} as const;

export type MotionPresetName = keyof typeof motionPresets;
