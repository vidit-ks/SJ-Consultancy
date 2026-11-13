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

// Coordinated colourful identity for each step (Navy, Teal, Gold, Indigo, Emerald, Rose)
const stepThemes = [
  {
    icon: Sparkles,
    iconColor: "text-amber-500",
    bgGradient: "bg-gradient-to-br from-amber-50 via-white to-orange-50",
    borderColor: "border-amber-200/90",
    badgeBg: "bg-amber-500",
    badgeText: "text-white",
    tagColor: "text-amber-800 bg-amber-50/80 border-amber-200/80",
    cardBorderHover: "group-hover:border-amber-300",
    iconRing: "ring-2 ring-amber-400/20",
    glowShadow: "group-hover:shadow-[0_8px_22px_rgba(245,158,11,0.20)]",
  },
  {
    icon: Search,
    iconColor: "text-[#176B87]",
    bgGradient: "bg-gradient-to-br from-teal-50 via-white to-cyan-50",
    borderColor: "border-teal-200/90",
    badgeBg: "bg-[#176B87]",
    badgeText: "text-white",
    tagColor: "text-[#176B87] bg-teal-50/80 border-teal-200/80",
    cardBorderHover: "group-hover:border-teal-300",
    iconRing: "ring-2 ring-[#176B87]/20",
    glowShadow: "group-hover:shadow-[0_8px_22px_rgba(23,107,135,0.20)]",
  },
  {
    icon: Send,
    iconColor: "text-indigo-600",
    bgGradient: "bg-gradient-to-br from-indigo-50 via-white to-blue-50",
    borderColor: "border-indigo-200/90",
    badgeBg: "bg-indigo-600",
    badgeText: "text-white",
    tagColor: "text-indigo-700 bg-indigo-50/80 border-indigo-200/80",
    cardBorderHover: "group-hover:border-indigo-300",
    iconRing: "ring-2 ring-indigo-400/20",
    glowShadow: "group-hover:shadow-[0_8px_22px_rgba(79,70,229,0.20)]",
  },
  {
    icon: CheckCircle,
    iconColor: "text-emerald-600",
    bgGradient: "bg-gradient-to-br from-emerald-50 via-white to-teal-50",
    borderColor: "border-emerald-200/90",
    badgeBg: "bg-emerald-600",
    badgeText: "text-white",
    tagColor: "text-emerald-800 bg-emerald-50/80 border-emerald-200/80",
    cardBorderHover: "group-hover:border-emerald-300",
    iconRing: "ring-2 ring-emerald-400/20",
    glowShadow: "group-hover:shadow-[0_8px_22px_rgba(16,185,129,0.20)]",
  },
  {
    icon: FileBadge,
    iconColor: "text-[#102A43]",
    bgGradient: "bg-gradient-to-br from-blue-50 via-white to-slate-100",
    borderColor: "border-blue-200/90",
    badgeBg: "bg-[#102A43]",
    badgeText: "text-white",
    tagColor: "text-[#102A43] bg-blue-50/80 border-blue-200/80",
    cardBorderHover: "group-hover:border-[#102A43]/40",
    iconRing: "ring-2 ring-[#102A43]/20",
    glowShadow: "group-hover:shadow-[0_8px_22px_rgba(16,42,67,0.20)]",
  },
  {
    icon: Plane,
    iconColor: "text-rose-600",
    bgGradient: "bg-gradient-to-br from-rose-50 via-white to-amber-50",
    borderColor: "border-rose-200/90",
    badgeBg: "bg-rose-600",
    badgeText: "text-white",
    tagColor: "text-rose-800 bg-rose-50/80 border-rose-200/80",
    cardBorderHover: "group-hover:border-rose-300",
    iconRing: "ring-2 ring-rose-400/20",
    glowShadow: "group-hover:shadow-[0_8px_22px_rgba(225,29,72,0.20)]",
  },
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
          <div className="absolute top-[68px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-amber-400 via-teal-400 to-rose-400 opacity-30 pointer-events-none z-0" />

          <div className="grid grid-cols-6 gap-3.5 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const theme = stepThemes[idx] || stepThemes[0];
              const Icon = theme.icon;

              return (
                <div
                  key={step.step}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number & Colorful Icon Node */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${theme.bgGradient} border-2 ${theme.borderColor} ${theme.iconRing} shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${theme.glowShadow}`}>
                      <Icon className={`w-7 h-7 ${theme.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                    </div>
                    {/* Number Badge */}
                    <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${theme.badgeBg} ${theme.badgeText} text-xs font-bold flex items-center justify-center shadow-xs font-mono transition-transform duration-300 group-hover:scale-110`}>
                      {idx + 1}
                    </span>
                  </div>

                  {/* Card Content with subtle themed border */}
                  <div className={`bg-[#F5F7FA] rounded-2xl p-4 w-full h-full border border-slate-200/70 ${theme.cardBorderHover} group-hover:bg-white group-hover:shadow-md transition-all duration-300 flex flex-col justify-between`}>
                    <div>
                      <span className={`text-[10px] font-bold tracking-wider uppercase inline-block px-2 py-0.5 rounded-full border mb-2 ${theme.tagColor}`}>
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Connected Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-gradient-to-b from-amber-400 via-teal-400 to-rose-400 opacity-30 pointer-events-none" />

          <div className="space-y-5 relative">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const theme = stepThemes[idx] || stepThemes[0];
              const Icon = theme.icon;

              return (
                <div
                  key={step.step}
                  className="flex items-start gap-3.5 relative pl-2 group"
                >
                  {/* Step Node */}
                  <div className="relative shrink-0 z-10">
                    <div className={`w-12 h-12 rounded-xl ${theme.bgGradient} border-2 ${theme.borderColor} ${theme.iconRing} shadow-md flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${theme.iconColor}`} />
                    </div>
                    <span className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full ${theme.badgeBg} ${theme.badgeText} text-[10px] font-bold flex items-center justify-center shadow-xs font-mono`}>
                      {idx + 1}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className={`bg-[#F5F7FA] rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs flex-1 ${theme.cardBorderHover} transition-colors`}>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${theme.tagColor}`}>
                        Step {step.step}
                      </span>
                      <span className="text-[10px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-100">
                        {step.highlight}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#102A43] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
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

