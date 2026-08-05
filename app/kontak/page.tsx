import type { Metadata } from "next";

import {
  ContactCta,
  ContactFaq,
  ContactInformation,
  ContactMap,
  ContactSocial,
} from "@/components/sections/contact";
import { PageHeader } from "@/components/shared/PageHeader";
import { contactContent } from "@/constants/contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Kontak",
  description: contactContent.header.description,
  path: "/kontak",
});

export default function ContactPage() {
  const { header } = contactContent;

  return (
    <>
      <PageHeader
        title={header.title}
        description={header.description}
        breadcrumbs={header.breadcrumbs}
      />
      <ContactInformation />
      <ContactMap />
      <ContactSocial />
      <ContactFaq />
      <ContactCta />
    </>
  );
}
