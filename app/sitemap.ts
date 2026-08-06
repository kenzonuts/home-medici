import type { MetadataRoute } from "next";

import { mainNavigation } from "@/constants/navigation";
import { SITE_URL } from "@/constants/site";

function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return Array.from(new Set(mainNavigation.map((item) => item.href))).map(
    (path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.8,
    }),
  );
}
