export type AboutBreadcrumb = {
  label: string;
  href?: string;
};

export type StoryMilestone = {
  id: string;
  year: string;
  title: string;
  description: string;
};

export type VisionMissionItem = {
  id: string;
  title: string;
  description: string;
  icon: "vision" | "mission";
};

export type ValueItem = {
  id: string;
  title: string;
  description: string;
  icon:
    | "professional"
    | "caring"
    | "safety"
    | "integrity"
    | "innovation"
    | "comfort";
};

export type FacilityItem = {
  id: string;
  name: string;
  description: string;
};

export type StatItem = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

export type TrustItem = {
  id: string;
  title: string;
  description: string;
  icon: "family" | "transparent" | "support" | "quality";
};

/**
 * About page content placeholders.
 * Replace with real clinic content in later phases.
 */
export const aboutContent = {
  header: {
    title: "Tentang Kami",
    description:
      "Mengenal lebih dekat klinik, nilai pelayanan, dan komitmen kami terhadap kenyamanan pasien.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Tentang Kami" },
    ] satisfies AboutBreadcrumb[],
  },
  introduction: {
    eyebrow: "Profil Klinik",
    title: "Klinik sunat modern yang mengutamakan kenyamanan",
    description:
      "Rumah Sunat Modern Jati hadir untuk memberikan perawatan sunat dengan pendekatan medis yang aman, ramah, dan mudah dipahami oleh pasien serta keluarga.",
    body: "Kami berfokus pada pengalaman yang tenang mulai dari konsultasi, prosedur, hingga pemulihan, dengan standar kebersihan dan komunikasi yang jelas.",
    ctaLabel: "Hubungi Kami",
    ctaHref: "/kontak",
    imageLabel: "Foto klinik",
  },
  story: {
    eyebrow: "Cerita Kami",
    title: "Perjalanan Klinik",
    description:
      "Ringkasan perjalanan kami dalam membangun layanan yang lebih aman dan nyaman.",
    illustrationLabel: "Ilustrasi perjalanan klinik",
    milestones: [
      {
        id: "m-1",
        year: "Awal",
        title: "Mulai melayani",
        description:
          "Klinik mulai menyediakan layanan sunat dengan fokus pada kenyamanan pasien.",
      },
      {
        id: "m-2",
        year: "Berkembang",
        title: "Memperluas layanan",
        description:
          "Menambah pendekatan perawatan dan fasilitas pendukung untuk keluarga.",
      },
      {
        id: "m-3",
        year: "Kini",
        title: "Terus meningkatkan mutu",
        description:
          "Mempertahankan standar sterilisasi, edukasi pasien, dan pelayanan yang ramah.",
      },
    ] satisfies StoryMilestone[],
  },
  visionMission: {
    eyebrow: "Arah Kami",
    title: "Visi & Misi",
    description: "Komitmen yang menjadi dasar setiap pelayanan di klinik kami.",
    items: [
      {
        id: "vision",
        title: "Visi",
        description:
          "Menjadi klinik sunat yang dipercaya keluarga karena keamanan, kenyamanan, dan pelayanan yang humanis.",
        icon: "vision",
      },
      {
        id: "mission",
        title: "Misi",
        description:
          "Memberikan perawatan modern, edukasi yang jelas, serta pengalaman pasien yang tenang di setiap tahap layanan.",
        icon: "mission",
      },
    ] satisfies VisionMissionItem[],
  },
  values: {
    eyebrow: "Nilai",
    title: "Nilai-Nilai Klinik",
    description:
      "Prinsip yang kami jaga dalam setiap interaksi dengan pasien dan keluarga.",
    items: [
      {
        id: "professional",
        title: "Professional",
        description:
          "Pelayanan dijalankan dengan standar medis dan komunikasi yang jelas.",
        icon: "professional",
      },
      {
        id: "caring",
        title: "Caring",
        description:
          "Pendampingan yang empatik untuk mengurangi rasa cemas pasien.",
        icon: "caring",
      },
      {
        id: "safety",
        title: "Safety",
        description:
          "Keamanan prosedur dan sterilisasi menjadi prioritas utama.",
        icon: "safety",
      },
      {
        id: "integrity",
        title: "Integrity",
        description: "Informasi disampaikan secara jujur dan mudah dipahami.",
        icon: "integrity",
      },
      {
        id: "innovation",
        title: "Innovation",
        description:
          "Terus mengadopsi metode modern yang relevan dengan kebutuhan pasien.",
        icon: "innovation",
      },
      {
        id: "comfort",
        title: "Comfort",
        description:
          "Menciptakan suasana klinik yang tenang dan ramah keluarga.",
        icon: "comfort",
      },
    ] satisfies ValueItem[],
  },
  facilities: {
    eyebrow: "Fasilitas",
    title: "Fasilitas Klinik",
    description:
      "Ruang dan peralatan yang mendukung pengalaman perawatan yang lebih nyaman.",
    items: [
      {
        id: "waiting",
        name: "Comfortable Waiting Room",
        description:
          "Area tunggu yang bersih dan nyaman untuk pasien serta keluarga.",
      },
      {
        id: "treatment",
        name: "Sterile Treatment Room",
        description: "Ruang tindakan dengan standar kebersihan yang terjaga.",
      },
      {
        id: "equipment",
        name: "Modern Equipment",
        description:
          "Peralatan pendukung prosedur dengan pendekatan medis modern.",
      },
      {
        id: "child",
        name: "Child Friendly Area",
        description:
          "Suasana yang ramah anak untuk membantu proses yang lebih tenang.",
      },
    ] satisfies FacilityItem[],
  },
  statistics: {
    eyebrow: "Angka",
    title: "Sekilas Klinik Kami",
    description: "Indikator ringkas yang menggambarkan komitmen layanan kami.",
    items: [
      {
        id: "years",
        label: "Years Experience",
        value: 10,
        suffix: "+",
      },
      {
        id: "staff",
        label: "Professional Staff",
        value: 8,
        suffix: "+",
      },
      {
        id: "patients",
        label: "Happy Patients",
        value: 1000,
        suffix: "+",
      },
      {
        id: "services",
        label: "Available Services",
        value: 6,
      },
    ] satisfies StatItem[],
  },
  trust: {
    eyebrow: "Kepercayaan",
    title: "Why Families Trust Us",
    description:
      "Alasan keluarga merasa lebih tenang saat memilih layanan kami.",
    items: [
      {
        id: "family",
        title: "Pendekatan keluarga",
        description:
          "Komunikasi yang melibatkan orang tua dan pendamping di setiap tahap.",
        icon: "family",
      },
      {
        id: "transparent",
        title: "Informasi transparan",
        description:
          "Penjelasan prosedur, persiapan, dan perawatan disampaikan dengan jelas.",
        icon: "transparent",
      },
      {
        id: "support",
        title: "Pendampingan pemulihan",
        description:
          "Tim siap membantu pertanyaan seputar perawatan setelah prosedur.",
        icon: "support",
      },
      {
        id: "quality",
        title: "Standar kualitas",
        description:
          "Fokus pada kebersihan, kenyamanan ruang, dan proses yang tertata.",
        icon: "quality",
      },
    ] satisfies TrustItem[],
  },
  cta: {
    headline: "Siap mengenal layanan kami lebih lanjut?",
    description:
      "Tim kami siap membantu Anda menjadwalkan konsultasi atau booking melalui WhatsApp.",
    primaryLabel: "Booking WhatsApp",
    secondaryLabel: "Hubungi Kami",
    secondaryHref: "/kontak",
  },
} as const;
