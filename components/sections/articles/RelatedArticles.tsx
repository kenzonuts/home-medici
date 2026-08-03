import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { ArticleCard } from "@/components/sections/articles/ArticleCard";
import { SectionTitle } from "@/components/ui/Typography";
import type { ArticleSummary } from "@/constants/articles";

export type RelatedArticlesProps = {
  articles: readonly ArticleSummary[];
};

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section aria-labelledby="related-articles-heading" className="mt-12">
      <FadeUp>
        <SectionTitle
          id="related-articles-heading"
          title="Related Articles"
          description="Artikel placeholder lain yang dapat ditampilkan berdasarkan kategori atau rekomendasi CMS."
          className="mb-8"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {articles.map((article) => (
          <StaggerItem key={article.id}>
            <ArticleCard article={article} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
