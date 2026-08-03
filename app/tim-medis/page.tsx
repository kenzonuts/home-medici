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
import { SITE_NAME } from "@/constants/site";
import { teamContent } from "@/constants/team";

export const metadata: Metadata = {
  title: "Tim Medis",
  description: teamContent.header.description,
  openGraph: {
    title: `Tim Medis | ${SITE_NAME}`,
    description: teamContent.header.description,
  },
};

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
