import { Clock3, MapPin } from "lucide-react";

import { FadeLeft, FadeRight, FadeUp } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { CONTACT } from "@/constants/contact";
import { homepageContent } from "@/constants/homepage";

export function ClinicLocation() {
  const { location } = homepageContent;

  return (
    <Section
      id="lokasi"
      aria-labelledby="location-heading"
      spacing="lg"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="location-heading"
          align="center"
          eyebrow={location.eyebrow}
          title={location.title}
          description={location.description}
          className="mb-10"
        />
      </FadeUp>

      <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
        <FadeLeft>
          <div
            role="img"
            aria-label={location.mapLabel}
            className="flex min-h-[18rem] items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted lg:min-h-full"
          >
            <div className="flex flex-col items-center gap-3 p-6 text-center text-muted-foreground">
              <IconWrapper variant="muted" size="lg" rounded="full">
                <MapPin aria-hidden />
              </IconWrapper>
              <p className="text-sm font-medium">{location.mapLabel}</p>
              <p className="max-w-xs text-xs">
                Embed Google Maps akan ditambahkan pada fase berikutnya.
              </p>
            </div>
          </div>
        </FadeLeft>

        <FadeRight>
          <div className="flex h-full flex-col gap-4">
            <Card padding="lg" className="h-full">
              <div className="mb-6 flex items-start gap-3">
                <IconWrapper variant="primary" size="md">
                  <MapPin aria-hidden />
                </IconWrapper>
                <div>
                  <HeadingSM as="h3" className="mb-1">
                    Alamat
                  </HeadingSM>
                  <Paragraph>{CONTACT.address}</Paragraph>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IconWrapper variant="secondary" size="md">
                  <Clock3 aria-hidden />
                </IconWrapper>
                <div className="w-full">
                  <HeadingSM as="h3" className="mb-3">
                    Jam Operasional
                  </HeadingSM>
                  <ul className="space-y-2">
                    {location.hours.map((item) => (
                      <li
                        key={item.days}
                        className="flex items-center justify-between gap-4 border-b border-border/70 py-2 text-sm last:border-b-0"
                      >
                        <span className="font-medium text-foreground">
                          {item.days}
                        </span>
                        <span className="text-muted-foreground">
                          {item.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </FadeRight>
      </div>
    </Section>
  );
}
