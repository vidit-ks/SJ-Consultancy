import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance every 6 seconds if not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_PLACEHOLDERS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIAL_PLACEHOLDERS.length) % TESTIMONIAL_PLACEHOLDERS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_PLACEHOLDERS.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F5F7FA] relative overflow-hidden">
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
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Every successful journey starts with the right guidance.
          </p>

          {/* Compliance Notice: Clearly Identifiable Placeholders as requested */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-medium">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              Curated Testimonial Showcase • Identifiable student placeholders awaiting client-verified assets
            </span>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card View */}
          <div className="relative min-h-[300px] sm:min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full bg-white rounded-3xl p-7 sm:p-9 md:p-11 shadow-lg border border-slate-200/80 relative"
              >
                {/* Quote Icon watermark */}
                <div className="absolute top-6 right-6 text-slate-100 pointer-events-none">
                  <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
                </div>

                <div className="relative z-10">
                  {/* Top row: Stars & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <img
                        src={TESTIMONIAL_PLACEHOLDERS[currentIndex].flagImg}
                        alt="Country flag"
                        className="w-5 h-5 rounded-full object-cover shadow-2xs"
                      />
                      <span className="text-xs font-bold text-[#102A43] bg-slate-100 px-3 py-1 rounded-full">
                        Destination: {TESTIMONIAL_PLACEHOLDERS[currentIndex].targetCountry}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Verified Mentee
                      </span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-base sm:text-lg md:text-xl text-[#172B3A] font-medium leading-relaxed italic mb-8">
                    "{TESTIMONIAL_PLACEHOLDERS[currentIndex].quote}"
                  </blockquote>

                  {/* Author / Mentee Details */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-3.5">
                      {/* Initials Avatar */}
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#102A43] to-[#176B87] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                        {TESTIMONIAL_PLACEHOLDERS[currentIndex].initials}
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold text-[#102A43]">
                          {TESTIMONIAL_PLACEHOLDERS[currentIndex].namePlaceholder}
                        </div>
                        <div className="text-xs text-[#64748B]">
                          {TESTIMONIAL_PLACEHOLDERS[currentIndex].coursePlaceholder}
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:block text-right">
                      <span className="text-xs font-semibold text-[#176B87] bg-[#176B87]/10 px-3 py-1 rounded-full">
                        {TESTIMONIAL_PLACEHOLDERS[currentIndex].highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8 px-2">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 rounded-full bg-white text-[#102A43] hover:bg-[#102A43] hover:text-white shadow-md border border-slate-200 transition-all duration-200 focus:outline-none hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots Pagination */}
            <div className="flex items-center gap-2">
              {TESTIMONIAL_PLACEHOLDERS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-[#102A43]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="p-3 rounded-full bg-white text-[#102A43] hover:bg-[#102A43] hover:text-white shadow-md border border-slate-200 transition-all duration-200 focus:outline-none hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 text-center shadow-xs">
            <Users className="w-6 h-6 text-[#176B87] mx-auto mb-2" />
            <div className="text-xl font-extrabold text-[#102A43]">1,000+</div>
            <div className="text-xs text-[#64748B] font-medium">Students Mentored</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 text-center shadow-xs">
            <Award className="w-6 h-6 text-[#D6AD60] mx-auto mb-2" />
            <div className="text-xl font-extrabold text-[#102A43]">6+ Years</div>
            <div className="text-xs text-[#64748B] font-medium">Industry Standing</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 text-center shadow-xs">
            <ShieldCheck className="w-6 h-6 text-[#176B87] mx-auto mb-2" />
            <div className="text-xl font-extrabold text-[#102A43]">100%</div>
            <div className="text-xs text-[#64748B] font-medium">Transparent Advisory</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 text-center shadow-xs">
            <Sparkles className="w-6 h-6 text-[#D6AD60] mx-auto mb-2" />
            <div className="text-xl font-extrabold text-[#102A43]">8+ Key</div>
            <div className="text-xs text-[#64748B] font-medium">Global Destinations</div>
          </div>
        </div>

      </div>
    </section>
  );
}

