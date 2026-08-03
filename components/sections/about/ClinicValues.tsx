import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { valueIconMap } from "@/components/sections/about/icons";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { aboutContent } from "@/constants/about";

export function ClinicValues() {
  const { values } = aboutContent;

  return (
    <Section
      id="nilai"
      aria-labelledby="values-heading"
      spacing="lg"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="values-heading"
          align="center"
          eyebrow={values.eyebrow}
          title={values.title}
          description={values.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.items.map((item) => {
          const Icon = valueIconMap[item.icon];
          return (
            <StaggerItem key={item.id}>
              <Card className="h-full transition-transform duration-200 hover:-translate-y-1">
                <IconWrapper variant="accent" size="md" className="mb-4">
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
