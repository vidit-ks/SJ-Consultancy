import React from 'react';
import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { BRAND, NAV_LINKS } from '../data/consultancyData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#0A1C2E] text-slate-300 py-10 sm:py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Clean Row: Logo & One-liner | Essential Links | WhatsApp Contact */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          
          {/* Brand Info & One-Line Description */}
          <div className="max-w-md">
            <div className="inline-block bg-white p-2 rounded-xl shadow-sm mb-3">
              <img
                src={BRAND.logo}
                alt="SJ Consultants"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Personalised guidance, transparent advice, and end-to-end overseas education consultancy.
            </p>
          </div>

          {/* Essential Navigation Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* WhatsApp Direct Contact */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={BRAND.whatsapp.getUrl(BRAND.whatsapp.defaultMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-200 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: {BRAND.whatsapp.number}</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {currentYear} SJ Consultants. All rights reserved.
          </div>
          <div className="text-slate-400 text-[11px] sm:text-xs">
            Founded by Shovik Julka • Transparent &amp; Ethical Guidance
          </div>
        </div>

      </div>
    </footer>
  );
}
