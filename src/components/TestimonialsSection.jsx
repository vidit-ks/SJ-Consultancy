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
    <section id="testimonials" className="py-14 sm:py-16 md:py-20 bg-[#F5F7FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#176B87]/10 text-[#176B87] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Dreams We've Helped Take Places.
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed">
            Every successful journey starts with the right guidance.
          </p>

          {/* Compliance Notice */}
          <div className="mt-3.5 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[11px] sm:text-xs font-medium">
            <Info className="w-3 h-3 text-amber-600 shrink-0" />
            <span>
              Testimonial Wall • Identifiable student mentee placeholders awaiting client-verified assets
            </span>
          </div>
        </div>

        {/* Compact Static Testimonial Grid: 3 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4.5">
          {TESTIMONIAL_PLACEHOLDERS.map((item, index) => (
            <motion.div
              key={item.id}
              className="group bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5 hover:border-[#176B87]/30 relative"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              {/* Background quote watermark */}
              <div className="absolute top-3.5 right-3.5 text-slate-100 group-hover:text-slate-200/60 transition-colors pointer-events-none">
                <Quote className="w-7 h-7" />
              </div>

              <div className="relative z-10">
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100/80">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    Verified Mentee
                  </span>
                </div>

                {/* Compact Review Text */}
                <p className="text-xs sm:text-[13px] text-[#172B3A] font-normal leading-relaxed italic mb-4">
                  "{item.quote}"
                </p>
              </div>

              {/* Mentee & Destination Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 relative z-10">
                <div className="flex items-center gap-2.5 min-w-0">
                  {/* Initials Avatar */}
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#102A43] to-[#176B87] text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-2xs">
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#102A43] truncate leading-tight">
                      {item.namePlaceholder}
                    </div>
                    <div className="text-[10px] text-[#64748B] truncate">
                      {item.coursePlaceholder}
                    </div>
                  </div>
                </div>

                {/* Destination Flag Pill */}
                <div className="flex items-center gap-1 bg-slate-50 border border-slate-200/60 px-1.5 py-0.5 rounded-md shrink-0">
                  <img
                    src={item.flagImg}
                    alt={item.targetCountry}
                    className="w-3.5 h-3.5 rounded-full object-cover"
                  />
                  <span className="text-[10px] font-bold text-slate-700 hidden sm:inline">
                    {item.targetCountry}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Trust Badges Strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/80 text-center shadow-2xs">
            <Users className="w-4 h-4 text-[#176B87] mx-auto mb-1" />
            <div className="text-base sm:text-lg font-extrabold text-[#102A43]">1,000+</div>
            <div className="text-[11px] text-[#64748B]">Students Mentored</div>
          </div>
          <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/80 text-center shadow-2xs">
            <Award className="w-4 h-4 text-[#D6AD60] mx-auto mb-1" />
            <div className="text-base sm:text-lg font-extrabold text-[#102A43]">6+ Years</div>
            <div className="text-[11px] text-[#64748B]">Industry Standing</div>
          </div>
          <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/80 text-center shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#176B87] mx-auto mb-1" />
            <div className="text-base sm:text-lg font-extrabold text-[#102A43]">100%</div>
            <div className="text-[11px] text-[#64748B]">Transparent Advice</div>
          </div>
          <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/80 text-center shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#D6AD60] mx-auto mb-1" />
            <div className="text-base sm:text-lg font-extrabold text-[#102A43]">11+ Key</div>
            <div className="text-[11px] text-[#64748B]">Destinations</div>
          </div>
        </div>

      </div>
    </section>
  );
}
