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
  imageSrc?: string;
  aspect: "square" | "wide" | "portrait";
  tone: "green" | "blue" | "teal" | "slate";
};

export type FacilityHighlight = {
  id: string;
  name: string;
  description: string;
  imageLabel: string;
  imageSrc?: string;
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
      "Galeri ini menampilkan fasilitas dan aktivitas klinik secara visual agar pasien dapat mengenal suasana sebelum berkunjungan.",
    body: "Klinik kami dilengkapi dengan fasilitas modern dan lingkungan yang nyaman untuk memberikan pelayanan terbaik bagi pasien dan keluarga.",
    imageLabel: "Ilustrasi galeri klinik",
    imageSrc: "/images/foto awal.png",
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
        title: "Tampilan Depan Klinik",
        category: "clinic",
        categoryLabel: "Klinik",
        imageLabel: "Foto tampilan depan klinik",
        imageSrc: "/images/tampilan depan klinik.jpeg",
        aspect: "wide",
        tone: "green",
      },
      {
        id: "gallery-2",
        title: "Ruang Tunggu dan Parkir",
        category: "waiting-room",
        categoryLabel: "Ruang Tunggu",
        imageLabel: "Foto ruang tunggu dan parkir",
        imageSrc: "/images/ruang tunggu dan parkir.png",
        aspect: "wide",
        tone: "blue",
      },
      {
        id: "gallery-3",
        title: "Ruang Tunggu",
        category: "waiting-room",
        categoryLabel: "Ruang Tunggu",
        imageLabel: "Foto ruang tunggu",
        imageSrc: "/images/ruang tunggu .jpeg",
        aspect: "square",
        tone: "blue",
      },
      {
        id: "gallery-4",
        title: "Area Konsultasi",
        category: "facilities",
        categoryLabel: "Fasilitas",
        imageLabel: "Foto area konsultasi",
        imageSrc: "/images/konsultasi.png",
        aspect: "wide",
        tone: "slate",
      },
      {
        id: "gallery-5",
        title: "Ruang Sunat",
        category: "treatment-room",
        categoryLabel: "Ruang Tindakan",
        imageLabel: "Foto ruang sunat",
        imageSrc: "/images/ruang sunat.png",
        aspect: "wide",
        tone: "teal",
      },
      {
        id: "gallery-6",
        title: "Foto Awal Klinik",
        category: "clinic",
        categoryLabel: "Klinik",
        imageLabel: "Foto awal klinik",
        imageSrc: "/images/foto awal.png",
        aspect: "square",
        tone: "green",
      },
      {
        id: "gallery-7",
        title: "Testimoni Sunat 1",
        category: "activities",
        categoryLabel: "Kegiatan",
        imageLabel: "Testimoni sunat pasien 1",
        imageSrc: "/images/testimoni sunat 1.png",
        aspect: "portrait",
        tone: "blue",
      },
      {
        id: "gallery-8",
        title: "Testimoni Sunat 2",
        category: "activities",
        categoryLabel: "Kegiatan",
        imageLabel: "Testimoni sunat pasien 2",
        imageSrc: "/images/testi sunat 2.png",
        aspect: "portrait",
        tone: "green",
      },
      {
        id: "gallery-9",
        title: "Testimoni Sunat 3",
        category: "activities",
        categoryLabel: "Kegiatan",
        imageLabel: "Testimoni sunat pasien 3",
        imageSrc: "/images/testi sunat 3.png",
        aspect: "portrait",
        tone: "teal",
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
        name: "Ruang Tunggu",
        description:
          "Ruang tunggu yang nyaman dan bersih untuk pasien dan keluarga dengan fasilitas parkir yang memadai.",
        imageLabel: "Foto ruang tunggu",
        imageSrc: "/images/ruang tunggu dan parkir.png",
        tone: "blue",
      },
      {
        id: "treatment-room",
        name: "Ruang Tindakan Sunat",
        description:
          "Ruang tindakan sunat yang steril dengan peralatan modern untuk kenyamanan dan keamanan pasien.",
        imageLabel: "Foto ruang tindakan sunat",
        imageSrc: "/images/ruang sunat.png",
        tone: "teal",
      },
      {
        id: "consultation-room",
        name: "Area Konsultasi",
        description:
          "Area konsultasi yang tenang dan privat untuk diskusi dengan dokter sebelum tindakan.",
        imageLabel: "Foto area konsultasi",
        imageSrc: "/images/konsultasi.png",
        tone: "green",
      },
      {
        id: "clinic-front",
        name: "Tampilan Depan Klinik",
        description:
          "Tampilan depan klinik yang mudah diakses dengan lokasi strategis dan ramah pengunjung.",
        imageLabel: "Foto tampilan depan klinik",
        imageSrc: "/images/tampilan depan klinik.jpeg",
        tone: "green",
      },
      {
        id: "waiting-area",
        name: "Area Tunggu Indoor",
        description:
          "Area tunggu indoor yang nyaman dengan sirkulasi udara baik dan pencahayaan yang cukup.",
        imageLabel: "Foto area tunggu indoor",
        imageSrc: "/images/ruang tunggu .jpeg",
        tone: "blue",
      },
    ] satisfies FacilityHighlight[],
  },
  environment: {
    eyebrow: "Lingkungan Klinik",
    title: "Clinic Environment",
    description:
      "Suasana klinik yang disiapkan untuk mendukung kenyamanan pasien, keluarga, dan tim medis dengan standar kebersihan tinggi.",
    imageLabel: "Foto lingkungan klinik",
    imageSrc: "/images/tampilan depan klinik.jpeg",
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
