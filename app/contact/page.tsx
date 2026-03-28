"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Vul je naam in.";
    if (!form.email.trim() || !form.email.includes("@"))
      e.email = "Vul een geldig e-mailadres in.";
    if (!form.message.trim()) e.message = "Schrijf een bericht.";
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      const first = Object.keys(e)[0];
      document.getElementById(first)?.focus();
      return;
    }
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <div className="bg-[#75876D] pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4">Contact</p>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-tight max-w-xl">
            Stel je vraag aan onze Puppy Coach.
          </h1>
        </div>
      </div>

      <SectionWrapper className="bg-[#EFE8E4]">
        <div className="max-w-xl mx-auto">
          {sent ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-[#141414]/8">
              <CheckCircle2 size={40} className="text-[#75876D] mx-auto mb-4" strokeWidth={1.5} />
              <h2 className="font-heading font-bold text-2xl text-[#141414] mb-3">
                Bericht ontvangen.
              </h2>
              <p className="text-[#141414]/60 leading-relaxed">
                We antwoorden binnen 1 werkdag. Alvast bedankt voor je bericht.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#141414]/8">
              <p className="text-[#141414]/60 text-[16px] leading-relaxed mb-8">
                Heb je een vraag over de app, de training of je abonnement? Stuur ons een bericht — we antwoorden binnen 1 werkdag.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#141414] mb-1.5">
                    Naam <span className="text-[#75876D]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-[15px] text-[#141414] bg-[#EFE8E4] placeholder:text-[#141414]/35 outline-none transition-colors duration-200 focus:border-[#75876D] focus:bg-white ${
                      errors.name ? "border-red-400" : "border-[#141414]/15"
                    }`}
                    placeholder="Je naam"
                    aria-required="true"
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1.5 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#141414] mb-1.5">
                    E-mailadres <span className="text-[#75876D]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-[15px] text-[#141414] bg-[#EFE8E4] placeholder:text-[#141414]/35 outline-none transition-colors duration-200 focus:border-[#75876D] focus:bg-white ${
                      errors.email ? "border-red-400" : "border-[#141414]/15"
                    }`}
                    placeholder="jouw@email.nl"
                    aria-required="true"
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1.5 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#141414] mb-1.5">
                    Bericht <span className="text-[#75876D]" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-[15px] text-[#141414] bg-[#EFE8E4] placeholder:text-[#141414]/35 outline-none transition-colors duration-200 focus:border-[#75876D] focus:bg-white resize-none ${
                      errors.message ? "border-red-400" : "border-[#141414]/15"
                    }`}
                    placeholder="Je vraag of opmerking..."
                    aria-required="true"
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full bg-[#75876D] text-white font-semibold text-[16px] hover:bg-[#65775D] transition-all duration-200 cursor-pointer"
                >
                  <Send size={16} strokeWidth={2} />
                  Verstuur bericht
                </button>

                <p className="text-xs text-[#141414]/40 text-center">
                  We antwoorden binnen 1 werkdag. Je gegevens worden nooit gedeeld.
                </p>
              </form>
            </div>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
