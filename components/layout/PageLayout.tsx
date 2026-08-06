import { type ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { ScrollTopButton } from "@/components/layout/Floating/ScrollTopButton";
import { WhatsAppButton } from "@/components/layout/Floating/WhatsAppButton";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import type { ContainerSize } from "@/components/ui/Container";

export type PageLayoutProps = {
  children: ReactNode;
  className?: string;
  /**
   * Wrap page children in the design-system Container.
   * Disable for full-bleed page sections (e.g. future hero).
   */
  contained?: boolean;
  containerSize?: ContainerSize;
  /** Extra vertical padding around page content. */
  padded?: boolean;
};

/**
 * Global page chrome: navbar, main content region, footer, and floating actions.
 */
export function PageLayout({
  children,
  className,
  contained = false,
  containerSize = "lg",
  padded = false,
}: PageLayoutProps) {
  const content = contained ? (
    <Container size={containerSize} className={cn(padded && "py-8 sm:py-12")}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <div className={cn("flex min-h-dvh flex-col bg-background", className)}>
      <a
        href="#main-content"
        className="focus:z-tooltip sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg focus:ring-2 focus:ring-ring"
      >
        Lewati ke konten utama
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} className="relative z-0 flex-1 outline-none">
        {content}
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollTopButton />
    </div>
  );
}
