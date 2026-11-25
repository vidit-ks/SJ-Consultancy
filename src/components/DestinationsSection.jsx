import React from 'react';
import { Globe, ArrowUpRight, GraduationCap, Building2, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND, DESTINATIONS, TOP_UNIVERSITIES_SHOWCASE } from '../data/consultancyData';

export default function DestinationsSection() {
  const enquireNowUrl = "https://wa.me/919310409011?text=Hello%20SJ%20Consultants%2C%20I%20would%20like%20to%20enquire%20about%20studying%20abroad.";

  return (
    <section id="destinations" className="py-16 sm:py-20 md:py-24 bg-[#0B1D2F] text-white relative overflow-hidden">
      {/* Decorative ambient glowing accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#176B87]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#D6AD60]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D6AD60]/30 text-[#D6AD60] text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Study Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Your World of Opportunities
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Explore 12 premier global education destinations and discover universities that match your ambitions.
          </p>
        </div>

        {/* 12 Compact Country Cards: 6 cols on desktop/laptop (2 rows of 6), 3-4 on tablet, 2 on mobile (6 rows of 2) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3 xl:gap-3.5 mb-10">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.code}
              className="group relative bg-white hover:bg-slate-50/95 rounded-2xl p-3 sm:p-3.5 text-[#102A43] shadow-lg hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 border border-white/20 hover:border-[#D6AD60]/80 flex flex-col justify-between select-none"
            >
              <div>
                {/* Flag & Category Top Row */}
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center p-1 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img
                      src={dest.flagImg}
                      alt={`${dest.name} flag`}
                      className="w-full h-full object-cover rounded shadow-2xs"
                    />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                    {dest.code}
                  </span>
                </div>

                {/* Country Name */}
                <h3 className="text-xs sm:text-sm font-bold text-[#102A43] group-hover:text-[#176B87] transition-colors mb-1 leading-snug truncate">
                  {dest.name}
                </h3>

                {/* Status / Category Highlight Badge */}
                <div className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-[#176B87] bg-[#176B87]/10 px-1.5 py-0.5 rounded mb-2">
                  <GraduationCap className="w-2.5 h-2.5" />
                  <span>Top Hub</span>
                </div>

                {/* Popular Universities */}
                <div className="pt-1.5 border-t border-slate-100">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
                    Popular:
                  </span>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 font-medium leading-tight line-clamp-2">
                    {dest.popularUniversities}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Single Centered "Enquire Now" Button below all 10 country cards */}
        <div className="text-center mb-16 sm:mb-20">
          <a
            href={enquireNowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D6AD60] to-[#E7C887] hover:from-[#c59c4f] hover:to-[#D6AD60] text-[#102A43] font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-100 transition-all duration-200 group"
          >
            <MessageCircle className="w-5 h-5 text-[#102A43] fill-current" />
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4 text-[#102A43] group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-slate-400 mt-2.5">
            Connect directly with SJ Consultants on WhatsApp for free destination guidance
          </p>
        </div>

        {/* ============================================================== */}
        {/* Top Global Universities Showcase */}
        {/* Desktop & Laptop: Exact Static Grid */}
        {/* Mobile Screens: Smooth Continuous Horizontal Marquee */}
        {/* ============================================================== */}
        <div className="pt-10 border-t border-slate-700/60">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D6AD60] mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Global Institution Directory</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Students Admitted to Top Universities Worldwide
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
              Examples of premier global institutions chosen by ambitious international students.
            </p>
          </div>

          {/* Desktop & Laptop: Static 5x2 Grid with Authentic Vector Logos */}
          <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-6xl mx-auto">
            {TOP_UNIVERSITIES_SHOWCASE.map((uni) => (
              <div
                key={uni.name}
                className="flex items-center gap-3 bg-white/95 hover:bg-white p-3 rounded-xl border border-white/20 shadow-md hover:shadow-lg transition-all duration-200 text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center p-1 shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                  <img
                    src={uni.logo}
                    alt={`${uni.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#102A43] truncate leading-tight">
                    {uni.name}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate mt-0.5">
                    {uni.country}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Screens Only: Continuous Horizontal Marquee */}
          <div className="block md:hidden relative overflow-hidden w-full select-none py-1">
            {/* Soft gradient edge fade */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0B1D2F] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0B1D2F] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-3 w-max animate-marquee hover:[animation-play-state:paused]">
              {[...TOP_UNIVERSITIES_SHOWCASE, ...TOP_UNIVERSITIES_SHOWCASE].map((uni, idx) => (
                <div
                  key={`${uni.name}-${idx}`}
                  className="flex items-center gap-2.5 bg-white/95 px-3 py-2 rounded-xl border border-white/20 shadow-xs shrink-0 min-w-[210px] max-w-[230px]"
                >
                  <div className="w-7 h-7 rounded-md bg-slate-50 border border-slate-200/60 flex items-center justify-center p-1 shrink-0">
                    <img
                      src={uni.logo}
                      alt={`${uni.name} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-[#102A43] truncate leading-tight">
                      {uni.name}
                    </div>
                    <div className="text-[9px] text-slate-500 truncate">
                      {uni.country}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
