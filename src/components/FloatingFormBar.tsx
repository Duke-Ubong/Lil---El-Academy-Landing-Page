import { useState, useEffect } from "react";
import { ArrowDown, Sparkles, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FloatingFormBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearForm, setIsNearForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 320;
      setIsVisible(shouldShow);

      // Check if user is currently viewing the inquiry form section
      const formEl = document.getElementById("inquiry-form");
      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        // If form is currently occupying the middle of the viewport
        const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > 200;
        setIsNearForm(inView);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formEl = document.getElementById("inquiry-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const firstInput = document.getElementById("parentName");
        if (firstInput) {
          firstInput.focus();
        }
      }, 500);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && !isNearForm && (
        <motion.aside
          aria-label="Quick Enrollment Dock"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-5 right-4 sm:right-8 z-40 max-w-[calc(100vw-2rem)]"
        >
          <div className="flex items-center gap-2 p-1.5 rounded-full backdrop-blur-2xl bg-[#3B0710]/90 border border-white/20 shadow-[0_12px_36px_rgba(59,7,16,0.35),0_2px_8px_rgba(0,0,0,0.2)] text-white">
            
            {/* Direct Form Jump Button */}
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-[#D4AF37] to-[#E6C665] text-[#3B0710] hover:brightness-105 transition-all shadow-sm group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#5A0F1D]" />
              <span>Enroll / Free Diagnostic</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            {/* Direct Phone link */}
            <a
              href="tel:+447768639106"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-stone-200 hover:text-white hover:bg-white/10 transition-colors"
              title="Call Lil-El Admissions"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>Admissions</span>
            </a>

          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
