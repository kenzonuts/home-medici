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
  ctaLabel: "Booking WhatsApp",
} as const;

export function getWhatsAppUrl(
  message: string = CONTACT.whatsappMessage,
): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`;
}
