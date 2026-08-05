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
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Layanan",
  description: servicesContent.header.description,
  path: "/layanan",
});

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
