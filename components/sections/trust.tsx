import Image from "next/image";
import { asset } from "@/lib/utils";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Quote, Award, Star } from "lucide-react";

const stats = [
  { value: "500+", label: "Puppy's op weg geholpen" },
  { value: "50+", label: "Videolessen beschikbaar" },
  { value: "2", label: "Gecertificeerde trainers" },
  { value: "100%", label: "Welzijnsgericht" },
];

const testimonials = [
  {
    quote:
      "Super fijne puppycursus bij Elien en Let\u2019s dog. Ze is enthousiast, betrokken en kijkt echt naar wat jij en je hond nodig hebben. We voelen ons gesteund en onze puppy leert zichtbaar veel. Echt een aanrader!",
    name: "Silke",
    location: "Huizen",
  },
  {
    quote:
      "Elien is een fantastische hondengedragscoach die ons met veel kennis en geduld heeft begeleid. Dankzij Let\u2019s Dog en haar advies maakten we de juiste keuze bij het uitzoeken van het ras, de fokker en de hond. Haar begeleiding in de opvoeding van ons lieve Guus was onmisbaar en heeft ons enorm geholpen om met ons gezin Guus op te voeden.",
    name: "Saskia",
    location: "Naarden",
  },
  {
    // Placeholder — replace with real testimonial when available
    quote:
      "Dankzij de puppyagenda wisten we precies wat we elke week moesten doen. De videolessen zijn helder en de community is super behulpzaam. Aanrader voor elke nieuwe puppyeigenaar!",
    name: "Marieke",
    location: "Amsterdam",
  },
];

const certifications = [
  {
    title: "NVGH",
    subtitle: "Nederlandse Vereniging voor Gedragshulpverleners Honden",
  },
  {
    title: "Raad van Beheer",
    subtitle: "Erkend opleider puppycursussen",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mt-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className="text-[#F5C518] fill-[#F5C518]"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export function Trust() {
  return (
    <SectionWrapper className="bg-[#EFE8E4]" id="bewijs">
      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 pb-20 border-b border-[#141414]/10">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-center">
            <p className="font-heading font-bold text-4xl md:text-5xl text-[#75876D] mb-2">
              {value}
            </p>
            <p className="text-sm text-[#141414]/60 leading-snug">{label}</p>
          </div>
        ))}
      </div>

      {/* Section header */}
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-[#75876D] uppercase tracking-widest mb-4">
          Wat eigenaren zeggen
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#141414] leading-tight">
          Echte eigenaren. Echte resultaten.
        </h2>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {testimonials.map(({ quote, name, location }) => (
          <div
            key={name}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-7 border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/80 hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col"
          >
            <Quote
              size={24}
              className="text-[#75876D] mb-5 flex-shrink-0"
              strokeWidth={1.5}
            />
            <p className="text-[#141414]/80 text-[15px] leading-relaxed flex-grow mb-6">
              &ldquo;{quote}&rdquo;
            </p>
            <div className="pt-4 border-t border-[#141414]/8">
              <p className="font-semibold text-sm text-[#75876D]">
                {name}, {location}
              </p>
              <Stars />
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-[#75876D] uppercase tracking-widest mb-4">
          Certificeringen
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#141414] leading-tight">
          Erkend. Wetenschappelijk. Betrouwbaar.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
        {certifications.map(({ title, subtitle }) => (
          <div
            key={title}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/80 hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)] transition-all duration-300 text-center"
          >
            <Award
              size={32}
              className="text-[#75876D] mx-auto mb-4"
              strokeWidth={1.5}
            />
            <p className="font-heading font-bold text-xl text-[#141414] mb-2">
              {title}
            </p>
            <p className="text-sm text-[#141414]/60 leading-relaxed">
              {subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* NVGH Logo */}
      <div className="flex justify-center">
        <Image
          src={asset("/images/NVGH Logo.jpeg")}
          alt="NVGH en Raad van Beheer certificeringslogo's"
          width={400}
          height={120}
          className="max-w-xs md:max-w-sm h-auto"
        />
      </div>
    </SectionWrapper>
  );
}
