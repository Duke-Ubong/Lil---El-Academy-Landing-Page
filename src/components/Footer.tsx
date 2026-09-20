import React from "react";
import AcademyLogo from "./AcademyLogo";
import { Phone, Mail, Globe, MapPin, ShieldCheck, Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#200408] text-stone-300 pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#5A0F1D]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Info (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <AcademyLogo className="w-12 h-12" variant="gold" showText={true} />
            <p className="text-stone-300/90 text-xs sm:text-sm font-sans-body leading-relaxed max-w-sm">
              Lil-El Academy is a premier online Christian supplementary school. We partner with parents to unlock potential, inspire brilliance, and build faith across KS1 to KS4 in Maths, English, and Science.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#D4AF37] font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Dedicated Year 10 Early Intervention Specialists</span>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              Curriculum & Stages
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300/80">
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Key Stage 1 (Years 1–2 / Phonics & Numbers)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Key Stage 2 (Years 3–6 / SATs Masterclass)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Key Stage 3 (Years 7–9 / Foundations)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#year10" className="hover:text-[#D4AF37] font-semibold text-[#D4AF37] transition-colors flex items-center gap-1">
                  <span>Key Stage 4 (Year 10 Early Intervention)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>GCSE Exam Crunch (Year 11 Targets 7-9)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
              Admissions & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+447768639106" className="hover:text-white transition-colors font-medium">
                  +44 7768 639106
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:info@lilelacademy.com" className="hover:text-white transition-colors font-medium">
                  info@lilelacademy.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href="https://www.lilelacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium"
                >
                  https://www.lilelacademy.com
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-[11px] leading-relaxed">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Online Classrooms serving UK students nationwide and overseas Christian families.</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#inquiry-form"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold bg-[#D4AF37] text-[#3B0710] hover:bg-white transition-colors shadow-xs"
              >
                Book Diagnostic Consultation
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Faith Statement */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} Lil-El Academy. All rights reserved. Registered Online Christian Supplementary School.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-stone-200 transition-colors">Christian Worldview Curriculum</span>
            <span>•</span>
            <span className="hover:text-stone-200 transition-colors">Child Safeguarding Policy</span>
            <span>•</span>
            <span className="hover:text-stone-200 transition-colors">Parental Partnership Charter</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

