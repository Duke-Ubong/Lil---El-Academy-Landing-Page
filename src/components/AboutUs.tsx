import React from "react";
import { HeartHandshake, ShieldAlert, Sparkles, Compass, CheckCircle2, Award } from "lucide-react";
import { motion } from "motion/react";

export default function AboutUs() {
  const pillars = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
      badge: "Spiritual Foundation",
      title: "1. A Christian Worldview",
      description:
        "We believe every child is uniquely and wonderfully made by God with distinctive gifts. Our teaching builds resilience, moral discernment, intellectual humility, and holy ambition — instilling confidence that extends far beyond examinations.",
      checks: [
        "Scripture-grounded learning atmosphere",
        "Nurturing teachers who care for the soul",
        "Praise and constructive encouragement",
      ],
      accent: "from-[#5A0F1D]/5 to-[#D4AF37]/10",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#163A24]" />,
      badge: "Active Alliance",
      title: "2. True Partnership With Parents",
      description:
        "Parents are the primary stewards of their children’s education. At Lil-El Academy, you are never an afterthought. We maintain an open channel of communication with bi-weekly updates and transparent child development roadmaps.",
      checks: [
        "Bi-weekly detailed progress reports",
        "Direct parent-tutor messaging channels",
        "Collaborative academic goal setting",
      ],
      accent: "from-[#163A24]/5 to-emerald-50/40",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-[#7B182B]" />,
      badge: "Targeted Solutions",
      title: "3. Mitigating Mainstream Gaps",
      description:
        "Mainstream schools are burdened by overcrowded classrooms of 30+ students, teaching to the median, and leaving quiet learners behind. We systematically diagnose learning gaps and replace confusion with deep mastery.",
      checks: [
        "Intimate group cap of 6 learners",
        "Immediate intervention for struggling concepts",
        "Specialized exam technique for SATs & GCSEs",
      ],
      accent: "from-amber-50/40 to-stone-50",
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-[#FAF9F6] text-stone-800 border-b border-stone-200/80 overflow-hidden">
      {/* Ambient background blur orbs */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#163A24]/5 rounded-full blur-3xl pointer-events-none" />

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
            <Compass className="w-3.5 h-3.5" />
            <span>Our Foundation & Mission</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#3B0710] tracking-tight">
            Academic Excellence Grounded in Christian Values
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans-body leading-relaxed max-w-2xl mx-auto">
            Lil-El Academy resolves a pressing dilemma for Christian families: delivering superior academic rigour without sacrificing biblical values, personal mentorship, or parental involvement.
          </p>
        </motion.div>

        {/* Biblical Quote Banner: Apple Frosted Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-white/80 border border-white/90 shadow-[0_12px_36px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.9)] relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5A0F1D] to-[#3B0710] text-[#D4AF37] flex items-center justify-center font-serif text-2xl font-bold shadow-sm shrink-0">
              “
            </div>
            <div className="space-y-1.5">
              <blockquote className="font-heading text-base sm:text-lg text-stone-800 italic leading-relaxed">
                Train up a child in the way he should go; even when he is old he will not depart from it.
              </blockquote>
              <div className="flex items-center justify-center sm:justify-start gap-2 pt-0.5">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#5A0F1D]">
                  Proverbs 22:6
                </span>
                <span className="text-stone-300">•</span>
                <span className="text-xs text-stone-500">The Lil-El Guiding Scripture</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Core Pillars: Apple Glass Bento Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl p-7 backdrop-blur-xl bg-white/75 border border-white/85 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-stone-100/80 border border-stone-200/60 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 bg-stone-100/80 px-2.5 py-1 rounded-full border border-stone-200/50">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-stone-900 mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-sans-body leading-relaxed mb-5">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-2">
                {pillar.checks.map((check, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#163A24] shrink-0" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

