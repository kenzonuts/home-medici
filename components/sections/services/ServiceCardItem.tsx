import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

import { serviceIconMap } from "@/components/sections/services/icons";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph } from "@/components/ui/Typography";
import type { ServiceItem } from "@/constants/services";
import { getWhatsAppUrl } from "@/constants/contact";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  service: ServiceItem;
  className?: string;
};

/**
 * Reusable service card for listings and future service expansions.
 */
export function ServiceCardItem({ service, className }: ServiceCardProps) {
  const Icon = serviceIconMap[service.icon];
  const bookingUrl = getWhatsAppUrl(
    `Halo Rumah Sunat Modern Jati, saya ingin booking layanan ${service.title}.`,
  );

  return (
    <Card
      id={service.id}
      padding="none"
      interactive
      className={cn(
        "flex h-full flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1",
        className,
      )}
    >
      <div className="relative">
        <ImagePlaceholder
          label={service.title}
          aspect="wide"
          className="rounded-none"
        />
        <div className="absolute top-4 left-4">
          <IconWrapper variant="solid" size="md" rounded="lg">
            <Icon aria-hidden />
          </IconWrapper>
        </div>
      </div>

      <div className="card-padding-md flex flex-1 flex-col gap-4">
        <div>
          <HeadingSM as="h3" className="mb-2">
            {service.title}
          </HeadingSM>
          <Paragraph>{service.description}</Paragraph>
        </div>

        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <Check
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row">
          <Link
            href={service.href}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "flex-1",
            )}
          >
            Pelajari
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "primary", size: "sm" }),
              "flex-1",
            )}
          >
            <MessageCircle className="size-4" aria-hidden />
            Booking
          </Link>
        </div>
      </div>
    </Card>
  );
}
