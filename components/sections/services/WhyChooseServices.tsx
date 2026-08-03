import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { advantageIconMap } from "@/components/sections/services/icons";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { servicesContent } from "@/constants/services";

export function WhyChooseServices() {
  const { advantages } = servicesContent;

  return (
    <Section
      id="keunggulan-layanan"
      aria-labelledby="advantages-heading"
      spacing="lg"
    >
      <FadeUp>
        <SectionTitle
          id="advantages-heading"
          align="center"
          eyebrow={advantages.eyebrow}
          title={advantages.title}
          description={advantages.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.items.map((item) => {
          const Icon = advantageIconMap[item.icon];
          return (
            <StaggerItem key={item.id}>
              <Card className="h-full transition-transform duration-200 hover:-translate-y-1">
                <IconWrapper variant="secondary" size="md" className="mb-4">
                  <Icon aria-hidden />
                </IconWrapper>
                <HeadingSM as="h3" className="mb-2">
                  {item.title}
                </HeadingSM>
                <Paragraph>{item.description}</Paragraph>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
