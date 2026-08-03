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

export type DoctorPreview = {
  id: string;
  name: string;
  position: string;
};

export type GalleryItem = {
  id: string;
  label: string;
};

export type TestimonialItem = {
  id: string;
  name: string;
  rating: number;
  review: string;
};

export type ArticlePreview = {
  id: string;
  title: string;
  category: string;
  publishedAt: string;
  href: string;
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
    headline: "Perawatan Sunat Modern yang Aman dan Nyaman",
    description:
      "Klinik sunat dengan pendekatan medis modern, pelayanan ramah, dan kenyamanan untuk setiap usia.",
    primaryCta: "Booking via WhatsApp",
    secondaryCta: "Lihat Layanan",
    secondaryHref: "/layanan",
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
        name: "Nama Dokter",
        position: "Dokter Pelaksana",
      },
      {
        id: "dokter-2",
        name: "Nama Dokter",
        position: "Dokter Konsultan",
      },
      {
        id: "dokter-3",
        name: "Nama Dokter",
        position: "Tenaga Medis",
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
      { id: "galeri-1", label: "Ruang tunggu" },
      { id: "galeri-2", label: "Ruang tindakan" },
      { id: "galeri-3", label: "Area konsultasi" },
      { id: "galeri-4", label: "Fasilitas klinik" },
      { id: "galeri-5", label: "Peralatan medis" },
      { id: "galeri-6", label: "Suasana pelayanan" },
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
  articles: {
    eyebrow: "Artikel",
    title: "Artikel Kesehatan",
    description:
      "Informasi ringkas seputar persiapan, perawatan, dan pemulihan.",
    ctaLabel: "Lihat Semua Artikel",
    ctaHref: "/artikel",
    items: [
      {
        id: "a-1",
        title: "Persiapan Sebelum Sunat",
        category: "Edukasi",
        publishedAt: "2026-01-15",
        href: "/artikel",
      },
      {
        id: "a-2",
        title: "Perawatan Setelah Prosedur",
        category: "Perawatan",
        publishedAt: "2026-02-02",
        href: "/artikel",
      },
      {
        id: "a-3",
        title: "Tips Menjaga Kenyamanan Anak",
        category: "Tips",
        publishedAt: "2026-03-10",
        href: "/artikel",
      },
    ] satisfies ArticlePreview[],
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
      { days: "Senin – Sabtu", hours: "08.00 – 17.00" },
      { days: "Minggu", hours: "Dengan perjanjian" },
    ] satisfies OpeningHour[],
  },
} as const;
