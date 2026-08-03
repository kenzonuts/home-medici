import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { ServiceCardItem } from "@/components/sections/services/ServiceCardItem";
import { Section } from "@/components/layout/Section";
import { SectionTitle } from "@/components/ui/Typography";
import { servicesContent } from "@/constants/services";

export function ServicesGrid() {
  const { services } = servicesContent;

  return (
    <Section
      id="daftar-layanan"
      aria-labelledby="services-grid-heading"
      spacing="lg"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="services-grid-heading"
          align="center"
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.items.map((service) => (
          <StaggerItem key={service.id}>
            <ServiceCardItem service={service} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
