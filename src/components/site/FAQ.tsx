import { useState } from "react";
import { Plus } from "lucide-react";

export type FAQItem = { q: string; a: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-3xl border border-border bg-white shadow-[0_4px_20px_-8px_oklch(0.2_0.05_265/0.1)]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <button
            type="button"
            key={i}
            onClick={() => setOpen(isOpen ? null : i)}
            className="w-full px-6 py-5 text-left transition-colors hover:bg-primary-soft/40 md:px-8"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="text-[15.5px] font-semibold text-foreground md:text-[16.5px]">{it.q}</span>
              <span className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-white text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                <Plus className="h-4 w-4" />
              </span>
            </div>
            <div
              className="grid overflow-hidden transition-all duration-500 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0">
                <p className="pr-14 pt-3 text-[14.5px] leading-relaxed text-muted-foreground">{it.a}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
