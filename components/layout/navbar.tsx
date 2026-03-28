"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/over-ons", label: "Over ons" },
  { href: "/puppyagenda", label: "Puppyagenda" },
  { href: "/prijzen", label: "Prijzen" },
  { href: "/veelgestelde-vragen", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#EFE8E4]/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
        aria-label="Hoofdnavigatie"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-bold text-xl text-[#141414] tracking-tight hover:text-[#75876D] transition-colors duration-200"
          aria-label="Let's Dog — terug naar homepage"
        >
          Let&apos;s Dog
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[15px] text-[#141414]/80 hover:text-[#141414] transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://app.letsdog.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#75876D] text-white text-[15px] font-medium hover:bg-[#65775D] transition-colors duration-200 cursor-pointer"
        >
          Start gratis
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-[#141414] hover:bg-[#141414]/10 transition-colors duration-200 cursor-pointer"
          aria-label={open ? "Sluit menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#EFE8E4] border-t border-[#141414]/10 px-6 pb-6 pt-4"
        >
          <ul className="flex flex-col gap-4 mb-6" role="list">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-[17px] font-medium text-[#141414] hover:text-[#75876D] transition-colors duration-200 py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://app.letsdog.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-5 py-3 rounded-full bg-[#75876D] text-white font-medium text-[16px] hover:bg-[#65775D] transition-colors duration-200 cursor-pointer"
          >
            Start gratis
          </a>
        </div>
      )}
    </header>
  );
}
