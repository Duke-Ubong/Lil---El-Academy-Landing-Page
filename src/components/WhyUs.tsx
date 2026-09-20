import React from "react";
import { Users, Heart, Target, Banknote, ShieldCheck, Sparkles, Check, X, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function WhyUs() {
  const features = [
    {
      icon: <Users className="w-5 h-5 text-[#5A0F1D]" />,
      title: "Strictly Intimate Groups (Max 6)",
      description:
        "Unlike mainstream classrooms of 30+ students where quiet children get overlooked, our 6-student cap ensures every learner actively participates, asks questions freely, and receives bespoke coaching.",
      badge: "1:6 Maximum Ratio",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
      title: "Confidence & Godly Character",
      description:
        "We teach that mistakes in practice are stepping stones to wisdom, building resilience and intellectual humility. Children transform into confident, articulate, and faith-anchored thinkers.",
      badge: "Spiritual Mentorship",
    },
    {
      icon: <Target className="w-5 h-5 text-[#163A24]" />,
      title: "Bespoke Child Growth Plans",
      description:
        "No generic worksheets. We diagnose your child’s unique cognitive strengths and blindspots, formulating an agile 12-week roadmap tailored specifically to their exam milestones.",
      badge: "Personal Roadmap",
    },
    {
      icon: <Heart className="w-5 h-5 text-[#7B182B]" />,
      title: "Active Parent-Teacher Alliance",
      description:
        "You are never left guessing. We provide bi-weekly diagnostic updates, transparent homework trackers, and direct messaging with your child's dedicated specialist tutor.",
      badge: "Bi-Weekly Reports",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#163A24]" />,
      title: "Exam Board Precision (SATs & GCSE)",
      description:
        "Our tutors have deep command of AQA, Edexcel, and OCR mark schemes. Students master high-scoring exam vocabulary, question breakdown techniques, and time management.",
      badge: "AQA • Edexcel • OCR",
    },
    {
      icon: <Banknote className="w-5 h-5 text-[#5A0F1D]" />,
      title: "Affordable, Transparent Pricing",
      description:
        "High-calibre Christian supplementary education shouldn’t be a luxury reserved for a wealthy few. We provide premium tuition at fair rates with zero hidden registration fees.",
      badge: "Fair Supplementary Fees",
    },
  ];

  return (
    <section id="why-us" className="relative py-24 bg-[#FAF9F6] text-stone-900 border-b border-stone-200/80 overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-96 h-96 bg-[#163A24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-200/60 backdrop-blur-md border border-stone-300/40 text-[#5A0F1D] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Lil-El Distinction</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#3B0710] tracking-tight">
            Why Christian Families Trust Lil-El Academy
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans-body leading-relaxed max-w-2xl mx-auto">
            We bridge the shortcomings of overcrowded mainstream schooling through structured rigour, individual mentorship, and deep biblical integrity.
          </p>
        </motion.div>

        {/* 6 Apple Glass Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl p-7 backdrop-blur-xl bg-white/75 border border-white/85 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-stone-100/80 border border-stone-200/60 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-stone-700 bg-stone-100/80 border border-stone-200/50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-sans-body leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100/80 flex items-center justify-between text-xs font-bold text-[#5A0F1D]">
                <span>Discover in consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table: Mainstream vs Lil-El Academy (Apple Glass Table) */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-heading text-2xl font-bold text-[#3B0710]">
              Mainstream School Gaps vs. The Lil-El Solution
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              A transparent comparison of standard schooling versus our dedicated approach:
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl backdrop-blur-xl bg-white/80 border border-white/90 shadow-[0_16px_40px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)]"
          >
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-stone-100/70 border-b border-stone-200/70">
                  <th className="p-4 sm:p-5 font-bold text-stone-800 w-1/3">Educational Aspect</th>
                  <th className="p-4 sm:p-5 font-bold text-stone-500 w-1/3">Standard Mainstream School</th>
                  <th className="p-4 sm:p-5 font-bold text-[#5A0F1D] bg-[#FAF5EB]/60 w-1/3 border-l border-stone-200/60">
                    Lil-El Christian Academy
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-stone-900">Class Size & Attention</td>
                  <td className="p-4 sm:p-5 text-stone-600 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>30+ students; quiet learners easily overlooked</span>
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#163A24] bg-[#FAF5EB]/40 border-l border-stone-200/60">
                    <div className="flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Strict cap of 6 students per session</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-stone-900">Worldview & Values</td>
                  <td className="p-4 sm:p-5 text-stone-600 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Secular curriculum, conflicting moral messages</span>
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#163A24] bg-[#FAF5EB]/40 border-l border-stone-200/60">
                    <div className="flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Biblical worldview, godly character & integrity</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-stone-900">GCSE & SATs Intervention</td>
                  <td className="p-4 sm:p-5 text-stone-600 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Reactive: stressful panic in spring of Year 11</span>
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#163A24] bg-[#FAF5EB]/40 border-l border-stone-200/60">
                    <div className="flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Proactive Year 10 early intervention & gap audit</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-stone-900">Parent Communication</td>
                  <td className="p-4 sm:p-5 text-stone-600 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>One or two rushed 5-minute parents' evenings a year</span>
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#163A24] bg-[#FAF5EB]/40 border-l border-stone-200/60">
                    <div className="flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Bi-weekly detailed progress reports & direct tutor contact</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-stone-900">Teaching Strategy</td>
                  <td className="p-4 sm:p-5 text-stone-600 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Rigid pace teaching strictly to the classroom middle</span>
                  </td>
                  <td className="p-4 sm:p-5 font-medium text-[#163A24] bg-[#FAF5EB]/40 border-l border-stone-200/60">
                    <div className="flex items-center gap-2 font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Tailored Child Growth Plan with mastery pacing</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Quick Direct Link to Form */}
          <div className="mt-10 text-center">
            <motion.a
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#inquiry-form"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm sm:text-base font-bold bg-gradient-to-r from-[#5A0F1D] to-[#7B182B] text-white hover:from-[#4A0C17] hover:to-[#5A0F1D] shadow-[0_4px_20px_rgba(90,15,29,0.25)] transition-all"
            >
              <span>Experience The Lil-El Difference – Book Diagnostic Form</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}

