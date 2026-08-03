import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { CountUp } from "@/components/shared/CountUp";
import { Card } from "@/components/ui/Card";
import { HeadingSM, SectionTitle } from "@/components/ui/Typography";
import { galleryContent } from "@/constants/gallery";

export function GalleryStats() {
  const { statistics } = galleryContent;

  return (
    <Section id="statistik-galeri" aria-labelledby="gallery-stats-heading">
      <FadeUp>
        <SectionTitle
          id="gallery-stats-heading"
          align="center"
          eyebrow={statistics.eyebrow}
          title={statistics.title}
          description={statistics.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.items.map((stat) => (
          <StaggerItem key={stat.id}>
            <Card className="h-full text-center" padding="lg">
              <p className="font-heading text-4xl font-extrabold text-primary sm:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <HeadingSM as="h3" className="mt-3 text-lg">
                {stat.label}
              </HeadingSM>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
