export type ServicePreview = {
  id: string;
  title: string;
  description: string;
  icon: "baby" | "child" | "adult" | "hypnosis" | "treatment" | "consult";
};

export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: "doctor" | "modern" | "comfort" | "friendly" | "fast" | "sterile";
};

export type GalleryItem = {
  id: string;
  label: string;
  imageSrc?: string;
};

export type DoctorPreview = {
  id: string;
  name: string;
  position: string;
  imageSrc?: string;
};

export type TestimonialItem = {
  id: string;
  name: string;
  rating: number;
  review: string;
};

export type OpeningHour = {
  days: string;
  hours: string;
};

/**
 * Homepage content placeholders.
 * Replace with CMS / real clinic data in later phases.
 */
export const homepageContent = {
  hero: {
    badge: "Klinik Sunat Modern & Hipnotis Terpercaya",
    headlinePrefix: "Sunat Modern yang",
    headlineHighlight: "Aman, Nyaman & Profesional",
    description:
      "Perawatan sunat dengan metode modern, tenaga medis profesional, dan pelayanan ramah untuk bayi, anak, hingga dewasa.",
    primaryCta: "Daftar Sunat Sekarang",
    secondaryCta: "Konsultasi Kesehatan",
    secondaryHref: "/layanan",
    imageLabel: "Tim medis Rumah Sunat Modern Jati",
    imageSrc: "/images/hero-klinik.png",
    highlights: [
      { id: "aman", label: "Aman & Nyaman", icon: "comfort" as const },
      { id: "modern", label: "Metode Modern", icon: "modern" as const },
      { id: "profesional", label: "Tenaga Profesional", icon: "doctor" as const },
      { id: "cepat", label: "Pelayanan Cepat", icon: "fast" as const },
    ],
  },
  services: {
    eyebrow: "Layanan",
    title: "Layanan Perawatan Kami",
    description:
      "Berbagai layanan sunat dan konsultasi kesehatan dengan standar medis yang terjaga.",
    ctaLabel: "Lihat Semua Layanan",
    ctaHref: "/layanan",
    items: [
      {
        id: "sunat-bayi",
        title: "Sunat Bayi",
        description:
          "Prosedur sunat bayi dengan metode modern dan pendampingan orang tua.",
        icon: "baby",
      },
      {
        id: "sunat-anak",
        title: "Sunat Anak",
        description: "Perawatan sunat anak yang aman, cepat, dan ramah anak.",
        icon: "child",
      },
      {
        id: "sunat-dewasa",
        title: "Sunat Dewasa",
        description:
          "Layanan sunat dewasa dengan kenyamanan dan pemulihan yang terpantau.",
        icon: "adult",
      },
      {
        id: "sunat-hipnotis",
        title: "Sunat Hipnotis",
        description:
          "Pendekatan hipnotis untuk membantu mengurangi rasa cemas selama prosedur.",
        icon: "hypnosis",
      },
      {
        id: "pengobatan-ringan",
        title: "Pengobatan Penyakit Ringan",
        description:
          "Penanganan keluhan ringan dengan pemeriksaan dan saran medis yang tepat.",
        icon: "treatment",
      },
      {
        id: "konsultasi",
        title: "Konsultasi Kesehatan",
        description:
          "Konsultasi kesehatan untuk persiapan, perawatan, dan pemulihan.",
        icon: "consult",
      },
    ] satisfies ServicePreview[],
  },
  whyChooseUs: {
    eyebrow: "Keunggulan",
    title: "Mengapa Memilih Kami",
    description:
      "Fokus pada keamanan, kenyamanan, dan pengalaman pasien yang lebih tenang.",
    items: [
      {
        id: "dokter",
        title: "Dokter Berpengalaman",
        description:
          "Ditangani tenaga medis yang terlatih dalam prosedur sunat modern.",
        icon: "doctor",
      },
      {
        id: "metode",
        title: "Metode Modern",
        description:
          "Menggunakan pendekatan dan teknik yang disesuaikan dengan kebutuhan pasien.",
        icon: "modern",
      },
      {
        id: "ruang",
        title: "Ruang Nyaman",
        description:
          "Lingkungan klinik yang bersih, tenang, dan ramah keluarga.",
        icon: "comfort",
      },
      {
        id: "ramah",
        title: "Pelayanan Ramah",
        description:
          "Komunikasi yang jelas dan pendampingan yang empatik di setiap tahap.",
        icon: "friendly",
      },
      {
        id: "cepat",
        title: "Proses Cepat",
        description:
          "Alur layanan yang efisien tanpa mengorbankan kualitas perawatan.",
        icon: "fast",
      },
      {
        id: "steril",
        title: "Peralatan Steril",
        description:
          "Standar kebersihan dan sterilisasi yang diterapkan secara konsisten.",
        icon: "sterile",
      },
    ] satisfies FeatureItem[],
  },
  team: {
    eyebrow: "Tim Medis",
    title: "Tim Medis Kami",
    description: "Kenali tenaga medis yang siap mendampingi perawatan Anda.",
    ctaLabel: "Lihat Tim Medis",
    ctaHref: "/tim-medis",
    items: [
      {
        id: "dokter-1",
        name: "dr. Muhammad Fadil Azka",
        position: "Dokter",
        imageSrc: "/images/dr 1.png",
      },
      {
        id: "dokter-2",
        name: "Ns. Koko Ginanjar Saputro, S.Kep.",
        position: "Tenaga Medis",
        imageSrc: "/images/dr 2.png",
      },
    ] satisfies DoctorPreview[],
  },
  gallery: {
    eyebrow: "Galeri",
    title: "Suasana Klinik",
    description: "Cuplikan ruang dan fasilitas klinik kami.",
    ctaLabel: "Lihat Galeri",
    ctaHref: "/galeri",
    items: [
      { id: "galeri-1", label: "Ruang tunggu", imageSrc: "/images/ruang tunggu .jpeg" },
      { id: "galeri-2", label: "Ruang tindakan", imageSrc: "/images/ruang sunat.png" },
      { id: "galeri-3", label: "Area konsultasi", imageSrc: "/images/konsultasi.png" },
      { id: "galeri-4", label: "Fasilitas klinik", imageSrc: "/images/foto awal.png" },
      { id: "galeri-5", label: "Tampilan klinik", imageSrc: "/images/tampilan depan klinik.jpeg" },
      { id: "galeri-6", label: "Ruang tunggu & parkir", imageSrc: "/images/ruang tunggu dan parkir.png" },
    ] satisfies GalleryItem[],
  },
  testimonials: {
    eyebrow: "Testimoni",
    title: "Apa Kata Pasien",
    description:
      "Pengalaman singkat dari pasien dan keluarga yang telah berkunjung.",
    items: [
      {
        id: "t-1",
        name: "Nama Pasien",
        rating: 5,
        review:
          "Pelayanan ramah, proses cepat, dan penjelasan dokter mudah dipahami.",
      },
      {
        id: "t-2",
        name: "Nama Pasien",
        rating: 5,
        review: "Klinik nyaman dan tim medis sangat membantu selama perawatan.",
      },
      {
        id: "t-3",
        name: "Nama Pasien",
        rating: 4,
        review: "Pengalaman yang menenangkan dari konsultasi hingga pemulihan.",
      },
    ] satisfies TestimonialItem[],
  },
  booking: {
    headline: "Siap Booking Perawatan?",
    description:
      "Hubungi kami melalui WhatsApp untuk jadwal konsultasi atau reservasi layanan.",
    phoneLabel: "Atau telepon kami",
  },
  location: {
    eyebrow: "Lokasi",
    title: "Lokasi Klinik",
    description: "Kunjungi klinik kami sesuai jam operasional yang tersedia.",
    mapLabel: "Peta lokasi klinik",
    hours: [
      { days: "Setiap hari", hours: "06.00 – 21.00" },
    ] satisfies OpeningHour[],
  },
} as const;
