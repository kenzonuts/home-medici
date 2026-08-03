"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type NavLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  href: string;
  onNavigate?: () => void;
};

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLink({
  href,
  className,
  children,
  onNavigate,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={cn(
        "relative font-heading text-sm font-semibold tracking-tight transition-colors duration-200",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        active ? "text-primary" : "text-foreground/80 hover:text-primary",
        className,
      )}
      {...props}
    >
      {children}
      <span
        aria-hidden
        className={cn(
          "absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300",
          active ? "w-full opacity-100" : "w-0 opacity-0",
        )}
      />
    </Link>
  );
}
