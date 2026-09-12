import { DishSection } from "@/data/menu";
import { formatPrice } from "@/lib/price";

export default function SimpleListSection({ sections }: { sections: DishSection[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.key} id={section.key} className="mx-auto max-w-3xl scroll-mt-20 bg-masa px-4 py-10">
          <h2 className="mb-1 border-b-4 border-marigold pb-2 font-display text-3xl font-bold text-chile">
            {section.title}
          </h2>
          {section.note && <p className="mt-2 text-sm italic text-cocoa/70">{section.note}</p>}

          <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {section.items.map((item) => (
              <li key={item.name} className="flex items-baseline justify-between gap-3 border-b border-marigold/20 py-1.5">
                <span className="text-cocoa">
                  {item.name}
                  {item.description && <span className="ml-2 text-xs text-cocoa/60">{item.description}</span>}
                </span>
                <span className="whitespace-nowrap font-semibold text-chile">{formatPrice(item)}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
