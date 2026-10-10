"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  faqs: FAQItem[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b border-white/10 pb-4 transition-colors"
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="w-full text-left flex items-center justify-between gap-4 py-3 text-base sm:text-lg font-medium text-foreground hover:text-[#C88D6A] transition-colors"
              aria-expanded={isOpen}
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#C88D6A] shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isOpen && (
              <div className="text-sm text-muted-foreground font-light leading-relaxed pt-2 pr-6">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
