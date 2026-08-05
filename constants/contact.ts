import type { BreadcrumbItem } from "@/constants/services";

export type ContactBreadcrumb = BreadcrumbItem;

export type ContactIconKey =
  "whatsapp" | "phone" | "email" | "address" | "hours";

export type ContactActionType = "whatsapp" | "phone" | "email" | "maps";

export type ContactCard = {
  id: string;
  title: string;
  information: string;
  description: string;
  icon: ContactIconKey;
  actionLabel?: string;
  actionType?: ContactActionType;
};

export type ContactFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type ContactSocialCard = {
  id: string;
  platform: "facebook" | "instagram" | "tiktok";
  label: string;
  handle: string;
  description: string;
  href: string;
};

/**
 * Clinic contact endpoints.
 * Replace placeholder values before production launch.
 */
export const CONTACT = {
  phoneDisplay: "+62 812-0000-0000",
  phoneHref: "tel:+6281200000000",
  email: "info@rumahsunatmodernjati.id",
  emailHref: "mailto:info@rumahsunatmodernjati.id",
  /** Digits only, country code included (no +). */
  whatsappNumber: "6281200000000",
  whatsappMessage: "Halo Rumah Sunat Modern Jati, saya ingin booking.",
  address: "Jati, Indonesia",
  workingHours: "Senin - Sabtu, 08.00 - 17.00",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Jati%2C%20Indonesia",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Jati%2C%20Indonesia&output=embed",
  ctaLabel: "Booking WhatsApp",
} as const;

export function getWhatsAppUrl(
  message: string = CONTACT.whatsappMessage,
): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`;
}

export const contactContent = {
  header: {
    title: "Kontak Kami",
    description:
      "Hubungi Rumah Sunat Modern Jati untuk booking, konsultasi layanan, atau informasi kunjungan klinik.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Kontak" },
    ] satisfies ContactBreadcrumb[],
  },
  information: {
    eyebrow: "Informasi Kontak",
    title: "Tim Kami Siap Membantu",
    description:
      "Pilih kanal komunikasi yang paling nyaman untuk menanyakan jadwal, layanan, dan persiapan kunjungan.",
    cards: [
      {
        id: "whatsapp",
        title: "WhatsApp",
        information: CONTACT.phoneDisplay,
        description: "Kanal utama untuk booking dan konsultasi awal.",
        icon: "whatsapp",
        actionLabel: "Chat WhatsApp",
        actionType: "whatsapp",
      },
      {
        id: "phone",
        title: "Nomor Telepon",
        information: CONTACT.phoneDisplay,
        description: "Hubungi admin klinik pada jam operasional.",
        icon: "phone",
        actionLabel: "Telepon",
        actionType: "phone",
      },
      {
        id: "email",
        title: "Email",
        information: CONTACT.email,
        description: "Kirim pertanyaan administratif atau kerja sama.",
        icon: "email",
        actionLabel: "Kirim Email",
        actionType: "email",
      },
      {
        id: "address",
        title: "Alamat Lengkap",
        information: CONTACT.address,
        description: "Gunakan peta untuk melihat estimasi rute ke klinik.",
        icon: "address",
        actionLabel: "Buka Maps",
        actionType: "maps",
      },
      {
        id: "hours",
        title: "Jam Operasional",
        information: CONTACT.workingHours,
        description:
          "Kunjungan di luar jadwal dapat dikonfirmasi melalui admin.",
        icon: "hours",
      },
    ] satisfies ContactCard[],
  },
  map: {
    eyebrow: "Lokasi",
    title: "Temukan Klinik Kami",
    description:
      "Peta berikut menggunakan embed Google Maps placeholder dan siap diganti dengan titik lokasi resmi saat alamat final tersedia.",
    addressLabel: "Alamat Klinik",
    locationDescription:
      "Rumah Sunat Modern Jati berada di area Jati dengan akses kunjungan yang mudah untuk pasien dan keluarga.",
  },
  social: {
    eyebrow: "Media Sosial",
    title: "Ikuti Informasi Klinik",
    description:
      "Pantau pengumuman, edukasi kesehatan, dan dokumentasi aktivitas klinik melalui kanal sosial resmi.",
    cards: [
      {
        id: "facebook",
        platform: "facebook",
        label: "Facebook",
        handle: "Rumah Sunat Modern Jati",
        description: "Update informasi layanan dan pengumuman klinik.",
        href: "",
      },
      {
        id: "instagram",
        platform: "instagram",
        label: "Instagram",
        handle: "@rumahsunatmodernjati",
        description: "Konten edukasi, galeri, dan aktivitas klinik.",
        href: "",
      },
      {
        id: "tiktok",
        platform: "tiktok",
        label: "TikTok",
        handle: "@rumahsunatmodernjati",
        description: "Video edukasi singkat dan informasi perawatan.",
        href: "",
      },
    ] satisfies ContactSocialCard[],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Pertanyaan yang Sering Diajukan",
    description:
      "Jawaban placeholder untuk membantu pasien memahami alur kontak dan kunjungan.",
    items: [
      {
        id: "booking",
        question: "Bagaimana cara booking?",
        answer:
          "Booking dapat dilakukan melalui WhatsApp admin dengan menyebutkan nama pasien, usia, layanan yang dibutuhkan, dan jadwal kunjungan yang diinginkan.",
      },
      {
        id: "hours",
        question: "Jam operasional?",
        answer:
          "Jam operasional placeholder adalah Senin sampai Sabtu pukul 08.00 - 17.00. Jadwal khusus dapat dikonfirmasi terlebih dahulu melalui WhatsApp.",
      },
      {
        id: "adult",
        question: "Apakah menerima pasien dewasa?",
        answer:
          "Ya, layanan placeholder mencakup pasien bayi, anak, dan dewasa. Admin akan membantu mengarahkan jadwal konsultasi sesuai kebutuhan pasien.",
      },
      {
        id: "location",
        question: "Lokasi klinik?",
        answer:
          "Alamat placeholder klinik berada di Jati, Indonesia. Titik Google Maps resmi dapat diperbarui setelah data lokasi final tersedia.",
      },
    ] satisfies ContactFaqItem[],
  },
  cta: {
    headline: "Butuh Jadwal Kunjungan?",
    description:
      "Hubungi admin Rumah Sunat Modern Jati untuk booking layanan, konsultasi awal, atau informasi persiapan pasien.",
    secondaryLabel: "Telepon Klinik",
  },
} as const;
