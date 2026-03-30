import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Search, Moon, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: Search,
    title: "De ene zegt dit, de ander dat.",
    description:
      "Je zoekt online en krijgt tien verschillende antwoorden. Welk advies klopt? Wat past bij jouw hond? Je weet het niet meer.",
  },
  {
    icon: Moon,
    title: "Je pup bijt, blaft of slaapt niet.",
    description:
      "Je doet je best, maar het lukt niet. Je bent moe, twijfelt aan jezelf, en vraagt je af of het ooit beter wordt.",
  },
  {
    icon: HelpCircle,
    title: "Je weet niet of je het goed doet.",
    description:
      "Niemand heeft je verteld wat normaal is. Je twijfelt bij élke stap. Is dit gedrag oké? Moet ik ingrijpen? Wanneer?",
  },
];

export function Problem() {
  return (
    <SectionWrapper className="bg-[#EFE8E4]" id="herkenning">
      {/* Section label */}
      <p className="text-sm font-semibold text-[#75876D] uppercase tracking-widest mb-4">
        Herkenbaar?
      </p>

      <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#141414] leading-tight mb-4 max-w-xl">
        Een nieuwe pup is geweldig.
        <br />
        En soms ook gewoon heel zwaar.
      </h2>
      <p className="text-[#141414]/60 text-lg mb-14 max-w-xl">
        Je bent niet de enige. Bijna elke puppy-eigenaar herkent dit.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/80 hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)] transition-all duration-300 group"
          >
            <div className="w-11 h-11 rounded-xl bg-[#DFF0C3] flex items-center justify-center mb-5 group-hover:bg-[#75876D]/20 transition-colors duration-200">
              <Icon size={20} className="text-[#75876D]" strokeWidth={1.75} />
            </div>
            <h3 className="font-heading font-bold text-lg text-[#141414] mb-3 leading-snug">
              {title}
            </h3>
            <p className="text-[#141414]/65 text-[15px] leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
