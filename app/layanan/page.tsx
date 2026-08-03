import type { Metadata } from "next";

import {
  ServiceHighlight,
  ServicesBookingCta,
  ServicesFaq,
  ServicesGrid,
  ServicesIntroduction,
  TreatmentProcess,
  WhyChooseServices,
} from "@/components/sections/services";
import { PageHeader } from "@/components/shared/PageHeader";
import { servicesContent } from "@/constants/services";
import { SITE_NAME } from "@/constants/site";

export const metadata: Metadata = {
  title: "Layanan",
  description: servicesContent.header.description,
  openGraph: {
    title: `Layanan | ${SITE_NAME}`,
    description: servicesContent.header.description,
  },
};

export default function ServicesPage() {
  const { header } = servicesContent;

  return (
    <>
      <PageHeader
        title={header.title}
        description={header.description}
        breadcrumbs={header.breadcrumbs}
      />
      <ServicesIntroduction />
      <ServicesGrid />
      <ServiceHighlight />
      <TreatmentProcess />
      <WhyChooseServices />
      <ServicesFaq />
      <ServicesBookingCta />
    </>
  );
}
