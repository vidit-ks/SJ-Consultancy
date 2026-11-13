import React from 'react';
import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { BRAND, NAV_LINKS, SERVICES, DESTINATIONS } from '../data/consultancyData';

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
    <footer className="bg-[#0A1C2E] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4">
            {/* White pill container for the brand logo to ensure crisp contrast */}
            <div className="inline-block bg-white p-2.5 rounded-xl shadow-md mb-5">
              <img
                src={BRAND.logo}
                alt="SJ Consultants"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 pr-4">
              SJ Consultants empowers ambitious students to achieve their global academic and career dreams through personalised, transparent, and expert overseas education consultancy.
            </p>

            {/* Founder Credit */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-6">
              <div className="text-xs text-[#D6AD60] font-bold">Founded by</div>
              <div className="text-sm font-bold text-white">{BRAND.founder.name}</div>
              <div className="text-[11px] text-slate-400">{BRAND.founder.title}</div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="flex items-center gap-3">
              <a
                href={BRAND.whatsapp.getUrl(BRAND.whatsapp.defaultMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${BRAND.whatsapp.rawNumber}`}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6AD60]" />
                <span>{BRAND.whatsapp.number}</span>
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#176B87] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-white transition-colors inline-flex items-center gap-1 text-slate-400 hover:translate-x-1 duration-150"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services (Cols 7-9) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#176B87] pl-2.5">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a
                    href={BRAND.whatsapp.getUrl(service.whatsappQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors text-slate-400 inline-flex items-center justify-between w-full group"
                  >
                    <span className="truncate pr-2">{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#D6AD60] transition-opacity shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations (Cols 10-12) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#D6AD60] pl-2.5">
              Destinations
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {DESTINATIONS.map((dest) => (
                <a
                  key={dest.code}
                  href={BRAND.whatsapp.getUrl(dest.whatsappQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors text-xs"
                >
                  <img
                    src={dest.flagImg}
                    alt={`${dest.name} flag`}
                    className="w-4 h-4 rounded-full object-cover shrink-0"
                  />
                  <span className="truncate">{dest.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-white/5 border border-white/5">
              <span className="text-xs text-slate-400 block mb-1">Direct Helpline:</span>
              <a
                href={BRAND.whatsapp.getUrl("Hello SJ Consultants, I am looking for assistance.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#D6AD60] hover:underline"
              >
                {BRAND.whatsapp.number}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} SJ Consultants. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Transparent Guidance</span>
            <span>•</span>
            <span>Ethical Mentorship</span>
            <span>•</span>
            <span>Global Education</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

