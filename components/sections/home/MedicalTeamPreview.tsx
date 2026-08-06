import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { SectionCTA } from "@/components/shared/SectionCTA";
import { DoctorCard } from "@/components/ui/Card";
import { Caption, HeadingSM, SectionTitle } from "@/components/ui/Typography";
import { homepageContent } from "@/constants/homepage";

export function MedicalTeamPreview() {
  const { team } = homepageContent;

  return (
    <Section id="tim-medis" aria-labelledby="team-heading" spacing="lg">
      <FadeUp>
        <SectionTitle
          id="team-heading"
          align="center"
          eyebrow={team.eyebrow}
          title={team.title}
          description={team.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.items.map((doctor) => (
          <StaggerItem key={doctor.id}>
            <DoctorCard
              className="transition-transform duration-200 hover:-translate-y-1"
              media={
                <ImagePlaceholder
                  label={`Foto ${doctor.name}`}
                  imageSrc={doctor.imageSrc}
                  aspect="portrait"
                  className="rounded-none"
                />
              }
              header={
                <div className="mt-2 space-y-1">
                  <HeadingSM as="h3">{doctor.name}</HeadingSM>
                  <Caption>{doctor.position}</Caption>
                </div>
              }
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUp>
        <SectionCTA href={team.ctaHref} label={team.ctaLabel} />
      </FadeUp>
    </Section>
  );
}
