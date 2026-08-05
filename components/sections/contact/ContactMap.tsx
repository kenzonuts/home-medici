import Link from "next/link";
import { ExternalLink, MapPin, Navigation } from "lucide-react";

import { FadeLeft, FadeRight, FadeUp } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { CONTACT, contactContent } from "@/constants/contact";
import { cn } from "@/lib/utils";

export function ContactMap() {
  const { map } = contactContent;

  return (
    <Section
      id="lokasi-klinik"
      aria-labelledby="contact-map-heading"
      spacing="lg"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="contact-map-heading"
          eyebrow={map.eyebrow}
          title={map.title}
          description={map.description}
          className="mb-10"
        />
      </FadeUp>

      <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-8">
        <FadeLeft>
          <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-card">
            <iframe
              title="Google Maps Rumah Sunat Modern Jati"
              src={CONTACT.mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[4/3] w-full border-0 sm:aspect-[16/9] lg:min-h-[28rem]"
              allowFullScreen
            />
          </div>
        </FadeLeft>

        <FadeRight>
          <Card padding="lg" className="flex h-full flex-col gap-6">
            <IconWrapper variant="primary" size="lg" rounded="xl">
              <MapPin aria-hidden />
            </IconWrapper>

            <div className="flex flex-col gap-3">
              <HeadingSM as="h3">{map.addressLabel}</HeadingSM>
              <Paragraph className="font-medium text-foreground">
                {CONTACT.address}
              </Paragraph>
              <Paragraph>{map.locationDescription}</Paragraph>
            </div>

            <div className="mt-auto rounded-xl border border-border bg-muted/60 p-4">
              <div className="flex items-start gap-3">
                <Navigation
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Pastikan kembali jadwal kunjungan melalui admin sebelum datang
                  ke klinik.
                </p>
              </div>
            </div>

            <Link
              href={CONTACT.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              Buka Google Maps
              <ExternalLink className="size-4" aria-hidden />
            </Link>
          </Card>
        </FadeRight>
      </div>
    </Section>
  );
}
