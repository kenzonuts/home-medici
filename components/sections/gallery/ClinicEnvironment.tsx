import Image from "next/image";
import { Check } from "lucide-react";

import { FadeLeft, FadeRight } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { GalleryPlaceholderImage } from "@/components/sections/gallery/GalleryPlaceholderImage";
import { HeadingLG, Paragraph } from "@/components/ui/Typography";
import { galleryContent } from "@/constants/gallery";

export function ClinicEnvironment() {
  const { environment } = galleryContent;

  return (
    <Section
      id="lingkungan-klinik"
      aria-labelledby="environment-heading"
      className="bg-surface"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <FadeLeft>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-md">
            {environment.imageSrc ? (
              <Image
                src={environment.imageSrc}
                alt={environment.imageLabel}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <GalleryPlaceholderImage
                label={environment.imageLabel}
                tone="teal"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            )}
          </div>
        </FadeLeft>

        <FadeRight>
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2 font-heading text-sm font-semibold tracking-wide text-primary uppercase">
                {environment.eyebrow}
              </p>
              <HeadingLG id="environment-heading">
                {environment.title}
              </HeadingLG>
            </div>
            <Paragraph className="text-base sm:text-lg">
              {environment.description}
            </Paragraph>
            <ul className="grid gap-3 sm:grid-cols-2">
              {environment.features.map((feature) => (
                <li
                  key={feature.id}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground"
                >
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  {feature.label}
                </li>
              ))}
            </ul>
          </div>
        </FadeRight>
      </div>
    </Section>
  );
}
