/**
 * Core site identity and configuration.
 * Update SITE_URL when the production domain is finalized.
 */
export const SITE_NAME = "Rumah Sunat Modern Jati";

export const SITE_DESCRIPTION = "Website resmi Rumah Sunat Modern Jati.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_LOCALE = "id-ID";
