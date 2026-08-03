"use client";

import { useMemo, useState } from "react";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { GalleryCard } from "@/components/sections/gallery/GalleryCard";
import { GalleryFilter } from "@/components/sections/gallery/GalleryFilter";
import { Lightbox } from "@/components/sections/gallery/Lightbox";
import type {
  GalleryCategory,
  GalleryCategoryId,
  GalleryItem,
} from "@/constants/gallery";

export type GalleryBrowserProps = {
  categories: readonly GalleryCategory[];
  items: readonly GalleryItem[];
};

export function GalleryBrowser({ categories, items }: GalleryBrowserProps) {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategoryId>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <div className="flex flex-col gap-10">
      <FadeUp>
        <GalleryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </FadeUp>

      <StaggerContainer className="grid auto-rows-[1fr] gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {filteredItems.map((item) => (
          <StaggerItem key={item.id}>
            <GalleryCard item={item} onOpen={setActiveItem} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Lightbox
        items={filteredItems}
        activeItem={activeItem}
        onClose={() => setActiveItem(null)}
        onChange={setActiveItem}
      />
    </div>
  );
}
