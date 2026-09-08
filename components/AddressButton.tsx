"use client";

import { useState } from "react";

const ADDRESS = "373 Jonestown Rd, Winston Salem, NC 27104";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export default function AddressButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Show restaurant address"
        className="fixed bottom-4 left-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-cocoa text-masa shadow-lg transition-transform hover:scale-105"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7">
          <path
            d="M3 6.5 8.5 5l7 1.5L21 5v12.5l-5.5 1.5-7-1.5L3 19V6.5Z"
            fill="#fdf6e9"
            stroke="#8a7a5c"
            strokeWidth={1.2}
            strokeLinejoin="round"
          />
          <path d="M4.5 8.5c1.5-.7 2.7-.2 3.4.6-.3 1.4-1.6 2.1-3 2-1-1-1-1.7-.4-2.6Z" fill="#6b8e23" />
          <path d="M15.8 13.2c1.2-.5 2.4-.1 3.1.7-.2 1.1-1.3 1.7-2.5 1.5-.9-.6-1-1.4-.6-2.2Z" fill="#6b8e23" />
          <path
            d="M8.5 5.4c1.3 1.6 1 3.4-.2 4.8-1.3 1.5-1.1 3.3.3 5 1 1.2 1 2.4.4 3.4"
            fill="none"
            stroke="#5fa8d3"
            strokeWidth={1.4}
            strokeLinecap="round"
          />
          <path
            d="M8.5 5v13.5M15.5 6.5V19"
            stroke="#8a7a5c"
            strokeWidth={1}
            strokeLinecap="round"
            opacity={0.6}
          />
          <path
            d="M15 3.2a3.7 3.7 0 0 0-3.7 3.7c0 2.7 3.7 6.4 3.7 6.4s3.7-3.7 3.7-6.4A3.7 3.7 0 0 0 15 3.2Z"
            fill="#c1272d"
            stroke="#8f1c21"
            strokeWidth={0.6}
          />
          <circle cx="15" cy="6.9" r="1.3" fill="#fdf6e9" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xs rounded-2xl bg-masa p-5 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-display text-lg font-semibold text-cocoa">Taqueria Los Juanes</p>
            <p className="mt-2 text-cocoa/80">{ADDRESS}</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-chile px-5 py-2 font-semibold text-masa hover:bg-chileDark"
            >
              Open in Google Maps
            </a>
            <button
              onClick={() => setOpen(false)}
              className="mt-3 block w-full text-sm font-semibold text-cocoa/60 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
