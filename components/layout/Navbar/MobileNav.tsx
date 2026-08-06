"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Logo } from "@/components/layout/Logo";
import { NavLink } from "@/components/layout/Navbar/NavLink";
import { buttonVariants } from "@/components/ui/Button";
import { CONTACT, getWhatsAppUrl } from "@/constants/contact";
import { mainNavigation } from "@/constants/navigation";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { cn } from "@/lib/utils";

export type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useBodyScrollLock(open);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="mobile-nav-overlay"
            className="z-overlay fixed inset-0 bg-foreground/40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden
          />

          <motion.aside
            key="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="z-modal fixed inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col bg-surface shadow-xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-4">
              <p id={titleId} className="sr-only">
                Menu navigasi
              </p>
              <Logo compact onClick={onClose} />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="inline-flex size-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                aria-label="Tutup menu"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>

            <nav
              aria-label="Navigasi mobile"
              className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
            >
              {mainNavigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.2 }}
                >
                  <NavLink
                    href={item.href}
                    onNavigate={onClose}
                    className="block rounded-lg px-3 py-3 text-base after:hidden hover:bg-muted"
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="border-t border-border p-4">
              <Link
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className={cn(
                  buttonVariants({ variant: "primary", fullWidth: true }),
                )}
              >
                <MessageCircle className="size-4" aria-hidden />
                {CONTACT.ctaLabel}
              </Link>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
