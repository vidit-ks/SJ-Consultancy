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
  MessageCircle, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { BRAND, SERVICES } from '../data/consultancyData';

// Coordinated color themes based on the brand palette (Navy, Teal, Gold, Soft Blue)
const serviceIconThemes = [
  { icon: Compass, iconColor: 'text-[#176B87]', bgColor: 'bg-[#176B87]/10', borderColor: 'border-[#176B87]/20' },
  { icon: GraduationCap, iconColor: 'text-[#102A43]', bgColor: 'bg-[#102A43]/10', borderColor: 'border-[#102A43]/20' },
  { icon: FileCheck2, iconColor: 'text-[#2087A8]', bgColor: 'bg-[#2087A8]/10', borderColor: 'border-[#2087A8]/20' },
  { icon: Award, iconColor: 'text-[#B88E3E]', bgColor: 'bg-[#D6AD60]/15', borderColor: 'border-[#D6AD60]/30' },
  { icon: BookOpenCheck, iconColor: 'text-[#0F4C60]', bgColor: 'bg-[#0F4C60]/10', borderColor: 'border-[#0F4C60]/20' },
  { icon: Landmark, iconColor: 'text-[#1E3D5B]', bgColor: 'bg-[#1E3D5B]/10', borderColor: 'border-[#1E3D5B]/20' },
  { icon: ShieldCheck, iconColor: 'text-[#0D9488]', bgColor: 'bg-[#0D9488]/10', borderColor: 'border-[#0D9488]/20' },
  { icon: PlaneTakeoff, iconColor: 'text-[#B88E3E]', bgColor: 'bg-[#D6AD60]/15', borderColor: 'border-[#D6AD60]/25' },
];

export default function ServicesSection() {
  const commonEnquiryUrl = BRAND.whatsapp.getUrl(
    "Hello SJ Consultants, I would like to know more about your overseas education services."
  );

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F5F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176B87]/10 text-[#176B87] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight">
            Everything You Need, All Under One Roof.
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
            From your first counselling session to stepping into your dream university, we're here to guide you at every stage.
          </p>
        </div>

        {/* Services Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES.map((service, index) => {
            const theme = serviceIconThemes[index] || serviceIconThemes[0];
            const IconComponent = theme.icon;

            return (
              <motion.div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:border-[#176B87]/40"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <div>
                  {/* Icon & Category Tag with subtle coordinated theme color */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${theme.bgColor} ${theme.iconColor} border ${theme.borderColor} flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xs`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#64748B] bg-slate-100 px-2.5 py-1 rounded-full group-hover:bg-[#176B87]/10 group-hover:text-[#176B87] transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#102A43] group-hover:text-[#176B87] transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Subtle Step Index Indicator */}
                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-end">
                  <span className="text-[11px] font-mono font-bold text-slate-300 group-hover:text-[#176B87]/60 transition-colors">
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Single Centrally Aligned Common CTA Button */}
        <div className="mt-12 md:mt-14 text-center">
          <a
            href={commonEnquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#102A43] hover:bg-[#176B87] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4 text-[#D6AD60] group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-2.5 text-xs text-[#64748B]">
            Connect directly with SJ Consultants on WhatsApp (+91 93104 09011)
          </p>
        </div>

      </div>
    </section>
  );
}
