import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { SectionCTA } from "@/components/shared/SectionCTA";
import { ArticleCard } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Caption, HeadingSM, SectionTitle } from "@/components/ui/Typography";
import { homepageContent } from "@/constants/homepage";
import { cn } from "@/lib/utils";

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export function ArticlesPreview() {
  const { articles } = homepageContent;

  return (
    <Section
      id="artikel"
      aria-labelledby="articles-heading"
      spacing="lg"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="articles-heading"
          align="center"
          eyebrow={articles.eyebrow}
          title={articles.title}
          description={articles.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.items.map((article) => (
          <StaggerItem key={article.id}>
            <ArticleCard
              className="transition-transform duration-200 hover:-translate-y-1"
              media={
                <ImagePlaceholder
                  label={`Thumbnail ${article.title}`}
                  aspect="wide"
                  className="rounded-none"
                />
              }
              header={
                <div className="space-y-3">
                  <Tag variant="primary" size="sm">
                    {article.category}
                  </Tag>
                  <HeadingSM as="h3">{article.title}</HeadingSM>
                  <Caption>
                    <time dateTime={article.publishedAt}>
                      {formatDate(article.publishedAt)}
                    </time>
                  </Caption>
                </div>
              }
              footer={
                <Link
                  href={article.href}
                  className={cn(
                    "inline-flex items-center gap-1.5 text-sm font-semibold text-primary",
                    "transition-colors hover:text-primary-hover",
                    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  )}
                >
                  Baca selengkapnya
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              }
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUp>
        <SectionCTA href={articles.ctaHref} label={articles.ctaLabel} />
      </FadeUp>
    </Section>
  );
}
