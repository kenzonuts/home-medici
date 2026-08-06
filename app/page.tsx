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
      <MedicalTeamPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
      <BookingSection />
      <ClinicLocation />
    </>
  );
}
