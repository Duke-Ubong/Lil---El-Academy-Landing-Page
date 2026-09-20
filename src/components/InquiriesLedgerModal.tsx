import React, { useState, useEffect } from "react";
import { X, RefreshCw, CheckCircle, AlertCircle, Mail, Phone, Calendar, BookOpen, ExternalLink, ShieldCheck } from "lucide-react";

interface InquiryItem {
  id: string;
  date: string;
  parentName: string;
  childName: string;
  keyStage: string;
  subject?: string;
  email: string;
  phone: string;
  message: string;
  emailDispatched: boolean;
  emailStatus?: string;
  diagnosticNotice?: string;
}

interface InquiriesLedgerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiriesLedgerModal({ isOpen, onClose }: InquiriesLedgerModalProps) {
  const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [testResult, setTestResult] = useState<{
    configured: boolean;
    authenticated?: boolean;
    message: string;
    instructions?: string[];
  } | null>(null);
  const [isTesting, setIsTesting] = useState(false);
  const [showSmtpGuide, setShowSmtpGuide] = useState(false);

  const fetchInquiries = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/inquiries");
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
      }
    } catch (err) {
      console.error("Failed to load inquiries:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestSmtp = async () => {
    setIsTesting(true);
    try {
      const res = await fetch("/api/test-smtp");
      if (res.ok) {
        const data = await res.json();
        setTestResult(data);
      }
    } catch (err) {
      setTestResult({
        configured: false,
        message: "Failed to connect to testing endpoint.",
      });
    } finally {
      setIsTesting(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
      handleTestSmtp();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="backdrop-blur-2xl bg-white/95 w-full max-w-4xl rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-white/80 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header: Apple Glass Dark */}
        <div className="bg-gradient-to-r from-[#4A0C17] to-[#3B0710] text-white px-6 py-4 flex items-center justify-between border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 text-[#D4AF37] flex items-center justify-center border border-white/10">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-white">
                Lil-El Academy Admissions Ledger
              </h3>
              <p className="text-[11px] text-stone-300">
                Staff Review Portal & Real-Time Inquiry Verification
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchInquiries}
              disabled={isLoading}
              title="Refresh Inquiries"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow bg-[#FAF9F6]">
          
          {/* SMTP Configuration Diagnostic Banner: Apple Glass Pill */}
          <div className="rounded-2xl border border-stone-200/80 backdrop-blur-md bg-white/80 p-4 shadow-2xs">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                {testResult?.authenticated ? (
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                )}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    SMTP Email Status
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-stone-800">
                    {testResult ? testResult.message : "Testing SMTP connection..."}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleTestSmtp}
                  disabled={isTesting}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                >
                  {isTesting ? "Testing..." : "Re-test Connection"}
                </button>
                <button
                  onClick={() => setShowSmtpGuide(!showSmtpGuide)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#5A0F1D]/10 hover:bg-[#5A0F1D]/15 text-[#5A0F1D] transition-colors"
                >
                  {showSmtpGuide ? "Hide Setup Guide" : "Gmail App Password Guide"}
                </button>
              </div>
            </div>

            {/* Expandable Guide for Google App Passwords */}
            {showSmtpGuide && (
              <div className="mt-4 pt-4 border-t border-stone-200/60 text-xs text-stone-700 space-y-2 bg-[#FAF5EB]/90 p-4 rounded-xl border-l-4 border-l-[#D4AF37]">
                <strong className="block font-bold text-[#5A0F1D] text-xs sm:text-sm">
                  How to Resolve "Invalid login: 534-5.7.9 Application-specific password required"
                </strong>
                <p className="text-[11px] leading-relaxed">
                  Google disables basic password logins for third-party SMTP servers. To allow Lil-El Academy to dispatch inquiry alert emails using your Gmail address:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-stone-600 font-mono text-[10px] sm:text-[11px] bg-white/80 p-3 rounded-lg border border-stone-200/60">
                  <li>Visit: <a href="https://myaccount.google.com/apppasswords" target="_blank" rel="noreferrer" className="text-[#5A0F1D] underline font-bold inline-flex items-center gap-1">https://myaccount.google.com/apppasswords <ExternalLink className="w-3 h-3 inline" /></a></li>
                  <li>Ensure <strong>2-Step Verification</strong> is enabled on your Google Account.</li>
                  <li>In the App Passwords tool, name your app <strong>"Lil-El Academy"</strong> and click <strong>Create</strong>.</li>
                  <li>Google will give you a 16-letter password (e.g. <code>abcd efgh ijkl mnop</code>).</li>
                  <li>Set <code>SMTP_PASS</code> in Settings or <code>.env</code> to this 16-character code.</li>
                </ol>
                <p className="text-stone-500 italic text-[11px]">
                  Note: All parent submissions are <strong>always stored securely</strong> in the admissions ledger below, even if email alerts are pending!
                </p>
              </div>
            )}
          </div>

          {/* Inquiries List Header */}
          <div className="flex items-center justify-between">
            <h4 className="font-heading font-bold text-sm sm:text-base text-stone-900">
              Registered Inquiries ({inquiries.length})
            </h4>
            <span className="text-xs text-stone-500">
              Automatically synchronized upon submission
            </span>
          </div>

          {/* List or Empty State */}
          {inquiries.length === 0 ? (
            <div className="text-center py-12 backdrop-blur-md bg-white/80 rounded-2xl border border-dashed border-stone-300/80 p-8">
              <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center mx-auto text-stone-400 mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <p className="font-semibold text-stone-700 text-sm">No Inquiries Submitted Yet</p>
              <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                When parents submit the enrollment consultation form, their details, key stage choices, and reference codes will appear here instantly.
              </p>
            </div>
          ) : (
            <div className="space-y-3.5">
              {inquiries.map((item) => (
                <div
                  key={item.id}
                  className="backdrop-blur-xl bg-white/85 rounded-2xl border border-white/90 p-5 shadow-2xs hover:shadow-xs transition-all space-y-3"
                >
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs bg-[#5A0F1D] text-white px-2.5 py-1 rounded-lg shadow-2xs">
                        {item.id}
                      </span>
                      <span className="text-xs font-semibold text-[#163A24] bg-emerald-50/80 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                        {item.keyStage}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-stone-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                      {item.emailDispatched ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full text-[11px]">
                          <CheckCircle className="w-3 h-3" />
                          Email Dispatched
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-amber-800 font-medium bg-amber-50 px-2 py-0.5 rounded-full text-[11px]" title={item.diagnosticNotice || "Email pending"}>
                          <AlertCircle className="w-3 h-3" />
                          Ledger Saved (Email Pending)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Student & Parent Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                    <div>
                      <span className="text-stone-400 block uppercase font-bold text-[9px] tracking-wider">Student</span>
                      <span className="font-semibold text-stone-800 text-xs sm:text-sm">{item.childName}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block uppercase font-bold text-[9px] tracking-wider">Parent / Guardian</span>
                      <span className="font-semibold text-stone-800">{item.parentName}</span>
                    </div>
                    <div>
                      <span className="text-stone-400 block uppercase font-bold text-[9px] tracking-wider">Email</span>
                      <a href={`mailto:${item.email}`} className="text-[#5A0F1D] underline truncate block">
                        {item.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-stone-400 block uppercase font-bold text-[9px] tracking-wider">Phone</span>
                      <a href={`tel:${item.phone}`} className="text-stone-700 font-semibold block">
                        {item.phone}
                      </a>
                    </div>
                  </div>

                  {/* Subject & Goals */}
                  <div className="bg-[#FAF5EB]/80 p-3 rounded-xl text-xs space-y-1 border border-stone-200/50">
                    <div className="text-stone-600">
                      <strong className="text-[#5A0F1D]">Subjects:</strong> {item.subject || "Maths, English, Science"}
                    </div>
                    {item.message && (
                      <div className="text-stone-700 pt-1 border-t border-stone-200/50 text-[11px]">
                        <strong className="text-stone-500">Learning Goals:</strong> {item.message}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-white/80 backdrop-blur-md px-6 py-3.5 border-t border-stone-200/70 flex items-center justify-between text-xs text-stone-500">
          <span>Lil-El Academy Admissions & Records Office</span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-full font-semibold bg-[#5A0F1D] text-white hover:bg-[#7B182B] transition-colors shadow-2xs"
          >
            Close Ledger
          </button>
        </div>

      </div>
    </div>
  );
}

