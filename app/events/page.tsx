import Image from "next/image";

export default function EventsPage() {
  return (
    <div>
      <section className="relative isolate min-h-[19rem] overflow-hidden text-center text-masa sm:min-h-[28rem]">
        <Image
          src="/media/photos/foto_events.png"
          alt="Events"
          fill
          priority
          className="object-cover object-center"
        />
        <h1 className="sr-only">Events</h1>
      </section>
      <section className="mx-auto max-w-2xl px-4 pt-10">
        <article className="overflow-hidden rounded-xl border border-marigold/50 bg-black shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
          <div className="relative aspect-[2/3] w-full">
            <Image
              src="/media/photos/karaoke_vallenatos_los_juanes.webp"
              alt="Karaoke night with DJNANDO492 on Saturday, September 19 at 8 PM"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-5 text-center">
            <h2 className="font-display text-2xl font-bold text-cocoa">Karaoke Night</h2>
            <p className="mt-1 text-cocoa/75">Saturday, September 12 at 7:00 PM</p>
          </div>
        </article>
      </section>
      <section className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-lg text-cocoa/80">
          Stay tuned! Details about live music, private parties & special celebrations at
          Taqueria Los Juanes are coming soon.
        </p>
      </section>
    </div>
  );
}
