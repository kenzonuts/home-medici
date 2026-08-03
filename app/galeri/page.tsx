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
import { SITE_NAME } from "@/constants/site";

export const metadata: Metadata = {
  title: "Galeri",
  description: galleryContent.header.description,
  openGraph: {
    title: `Galeri | ${SITE_NAME}`,
    description: galleryContent.header.description,
  },
};

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
