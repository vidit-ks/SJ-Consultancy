import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Search, 
  Send, 
  CheckCircle, 
  FileBadge, 
  Plane, 
  ArrowRight,
  MessageCircle,
  Milestone
} from 'lucide-react';
import { BRAND, HOW_IT_WORKS_STEPS } from '../data/consultancyData';

const stepIcons = [
  Sparkles,
  Search,
  Send,
  CheckCircle,
  FileBadge,
  Plane
];

export default function HowItWorksSection() {
  const whatsappUrl = BRAND.whatsapp.getUrl("Hello SJ Consultants, I am ready to start my study abroad journey!");

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#176B87]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D6AD60]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#102A43]/5 text-[#102A43] text-xs font-bold uppercase tracking-wider mb-3">
            <Milestone className="w-3.5 h-3.5 text-[#176B87]" />
            <span>Your Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight">
            Your Journey Abroad, Made Simple.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            A clear and guided process that takes you from your ambitions to your dream destination.
          </p>
        </div>

        {/* Desktop Connected Grid Timeline (6 steps in a 2x3 connected flow or responsive connected cards) */}
        <div className="hidden lg:block relative">
          
          {/* Subtle connecting progress bar between step cards */}
          <div className="absolute top-[68px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#176B87]/20 via-[#D6AD60]/40 to-[#176B87]/20 pointer-events-none z-0" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || Sparkles;
              return (
                <motion.div
                  key={step.step}
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  {/* Step Number & Icon Circle */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 group-hover:border-[#176B87] shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl bg-gradient-to-b group-hover:from-[#176B87] group-hover:to-[#102A43]">
                      <Icon className="w-7 h-7 text-[#102A43] group-hover:text-white transition-colors duration-300" />
                    </div>
                    {/* Number Badge */}
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#102A43] group-hover:bg-[#D6AD60] text-white group-hover:text-[#102A43] text-xs font-bold flex items-center justify-center shadow-xs transition-colors duration-300 font-mono">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="bg-[#F5F7FA] rounded-2xl p-4 w-full h-full border border-slate-200/60 group-hover:border-[#176B87]/30 group-hover:bg-white group-hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-[#176B87] block mb-1">
                        Step {step.step}
                      </span>
                      <h3 className="text-sm font-bold text-[#102A43] mb-2 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Connected Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-gradient-to-b from-[#176B87] via-[#D6AD60] to-[#102A43] pointer-events-none" />

          <div className="space-y-6 relative">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx] || Sparkles;
              return (
                <motion.div
                  key={step.step}
                  className="flex items-start gap-4 relative pl-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                >
                  {/* Step Node */}
                  <div className="relative shrink-0 z-10">
                    <div className="w-12 h-12 rounded-xl bg-white border-2 border-[#102A43] shadow-md flex items-center justify-center text-[#102A43]">
                      <Icon className="w-5 h-5 text-[#176B87]" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#102A43] text-[#D6AD60] text-[10px] font-bold flex items-center justify-center shadow-xs font-mono">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="bg-[#F5F7FA] rounded-2xl p-5 border border-slate-200/80 shadow-xs flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-[#176B87] uppercase tracking-wider">
                        Step {step.step}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-100">
                        {step.highlight}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#102A43] mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button below timeline */}
        <div className="mt-14 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#102A43] hover:bg-[#176B87] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4 text-[#D6AD60] group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-2.5 text-xs text-[#64748B]">
            Complimentary profile assessment with Shovik Julka & team
          </p>
        </div>

      </div>
    </section>
  );
}

