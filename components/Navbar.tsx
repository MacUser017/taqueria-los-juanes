import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-chile text-masa shadow-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-3 py-2.5">
        <Link
          href="/events"
          className="hidden rounded-full bg-masa px-3 py-1 text-sm font-bold text-chile shadow-sm hover:bg-marigold sm:block"
        >
          Events
        </Link>

        <div className="flex w-full flex-nowrap items-center justify-between gap-1 sm:hidden">
          <Link href="/" className="rounded-full bg-masa px-2.5 py-1 text-[11px] font-bold text-chile shadow-sm">
            Home
          </Link>
          <Link href="/events" className="rounded-full bg-masa px-2.5 py-1 text-[11px] font-bold text-chile shadow-sm">
            Events
          </Link>
          <Link href="/menu" className="rounded-full bg-marigold px-2.5 py-1 text-[11px] font-bold text-cocoa shadow-sm">
            Food Menu
          </Link>
          <Link href="/drinks" className="rounded-full bg-masa px-2.5 py-1 text-[11px] font-bold text-chile shadow-sm">
            Drinks Menu
          </Link>
        </div>

        <div className="hidden items-center gap-4 sm:flex">
          <Link href="/" className="text-lg font-semibold transition-colors hover:text-marigold">
            Home
          </Link>
          <Link href="/menu" className="rounded-full bg-marigold px-4 py-1.5 text-sm font-bold text-cocoa shadow-sm transition-transform hover:scale-105">
            View Food Menu
          </Link>
          <Link href="/drinks" className="rounded-full bg-masa px-4 py-1.5 text-sm font-bold text-chile shadow-sm transition-transform hover:scale-105">
            View Drinks Menu
          </Link>
        </div>
      </nav>
    </header>
  );
}
