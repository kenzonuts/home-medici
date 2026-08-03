import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { FadeUp, Scale } from "@/components/animations";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeadingLG, Paragraph } from "@/components/ui/Typography";
import { CONTACT, getWhatsAppUrl } from "@/constants/contact";
import { teamContent } from "@/constants/team";
import { cn } from "@/lib/utils";

export function TeamAppointmentCta() {
  const { cta } = teamContent;

  return (
    <section
      id="booking-tim-medis"
      aria-labelledby="team-cta-heading"
      className="section-space-lg"
    >
      <Container>
        <Scale>
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary px-6 py-12 text-primary-foreground shadow-lg sm:px-10 sm:py-14 lg:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40"
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
              <FadeUp>
                <HeadingLG
                  id="team-cta-heading"
                  className="text-primary-foreground"
                >
                  {cta.headline}
                </HeadingLG>
              </FadeUp>

              <FadeUp>
                <Paragraph className="text-primary-foreground/90">
                  {cta.description}
                </Paragraph>
              </FadeUp>

              <FadeUp>
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <Link
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "bg-surface text-primary hover:bg-muted active:bg-muted",
                    )}
                  >
                    <MessageCircle className="size-5" aria-hidden />
                    {cta.primaryLabel}
                  </Link>
                  <a
                    href={CONTACT.phoneHref}
                    aria-label={cta.phoneLabel}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-5 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                  >
                    <Phone className="size-4" aria-hidden />
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </Scale>
      </Container>
    </section>
  );
}
