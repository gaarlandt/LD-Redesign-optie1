"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/utils";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Send, CheckCircle2, Mail, Phone, ExternalLink } from "lucide-react";

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
            Neem contact op
          </h1>
        </div>
      </div>

      {/* Trainer consultation card */}
      <SectionWrapper className="bg-[#EFE8E4]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-[#75876D] uppercase tracking-widest mb-4">
              Persoonlijk advies
            </p>
            <h2 className="font-heading font-bold text-3xl text-[#141414] mb-4 leading-tight">
              Consult met een gecertificeerde trainer
            </h2>
            <p className="text-[#141414]/70 text-[16px] leading-relaxed mb-3">
              Boek een persoonlijk videogesprek met onze gedragstherapeut. Bespreek het gedrag van je hond en krijg een concreet plan van aanpak.
            </p>
            <p className="text-[#141414] font-bold text-2xl mb-6">
              €39,50 <span className="text-sm font-normal text-[#141414]/50">incl. BTW</span>
            </p>
            <a
              href="https://app.letsdog.nl/consult/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#75876D] text-white font-semibold text-[16px] hover:bg-[#65775D] transition-all duration-200 cursor-pointer"
            >
              Boek een consult
              <ExternalLink size={16} strokeWidth={2} />
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src={asset("/images/problem.png")}
              alt="Hond met eigenaar — persoonlijk consult"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Contact details + socials */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-[#141414] mb-3">
              Direct bereikbaar
            </h2>
            <p className="text-[#141414]/60 text-[16px]">
              Liever direct contact? Stuur een mailtje, bel ons of app via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Email */}
            <a
              href="mailto:mail@letsdog.nl"
              className="flex items-center gap-4 bg-[#EFE8E4] rounded-2xl p-6 border border-[#141414]/8 hover:border-[#75876D]/30 transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#DFF0C3] flex items-center justify-center">
                <Mail size={20} className="text-[#75876D]" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#141414] mb-0.5">E-mail</p>
                <p className="text-[#141414]/60 text-[15px]">mail@letsdog.nl</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:0857444161"
              className="flex items-center gap-4 bg-[#EFE8E4] rounded-2xl p-6 border border-[#141414]/8 hover:border-[#75876D]/30 transition-colors duration-200"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#DFF0C3] flex items-center justify-center">
                <Phone size={20} className="text-[#75876D]" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#141414] mb-0.5">Telefoon</p>
                <p className="text-[#141414]/60 text-[15px]">085 744 4161</p>
              </div>
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=31857444161&text=Hallo%20Let's%20Dog!%20Ik%20heb%20een%20vraag%20over%20de%20opvoeding%20van%20mijn%20hond%20en%20zou%20graag%20advies%20willen%20van%20de%20gecertificeerde%20trainer.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-[15px] hover:bg-[#1ebe5d] transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              App via WhatsApp
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/letsdog.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#141414] text-white font-semibold text-[15px] hover:bg-[#333] transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@letsdog.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#141414] text-white font-semibold text-[15px] hover:bg-[#333] transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.43v-7.15a8.16 8.16 0 005.58 2.2v-3.45a4.85 4.85 0 01-2-.54z" />
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact form */}
      <SectionWrapper className="bg-[#EFE8E4]">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-2xl text-[#141414] mb-2">
              Stuur een bericht
            </h2>
            <p className="text-[#141414]/60 text-[16px]">
              We antwoorden binnen 1 werkdag.
            </p>
          </div>

          {sent ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-[#141414]/8">
              <CheckCircle2 size={40} className="text-[#75876D] mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-heading font-bold text-2xl text-[#141414] mb-3">
                Bericht ontvangen.
              </h3>
              <p className="text-[#141414]/60 leading-relaxed">
                We antwoorden binnen 1 werkdag. Alvast bedankt voor je bericht.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#141414]/8">
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
