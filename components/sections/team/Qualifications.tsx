import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { qualificationIconMap } from "@/components/sections/team/icons";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { teamContent } from "@/constants/team";

export function Qualifications() {
  const { qualifications } = teamContent;

  return (
    <Section
      id="kualifikasi"
      aria-labelledby="qualifications-heading"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="qualifications-heading"
          align="center"
          eyebrow={qualifications.eyebrow}
          title={qualifications.title}
          description={qualifications.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {qualifications.items.map((item) => {
          const Icon = qualificationIconMap[item.icon];

          return (
            <StaggerItem key={item.id}>
              <Card
                className="h-full transition-transform duration-200 hover:-translate-y-1"
                padding="lg"
              >
                <IconWrapper variant="primary" size="lg" className="mb-5">
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
