import type { Metadata } from "next";

import {
  ExpertiseAreas,
  FeaturedDoctor,
  MedicalTeamGrid,
  Qualifications,
  TeamAppointmentCta,
  TeamIntroduction,
  WhyChooseMedicalTeam,
} from "@/components/sections/team";
import { PageHeader } from "@/components/shared/PageHeader";
import { teamContent } from "@/constants/team";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Tim Medis",
  description: teamContent.header.description,
  path: "/tim-medis",
});

export default function MedicalTeamPage() {
  const { header } = teamContent;

  return (
    <>
      <PageHeader
        title={header.title}
        description={header.description}
        breadcrumbs={header.breadcrumbs}
      />
      <TeamIntroduction />
      <FeaturedDoctor />
      <MedicalTeamGrid />
      <Qualifications />
      <ExpertiseAreas />
      <WhyChooseMedicalTeam />
      <TeamAppointmentCta />
    </>
  );
}
