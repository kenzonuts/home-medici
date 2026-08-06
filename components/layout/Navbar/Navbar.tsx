"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import { DesktopNav } from "@/components/layout/Navbar/DesktopNav";
import { MobileNav } from "@/components/layout/Navbar/MobileNav";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrolled, hidden } = useScrollDirection(24);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Keep navbar visible while the mobile drawer is open.
  const navHidden = hidden && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          "z-sticky sticky top-0 w-full transition-all duration-300 ease-out",
          "will-change-transform",
          navHidden
            ? "pointer-events-none -translate-y-full opacity-0"
            : "translate-y-0 opacity-100",
          scrolled
            ? "border-b border-border/80 bg-surface/95 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
          <Logo compact />

          <DesktopNav />

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:hidden"
            aria-label="Buka menu navigasi"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </Container>
      </header>

      <div id="mobile-navigation">
        <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </>
  );
}
