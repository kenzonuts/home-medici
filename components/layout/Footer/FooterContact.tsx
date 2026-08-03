import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { CONTACT, getWhatsAppUrl } from "@/constants/contact";
import { cn } from "@/lib/utils";

export type FooterContactProps = {
  className?: string;
};

export function FooterContact({ className }: FooterContactProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <p className="font-heading text-sm font-bold text-surface-foreground">
        Kontak
      </p>
      <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
        <li>
          <Link
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-2 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
            <span>WhatsApp</span>
          </Link>
        </li>
        <li>
          <a
            href={CONTACT.emailHref}
            className="inline-flex items-start gap-2 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
            <span>{CONTACT.email}</span>
          </a>
        </li>
        <li>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-start gap-2 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
            <span>{CONTACT.phoneDisplay}</span>
          </a>
        </li>
        <li className="inline-flex items-start gap-2">
          <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
          <span>{CONTACT.address}</span>
        </li>
      </ul>
    </div>
  );
}
