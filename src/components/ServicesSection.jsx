import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  GraduationCap, 
  FileCheck2, 
  Award, 
  BookOpenCheck, 
  Landmark, 
  ShieldCheck, 
  PlaneTakeoff, 
  ArrowUpRight, 
  MessageCircle, 
  Layers
} from 'lucide-react';
import { BRAND, SERVICES } from '../data/consultancyData';

const iconMap = {
  Compass,
  GraduationCap,
  FileCheck2,
  Award,
  BookOpenCheck,
  Landmark,
  ShieldCheck,
  PlaneTakeoff,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176B87]/10 text-[#176B87] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight">
            Everything You Need, All Under One Roof.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            From your first counselling session to stepping into your dream university, we're here to guide you at every stage.
          </p>
        </div>

        {/* Services Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Compass;
            const whatsappUrl = BRAND.whatsapp.getUrl(service.whatsappQuery);

            return (
              <motion.div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 md:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:border-[#176B87]/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Top content */}
                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#102A43]/5 text-[#102A43] group-hover:bg-[#176B87] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                      <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#64748B] bg-slate-100 px-2.5 py-1 rounded-full group-hover:bg-[#176B87]/10 group-hover:text-[#176B87] transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#102A43] group-hover:text-[#176B87] transition-colors mb-2.5 leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102A43] group-hover:text-[#176B87] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Enquire Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D6AD60] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <span className="text-[11px] font-mono font-medium text-slate-300">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Comprehensive Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#102A43] to-[#176B87] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight">
              Looking for tailored guidance for your profile?
            </h4>
            <p className="text-sm text-slate-200 mt-1">
              Speak directly with our career specialists to map out your best study abroad pathway.
            </p>
          </div>
          <a
            href={BRAND.whatsapp.getUrl(BRAND.whatsapp.servicesMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#D6AD60] hover:bg-[#E7C887] text-[#102A43] font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Get Personalized Advice</span>
          </a>
        </div>

      </div>
    </section>
  );
}

