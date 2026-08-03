import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { expertiseIconMap } from "@/components/sections/team/icons";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { teamContent } from "@/constants/team";

export function ExpertiseAreas() {
  const { expertise } = teamContent;

  return (
    <Section id="keahlian" aria-labelledby="expertise-heading">
      <FadeUp>
        <SectionTitle
          id="expertise-heading"
          align="center"
          eyebrow={expertise.eyebrow}
          title={expertise.title}
          description={expertise.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {expertise.items.map((item) => {
          const Icon = expertiseIconMap[item.icon];

          return (
            <StaggerItem key={item.id}>
              <Card
                className="h-full transition-transform duration-200 hover:-translate-y-1"
                padding="lg"
              >
                <IconWrapper variant="secondary" size="lg" className="mb-5">
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
