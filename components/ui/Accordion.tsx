"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  createContext,
  useContext,
  useId,
  useState,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type AccordionContextValue = {
  openId: string | null;
  setOpenId: (id: string | null) => void;
  baseId: string;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within <Accordion>.");
  }
  return context;
}

export type AccordionProps = {
  children: ReactNode;
  className?: string;
  /** Allow multiple items open at once. Default: single. */
  type?: "single" | "multiple";
  defaultValue?: string | null;
};

/**
 * Accessible accordion. Currently optimized for single-open behavior.
 */
export function Accordion({
  children,
  className,
  defaultValue = null,
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultValue);
  const baseId = useId();

  return (
    <AccordionContext.Provider value={{ openId, setOpenId, baseId }}>
      <div className={cn("flex flex-col gap-3", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export type AccordionItemProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function AccordionItem({
  id,
  title,
  children,
  className,
}: AccordionItemProps) {
  const { openId, setOpenId, baseId } = useAccordionContext();
  const isOpen = openId === id;
  const triggerId = `${baseId}-trigger-${id}`;
  const panelId = `${baseId}-panel-${id}`;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface shadow-sm",
        className,
      )}
    >
      <h3 className="m-0">
        <button
          type="button"
          id={triggerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setOpenId(isOpen ? null : id)}
          className={cn(
            "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
            "font-heading text-base font-semibold text-foreground",
            "transition-colors hover:bg-muted/60",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
          )}
        >
          <span>{title}</span>
          <ChevronDown
            aria-hidden
            className={cn(
              "size-5 shrink-0 text-muted-foreground transition-transform duration-200",
              isOpen && "rotate-180 text-primary",
            )}
          />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            key={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
