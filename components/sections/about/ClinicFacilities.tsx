import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Card } from "@/components/ui/Card";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { aboutContent } from "@/constants/about";

export function ClinicFacilities() {
  const { facilities } = aboutContent;

  return (
    <Section id="fasilitas" aria-labelledby="facilities-heading" spacing="lg">
      <FadeUp>
        <SectionTitle
          id="facilities-heading"
          align="center"
          eyebrow={facilities.eyebrow}
          title={facilities.title}
          description={facilities.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.items.map((item) => (
          <StaggerItem key={item.id}>
            <Card
              padding="none"
              interactive
              className="h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1"
            >
              <ImagePlaceholder
                label={item.name}
                imageSrc={item.imageSrc}
                aspect="wide"
                className="rounded-none"
              />
              <div className="card-padding-md">
                <HeadingSM as="h3" className="mb-2">
                  {item.name}
                </HeadingSM>
                <Paragraph>{item.description}</Paragraph>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
