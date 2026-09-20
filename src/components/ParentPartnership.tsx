import React from "react";
import { Star, HeartHandshake, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function ParentPartnership() {
  const testimonials = [
    {
      quote:
        "Our son was drowning in Year 10 GCSE Maths at his mainstream school and was about to be dropped to Foundation tier. Within 8 weeks at Lil-El Academy, his tutor dismantled his anxiety and rebuilt his algebra foundations. He achieved an 8 in his mock!",
      parent: "Dr. Rachel & Mark O.",
      student: "Joshua's Parents (Year 10 Early Intervention, Maths & Chemistry)",
      rating: 5,
    },
    {
      quote:
        "The small cohort size is an absolute game-changer. In school, my daughter was too shy to raise her hand. In her Lil-El group of 5 students, she actively explains solutions. The Christian atmosphere reinforces the exact godly character values we teach at home.",
      parent: "Mrs. Grace A.",
      student: "Hannah's Mother (KS3 English & Science)",
      rating: 5,
    },
    {
      quote:
        "Unlike other tuition centres that take your money and hand you generic photocopies, Lil-El Academy sends bi-weekly diagnostic reports showing exactly what my Year 6 daughter mastered for her SATs. We felt genuinely supported.",
      parent: "Pastor David E.",
      student: "Miriam's Father (KS2 SATs Masterclass)",
      rating: 5,
    },
  ];

  return (
    <section id="partnership" className="relative py-24 bg-[#F8F8F6] text-stone-900 border-b border-stone-200/80 overflow-hidden">
      {/* Ambient glass light */}
      <div className="absolute top-10 right-1/3 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-1/4 w-96 h-96 bg-[#163A24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-200/60 backdrop-blur-md border border-stone-300/40 text-[#163A24] text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-[#163A24]" />
            <span>Parent-School Alliance</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#3B0710] tracking-tight">
            Partnering With Parents, Championing Children
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans-body max-w-2xl mx-auto leading-relaxed">
            We operate as an extension of your home. Hear how our small cohorts, faith-centered encouragement, and diagnostic mastery have transformed student lives.
          </p>
        </motion.div>

        {/* 3 Testimonials: Apple Glass Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl p-7 backdrop-blur-xl bg-white/80 border border-white/90 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col justify-between transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-stone-700 text-xs sm:text-sm italic font-sans-body leading-relaxed mb-6">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <div className="font-heading font-bold text-[#3B0710] text-sm">
                  {t.parent}
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5 font-sans-body">
                  {t.student}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Parent Guarantee Box: Apple Frosted Glass Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 max-w-3xl mx-auto rounded-3xl p-6 sm:p-7 backdrop-blur-xl bg-white/80 border border-[#D4AF37]/40 shadow-[0_12px_36px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] flex flex-col sm:flex-row items-center gap-5"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5A0F1D] to-[#3B0710] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-xs">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading text-base font-bold text-[#3B0710]">
              Our Uncompromising 14-Day Parent Guarantee
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed font-sans-body">
              If at any point during your child's first 14 days you feel the cohort dynamic or pace does not perfectly match their learning needs, we will adjust their growth plan immediately or refund your remaining unattended sessions with zero friction.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

