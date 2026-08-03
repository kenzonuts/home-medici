import Link from "next/link";

import { footerNavigation } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export type FooterLinksProps = {
  className?: string;
  onNavigate?: () => void;
};

export function FooterLinks({ className, onNavigate }: FooterLinksProps) {
  return (
    <nav
      aria-label="Navigasi cepat"
      className={cn("flex flex-col gap-3", className)}
    >
      <p className="font-heading text-sm font-bold text-surface-foreground">
        Navigasi
      </p>
      <ul className="flex flex-col gap-2">
        {footerNavigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
