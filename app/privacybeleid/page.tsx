import type { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/section-wrapper";

export const metadata: Metadata = {
  title: "Privacyverklaring — Let's Dog",
  description:
    "Hoe Let's Dog omgaat met je persoonsgegevens, je rechten en onze beveiligingsmaatregelen.",
};

const sections = [
  {
    title: "Wie zijn wij?",
    content:
      "Let's Dog B.V. is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring. Wij bieden een online platform voor puppytraining, inclusief een puppyagenda, videolessen en een AI-gedragstrainer.",
  },
  {
    title: "Welke gegevens verwerken wij?",
    content:
      "Wij verwerken de volgende categorieën persoonsgegevens:",
    items: [
      "Naam en contactgegevens (e-mailadres, telefoonnummer)",
      "Accountgegevens en betalingsinformatie",
      "Gegevens over je hond (ras, leeftijd, gedrag)",
      "Technische gegevens (IP-adres, apparaatinformatie, browsertype)",
      "Locatiegegevens (alleen met jouw toestemming)",
    ],
  },
  {
    title: "Waarom verwerken wij gegevens?",
    content:
      "Wij verwerken persoonsgegevens voor de volgende doeleinden:",
    items: [
      "Het leveren van onze diensten (puppyagenda, videolessen, community)",
      "Het bieden van gepersonaliseerd advies via onze AI-gedragstrainer",
      "Communicatie over je account en onze diensten",
      "Verbetering van ons platform en onze content",
      "Marketing (alleen met jouw toestemming)",
    ],
  },
  {
    title: "Hoe lang bewaren wij data?",
    content:
      "Wij bewaren je persoonsgegevens niet langer dan strikt noodzakelijk is voor de doeleinden waarvoor ze zijn verzameld. Na beëindiging van je account worden je gegevens binnen een redelijke termijn verwijderd, tenzij wettelijke bewaarplichten van toepassing zijn.",
  },
  {
    title: "Delen van gegevens met derden",
    content:
      "Wij delen je gegevens alleen met derden die strikt noodzakelijk zijn voor onze dienstverlening, zoals hostingproviders en betalingsverwerkers. Met deze partijen hebben wij verwerkersovereenkomsten gesloten. Wij verkopen je gegevens nooit aan derden.",
  },
  {
    title: "Cookies en tracking",
    content:
      "Wij gebruiken cookies op onze website. Meer informatie hierover vind je in onze cookieverklaring.",
    link: { href: "/cookieverklaring", label: "Lees onze cookieverklaring" },
  },
  {
    title: "Jouw rechten",
    content: "Je hebt de volgende rechten met betrekking tot je persoonsgegevens:",
    items: [
      "Recht op inzage in je gegevens",
      "Recht op correctie van onjuiste gegevens",
      "Recht op verwijdering van je gegevens",
      "Recht op overdraagbaarheid van je gegevens",
      "Recht om je toestemming in te trekken",
      "Recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens",
    ],
  },
  {
    title: "Beveiliging",
    content:
      "Wij nemen passende technische en organisatorische maatregelen om je persoonsgegevens te beschermen tegen ongeoorloofde toegang, verlies of misbruik. Onze systemen worden regelmatig gecontroleerd en bijgewerkt.",
  },
  {
    title: "Internationale gegevensoverdracht",
    content:
      "In sommige gevallen kunnen je gegevens worden verwerkt buiten de Europese Economische Ruimte (EER). In dat geval zorgen wij voor passende waarborgen, zoals modelcontractbepalingen, om je gegevens te beschermen.",
  },
  {
    title: "Profilering en geautomatiseerde besluitvorming",
    content:
      "Wij gebruiken profilering om je gepersonaliseerd trainingsadvies te bieden via onze AI-gedragstrainer. Dit is gebaseerd op de gegevens die je over je hond invoert. Er worden geen volledig geautomatiseerde besluiten genomen die rechtsgevolgen voor je hebben.",
  },
  {
    title: "Contact en klachten",
    content:
      "Heb je vragen over deze privacyverklaring of wil je gebruik maken van je rechten? Neem dan contact met ons op.",
    contact: true,
  },
];

export default function Privacybeleid() {
  return (
    <>
      <div className="bg-[#75876D] pt-32 pb-14 min-h-[220px] flex items-end px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4">
            Juridisch
          </p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight">
            Privacyverklaring
          </h1>
        </div>
      </div>

      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map(({ title, content, items, link, contact }) => (
            <div key={title}>
              <h2 className="font-heading font-bold text-2xl text-[#141414] mb-4">
                {title}
              </h2>
              <p className="text-[#141414]/70 text-[16px] leading-relaxed">
                {content}
              </p>
              {items && (
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[#141414]/70 text-[15px]"
                    >
                      <span className="text-[#75876D] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {link && (
                <a
                  href={link.href}
                  className="inline-block mt-4 text-[#75876D] font-medium underline hover:text-[#65775D]"
                >
                  {link.label}
                </a>
              )}
              {contact && (
                <div className="mt-4 space-y-1 text-[#141414]/70 text-[15px]">
                  <p>E-mail: <a href="mailto:mail@letsdog.nl" className="text-[#75876D] underline">mail@letsdog.nl</a></p>
                  <p>Privacy: <a href="mailto:privacy@letsdog.com" className="text-[#75876D] underline">privacy@letsdog.com</a></p>
                  <p>Telefoon: <a href="tel:0857444161" className="text-[#75876D] underline">085 744 4161</a></p>
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
