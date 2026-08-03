import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { FadeUp, Scale } from "@/components/animations";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeadingLG, Paragraph } from "@/components/ui/Typography";
import { CONTACT, getWhatsAppUrl } from "@/constants/contact";
import { homepageContent } from "@/constants/homepage";
import { cn } from "@/lib/utils";

export function BookingSection() {
  const { booking } = homepageContent;

  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="section-space-lg relative overflow-hidden"
    >
      <Container>
        <Scale>
          <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary to-primary-active px-6 py-12 text-primary-foreground shadow-lg sm:px-10 sm:py-14 lg:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-10 size-56 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-8 size-48 rounded-full bg-secondary/30 blur-2xl"
            />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
              <FadeUp>
                <HeadingLG
                  id="booking-heading"
                  className="text-primary-foreground"
                >
                  {booking.headline}
                </HeadingLG>
              </FadeUp>

              <FadeUp>
                <Paragraph className="text-primary-foreground/90">
                  {booking.description}
                </Paragraph>
              </FadeUp>

              <FadeUp>
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
                  {CONTACT.ctaLabel}
                </Link>
              </FadeUp>

              <FadeUp>
                <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-primary-foreground/85">
                  <span>{booking.phoneLabel}</span>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                  >
                    <Phone className="size-4" aria-hidden />
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
              </FadeUp>
            </div>
          </div>
        </Scale>
      </Container>
    </section>
  );
}
