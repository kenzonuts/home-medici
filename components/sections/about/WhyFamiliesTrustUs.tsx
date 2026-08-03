import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { trustIconMap } from "@/components/sections/about/icons";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { aboutContent } from "@/constants/about";

export function WhyFamiliesTrustUs() {
  const { trust } = aboutContent;

  return (
    <Section id="kepercayaan" aria-labelledby="trust-heading" spacing="lg">
      <FadeUp>
        <SectionTitle
          id="trust-heading"
          align="center"
          eyebrow={trust.eyebrow}
          title={trust.title}
          description={trust.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2">
        {trust.items.map((item) => {
          const Icon = trustIconMap[item.icon];
          return (
            <StaggerItem key={item.id}>
              <Card className="h-full" padding="lg">
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
