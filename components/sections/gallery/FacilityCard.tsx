import Image from "next/image";

import { GalleryPlaceholderImage } from "@/components/sections/gallery/GalleryPlaceholderImage";
import { Card } from "@/components/ui/Card";
import { HeadingSM, Paragraph } from "@/components/ui/Typography";
import type { FacilityHighlight } from "@/constants/gallery";

export type FacilityCardProps = {
  facility: FacilityHighlight;
};

export function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <Card
      padding="none"
      interactive
      className="h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {facility.imageSrc ? (
          <Image
            src={facility.imageSrc}
            alt={facility.imageLabel}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <GalleryPlaceholderImage
            label={facility.imageLabel}
            tone={facility.tone}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="card-padding-md">
        <HeadingSM as="h3" className="mb-2">
          {facility.name}
        </HeadingSM>
        <Paragraph>{facility.description}</Paragraph>
      </div>
    </Card>
  );
}
