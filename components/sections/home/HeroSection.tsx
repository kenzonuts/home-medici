import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { FadeRight, FadeUp } from "@/components/animations";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeadingXL, Paragraph } from "@/components/ui/Typography";
import { CONTACT, getWhatsAppUrl } from "@/constants/contact";
import { homepageContent } from "@/constants/homepage";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { hero } = homepageContent;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgb(34_197_94_/_0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgb(14_165_233_/_0.10),_transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-10 size-64 rounded-full bg-secondary/10 blur-3xl"
      />

      <Container className="relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div className="flex max-w-xl flex-col gap-6">
          <FadeUp>
            <HeadingXL id="hero-heading">{hero.headline}</HeadingXL>
          </FadeUp>

          <FadeUp>
            <Paragraph className="text-base sm:text-lg">
              {hero.description}
            </Paragraph>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                )}
              >
                <MessageCircle className="size-5" aria-hidden />
                {hero.primaryCta}
              </Link>
              <Link
                href={hero.secondaryHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                )}
              >
                {hero.secondaryCta}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </FadeUp>

          <FadeUp>
            <p className="text-sm text-muted-foreground">
              Butuh bantuan cepat?{" "}
              <a
                href={CONTACT.phoneHref}
                className="font-semibold text-primary underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {CONTACT.phoneDisplay}
              </a>
            </p>
          </FadeUp>
        </div>

        <FadeRight>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[1.75rem] bg-gradient-to-br from-primary/15 via-transparent to-secondary/15"
            />
            <ImagePlaceholder
              label="Ilustrasi klinik modern"
              aspect="hero"
              className="rounded-2xl border border-border shadow-lg"
            />
          </div>
        </FadeRight>
      </Container>
    </section>
  );
}
