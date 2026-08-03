"use client";

import { useState } from "react";
import { Check, Copy, MessageCircle, Share2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/Button";
import type { Article } from "@/constants/articles";
import { cn } from "@/lib/utils";

export type ShareButtonsProps = {
  article: Article;
};

export function ShareButtons({ article }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url =
    typeof window === "undefined"
      ? `/articles/${article.slug}`
      : window.location.href;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(article.title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      aria-labelledby="share-heading"
      className="rounded-xl border border-border bg-surface p-5 shadow-card"
    >
      <h2
        id="share-heading"
        className="mb-4 font-heading text-base font-semibold text-foreground"
      >
        Bagikan Artikel
      </h2>
      <div className="flex flex-wrap gap-2">
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
        >
          <MessageCircle className="size-4" aria-hidden />
          WhatsApp
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
        >
          <Share2 className="size-4" aria-hidden />
          Facebook
        </a>
        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          onClick={handleCopy}
        >
          {copied ? (
            <Check className="size-4" aria-hidden />
          ) : (
            <Copy className="size-4" aria-hidden />
          )}
          {copied ? "Tersalin" : "Copy Link"}
        </button>
      </div>
    </section>
  );
}
