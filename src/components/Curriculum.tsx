import React, { useState } from "react";
import { BookOpen, Calculator, Atom, CheckCircle2, Layers, ArrowRight, Award, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface KeyStageInfo {
  id: string;
  title: string;
  years: string;
  ageGroup: string;
  description: string;
  focus: string;
  subjects: {
    maths: string[];
    english: string[];
    science: string[];
  };
  examMilestone: string;
  highlightBadge?: string;
}

const keyStages: KeyStageInfo[] = [
  {
    id: "ks1",
    title: "Key Stage 1",
    years: "Years 1 – 2",
    ageGroup: "Ages 5 – 7",
    description: "Nurturing curiosity, phonics precision, and intuitive number sense in a warm, encouraging Christian atmosphere.",
    focus: "Early literacy, phonics decoding, mental arithmetic, and God's natural creation.",
    examMilestone: "Year 1 Phonics Screening & KS1 Foundations",
    subjects: {
      maths: [
        "Concrete number bonds to 20 & 100",
        "Place value, addition & subtraction patterns",
        "Early multiplication & division basics",
        "Shapes, measurement, telling the time",
      ],
      english: [
        "Systematic synthetic phonics & reading fluency",
        "Handwriting, neatness & sentence mechanics",
        "Vocabulary expansion through classic stories",
        "Comprehension and creative storytelling",
      ],
      science: [
        "Observation of seasons, weather & habitats",
        "Human body & senses as God's design",
        "Plant life cycles & living creatures",
        "Everyday materials and basic properties",
      ],
    },
  },
  {
    id: "ks2",
    title: "Key Stage 2",
    years: "Years 3 – 6",
    ageGroup: "Ages 7 – 11",
    description: "Building conceptual fluency, analytical reading, persuasive writing, and rigorous Year 6 SATs preparation.",
    focus: "Mental agility, multi-step problem solving, formal grammar (SPaG), and scientific inquiry.",
    examMilestone: "Year 6 SATs & Grammar School / 11+ Readiness",
    highlightBadge: "SATs Excellence",
    subjects: {
      maths: [
        "Long multiplication, long division & fractions",
        "Decimals, percentages, ratio & proportion",
        "Multi-step reasoning & word-problem deciphering",
        "Speed arithmetic & exam timing technique",
      ],
      english: [
        "Advanced SPaG (Spelling, Punctuation & Grammar)",
        "Deep reading comprehension & inference skills",
        "Narrative writing, persuasive essays & poetry",
        "Vocabulary enrichment & structured arguments",
      ],
      science: [
        "Forces, gravity, magnets & electricity circuits",
        "Light, sound waves & reflection principles",
        "Evolution, adaptation & classification of life",
        "Chemical states of matter & earth cycles",
      ],
    },
  },
  {
    id: "ks3",
    title: "Key Stage 3",
    years: "Years 7 – 9",
    ageGroup: "Ages 11 – 14",
    description: "Bridging the critical transition to secondary school. Developing higher-order reasoning, essay structuring, and pre-GCSE mastery.",
    focus: "Algebraic manipulation, Shakespearean & 19th-century text analysis, experimental scientific method.",
    examMilestone: "Diagnostic Checkpoints & GCSE Tiering",
    subjects: {
      maths: [
        "Algebraic equations, formulae & linear sequences",
        "Geometry theorems, Pythagoras, coordinate geometry",
        "Probability, statistical analysis & averages",
        "Direct and inverse proportions in real-world contexts",
      ],
      english: [
        "Critical analysis of classic literature & drama",
        "Analytical essay writing (P.E.E.L / P.E.T.A.L structures)",
        "Language devices, rhetorical techniques & evaluation",
        "Advanced creative & transactional writing",
      ],
      science: [
        "Biology: Cell structures, respiration, enzymes, DNA",
        "Chemistry: Periodic table, atomic model, acids & alkalis",
        "Physics: Energy transfers, speed, forces, circuit rules",
        "Laboratory methods, graph interpretation & variables",
      ],
    },
  },
  {
    id: "ks4",
    title: "Key Stage 4",
    years: "Years 10 – 11",
    ageGroup: "Ages 14 – 16",
    description: "High-stakes GCSE preparation with intense exam question drills, examiners' mark scheme mastery, and stress-free revision timetables.",
    focus: "Grades 7–9 targeting, mastering exam technique, timed mock papers, and early intervention.",
    examMilestone: "GCSE Official Exams (AQA, Edexcel, OCR) • Grades 7–9",
    highlightBadge: "Includes Year 10 Intervention",
    subjects: {
      maths: [
        "Higher Tier quadratics, trigonometry & vectors",
        "Circle theorems, algebraic fractions & proofs",
        "Non-calculator arithmetic & calculator fluency",
        "Past-paper examiner mark scheme dissection",
      ],
      english: [
        "GCSE English Language: Paper 1 & Paper 2 mastery",
        "GCSE English Literature: Poetry anthologies & set texts",
        "19th-century novel analysis & Shakespeare critique",
        "High-scoring essay planning under timed pressure",
      ],
      science: [
        "Combined & Triple Science (Bio, Chem, Phys)",
        "Quantitative chemistry & stoichiometry calculations",
        "Electromagnetism, radioactivity & space physics",
        "6-mark extended response examiner writing formulas",
      ],
    },
  },
];

export default function Curriculum() {
  const [activeStageId, setActiveStageId] = useState<string>("ks4");
  const activeStage = keyStages.find((s) => s.id === activeStageId) || keyStages[3];

  return (
    <section id="curriculum" className="relative py-20 bg-[#F7F7F5] text-stone-900 border-b border-stone-200/80 overflow-hidden">
      {/* Ambient glass background lights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#5A0F1D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-200/60 backdrop-blur-md border border-stone-300/50 text-[#163A24] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#163A24]" />
            <span>National Curriculum Aligned</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#3B0710] tracking-tight">
            Academic Pathways Across KS1 to KS4
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans-body leading-relaxed max-w-2xl mx-auto">
            Calibrated to UK National Curriculum standards, SATs benchmarks, and top-tier GCSE specifications — delivered with personal attention in intimate cohorts of 6.
          </p>
        </motion.div>

        {/* Apple Segmented Control Dock */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-stone-200/70 backdrop-blur-xl border border-white/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] flex-wrap justify-center gap-1">
            {keyStages.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all flex items-center gap-2 z-10 ${
                    isActive
                      ? "text-white shadow-sm"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="curriculum-tab-pill"
                      className="absolute inset-0 rounded-full bg-[#5A0F1D] shadow-md -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>{stage.title}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-medium transition-colors ${
                      isActive
                        ? "bg-[#D4AF37] text-[#3B0710]"
                        : "bg-white/60 text-stone-500"
                    }`}
                  >
                    {stage.years}
                  </span>
                  {stage.highlightBadge && (
                    <span className={`hidden sm:inline text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full ${
                      isActive ? "bg-emerald-800 text-emerald-100" : "bg-emerald-600/15 text-emerald-800"
                    }`}>
                      ★ {stage.highlightBadge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Showcase: Apple Glass Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-8 rounded-3xl backdrop-blur-2xl bg-white/80 border border-white/90 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)] p-6 sm:p-10"
          >
            
            {/* Top Stage Overview Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#3B0710]">
                    {activeStage.title} ({activeStage.years})
                  </h3>
                  <span className="text-xs bg-[#FAF5EB] border border-[#D4AF37]/60 text-[#5A0F1D] font-bold px-3 py-1 rounded-full">
                    {activeStage.ageGroup}
                  </span>
                </div>
                <p className="text-stone-600 text-xs sm:text-sm mt-1.5 max-w-2xl font-sans-body leading-relaxed">
                  {activeStage.description}
                </p>
              </div>

              <div className="bg-stone-50/80 backdrop-blur-md p-3.5 rounded-2xl border border-stone-200/70 text-left md:text-right shrink-0">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#7B182B]">Target Benchmark / Exam</div>
                <div className="font-heading font-bold text-xs sm:text-sm text-[#163A24] mt-0.5 flex items-center md:justify-end gap-1.5">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>{activeStage.examMilestone}</span>
                </div>
              </div>
            </div>

            {/* Three Subject Columns */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Maths Column */}
              <div className="rounded-2xl p-6 bg-stone-50/70 backdrop-blur-md border border-stone-200/70 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#5A0F1D]/10 text-[#5A0F1D] flex items-center justify-center border border-[#5A0F1D]/15">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-stone-900">Mathematics</h4>
                      <span className="text-[11px] text-stone-500 font-medium">Fluency & Logic</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-xs text-stone-700">
                    {activeStage.subjects.maths.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5A0F1D] shrink-0 mt-0.5" />
                        <span className="leading-snug">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* English Column */}
              <div className="rounded-2xl p-6 bg-stone-50/70 backdrop-blur-md border border-stone-200/70 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#163A24]/10 text-[#163A24] flex items-center justify-center border border-[#163A24]/15">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-stone-900">English Language & Lit</h4>
                      <span className="text-[11px] text-stone-500 font-medium">Analysis & SPaG</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-xs text-stone-700">
                    {activeStage.subjects.english.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#163A24] shrink-0 mt-0.5" />
                        <span className="leading-snug">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Science Column */}
              <div className="rounded-2xl p-6 bg-stone-50/70 backdrop-blur-md border border-stone-200/70 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center border border-amber-500/20">
                      <Atom className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-stone-900">Science (Bio, Chem, Phys)</h4>
                      <span className="text-[11px] text-stone-500 font-medium">Inquiry & Discovery</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-xs text-stone-700">
                    {activeStage.subjects.science.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="leading-snug">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Bottom Stage Action Callout */}
            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-600 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Strictly 6 students per cohort with weekly diagnostic progress reports.</span>
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#inquiry-form"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#5A0F1D] text-white hover:bg-[#7B182B] transition-colors shadow-sm"
              >
                <span>Enroll in {activeStage.title}</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </motion.a>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

