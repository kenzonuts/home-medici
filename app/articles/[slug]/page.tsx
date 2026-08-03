import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Section } from "@/components/layout/Section";
import {
  ArticleContent,
  ArticleCta,
  ArticleHero,
  ArticleSchema,
  ReadingProgress,
  RelatedArticles,
  ShareButtons,
  TableOfContents,
} from "@/components/sections/articles";
import {
  articles,
  createArticleMetadata,
  getArticleBySlug,
  getArticleToc,
  getRelatedArticles,
} from "@/constants/articles";

type ArticleDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return createArticleMetadata(article);
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const tocItems = getArticleToc(article);
  const relatedArticles = getRelatedArticles(article);

  return (
    <>
      <ArticleSchema article={article} />
      <ReadingProgress />
      <ArticleHero article={article} />
      <Section id="konten-artikel" aria-labelledby="article-content-heading">
        <h2 id="article-content-heading" className="sr-only">
          Konten Artikel
        </h2>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="min-w-0">
            <TableOfContents items={tocItems} variant="mobile" />
            <ArticleContent article={article} />
            <div className="mt-10">
              <ShareButtons article={article} />
            </div>
            <ArticleCta />
          </div>
          <TableOfContents items={tocItems} variant="desktop" />
        </div>
        <RelatedArticles articles={relatedArticles} />
      </Section>
    </>
  );
}
