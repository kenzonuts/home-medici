import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { FadeLeft, FadeRight, FadeUp } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { ArticlePlaceholderImage } from "@/components/sections/articles/ArticlePlaceholderImage";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { HeadingLG, Paragraph } from "@/components/ui/Typography";
import { articlesContent, formatArticleDate } from "@/constants/articles";
import { cn } from "@/lib/utils";

export function FeaturedArticle() {
  const { featured } = articlesContent;
  const { article } = featured;

  return (
    <Section id="artikel-pilihan" aria-labelledby="featured-article-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <FadeLeft>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted shadow-md">
            <ArticlePlaceholderImage
              label={article.thumbnailLabel}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </FadeLeft>

        <FadeRight>
          <article className="flex flex-col gap-5">
            <div>
              <p className="mb-3 font-heading text-sm font-semibold tracking-wide text-primary uppercase">
                {featured.eyebrow}
              </p>
              <Badge variant="default">{article.categoryLabel}</Badge>
            </div>

            <HeadingLG id="featured-article-heading">{article.title}</HeadingLG>
            <Paragraph className="text-base sm:text-lg">
              {article.description}
            </Paragraph>

            <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="size-4" aria-hidden />
              <time dateTime={article.publishedAt}>
                {formatArticleDate(article.publishedAt)}
              </time>
            </p>

            <FadeUp>
              <div>
                <Link
                  href={`/articles/${article.slug}`}
                  className={cn(
                    buttonVariants({ variant: "primary", size: "md" }),
                  )}
                >
                  {featured.ctaLabel}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </FadeUp>
          </article>
        </FadeRight>
      </div>
    </Section>
  );
}
