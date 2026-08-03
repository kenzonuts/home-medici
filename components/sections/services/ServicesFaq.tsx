"use client";

import { FadeUp } from "@/components/animations";
import { Section } from "@/components/layout/Section";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { SectionTitle } from "@/components/ui/Typography";
import { servicesContent } from "@/constants/services";

export function ServicesFaq() {
  const { faq } = servicesContent;

  return (
    <Section
      id="faq"
      aria-labelledby="faq-heading"
      spacing="lg"
      className="bg-surface"
    >
      <FadeUp>
        <SectionTitle
          id="faq-heading"
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
