import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Stethoscope } from "lucide-react";

import {
  FadeRight,
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
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
      className="relative z-0 overflow-x-hidden isolate"
    >
      {/* Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgb(34_197_94_/_0.10),_transparent_50%),radial-gradient(ellipse_at_80%_20%,_rgb(14_165_233_/_0.12),_transparent_45%)]"
      />

      <Container
        className={cn(
          "relative grid min-w-0 items-center",
          "gap-8 py-10 pb-20",
          "sm:gap-10 sm:py-16 sm:pb-24",
          "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:py-24 lg:pb-28",
          "xl:gap-14",
        )}
      >
        {/* Copy */}
        <div className="flex min-w-0 max-w-xl flex-col gap-5 sm:gap-6 lg:max-w-none">
          <FadeUp>
            <p
              className={cn(
                "inline-flex max-w-full items-center gap-2 rounded-full",
                "border border-primary/15 bg-primary/5",
                "px-3 py-1.5 text-xs font-medium text-primary sm:px-3.5 sm:text-sm",
              )}
            >
              <CheckCircle2 className="size-3.5 shrink-0 sm:size-4" aria-hidden />
              <span className="min-w-0 leading-snug">{hero.badge}</span>
            </p>
          </FadeUp>

          <FadeUp>
            <HeadingXL
              id="hero-heading"
              className="max-w-xl text-balance text-[1.75rem] leading-tight sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              {hero.headlinePrefix}{" "}
              <span className="text-primary">{hero.headlineHighlight}</span>
            </HeadingXL>
          </FadeUp>

          <FadeUp>
            <Paragraph className="max-w-lg text-sm sm:text-base lg:text-lg">
              {hero.description}
            </Paragraph>
          </FadeUp>

          <FadeUp>
            <StaggerContainer className="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-4 sm:gap-4">
              {hero.highlights.map((item) => {
                const Icon = featureIconMap[item.icon];
                return (
                  <StaggerItem key={item.id} className="min-w-0">
                    <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">
                      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:size-9">
                        <Icon className="size-3.5 sm:size-4" aria-hidden />
                      </span>
                      <span className="min-w-0 font-heading text-[0.7rem] font-semibold leading-snug text-foreground sm:text-sm">
                        {item.label}
                      </span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </FadeUp>

          <FadeUp>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "h-12 w-full rounded-2xl px-5 shadow-md shadow-primary/20 sm:w-auto sm:px-7",
                )}
              >
                <MessageCircle className="size-5 shrink-0" aria-hidden />
                <span className="truncate">{hero.primaryCta}</span>
              </Link>
              <Link
                href={hero.secondaryHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 w-full rounded-2xl border-secondary/40 px-5 text-secondary",
                  "hover:border-secondary hover:bg-secondary/5 hover:text-secondary",
                  "sm:w-auto sm:px-7",
                )}
              >
                <Stethoscope className="size-4 shrink-0" aria-hidden />
                <span className="truncate">{hero.secondaryCta}</span>
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Organic visual — first on mobile for presence, second on desktop */}
        <FadeRight className="order-first min-w-0 lg:order-last">
          <div className="relative mx-auto w-full max-w-[17.5rem] overflow-visible sm:max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute top-1/2 left-1/2 -z-10 size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-2xl sm:blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -top-4 -right-2 -z-10 hidden size-28 rounded-full bg-primary/15 blur-2xl sm:block sm:size-40"
            />

            <div
              className={cn(
                "relative mx-auto aspect-square overflow-hidden sm:aspect-[5/4] lg:aspect-[4/3.4]",
                "shadow-[0_20px_50px_-18px_rgb(15_23_42_/_0.28)]",
                "ring-1 ring-white/60",
                /* softer organic shape on small screens; fuller blob on lg */
                "rounded-[2.5rem] sm:rounded-[3rem]",
                "lg:[border-radius:58%_42%_48%_52%/42%_48%_52%_58%]",
              )}
            >
              <Image
                src={hero.imageSrc}
                alt={hero.imageLabel}
                fill
                priority
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 50vw, 45vw"
                className="object-cover object-[center_18%]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-secondary/10"
              />
            </div>

            <div
              aria-hidden
              className="absolute -bottom-2 left-[10%] size-12 rounded-full bg-gradient-to-br from-primary to-accent opacity-90 shadow-lg shadow-primary/30 sm:-bottom-3 sm:left-[12%] sm:size-16 lg:size-20"
            />
            <div
              aria-hidden
              className="absolute top-[6%] right-0 size-8 rounded-full border-4 border-surface bg-secondary/80 shadow-md sm:-right-1 sm:size-10 lg:size-12"
            />
          </div>
        </FadeRight>
      </Container>

      {/* Soft wave transition */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 leading-[0]"
      >
        <svg
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          className="h-10 w-full text-background sm:h-14 lg:h-16"
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
