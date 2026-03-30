import type { Metadata } from "next";
import { Calendar, Video, BookOpen, CheckSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Card Styles — Design Options",
};

const sampleCards = [
  { icon: Calendar, text: "Week-voor-week structuur" },
  { icon: Video, text: "Videolessen per fase" },
  { icon: BookOpen, text: "Leesmateriaal op maat" },
  { icon: CheckSquare, text: "Checklists die je bijhoudt" },
];

const styles = [
  {
    name: "Option 1: Soft Shadow",
    cardClass:
      "bg-[#EFE8E4] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300",
  },
  {
    name: "Option 2: Lifted Card",
    cardClass:
      "bg-[#EFE8E4] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-300",
  },
  {
    name: "Option 3: Inner Glow + Border",
    cardClass:
      "bg-[#EFE8E4] rounded-2xl p-6 border border-[#141414]/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300",
  },
  {
    name: "Option 4: Gradient Bottom Edge",
    cardClass:
      "bg-gradient-to-b from-[#EFE8E4] to-[#e5ddd8] rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-[#141414]/5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300",
  },
  {
    name: "Option 5: Pressed / Inset",
    cardClass:
      "bg-[#e8e0db] rounded-2xl p-6 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),inset_0_-1px_0_rgba(255,255,255,0.5)] border border-[#141414]/4 hover:bg-[#EFE8E4] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300",
  },
  {
    name: "Option 6: Glass / Frosted",
    cardClass:
      "bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/80 hover:shadow-[0_6px_24px_rgba(0,0,0,0.1)] transition-all duration-300",
  },
  {
    name: "Option 7: Bold Shadow + Green Accent",
    cardClass:
      "bg-[#EFE8E4] rounded-2xl p-6 border-b-2 border-[#75876D]/30 shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:border-[#75876D]/60 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300",
  },
];

export default function CardStyles() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-heading font-bold text-4xl text-[#141414] mb-2">
          Card Style Options
        </h1>
        <p className="text-[#141414]/60 text-lg mb-16">
          Pick your favorite — hover over the cards to see the interactive effect.
        </p>

        <div className="space-y-20">
          {styles.map(({ name, cardClass }) => (
            <div key={name}>
              <h2 className="font-heading font-bold text-xl text-[#141414] mb-6">
                {name}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {sampleCards.map(({ icon: Icon, text }) => (
                  <div
                    key={`${name}-${text}`}
                    className={`flex flex-col items-center text-center gap-3 cursor-default ${cardClass}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#75876D] flex items-center justify-center">
                      <Icon
                        size={20}
                        className="text-white"
                        strokeWidth={1.75}
                      />
                    </div>
                    <span className="text-[15px] font-medium text-[#141414]">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
