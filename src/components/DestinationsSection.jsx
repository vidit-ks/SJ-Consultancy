import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowUpRight, GraduationCap, Building2, MessageCircle } from 'lucide-react';
import { BRAND, DESTINATIONS, TOP_UNIVERSITIES_SHOWCASE } from '../data/consultancyData';

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-14 sm:py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A43]/5 text-[#102A43] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Globe className="w-3.5 h-3.5 text-[#176B87]" />
            <span>Study Destinations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Your World of Opportunities
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed">
            Explore global education destinations and discover universities that match your ambitions.
          </p>
        </div>

        {/* Compact Country Cards Grid: 4 cols on desktop, 2 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-14">
          {DESTINATIONS.map((dest, index) => {
            const whatsappUrl = BRAND.whatsapp.getUrl(dest.whatsappQuery);

            return (
              <motion.a
                key={dest.code}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white hover:bg-slate-50/70 rounded-xl p-3 sm:p-4 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between hover:-translate-y-0.5 cursor-pointer select-none"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
              >
                <div>
                  {/* Flag & Arrow Top Row */}
                  <div className="flex items-center justify-between mb-2 sm:mb-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                      <img
                        src={dest.flagImg}
                        alt={`${dest.name} flag`}
                        className="w-full h-full object-cover rounded-lg shadow-2xs"
                      />
                    </div>

                    <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#102A43] text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
                      <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-[#D6AD60] transition-colors" />
                    </div>
                  </div>

                  {/* Country Name */}
                  <h3 className="text-xs sm:text-sm md:text-[15px] font-bold text-[#102A43] group-hover:text-[#176B87] transition-colors mb-1 leading-snug">
                    {dest.name}
                  </h3>

                  {/* Status / Category Highlight Badge */}
                  <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#176B87] bg-[#176B87]/10 px-1.5 py-0.5 rounded mb-2">
                    <GraduationCap className="w-2.5 h-2.5" />
                    <span>Top Hub</span>
                  </div>

                  {/* Popular Universities */}
                  <div className="pt-1.5 border-t border-slate-100">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block">
                      Popular:
                    </span>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-tight truncate">
                      {dest.popularUniversities}
                    </p>
                  </div>
                </div>

                {/* Bottom Enquire Row */}
                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#176B87] font-semibold">
                  <span className="flex items-center gap-1 text-[#25D366]">
                    <MessageCircle className="w-3 h-3 fill-current" />
                    <span className="text-[10px]">Enquire</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {dest.code}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Static University Showcase (No horizontal scrolling, cleanly wrapped grid) */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#176B87] mb-1.5">
              <Building2 className="w-3.5 h-3.5" />
              <span>Global Institution Directory</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#102A43] tracking-tight">
              Students Admitted to Top Universities Worldwide
            </h3>
            <p className="text-[11px] sm:text-xs text-[#64748B] mt-1">
              Examples of premier global institutions chosen by ambitious international students.
            </p>
          </div>

          {/* Static responsive grid: 5 cols on desktop, 3 cols on tablet, 2 cols on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 max-w-6xl mx-auto">
            {TOP_UNIVERSITIES_SHOWCASE.map((uni) => (
              <div
                key={uni.name}
                className="flex items-center gap-2 bg-slate-50 hover:bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all duration-200 text-left"
              >
                <div className="w-6 h-6 rounded-md bg-white border border-slate-200/80 flex items-center justify-center text-xs shrink-0 shadow-2xs">
                  {uni.flag}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs font-bold text-[#102A43] truncate leading-tight">
                    {uni.name}
                  </div>
                  <div className="text-[9px] text-slate-400 truncate">
                    {uni.country}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
