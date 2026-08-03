import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { StarRating } from "@/components/shared/StarRating";
import { TestimonialCard } from "@/components/ui/Card";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { homepageContent } from "@/constants/homepage";

export function Testimonials() {
  const { testimonials } = homepageContent;

  return (
    <Section id="testimoni" aria-labelledby="testimonials-heading" spacing="lg">
      <FadeUp>
        <SectionTitle
          id="testimonials-heading"
          align="center"
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          description={testimonials.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.items.map((item) => (
          <StaggerItem key={item.id}>
            <TestimonialCard className="h-full">
              <StarRating rating={item.rating} className="mb-4" />
              <Paragraph className="mb-6 text-foreground">
                “{item.review}”
              </Paragraph>
              <HeadingSM as="h3" className="text-base">
                {item.name}
              </HeadingSM>
            </TestimonialCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
