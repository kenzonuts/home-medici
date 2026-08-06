import type { BreadcrumbItem } from "@/constants/services";

export type TeamBreadcrumb = BreadcrumbItem;

export type TeamDoctor = {
  id: string;
  name: string;
  position: string;
  bio: string;
  expertise: readonly string[];
  specialtyTags: readonly string[];
  schedule: string;
  imageLabel: string;
  imageSrc?: string;
  ctaLabel: string;
  ctaMessage: string;
};

export type QualificationItem = {
  id: string;
  title: string;
  description: string;
  icon: "education" | "certification" | "membership" | "training";
};

export type ExpertiseArea = {
  id: string;
  title: string;
  description: string;
  icon: "baby" | "child" | "adult" | "consult" | "treatment";
};

export type TeamTrustItem = {
  id: string;
  title: string;
  description: string;
  icon:
    | "experienced"
    | "certified"
    | "consultation"
    | "modern"
    | "safety"
    | "personalized";
};

/**
 * Medical team page content placeholders.
 * Replace with verified clinic staff data before publishing real profiles.
 */
export const teamContent = {
  header: {
    title: "Tim Medis",
    description:
      "Kenali dokter dan tenaga kesehatan yang siap mendampingi pasien dengan layanan yang profesional, ramah, dan aman.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Tim Medis" },
    ] satisfies TeamBreadcrumb[],
  },
  introduction: {
    eyebrow: "Tenaga Profesional",
    title: "Pendampingan medis yang tenang dan terpercaya",
    description:
      "Tim kami membantu pasien dan keluarga memahami setiap tahap layanan, mulai dari konsultasi, persiapan tindakan, hingga panduan pemulihan.",
    body: "Dengan pendekatan ramah dan profesional, tim medis Rumah Sunat Modern Jati siap mendampingi setiap usia pasien agar prosedur berlangsung lebih aman dan nyaman.",
    imageLabel: "Tim medis Rumah Sunat Modern Jati",
    imageSrc: "/images/hero-klinik.png",
  },
  doctors: {
    eyebrow: "Daftar Tim",
    title: "Dokter dan Tenaga Kesehatan",
    description:
      "Kenali dokter dan tenaga medis yang siap mendampingi perawatan Anda.",
    items: [
      {
        id: "doctor-1",
        name: "dr. Muhammad Fadil Azka",
        position: "Dokter",
        bio: "Dokter yang fokus pada layanan sunat modern dengan pendekatan ramah, profesional, dan mengutamakan kenyamanan pasien serta keluarga.",
        expertise: ["Sunat Anak", "Konsultasi"],
        specialtyTags: ["Anak", "Keluarga"],
        schedule: "Setiap hari, 06.00 - 21.00",
        imageLabel: "Foto dr. Muhammad Fadil Azka",
        imageSrc: "/images/dr 1.png",
        ctaLabel: "Booking",
        ctaMessage:
          "Halo Rumah Sunat Modern Jati, saya ingin booking dengan dr. Muhammad Fadil Azka.",
      },
      {
        id: "doctor-2",
        name: "Ns. Koko Ginanjar Saputro, S.Kep.",
        position: "Tenaga Medis",
        bio: "Tenaga medis berpengalaman dalam pendampingan pasien, edukasi perawatan, dan memastikan proses layanan berjalan aman serta nyaman.",
        expertise: ["Perawatan", "Edukasi Pasien"],
        specialtyTags: ["Pemulihan", "Edukasi"],
        schedule: "Setiap hari, 06.00 - 21.00",
        imageLabel: "Foto Ns. Koko Ginanjar Saputro",
        imageSrc: "/images/dr 2.png",
        ctaLabel: "Booking",
        ctaMessage:
          "Halo Rumah Sunat Modern Jati, saya ingin booking dengan Ns. Koko Ginanjar Saputro.",
      },
    ] satisfies TeamDoctor[],
  },
  qualifications: {
    eyebrow: "Kualifikasi",
    title: "Kualifikasi & Sertifikasi",
    description:
      "Bagian ini disiapkan untuk menampilkan latar belakang profesional tim medis secara ringkas dan mudah dipindai.",
    items: [
      {
        id: "education",
        title: "Education Placeholder",
        description:
          "Informasi pendidikan dokter dan tenaga kesehatan akan ditampilkan di sini.",
        icon: "education",
      },
      {
        id: "certifications",
        title: "Certifications Placeholder",
        description:
          "Sertifikasi medis, pelatihan prosedur, dan kredensial resmi dapat ditambahkan di bagian ini.",
        icon: "certification",
      },
      {
        id: "membership",
        title: "Professional Membership Placeholder",
        description:
          "Keanggotaan organisasi profesional dan asosiasi terkait dapat dicantumkan di sini.",
        icon: "membership",
      },
      {
        id: "training",
        title: "Medical Training Placeholder",
        description:
          "Riwayat pelatihan klinis, workshop, atau peningkatan kompetensi dapat dilengkapi kemudian.",
        icon: "training",
      },
    ] satisfies QualificationItem[],
  },
  expertise: {
    eyebrow: "Keahlian",
    title: "Area Keahlian Medis",
    description:
      "Tim medis disiapkan untuk mendukung layanan utama klinik dengan pendekatan yang aman dan nyaman.",
    items: [
      {
        id: "sunat-bayi",
        title: "Sunat Bayi",
        description:
          "Deskripsi placeholder untuk layanan sunat bayi dengan pendampingan keluarga.",
        icon: "baby",
      },
      {
        id: "sunat-anak",
        title: "Sunat Anak",
        description:
          "Deskripsi placeholder untuk perawatan sunat anak yang ramah dan terarah.",
        icon: "child",
      },
      {
        id: "sunat-dewasa",
        title: "Sunat Dewasa",
        description:
          "Deskripsi placeholder untuk prosedur dewasa dengan konsultasi yang jelas.",
        icon: "adult",
      },
      {
        id: "konsultasi",
        title: "Konsultasi Kesehatan",
        description:
          "Deskripsi placeholder untuk konsultasi persiapan, tindakan, dan pemulihan.",
        icon: "consult",
      },
      {
        id: "pengobatan-ringan",
        title: "Pengobatan Penyakit Ringan",
        description:
          "Deskripsi placeholder untuk pemeriksaan dan penanganan keluhan ringan.",
        icon: "treatment",
      },
    ] satisfies ExpertiseArea[],
  },
  trust: {
    eyebrow: "Kepercayaan Pasien",
    title: "Why Choose Our Medical Team",
    description:
      "Prinsip layanan yang membantu pasien merasa lebih siap, tenang, dan terarah saat berkunjung.",
    items: [
      {
        id: "experienced",
        title: "Experienced Doctors",
        description:
          "Tim medis dengan pengalaman placeholder dalam menangani kebutuhan pasien klinik.",
        icon: "experienced",
      },
      {
        id: "certified",
        title: "Certified Professionals",
        description:
          "Kredensial dan sertifikasi resmi dapat ditambahkan setelah data terverifikasi.",
        icon: "certified",
      },
      {
        id: "consultation",
        title: "Friendly Consultation",
        description:
          "Konsultasi disampaikan dengan bahasa yang mudah dipahami pasien dan keluarga.",
        icon: "consultation",
      },
      {
        id: "modern",
        title: "Modern Treatment",
        description:
          "Pendekatan perawatan mendukung proses yang efisien, bersih, dan nyaman.",
        icon: "modern",
      },
      {
        id: "safety",
        title: "Patient Safety",
        description:
          "Keamanan pasien menjadi dasar dalam setiap tahap konsultasi dan tindakan.",
        icon: "safety",
      },
      {
        id: "personalized",
        title: "Personalized Care",
        description:
          "Rekomendasi layanan disesuaikan dengan kebutuhan dan kondisi pasien.",
        icon: "personalized",
      },
    ] satisfies TeamTrustItem[],
  },
  cta: {
    headline: "Siap konsultasi dengan tim medis kami?",
    description:
      "Hubungi admin untuk memilih jadwal konsultasi, mendapatkan informasi layanan, dan menyiapkan kunjungan dengan lebih tenang.",
    primaryLabel: "Booking WhatsApp",
    phoneLabel: "Kontak Telepon Placeholder",
  },
} as const;
