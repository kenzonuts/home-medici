import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";

import { FadeLeft, FadeRight, FadeUp } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingLG, Paragraph } from "@/components/ui/Typography";
import { featuredDoctorIconMap } from "@/components/sections/team/icons";
import { getWhatsAppUrl } from "@/constants/contact";
import { teamContent } from "@/constants/team";
import { cn } from "@/lib/utils";

export function FeaturedDoctor() {
  const { featuredDoctor } = teamContent;
  const ExperienceIcon = featuredDoctorIconMap.experience;
  const SafetyIcon = featuredDoctorIconMap.safety;

  return (
    <Section
      id="dokter-utama"
      aria-labelledby="featured-doctor-heading"
      className="bg-surface"
    >
      <Card
        padding="none"
        className="overflow-hidden border-primary/15 bg-gradient-to-br from-surface via-surface to-primary/5 shadow-lg"
      >
        <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
          <FadeLeft className="min-h-full">
            <ImagePlaceholder
              label={featuredDoctor.imageLabel}
              imageSrc={featuredDoctor.imageSrc}
              aspect="none"
              className="h-full min-h-[360px] rounded-none lg:min-h-[560px]"
            />
          </FadeLeft>

          <FadeRight>
            <div className="flex h-full flex-col gap-6 p-6 sm:p-8 lg:p-10">
              <div>
                <p className="mb-2 font-heading text-sm font-semibold tracking-wide text-primary uppercase">
                  {featuredDoctor.eyebrow}
                </p>
                <HeadingLG id="featured-doctor-heading">
                  {featuredDoctor.name}
                </HeadingLG>
                <p className="mt-2 font-heading text-base font-semibold text-secondary">
                  {featuredDoctor.position}
                </p>
              </div>

              <Paragraph className="text-base sm:text-lg">
                {featuredDoctor.bio}
              </Paragraph>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-surface p-4">
                  <IconWrapper variant="primary" size="sm" className="mb-3">
                    <ExperienceIcon aria-hidden />
                  </IconWrapper>
                  <p className="font-heading text-sm font-semibold text-foreground">
                    {featuredDoctor.yearsExperience}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pendampingan pasien & keluarga
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-surface p-4">
                  <IconWrapper variant="secondary" size="sm" className="mb-3">
                    <SafetyIcon aria-hidden />
                  </IconWrapper>
                  <p className="font-heading text-sm font-semibold text-foreground">
                    Patient Safety
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fokus prosedur aman
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-heading text-base font-semibold text-foreground">
                  Areas of Expertise
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {featuredDoctor.expertise.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3.5" aria-hidden />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <FadeUp>
                <div className="pt-1">
                  <Link
                    href={getWhatsAppUrl(featuredDoctor.ctaMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Booking WhatsApp untuk ${featuredDoctor.name}`}
                    className={cn(
                      buttonVariants({ variant: "primary", size: "lg" }),
                    )}
                  >
                    <MessageCircle className="size-5" aria-hidden />
                    {featuredDoctor.ctaLabel}
                  </Link>
                </div>
              </FadeUp>
            </div>
          </FadeRight>
        </div>
      </Card>
    </Section>
  );
}
