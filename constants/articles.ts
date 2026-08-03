import type { Metadata } from "next";

import type { BreadcrumbItem } from "@/constants/services";
import { SITE_NAME, SITE_URL } from "@/constants/site";

export type ArticleBreadcrumb = BreadcrumbItem;

export type ArticleCategoryId =
  | "all"
  | "sunat"
  | "anak"
  | "kesehatan"
  | "pengobatan"
  | "tips";

export type ArticleCategory = {
  id: ArticleCategoryId;
  label: string;
};

export type ArticleContentBlock =
  | {
      type: "heading";
      id: string;
      level: 2 | 3;
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: readonly string[];
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "image";
      label: string;
    }
  | {
      type: "table";
      caption: string;
      headers: readonly string[];
      rows: readonly (readonly string[])[];
    }
  | {
      type: "callout";
      title: string;
      text: string;
    };

export type ArticleSummary = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: Exclude<ArticleCategoryId, "all">;
  categoryLabel: string;
  publishedAt: string;
  readingTime: string;
  thumbnailLabel: string;
};

export type Article = ArticleSummary & {
  author: string;
  heroLabel: string;
  content: readonly ArticleContentBlock[];
};

export type TocItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

export type PaginationItem = {
  label: string;
  href: string;
  active?: boolean;
};

export const articleCategories = [
  { id: "all", label: "Semua" },
  { id: "sunat", label: "Sunat" },
  { id: "anak", label: "Anak" },
  { id: "kesehatan", label: "Kesehatan" },
  { id: "pengobatan", label: "Pengobatan" },
  { id: "tips", label: "Tips" },
] satisfies ArticleCategory[];

const placeholderBlocks = [
  {
    type: "heading",
    id: "ringkasan",
    level: 2,
    text: "Ringkasan Placeholder",
  },
  {
    type: "paragraph",
    text: "Paragraf placeholder ini disiapkan sebagai contoh struktur artikel kesehatan. Konten asli perlu ditinjau dan disetujui oleh pihak klinik sebelum dipublikasikan.",
  },
  {
    type: "paragraph",
    text: "Bagian ini dapat digunakan untuk menjelaskan konteks, tujuan edukasi, dan informasi dasar dengan gaya bahasa yang mudah dipahami pembaca.",
  },
  {
    type: "heading",
    id: "poin-penting",
    level: 2,
    text: "Poin Penting Placeholder",
  },
  {
    type: "list",
    items: [
      "Informasi placeholder untuk poin edukasi pertama.",
      "Informasi placeholder untuk poin edukasi kedua.",
      "Informasi placeholder untuk poin edukasi ketiga.",
    ],
  },
  {
    type: "quote",
    text: "Kutipan placeholder untuk menyoroti pesan edukatif yang perlu dibuat lebih menonjol pada halaman artikel.",
  },
  {
    type: "heading",
    id: "ilustrasi",
    level: 2,
    text: "Ilustrasi Placeholder",
  },
  {
    type: "image",
    label: "Ilustrasi artikel placeholder",
  },
  {
    type: "heading",
    id: "tabel-informasi",
    level: 2,
    text: "Tabel Informasi Placeholder",
  },
  {
    type: "table",
    caption: "Tabel placeholder untuk perbandingan informasi artikel.",
    headers: ["Aspek", "Keterangan", "Catatan"],
    rows: [
      ["Persiapan", "Placeholder", "Dapat diganti dengan data resmi"],
      ["Perawatan", "Placeholder", "Sesuaikan dengan kebijakan klinik"],
      ["Kontrol", "Placeholder", "Gunakan informasi terverifikasi"],
    ],
  },
  {
    type: "heading",
    id: "catatan",
    level: 2,
    text: "Catatan Placeholder",
  },
  {
    type: "callout",
    title: "Callout Placeholder",
    text: "Gunakan bagian ini untuk pesan penting, pengingat konsultasi, atau arahan lanjutan yang relevan.",
  },
  {
    type: "heading",
    id: "penutup",
    level: 2,
    text: "Penutup Placeholder",
  },
  {
    type: "paragraph",
    text: "Paragraf penutup placeholder untuk merangkum artikel dan mengarahkan pembaca menghubungi klinik bila membutuhkan konsultasi.",
  },
] satisfies readonly ArticleContentBlock[];

