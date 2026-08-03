import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { FadeUp, Scale } from "@/components/animations";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeadingLG, Paragraph } from "@/components/ui/Typography";
import { aboutContent } from "@/constants/about";
import { CONTACT, getWhatsAppUrl } from "@/constants/contact";
import { cn } from "@/lib/utils";

export function AboutCTA() {
  const { cta } = aboutContent;

  return (
    <section
      id="cta"
      aria-labelledby="about-cta-heading"
      className="section-space-lg relative overflow-hidden"
    >
      <Container>
        <Scale>
          <div className="relative overflow-hidden rounded-2xl border border-secondary/20 bg-gradient-to-br from-secondary to-secondary-active px-6 py-12 text-secondary-foreground shadow-lg sm:px-10 sm:py-14 lg:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-10 size-56 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-8 size-48 rounded-full bg-primary/25 blur-2xl"
            />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
              <FadeUp>
                <HeadingLG
                  id="about-cta-heading"
                  className="text-secondary-foreground"
                >
                  {cta.headline}
                </HeadingLG>
              </FadeUp>

              <FadeUp>
                <Paragraph className="text-secondary-foreground/90">
                  {cta.description}
                </Paragraph>
              </FadeUp>

              <FadeUp>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Link
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "bg-surface text-secondary hover:bg-muted active:bg-muted",
                    )}
                  >
                    <MessageCircle className="size-5" aria-hidden />
                    {cta.primaryLabel}
                  </Link>
                  <Link
                    href={cta.secondaryHref}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "border-white/40 bg-transparent text-secondary-foreground hover:bg-white/10 hover:text-secondary-foreground",
                    )}
                  >
                    <Phone className="size-4" aria-hidden />
                    {cta.secondaryLabel}
                  </Link>
                </div>
              </FadeUp>

              <FadeUp>
                <a
                  href={CONTACT.phoneHref}
                  className="text-sm font-medium text-secondary-foreground/85 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </FadeUp>
            </div>
          </div>
        </Scale>
      </Container>
    </section>
  );
}
