import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND } from '../data/consultancyData';

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappUrl = BRAND.whatsapp.getUrl(BRAND.whatsapp.defaultMsg);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Prompt bubble (dismissible) */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#102A43] text-xs font-semibold px-3.5 py-2 rounded-full shadow-xl border border-slate-200 animate-in fade-in slide-in-from-right-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat with Shovik Julka & Team</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded-full"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsing Outer Ring */}
      <div className="relative group">
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />
        
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
          aria-label="Chat with SJ Consultants on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white group-hover:rotate-12 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}

