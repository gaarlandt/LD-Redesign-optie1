import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export const metadata: Metadata = {
  title: "Cookieverklaring — Let's Dog",
  description:
    "Informatie over het gebruik van cookies op de Let's Dog website.",
};

export default function Cookieverklaring() {
  return (
    <>
      <div className="bg-[#75876D] pt-32 pb-14 min-h-[220px] flex items-end px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4">
            Juridisch
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight">
            Cookieverklaring
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-lg">
            We gebruiken cookies om onze website gebruiksvriendelijker en relevanter te maken.
          </p>
        </div>
      </div>

      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="font-heading font-bold text-2xl text-[#141414] mb-4">
              Wat zijn cookies?
            </h2>
            <p className="text-[#141414]/70 text-[16px] leading-relaxed">
              Cookies zijn kleine tekstbestanden die op je apparaat worden opgeslagen wanneer je onze website bezoekt. Ze helpen ons om de website goed te laten functioneren, je voorkeuren te onthouden en inzicht te krijgen in hoe bezoekers de website gebruiken.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-[#141414] mb-4">
              Welke cookies gebruiken we?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#141414] mb-2">Functionele cookies</h3>
                <p className="text-[#141414]/70 text-[15px] leading-relaxed">
                  Noodzakelijk voor het goed functioneren van de website. Deze cookies worden altijd geplaatst en vereisen geen toestemming.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#141414] mb-2">Analytische cookies</h3>
                <p className="text-[#141414]/70 text-[15px] leading-relaxed">
                  Wij gebruiken Google Analytics om inzicht te krijgen in het gebruik van onze website. Deze cookies worden alleen geplaatst met jouw toestemming.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#141414] mb-2">Tracking cookies</h3>
                <p className="text-[#141414]/70 text-[15px] leading-relaxed">
                  Voor gerichte advertenties gebruiken wij Meta Pixel en TikTok Pixel. Deze cookies worden alleen geplaatst met jouw uitdrukkelijke toestemming.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-[#141414] mb-4">
              Cookie-instellingen aanpassen
            </h2>
            <p className="text-[#141414]/70 text-[16px] leading-relaxed">
              Je kunt je cookie-instellingen op elk moment aanpassen via de cookiebanner of via je browserinstellingen. Let op: het uitschakelen van bepaalde cookies kan invloed hebben op de functionaliteit van de website.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-[#141414] mb-4">
              Consent Management Platform (CMP)
            </h2>
            <p className="text-[#141414]/70 text-[16px] leading-relaxed">
              Bij je eerste bezoek tonen wij een cookiebanner waarmee je kunt aangeven welke cookies je wilt accepteren. Je keuze wordt opgeslagen en kan op elk moment worden gewijzigd.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-[#141414] mb-4">
              Cookies van derden
            </h2>
            <p className="text-[#141414]/70 text-[16px] leading-relaxed mb-4">
              Wij maken gebruik van de volgende diensten van derden die cookies kunnen plaatsen:
            </p>
            <ul className="space-y-2">
              {[
                "Google Analytics — websitestatistieken",
                "Meta (Facebook) Pixel — advertentietracking",
                "TikTok Pixel — advertentietracking",
                "Hotjar — gebruikerservaring en heatmaps",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[#141414]/70 text-[15px]"
                >
                  <span className="text-[#75876D] mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-[#141414] mb-4">
              Cookiegeschiedenis &amp; bewaartermijnen
            </h2>
            <div className="bg-[#EFE8E4] rounded-xl p-6">
              <div className="grid grid-cols-2 gap-4 text-[15px]">
                <div>
                  <p className="font-semibold text-[#141414] mb-1">Functionele cookies</p>
                  <p className="text-[#141414]/60">Maximaal 1 jaar</p>
                </div>
                <div>
                  <p className="font-semibold text-[#141414] mb-1">Analytische cookies</p>
                  <p className="text-[#141414]/60">Maximaal 2 jaar</p>
                </div>
              </div>
            </div>
          </div>

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
