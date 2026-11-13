import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  MessageCircle, 
  Award, 
  Users, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Compass
} from 'lucide-react';
import { BRAND } from '../data/consultancyData';

export default function FounderSection() {
  const whatsappFounderMsg = "Hello Shovik sir, I would like to consult with you regarding overseas education opportunities.";
  const founderChatUrl = BRAND.whatsapp.getUrl(whatsappFounderMsg);

  // AdmitKard credibility highlights
  const credibilityHighlights = [
    "6+ Years of Industry Experience",
    "1,000+ Students Guided",
    "Personalised Education Guidance",
    "Trust & Transparency"
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F5F7FA] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#176B87]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D6AD60]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* A. Section Heading (AdmitKard structure) */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A43]/5 border border-[#176B87]/20 text-[#102A43] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D6AD60]" />
            <span>Built on Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight">
            Built on Trust, Backed by Experience
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
            6+ years of expertise, 1,000+ students guided, and an unwavering commitment to authentic student guidance.
          </p>
        </div>

        {/* E. Statistics Section (Horizontal statistics strip similar to AdmitKard) */}
        <div className="mb-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">6+</div>
              <div className="text-xs sm:text-[13px] font-semibold text-[#176B87] mt-0.5">Years Experience</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Education Industry</div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">1,000+</div>
              <div className="text-xs sm:text-[13px] font-semibold text-[#176B87] mt-0.5">Students Guided</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Global Education</div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">100%</div>
              <div className="text-xs sm:text-[13px] font-semibold text-[#176B87] mt-0.5">Transparency</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Direct & Honest Advice</div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">11+</div>
              <div className="text-xs sm:text-[13px] font-semibold text-[#176B87] mt-0.5">Destinations</div>
              <div className="text-[11px] text-slate-400 mt-0.5">World-Class Options</div>
            </div>
          </div>
        </div>

        {/* B. Founder Card (Recreating AdmitKard's Card Composition from photo 2.jpeg) */}
        <motion.div 
          className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-xl max-w-5xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Compact Founder Bio & Credibility Highlights (7 cols) */}
            <div className="lg:col-span-7 text-left order-2 lg:order-1">
              
              {/* Founder Introduction Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102A43]/5 text-[#102A43] text-xs font-bold uppercase tracking-wider mb-3">
                <Compass className="w-3.5 h-3.5 text-[#176B87]" />
                <span>Founder Introduction</span>
              </div>

              {/* Founder Name & Designation */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight mb-1">
                {BRAND.founder.name}
              </h3>
              <p className="text-sm font-semibold text-[#176B87] mb-0.5">
                {BRAND.founder.role}
              </p>
              <p className="text-xs text-[#64748B] mb-5">
                {BRAND.founder.title}
              </p>

              {/* Compact Founder Introduction (60-90 words, 10-15 seconds read) */}
              <p className="text-sm sm:text-[14.5px] text-slate-700 leading-relaxed mb-6 font-normal">
                With over 6 years of experience in the education and overseas consultancy industry, I have had the privilege of guiding 1,000+ students towards their international education dreams. Studying abroad is about finding the right university, making informed decisions, and preparing for a rewarding global career. Through SJ Consultants, my mission is simple: to make overseas education guidance deeply personal, 100% transparent, and accessible to every student and family.
              </p>

              {/* C. Founder Credibility Highlights (AdmitKard-style checklist) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 pt-4 border-t border-slate-100">
                {credibilityHighlights.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#176B87] shrink-0" />
                    <span className="text-xs sm:text-[13px] font-semibold text-[#102A43]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA Action */}
              <div className="pt-2">
                <a
                  href={founderChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#102A43] hover:bg-[#176B87] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Consult with Shovik Julka on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D6AD60]" />
                </a>
              </div>
            </div>

            {/* Right Column: Founder Photograph (5 cols, balanced ratio) */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                
                {/* Background offset card */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#102A43] via-[#176B87] to-[#D6AD60] opacity-15 rotate-1 pointer-events-none" />

                {/* Portrait Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-slate-200 aspect-4/5">
                  <img
                    src={BRAND.founder.image}
                    alt="Shovik Julka - Founder & CEO of SJ Consultants"
                    className="w-full h-full object-cover object-top filter brightness-100 contrast-[1.02] hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle lower gradient overlay with badge */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102A43]/90 via-[#102A43]/40 to-transparent p-4 text-white text-left">
                    <div className="text-sm font-bold text-white">Shovik Julka</div>
                    <div className="text-[11px] text-[#D6AD60]">Founder &amp; CEO | SJ Consultants</div>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-[#102A43]">
                  <Award className="w-4 h-4 text-[#D6AD60]" />
                  <span>6+ Years Exp</span>
                </div>
              </div>
            </div>

          </div>

          {/* D. Institutional & Advisory Credentials Showcase (Configurable for verified assets) */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-[#64748B]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#176B87]" />
              <span className="font-semibold text-[#102A43]">SJ Advisory Standards:</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] sm:text-xs">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium text-slate-700">100% Ethical Advisory</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium text-slate-700">Profile-First Shortlisting</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium text-slate-700">Transparent Visa Protocols</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium text-slate-700">Zero Hidden Charges</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
