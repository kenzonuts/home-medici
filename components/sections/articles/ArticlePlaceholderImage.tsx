import Image from "next/image";

import { cn } from "@/lib/utils";

export type ArticlePlaceholderImageProps = {
  label: string;
  priority?: boolean;
  sizes: string;
  className?: string;
};

function createArticleSvg(label: string) {
  const safeLabel = label.replace(/[<>&"]/g, "");

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 780" role="img" aria-label="${safeLabel}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#ecfdf5" />
          <stop offset="0.52" stop-color="#e0f2fe" />
          <stop offset="1" stop-color="#16a34a" stop-opacity="0.34" />
        </linearGradient>
      </defs>
      <rect width="1200" height="780" fill="url(#bg)" />
      <rect x="120" y="118" width="960" height="544" rx="34" fill="#ffffff" opacity="0.42" />
      <rect x="212" y="222" width="420" height="44" rx="12" fill="#0f172a" opacity="0.16" />
      <rect x="212" y="306" width="776" height="26" rx="10" fill="#0f172a" opacity="0.12" />
      <rect x="212" y="360" width="664" height="26" rx="10" fill="#0f172a" opacity="0.1" />
      <rect x="212" y="414" width="724" height="26" rx="10" fill="#0f172a" opacity="0.1" />
      <circle cx="944" cy="242" r="58" fill="#16a34a" opacity="0.26" />
      <text x="600" y="610" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="700" fill="#0f172a" opacity="0.6">${safeLabel}</text>
    </svg>
  `)}`;
}

export function ArticlePlaceholderImage({
  label,
  priority = false,
  sizes,
  className,
}: ArticlePlaceholderImageProps) {
  return (
    <Image
      src={createArticleSvg(label)}
      alt={label}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  );
}
