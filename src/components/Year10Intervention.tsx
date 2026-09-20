import React from "react";
import { AlertCircle, CheckCircle2, TrendingUp, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Year10Intervention() {
  const steps = [
    {
      num: "01",
      title: "Diagnostic Audit",
      desc: "Comprehensive 45-minute benchmark identifying precise misconceptions across Maths, English, and Science.",
    },
    {
      num: "02",
      title: "Child Growth Plan",
      desc: "Tailored 12-week development roadmap shared directly with parents featuring weekly milestone checkpoints.",
    },
    {
      num: "03",
      title: "Small Group Clinics",
      desc: "Intimate sessions capped at 6 students with subject specialist mentors addressing root difficulties.",
    },
    {
      num: "04",
      title: "Past Paper Drills",
      desc: "Timed mini-assessments paired with live examiner mark-scheme feedback so exams feel natural and predictable.",
    },
  ];

  return (
    <section id="year10" className="relative py-24 bg-[#0B1E13] text-white border-b border-stone-800/80 overflow-hidden">
      {/* Subtle Apple dark ambient glow lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#5A0F1D]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold uppercase tracking-wider text-[#E5C768]">
            <Zap className="w-3.5 h-3.5 text-[#E5C768]" />
            <span>High-Impact Early Intervention</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Why Year 10 is the <span className="text-[#E5C768]">True Hinge</span> for GCSE Success
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-sans-body leading-relaxed max-w-2xl mx-auto">
            Over 78% of GCSE panic occurs in spring of Year 11 — when time is short and stress compounds. Our <strong>Year 10 Early Intervention Programme</strong> tackles grade dips early, cementing subject mastery with peaceful assurance.
          </p>
        </motion.div>

        {/* The Urgency & Contrast Matrix: Apple Frosted Glass Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Box 1: The Mainstream Trap */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl p-7 sm:p-8 backdrop-blur-xl bg-red-950/20 border border-red-500/20 shadow-[0_16px_40px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.08)] flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-300">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red-300">The Mainstream Trap</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">Waiting Until Year 11</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 font-sans-body leading-relaxed">
                Most families wait until disappointing Year 11 mock exam results arrive. By then, students face overwhelming cumulative backlogs across 9+ subjects simultaneously.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-stone-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Panic Cramming:</strong> Attempting to relearn two years of syllabus in 12 rushed weeks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Compromised Predicted Grades:</strong> Sixth forms make conditional offers on early Year 11 mocks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Crippling Exam Anxiety:</strong> Loss of confidence, emotional burnout, and spiritual distress.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  <span><strong>Foundation Tier Demotion:</strong> Schools downgrade students when time runs out to bridge gaps.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-red-900/40 text-xs text-red-300 italic">
              Result: Stressful compromises that fall short of your child's true potential.
            </div>
          </motion.div>

          {/* Box 2: The Lil-El Year 10 Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl p-7 sm:p-8 backdrop-blur-xl bg-white/[0.08] border border-[#D4AF37]/40 shadow-[0_16px_40px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#E5C768]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5C768]">The Lil-El Method</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading">Year 10 Proactive Mastery</h3>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#D4AF37]/25 text-[#E5C768] px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                  Strategic Edge
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-200 font-sans-body leading-relaxed">
                By intervening in Year 10, we diagnose curriculum blindspots before they compound, establishing deep cognitive recall, mark-scheme precision, and calm assurance.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-stone-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C768] shrink-0 mt-0.5" />
                  <span><strong>Early Diagnostic Gap Analysis:</strong> Pinpoint exact misconceptions in Maths, English, and Science.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C768] shrink-0 mt-0.5" />
                  <span><strong>Higher Tier Preservation:</strong> Keep your student firmly on track for targeted Grades 7, 8, & 9.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C768] shrink-0 mt-0.5" />
                  <span><strong>Examiner Mark Scheme Fluency:</strong> Learn what examiners award marks for from day one.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C768] shrink-0 mt-0.5" />
                  <span><strong>Sustainable Study Cadence:</strong> Gentle weekly pacing protecting Sabbath rest and family life.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D4AF37]/30 text-xs text-stone-200 flex items-center justify-between">
              <span className="font-semibold text-[#E5C768]">Outcome: Confident, unshakeable GCSE performance.</span>
              <ShieldCheck className="w-4 h-4 text-[#E5C768]" />
            </div>
          </motion.div>

        </div>

        {/* Intervention Steps: Apple Glass Timeline Cards */}
        <div className="mt-14 rounded-3xl backdrop-blur-xl bg-white/[0.04] border border-white/10 p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              The 4-Step Year 10 Early Intervention Roadmap
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-1">
              Every Year 10 student enters our structured intervention cycle:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl backdrop-blur-md bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#E5C768] font-bold flex items-center justify-center text-xs mb-3 font-mono">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1.5 font-heading">{step.title}</h4>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans-body">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="mt-10 text-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#inquiry-form"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-[#D4AF37] text-[#3B0710] hover:bg-[#E5C768] shadow-lg transition-all"
            >
              <span>Secure a Year 10 Intervention Slot Today</span>
              <ArrowRight className="w-4 h-4 text-[#3B0710]" />
            </motion.a>
            <p className="text-xs text-stone-400 mt-2.5">
              Strictly capped cohorts (1:6 tutor ratio) ensuring bespoke attention.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

