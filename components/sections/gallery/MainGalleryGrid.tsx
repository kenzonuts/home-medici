import { FadeUp } from "@/components/animations";
import { GalleryBrowser } from "@/components/sections/gallery/GalleryBrowser";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/Typography";
import { galleryContent } from "@/constants/gallery";

export function MainGalleryGrid() {
  const { categories, gallery } = galleryContent;

  return (
    <Section
      id="main-gallery"
      aria-labelledby="main-gallery-heading"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="main-gallery-heading"
          align="center"
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          description={gallery.description}
          className="mb-10"
        />
      </FadeUp>

      <GalleryBrowser categories={categories} items={gallery.items} />
    </Section>
  );
}
