import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export type SectionCTAProps = {
  href: string;
  label: string;
  className?: string;
};

export function SectionCTA({ href, label, className }: SectionCTAProps) {
  return (
    <div className={cn("mt-10 flex justify-center", className)}>
      <Link
        href={href}
        className={cn(buttonVariants({ variant: "outline", size: "md" }))}
      >
        {label}
        <ArrowRight className="size-4" aria-hidden />
      </Link>
    </div>
  );
}