export const articles = [
  {
    id: "article-1",
    slug: "panduan-placeholder-sunat-modern",
    title: "Panduan Placeholder Sunat Modern",
    description:
      "Deskripsi placeholder untuk artikel edukasi tentang layanan sunat modern dan persiapan membaca informasi klinik.",
    category: "sunat",
    categoryLabel: "Sunat",
    publishedAt: "2026-01-15",
    readingTime: "5 menit baca",
    thumbnailLabel: "Thumbnail artikel sunat placeholder",
    author: "Author Placeholder",
    heroLabel: "Hero artikel sunat placeholder",
    content: placeholderBlocks,
  },
  {
    id: "article-2",
    slug: "tips-placeholder-kunjungan-anak",
    title: "Tips Placeholder Kunjungan Anak",
    description:
      "Deskripsi placeholder untuk artikel yang membahas persiapan kunjungan anak ke klinik.",
    category: "anak",
    categoryLabel: "Anak",
    publishedAt: "2026-02-02",
    readingTime: "4 menit baca",
    thumbnailLabel: "Thumbnail artikel anak placeholder",
    author: "Author Placeholder",
    heroLabel: "Hero artikel anak placeholder",
    content: placeholderBlocks,
  },
  {
    id: "article-3",
    slug: "informasi-placeholder-kesehatan-keluarga",
    title: "Informasi Placeholder Kesehatan Keluarga",
    description:
      "Deskripsi placeholder untuk artikel kesehatan keluarga yang mudah dibaca dan siap dikembangkan.",
    category: "kesehatan",
    categoryLabel: "Kesehatan",
    publishedAt: "2026-03-10",
    readingTime: "6 menit baca",
    thumbnailLabel: "Thumbnail kesehatan keluarga placeholder",
    author: "Author Placeholder",
    heroLabel: "Hero kesehatan keluarga placeholder",
    content: placeholderBlocks,
  },
  {
    id: "article-4",
    slug: "catatan-placeholder-pengobatan-ringan",
    title: "Catatan Placeholder Pengobatan Ringan",
    description:
      "Deskripsi placeholder untuk artikel mengenai informasi layanan pengobatan ringan.",
    category: "pengobatan",
    categoryLabel: "Pengobatan",
    publishedAt: "2026-04-05",
    readingTime: "5 menit baca",
    thumbnailLabel: "Thumbnail pengobatan ringan placeholder",
    author: "Author Placeholder",
    heroLabel: "Hero pengobatan ringan placeholder",
    content: placeholderBlocks,
  },
  {
    id: "article-5",
    slug: "tips-placeholder-perawatan-di-rumah",
    title: "Tips Placeholder Perawatan di Rumah",
    description:
      "Deskripsi placeholder untuk artikel tips perawatan dan pengamatan kondisi pasien di rumah.",
    category: "tips",
    categoryLabel: "Tips",
    publishedAt: "2026-05-12",
    readingTime: "4 menit baca",
    thumbnailLabel: "Thumbnail tips perawatan placeholder",
    author: "Author Placeholder",
    heroLabel: "Hero tips perawatan placeholder",
    content: placeholderBlocks,
  },
  {
    id: "article-6",
    slug: "edukasi-placeholder-konsultasi-klinik",
    title: "Edukasi Placeholder Konsultasi Klinik",
    description:
      "Deskripsi placeholder untuk artikel yang menjelaskan alur konsultasi dan persiapan bertanya.",
    category: "kesehatan",
    categoryLabel: "Kesehatan",
    publishedAt: "2026-06-18",
    readingTime: "3 menit baca",
    thumbnailLabel: "Thumbnail konsultasi klinik placeholder",
    author: "Author Placeholder",
    heroLabel: "Hero konsultasi klinik placeholder",
    content: placeholderBlocks,
  },
] satisfies Article[];

export const articlesContent = {
  header: {
    title: "Artikel Kesehatan",
    description:
      "Kumpulan artikel placeholder yang disiapkan untuk edukasi pasien dan keluarga dengan pengalaman membaca yang nyaman.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artikel" },
    ] satisfies ArticleBreadcrumb[],
  },
  featured: {
    eyebrow: "Artikel Pilihan",
    ctaLabel: "Baca Selengkapnya",
    article: articles[0],
  },
  listing: {
    eyebrow: "Daftar Artikel",
    title: "Baca Artikel Terbaru",
    description:
      "Gunakan pencarian dan kategori sebagai UI placeholder untuk integrasi CMS atau API di fase berikutnya.",
  },
  search: {
    label: "Cari artikel",
    placeholder: "Cari artikel kesehatan...",
    buttonLabel: "Cari",
  },
  pagination: {
    previousLabel: "Sebelumnya",
    nextLabel: "Berikutnya",
    items: [
      { label: "1", href: "/articles", active: true },
      { label: "2", href: "/articles?page=2" },
      { label: "3", href: "/articles?page=3" },
    ] satisfies PaginationItem[],
  },
  detailCta: {
    headline: "Need Consultation?",
    description:
      "Hubungi admin melalui WhatsApp untuk konsultasi, jadwal layanan, atau informasi kunjungan.",
    primaryLabel: "Booking WhatsApp",
  },
} as const;

export function formatArticleDate(value: string): string {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticleToc(article: Article): TocItem[] {
  return article.content
    .filter((block): block is Extract<ArticleContentBlock, { type: "heading" }> => {
      return block.type === "heading";
    })
    .map((heading) => ({
      id: heading.id,
      title: heading.text,
      level: heading.level,
    }));
}

export function getRelatedArticles(article: Article): ArticleSummary[] {
  const sameCategory = articles.filter(
    (item) => item.slug !== article.slug && item.category === article.category,
  );
  const fallback = articles.filter((item) => item.slug !== article.slug);

  return [...sameCategory, ...fallback]
    .filter((item, index, list) => {
      return list.findIndex((candidate) => candidate.slug === item.slug) === index;
    })
    .slice(0, 4);
}

export function createArticleMetadata(article: Article): Metadata {
  const url = `${SITE_URL}/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      siteName: SITE_NAME,
      title: `${article.title} | ${SITE_NAME}`,
      description: article.description,
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${SITE_NAME}`,
      description: article.description,
    },
  };
}
