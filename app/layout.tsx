import type { Metadata } from "next";

import { SITE_LOCALE } from "@/constants/site";
import { inter, manrope } from "@/lib/fonts";
import { defaultMetadata } from "@/lib/metadata";
import "@/styles/globals.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE_LOCALE.split("-")[0]} suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
