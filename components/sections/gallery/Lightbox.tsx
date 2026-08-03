"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { GalleryPlaceholderImage } from "@/components/sections/gallery/GalleryPlaceholderImage";
import { Badge } from "@/components/ui/Badge";
import { HeadingSM } from "@/components/ui/Typography";
import type { GalleryItem } from "@/constants/gallery";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

export type LightboxProps = {
  items: readonly GalleryItem[];
  activeItem: GalleryItem | null;
  onClose: () => void;
  onChange: (item: GalleryItem) => void;
};

const focusableSelector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function Lightbox({
  items,
  activeItem,
  onClose,
  onChange,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<Element | null>(null);
  const isOpen = Boolean(activeItem);

  useBodyScrollLock(isOpen);

  const activeIndex = useMemo(() => {
    if (!activeItem) return -1;
    return items.findIndex((item) => item.id === activeItem.id);
  }, [activeItem, items]);

  const showPrevious = useCallback(() => {
    if (activeIndex < 0) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    onChange(items[nextIndex]);
  }, [activeIndex, items, onChange]);

  const showNext = useCallback(() => {
    if (activeIndex < 0) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    onChange(items[nextIndex]);
  }, [activeIndex, items, onChange]);

  useEffect(() => {
    if (!activeItem) return;

    previousFocusRef.current = document.activeElement;
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      if (previousFocusRef.current instanceof HTMLElement) {
        previousFocusRef.current.focus();
      }
    };
  }, [activeItem]);

  useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeItem, onClose, showNext, showPrevious]);

  return (
    <AnimatePresence>
      {activeItem ? (
        <motion.div
          className="z-modal fixed inset-0 flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-lightbox-title"
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-surface shadow-xl"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/11] max-h-[72vh] w-full bg-muted">
              <GalleryPlaceholderImage
                label={activeItem.imageLabel}
                tone={activeItem.tone}
                sizes="100vw"
                priority
              />

              <button
                ref={closeButtonRef}
                type="button"
                className="absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-lg bg-surface/95 text-foreground shadow-md transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                onClick={onClose}
                aria-label="Tutup preview galeri"
              >
                <X className="size-5" aria-hidden />
              </button>

              <button
                type="button"
                className="absolute top-1/2 left-4 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-lg bg-surface/95 text-foreground shadow-md transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                onClick={showPrevious}
                aria-label="Lihat gambar sebelumnya"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>

              <button
                type="button"
                className="absolute top-1/2 right-4 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-lg bg-surface/95 text-foreground shadow-md transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                onClick={showNext}
                aria-label="Lihat gambar berikutnya"
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </div>

            <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Badge variant="default">{activeItem.categoryLabel}</Badge>
                <HeadingSM id="gallery-lightbox-title" className="mt-2">
                  {activeItem.title}
                </HeadingSM>
              </div>
              <p className="text-sm text-muted-foreground">
                {activeIndex + 1} / {items.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
