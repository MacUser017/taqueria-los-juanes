import { foodSections, simpleFoodSections } from "@/data/menu";
import MenuSectionView from "@/components/MenuSectionView";
import SimpleListSection from "@/components/SimpleListSection";
import PoliciesNote from "@/components/PoliciesNote";

const allKeys = [...foodSections, ...simpleFoodSections].map((s) => ({ key: s.key, title: s.title }));

export default function MenuPage() {
  return (
    <div>
      <section className="bg-chile px-4 py-10 text-center text-masa">
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">Our Menu</h1>
        <nav className="mx-auto mt-4 flex max-w-3xl gap-3 overflow-x-auto whitespace-nowrap px-1 pb-2 text-sm font-semibold">
          {allKeys.map((s) => (
            <a key={s.key} href={`#${s.key}`} className="rounded-full bg-masa/20 px-4 py-1.5 hover:bg-masa/40">
              {s.title}
            </a>
          ))}
        </nav>
      </section>
      <MenuSectionView sections={foodSections} />
      <SimpleListSection sections={simpleFoodSections} />
      <PoliciesNote />
    </div>
  );
}
