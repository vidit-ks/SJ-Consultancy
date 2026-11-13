import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowUpRight, GraduationCap, Building2, MessageCircle } from 'lucide-react';
import { BRAND, DESTINATIONS, TOP_UNIVERSITIES_SHOWCASE } from '../data/consultancyData';

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* A. Section Heading (AdmitKard structure) */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A43]/5 text-[#102A43] text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5 text-[#176B87]" />
            <span>Study Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight">
            Your World of Opportunities
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
            Explore global education destinations and discover universities that match your ambitions.
          </p>
        </div>

        {/* B & C. Country Cards Grid: 4 cols on desktop, 2 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-16">
          {DESTINATIONS.map((dest, index) => {
            const whatsappUrl = BRAND.whatsapp.getUrl(dest.whatsappQuery);

            return (
              <motion.a
                key={dest.code}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white hover:bg-slate-50/70 rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer select-none"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <div>
                  {/* 1. Country Flag at the top & Arrow */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1.5 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                      <img
                        src={dest.flagImg}
                        alt={`${dest.name} flag`}
                        className="w-full h-full object-cover rounded-xl shadow-2xs"
                      />
                    </div>

                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 group-hover:bg-[#102A43] text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 group-hover:text-[#D6AD60] transition-colors" />
                    </div>
                  </div>

                  {/* 2. Country Name */}
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#102A43] group-hover:text-[#176B87] transition-colors mb-1">
                    {dest.name}
                  </h3>

                  {/* 3. University Count / Status Highlight */}
                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#176B87] bg-[#176B87]/10 px-2 py-0.5 rounded-md mb-3">
                    <GraduationCap className="w-3 h-3" />
                    <span>Top Ranked Hub</span>
                  </div>

                  {/* 4. Popular Universities List */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
                      Popular Universities:
                    </span>
                    <p className="text-xs text-slate-600 font-medium leading-snug">
                      {dest.popularUniversities}
                    </p>
                  </div>
                </div>

                {/* Bottom Explore Indicator */}
                <div className="mt-4 pt-2.5 border-t border-slate-50 flex items-center justify-between text-xs text-[#176B87] font-semibold">
                  <span className="flex items-center gap-1 text-[11px] text-[#25D366]">
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Enquire</span>
                  </span>
                  <span className="text-[11px] text-slate-400 group-hover:text-[#102A43] font-mono">
                    {dest.code}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* E. University Showcase Below Destinations (AdmitKard Reference) */}
        <div className="mt-8 pt-10 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#176B87] mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Global Institution Directory</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#102A43] tracking-tight">
              Students Admitted to Top Universities Worldwide
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-1.5">
              Examples of premier global institutions chosen by ambitious international students.
            </p>
          </div>

          {/* Horizontal strip of university badges (scrollable on mobile) */}
          <div className="overflow-x-auto pb-4 pt-1 scrollbar-none">
            <div className="flex items-center justify-start lg:justify-center gap-3 sm:gap-4 min-w-max px-2">
              {TOP_UNIVERSITIES_SHOWCASE.map((uni) => (
                <div
                  key={uni.name}
                  className="flex items-center gap-2.5 bg-slate-50 hover:bg-white px-4 py-2.5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-sm transition-all duration-200 text-left"
                >
                  <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center text-xs shadow-2xs">
                    {uni.flag}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#102A43] whitespace-nowrap">
                      {uni.name}
                    </div>
                    <div className="text-[10px] text-slate-400">
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
