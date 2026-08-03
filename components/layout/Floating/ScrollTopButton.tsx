"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export type ScrollTopButtonProps = {
  className?: string;
  /** Scroll distance (px) before the button appears. */
  threshold?: number;
};

export function ScrollTopButton({
  className,
  threshold = 400,
}: ScrollTopButtonProps) {
  const visible = useScrolled(threshold);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          key="scroll-top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Kembali ke atas"
          className={cn(
            "fixed right-4 bottom-20 z-fixed inline-flex size-11 items-center justify-center rounded-full",
            "border border-border bg-surface text-foreground shadow-md sm:right-6 sm:bottom-24",
            "transition-colors hover:border-primary/30 hover:text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className,
          )}
        >
          <ArrowUp className="size-5" aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
