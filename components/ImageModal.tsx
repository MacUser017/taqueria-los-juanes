"use client";

import { useEffect } from "react";
import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

type Props = {
  name: string;
  photo?: string;
  onClose: () => void;
};

export default function ImageModal({ name, photo, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div className="relative w-full max-w-sm rounded-2xl bg-masa p-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close image" className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-chile text-lg font-bold text-masa shadow-md hover:bg-chileDark">
          ✕
        </button>
        {photo ? (
          <div className="relative h-64 w-full overflow-hidden rounded-xl">
            <Image src={photo} alt={name} fill className="object-cover" />
          </div>
        ) : (
          <PlaceholderImage />
        )}
        <p className="mt-3 text-center font-display text-lg font-semibold text-cocoa">{name}</p>
        <button onClick={onClose} className="mx-auto mt-3 block rounded-full bg-chile px-5 py-2 font-semibold text-masa hover:bg-chileDark">
          Close & keep browsing
        </button>
      </div>
    </div>
  );
}
