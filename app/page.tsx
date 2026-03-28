import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Hope } from "@/components/sections/hope";
import { Trust } from "@/components/sections/trust";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Hope />
      <Trust />
      <HowItWorks />
      <Pricing />
      <FinalCta />
    </>
  );
}
