import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { ArticleCard } from "@/components/sections/articles/ArticleCard";
import { CategoryFilter } from "@/components/sections/articles/CategoryFilter";
import { Pagination } from "@/components/sections/articles/Pagination";
import { SearchBar } from "@/components/sections/articles/SearchBar";
import { SectionTitle } from "@/components/ui/Typography";
import {
  articleCategories,
  articles,
  articlesContent,
} from "@/constants/articles";

export function ArticlesGrid() {
  const { listing } = articlesContent;

  return (
    <Section
      id="daftar-artikel"
      aria-labelledby="articles-list-heading"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="articles-list-heading"
          align="center"
          eyebrow={listing.eyebrow}
          title={listing.title}
          description={listing.description}
          className="mb-10"
        />
      </FadeUp>

      <div className="mx-auto mb-8 max-w-3xl">
        <FadeUp>
          <SearchBar />
        </FadeUp>
      </div>

      <FadeUp>
        <div className="mb-10">
          <CategoryFilter categories={articleCategories} />
        </div>
      </FadeUp>

      <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <StaggerItem key={article.id}>
            <ArticleCard article={article} priority={index < 3} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUp>
        <Pagination />
      </FadeUp>
    </Section>
  );
}
