import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

import { ArticlePlaceholderImage } from "@/components/sections/articles/ArticlePlaceholderImage";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { ArticleCard as ArticleCardShell } from "@/components/ui/Card";
import { Caption, HeadingSM, Paragraph } from "@/components/ui/Typography";
import type { ArticleSummary } from "@/constants/articles";
import { formatArticleDate } from "@/constants/articles";
import { cn } from "@/lib/utils";

export type ArticleCardProps = {
  article: ArticleSummary;
  priority?: boolean;
};

export function ArticleCard({ article, priority = false }: ArticleCardProps) {
  return (
    <ArticleCardShell
      className="transition-transform duration-200 hover:-translate-y-1"
      media={
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <ArticlePlaceholderImage
            label={article.thumbnailLabel}
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      }
      header={
        <div className="space-y-3">
          <Badge variant="default">{article.categoryLabel}</Badge>
          <HeadingSM as="h3">{article.title}</HeadingSM>
        </div>
      }
      footer={
        <Link
          href={`/articles/${article.slug}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "w-full",
          )}
        >
          Baca Selengkapnya
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      }
    >
      <div className="flex flex-1 flex-col gap-4 pt-3">
        <Paragraph className="text-sm">{article.description}</Paragraph>
        <div className="mt-auto flex flex-wrap gap-3 text-muted-foreground">
          <Caption className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4" aria-hidden />
            <time dateTime={article.publishedAt}>
              {formatArticleDate(article.publishedAt)}
            </time>
          </Caption>
          <Caption className="inline-flex items-center gap-1.5">
            <Clock className="size-4" aria-hidden />
            {article.readingTime}
          </Caption>
        </div>
      </div>
    </ArticleCardShell>
  );
}
