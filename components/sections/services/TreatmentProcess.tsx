import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { processIconMap } from "@/components/sections/services/icons";
import { Section } from "@/components/layout/Section";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { servicesContent } from "@/constants/services";

export function TreatmentProcess() {
  const { process } = servicesContent;

  return (
    <Section
      id="proses"
      aria-labelledby="process-heading"
      spacing="lg"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="process-heading"
          align="center"
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, index) => {
          const Icon = processIconMap[step.icon];
          const isLast = index === process.steps.length - 1;

          return (
            <StaggerItem key={step.id} className="relative">
              <article className="flex h-full flex-col rounded-xl border border-border bg-background p-5 shadow-card">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="font-heading text-sm font-bold text-primary">
                    Step {step.step}
                  </span>
                  <IconWrapper variant="primary" size="sm" rounded="full">
                    <Icon aria-hidden />
                  </IconWrapper>
                </div>
                <HeadingSM as="h3" className="mb-2">
                  {step.title}
                </HeadingSM>
                <Paragraph>{step.description}</Paragraph>
              </article>

              {!isLast ? (
                <span
                  aria-hidden
                  className="absolute top-1/2 -right-3 hidden h-px w-6 -translate-y-1/2 bg-primary/30 lg:block"
                />
              ) : null}
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
