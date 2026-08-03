import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { teamTrustIconMap } from "@/components/sections/team/icons";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { teamContent } from "@/constants/team";

export function WhyChooseMedicalTeam() {
  const { trust } = teamContent;

  return (
    <Section
      id="kepercayaan-tim-medis"
      aria-labelledby="team-trust-heading"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="team-trust-heading"
          align="center"
          eyebrow={trust.eyebrow}
          title={trust.title}
          description={trust.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trust.items.map((item) => {
          const Icon = teamTrustIconMap[item.icon];

          return (
            <StaggerItem key={item.id}>
              <Card className="h-full" padding="lg">
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
