import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { FacilityCard } from "@/components/sections/gallery/FacilityCard";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/Typography";
import { galleryContent } from "@/constants/gallery";

export function FeaturedFacilities() {
  const { facilities } = galleryContent;

  return (
    <Section id="fasilitas-galeri" aria-labelledby="facilities-gallery-heading">
      <FadeUp>
        <SectionTitle
          id="facilities-gallery-heading"
          align="center"
          eyebrow={facilities.eyebrow}
          title={facilities.title}
          description={facilities.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.items.map((facility) => (
          <StaggerItem key={facility.id}>
            <FacilityCard facility={facility} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
