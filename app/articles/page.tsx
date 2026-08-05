import type { Metadata } from "next";

import { ArticlesGrid, FeaturedArticle } from "@/components/sections/articles";
import { PageHeader } from "@/components/shared/PageHeader";
import { articlesContent } from "@/constants/articles";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Artikel",
  description: articlesContent.header.description,
  path: "/articles",
});

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
