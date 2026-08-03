import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { FadeLeft, FadeRight, FadeUp } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { buttonVariants } from "@/components/ui/Button";
import { Paragraph, SectionTitle } from "@/components/ui/Typography";
import { getWhatsAppUrl } from "@/constants/contact";
import { servicesContent } from "@/constants/services";
import { cn } from "@/lib/utils";

export function ServicesIntroduction() {
  const { introduction } = servicesContent;

  return (
    <Section
      id="intro-layanan"
      aria-labelledby="services-intro-heading"
      spacing="lg"
    >
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
              id="services-intro-heading"
              eyebrow={introduction.eyebrow}
              title={introduction.title}
              titleAs="h2"
            />
            <Paragraph className="text-base sm:text-lg">
              {introduction.description}
            </Paragraph>
            <FadeUp>
              <div>
                <Link
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "primary", size: "md" }),
                  )}
                >
                  <MessageCircle className="size-4" aria-hidden />
                  {introduction.ctaLabel}
                </Link>
              </div>
            </FadeUp>
          </div>
        </FadeRight>
      </div>
    </Section>
  );
}
