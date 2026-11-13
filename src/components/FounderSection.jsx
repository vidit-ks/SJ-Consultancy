import React from 'react';
import { motion } from 'framer-motion';
import { 
  Quote, 
  CheckCircle, 
  MessageCircle, 
  Award, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { BRAND } from '../data/consultancyData';

export default function FounderSection() {
  const whatsappFounderMsg = "Hello Shovik sir, I would like to consult with you regarding overseas education opportunities.";
  const founderChatUrl = BRAND.whatsapp.getUrl(whatsappFounderMsg);

  return (
    <section id="about" className="py-10 sm:py-14 md:py-16 bg-[#F5F7FA]/60 relative overflow-hidden">
      {/* Background subtle decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/60 -skew-x-6 transform origin-top pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#176B87]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Grid: Photo on one side, Intro on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Founder Image Column */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              
              {/* Offset decorative border/backdrop card */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#102A43] via-[#176B87] to-[#D6AD60] rounded-3xl opacity-15 -rotate-2 transform pointer-events-none" />
              <div className="absolute inset-0 bg-[#102A43] rounded-3xl shadow-lg transform rotate-1 pointer-events-none" />

              {/* Founder Image Container - Balanced Portrait Ratio */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-xl border-2 border-white/20 aspect-4/5">
                <img
                  src={BRAND.founder.image}
                  alt="Shovik Julka - Founder & CEO of SJ Consultants"
                  className="w-full h-full object-cover object-top filter brightness-100 contrast-[1.02] transform transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Bottom Overlay for Name & Title */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102A43] via-[#102A43]/75 to-transparent p-5 text-white text-left">
                  <div className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center justify-between">
                    <span>{BRAND.founder.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D6AD60] text-[#102A43] font-bold">
                      Founder
                    </span>
                  </div>
                  <p className="text-xs text-[#D6AD60] font-semibold mt-0.5">
                    {BRAND.founder.role}
                  </p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    {BRAND.founder.title}
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1: Experience */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-slate-200/80 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#176B87]/10 flex items-center justify-center text-[#176B87]">
                  <Award className="w-4 h-4 text-[#176B87]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#102A43]">6+ Years</div>
                  <div className="text-[10px] text-[#64748B] font-medium leading-none">Experience</div>
                </div>
              </div>

              {/* Floating Stat Card 2: Students Guided */}
              <div className="absolute -bottom-3 -left-3 sm:-left-4 bg-[#102A43] text-white px-3.5 py-2 rounded-xl shadow-lg border border-white/10 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#D6AD60]/20 flex items-center justify-center text-[#D6AD60]">
                  <Users className="w-4 h-4 text-[#D6AD60]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-white">1,000+</div>
                  <div className="text-[10px] text-slate-300 font-medium leading-none">Students Guided</div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Founder Introduction Text Column - Refined & Balanced Typography */}
          <motion.div 
            className="lg:col-span-7 text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {/* Header info */}
            <div className="flex items-center gap-3 mb-3.5">
              <span className="p-1.5 rounded-lg bg-[#176B87]/10 text-[#176B87]">
                <Quote className="w-5 h-5 rotate-180" />
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#102A43]">
                  {BRAND.founder.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#176B87]">
                  {BRAND.founder.role}
                </p>
                <p className="text-[11px] text-[#64748B]">
                  {BRAND.founder.title}
                </p>
              </div>
            </div>

            {/* Complete, refined introduction text */}
            <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm leading-relaxed">
              <p className="font-semibold text-[#102A43]">
                "I'm Shovik Julka, Founder and CEO of SJ Consultants, with over 6 years of experience in the education and overseas consultancy industry.
              </p>

              <p>
                Over the years, I have had the opportunity to work closely with students and families, helping them take one of the most important decisions of their lives – choosing the right education and building a future abroad.
              </p>

              <p>
                Having guided 1,000+ students towards their international education journeys, I understand that studying abroad is about much more than getting an admission letter. It's about finding the right university, choosing the right course, making informed decisions and preparing for a completely new chapter in life.
              </p>

              <p>
                My journey in this industry has taught me the importance of trust, transparency and personal guidance. These are the values I want SJ Consultants to stand for.
              </p>

              <p>
                Through SJ Consultants, my aim is simple: to make overseas education guidance more personal, transparent and accessible, so that every student and parent feels confident throughout the journey.
              </p>

              <p>
                I believe in building relationships, creating opportunities and helping people turn their ambitions into reality.
              </p>

              {/* Callout Quote */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-[#102A43]/5 via-[#176B87]/5 to-transparent border-l-3 border-[#D6AD60] my-3">
                <p className="text-xs sm:text-sm font-bold text-[#102A43] italic">
                  "Because every student has a dream, and the right guidance can make all the difference."
                </p>
              </div>
            </div>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-4 pt-3 border-t border-slate-200/70">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#176B87] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800">1-on-1 Mentorship</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#176B87] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800">100% Ethical Advice</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#176B87] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800">End-to-End Handholding</span>
              </div>
            </div>

            {/* Signature & CTA Area */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#102A43] italic">
                  Shovik Julka
                </div>
                <div className="text-[11px] text-[#64748B] font-medium">
                  Founder &amp; CEO | SJ Consultants
                </div>
              </div>

              <a
                href={founderChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#102A43] hover:bg-[#176B87] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Consult with Shovik Julka</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D6AD60]" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
