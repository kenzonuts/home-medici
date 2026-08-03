import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { visionMissionIconMap } from "@/components/sections/about/icons";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { aboutContent } from "@/constants/about";

export function VisionMission() {
  const { visionMission } = aboutContent;

  return (
    <Section
      id="visi-misi"
      aria-labelledby="vision-mission-heading"
      spacing="lg"
    >
      <FadeUp>
        <SectionTitle
          id="vision-mission-heading"
          align="center"
          eyebrow={visionMission.eyebrow}
          title={visionMission.title}
          description={visionMission.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 md:grid-cols-2">
        {visionMission.items.map((item) => {
          const Icon = visionMissionIconMap[item.icon];
          return (
            <StaggerItem key={item.id}>
              <Card
                padding="lg"
                className="h-full border-primary/10 bg-gradient-to-br from-surface to-muted/60"
              >
                <IconWrapper
                  variant={item.icon === "vision" ? "primary" : "secondary"}
                  size="lg"
                  rounded="xl"
                  className="mb-5"
                >
                  <Icon aria-hidden />
                </IconWrapper>
                <HeadingSM as="h3" className="mb-3">
                  {item.title}
                </HeadingSM>
                <Paragraph className="text-base">{item.description}</Paragraph>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
