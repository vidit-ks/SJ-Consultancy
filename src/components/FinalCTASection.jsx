import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, PhoneCall, Clock } from 'lucide-react';
import { BRAND } from '../data/consultancyData';

export default function FinalCTASection() {
  const whatsappUrl = BRAND.whatsapp.getUrl("Hello SJ Consultants, I am ready to talk to an expert about my study abroad plans.");

  return (
    <section className="py-20 md:py-24 bg-[#102A43] text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#176B87]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#D6AD60]/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#D6AD60] text-xs font-semibold tracking-wide uppercase mb-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Your Journey Today</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Your Dream Destination Is{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6AD60] to-[#64D2E7]">
            Closer Than You Think.
          </span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Let's take the first step towards your international education journey. Connect with SJ Consultants and get personalised guidance.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100 group"
          >
            <MessageCircle className="w-6 h-6 fill-current text-white group-hover:rotate-12 transition-transform" />
            <span>Talk to Our Expert</span>
            <ArrowRight className="w-5 h-5 text-white/90 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={`tel:${BRAND.whatsapp.rawNumber}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base px-7 py-4 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            <PhoneCall className="w-4 h-4 text-[#D6AD60]" />
            <span>Direct WhatsApp: {BRAND.whatsapp.number}</span>
          </a>
        </motion.div>

        {/* Reassurance points */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-300 border-t border-white/10 pt-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D6AD60]" />
            <span>100% Free Initial Counselling</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#64D2E7]" />
            <span>Quick Response Within Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D6AD60]" />
            <span>Tailored University Roadmap</span>
          </div>
        </div>

      </div>
    </section>
  );
}

