import { useState } from "react";
import { 
  Send, 
  PhoneCall, 
  Search, 
  Users, 
  FileCheck, 
  Rocket, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface StepItem {
  id: number;
  phase: string;
  timeframe: string;
  title: string;
  shortDesc: string;
  detailedPoints: string[];
  icon: typeof Send;
  accentColor: string;
  tag: string;
  whoInvolved: string;
  deliverable: string;
}

const steps: StepItem[] = [
  {
    id: 1,
    phase: "Step 01",
    timeframe: "Instant",
    title: "Inquiry & Reference Generated",
    shortDesc: "Your registration is securely recorded and acknowledged immediately.",
    detailedPoints: [
      "Instant unique admissions reference code issued (e.g., LE-392014)",
      "Admissions director notified instantly via priority notification",
      "Automatic preliminary review of your child's Key Stage & core subject needs"
    ],
    icon: Send,
    accentColor: "#5A0F1D",
    tag: "Submission",
    whoInvolved: "Parent & Admissions Director",
    deliverable: "Admissions Reference Code"
  },
  {
    id: 2,
    phase: "Step 02",
    timeframe: "Within 24 Hours",
    title: "Advisory Discovery Call",
    shortDesc: "A personal conversation to explore your child’s learning journey and goals.",
    detailedPoints: [
      "Friendly, 15-minute phone or WhatsApp call with our Senior Academic Advisor",
      "Discussion of academic targets, school reports, and learning obstacles",
      "Scheduling of your child's complimentary online diagnostic assessment"
    ],
    icon: PhoneCall,
    accentColor: "#163A24",
    tag: "Consultation",
    whoInvolved: "Academic Advisor & Parent",
    deliverable: "Diagnostic Appointment Confirmed"
  },
  {
    id: 3,
    phase: "Step 03",
    timeframe: "Day 2 - 3",
    title: "Complimentary Diagnostic Session",
    shortDesc: "An encouraging, low-pressure 30-minute online assessment.",
    detailedPoints: [
      "Interactive 1-on-1 virtual session with an Enhanced DBS verified educator",
      "Pinpoints exact conceptual strengths and gaps in Maths, English, or Science",
      "Friendly atmosphere designed to build confidence, not test anxiety"
    ],
    icon: Search,
    accentColor: "#B38F26",
    tag: "Assessment",
    whoInvolved: "Subject Specialist & Learner",
    deliverable: "Baseline Competency Scorecard"
  },
  {
    id: 4,
    phase: "Step 04",
    timeframe: "Within 48 Hours",
    title: "Bespoke Child Development Plan",
    shortDesc: "You receive a clear, personalized roadmap tailored to your child.",
    detailedPoints: [
      "Comprehensive diagnostic feedback report sent directly to your email",
      "Tailored 12-week learning milestones mapped to the National Curriculum / GCSE specs",
      "Explicit faith & character formation focus aligned with family values"
    ],
    icon: FileCheck,
    accentColor: "#5A0F1D",
    tag: "Roadmap",
    whoInvolved: "Academic Director & Parents",
    deliverable: "12-Week Growth Blueprint"
  },
  {
    id: 5,
    phase: "Step 05",
    timeframe: "Day 4 - 5",
    title: "Interactive Cohort Placement",
    shortDesc: "Matched with a strictly capped peer group (maximum 6 learners).",
    detailedPoints: [
      "Paired with students at compatible working levels for balanced participation",
      "Selection of convenient evening or weekend supplementary timetable",
      "Introduction to their dedicated Christian mentor and online portal access"
    ],
    icon: Users,
    accentColor: "#163A24",
    tag: "Placement",
    whoInvolved: "Student & 6-Peer Cohort",
    deliverable: "Timetable & Portal Login"
  },
  {
    id: 6,
    phase: "Step 06",
    timeframe: "Week 1 Onward",
    title: "Learning Commences & Bi-Weekly Tracking",
    shortDesc: "Live sessions begin with continuous parental progress updates.",
    detailedPoints: [
      "Engaging, interactive live supplementary classes with recorded recaps",
      "Bi-weekly progress digests and homework mastery check-ins sent to parents",
      "Ongoing partnership to ensure confidence, grades, and faith flourish"
    ],
    icon: Rocket,
    accentColor: "#B38F26",
    tag: "Active Learning",
    whoInvolved: "Educator, Student & Parent Alliance",
    deliverable: "Bi-Weekly Progress Digest"
  }
];

export default function AdmissionTracker() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const selectedStep = steps.find((s) => s.id === activeStep) || steps[0];

  return (
    <section 
      id="admission-process" 
      className="py-20 bg-gradient-to-b from-stone-50 via-white to-stone-50 border-y border-stone-200/70 relative overflow-hidden"
    >
      {/* Subtle background ambient circles */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#5A0F1D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-200/60 backdrop-blur-md border border-stone-300/50 text-[#5A0F1D] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Clear & Transparent Admissions</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#3B0710] tracking-tight">
            What Happens After You Inquire?
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans-body max-w-2xl mx-auto leading-relaxed">
            We know finding the right supplementary school is an important family decision. Here is our step-by-step pathway from your first message to your child’s first lesson.
          </p>
        </div>

        {/* Step-by-Step Interactive Stepper Rail */}
        <div className="relative mb-12">
          {/* Connecting line across steps (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-stone-200 rounded-full z-0" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              const isPassed = activeStep > step.id;
              const StepIcon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  type="button"
                  className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl transition-all relative group text-left ${
                    isActive
                      ? "bg-white shadow-[0_10px_30px_rgba(90,15,29,0.12)] ring-2 ring-[#7B182B] border-transparent"
                      : "bg-white/70 hover:bg-white border border-stone-200/70 hover:shadow-xs"
                  }`}
                >
                  {/* Step Bubble Indicator */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-xs mb-3 ${
                      isActive
                        ? "bg-gradient-to-br from-[#5A0F1D] to-[#7B182B] text-white scale-110 shadow-md ring-4 ring-[#D4AF37]/30"
                        : isPassed
                        ? "bg-[#163A24] text-white"
                        : "bg-stone-100 text-stone-600 group-hover:bg-stone-200"
                    }`}
                  >
                    <StepIcon className="w-5 h-5" />
                  </div>

                  {/* Step Badge */}
                  <div className="flex items-center gap-1 mb-1">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                      isActive ? "text-[#7B182B]" : "text-stone-600"
                    }`}>
                      {step.phase}
                    </span>
                  </div>

                  {/* Step Title */}
                  <div className={`text-xs font-bold leading-snug line-clamp-2 ${
                    isActive ? "text-stone-900" : "text-stone-700"
                  }`}>
                    {step.title}
                  </div>

                  {/* Timeframe Chip */}
                  <div className="mt-2 text-[10px] text-stone-600 font-medium flex items-center gap-1 bg-stone-100/90 px-2 py-0.5 rounded-md">
                    <Clock className="w-2.5 h-2.5 text-[#D4AF37]" />
                    <span>{step.timeframe}</span>
                  </div>

                  {isActive && (
                    <div className="w-2 h-2 bg-[#7B182B] rounded-full mx-auto mt-2 animate-ping" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Focused Step Detail Bento Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStep.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl p-6 sm:p-10 backdrop-blur-2xl bg-white/95 border border-stone-200/80 shadow-[0_16px_40px_rgba(0,0,0,0.04)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Deep Step Description */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider bg-[#5A0F1D]/10 text-[#5A0F1D] border border-[#5A0F1D]/20">
                    {selectedStep.phase}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Expected Timeline: {selectedStep.timeframe}</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                    {selectedStep.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#3B0710] tracking-tight">
                    {selectedStep.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 font-sans-body leading-relaxed">
                    {selectedStep.shortDesc}
                  </p>
                </div>

                {/* Key Action Checkpoints */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs uppercase font-extrabold tracking-wider text-stone-600">
                    What occurs in this stage:
                  </div>
                  <div className="space-y-2.5">
                    {selectedStep.detailedPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-stone-50/80 border border-stone-100">
                        <CheckCircle2 className="w-4 h-4 text-[#163A24] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Between Steps */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    disabled={selectedStep.id === 1}
                    onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                    className="px-4 py-2 rounded-xl text-xs font-semibold border border-stone-200 text-stone-600 hover:bg-stone-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    ← Previous Step
                  </button>
                  <button
                    disabled={selectedStep.id === steps.length}
                    onClick={() => setActiveStep((prev) => Math.min(steps.length, prev + 1))}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next Step →
                  </button>
                </div>
              </div>

              {/* Right Column: Key Deliverables Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#3B0710] to-[#5A0F1D] text-white shadow-xl space-y-5 relative overflow-hidden border border-white/10">
                  {/* Subtle accent glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-200">Stage Guarantee</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#D4AF37] font-bold">100% Free / No Obligation</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-[11px] text-stone-300 uppercase tracking-wide font-medium">Who Is Involved</div>
                      <div className="text-sm sm:text-base font-bold text-white mt-0.5">{selectedStep.whoInvolved}</div>
                    </div>

                    <div>
                      <div className="text-[11px] text-stone-300 uppercase tracking-wide font-medium">Parent Deliverable</div>
                      <div className="text-sm sm:text-base font-bold text-[#D4AF37] mt-0.5">{selectedStep.deliverable}</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/10 border border-white/10 text-xs text-stone-200 leading-relaxed">
                      <span className="font-bold text-white">Parent Peace of Mind:</span> You never pay a penny or commit to regular tuition until you have met the teacher, reviewed the baseline diagnostic, and approved your child's cohort.
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#inquiry-form"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#D4AF37] text-[#3B0710] hover:bg-[#E5C358] transition-all shadow-md"
                    >
                      <span>Begin Step 1: Submit Form</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Help & Questions */}
        <div className="mt-12 text-center text-xs text-stone-500 flex flex-wrap items-center justify-center gap-2">
          <span>Have a question before submitting?</span>
          <a href="tel:+447768639106" className="text-[#5A0F1D] font-bold underline hover:text-[#7B182B]">
            Call Admissions on +44 7768 639106
          </a>
          <span>or chat with us anytime.</span>
        </div>

      </div>
    </section>
  );
}
