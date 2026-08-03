import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";

import { FadeLeft, FadeRight, FadeUp } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { buttonVariants } from "@/components/ui/Button";
import { HeadingLG, Paragraph } from "@/components/ui/Typography";
import { getWhatsAppUrl } from "@/constants/contact";
import { servicesContent } from "@/constants/services";
import { cn } from "@/lib/utils";

export type ServiceHighlightProps = {
  /** Override featured content; defaults to page highlight config. */
  title?: string;
  description?: string;
  imageLabel?: string;
  benefits?: readonly string[];
  ctaLabel?: string;
  ctaMessage?: string;
  eyebrow?: string;
};

/**
 * Reusable featured-service highlight block.
 */
export function ServiceHighlight({
  title,
  description,
  imageLabel,
  benefits,
  ctaLabel,
  ctaMessage,
  eyebrow,
}: ServiceHighlightProps = {}) {
  const { highlight } = servicesContent;
  const resolved = {
    eyebrow: eyebrow ?? highlight.eyebrow,
    title: title ?? highlight.title,
    description: description ?? highlight.description,
    imageLabel: imageLabel ?? highlight.imageLabel,
    benefits: benefits ?? highlight.benefits,
    ctaLabel: ctaLabel ?? highlight.ctaLabel,
    ctaMessage: ctaMessage ?? highlight.ctaMessage,
  };

  return (
    <Section
      id="sorotan-layanan"
      aria-labelledby="service-highlight-heading"
      spacing="lg"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <FadeLeft>
          <ImagePlaceholder
            label={resolved.imageLabel}
            aspect="wide"
            className="rounded-2xl border border-border shadow-md"
          />
        </FadeLeft>

        <FadeRight>
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2 font-heading text-sm font-semibold tracking-wide text-primary uppercase">
                {resolved.eyebrow}
              </p>
              <HeadingLG id="service-highlight-heading">
                {resolved.title}
              </HeadingLG>
            </div>
            <Paragraph className="text-base sm:text-lg">
              {resolved.description}
            </Paragraph>

            <ul className="space-y-3">
              {resolved.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm text-foreground sm:text-base"
                >
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <FadeUp>
              <div>
                <Link
                  href={getWhatsAppUrl(resolved.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "primary", size: "md" }),
                  )}
                >
                  <MessageCircle className="size-4" aria-hidden />
                  {resolved.ctaLabel}
                </Link>
              </div>
            </FadeUp>
          </div>
        </FadeRight>
      </div>
    </Section>
  );
}
