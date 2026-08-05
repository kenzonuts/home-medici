import type { Metadata } from "next";

import {
  ClinicEnvironment,
  FeaturedFacilities,
  GalleryBookingCta,
  GalleryIntroduction,
  GalleryStats,
  MainGalleryGrid,
} from "@/components/sections/gallery";
import { PageHeader } from "@/components/shared/PageHeader";
import { galleryContent } from "@/constants/gallery";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Galeri",
  description: galleryContent.header.description,
  path: "/galeri",
});

export default function GalleryPage() {
  const { header } = galleryContent;

  return (
    <>
      <PageHeader
        title={header.title}
        description={header.description}
        breadcrumbs={header.breadcrumbs}
      />
      <GalleryIntroduction />
      <MainGalleryGrid />
      <FeaturedFacilities />
      <ClinicEnvironment />
      <GalleryStats />
      <GalleryBookingCta />
    </>
  );
}
