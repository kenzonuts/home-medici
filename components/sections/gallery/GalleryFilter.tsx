"use client";

import type { GalleryCategory, GalleryCategoryId } from "@/constants/gallery";
import { cn } from "@/lib/utils";

export type GalleryFilterProps = {
  categories: readonly GalleryCategory[];
  activeCategory: GalleryCategoryId;
  onCategoryChange: (category: GalleryCategoryId) => void;
};

export function GalleryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: GalleryFilterProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2"
      role="tablist"
      aria-label="Filter kategori galeri"
    >
      {categories.map((category) => {
        const isActive = category.id === activeCategory;

        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={cn(
              "min-h-10 rounded-lg border px-4 py-2 font-heading text-sm font-semibold transition-all duration-200",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
              isActive
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
