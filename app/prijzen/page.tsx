import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Check, Lock, Shield, CreditCard, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Prijzen — Let's Dog",
  description:
    "Start gratis of ga voor volledig. €59/jaar tijdens de launch. Betaling via Mollie. Geen abonnementsverplichting.",
};

const freeFeatures = [
  { text: "Gratis videolessen (beperkte selectie)", included: true },
  { text: "Puppyagenda preview", included: true },
  { text: "Community toegang", included: true },
  { text: "Audio-lessen preview", included: true },
  { text: "Volledig videolessen-archief", included: false },
  { text: "Volledige puppyagenda", included: false },
  { text: "Alle audio-lessen", included: false },
  { text: "Nieuwe lessen zodra ze verschijnen", included: false },
];

const paidFeatures = [
  { text: "Alle videolessen — volledig archief", included: true },
  { text: "Volledige puppyagenda (voor & tijdens puppyfase)", included: true },
  { text: "Alle audio-lessen voor onderweg", included: true },
  { text: "Volledige community-toegang", included: true },
  { text: "Nieuwe lessen zodra ze verschijnen", included: true },
  { text: "Betaling via Mollie — veilig & eenvoudig", included: true },
];

const guarantees = [
  { icon: Shield, title: "Veilig betalen", desc: "Alle betalingen verlopen via Mollie — de toonaangevende betaaloplossing in Nederland." },
  { icon: CreditCard, title: "Geen verborgen kosten", desc: "€59/jaar incl. btw. Geen extra kosten. Geen verrassingen achteraf." },
  { icon: RefreshCw, title: "Opzegbaar wanneer je wilt", desc: "Je abonnement is niet aan een lange termijn gebonden. Opzeggen is altijd mogelijk." },
];

const faqs = [
  {
    q: "Wanneer eindigt de launch-aanbieding?",
    a: "We hebben nog geen vaste einddatum bepaald. Zodra de prijs stijgt naar €99/jaar, communiceren we dat vooraf. Wie nu instapt, profiteert van €59/jaar.",
  },
  {
    q: "Kan ik upgraden van gratis naar volledig?",
    a: "Ja. Je kunt op elk moment in de web app upgraden. Je gegevens en voortgang blijven behouden.",
  },
  {
    q: "Via welke betaalmethoden kan ik betalen?",
    a: "Betaling verloopt via Mollie. Je kunt betalen met iDEAL, creditcard, Bancontact en meer.",
  },
  {
    q: "Wat als ik niet tevreden ben?",
    a: "Neem contact op via het contactformulier. We lossen het op.",
  },
];

export default function Prijzen() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#75876D] pt-32 pb-14 min-h-[220px] flex items-end px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4">Prijzen</p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
            Begin gratis. Groei op jouw tempo.
          </h1>
          <p className="text-white/70 text-lg max-w-md mx-auto">
            Geen creditcard voor de gratis versie. Upgrade wanneer je er klaar voor bent.
          </p>
        </div>
      </div>

      {/* Pricing cards */}
      <SectionWrapper className="bg-[#EFE8E4]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {/* Free */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/80 hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col">
            <p className="text-sm font-semibold text-[#141414]/50 uppercase tracking-wider mb-3">Gratis</p>
            <div className="flex items-end gap-2 mb-2">
              <span className="font-heading font-bold text-5xl text-[#141414]">€0</span>
              <span className="text-[#141414]/50 mb-1.5">/altijd</span>
            </div>
            <p className="text-[#141414]/50 text-sm mb-8">Begin vandaag, geen betaalgegevens nodig.</p>
            <ul className="space-y-3.5 mb-8 flex-grow">
              {freeFeatures.map(({ text, included }) => (
                <li key={text} className={`flex items-start gap-3 ${!included ? "opacity-35" : ""}`}>
                  {included ? (
                    <Check size={17} className="text-[#75876D] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  ) : (
                    <Lock size={17} className="text-[#141414] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  )}
                  <span className="text-[15px] text-[#141414]/80">{text}</span>
                </li>
              ))}
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

          {/* Paid */}
          <div className="relative bg-[#75876D]/90 backdrop-blur-sm rounded-2xl p-8 flex flex-col border border-[#75876D]/60 shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:bg-[#75876D] hover:shadow-[0_6px_24px_rgba(0,0,0,0.18)] transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFA580] text-[#141414] text-xs font-bold uppercase tracking-wide shadow-md">
                Launch aanbieding
              </span>
            </div>
            <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Volledig</p>
            <div className="flex items-end gap-2 mb-2">
              <span className="font-heading font-bold text-5xl text-white">€59</span>
              <div className="mb-1.5">
                <span className="text-white/50 line-through text-lg">€99</span>
                <span className="text-white/70 text-sm ml-1">/jaar</span>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-8">Incl. btw · Via Mollie · Opzegbaar wanneer je wilt</p>
            <ul className="space-y-3.5 mb-8 flex-grow">
              {paidFeatures.map(({ text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Check size={17} className="text-[#DFF0C3] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-[15px] text-white/85">{text}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://app.letsdog.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3.5 rounded-full bg-[#FFA580] text-[#141414] font-bold text-[15px] hover:bg-[#ff9060] transition-all duration-200 shadow-lg cursor-pointer"
            >
              Ga voor volledig
            </a>
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {guarantees.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-[#75876D]" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-semibold text-[#141414] mb-1 text-[15px]">{title}</p>
                <p className="text-[#141414]/55 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-2xl text-[#141414] mb-8 text-center">Vragen over prijzen</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-[#141414]/10 pb-6">
                <p className="font-semibold text-[#141414] mb-2">{q}</p>
                <p className="text-[#141414]/60 text-[15px] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
