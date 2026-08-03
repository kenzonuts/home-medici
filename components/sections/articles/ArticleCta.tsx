import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { FadeUp, Scale } from "@/components/animations";
import { buttonVariants } from "@/components/ui/Button";
import { HeadingMD, Paragraph } from "@/components/ui/Typography";
import { articlesContent } from "@/constants/articles";
import { getWhatsAppUrl } from "@/constants/contact";
import { cn } from "@/lib/utils";

export function ArticleCta() {
  const { detailCta } = articlesContent;

  return (
    <Scale>
      <section
        aria-labelledby="article-cta-heading"
        className="mt-12 rounded-2xl border border-primary/15 bg-primary px-6 py-10 text-center text-primary-foreground shadow-lg sm:px-10"
      >
        <FadeUp>
          <HeadingMD
            id="article-cta-heading"
            className="text-primary-foreground"
          >
            {detailCta.headline}
          </HeadingMD>
        </FadeUp>
        <FadeUp>
          <Paragraph className="mx-auto mt-3 max-w-2xl text-primary-foreground/90">
            {detailCta.description}
          </Paragraph>
        </FadeUp>
        <FadeUp>
          <Link
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-6 bg-surface text-primary hover:bg-muted active:bg-muted",
            )}
          >
            <MessageCircle className="size-5" aria-hidden />
            {detailCta.primaryLabel}
          </Link>
        </FadeUp>
      </section>
    </Scale>
  );
}
