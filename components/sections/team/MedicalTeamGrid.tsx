import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { DoctorProfileCard } from "@/components/sections/team/DoctorProfileCard";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/Typography";
import { teamContent } from "@/constants/team";

export function MedicalTeamGrid() {
  const { doctors } = teamContent;

  return (
    <Section id="daftar-tim-medis" aria-labelledby="medical-team-heading">
      <FadeUp>
        <SectionTitle
          id="medical-team-heading"
          align="center"
          eyebrow={doctors.eyebrow}
          title={doctors.title}
          description={doctors.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.items.map((doctor) => (
          <StaggerItem key={doctor.id}>
            <DoctorProfileCard doctor={doctor} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
