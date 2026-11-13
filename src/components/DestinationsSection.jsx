import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowUpRight, MessageCircle } from 'lucide-react';
import { BRAND, DESTINATIONS } from '../data/consultancyData';

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A43]/5 text-[#102A43] text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5 text-[#176B87]" />
            <span>Global Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight">
            Explore Your Study Abroad Destinations
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
            Discover global education opportunities and find the destination that matches your ambitions.
          </p>
        </div>

        {/* Interactive Country Selection Grid: 4 cols on desktop, 2 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {DESTINATIONS.map((dest, index) => {
            const whatsappUrl = BRAND.whatsapp.getUrl(dest.whatsappQuery);

            return (
              <motion.a
                key={dest.code}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-white hover:bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer select-none ${dest.accentColor}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                {/* Top: Country Flag & Arrow */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1.5 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                    <img
                      src={dest.flagImg}
                      alt={`${dest.name} flag`}
                      className="w-full h-full object-cover rounded-xl shadow-2xs"
                    />
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#102A43] text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-2xs">
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#D6AD60] transition-colors" />
                  </div>
                </div>

                {/* Bottom: Country Name & Explore Indicator */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-[#102A43] group-hover:text-[#176B87] transition-colors">
                      {dest.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#176B87] group-hover:text-[#102A43] transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Explore Opportunities</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Global Guidance Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#64748B]">
            Looking for a specific course or intake?{' '}
            <a
              href={BRAND.whatsapp.getUrl("Hello SJ Consultants, I need help deciding which country is best for my profile.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#176B87] hover:text-[#102A43] font-bold underline underline-offset-2"
            >
              Consult directly with our advisors on WhatsApp &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
