import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AddressButton from "@/components/AddressButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taqueria Los Juanes",
  description: "Authentic Mexican tacos, seafood, and drinks made fresh daily.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <AddressButton />
        <footer className="relative z-10 mt-10 bg-cocoa py-8 text-center text-masa">
          <p className="font-display text-lg font-semibold">Taqueria Los Juanes</p>
          <p className="mt-1 text-sm text-masa/80">
            373 Jonestown Rd, Winston Salem, NC 27104 · Open Mon–Sun 10am–9pm
          </p>
          <p className="mt-1 text-sm text-masa/80">(336) 768-2008</p>
        </footer>
      </body>
    </html>
  );
}
