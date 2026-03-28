import Image from "next/image";
import { asset } from "@/lib/utils";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Quote } from "lucide-react";

const stats = [
  { value: "500+", label: "Puppy's op weg geholpen" },
  { value: "50+", label: "Videolessen beschikbaar" },
  { value: "2", label: "Gecertificeerde trainers" },
  { value: "100%", label: "Welzijnsgericht" },
];

const testimonials = [
  {
    quote:
      "Eindelijk een aanpak waarbij ik elke dag weet wat ik doe. De puppyagenda is een uitkomst — geen stress meer over of ik het goed doe.",
    name: "Lisa de Vries",
    dog: "eigenaar van Borre (Labrador, 4 mnd)",
    image: asset("/images/community.png"),
  },
  {
    quote:
      "Na twee weken Let's Dog slaapt mijn pup door de nacht. Ik had nooit gedacht dat het zo snel beter kon gaan.",
    name: "Tom Bakker",
    dog: "eigenaar van Luna (Australische Herder, 3 mnd)",
    image: asset("/images/training.png"),
  },
  {
    quote:
      "De video's zijn helder en praktisch. Geen gedoe, gewoon uitleg die werkt. En de community is heel fijn — ik ben niet de enige die worstelt.",
    name: "Emma Smits",
    dog: "eigenaar van Max (Border Collie, 5 mnd)",
    image: asset("/images/about.png"),
  },
];

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {testimonials.map(({ quote, name, dog, image }) => (
          <div
            key={name}
            className="bg-white rounded-2xl p-7 border border-[#141414]/6 flex flex-col"
          >
            <Quote
              size={24}
              className="text-[#75876D] mb-5 flex-shrink-0"
              strokeWidth={1.5}
            />
            <p className="text-[#141414]/80 text-[15px] leading-relaxed flex-grow mb-6">
              &ldquo;{quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-[#141414]/8">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-[#EFE8E4] flex-shrink-0">
                <Image
                  src={image}
                  alt={`Foto van ${name}`}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-semibold text-sm text-[#141414]">{name}</p>
                <p className="text-xs text-[#141414]/50">{dog}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="text-center">
        <p className="text-sm text-[#141414]/50 mb-4">
          Erkend en gecertificeerd door
        </p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {["NVGH", "Raad van Beheer"].map((cert) => (
            <div
              key={cert}
              className="px-6 py-3 bg-white rounded-xl border border-[#141414]/10 text-sm font-semibold text-[#141414]/70"
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
