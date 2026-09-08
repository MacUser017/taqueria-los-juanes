import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="sr-only">Taqueria Los Juanes</h1>

      <section className="relative aspect-[1080/260] overflow-hidden text-center text-masa">
        <div className="fixed inset-x-0 top-9 z-30 aspect-[1080/260] overflow-hidden sm:top-12">
          <Image
            src="/media/photos/foto-entrada.jpg"
            alt="Taqueria Los Juanes entrance"
            fill
            priority
            className="object-cover object-[50%_43%]"
          />
        </div>
      </section>

      <div className="relative z-10 bg-masa">
        <section className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="mb-6 text-center font-display text-2xl font-bold text-chile">
            A Taste of Tradition
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="overflow-hidden rounded-xl border border-marigold/30 bg-white/60 shadow-sm">
              <div className="relative h-40 w-full">
                <Image
                  src="/media/photos/foto_tacos.jpg"
                  alt="Fresh tacos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <p className="font-display text-lg font-semibold text-cocoa">Fresh Tacos</p>
                <p className="mt-1 text-sm text-cocoa/70">
                  Made to order with hand-pressed tortillas.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-marigold/30 bg-white/60 shadow-sm">
              <video
                className="h-40 w-full object-cover"
                src="/media/videos/video_aguachiles.mov"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Aguachiles with shrimp"
              />
              <div className="p-6 text-center">
                <p className="font-display text-lg font-semibold text-cocoa">Coastal Seafood</p>
                <p className="mt-1 text-sm text-cocoa/70">Shrimp, fish & ceviche done right.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-marigold/30 bg-white/60 shadow-sm">
              <video
                className="h-40 w-full object-cover"
                src="/media/videos/video_drinkMezcalita.mov"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Mezcalita drink"
              />
              <div className="p-6 text-center">
                <p className="font-display text-lg font-semibold text-cocoa">Hand-Crafted Drinks</p>
                <p className="mt-1 text-sm text-cocoa/70">
                  Margaritas, micheladas & aguas frescas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-lime/10 px-4 py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-3 font-display text-2xl font-bold text-chile">Visit Us</h2>
            <p className="text-cocoa/90">
              Family-owned and family-run, Taqueria Los Juanes brings the taste of home to
              every plate. Come hungry, leave happy.
            </p>
            <p className="mt-4 font-semibold text-cocoa">Tue–Sun · 11am – 9pm</p>
            <p className="text-cocoa">373 Jonestown Rd, Winston Salem, NC 27104</p>
          </div>
        </section>
      </div>
    </div>
  );
}
