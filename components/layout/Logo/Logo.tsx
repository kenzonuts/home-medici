import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

import { SITE_NAME } from "@/constants/site";
import { cn } from "@/lib/utils";

export type LogoProps = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href?: string;
  /** Compact mark for tight spaces (e.g. mobile). */
  compact?: boolean;
};

/**
 * Clinic logo — text placeholder, swap for next/image when brand assets are ready.
 */
export function Logo({
  className,
  href = "/",
  compact = false,
  ...props
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label={`${SITE_NAME} — beranda`}
      className={cn(
        "inline-flex items-center gap-2 font-heading font-bold tracking-tight text-foreground transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-extrabold text-primary-foreground shadow-sm"
      >
        RS
      </span>
      <span
        className={cn(
          "leading-tight",
          compact ? "text-sm sm:text-base" : "text-base sm:text-lg",
        )}
      >
        <span className="block">Rumah Sunat</span>
        <span className="block text-sm font-semibold text-primary">
          Modern Jati
        </span>
      </span>
    </Link>
  );
}
