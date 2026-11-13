import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  GraduationCap, 
  Compass
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

  // Solar system orbits:
  // Inner orbit: 3 countries including India (prominently featured)
  const innerOrbitCountries = [
    { name: 'India', flagImg: '/assets/flags/in.png', angle: 0, highlight: true },
    { name: 'UK', flagImg: '/assets/flags/gb.png', angle: 120 },
    { name: 'Germany', flagImg: '/assets/flags/de.png', angle: 240 },
  ];

  // Outer orbit: 4 countries
  const outerOrbitCountries = [
    { name: 'USA', flagImg: '/assets/flags/us.png', angle: 45 },
    { name: 'Canada', flagImg: '/assets/flags/ca.png', angle: 135 },
    { name: 'Australia', flagImg: '/assets/flags/au.png', angle: 225 },
    { name: 'France', flagImg: '/assets/flags/fr.png', angle: 315 },
  ];

  return (
    <section id="hero" className="relative pt-24 pb-10 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 lg:pt-36 lg:pb-18 overflow-hidden bg-gradient-to-b from-slate-50 via-[#F5F7FA] to-white">
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#176B87]/12 via-[#D6AD60]/12 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#176B87]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#102A43]/6 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Introductory Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#102A43]/5 border border-[#176B87]/20 text-[#102A43] text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-[#176B87] animate-pulse" />
              <span>Your Personal Guide to Academic Success</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#102A43] leading-[1.16] tracking-tight mb-5">
              Your Global Journey Begins With The{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#102A43] via-[#176B87] to-[#102A43]">
                Right Guidance.
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#D6AD60] to-[#176B87] rounded-full opacity-70" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-[#64748B] font-normal leading-relaxed mb-7 max-w-2xl mx-auto lg:mx-0">
              Your dreams deserve the right direction. SJ Consultants helps students navigate their overseas education journey with personalised guidance, transparent advice and end-to-end support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-8">
              <a
                href={consultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#102A43] hover:bg-[#176B87] text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#D6AD60] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                onClick={handleScrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#102A43] border border-slate-300/80 font-medium text-sm sm:text-base px-6 py-3.5 rounded-full transition-all duration-200 shadow-2xs hover:border-[#176B87]/40 hover:text-[#176B87]"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Trust Indicators Strip */}
            <div className="pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7">
              {/* Overlapping student avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-2xs"
                    src="/assets/images/student_avatar1.jpg"
                    alt="Student mentee"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-2xs"
                    src="/assets/images/student_avatar2.jpg"
                    alt="Student mentee"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-2xs"
                    src="/assets/images/student_avatar3.jpg"
                    alt="Student mentee"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover shadow-2xs"
                    src="/assets/images/student_avatar4.jpg"
                    alt="Student mentee"
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[#102A43]">
                    1,000+ Students Guided
                  </div>
                  <div className="text-[11px] text-[#64748B]">
                    Across top global destinations
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#176B87]/10 flex items-center justify-center text-[#176B87]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[#102A43]">
                    6+ Years
                  </div>
                  <div className="text-[11px] text-[#64748B]">
                    Industry Experience
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#D6AD60]/15 flex items-center justify-center text-[#B88E3E]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-bold text-[#102A43]">
                    100% Transparent
                  </div>
                  <div className="text-[11px] text-[#64748B]">
                    Personalised Advice
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Solar-System-Inspired Planetary Orbit Animation with clearly visible orbits */}
          <motion.div 
            className="lg:col-span-5 relative flex items-center justify-center py-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {/* Main Solar System Container */}
            <div className="relative w-[300px] h-[300px] min-[390px]:w-[340px] min-[390px]:h-[340px] sm:w-[390px] sm:h-[390px] md:w-[440px] md:h-[440px] lg:w-[470px] lg:h-[470px] flex items-center justify-center select-none group">
              
              {/* Outer Orbit Guide Track - Clearly Visible Gold Accent with Luminous Glow */}
              <div className="absolute inset-1 rounded-full border-2 border-dashed border-[#D6AD60]/80 shadow-[0_0_24px_rgba(214,173,96,0.28)] pointer-events-none" />

              {/* Inner Orbit Guide Track - Clearly Visible Teal Accent with Luminous Glow */}
              <div className="absolute inset-11 min-[390px]:inset-12 sm:inset-14 md:inset-16 rounded-full border-2 border-dashed border-[#176B87]/75 shadow-[0_0_20px_rgba(23,107,135,0.25)] pointer-events-none" />

              {/* ============================================================== */}
              {/* REVOLVING OUTER ORBIT (4 countries: USA, Canada, Australia, France) */}
              {/* ============================================================== */}
              <div className="absolute inset-1 rounded-full animate-orbit-outer hover:[animation-play-state:paused] pointer-events-auto">
                {outerOrbitCountries.map((c) => {
                  const rad = (c.angle * Math.PI) / 180;
                  const radiusPct = 48; // percentage radius
                  const x = 50 + radiusPct * Math.cos(rad);
                  const y = 50 + radiusPct * Math.sin(rad);

                  return (
                    <div
                      key={c.name}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ top: `${y}%`, left: `${x}%` }}
                    >
                      {/* Counter-rotation to keep badge upright as the orbit revolves */}
                      <div className="animate-counter-outer hover:[animation-play-state:paused]">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-xs shadow-[0_2px_10px_rgba(214,173,96,0.20)] border border-[#D6AD60]/50 hover:border-[#D6AD60] hover:shadow-lg transition-all duration-200 cursor-pointer">
                          <img
                            src={c.flagImg}
                            alt={`${c.name} flag`}
                            className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover shrink-0 shadow-2xs"
                          />
                          <span className="text-[10px] sm:text-xs font-bold text-[#102A43] whitespace-nowrap">
                            {c.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ============================================================== */}
              {/* REVOLVING INNER ORBIT (3 countries: India (featured), UK, Germany) */}
              {/* ============================================================== */}
              <div className="absolute inset-11 min-[390px]:inset-12 sm:inset-14 md:inset-16 rounded-full animate-orbit-inner hover:[animation-play-state:paused] pointer-events-auto">
                {innerOrbitCountries.map((c) => {
                  const rad = (c.angle * Math.PI) / 180;
                  const radiusPct = 48; // percentage radius of inner container
                  const x = 50 + radiusPct * Math.cos(rad);
                  const y = 50 + radiusPct * Math.sin(rad);

                  return (
                    <div
                      key={c.name}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ top: `${y}%`, left: `${x}%` }}
                    >
                      {/* Counter-rotation to keep badge upright */}
                      <div className="animate-counter-inner hover:[animation-play-state:paused]">
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-md transition-all duration-200 cursor-pointer ${
                          c.highlight 
                            ? 'bg-gradient-to-r from-amber-50 via-white to-orange-50 border-2 border-amber-500 shadow-[0_2px_12px_rgba(245,158,11,0.35)] ring-2 ring-amber-400/20 hover:scale-105' 
                            : 'bg-white/95 backdrop-blur-xs border border-[#176B87]/50 shadow-[0_2px_10px_rgba(23,107,135,0.18)] hover:border-[#176B87]'
                        }`}>
                          <img
                            src={c.flagImg}
                            alt={`${c.name} flag`}
                            className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover shrink-0 shadow-2xs"
                          />
                          <span className={`text-[10px] sm:text-xs font-bold whitespace-nowrap ${
                            c.highlight ? 'text-amber-950 font-extrabold' : 'text-[#102A43]'
                          }`}>
                            {c.name}
                          </span>
                          {c.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ============================================================== */}
              {/* CENTRAL FOCAL POINT: Student Photograph in Circular Orbit Frame */}
              {/* ============================================================== */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full p-2 bg-gradient-to-tr from-[#102A43] via-[#176B87] to-[#D6AD60] shadow-2xl z-20">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative">
                  <img
                    src="/assets/images/hero_student_solo.jpg"
                    alt="Ambition and Global Education - SJ Consultants Mentee"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle inner overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Trust Badge: Top Left - Expert Counselor */}
              <div className="absolute -top-1 left-2 sm:-left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-2 z-30 pointer-events-none">
                <div className="w-7 h-7 rounded-full bg-[#176B87]/10 flex items-center justify-center text-[#176B87]">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-[#102A43] leading-none">6+ Years Exp</div>
                  <div className="text-[9px] text-[#64748B]">Expert Mentorship</div>
                </div>
              </div>

              {/* Floating Trust Badge: Bottom Right - 1000+ Stories */}
              <div className="absolute -bottom-2 right-2 sm:-right-2 bg-[#102A43] text-white px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 z-30 pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-[#D6AD60] animate-pulse" />
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-none">
                    1,000+ Students
                  </div>
                  <div className="text-[9px] text-slate-300">Global Admits</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
