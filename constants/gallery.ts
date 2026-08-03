import type { BreadcrumbItem } from "@/constants/services";

export type GalleryBreadcrumb = BreadcrumbItem;

export type GalleryCategoryId =
  | "all"
  | "clinic"
  | "waiting-room"
  | "treatment-room"
  | "facilities"
  | "activities";

export type GalleryCategory = {
  id: GalleryCategoryId;
  label: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: Exclude<GalleryCategoryId, "all">;
  categoryLabel: string;
  imageLabel: string;
  aspect: "square" | "wide" | "portrait";
  tone: "green" | "blue" | "teal" | "slate";
};

export type FacilityHighlight = {
  id: string;
  name: string;
  description: string;
  imageLabel: string;
  tone: GalleryItem["tone"];
};

export type EnvironmentFeature = {
  id: string;
  label: string;
};

export type GalleryStat = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
};

/**
 * Gallery page content placeholders.
 * Replace image placeholders with optimized clinic assets in later phases.
 */
export const galleryContent = {
  header: {
    title: "Galeri Klinik",
    description:
      "Lihat suasana klinik, ruang layanan, fasilitas, dan aktivitas yang mendukung pengalaman perawatan yang nyaman.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Galeri" },
    ] satisfies GalleryBreadcrumb[],
  },
  introduction: {
    eyebrow: "Suasana Klinik",
    title: "Lingkungan klinik yang bersih, terang, dan ramah keluarga",
    description:
      "Galeri ini disiapkan untuk menampilkan fasilitas dan aktivitas klinik secara visual agar pasien dapat mengenal suasana sebelum berkunjung.",
    body: "Seluruh gambar masih menggunakan placeholder dan dapat diganti dengan dokumentasi resmi klinik tanpa mengubah struktur komponen.",
    imageLabel: "Ilustrasi galeri klinik",
  },
  categories: [
    { id: "all", label: "Semua" },
    { id: "clinic", label: "Klinik" },
    { id: "waiting-room", label: "Ruang Tunggu" },
    { id: "treatment-room", label: "Ruang Tindakan" },
    { id: "facilities", label: "Fasilitas" },
    { id: "activities", label: "Kegiatan" },
  ] satisfies GalleryCategory[],
  gallery: {
    eyebrow: "Dokumentasi",
    title: "Main Gallery",
    description:
      "Jelajahi placeholder visual untuk berbagai area klinik dan aktivitas pelayanan.",
    items: [
      {
        id: "gallery-1",
        title: "Tampilan Klinik Placeholder",
        category: "clinic",
        categoryLabel: "Klinik",
        imageLabel: "Foto klinik placeholder",
        aspect: "wide",
        tone: "green",
      },
      {
        id: "gallery-2",
        title: "Ruang Tunggu Placeholder",
        category: "waiting-room",
        categoryLabel: "Ruang Tunggu",
        imageLabel: "Foto ruang tunggu placeholder",
        aspect: "square",
        tone: "blue",
      },
      {
        id: "gallery-3",
        title: "Ruang Tindakan Placeholder",
        category: "treatment-room",
        categoryLabel: "Ruang Tindakan",
        imageLabel: "Foto ruang tindakan placeholder",
        aspect: "portrait",
        tone: "teal",
      },
      {
        id: "gallery-4",
        title: "Area Konsultasi Placeholder",
        category: "facilities",
        categoryLabel: "Fasilitas",
        imageLabel: "Foto area konsultasi placeholder",
        aspect: "wide",
        tone: "slate",
      },
      {
        id: "gallery-5",
        title: "Fasilitas Klinik Placeholder",
        category: "facilities",
        categoryLabel: "Fasilitas",
        imageLabel: "Foto fasilitas klinik placeholder",
        aspect: "square",
        tone: "green",
      },
      {
        id: "gallery-6",
        title: "Aktivitas Pelayanan Placeholder",
        category: "activities",
        categoryLabel: "Kegiatan",
        imageLabel: "Foto kegiatan klinik placeholder",
        aspect: "portrait",
        tone: "blue",
      },
      {
        id: "gallery-7",
        title: "Peralatan Modern Placeholder",
        category: "treatment-room",
        categoryLabel: "Ruang Tindakan",
        imageLabel: "Foto peralatan modern placeholder",
        aspect: "wide",
        tone: "teal",
      },
      {
        id: "gallery-8",
        title: "Area Anak Placeholder",
        category: "facilities",
        categoryLabel: "Fasilitas",
        imageLabel: "Foto area anak placeholder",
        aspect: "square",
        tone: "green",
      },
      {
        id: "gallery-9",
        title: "Front Desk Placeholder",
        category: "clinic",
        categoryLabel: "Klinik",
        imageLabel: "Foto front desk placeholder",
        aspect: "wide",
        tone: "slate",
      },
    ] satisfies GalleryItem[],
  },
  facilities: {
    eyebrow: "Fasilitas Unggulan",
    title: "Featured Facilities",
    description:
      "Sorotan area klinik yang dapat diperbarui dengan foto dan detail fasilitas resmi.",
    items: [
      {
        id: "waiting-room",
        name: "Waiting Room Placeholder",
        description:
          "Deskripsi placeholder untuk area tunggu yang nyaman bagi pasien dan keluarga.",
        imageLabel: "Foto waiting room placeholder",
        tone: "blue",
      },
      {
        id: "treatment-room",
        name: "Treatment Room Placeholder",
        description:
          "Deskripsi placeholder untuk ruang tindakan dengan tata ruang bersih dan terarah.",
        imageLabel: "Foto treatment room placeholder",
        tone: "teal",
      },
      {
        id: "consultation-room",
        name: "Consultation Room Placeholder",
        description:
          "Deskripsi placeholder untuk area konsultasi yang tenang dan privat.",
        imageLabel: "Foto consultation room placeholder",
        tone: "green",
      },
      {
        id: "children-area",
        name: "Children's Area Placeholder",
        description:
          "Deskripsi placeholder untuk area ramah anak yang membantu kunjungan terasa lebih ringan.",
        imageLabel: "Foto children's area placeholder",
        tone: "blue",
      },
      {
        id: "parking-area",
        name: "Parking Area Placeholder",
        description:
          "Deskripsi placeholder untuk area parkir dan akses kunjungan klinik.",
        imageLabel: "Foto parking area placeholder",
        tone: "slate",
      },
    ] satisfies FacilityHighlight[],
  },
  environment: {
    eyebrow: "Lingkungan Klinik",
    title: "Clinic Environment",
    description:
      "Bagian ini menjelaskan suasana klinik yang disiapkan untuk mendukung kenyamanan pasien, keluarga, dan tim medis.",
    imageLabel: "Foto lingkungan klinik placeholder",
    features: [
      { id: "comfortable", label: "Comfortable" },
      { id: "clean", label: "Clean" },
      { id: "sterile", label: "Sterile" },
      { id: "child-friendly", label: "Child Friendly" },
      { id: "modern-equipment", label: "Modern Equipment" },
    ] satisfies EnvironmentFeature[],
  },
  statistics: {
    eyebrow: "Ringkasan Galeri",
    title: "Gallery Statistics",
    description:
      "Angka placeholder untuk membantu menampilkan cakupan dokumentasi fasilitas klinik.",
    items: [
      { id: "photos", label: "Facility Photos", value: 24, suffix: "+" },
      { id: "rooms", label: "Medical Rooms", value: 4, suffix: "+" },
      { id: "activities", label: "Patient Activities", value: 12, suffix: "+" },
      {
        id: "facilities",
        label: "Available Facilities",
        value: 8,
        suffix: "+",
      },
    ] satisfies GalleryStat[],
  },
  cta: {
    headline: "Ingin melihat suasana klinik secara langsung?",
    description:
      "Hubungi admin melalui WhatsApp untuk bertanya tentang fasilitas, jadwal layanan, atau rencana kunjungan.",
    primaryLabel: "Booking WhatsApp",
  },
} as const;
