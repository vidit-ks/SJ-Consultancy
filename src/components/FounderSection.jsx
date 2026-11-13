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
  Globe2,
  GraduationCap
} from 'lucide-react';
import { BRAND } from '../data/consultancyData';

export default function FounderSection() {
  const whatsappFounderMsg = "Hello Shovik sir, I would like to consult with you regarding overseas education opportunities.";
  const founderChatUrl = BRAND.whatsapp.getUrl(whatsappFounderMsg);

  // Key visual highlight badges
  const visualHighlights = [
    { label: "6+ Years Experience", desc: "Global Education Advisory", icon: Award, color: "text-[#176B87]", bg: "bg-[#176B87]/10" },
    { label: "1,000+ Students", desc: "Guided to Top Admits", icon: Users, color: "text-[#B88E3E]", bg: "bg-[#D6AD60]/15" },
    { label: "100% Ethical", desc: "Transparent Guidance", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "End-to-End Support", desc: "From SOP to Visa", icon: GraduationCap, color: "text-[#102A43]", bg: "bg-[#102A43]/10" },
  ];

  return (
    <section id="about" className="py-14 sm:py-18 md:py-20 bg-[#F5F7FA] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#176B87]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D6AD60]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A43]/5 border border-[#176B87]/20 text-[#102A43] text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D6AD60]" />
            <span>Built on Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight">
            Built on Trust, Backed by Experience
          </h2>
          <p className="mt-2.5 text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
            6+ years of expertise, 1,000+ students guided, and an unwavering commitment to authentic student guidance.
          </p>
        </div>

        {/* Visual Statistics Strip */}
        <div className="mb-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs text-center hover:border-[#176B87]/30 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">6+</div>
              <div className="text-xs font-bold text-[#176B87] mt-0.5">Years Experience</div>
              <div className="text-[11px] text-slate-400">Education Industry</div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs text-center hover:border-[#D6AD60]/40 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">1,000+</div>
              <div className="text-xs font-bold text-[#B88E3E] mt-0.5">Students Guided</div>
              <div className="text-[11px] text-slate-400">Worldwide Admits</div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs text-center hover:border-emerald-300 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">100%</div>
              <div className="text-xs font-bold text-emerald-700 mt-0.5">Transparency</div>
              <div className="text-[11px] text-slate-400">Direct &amp; Honest Advice</div>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs text-center hover:border-[#102A43]/30 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight">11+</div>
              <div className="text-xs font-bold text-[#102A43] mt-0.5">Destinations</div>
              <div className="text-[11px] text-slate-400">Global Study Hubs</div>
            </div>
          </div>
        </div>

        {/* Visual & Compact Founder Presentation Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 border border-slate-200/90 shadow-xl max-w-5xl mx-auto relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-center">
            
            {/* Left Column: Closer Cropped Founder Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[270px] sm:max-w-[290px]">
                
                {/* Background offset border */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#102A43] via-[#176B87] to-[#D6AD60] opacity-15 rotate-1 pointer-events-none" />

                {/* Portrait Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-slate-200 aspect-4/5">
                  <img
                    src={BRAND.founder.image}
                    alt="Shovik Julka - Founder & CEO of SJ Consultants"
                    className="w-full h-full object-cover object-top filter brightness-100 contrast-[1.02] hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Bottom overlay badge */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102A43]/90 via-[#102A43]/40 to-transparent p-3.5 text-white text-left">
                    <div className="text-sm font-bold text-white">Shovik Julka</div>
                    <div className="text-[11px] text-[#D6AD60]">Founder &amp; CEO | SJ Consultants</div>
                  </div>
                </div>

                {/* Floating Experience Pill */}
                <div className="absolute -top-2.5 -right-2.5 bg-white px-2.5 py-1 rounded-xl shadow-md border border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-[#102A43]">
                  <Award className="w-3.5 h-3.5 text-[#D6AD60]" />
                  <span>6+ Years Exp</span>
                </div>
              </div>
            </div>

            {/* Right Column: Compact Intro & Visual Highlights */}
            <div className="lg:col-span-7 text-left">
              
              {/* Designation Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#102A43]/5 text-[#102A43] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-[#176B87]" />
                <span>Founder Introduction</span>
              </div>

              {/* Founder Identity */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight mb-0.5">
                {BRAND.founder.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#176B87] mb-0.5">
                {BRAND.founder.role}
              </p>
              <p className="text-[11px] sm:text-xs text-[#64748B] mb-3.5">
                {BRAND.founder.title}
              </p>

              {/* Short Impactful Introduction (~65 words, 10-15s read) */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-normal">
                With over 6 years of expertise in overseas education consultancy, I have dedicated my career to mentoring 1,000+ ambitious students toward their global academic dreams. We believe studying abroad is about finding the right university, making informed decisions, and building a rewarding career. At SJ Consultants, our mission is simple: to make international education guidance deeply personal, transparent, and accessible to every family.
              </p>

              {/* Visual Mini Highlight Cards */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                {visualHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg ${item.bg} ${item.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-[#102A43] truncate">{item.label}</div>
                        <div className="text-[10px] text-slate-500 truncate">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp CTA Action */}
              <div className="pt-1">
                <a
                  href={founderChatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#102A43] hover:bg-[#176B87] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Consult with Shovik Julka on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D6AD60]" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
