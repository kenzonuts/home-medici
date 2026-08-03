import Link from "next/link";
import { CalendarDays, MessageCircle } from "lucide-react";

import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { buttonVariants } from "@/components/ui/Button";
import { DoctorCard } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Caption, HeadingSM, Paragraph } from "@/components/ui/Typography";
import { getWhatsAppUrl } from "@/constants/contact";
import type { TeamDoctor } from "@/constants/team";
import { cn } from "@/lib/utils";

export type DoctorProfileCardProps = {
  doctor: TeamDoctor;
};

export function DoctorProfileCard({ doctor }: DoctorProfileCardProps) {
  return (
    <DoctorCard
      className="transition-transform duration-200 hover:-translate-y-1"
      media={
        <ImagePlaceholder
          label={doctor.imageLabel}
          aspect="portrait"
          className="rounded-none"
        />
      }
      header={
        <div className="mt-2 space-y-1">
          <HeadingSM as="h3">{doctor.name}</HeadingSM>
          <Caption>{doctor.position}</Caption>
        </div>
      }
      footer={
        <Link
          href={getWhatsAppUrl(doctor.ctaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Booking WhatsApp untuk ${doctor.name}`}
          className={cn(
            buttonVariants({ variant: "primary", size: "sm", fullWidth: true }),
          )}
        >
          <MessageCircle className="size-4" aria-hidden />
          {doctor.ctaLabel}
        </Link>
      }
    >
      <div className="flex flex-1 flex-col gap-4 pt-4 text-left">
        <Paragraph className="text-sm">{doctor.bio}</Paragraph>

        <div className="flex flex-wrap gap-2">
          {doctor.specialtyTags.map((tag) => (
            <Tag key={tag} size="sm" variant="primary">
              {tag}
            </Tag>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-muted/60 p-3">
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <CalendarDays
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden
            />
            <span>{doctor.schedule}</span>
          </div>
        </div>
      </div>
    </DoctorCard>
  );
}
