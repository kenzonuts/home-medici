"use client";

import { useEffect, useState } from "react";

export type ScrollDirection = "up" | "down";

export type ScrollNavState = {
  /** True once vertical scroll exceeds `threshold` pixels. */
  scrolled: boolean;
  /** Latest scroll direction; defaults to `up` near the top. */
  direction: ScrollDirection;
  /** True when the sticky nav should slide out of view. */
  hidden: boolean;
};

/**
 * Tracks scroll position and direction for sticky hide-on-scroll-down navbars.
 */
export function useScrollDirection(threshold = 16): ScrollNavState {
  const [state, setState] = useState<ScrollNavState>({
    scrolled: false,
    direction: "up",
    hidden: false,
  });

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const scrolled = y > threshold;
      const delta = y - lastY;

      // Ignore tiny jitter / rubber-band.
      if (Math.abs(delta) < 4) {
        ticking = false;
        return;
      }

      const direction: ScrollDirection = delta > 0 ? "down" : "up";
      const hidden = scrolled && direction === "down";

      setState({ scrolled, direction, hidden });
      lastY = y < 0 ? 0 : y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return state;
}
