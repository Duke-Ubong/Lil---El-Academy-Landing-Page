import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, Shield, Users, Award, Calendar, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#3E0812] via-[#2A050C] to-[#1F0409] text-white pt-12 pb-20 lg:pt-18 lg:pb-24 border-b border-white/10">
      {/* Ambient Apple Glass Glow Elements */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-[#163A24]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-[#7B182B]/25 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Specular Mesh Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Hero Copy (Col 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Top Apple Glass Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-xs font-semibold text-stone-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tracking-wide text-stone-100 font-medium">Online Christian Supplementary School</span>
              <span className="text-white/30">•</span>
              <span className="text-[#D4AF37] font-bold">KS1 to KS4</span>
            </div>

            {/* Exact Motto Tagline Headline */}
            <div className="space-y-2">
              <div className="text-xs uppercase font-extrabold tracking-widest text-[#D4AF37]">
                Motto: Unlocking potentials, Inspiring Brilliance, building faith.
              </div>
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.12]">
                Unlocking Potentials, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6C665] via-[#F3DE97] to-[#D4AF37]">
                  Inspiring Brilliance
                </span>, <br />
                Building Faith.
              </h1>
            </div>

            {/* Core Definition / Subheading */}
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-sans-body leading-relaxed mx-auto lg:mx-0 font-normal">
              <strong className="text-white font-semibold">LIL-EL ACADEMY</strong> is an Online Christian Supplementary School. We deliver quality education in <strong className="text-white font-semibold">maths, English, science, and Christian worldview</strong> across KS1 to KS4 with specialized <strong className="text-[#D4AF37] font-semibold">Year 10 Early Intervention</strong>.
            </p>

            {/* Core Value Pillars - Glass Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-[13px] text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Personalized, Christ-centred education</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-[13px] text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Interactive small cohorts (max 6 learners)</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-[13px] text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Specialized Year 10 early GCSE intervention</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-xs sm:text-[13px] text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Collaborative parent development roadmaps</span>
              </div>
            </div>

            {/* Direct High-Converting CTAs with Quick Form Pathway */}
            <div className="pt-3 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <motion.a
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  href="#inquiry-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold bg-[#D4AF37] text-[#3B0710] hover:bg-[#E5C358] shadow-[0_4px_24px_rgba(212,175,55,0.35)] transition-all"
                >
                  <span>Enroll Now / Free Diagnostic Form</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  href="#about"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold border border-white/20 text-stone-200 hover:text-white hover:bg-white/10 backdrop-blur-xl transition-all shadow-xs"
                >
                  <span>Our Vision & 7 Objectives</span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </motion.a>
              </div>

              {/* Instant Form Jump Prompt */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-stone-300">
                <span>Want to register immediately?</span>
                <a
                  href="#inquiry-form"
                  className="text-[#D4AF37] font-bold underline hover:text-[#F3DE97] transition-colors inline-flex items-center gap-1"
                >
                  <span>Jump straight to Parent Inquiry Form</span>
                  <span>↓</span>
                </a>
              </div>
            </div>

            {/* Subtle Reassurance text */}
            <div className="pt-1 text-xs text-stone-400 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="flex items-center gap-1.5">
                <span className="text-[#D4AF37]">✓</span> Zero long-term contract lock-in
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#D4AF37]">✓</span> Free comprehensive diagnostic
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#D4AF37]">✓</span> Accessible monthly fees
              </span>
            </div>

          </motion.div>

          {/* Right Column: Apple Frosted Glass Showcase Card (Col 8-12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-6 sm:p-7 backdrop-blur-2xl bg-white/[0.08] border border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.25)] overflow-hidden">
              
              {/* Subtle Refraction Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

              {/* Top Accent Pill */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase bg-white/10 px-3 py-1 rounded-full border border-white/15 backdrop-blur-md">
                  The Lil-El Standard
                </span>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-[#163A24]/70 px-3 py-1 rounded-full border border-emerald-500/30 backdrop-blur-md">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Enrolling 2026/27</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-snug">
                    Academic Rigour Anchored in Purpose
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-1.5 font-sans-body leading-relaxed">
                    Mainstream schools often lack the time to address individual learning blindspots. Every Lil-El student receives a personalized development plan.
                  </p>
                </div>

                {/* Key Pillars Glass List */}
                <div className="space-y-2.5 pt-1">
                  
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:bg-white/[0.1] transition-colors">
                    <div className="p-2 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] shrink-0 mt-0.5 border border-[#D4AF37]/25">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Intimate Cohorts (Max 6 Students)</h4>
                      <p className="text-xs text-stone-300 mt-0.5 leading-relaxed">
                        No child is overlooked. Active participation, immediate answers, and real-time mentor feedback every lesson.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 hover:bg-white/[0.1] transition-colors">
                    <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-300 shrink-0 mt-0.5 border border-emerald-500/25">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">SATs & GCSE Mark Scheme Mastery</h4>
                      <p className="text-xs text-stone-300 mt-0.5 leading-relaxed">
                        Aligned to AQA, Edexcel, and OCR boards for Maths, English, and Science with examiner precision.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/30 hover:bg-[#D4AF37]/15 transition-colors">
                    <div className="p-2 rounded-xl bg-[#D4AF37]/25 text-[#D4AF37] shrink-0 mt-0.5 border border-[#D4AF37]/40">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-bold text-[#D4AF37]">Year 10 Early Intervention</h4>
                        <span className="text-[10px] bg-[#7B182B] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                          Strategic
                        </span>
                      </div>
                      <p className="text-xs text-stone-200 mt-0.5 leading-relaxed">
                        Solve curriculum dips early before Year 11 mock panic sets in, protecting grades 7–9.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Parent Action */}
                <div className="pt-2">
                  <motion.a
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    href="#inquiry-form"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs sm:text-sm bg-white text-[#3B0710] hover:bg-stone-100 transition-colors shadow-md"
                  >
                    <span>Register Student for Placement</span>
                    <ArrowRight className="w-4 h-4 text-[#5A0F1D]" />
                  </motion.a>
                  <p className="text-center text-[11px] text-stone-400 mt-2">
                    Questions? Speak directly to admissions: <a href="tel:+447768639106" className="text-[#D4AF37] font-semibold hover:underline">+44 7768 639106</a>
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Impact Numbers Bar: Apple Dark Frosted Glass Dock */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-3xl backdrop-blur-2xl bg-white/[0.05] border border-white/10 p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="space-y-1">
              <div className="font-heading text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">1 : 6</div>
              <div className="text-xs font-medium text-stone-300">Max Tutor-to-Student Ratio</div>
            </div>
            <div className="space-y-1 pt-4 sm:pt-0">
              <div className="font-heading text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">KS1–KS4</div>
              <div className="text-xs font-medium text-stone-300">Maths, English & Science</div>
            </div>
            <div className="space-y-1 pt-4 sm:pt-0">
              <div className="font-heading text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">100%</div>
              <div className="text-xs font-medium text-stone-300">Parent Transparency & Updates</div>
            </div>
            <div className="space-y-1 pt-4 sm:pt-0">
              <div className="font-heading text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">24 hrs</div>
              <div className="text-xs font-medium text-stone-300">Rapid Diagnostic Assessment</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

