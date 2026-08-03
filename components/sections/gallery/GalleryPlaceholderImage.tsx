import Image from "next/image";

import type { GalleryItem } from "@/constants/gallery";
import { cn } from "@/lib/utils";

export type GalleryPlaceholderImageProps = {
  label: string;
  tone?: GalleryItem["tone"];
  priority?: boolean;
  sizes: string;
  className?: string;
};

const toneMap: Record<GalleryItem["tone"], { start: string; end: string }> = {
  green: { start: "#dcfce7", end: "#16a34a" },
  blue: { start: "#e0f2fe", end: "#0ea5e9" },
  teal: { start: "#ccfbf1", end: "#14b8a6" },
  slate: { start: "#f1f5f9", end: "#64748b" },
};

function createPlaceholderSvg(label: string, tone: GalleryItem["tone"]) {
  const colors = toneMap[tone];
  const safeLabel = label.replace(/[<>&"]/g, "");

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${safeLabel}">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${colors.start}" />
          <stop offset="1" stop-color="${colors.end}" stop-opacity="0.35" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)" />
      <rect x="110" y="100" width="980" height="700" rx="36" fill="#ffffff" opacity="0.38" />
      <circle cx="396" cy="376" r="70" fill="#ffffff" opacity="0.72" />
      <path d="M246 665 442 494 575 603 689 500 954 665Z" fill="#ffffff" opacity="0.76" />
      <text x="600" y="770" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="42" font-weight="700" fill="#0f172a" opacity="0.64">${safeLabel}</text>
    </svg>
  `)}`;
}

export function GalleryPlaceholderImage({
  label,
  tone = "green",
  priority = false,
  sizes,
  className,
}: GalleryPlaceholderImageProps) {
  const src = createPlaceholderSvg(label, tone);

  return (
    <Image
      src={src}
      alt={label}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  );
}
