import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Sparkles,
  Info,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';
import { TESTIMONIAL_PLACEHOLDERS } from '../data/consultancyData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F5F7FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176B87]/10 text-[#176B87] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight">
            Dreams We've Helped Take Places.
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
            Every successful journey starts with the right guidance.
          </p>

          {/* Compliance Notice: Clearly Identifiable Placeholders as requested */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-medium">
            <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>
              Testimonial Wall • Identifiable student mentee placeholders awaiting client-verified assets
            </span>
          </div>
        </div>

        {/* Static Testimonial Grid: 3 cols on desktop, 2 cols on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIAL_PLACEHOLDERS.map((item, index) => (
            <motion.div
              key={item.id}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:border-[#176B87]/30 relative"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              {/* Background quote watermark */}
              <div className="absolute top-5 right-5 text-slate-100 group-hover:text-slate-200/70 transition-colors pointer-events-none">
                <Quote className="w-10 h-10" />
              </div>

              <div className="relative z-10">
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100/80">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Mentee
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-[14.5px] text-[#172B3A] font-normal leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Mentee & Destination Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 relative z-10">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Initials Avatar */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#102A43] to-[#176B87] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-[#102A43] truncate">
                      {item.namePlaceholder}
                    </div>
                    <div className="text-[11px] text-[#64748B] truncate">
                      {item.coursePlaceholder}
                    </div>
                  </div>
                </div>

                {/* Destination Flag Pill */}
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/60 px-2 py-1 rounded-lg shrink-0">
                  <img
                    src={item.flagImg}
                    alt={item.targetCountry}
                    className="w-4 h-4 rounded-full object-cover"
                  />
                  <span className="text-[10px] font-bold text-slate-700 hidden sm:inline">
                    {item.targetCountry}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 text-center shadow-xs">
            <Users className="w-5 h-5 text-[#176B87] mx-auto mb-1.5" />
            <div className="text-lg sm:text-xl font-extrabold text-[#102A43]">1,000+</div>
            <div className="text-xs text-[#64748B] font-medium">Students Mentored</div>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 text-center shadow-xs">
            <Award className="w-5 h-5 text-[#D6AD60] mx-auto mb-1.5" />
            <div className="text-lg sm:text-xl font-extrabold text-[#102A43]">6+ Years</div>
            <div className="text-xs text-[#64748B] font-medium">Industry Standing</div>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 text-center shadow-xs">
            <ShieldCheck className="w-5 h-5 text-[#176B87] mx-auto mb-1.5" />
            <div className="text-lg sm:text-xl font-extrabold text-[#102A43]">100%</div>
            <div className="text-xs text-[#64748B] font-medium">Transparent Advisory</div>
          </div>
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 text-center shadow-xs">
            <Sparkles className="w-5 h-5 text-[#D6AD60] mx-auto mb-1.5" />
            <div className="text-lg sm:text-xl font-extrabold text-[#102A43]">8+ Key</div>
            <div className="text-xs text-[#64748B] font-medium">Global Destinations</div>
          </div>
        </div>

      </div>
    </section>
  );
}
