import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { FadeUp, Scale } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { buttonVariants } from "@/components/ui/Button";
import { HeadingLG, Paragraph } from "@/components/ui/Typography";
import { CONTACT, contactContent, getWhatsAppUrl } from "@/constants/contact";
import { cn } from "@/lib/utils";

export function ContactCta() {
  const { cta } = contactContent;

  return (
    <Section id="booking-kontak" aria-labelledby="contact-cta-heading">
      <Scale>
        <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary via-primary to-secondary px-6 py-12 text-primary-foreground shadow-lg sm:px-10 sm:py-14 lg:px-16">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <FadeUp>
              <HeadingLG
                id="contact-cta-heading"
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
              <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
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
                <a
                  href={CONTACT.phoneHref}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "border-white/40 bg-white/10 text-primary-foreground hover:border-white/70 hover:bg-white/15",
                  )}
                >
                  <Phone className="size-5" aria-hidden />
                  {cta.secondaryLabel}
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </Scale>
    </Section>
  );
}
