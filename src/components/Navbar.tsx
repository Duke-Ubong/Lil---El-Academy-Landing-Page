import React, { useState, useEffect } from "react";
import AcademyLogo from "./AcademyLogo";
import { Phone, Mail, Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Vision & Objectives", href: "#about" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Year 10 Intervention", href: "#year10", badge: "Strategic" },
    { label: "Why Us", href: "#why-us" },
    { label: "Parent Alliance", href: "#partnership" },
    { label: "Inquiry Form", href: "#inquiry-form" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Ambient Banner: Clean Frosted Slate/Burgundy */}
      <div className="bg-[#3B0710]/95 backdrop-blur-md text-stone-200 text-xs py-1.5 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              Online Christian Supplementary School
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline text-stone-300 text-[11px] tracking-wide">
              Unlocking potentials, Inspiring Brilliance, building faith
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="#inquiry-form"
              className="text-[#D4AF37] hover:underline font-semibold hidden md:inline-flex items-center gap-1"
            >
              <span>Quick Form Entry ↓</span>
            </a>
            <span className="hidden md:inline text-white/20">|</span>
            <a
              href="tel:+447768639106"
              className="inline-flex items-center gap-1.5 text-stone-200 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>+44 7768 639106</span>
            </a>
            <a
              href="mailto:info@lilelacademy.com"
              className="hidden md:inline-flex items-center gap-1.5 text-stone-200 hover:text-[#D4AF37] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#D4AF37]" />
              <span>info@lilelacademy.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Apple Glass Nav Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-2xl border-b border-stone-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2.5"
            : "bg-white/70 backdrop-blur-xl border-b border-white/60 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Crest & Title */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none rounded-xl p-1 transition-transform hover:scale-[1.02]"
          >
            <AcademyLogo
              className="w-9 h-9 sm:w-10 sm:h-10 transition-transform group-hover:rotate-1"
              variant="light"
              showText={true}
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-stone-100/70 backdrop-blur-md p-1 rounded-full border border-stone-200/50 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-stone-950 font-medium text-xs sm:text-[13px] tracking-wide transition-all px-3.5 py-1.5 rounded-full hover:bg-white hover:shadow-xs flex items-center gap-1.5 relative group"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="bg-[#163A24]/10 text-[#163A24] text-[9px] uppercase font-bold px-1.5 py-0.5 rounded-full border border-[#163A24]/20 tracking-wider">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+447768639106"
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-stone-600 hover:text-[#5A0F1D] hover:bg-stone-100/80 transition-colors"
            >
              Call Admissions
            </a>

            <motion.a
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#inquiry-form"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide bg-gradient-to-r from-[#5A0F1D] to-[#7B182B] text-white hover:from-[#4A0C17] hover:to-[#5A0F1D] shadow-[0_4px_16px_rgba(90,15,29,0.25)] transition-all"
            >
              <span>Enroll Student</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </motion.a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#inquiry-form"
              className="sm:hidden inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-bold bg-[#5A0F1D] text-white shadow-xs"
            >
              Enroll
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-700 hover:text-stone-950 p-2 rounded-xl bg-stone-100/80 border border-stone-200/50 backdrop-blur-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#5A0F1D]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down glass drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-t border-stone-200/70 px-5 pt-3 pb-6 shadow-xl"
            >
              <div className="space-y-1 pt-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-stone-700 hover:text-[#5A0F1D] font-medium text-sm py-2.5 px-3 rounded-lg hover:bg-stone-50 transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="bg-[#163A24]/10 text-[#163A24] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#163A24]/20">
                        {link.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-stone-200/60 mt-3 space-y-2.5">
                <a
                  href="#inquiry-form"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full font-bold text-sm bg-[#5A0F1D] text-white shadow-md hover:bg-[#7B182B] transition-colors block"
                >
                  Book Free Assessment
                </a>
                <div className="flex items-center justify-center gap-4 text-xs text-stone-500 pt-1">
                  <a href="tel:+447768639106" className="flex items-center gap-1.5 hover:text-[#5A0F1D]">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> +44 7768 639106
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

