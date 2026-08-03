import { FadeLeft, FadeRight } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { GalleryPlaceholderImage } from "@/components/sections/gallery/GalleryPlaceholderImage";
import { Paragraph, SectionTitle } from "@/components/ui/Typography";
import { galleryContent } from "@/constants/gallery";

export function GalleryIntroduction() {
  const { introduction } = galleryContent;

  return (
    <Section id="intro-galeri" aria-labelledby="gallery-intro-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <FadeLeft>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-md">
            <GalleryPlaceholderImage
              label={introduction.imageLabel}
              tone="green"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </FadeLeft>

        <FadeRight>
          <div className="flex flex-col gap-5">
            <SectionTitle
              id="gallery-intro-heading"
              eyebrow={introduction.eyebrow}
              title={introduction.title}
              titleAs="h2"
            />
            <Paragraph className="text-base sm:text-lg">
              {introduction.description}
            </Paragraph>
            <Paragraph>{introduction.body}</Paragraph>
          </div>
        </FadeRight>
      </div>
    </Section>
  );
}
