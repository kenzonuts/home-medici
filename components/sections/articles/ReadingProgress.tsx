"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(Math.min(100, Math.max(0, nextProgress * 100)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className="z-fixed fixed top-0 left-0 h-1 bg-primary transition-[width] duration-150"
      style={{ width: `${progress}%` }}
      aria-hidden
    />
  );
}
