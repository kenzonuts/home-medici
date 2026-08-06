import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Stethoscope } from "lucide-react";

import { FadeRight, FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { featureIconMap } from "@/components/sections/home/icons";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeadingXL, Paragraph } from "@/components/ui/Typography";
import { getWhatsAppUrl } from "@/constants/contact";
import { homepageContent } from "@/constants/homepage";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { hero } = homepageContent;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgb(34_197_94_/_0.10),_transparent_50%),radial-gradient(ellipse_at_80%_20%,_rgb(14_165_233_/_0.12),_transparent_45%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 left-[8%] size-2 rounded-full bg-primary/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 left-[18%] size-1.5 rounded-full bg-secondary/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-56 left-[12%] size-1 rounded-full bg-primary/20"
      />

      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:py-24 xl:gap-14">
        {/* Copy */}
        <div className="flex max-w-xl flex-col gap-6 lg:max-w-none">
          <FadeUp>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-primary">
              <CheckCircle2 className="size-4 shrink-0" aria-hidden />
              {hero.badge}
            </p>
          </FadeUp>

          <FadeUp>
            <HeadingXL id="hero-heading" className="max-w-xl text-balance">
              {hero.headlinePrefix}{" "}
              <span className="text-primary">{hero.headlineHighlight}</span>
            </HeadingXL>
          </FadeUp>

          <FadeUp>
            <Paragraph className="max-w-lg text-base sm:text-lg">
              {hero.description}
            </Paragraph>
          </FadeUp>

          <FadeUp>
            <StaggerContainer className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {hero.highlights.map((item) => {
                const Icon = featureIconMap[item.icon];
                return (
                  <StaggerItem key={item.id}>
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <span className="font-heading text-xs font-semibold leading-snug text-foreground sm:text-sm">
                        {item.label}
                      </span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "rounded-2xl px-7 shadow-md shadow-primary/20",
                )}
              >
                <MessageCircle className="size-5" aria-hidden />
                {hero.primaryCta}
              </Link>
              <Link
                href={hero.secondaryHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-2xl border-secondary/40 px-7 text-secondary hover:border-secondary hover:bg-secondary/5 hover:text-secondary",
                )}
              >
                <Stethoscope className="size-4" aria-hidden />
                {hero.secondaryCta}
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Organic visual */}
        <FadeRight>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Soft glow behind blob */}
            <div
              aria-hidden
              className="absolute top-1/2 left-1/2 -z-10 size-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -top-6 -right-4 -z-10 size-40 rounded-full bg-primary/15 blur-2xl"
            />

            <div
              className={cn(
                "relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/3.4]",
                "shadow-[0_25px_60px_-20px_rgb(15_23_42_/_0.25)]",
                "ring-1 ring-white/60",
              )}
              style={{
                borderRadius: "58% 42% 48% 52% / 42% 48% 52% 58%",
              }}
            >
              <Image
                src={hero.imageSrc}
                alt={hero.imageLabel}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-[center_20%]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-secondary/10"
              />
            </div>

            {/* Accent orb — decorative, not content overlay */}
            <div
              aria-hidden
              className="absolute -bottom-3 left-[12%] size-16 rounded-full bg-gradient-to-br from-primary to-accent opacity-90 shadow-lg shadow-primary/30 sm:size-20"
            />
            <div
              aria-hidden
              className="absolute top-[8%] -right-2 size-10 rounded-full border-4 border-surface bg-secondary/80 shadow-md sm:size-12"
            />
          </div>
        </FadeRight>
      </Container>

      {/* Soft wave transition */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 leading-[0]">
        <svg
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          className="h-12 w-full text-background sm:h-16"
        >
          <path
            fill="currentColor"
            d="M0,64 C240,96 480,16 720,40 C960,64 1200,96 1440,48 L1440,96 L0,96 Z"
          />
        </svg>
      </div>
    </section>
  );
}
