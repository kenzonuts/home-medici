import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeLeft, FadeRight, FadeUp } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { buttonVariants } from "@/components/ui/Button";
import { Paragraph, SectionTitle } from "@/components/ui/Typography";
import { aboutContent } from "@/constants/about";
import { cn } from "@/lib/utils";

export function ClinicIntroduction() {
  const { introduction } = aboutContent;

  return (
    <Section id="profil" aria-labelledby="intro-heading" spacing="lg">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <FadeLeft>
          <ImagePlaceholder
            label={introduction.imageLabel}
            aspect="wide"
            className="rounded-2xl border border-border shadow-md"
          />
        </FadeLeft>

        <FadeRight>
          <div className="flex flex-col gap-5">
            <SectionTitle
              id="intro-heading"
              eyebrow={introduction.eyebrow}
              title={introduction.title}
              titleAs="h2"
            />
            <Paragraph className="text-base sm:text-lg">
              {introduction.description}
            </Paragraph>
            <Paragraph>{introduction.body}</Paragraph>
            <FadeUp>
              <div>
                <Link
                  href={introduction.ctaHref}
                  className={cn(
                    buttonVariants({ variant: "primary", size: "md" }),
                  )}
                >
                  {introduction.ctaLabel}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </FadeUp>
          </div>
        </FadeRight>
      </div>
    </Section>
  );
}
