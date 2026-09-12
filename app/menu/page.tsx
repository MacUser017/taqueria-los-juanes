import { foodSections, simpleFoodSections } from "@/data/menu";
import MenuSectionView from "@/components/MenuSectionView";
import SimpleListSection from "@/components/SimpleListSection";
import PoliciesNote from "@/components/PoliciesNote";
import Image from "next/image";

const allKeys = [...foodSections, ...simpleFoodSections].map((s) => ({ key: s.key, title: s.title }));

export default function MenuPage() {
  return (
    <div>
      <section className="relative isolate min-h-[19rem] overflow-hidden text-center text-masa sm:min-h-[28rem]">
        <Image
          src="/media/photos/foto_menu.png"
          alt="Our Menu"
          fill
          priority
          className="object-cover object-center"
        />
        <h1 className="sr-only">Our Menu</h1>
        <nav className="absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-4xl gap-3 overflow-x-auto whitespace-nowrap bg-black/75 px-4 py-4 text-sm font-semibold">
          {allKeys.map((s) => (
            <a key={s.key} href={`#${s.key}`} className="rounded-full border border-marigold/70 bg-black/40 px-4 py-1.5 text-cocoa hover:bg-marigold hover:text-masa">
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
