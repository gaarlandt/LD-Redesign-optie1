import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Check, Lock } from "lucide-react";

const freeFeatures = [
  "Gratis videolessen (beperkte selectie)",
  "Puppyagenda preview",
  "Toegang tot de community",
  "Audio-lessen preview",
];

const paidFeatures = [
  "Alle videolessen — volledig archief",
  "Volledige puppyagenda",
  "Alle audio-lessen om mee te nemen",
  "Volledige community-toegang",
  "Nieuwe lessen zodra ze verschijnen",
  "Betaling via Mollie — veilig & eenvoudig",
];

export function Pricing() {
  return (
    <SectionWrapper className="bg-[#EFE8E4]" id="prijzen">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-[#75876D] uppercase tracking-widest mb-4">
          Prijzen
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#141414] leading-tight mb-4">
          Begin gratis. Groei op jouw tempo.
        </h2>
        <p className="text-[#141414]/60 text-lg max-w-lg mx-auto">
          Geen verplichtingen. Geen creditcard voor de gratis versie. Upgrade wanneer je er klaar voor bent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Free tier */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/80 hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col">
          <div className="mb-6">
            <p className="text-sm font-semibold text-[#141414]/50 uppercase tracking-wider mb-2">
              Gratis
            </p>
            <div className="flex items-end gap-2">
              <span className="font-heading font-bold text-5xl text-[#141414]">€0</span>
              <span className="text-[#141414]/50 mb-1.5">/altijd</span>
            </div>
            <p className="text-[#141414]/50 text-sm mt-2">
              Begin vandaag, geen betaalgegevens nodig.
            </p>
          </div>

          <ul className="space-y-3.5 mb-8 flex-grow">
            {freeFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check
                  size={17}
                  className="text-[#75876D] flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span className="text-[15px] text-[#141414]/70">{feature}</span>
              </li>
            ))}
            <li className="flex items-start gap-3 opacity-40">
              <Lock size={17} className="flex-shrink-0 mt-0.5 text-[#141414]" strokeWidth={2} />
              <span className="text-[15px] text-[#141414]">Volledig videolessen-archief</span>
            </li>
            <li className="flex items-start gap-3 opacity-40">
              <Lock size={17} className="flex-shrink-0 mt-0.5 text-[#141414]" strokeWidth={2} />
              <span className="text-[15px] text-[#141414]">Alle audio-lessen</span>
            </li>
          </ul>

          <a
            href="https://app.letsdog.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3.5 rounded-full border-2 border-[#75876D] text-[#75876D] font-semibold text-[15px] hover:bg-[#75876D] hover:text-white transition-all duration-200 cursor-pointer"
          >
            Start gratis
          </a>
        </div>

        {/* Paid tier */}
        <div className="relative bg-[#75876D]/90 backdrop-blur-sm rounded-2xl p-8 border border-[#75876D]/60 flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:bg-[#75876D] hover:shadow-[0_6px_24px_rgba(0,0,0,0.18)] transition-all duration-300">
          {/* Launch badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFA580] text-[#141414] text-xs font-bold uppercase tracking-wide shadow-md">
              Launch aanbieding
            </span>
          </div>

          <div className="mb-6">
            <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
              Volledig
            </p>
            <div className="flex items-end gap-2">
              <span className="font-heading font-bold text-5xl text-white">€59</span>
              <div className="mb-1.5">
                <span className="text-white/50 line-through text-lg">€99</span>
                <span className="text-white/70 text-sm ml-1">/jaar</span>
              </div>
            </div>
            <p className="text-white/60 text-sm mt-2">
              Incl. btw · Via Mollie · Opzegbaar wanneer je wilt
            </p>
          </div>

          <ul className="space-y-3.5 mb-8 flex-grow">
            {paidFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check
                  size={17}
                  className="text-[#DFF0C3] flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span className="text-[15px] text-white/85">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://app.letsdog.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3.5 rounded-full bg-[#FFA580] text-[#141414] font-semibold text-[15px] hover:bg-[#ff9060] transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Ga voor volledig
          </a>
        </div>
      </div>

      <p className="text-center text-sm text-[#141414]/40 mt-8">
        Betaling verloopt veilig via Mollie. Je gegevens worden nooit gedeeld.
      </p>
    </SectionWrapper>
  );
}
