"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

import {
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeUp,
  scale,
  staggerContainer,
  staggerItem,
  zoom,
  type MotionPresetName,
  motionPresets,
} from "./variants";

type MotionDivProps = HTMLMotionProps<"div"> & {
  children?: ReactNode;
};

const viewport = { once: true, amount: 0.05, margin: "0px 0px -80px 0px" } as const;

function createMotion(variants: (typeof motionPresets)[MotionPresetName]) {
  return function MotionPreset({
    children,
    className,
    ...props
  }: MotionDivProps) {
    return (
      <motion.div
        className={className}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        {...props}
      >
        {children}
      </motion.div>
    );
  };
}

export const FadeUp = createMotion(fadeUp);
export const FadeDown = createMotion(fadeDown);
export const FadeLeft = createMotion(fadeLeft);
export const FadeRight = createMotion(fadeRight);
export const Scale = createMotion(scale);
export const Zoom = createMotion(zoom);

export function StaggerContainer({
  children,
  className,
  ...props
}: MotionDivProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, ...props }: MotionDivProps) {
  return (
    <motion.div className={className} variants={staggerItem} {...props}>
      {children}
    </motion.div>
  );
}
