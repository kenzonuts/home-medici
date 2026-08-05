import Link from "next/link";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { Section, Grid } from "@/components/layout/Section";
import { buttonVariants } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import {
  CONTACT,
  contactContent,
  getWhatsAppUrl,
  type ContactActionType,
  type ContactIconKey,
} from "@/constants/contact";
import { cn } from "@/lib/utils";

const iconMap: Record<ContactIconKey, LucideIcon> = {
  whatsapp: MessageCircle,
  phone: Phone,
  email: Mail,
  address: MapPin,
  hours: Clock3,
};

const iconVariantMap: Record<
  ContactIconKey,
  "primary" | "secondary" | "accent" | "muted"
> = {
  whatsapp: "primary",
  phone: "secondary",
  email: "accent",
  address: "primary",
  hours: "secondary",
};

function getActionHref(type: ContactActionType): string {
  const hrefMap: Record<ContactActionType, string> = {
    whatsapp: getWhatsAppUrl(),
    phone: CONTACT.phoneHref,
    email: CONTACT.emailHref,
    maps: CONTACT.mapsHref,
  };

  return hrefMap[type];
}

function isExternalAction(type: ContactActionType): boolean {
  return type === "whatsapp" || type === "maps";
}

export function ContactInformation() {
  const { information } = contactContent;

  return (
    <Section
      id="informasi-kontak"
      aria-labelledby="contact-info-heading"
      spacing="lg"
    >
      <FadeUp>
        <SectionTitle
          id="contact-info-heading"
          align="center"
          eyebrow={information.eyebrow}
          title={information.title}
          description={information.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer>
        <Grid cols={3} gap="md">
          {information.cards.map((card) => {
            const Icon = iconMap[card.icon];

            return (
              <StaggerItem key={card.id} className="h-full">
                <Card
                  padding="lg"
                  interactive
                  className="flex h-full flex-col gap-5"
                >
                  <IconWrapper
                    variant={iconVariantMap[card.icon]}
                    size="lg"
                    rounded="xl"
                  >
                    <Icon aria-hidden />
                  </IconWrapper>

                  <div className="flex flex-1 flex-col gap-2">
                    <HeadingSM as="h3">{card.title}</HeadingSM>
                    <p className="font-heading text-base font-semibold break-words text-foreground">
                      {card.information}
                    </p>
                    <Paragraph className="text-sm">
                      {card.description}
                    </Paragraph>
                  </div>

                  {card.actionLabel && card.actionType ? (
                    <Link
                      href={getActionHref(card.actionType)}
                      target={
                        isExternalAction(card.actionType) ? "_blank" : undefined
                      }
                      rel={
                        isExternalAction(card.actionType)
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={cn(
                        buttonVariants({ variant: "outline", size: "md" }),
                        "w-full",
                      )}
                    >
                      {card.actionLabel}
                    </Link>
                  ) : null}
                </Card>
              </StaggerItem>
            );
          })}
        </Grid>
      </StaggerContainer>
    </Section>
  );
}
