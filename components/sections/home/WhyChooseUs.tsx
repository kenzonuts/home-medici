import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { featureIconMap } from "@/components/sections/home/icons";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { homepageContent } from "@/constants/homepage";

export function WhyChooseUs() {
  const { whyChooseUs } = homepageContent;

  return (
    <Section
      id="keunggulan"
      aria-labelledby="why-heading"
      spacing="lg"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="why-heading"
          align="center"
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          description={whyChooseUs.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.items.map((item) => {
          const Icon = featureIconMap[item.icon];
          return (
            <StaggerItem key={item.id}>
              <Card className="h-full" padding="md">
                <div className="mb-4">
                  <IconWrapper variant="secondary" size="md" rounded="lg">
                    <Icon aria-hidden />
                  </IconWrapper>
                </div>
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
