"use client";

import { FadeUp } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { SectionTitle } from "@/components/ui/Typography";
import { contactContent } from "@/constants/contact";

export function ContactFaq() {
  const { faq } = contactContent;

  return (
    <Section
      id="faq-kontak"
      aria-labelledby="contact-faq-heading"
      spacing="lg"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="contact-faq-heading"
          align="center"
          eyebrow={faq.eyebrow}
          title={faq.title}
          description={faq.description}
          className="mb-10"
        />
      </FadeUp>

      <FadeUp>
        <div className="mx-auto max-w-3xl">
          <Accordion defaultValue={faq.items[0]?.id ?? null}>
            {faq.items.map((item) => (
              <AccordionItem key={item.id} id={item.id} title={item.question}>
                {item.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeUp>
    </Section>
  );
}
