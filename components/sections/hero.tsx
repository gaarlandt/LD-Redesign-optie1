import Image from "next/image";
import { asset } from "@/lib/utils";

export function Hero() {
  return (
    <section
      className="relative bg-[#75876D] flex flex-col lg:flex-row lg:items-center lg:min-h-[100dvh] overflow-hidden"
      aria-label="Hero"
    >
      {/* Mobile: visible image at top */}
      <div className="relative w-full aspect-[16/10] lg:hidden">
        <Image
          src={asset("/images/hero.png")}
          alt="Twee vrouwen lachen met hun honden"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#75876D]/60 via-transparent to-[#75876D]" />
      </div>

      {/* Desktop: absolute right-half background */}
      <div className="absolute inset-0 left-1/2 hidden lg:block">
        <Image
          src={asset("/images/hero.png")}
          alt="Twee vrouwen lachen met hun honden"
          fill
          priority
          sizes="50vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#75876D] via-[#75876D]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-6 pb-12 lg:pt-32 lg:pb-24">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="inline-flex items-center gap-2 text-sm font-medium text-white/80 mb-6 bg-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFF0C3] inline-block" />
            Gecertificeerde hondengedragstherapeuten
          </p>

          {/* H1 */}
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-[3.5rem] text-white leading-[1.1] tracking-tight mb-6">
            Jouw pup begrijpen.
            <br />
            Samen groeien.
          </h1>

          {/* Subtext — empathie eerst */}
          <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-md">
            Nieuwe pup thuis. Blij. En totaal de kluts kwijt. Let&apos;s Dog geeft je een dagelijks plan, zodat jij weet wat je doet en je pup weet wat hij kan verwachten.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://app.letsdog.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#FFA580] text-[#141414] text-[16px] font-semibold hover:bg-[#ff9060] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              Maak een gratis account
            </a>
            <p className="text-sm text-white/60">
              Gratis starten · Geen creditcard nodig
            </p>
          </div>

          {/* Trust nudge */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[asset("/images/community.png"), asset("/images/training.png"), asset("/images/about.png")].map(
                (src, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#75876D] overflow-hidden bg-[#DFF0C3]"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )
              )}
            </div>
            <p className="text-sm text-white/70">
              Al meer dan <strong className="text-white">500 puppy&apos;s</strong> op weg geholpen
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#EFE8E4] to-transparent" />
    </section>
  );
}
