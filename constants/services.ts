export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type ServiceIconKey =
  "baby" | "child" | "adult" | "hypnosis" | "treatment" | "consult";

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconKey;
  features: readonly string[];
  href: string;
};

export type ProcessStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: "consult" | "exam" | "treat" | "recover";
};

export type ServiceAdvantage = {
  id: string;
  title: string;
  description: string;
  icon: "equipment" | "team" | "sterile" | "facility" | "friendly" | "fast";
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

/**
 * Services page content placeholders.
 * Replace with CMS / real clinic data in later phases.
 */
export const servicesContent = {
  header: {
    title: "Layanan Kami",
    description:
      "Berbagai layanan sunat dan konsultasi kesehatan dengan pendekatan modern, aman, dan ramah keluarga.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Layanan" },
    ] satisfies BreadcrumbItem[],
  },
  introduction: {
    eyebrow: "Perawatan",
    title: "Layanan kesehatan yang nyaman dan mudah dipahami",
    description:
      "Kami menyediakan pilihan layanan sunat dan konsultasi dengan alur yang jelas, dari persiapan hingga panduan pemulihan.",
    ctaLabel: "Booking WhatsApp",
    imageLabel: "Ilustrasi layanan klinik",
  },
  services: {
    eyebrow: "Daftar Layanan",
    title: "Pilihan Layanan Klinik",
    description:
      "Pilih layanan yang sesuai kebutuhan Anda, lalu hubungi kami untuk jadwal konsultasi.",
    items: [
      {
        id: "sunat-bayi",
        title: "Sunat Bayi",
        description:
          "Prosedur sunat bayi dengan pendekatan modern dan pendampingan orang tua.",
        icon: "baby",
        features: [
          "Pendampingan orang tua",
          "Metode modern",
          "Pemantauan kenyamanan",
        ],
        href: "#sunat-bayi",
      },
      {
        id: "sunat-anak",
        title: "Sunat Anak",
        description: "Perawatan sunat anak yang aman, cepat, dan ramah anak.",
        icon: "child",
        features: [
          "Pendekatan ramah anak",
          "Proses yang efisien",
          "Edukasi singkat untuk keluarga",
        ],
        href: "#sunat-anak",
      },
      {
        id: "sunat-dewasa",
        title: "Sunat Dewasa",
        description:
          "Layanan sunat dewasa dengan kenyamanan dan pemulihan yang terpantau.",
        icon: "adult",
        features: [
          "Konsultasi pra-tindakan",
          "Fokus kenyamanan",
          "Panduan pemulihan",
        ],
        href: "#sunat-dewasa",
      },
      {
        id: "sunat-hipnotis",
        title: "Sunat Hipnotis",
        description:
          "Pendekatan hipnotis untuk membantu mengurangi rasa cemas selama prosedur.",
        icon: "hypnosis",
        features: [
          "Pendekatan menenangkan",
          "Pendampingan selama prosedur",
          "Cocok untuk pasien cemas",
        ],
        href: "#sunat-hipnotis",
      },
      {
        id: "pengobatan-ringan",
        title: "Pengobatan Penyakit Ringan",
        description:
          "Penanganan keluhan ringan dengan pemeriksaan dan saran medis yang tepat.",
        icon: "treatment",
        features: [
          "Pemeriksaan awal",
          "Saran perawatan",
          "Tindak lanjut jika diperlukan",
        ],
        href: "#pengobatan-ringan",
      },
      {
        id: "konsultasi",
        title: "Konsultasi Kesehatan",
        description:
          "Konsultasi kesehatan untuk persiapan, perawatan, dan pemulihan.",
        icon: "consult",
        features: [
          "Konsultasi fleksibel",
          "Informasi yang jelas",
          "Rekomendasi langkah berikutnya",
        ],
        href: "#konsultasi",
      },
    ] satisfies ServiceItem[],
  },
  highlight: {
    eyebrow: "Sorotan Layanan",
    title: "Sunat Anak",
    description:
      "Layanan sunat anak dirancang agar proses lebih tenang bagi anak maupun orang tua, dengan penjelasan yang mudah dipahami sebelum tindakan.",
    imageLabel: "Gambar layanan sunat anak",
    benefits: [
      "Pendekatan yang ramah anak",
      "Komunikasi jelas untuk orang tua",
      "Alur layanan yang tertata",
      "Panduan perawatan setelah prosedur",
    ],
    ctaLabel: "Booking Layanan Ini",
    ctaMessage:
      "Halo Rumah Sunat Modern Jati, saya ingin booking layanan Sunat Anak.",
  },
  process: {
    eyebrow: "Alur Layanan",
    title: "Proses Perawatan",
    description:
      "Langkah sederhana yang membantu Anda memahami perjalanan layanan dari awal hingga pemulihan.",
    steps: [
      {
        id: "step-1",
        step: 1,
        title: "Consultation",
        description:
          "Diskusi kebutuhan pasien dan penjelasan singkat mengenai pilihan layanan.",
        icon: "consult",
      },
      {
        id: "step-2",
        step: 2,
        title: "Examination",
        description:
          "Pemeriksaan awal untuk memastikan kesiapan sebelum tindakan dilakukan.",
        icon: "exam",
      },
      {
        id: "step-3",
        step: 3,
        title: "Treatment",
        description:
          "Prosedur dijalankan dengan fokus pada keamanan dan kenyamanan pasien.",
        icon: "treat",
      },
      {
        id: "step-4",
        step: 4,
        title: "Recovery Guidance",
        description:
          "Pasien dan keluarga mendapat panduan perawatan untuk masa pemulihan.",
        icon: "recover",
      },
    ] satisfies ProcessStep[],
  },
  advantages: {
    eyebrow: "Keunggulan",
    title: "Why Choose Our Services",
    description:
      "Fokus kami adalah memberikan pengalaman layanan yang aman, nyaman, dan mudah diikuti.",
    items: [
      {
        id: "equipment",
        title: "Modern Equipment",
        description:
          "Peralatan pendukung prosedur dengan pendekatan medis modern.",
        icon: "equipment",
      },
      {
        id: "team",
        title: "Experienced Medical Team",
        description:
          "Tenaga medis yang berpengalaman mendampingi setiap tahap layanan.",
        icon: "team",
      },
      {
        id: "sterile",
        title: "Sterile Environment",
        description:
          "Standar kebersihan dan sterilisasi diterapkan secara konsisten.",
        icon: "sterile",
      },
      {
        id: "facility",
        title: "Comfortable Facilities",
        description:
          "Ruang klinik yang nyaman untuk pasien dan keluarga pendamping.",
        icon: "facility",
      },
      {
        id: "friendly",
        title: "Friendly Service",
        description:
          "Komunikasi yang ramah dan penjelasan yang mudah dipahami.",
        icon: "friendly",
      },
      {
        id: "fast",
        title: "Fast Treatment",
        description:
          "Alur layanan efisien tanpa mengorbankan kualitas perawatan.",
        icon: "fast",
      },
    ] satisfies ServiceAdvantage[],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Pertanyaan yang Sering Diajukan",
    description:
      "Jawaban singkat untuk membantu Anda mempersiapkan kunjungan ke klinik.",
    items: [
      {
        id: "faq-1",
        question: "Apakah perlu membuat janji?",
        answer:
          "Disarankan membuat janji terlebih dahulu agar jadwal layanan lebih tertata dan waktu tunggu lebih nyaman.",
      },
      {
        id: "faq-2",
        question: "Berapa lama proses tindakan?",
        answer:
          "Durasi dapat berbeda tergantung jenis layanan dan kondisi pasien. Tim kami akan menjelaskan estimasi saat konsultasi.",
      },
      {
        id: "faq-3",
        question: "Apakah tersedia konsultasi?",
        answer:
          "Ya, konsultasi tersedia untuk membantu Anda memahami persiapan, prosedur, dan perawatan setelah tindakan.",
      },
      {
        id: "faq-4",
        question: "Bagaimana proses pembayaran?",
        answer:
          "Informasi metode pembayaran akan disampaikan oleh petugas klinik sebelum layanan dimulai.",
      },
    ] satisfies FaqItem[],
  },
  cta: {
    headline: "Siap menjadwalkan layanan?",
    description:
      "Hubungi kami melalui WhatsApp untuk booking atau tanya detail layanan yang Anda butuhkan.",
    primaryLabel: "Booking WhatsApp",
  },
} as const;
