import Link from "next/link";
import { ArrowUpRight, Music2, type LucideIcon } from "lucide-react";
import { type ReactNode, type SVGProps } from "react";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import {
  FacebookIcon,
  InstagramIcon,
} from "@/components/layout/Footer/SocialIcons";
import { Grid, Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { IconWrapper } from "@/components/ui/IconWrapper";
import { HeadingSM, Paragraph, SectionTitle } from "@/components/ui/Typography";
import { contactContent, type ContactSocialCard } from "@/constants/contact";
import { cn } from "@/lib/utils";

type SocialIconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

type SocialIcon = ((props: SocialIconProps) => ReactNode) | LucideIcon;

const socialIconMap: Record<ContactSocialCard["platform"], SocialIcon> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: Music2,
};

function SocialCard({ card }: { card: ContactSocialCard }) {
  const Icon = socialIconMap[card.platform];
  const content = (
    <Card
      padding="lg"
      interactive
      className={cn(
        "group flex h-full flex-col gap-5",
        "hover:-translate-y-1 hover:border-primary/25",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <IconWrapper variant="surface" size="lg" rounded="xl">
          <Icon className="size-5" aria-hidden />
        </IconWrapper>
        {card.href ? (
          <ArrowUpRight
            className="size-5 text-muted-foreground transition-colors group-hover:text-primary"
            aria-hidden
          />
        ) : (
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
            Segera tersedia
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <HeadingSM as="h3">{card.label}</HeadingSM>
        <p className="font-heading text-sm font-semibold break-words text-primary">
          {card.handle}
        </p>
        <Paragraph className="text-sm">{card.description}</Paragraph>
      </div>
    </Card>
  );

  if (!card.href) {
    return content;
  }

  return (
    <Link
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Buka ${card.label} Rumah Sunat Modern Jati`}
      className="block h-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      {content}
    </Link>
  );
}

export function ContactSocial() {
  const { social } = contactContent;

  return (
    <Section
      id="media-sosial"
      aria-labelledby="contact-social-heading"
      spacing="lg"
    >
      <FadeUp>
        <SectionTitle
          id="contact-social-heading"
          align="center"
          eyebrow={social.eyebrow}
          title={social.title}
          description={social.description}
          className="mb-10"
        />
      </FadeUp>

      <StaggerContainer>
        <Grid cols={3} gap="md">
          {social.cards.map((card) => (
            <StaggerItem key={card.id} className="h-full">
              <SocialCard card={card} />
            </StaggerItem>
          ))}
        </Grid>
      </StaggerContainer>
    </Section>
  );
}
