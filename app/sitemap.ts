import type { MetadataRoute } from "next";

import { articles } from "@/constants/articles";
import { mainNavigation } from "@/constants/navigation";
import { SITE_URL } from "@/constants/site";

function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = Array.from(
    new Set(mainNavigation.map((item) => item.href)),
  ).map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.8,
  }));

  const articleRoutes = articles.map((article) => ({
    url: absoluteUrl(`/articles/${article.slug}`),
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
