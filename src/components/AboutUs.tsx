import React from "react";
import {
  Compass,
  Sparkles,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Award,
  Users,
  Banknote,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";

export default function AboutUs() {
  const objectives = [
    {
      id: 1,
      title: "Deliver Personalized Education",
      description:
        "Tailor educational approaches to meet the unique learning needs and strengths of each child, ensuring individualized support for academic and personal success.",
      icon: <GraduationCap className="w-5 h-5 text-[#5A0F1D]" />,
      badge: "Individualized Support",
    },
    {
      id: 2,
      title: "Develop Lifelong Learners",
      description:
        "Cultivate a passion for learning by encouraging curiosity, resilience, and critical thinking, helping students overcome challenges and build confidence.",
      icon: <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
      badge: "Resilience & Curiosity",
    },
    {
      id: 3,
      title: "Foster Christian Values",
      description:
        "Integrate Christian principles and values into the curriculum and learning environment, guiding students in both academic and personal development.",
      icon: <Compass className="w-5 h-5 text-[#163A24]" />,
      badge: "Christ-Centred Mentorship",
    },
    {
      id: 4,
      title: "Collaborate with Parents",
      description:
        "Partner with parents to create robust development plans, providing regular updates and support to help children achieve their full potential.",
      icon: <HeartHandshake className="w-5 h-5 text-[#7B182B]" />,
      badge: "Parent-School Alliance",
    },
    {
      id: 5,
      title: "Promote Academic Excellence",
      description:
        "Help students achieve key academic milestones, such as GCSEs, through targeted instruction, assessment, and feedback.",
      icon: <Award className="w-5 h-5 text-[#163A24]" />,
      badge: "Key Milestones & GCSEs",
    },
    {
      id: 6,
      title: "Create an Engaging Learning Environment",
      description:
        "Foster an interactive, supportive, and inclusive environment where students feel motivated to learn, explore, and grow in small group settings.",
      icon: <Users className="w-5 h-5 text-[#5A0F1D]" />,
      badge: "Small Cohorts (Max 6)",
    },
    {
      id: 7,
      title: "Ensure Affordability",
      description:
        "Offer high-quality education at a reasonable price, making it accessible to families without compromising on the quality of instruction and support.",
      icon: <Banknote className="w-5 h-5 text-[#D4AF37]" />,
      badge: "Accessible Pricing",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#FAF9F6] text-stone-800 border-b border-stone-200/80 overflow-hidden">
      {/* Ambient background blur accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#163A24]/5 rounded-full blur-3xl pointer-events-none" />

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
            <Compass className="w-3.5 h-3.5 text-[#5A0F1D]" />
            <span>Vision, Mission & Strategic Objectives</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#3B0710] tracking-tight">
            Preparing Every Child for Lifelong Success
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans-body leading-relaxed max-w-2xl mx-auto">
            <strong>LIL-EL ACADEMY</strong> is an Online Christian Supplementary School. We deliver quality education in maths, English, science and Christian worldview.
          </p>
        </motion.div>

        {/* Vision & Mission Statements Grid: Apple Glass Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-3xl p-8 backdrop-blur-2xl bg-white/85 border border-white/90 shadow-[0_12px_36px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.95)] flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37] bg-[#FAF5EB] px-3 py-1 rounded-full border border-[#D4AF37]/40">
                  Vision Statement
                </span>
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#3B0710] mb-3 leading-snug">
                Transformative, Christ-Centred Education
              </h3>
              <p className="font-heading text-lg sm:text-xl text-stone-800 italic leading-relaxed">
                “Empower every child to reach their full potential through transformative, Christ centred education.”
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
              <CheckCircle2 className="w-4 h-4 text-[#163A24]" />
              <span>Dedicated to spiritual maturity, character & brilliance</span>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl p-8 backdrop-blur-2xl bg-white/85 border border-white/90 shadow-[0_12px_36px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.95)] flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#163A24]/10 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#163A24] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Mission Statement
                </span>
                <Compass className="w-5 h-5 text-[#163A24]" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#3B0710] mb-3 leading-snug">
                Lifelong Success Through Christian Values
              </h3>
              <p className="text-stone-700 font-sans-body text-sm sm:text-base leading-relaxed">
                “Our mission is to prepare the child for lifelong success through high-quality, personalized education based on Christian values, working with parents to help each child discover their strengths, overcome challenges, and develop a love for learning.”
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
              <HeartHandshake className="w-4 h-4 text-[#7B182B]" />
              <span>Partnering with parents to nurture the whole child</span>
            </div>
          </motion.div>

        </div>

        {/* Guiding Scripture Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 max-w-4xl mx-auto rounded-2xl p-5 backdrop-blur-md bg-stone-100/60 border border-stone-200/60 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-stone-700"
        >
          <span className="font-serif italic text-stone-800 text-sm sm:text-base">
            “Train up a child in the way he should go; even when he is old he will not depart from it.”
          </span>
          <span className="font-bold text-[#5A0F1D] shrink-0 uppercase tracking-wider text-xs">
            — Proverbs 22:6
          </span>
        </motion.div>

        {/* The 7 Core Objectives Header */}
        <div className="mt-18 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#163A24]/10 text-[#163A24] text-[11px] font-bold uppercase tracking-wider mb-2">
            <span>Our 7 Strategic Objectives</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#3B0710]">
            How We Fulfill Our Promise to Every Student
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans-body">
            Every lesson, diagnostic report, and cohort interaction is calibrated against these seven pillars:
          </p>
        </div>

        {/* 7 Objectives Bento Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, index) => (
            <motion.div
              key={obj.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className={`rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-white/80 border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col justify-between transition-all group ${
                obj.id === 7 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-stone-100/80 border border-stone-200/60 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {obj.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
                      0{obj.id}
                    </span>
                    <span className="text-[10px] font-bold text-stone-700 bg-stone-100/90 border border-stone-200/60 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {obj.badge}
                    </span>
                  </div>
                </div>

                <h4 className="font-heading text-lg font-bold text-stone-900 mb-2">
                  {obj.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 font-sans-body leading-relaxed">
                  {obj.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100/80 flex items-center justify-between text-xs text-[#5A0F1D] font-semibold">
                <span>Reflected in daily tuition</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clear Fast-Action Pathway to the Form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-gradient-to-r from-[#4A0C17] via-[#5A0F1D] to-[#3B0710] text-white border border-white/20 shadow-[0_16px_40px_rgba(90,15,29,0.25)] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Begin With a Complimentary Baseline Evaluation</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Give Your Child the Lil-El Advantage
            </h3>
            <p className="text-xs sm:text-sm text-stone-200/90 max-w-xl font-sans-body">
              Complete our 2-minute parent inquiry form to receive a free diagnostic assessment and customized Child Development Plan.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#inquiry-form"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-[#D4AF37] text-[#3B0710] hover:bg-[#E5C358] shadow-[0_6px_20px_rgba(212,175,55,0.35)] shrink-0 transition-all"
          >
            <span>Book Free Diagnostic Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

