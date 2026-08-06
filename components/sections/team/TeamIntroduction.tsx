import { FadeLeft, FadeRight } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Paragraph, SectionTitle } from "@/components/ui/Typography";
import { teamContent } from "@/constants/team";

export function TeamIntroduction() {
  const { introduction } = teamContent;

  return (
    <Section id="intro-tim-medis" aria-labelledby="team-intro-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <FadeLeft>
          <ImagePlaceholder
            label={introduction.imageLabel}
            imageSrc={introduction.imageSrc}
            aspect="wide"
            className="rounded-2xl border border-border shadow-md"
          />
        </FadeLeft>

        <FadeRight>
          <div className="flex flex-col gap-5">
            <SectionTitle
              id="team-intro-heading"
              eyebrow={introduction.eyebrow}
              title={introduction.title}
              titleAs="h2"
            />
            <Paragraph className="text-base sm:text-lg">
              {introduction.description}
            </Paragraph>
            <Paragraph>{introduction.body}</Paragraph>
          </div>
        </FadeRight>
      </div>
    </Section>
  );
}
