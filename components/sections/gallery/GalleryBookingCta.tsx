import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { FadeUp, Scale } from "@/components/animations";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeadingLG, Paragraph } from "@/components/ui/Typography";
import { getWhatsAppUrl } from "@/constants/contact";
import { galleryContent } from "@/constants/gallery";
import { cn } from "@/lib/utils";

export function GalleryBookingCta() {
  const { cta } = galleryContent;

  return (
    <section
      id="booking-galeri"
      aria-labelledby="gallery-cta-heading"
      className="section-space-lg"
    >
      <Container>
        <Scale>
          <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary to-secondary px-6 py-12 text-primary-foreground shadow-lg sm:px-10 sm:py-14 lg:px-16">
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
              <FadeUp>
                <HeadingLG
                  id="gallery-cta-heading"
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
              </FadeUp>
            </div>
          </div>
        </Scale>
      </Container>
    </section>
  );
}
