import {
  BookingSection,
  ClinicLocation,
  GalleryPreview,
  HeroSection,
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
      <GalleryPreview />
      <Testimonials />
      <BookingSection />
      <ClinicLocation />
    </>
  );
}
