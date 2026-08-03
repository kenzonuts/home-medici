import type { Metadata } from "next";

import { ArticlesGrid, FeaturedArticle } from "@/components/sections/articles";
import { PageHeader } from "@/components/shared/PageHeader";
import { articlesContent } from "@/constants/articles";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export const metadata: Metadata = {
  title: "Artikel",
  description: articlesContent.header.description,
  alternates: {
    canonical: `${SITE_URL}/articles`,
  },
  openGraph: {
    title: `Artikel | ${SITE_NAME}`,
    description: articlesContent.header.description,
    url: `${SITE_URL}/articles`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Artikel | ${SITE_NAME}`,
    description: articlesContent.header.description,
  },
};

export default function ArticlesPage() {
  const { header } = articlesContent;

  return (
    <>
      <PageHeader
        title={header.title}
        description={header.description}
        breadcrumbs={header.breadcrumbs}
      />
      <FeaturedArticle />
      <ArticlesGrid />
    </>
  );
}
