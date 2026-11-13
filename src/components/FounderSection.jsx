import React from 'react';
import { motion } from 'framer-motion';
import { 
  Quote, 
  CheckCircle, 
  MessageCircle, 
  Award, 
  Users, 
  Sparkles, 
  ShieldCheck,
  ArrowRight 
} from 'lucide-react';
import { BRAND } from '../data/consultancyData';

export default function FounderSection() {
  const whatsappFounderMsg = "Hello Shovik sir, I would like to consult with you regarding overseas education opportunities.";
  const founderChatUrl = BRAND.whatsapp.getUrl(whatsappFounderMsg);

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F7FA]/70 -skew-x-6 transform origin-top pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#176B87]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Tag */}
        <div className="text-center md:text-left mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A43]/5 border border-[#176B87]/20 text-[#102A43] text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D6AD60]" />
            <span>Meet Our Founder</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] tracking-tight">
            Leadership Driven by Passion & Transparency
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#64748B] max-w-2xl">
            6+ years of expertise, 1,000+ success stories, and an unwavering commitment to authentic student guidance.
          </p>
        </div>

        {/* Split Grid: Photo on one side, Intro on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Founder Image Column */}
          <motion.div 
            className="lg:col-span-5 order-2 lg:order-1 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-md">
              
              {/* Offset decorative border/backdrop card */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#102A43] via-[#176B87] to-[#D6AD60] rounded-3xl opacity-20 -rotate-2 transform transition-transform group-hover:rotate-0" />
              <div className="absolute inset-0 bg-[#102A43] rounded-3xl shadow-xl transform rotate-1" />

              {/* Founder Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-2xl border-2 border-white/20">
                <img
                  src={BRAND.founder.image}
                  alt="Shovik Julka - Founder & CEO of SJ Consultants"
                  className="w-full h-auto object-cover object-top filter brightness-100 contrast-[1.02] transform transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Bottom Gradient Overlay for text badge */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102A43] via-[#102A43]/70 to-transparent p-6 text-white text-left">
                  <div className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center justify-between">
                    <span>{BRAND.founder.name}</span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#D6AD60] text-[#102A43] font-bold">
                      Founder
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D6AD60] font-medium mt-0.5">
                    {BRAND.founder.role}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-1">
                    {BRAND.founder.title}
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1: Experience */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#176B87]/10 flex items-center justify-center text-[#176B87]">
                  <Award className="w-5 h-5 text-[#176B87]" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-[#102A43]">6+ Years</div>
                  <div className="text-[11px] text-[#64748B] font-medium">Industry Expertise</div>
                </div>
              </div>

              {/* Floating Stat Card 2: Students Guided */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#102A43] text-white px-4 py-2.5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D6AD60]/20 flex items-center justify-center text-[#D6AD60]">
                  <Users className="w-5 h-5 text-[#D6AD60]" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-white">1,000+</div>
                  <div className="text-[11px] text-slate-300 font-medium">Students Guided</div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Founder Introduction Text Column */}
          <motion.div 
            className="lg:col-span-7 order-1 lg:order-2 text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Header info */}
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-xl bg-[#176B87]/10 text-[#176B87]">
                <Quote className="w-6 h-6 rotate-180" />
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A43]">
                  {BRAND.founder.name}
                </h3>
                <p className="text-sm font-semibold text-[#176B87]">
                  {BRAND.founder.role}
                </p>
                <p className="text-xs text-[#64748B]">
                  {BRAND.founder.title}
                </p>
              </div>
            </div>

            {/* Complete, authentic introduction text */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-[#102A43]">
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
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#102A43]/5 via-[#176B87]/5 to-transparent border-l-4 border-[#D6AD60] my-5">
                <p className="text-base sm:text-lg font-bold text-[#102A43] italic">
                  "Because every student has a dream, and the right guidance can make all the difference."
                </p>
              </div>
            </div>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#176B87] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800">Direct 1-on-1 Mentorship</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#176B87] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800">100% Ethical Advice</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#176B87] shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800">End-to-End Handholding</span>
              </div>
            </div>

            {/* Signature & CTA Area */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-4">
              <div>
                <div className="font-serif text-2xl font-bold tracking-tight text-[#102A43] italic">
                  Shovik Julka
                </div>
                <div className="text-xs text-[#64748B] font-medium">
                  Founder & CEO | SJ Consultants
                </div>
              </div>

              <a
                href={founderChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#102A43] hover:bg-[#176B87] text-white text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Consult with Shovik Julka</span>
                <ArrowRight className="w-4 h-4 text-[#D6AD60]" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

