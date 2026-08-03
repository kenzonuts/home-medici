import { FadeLeft, FadeRight, FadeUp } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Card } from "@/components/ui/Card";
import {
  Caption,
  HeadingSM,
  Paragraph,
  SectionTitle,
} from "@/components/ui/Typography";
import { aboutContent } from "@/constants/about";

export function OurStory() {
  const { story } = aboutContent;

  return (
    <Section
      id="cerita"
      aria-labelledby="story-heading"
      spacing="lg"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="story-heading"
          align="center"
          eyebrow={story.eyebrow}
          title={story.title}
          description={story.description}
          className="mb-10"
        />
      </FadeUp>

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <FadeLeft>
          <ol className="relative space-y-6 border-l border-primary/25 pl-6">
            {story.milestones.map((item) => (
              <li key={item.id} className="relative">
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-[1.9rem] size-3 rounded-full border-2 border-primary bg-surface"
                />
                <Card padding="md" className="shadow-card">
                  <Caption className="mb-1 font-semibold text-primary">
                    {item.year}
                  </Caption>
                  <HeadingSM as="h3" className="mb-2">
                    {item.title}
                  </HeadingSM>
                  <Paragraph>{item.description}</Paragraph>
                </Card>
              </li>
            ))}
          </ol>
        </FadeLeft>

        <FadeRight>
          <ImagePlaceholder
            label={story.illustrationLabel}
            aspect="portrait"
            className="mx-auto max-w-md rounded-2xl border border-border shadow-md lg:max-w-none"
          />
        </FadeRight>
      </div>
    </Section>
  );
}
