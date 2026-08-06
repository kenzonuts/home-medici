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
 */
export const CONTACT = {
  phoneDisplay: "0856-4177-7359",
  phoneHref: "tel:+6285641777359",
  email: "kokoginanjar@gmail.com",
  emailHref: "mailto:kokoginanjar@gmail.com",
  /** Digits only, country code included (no +). */
  whatsappNumber: "6285641777359",
  whatsappMessage: "Halo Rumah Sunat Modern Jati, saya ingin booking.",
  address:
    "Jl. Babakan No. 063 RT 010/005, Desa Jati, Kec. Binangun, Kab. Cilacap",
  workingHours: "Setiap hari, 06.00 - 21.00",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Jl.%20Babakan%20No.%20063%20RT%20010%2F005%20Desa%20Jati%20Kec.%20Binangun%20Kab.%20Cilacap",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Jl.%20Babakan%20No.%20063%20RT%20010%2F005%20Desa%20Jati%20Kec.%20Binangun%20Kab.%20Cilacap&output=embed",
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
      "Gunakan peta di bawah untuk melihat rute menuju Rumah Sunat Modern Jati di Desa Jati, Binangun, Cilacap.",
    addressLabel: "Alamat Klinik",
    locationDescription:
      "Klinik berada di Jl. Babakan No. 063 RT 010/005, Desa Jati, Kecamatan Binangun, Kabupaten Cilacap.",
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
        handle: "koko Ginanjar saputro",
        description: "Update informasi layanan dan pengumuman klinik.",
        href: "https://www.facebook.com/search/top?q=koko%20Ginanjar%20saputro",
      },
      {
        id: "instagram",
        platform: "instagram",
        label: "Instagram",
        handle: "Belum tersedia",
        description: "Konten edukasi, galeri, dan aktivitas klinik.",
        href: "",
      },
      {
        id: "tiktok",
        platform: "tiktok",
        label: "TikTok",
        handle: "@rumah.sunat.modern.jati",
        description: "Video edukasi singkat dan informasi perawatan.",
        href: "https://www.tiktok.com/@rumah.sunat.modern.jati",
      },
    ] satisfies ContactSocialCard[],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Pertanyaan yang Sering Diajukan",
    description:
      "Jawaban singkat untuk membantu pasien memahami alur kontak dan kunjungan.",
    items: [
      {
        id: "booking",
        question: "Bagaimana cara booking?",
        answer:
          "Booking dapat dilakukan melalui WhatsApp admin di 0856-4177-7359 dengan menyebutkan nama pasien, usia, layanan yang dibutuhkan, dan jadwal kunjungan yang diinginkan.",
      },
      {
        id: "hours",
        question: "Jam operasional?",
        answer:
          "Jam operasional klinik adalah setiap hari pukul 06.00 - 21.00. Jadwal khusus dapat dikonfirmasi terlebih dahulu melalui WhatsApp.",
      },
      {
        id: "adult",
        question: "Apakah menerima pasien dewasa?",
        answer:
          "Ya, layanan mencakup pasien bayi, anak, dan dewasa. Admin akan membantu mengarahkan jadwal konsultasi sesuai kebutuhan pasien.",
      },
      {
        id: "location",
        question: "Lokasi klinik?",
        answer:
          "Klinik berada di Jl. Babakan No. 063 RT 010/005, Desa Jati, Kec. Binangun, Kab. Cilacap. Anda dapat membuka lokasi melalui Google Maps di halaman kontak.",
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
