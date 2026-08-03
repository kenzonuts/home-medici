import type { Metadata } from "next";

import {
  AboutCTA,
  ClinicFacilities,
  ClinicIntroduction,
  ClinicValues,
  OurStory,
  StatisticsSection,
  VisionMission,
  WhyFamiliesTrustUs,
} from "@/components/sections/about";
import { PageHeader } from "@/components/shared/PageHeader";
import { aboutContent } from "@/constants/about";
import { SITE_NAME } from "@/constants/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: aboutContent.header.description,
  openGraph: {
    title: `Tentang Kami | ${SITE_NAME}`,
    description: aboutContent.header.description,
  },
};

export default function AboutPage() {
  const { header } = aboutContent;

  return (
    <>
      <PageHeader
        title={header.title}
        description={header.description}
        breadcrumbs={header.breadcrumbs}
      />
      <ClinicIntroduction />
      <OurStory />
      <VisionMission />
      <ClinicValues />
      <ClinicFacilities />
      <StatisticsSection />
      <WhyFamiliesTrustUs />
      <AboutCTA />
    </>
  );
}
