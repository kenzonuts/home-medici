import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { SectionCTA } from "@/components/shared/SectionCTA";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { ServiceCard } from "@/components/ui/Card";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { homepageContent } from "@/constants/homepage";
import { serviceIconMap } from "@/components/sections/home/icons";

export function ServicesPreview() {
  const { services } = homepageContent;

  return (
    <Section
      id="layanan"
      aria-labelledby="services-heading"
      spacing="lg"
      className="bg-background"
    >
      <FadeUp>
        <SectionTitle
          id="services-heading"
          align="center"
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((item) => {
          const Icon = serviceIconMap[item.icon];
          return (
            <StaggerItem key={item.id}>
              <ServiceCard
                className="h-full transition-transform duration-200 hover:-translate-y-1"
                header={
                  <div className="mb-4">
                    <IconWrapper variant="primary" size="lg" rounded="xl">
                      <Icon aria-hidden />
                    </IconWrapper>
                  </div>
                }
              >
                <HeadingSM as="h3">{item.title}</HeadingSM>
                <Paragraph>{item.description}</Paragraph>
              </ServiceCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <FadeUp>
        <SectionCTA href={services.ctaHref} label={services.ctaLabel} />
      </FadeUp>
    </Section>
  );
}
