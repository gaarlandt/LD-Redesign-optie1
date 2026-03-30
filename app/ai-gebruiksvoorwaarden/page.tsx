import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export const metadata: Metadata = {
  title: "AI-gebruiksvoorwaarden — Let's Dog",
  description:
    "Voorwaarden voor het gebruik van de AI-gedragstrainer van Let's Dog.",
};

const sections = [
  {
    title: "Wat doet de AI?",
    content:
      "De AI-gedragstrainer van Let's Dog biedt trainingsadvies op basis van het ras, de leeftijd en het gedrag van je hond. Het systeem analyseert je input en geeft gepersonaliseerde suggesties voor training en opvoeding.",
  },
  {
    title: "Geen vervanging van gedragsdeskundige",
    content:
      "De AI biedt suggesties en richtlijnen, maar is geen vervanging voor een professionele hondengedragstherapeut of dierenarts. Bij ernstige gedragsproblemen of gezondheidsklachten raden wij je aan om altijd een professional te raadplegen.",
  },
  {
    title: "Gebruik op eigen risico",
    content:
      "Het opvolgen van adviezen van de AI-gedragstrainer is op eigen risico. Let's Dog is niet aansprakelijk voor eventuele schade die voortvloeit uit het opvolgen van AI-gegenereerde aanbevelingen.",
  },
  {
    title: "Gebruiksdata",
    content:
      "Gegevens die je invoert bij het gebruik van de AI-gedragstrainer kunnen geanonimiseerd worden gebruikt om het AI-model te verbeteren. Je persoonsgegevens worden hierbij niet gedeeld met derden.",
  },
  {
    title: "Transparantie",
    content:
      "Onze AI-suggesties zijn gebaseerd op gedragspatronen van duizenden honden en wetenschappelijk onderbouwde trainingsmethoden. Het betreft algoritmisch gegenereerde begeleiding, geen professionele diagnose.",
  },
  {
    title: "Feedbackloop & optimalisatie",
    content:
      "Geanonimiseerde feedback wordt gebruikt om de AI continu te verbeteren. Door gebruik te maken van het systeem ga je akkoord met deze praktijk. Je kunt altijd contact opnemen als je hier vragen over hebt.",
  },
  {
    title: "Verantwoord gebruik",
    content:
      "Je bent zelf verantwoordelijk voor de implementatie van adviezen. Gebruik de AI-coach niet zonder toezicht in potentieel gevaarlijke situaties. Houd altijd rekening met de veiligheid van je hond, jezelf en je omgeving.",
  },
];

export default function AIGebruiksvoorwaarden() {
  return (
    <>
      <div className="bg-[#75876D] pt-32 pb-14 min-h-[220px] flex items-end px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4">
            Juridisch
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight">
            AI-gebruiksvoorwaarden
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-lg">
            Deze voorwaarden zijn van toepassing op het gebruik van de AI-gedragstrainer van Let&apos;s Dog.
          </p>
        </div>
      </div>

      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map(({ title, content }) => (
            <div key={title}>
              <h2 className="font-heading font-bold text-2xl text-[#141414] mb-4">
                {title}
              </h2>
              <p className="text-[#141414]/70 text-[16px] leading-relaxed">
                {content}
              </p>
            </div>
          ))}

          <div>
            <h2 className="font-heading font-bold text-2xl text-[#141414] mb-4">
              Vragen?
            </h2>
            <p className="text-[#141414]/70 text-[16px] leading-relaxed">
              Neem contact met ons op via{" "}
              <a href="mailto:mail@letsdog.nl" className="text-[#75876D] underline">
                mail@letsdog.nl
              </a>{" "}
              of bel{" "}
              <a href="tel:0857444161" className="text-[#75876D] underline">
                085 744 4161
              </a>.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
