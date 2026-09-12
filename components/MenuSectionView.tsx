"use client";

import { useState } from "react";
import { DishSection, MenuItem } from "@/data/menu";
import { formatPrice } from "@/lib/price";
import ImageModal from "./ImageModal";

export default function MenuSectionView({ sections }: { sections: DishSection[] }) {
  const [active, setActive] = useState<MenuItem | null>(null);

  return (
    <>
      {sections.map((section) => (
        <section key={section.key} id={section.key} className="mx-auto max-w-3xl scroll-mt-20 bg-masa px-4 py-10">
          <h2 className="mb-1 border-b-4 border-marigold pb-2 font-display text-3xl font-bold text-chile">
            {section.title}
          </h2>
          {section.hours && <p className="mt-2 text-sm font-semibold text-marigold">Served {section.hours}</p>}
          {section.note && <p className="mt-2 text-sm italic text-cocoa/70">{section.note}</p>}

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {section.items.map((item) => (
              <div key={`${item.day ?? ""}${item.name}`} className="flex flex-col gap-2 rounded-xl border border-marigold/30 bg-black p-4 shadow-sm">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-cocoa">
                    {item.day && (
                      <span className="mr-2 rounded-full bg-marigold/30 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-cocoa">
                        {item.day}
                      </span>
                    )}
                    {item.name}
                  </h3>
                  <span className="whitespace-nowrap font-semibold text-chile">
                    {formatPrice(item)}
                    {item.unitPrice != null && (
                      <span className="block text-right text-xs font-normal text-cocoa/60">
                        (${item.unitPrice.toFixed(2)} each)
                      </span>
                    )}
                  </span>
                </div>

                {item.description && <p className="text-sm text-cocoa/80">{item.description}</p>}
                {item.options && <p className="text-xs italic text-cocoa/60">{item.options}</p>}
                {item.flavors && (
                  <p className="text-xs text-cocoa/70">
                    <span className="font-semibold">Flavors:</span> {item.flavors.join(", ")}
                  </p>
                )}
                {item.addOns && item.addOns.length > 0 && (
                  <p className="text-xs text-cocoa/70">
                    <span className="font-semibold">Add:</span>{" "}
                    {item.addOns.map((a) => `${a.name} +$${a.price.toFixed(2)}`).join(", ")}
                  </p>
                )}

                <button onClick={() => setActive(item)} className="mt-1 self-start text-sm font-semibold text-lime underline underline-offset-2 hover:text-chile">
                  Click to see image
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}

      {active && <ImageModal name={active.name} photo={active.photo} onClose={() => setActive(null)} />}
    </>
  );
}
