import React, { useState } from "react";
import { Send, CheckCircle, AlertTriangle, Loader2, Phone, Mail, Sparkles, Shield, Info, ExternalLink, ClipboardList, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import InquiriesLedgerModal from "./InquiriesLedgerModal";

interface FormState {
  parentName: string;
  childName: string;
  keyStage: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormState: FormState = {
  parentName: "",
  childName: "",
  keyStage: "KS4 - Year 10 (Early Intervention)",
  subject: "All Three Core Subjects (Maths, English, Science)",
  email: "",
  phone: "",
  message: "",
};

export default function ParentInquiryForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLedgerOpen, setIsLedgerOpen] = useState(false);
  const [showAdminDetails, setShowAdminDetails] = useState(false);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    message: string;
    notice?: string;
    emailDispatched?: boolean;
    smtpNotice?: {
      code: string;
      title: string;
      message: string;
      account?: string;
      instructions?: string[];
    };
  } | null>(null);

  const keyStageOptions = [
    "KS1 - Years 1 & 2 (Ages 5-7)",
    "KS2 - Years 3 & 4 (Ages 7-9)",
    "KS2 - Years 5 & 6 / SATs Prep (Ages 9-11)",
    "KS3 - Years 7 to 9 (Ages 11-14)",
    "KS4 - Year 10 (Early Intervention)",
    "KS4 - Year 11 (GCSE Exam Crunch)",
  ];

  const subjectOptions = [
    "All Three Core Subjects (Maths, English, Science)",
    "Mathematics Only",
    "English Language & Literature Only",
    "Science (Biology, Chemistry, Physics) Only",
    "Custom Combination (Specify in message)",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validation
    if (!formData.parentName.trim()) {
      setErrorMessage("Please provide your full name as parent or guardian.");
      return;
    }
    if (!formData.childName.trim()) {
      setErrorMessage("Please provide your child's name.");
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address (e.g. name@example.com).");
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setErrorMessage("Please enter a valid contact phone number so we can reach you for the assessment.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Unable to send inquiry. Please call +44 7768 639106 or email info@lilelacademy.com."
        );
      }

      setSuccessData({
        referenceId: data.referenceId || "LE-ADM",
        message: data.message || "Thank you! Your inquiry has been received.",
        notice: data.notice || data.devNotice,
        emailDispatched: data.emailDispatched,
        smtpNotice: data.smtpNotice,
      });
      setFormData(initialFormState);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="inquiry-form" className="relative py-24 bg-[#FAF9F6] text-stone-900 border-b border-stone-200/80 scroll-mt-14 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5A0F1D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-200/60 backdrop-blur-md border border-stone-300/40 text-[#5A0F1D] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Admissions & Assessment</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#3B0710] tracking-tight">
            Take the First Step Toward Your Child’s Brilliance
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans-body max-w-2xl mx-auto leading-relaxed">
            Book a complimentary 20-minute diagnostic consultation and personalized Child Growth Plan. No upfront fees, no locked-in contracts — just clear, honest guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Process (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Apple Dark Glass Admissions Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-7 sm:p-8 backdrop-blur-2xl bg-gradient-to-br from-[#4A0C17]/95 via-[#3B0710]/95 to-[#240309]/95 text-white border border-white/15 shadow-[0_20px_50px_rgba(59,7,16,0.25)] relative overflow-hidden"
            >
              {/* Subtle gold ambient glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Admissions Office
              </h3>
              <p className="text-xs text-stone-200/90 font-sans-body leading-relaxed mb-6">
                Prefer to speak with an educational director immediately? We welcome your calls and WhatsApp inquiries.
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href="tel:+447768639106"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/15 border border-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B38F26] text-[#3B0710] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">Direct Phone / WhatsApp</div>
                    <div className="font-bold text-white text-sm sm:text-base tracking-wide">+44 7768 639106</div>
                  </div>
                </a>

                <a
                  href="mailto:info@lilelacademy.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl backdrop-blur-md bg-white/10 hover:bg-white/15 border border-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B38F26] text-[#3B0710] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">Admissions Email</div>
                    <div className="font-bold text-white text-sm sm:text-base tracking-wide">info@lilelacademy.com</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 space-y-3 text-xs text-stone-300">
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Enhanced DBS verified Christian subject educators</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Strict maximum of 6 students per interactive cohort</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Bi-weekly diagnostic reports directly to parents</span>
                </div>
              </div>
            </motion.div>

            {/* Quick 3-Step Timeline Box: Apple Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-white/80 border border-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)]"
            >
              <h4 className="font-heading font-bold text-[#163A24] text-sm sm:text-base mb-4">
                What Happens After You Inquire?
              </h4>
              <ol className="space-y-3.5 text-xs text-stone-600">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#163A24] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</span>
                  <span><strong>24-Hour Contact:</strong> Our academic advisor calls you to understand your child's learning stage and targets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#163A24] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</span>
                  <span><strong>Diagnostic Assessment:</strong> Free online baseline session identifying exact gaps in Maths, English, or Science.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#163A24] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</span>
                  <span><strong>Cohort Placement:</strong> Match with a compatible 6-student group and receive a tailored 12-week growth plan.</span>
                </li>
              </ol>
            </motion.div>

          </div>

          {/* Right Column: Interactive Parent Registration Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-3xl p-7 sm:p-10 backdrop-blur-2xl bg-white/85 border border-white/95 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.95)] relative"
            >
              {/* If Submission Was Successful */}
              {successData ? (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
                    <CheckCircle className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold tracking-widest text-[#7B182B] uppercase">
                      Inquiry Dispatched Successfully
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#3B0710]">
                      Thank You, Parent!
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto">
                      We have received your details. Your inquiry is recorded under admissions reference:
                    </p>
                    <div className="inline-block bg-[#FAF5EB] border border-[#D4AF37]/60 px-4 py-2 rounded-xl font-mono font-bold text-base sm:text-lg text-[#5A0F1D] shadow-2xs">
                      {successData.referenceId}
                    </div>
                  </div>

                  <div className="backdrop-blur-md bg-stone-50/90 border border-stone-200/80 rounded-2xl p-5 text-left text-xs sm:text-sm text-stone-700 max-w-lg mx-auto space-y-2">
                    <div className="font-bold text-[#163A24]">Next Steps:</div>
                    <p>• Our senior academic advisor will review your child's profile.</p>
                    <p>• We will contact you via phone and email within <strong>24 hours</strong> to confirm your free diagnostic consultation.</p>
                    <p>• For urgent questions, call <a href="tel:+447768639106" className="text-[#5A0F1D] font-bold underline">+44 7768 639106</a>.</p>
                  </div>

                  {/* Staff Note if SMTP Notice */}
                  {successData.smtpNotice && (
                    <div className="bg-amber-50/90 border border-amber-200/80 rounded-2xl p-4 text-left text-xs text-amber-900 max-w-lg mx-auto space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-bold text-amber-900">
                          <Info className="w-4 h-4 text-amber-600 shrink-0" />
                          <span>Staff Note: Delivery Status</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setShowAdminDetails(!showAdminDetails)}
                          className="text-[11px] underline font-semibold text-amber-800 hover:text-amber-950"
                        >
                          {showAdminDetails ? "Hide Details" : "View Details"}
                        </button>
                      </div>

                      <p className="text-amber-800 text-[11px]">
                        ✓ <strong>Inquiry is safely recorded in the Admissions Ledger.</strong> To receive instant email alerts to {successData.smtpNotice.account || "your inbox"}, ensure the Google 16-character App Password is active.
                      </p>

                      {showAdminDetails && successData.smtpNotice.instructions && (
                        <div className="mt-2 pt-2 border-t border-amber-200/60 font-mono text-[10px] space-y-1 bg-white/70 p-2.5 rounded-lg">
                          {successData.smtpNotice.instructions.map((step, idx) => (
                            <div key={idx} className="text-stone-700">{step}</div>
                          ))}
                          <div className="pt-1">
                            <a
                              href="https://myaccount.google.com/apppasswords"
                              target="_blank"
                              rel="noreferrer"
                              className="text-[#5A0F1D] font-bold underline inline-flex items-center gap-1 font-sans"
                            >
                              Open Google App Passwords <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {successData.notice && !successData.smtpNotice && (
                    <p className="text-xs text-stone-400 italic">
                      {successData.notice}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => setSuccessData(null)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#5A0F1D] text-white hover:bg-[#7B182B] transition-colors shadow-xs"
                    >
                      <span>Submit Another Inquiry</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsLedgerOpen(true)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-stone-100/90 hover:bg-stone-200/90 text-stone-700 border border-stone-200/60 transition-colors"
                    >
                      <ClipboardList className="w-3.5 h-3.5 text-[#5A0F1D]" />
                      <span>Review in Admissions Ledger</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Form Intro */}
                  <div className="border-b border-stone-100 pb-3">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-stone-900">
                      Parent Registration & Diagnostic Booking
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Fields marked with <span className="text-red-500">*</span> are required.
                    </p>
                  </div>

                  {/* Error Banner */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-2xl bg-red-50/90 border border-red-200/80 text-red-700 text-xs flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold block">Please verify:</strong>
                        <span>{errorMessage}</span>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Parent Name & Child Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="parentName" className="block text-[11px] font-bold text-stone-700 mb-1">
                        Parent / Guardian Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        required
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7B182B]/20 focus:border-[#7B182B] transition-all placeholder:text-stone-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="childName" className="block text-[11px] font-bold text-stone-700 mb-1">
                        Child / Student Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        placeholder="e.g. David Jenkins"
                        required
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7B182B]/20 focus:border-[#7B182B] transition-all placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  {/* Row 2: Year Group & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="keyStage" className="block text-[11px] font-bold text-stone-700 mb-1">
                        Child's Year Group / Stage <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="keyStage"
                        name="keyStage"
                        value={formData.keyStage}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7B182B]/20 focus:border-[#7B182B] transition-all font-medium text-stone-800"
                      >
                        {keyStageOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-[11px] font-bold text-stone-700 mb-1">
                        Subject(s) of Interest
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7B182B]/20 focus:border-[#7B182B] transition-all font-medium text-stone-800"
                      >
                        {subjectOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-[11px] font-bold text-stone-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="parent@example.com"
                        required
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7B182B]/20 focus:border-[#7B182B] transition-all placeholder:text-stone-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[11px] font-bold text-stone-700 mb-1">
                        Contact Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 7123 456789"
                        required
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7B182B]/20 focus:border-[#7B182B] transition-all placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  {/* Row 4: Brief Message */}
                  <div>
                    <label htmlFor="message" className="block text-[11px] font-bold text-stone-700 mb-1">
                      Brief Message or Academic Goals <span className="text-stone-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Needs confidence in GCSE Maths problem-solving before Year 10 mock exams..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 bg-stone-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7B182B]/20 focus:border-[#7B182B] transition-all placeholder:text-stone-400 resize-y"
                    />
                  </div>

                  {/* Privacy Checkmark */}
                  <div className="text-[11px] text-stone-500 flex items-start gap-2 bg-stone-100/70 p-3 rounded-2xl border border-stone-200/60">
                    <Shield className="w-4 h-4 text-[#5A0F1D] shrink-0 mt-0.5" />
                    <span>
                      We respect your privacy. Details are stored strictly for Lil-El Academy admissions and diagnostic planning. We never share or sell parent information.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm sm:text-base font-bold bg-gradient-to-r from-[#5A0F1D] to-[#3B0710] text-white hover:opacity-95 shadow-[0_10px_25px_rgba(90,15,29,0.25)] transition-all disabled:opacity-60 disabled:cursor-not-allowed transform active:scale-98"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#D4AF37]" />
                          <span>Dispatching Inquiry to Admissions...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#D4AF37]" />
                          <span>Submit Parent Inquiry & Book Assessment</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </motion.div>
          </div>

        </div>

        {/* Admissions Staff & Testing Review Bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full backdrop-blur-md bg-white/70 border border-stone-200/80 shadow-2xs text-xs text-stone-600">
            <span className="font-semibold text-[#5A0F1D] flex items-center gap-1.5">
              <ClipboardList className="w-3.5 h-3.5 text-[#D4AF37]" />
              Staff & Admissions Review:
            </span>
            <span>View recorded inquiries and verify email delivery</span>
            <button
              type="button"
              onClick={() => setIsLedgerOpen(true)}
              className="font-bold text-[#5A0F1D] hover:text-[#7B182B] underline decoration-[#D4AF37] decoration-2 transition-colors ml-1"
            >
              Open Admissions Ledger & SMTP Status →
            </button>
          </div>
        </div>

      </div>

      {/* Admissions Ledger Modal */}
      <InquiriesLedgerModal
        isOpen={isLedgerOpen}
        onClose={() => setIsLedgerOpen(false)}
      />
    </section>
  );
}

