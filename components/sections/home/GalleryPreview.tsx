import Image from "next/image";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { SectionCTA } from "@/components/shared/SectionCTA";
import { GalleryCard } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/Typography";
import { homepageContent } from "@/constants/homepage";

export function GalleryPreview() {
  const { gallery } = homepageContent;

  return (
    <Section
      id="galeri"
      aria-labelledby="gallery-heading"
      spacing="lg"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="gallery-heading"
          align="center"
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          description={gallery.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-6">
        {gallery.items.map((item) => (
          <StaggerItem key={item.id}>
            <GalleryCard
              className="transition-transform duration-200 hover:-translate-y-1"
              media={
                item.imageSrc ? (
                  <Image
                    src={item.imageSrc}
                    alt={item.label}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : undefined
              }
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUp>
        <SectionCTA href={gallery.ctaHref} label={gallery.ctaLabel} />
      </FadeUp>
    </Section>
  );
}
