"use client";

import { Eye } from "lucide-react";

import { GalleryPlaceholderImage } from "@/components/sections/gallery/GalleryPlaceholderImage";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { HeadingSM } from "@/components/ui/Typography";
import type { GalleryItem } from "@/constants/gallery";
import { cn } from "@/lib/utils";

export type GalleryCardProps = {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
};

const aspectClassMap: Record<GalleryItem["aspect"], string> = {
  square: "aspect-square",
  wide: "aspect-[4/3] sm:aspect-[16/11]",
  portrait: "aspect-[4/5]",
};

export function GalleryCard({ item, onOpen }: GalleryCardProps) {
  return (
    <Card
      padding="none"
      interactive
      className="group overflow-hidden transition-transform duration-200 hover:-translate-y-1"
    >
      <button
        type="button"
        className="block w-full text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        onClick={() => onOpen(item)}
        aria-label={`Lihat preview ${item.title}`}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-muted",
            aspectClassMap[item.aspect],
          )}
        >
          <GalleryPlaceholderImage
            label={item.imageLabel}
            tone={item.tone}
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/25" />
          <div className="absolute top-4 left-4">
            <Badge variant="outline">{item.categoryLabel}</Badge>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100">
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-surface/95 text-primary shadow-md">
              <Eye className="size-5" aria-hidden />
            </span>
          </div>
        </div>
        <div className="card-padding-sm">
          <HeadingSM as="h3" className="text-base sm:text-lg">
            {item.title}
          </HeadingSM>
        </div>
      </button>
    </Card>
  );
}
