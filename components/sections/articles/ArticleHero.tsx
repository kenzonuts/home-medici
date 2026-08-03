import { CalendarDays, Clock, UserRound } from "lucide-react";

import { FadeUp } from "@/components/animations";
import { ArticlePlaceholderImage } from "@/components/sections/articles/ArticlePlaceholderImage";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { HeadingXL, Paragraph } from "@/components/ui/Typography";
import type { Article } from "@/constants/articles";
import { formatArticleDate } from "@/constants/articles";

export type ArticleHeroProps = {
  article: Article;
};

export function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <header className="border-b border-border/70 bg-surface">
      <Container className="py-12 sm:py-16">
        <FadeUp>
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="default" size="lg">
              {article.categoryLabel}
            </Badge>
            <HeadingXL as="h1" className="mt-5">
              {article.title}
            </HeadingXL>
            <Paragraph className="mx-auto mt-5 max-w-2xl text-base sm:text-lg">
              {article.description}
            </Paragraph>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-4" aria-hidden />
                <time dateTime={article.publishedAt}>
                  {formatArticleDate(article.publishedAt)}
                </time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-4" aria-hidden />
                {article.readingTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <UserRound className="size-4" aria-hidden />
                {article.author}
              </span>
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted shadow-md">
            <ArticlePlaceholderImage
              label={article.heroLabel}
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
            />
          </div>
        </FadeUp>
      </Container>
    </header>
  );
}
