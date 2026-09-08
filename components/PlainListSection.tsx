import { PlainListSection as PlainListSectionType } from "@/data/menu";

export default function PlainListSection({ sections }: { sections: PlainListSectionType[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.key} id={section.key} className="mx-auto max-w-3xl scroll-mt-20 px-4 py-10">
          <h2 className="mb-1 border-b-4 border-marigold pb-2 font-display text-3xl font-bold text-chile">
            {section.title}
          </h2>
          {section.option && <p className="mt-2 text-sm font-semibold text-lime">✦ {section.option}</p>}

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {section.groups.map((group, i) => (
              <div key={group.label ?? i}>
                {group.label && <h3 className="mb-2 font-display text-lg font-semibold text-cocoa">{group.label}</h3>}
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((name) => (
                    <li key={name} className="rounded-full border border-marigold/40 bg-white/60 px-3 py-1 text-sm text-cocoa">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
