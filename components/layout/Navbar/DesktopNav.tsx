"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { NavLink } from "@/components/layout/Navbar/NavLink";
import { buttonVariants } from "@/components/ui/Button";
import { CONTACT, getWhatsAppUrl } from "@/constants/contact";
import { mainNavigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      <nav aria-label="Navigasi utama" className="flex items-center gap-6">
        {mainNavigation.map((item) => (
          <NavLink key={item.href} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <Link
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
      >
        <MessageCircle className="size-4" aria-hidden />
        {CONTACT.ctaLabel}
      </Link>
    </div>
  );
}
