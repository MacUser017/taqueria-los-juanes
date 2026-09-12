"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const homeIsActive = pathname === "/";
  const eventsIsActive = pathname.startsWith("/events");
  const menuIsActive = pathname.startsWith("/menu");
  const drinksIsActive = pathname.startsWith("/drinks");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-chile/70 bg-masa text-cocoa shadow-[0_4px_20px_rgba(0,0,0,0.55)]">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-3 py-2.5">
        <Link
          href="/events"
          className={`hidden rounded-full px-3 py-1 text-sm font-bold shadow-sm sm:block ${
            eventsIsActive
              ? "bg-marigold text-masa"
              : "border border-chile text-cocoa hover:bg-chile hover:text-masa"
          }`}
        >
          Events
        </Link>

        <div className="flex w-full flex-nowrap items-center justify-between gap-1 sm:hidden">
          <Link
            href="/"
            className={`rounded-full px-2.5 py-1 text-[11px] font-bold shadow-sm ${
              homeIsActive
                ? "bg-marigold text-masa"
                : "border border-chile text-cocoa hover:bg-chile hover:text-masa"
            }`}
          >
            Home
          </Link>
          <Link
            href="/events"
            className={`rounded-full px-2.5 py-1 text-[11px] font-bold shadow-sm ${
              eventsIsActive
                ? "bg-marigold text-masa"
                : "border border-chile text-cocoa hover:bg-chile hover:text-masa"
            }`}
          >
            Events
          </Link>
          <Link
            href="/menu"
            className={`rounded-full px-2.5 py-1 text-[11px] font-bold shadow-sm ${
              menuIsActive
                ? "bg-marigold text-masa"
                : "border border-chile text-cocoa hover:bg-chile hover:text-masa"
            }`}
          >
            Food Menu
          </Link>
          <Link
            href="/drinks"
            className={`rounded-full px-2.5 py-1 text-[11px] font-bold shadow-sm ${
              drinksIsActive
                ? "bg-marigold text-masa"
                : "border border-chile text-cocoa hover:bg-chile hover:text-masa"
            }`}
          >
            Drinks Menu
          </Link>
        </div>

        <div className="hidden items-center gap-4 sm:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-1.5 text-lg font-semibold transition-colors ${
              homeIsActive
                ? "bg-marigold text-masa"
                : "border border-chile text-cocoa hover:bg-chile hover:text-masa"
            }`}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className={`rounded-full px-4 py-1.5 text-sm font-bold shadow-sm transition-transform hover:scale-105 ${
              menuIsActive
                ? "bg-marigold text-masa"
                : "border border-chile text-cocoa hover:bg-chile hover:text-masa"
            }`}
          >
            View Food Menu
          </Link>
          <Link
            href="/drinks"
            className={`rounded-full px-4 py-1.5 text-sm font-bold shadow-sm transition-transform hover:bg-chile hover:text-masa ${
              drinksIsActive ? "bg-marigold text-masa" : "border border-chile text-cocoa"
            }`}
          >
            View Drinks Menu
          </Link>
        </div>
      </nav>
    </header>
  );
}
