import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  GraduationCap, 
  CheckCircle2, 
  Globe2 
} from 'lucide-react';
import { BRAND } from '../data/consultancyData';

export default function HeroSection() {
  const consultationUrl = BRAND.whatsapp.getUrl(BRAND.whatsapp.consultationMsg);

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const orbitCountries = [
    { name: 'UK', flagImg: '/assets/flags/gb.png', top: '5%', left: '46%' },
    { name: 'USA', flagImg: '/assets/flags/us.png', top: '22%', left: '88%' },
    { name: 'Canada', flagImg: '/assets/flags/ca.png', top: '65%', left: '92%' },
    { name: 'Australia', flagImg: '/assets/flags/au.png', top: '88%', left: '60%' },
    { name: 'Germany', flagImg: '/assets/flags/de.png', top: '78%', left: '15%' },
    { name: 'France', flagImg: '/assets/flags/fr.png', top: '35%', left: '4%' },
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-[#F5F7FA] to-white">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#176B87]/10 via-[#D6AD60]/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#176B87]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#102A43]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Introductory Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A43]/5 border border-[#176B87]/20 text-[#102A43] text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#176B87] animate-pulse" />
              <span>Your Global Education Partner</span>
              <Sparkles className="w-3.5 h-3.5 text-[#D6AD60]" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#102A43] leading-[1.15] tracking-tight mb-6">
              Your Global Journey Begins With The{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#102A43] via-[#176B87] to-[#102A43]">
                Right Guidance.
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#D6AD60] to-[#176B87] rounded-full opacity-70" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#64748B] font-normal leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Your dreams deserve the right direction. SJ Consultants helps students navigate their overseas education journey with personalised guidance, transparent advice and end-to-end support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10">
              <a
                href={consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#102A43] hover:bg-[#176B87] text-white font-semibold text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#D6AD60] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                onClick={handleScrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#102A43] border border-slate-300/80 font-medium text-base px-6 py-3.5 rounded-full transition-all duration-200 shadow-xs hover:border-[#176B87]/40 hover:text-[#176B87]"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Trust Indicators Strip */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
              {/* Overlapping student avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                    src="/assets/images/student_avatar1.jpg"
                    alt="Student mentee"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                    src="/assets/images/student_avatar2.jpg"
                    alt="Student mentee"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                    src="/assets/images/student_avatar3.jpg"
                    alt="Student mentee"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                    src="/assets/images/student_avatar4.jpg"
                    alt="Student mentee"
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[#102A43]">
                    1,000+ Students Guided
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#64748B]">
                    Across top global destinations
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#176B87]/10 flex items-center justify-center text-[#176B87]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[#102A43]">
                    6+ Years
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#64748B]">
                    Industry Experience
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#D6AD60]/15 flex items-center justify-center text-[#B88E3E]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[#102A43]">
                    100% Transparent
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#64748B]">
                    Honest & Personal Advice
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Orbital Composition */}
          <motion.div 
            className="lg:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="relative w-72 sm:w-88 md:w-96 lg:w-[420px] aspect-square flex items-center justify-center">
              
              {/* Outer Orbit Dashed Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#176B87]/25 animate-[spin_50s_linear_infinite]" />
              
              {/* Inner Orbit Dashed Ring */}
              <div className="absolute inset-6 rounded-full border border-slate-200/80" />

              {/* Floating Country Flag Nodes along the orbit */}
              {orbitCountries.map((c) => (
                <div
                  key={c.name}
                  className="absolute p-1 sm:p-1.5 rounded-full bg-white shadow-md border border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#102A43] hover:scale-115 transition-transform duration-200 z-10"
                  style={{ top: c.top, left: c.left }}
                >
                  <img
                    src={c.flagImg}
                    alt={`${c.name} flag`}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover shadow-2xs"
                  />
                  <span className="hidden sm:inline pr-1 text-[11px] font-bold text-slate-700">{c.name}</span>
                </div>
              ))}

              {/* Central Student Portrait Circle */}
              <div className="relative w-52 sm:w-64 md:w-72 lg:w-80 aspect-square rounded-full p-2 bg-gradient-to-tr from-[#102A43] via-[#176B87] to-[#D6AD60] shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative">
                  <img
                    src="/assets/images/hero_student_solo.jpg"
                    alt="International student holding notebook"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle inner overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Chip 1: Top Left - Expert Counselor */}
              <motion.div 
                className="absolute -top-2 left-2 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5 z-20 animate-float-slow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-8 h-8 rounded-full bg-[#176B87]/10 flex items-center justify-center text-[#176B87]">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-bold text-[#102A43]">Expert Guidance</div>
                  <div className="text-[10px] text-[#64748B]">6+ Years Experience</div>
                </div>
              </motion.div>

              {/* Floating Chip 2: Bottom Left - Success Stories */}
              <motion.div 
                className="absolute -bottom-3 left-4 sm:-left-4 bg-[#102A43] text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20 animate-float-delayed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#D6AD60] animate-pulse" />
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1">
                    1,000+ Success Stories
                  </div>
                  <div className="text-[10px] text-slate-300">Top Global Universities</div>
                </div>
              </motion.div>

              {/* Floating Chip 3: Bottom Right - Certified Agency */}
              <motion.div 
                className="absolute -bottom-2 right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2 z-20 animate-float-slow"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-[#102A43]">Visa & Admissions</div>
                  <div className="text-[9px] text-[#64748B]">Transparent Process</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

