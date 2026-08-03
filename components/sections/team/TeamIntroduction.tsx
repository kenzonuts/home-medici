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
          <div className="relative">
            <ImagePlaceholder
              label={introduction.imageLabel}
              aspect="wide"
              className="rounded-2xl border border-border shadow-md"
            />
            <div className="absolute right-4 bottom-4 rounded-lg border border-border bg-surface/95 px-4 py-3 shadow-card backdrop-blur">
              <p className="font-heading text-sm font-semibold text-foreground">
                Tim medis profesional
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Placeholder profil dokter
              </p>
            </div>
          </div>
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
