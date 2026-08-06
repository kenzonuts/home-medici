import {
  BookingSection,
  ClinicLocation,
  GalleryPreview,
  HeroSection,
  MedicalTeamPreview,
  ServicesPreview,
  Testimonials,
  WhyChooseUs,
} from "@/components/sections/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <MedicalTeamPreview />
      <GalleryPreview />
      <Testimonials />
      <BookingSection />
      <ClinicLocation />
    </>
  );
}
