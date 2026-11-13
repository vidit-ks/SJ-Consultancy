import React from 'react';
import { motion } from 'framer-motion';

export default function LeadershipHighlight() {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 bg-white border-y border-slate-100 overflow-hidden">
      {/* Subtle background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-gradient-to-r from-[#176B87]/5 via-[#D6AD60]/5 to-transparent blur-xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Prominent Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102A43] tracking-tight leading-snug">
            Leadership Driven by Passion &amp; Transparency
          </h2>

          {/* Compact, Readable Description */}
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-[#64748B] font-normal leading-relaxed max-w-2xl mx-auto">
            6+ years of expertise, 1,000+ success stories, and an unwavering commitment to authentic student guidance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
