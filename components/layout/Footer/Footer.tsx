"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

import { fadeUp } from "@/components/animations/variants";
import { FooterContact } from "@/components/layout/Footer/FooterContact";
import { FooterLinks } from "@/components/layout/Footer/FooterLinks";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
} from "@/components/layout/Footer/SocialIcons";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { SITE_DESCRIPTION, SITE_NAME, STUDIO_CREDIT } from "@/constants/site";
import { socialLinks } from "@/constants/social";
import { cn } from "@/lib/utils";

const socialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  tiktok: TikTokIcon,
} as const;

function SocialLinks({ className }: { className?: string }) {
  const visible = socialLinks.filter((link) => link.href.length > 0);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <p className="font-heading text-sm font-bold text-surface-foreground">
        Media Sosial
      </p>
      {visible.length > 0 ? (
        <ul className="flex items-center gap-2">
          {visible.map((link) => {
            const Icon = socialIconMap[link.icon];
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <Icon className="size-4" aria-hidden />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">Segera tersedia</p>
      )}
    </div>
  );
}

function StudioCredit() {
  const content = (
    <>
      <Image
        src={STUDIO_CREDIT.logoSrc}
        alt=""
        width={28}
        height={28}
        className="size-7 object-contain opacity-80"
      />
      <span>
        {STUDIO_CREDIT.label}{" "}
        <span className="font-medium text-foreground/80">
          {STUDIO_CREDIT.name}
        </span>
      </span>
    </>
  );

  const className =
    "inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";

  if (STUDIO_CREDIT.href) {
    return (
      <Link
        href={STUDIO_CREDIT.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${STUDIO_CREDIT.label} ${STUDIO_CREDIT.name}`}
        className={className}
      >
        {content}
      </Link>
    );
  }

  return (
    <p
      aria-label={`${STUDIO_CREDIT.label} ${STUDIO_CREDIT.name}`}
      className={className}
    >
      {content}
    </p>
  );
}

export type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className={cn("mt-auto border-t border-border bg-surface", className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <Container className="section-space-md">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE_DESCRIPTION}
            </p>
          </div>

          <FooterLinks />
          <FooterContact />
          <SocialLinks />
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              © {year} {SITE_NAME}. Hak cipta dilindungi.
            </p>
            <StudioCredit />
          </div>
          <BackToTopLink />
        </div>
      </Container>
    </motion.footer>
  );
}

function BackToTopLink(): ReactNode {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="font-heading text-sm font-semibold text-primary transition-colors hover:text-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      Kembali ke atas
    </button>
  );
}
