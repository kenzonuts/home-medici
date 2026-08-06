import type { Transition, Variants } from "framer-motion";

import { transition as transitionTokens } from "@/constants/transition";

const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const baseTransition: Transition = {
  duration: transitionTokens.slow / 1000,
  ease: easeOut,
};

/**
 * Motion variants use transform only (no opacity:0).
 * Opacity-hiding caused images/sections to stay invisible when
 * whileInView failed to fire after hydration.
 */

/** Rise from below. */
export const fadeUp: Variants = {
  hidden: { y: 20 },
  visible: {
    y: 0,
    transition: baseTransition,
  },
};

/** Descend from above. */
export const fadeDown: Variants = {
  hidden: { y: -20 },
  visible: {
    y: 0,
    transition: baseTransition,
  },
};

/** Enter from the left. */
export const fadeLeft: Variants = {
  hidden: { x: -20 },
  visible: {
    x: 0,
    transition: baseTransition,
  },
};

/** Enter from the right. */
export const fadeRight: Variants = {
  hidden: { x: 20 },
  visible: {
    x: 0,
    transition: baseTransition,
  },
};

/** Soft scale-in entrance. */
export const scale: Variants = {
  hidden: { scale: 0.96 },
  visible: {
    scale: 1,
    transition: baseTransition,
  },
};

/** Slightly stronger zoom entrance. */
export const zoom: Variants = {
  hidden: { scale: 0.92 },
  visible: {
    scale: 1,
    transition: {
      ...baseTransition,
      duration: transitionTokens.normal / 1000,
    },
  },
};

/** Parent container that staggers children. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

/** Child item used with `staggerContainer`. */
export const staggerItem: Variants = {
  hidden: { y: 14 },
  visible: {
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
