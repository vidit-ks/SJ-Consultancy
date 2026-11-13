import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight, MessageCircle, Compass } from 'lucide-react';
import { BRAND, DESTINATIONS } from '../data/consultancyData';

export default function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A43]/5 text-[#102A43] text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5 text-[#176B87]" />
            <span>Global Reach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight">
            The World Is Full of Opportunities. Let's Find Yours.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Explore international education destinations and discover the opportunities waiting for you.
          </p>
        </div>

        {/* Destination Cards Grid: 4 cols on desktop, 2 cols on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {DESTINATIONS.map((dest, index) => {
            const whatsappUrl = BRAND.whatsapp.getUrl(dest.whatsappQuery);

            return (
              <motion.div
                key={dest.code}
                className="group relative bg-[#F5F7FA] rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Image & Overlay */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                  <img
                    src={dest.image}
                    alt={`${dest.name} study abroad destination`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-transparent to-black/20" />

                  {/* Top Flag Pill */}
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/50">
                    <img
                      src={dest.flagImg}
                      alt={`${dest.name} flag`}
                      className="w-4 h-4 rounded-full object-cover shadow-2xs"
                    />
                    <span className="text-xs font-bold text-[#102A43]">{dest.code}</span>
                  </div>

                  {/* Country Name on Image */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-sm">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                      {dest.description}
                    </p>

                    {/* Popular Disciplines */}
                    <div className="mb-5 pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#176B87] block mb-1">
                        Popular Fields:
                      </span>
                      <p className="text-xs text-slate-700 font-medium">
                        {dest.popularFor}
                      </p>
                    </div>
                  </div>

                  {/* Enquire CTA */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#102A43]/5 hover:bg-[#102A43] text-[#102A43] hover:text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all duration-200 group-hover:bg-[#102A43] group-hover:text-white shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Enquire for {dest.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D6AD60]" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Guidance Footer Note */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-[#F5F7FA] border border-slate-200 text-xs sm:text-sm text-[#64748B]">
            <Compass className="w-4 h-4 text-[#176B87]" />
            <span>
              Unsure which destination best matches your academic and financial goals?
            </span>
            <a
              href={BRAND.whatsapp.getUrl("Hello SJ Consultants, I need help deciding which country is best for my profile.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#176B87] hover:text-[#102A43] font-bold underline underline-offset-2"
            >
              Get a customized destination analysis on WhatsApp &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

