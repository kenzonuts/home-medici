"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { CONTACT, getWhatsAppUrl } from "@/constants/contact";
import { cn } from "@/lib/utils";

export type WhatsAppButtonProps = {
  className?: string;
};

export function WhatsAppButton({ className }: WhatsAppButtonProps) {
  return (
    <motion.div
      className={cn(
        "z-fixed fixed right-4 bottom-4 sm:right-6 sm:bottom-6",
        className,
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.3 }}
    >
      <Link
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={CONTACT.ctaLabel}
        className={cn(
          "group relative inline-flex size-14 items-center justify-center rounded-full",
          "bg-[#25D366] text-white shadow-lg",
          "transition-transform duration-200 hover:scale-110 hover:shadow-xl",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        )}
      >
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40"
        />
        <MessageCircle
          className="relative size-7 transition-transform group-hover:rotate-6"
          aria-hidden
        />
      </Link>
    </motion.div>
  );
}
