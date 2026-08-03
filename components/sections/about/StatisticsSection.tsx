import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { CountUp } from "@/components/shared/CountUp";
import { Card } from "@/components/ui/Card";
import { Caption, SectionTitle } from "@/components/ui/Typography";
import { aboutContent } from "@/constants/about";

export function StatisticsSection() {
  const { statistics } = aboutContent;

  return (
    <Section
      id="statistik"
      aria-labelledby="statistics-heading"
      spacing="lg"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="statistics-heading"
          align="center"
          eyebrow={statistics.eyebrow}
          title={statistics.title}
          description={statistics.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
        {statistics.items.map((item) => (
          <StaggerItem key={item.id}>
            <Card
              padding="lg"
              className="h-full text-center"
              aria-label={`${item.label}: ${item.value}${item.suffix ?? ""}`}
            >
              <p className="font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                <CountUp value={item.value} suffix={item.suffix} />
              </p>
              <Caption className="mt-2 font-medium text-foreground">
                {item.label}
              </Caption>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
