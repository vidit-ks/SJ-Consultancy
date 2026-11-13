import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  GraduationCap, 
  FileCheck2, 
  Award, 
  BookOpenCheck, 
  Landmark, 
  ShieldCheck, 
  PlaneTakeoff, 
  MessageCircle, 
  ArrowRight,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { BRAND, SERVICES } from '../data/consultancyData';

// Coordinated color themes based on the brand palette (Navy, Teal, Gold, Indigo, Cyan, Emerald)
const serviceIconThemes = [
  { icon: Compass, iconColor: 'text-[#176B87]', bgColor: 'bg-[#176B87]/10', borderColor: 'border-[#176B87]/20' },
  { icon: GraduationCap, iconColor: 'text-[#102A43]', bgColor: 'bg-[#102A43]/10', borderColor: 'border-[#102A43]/20' },
  { icon: FileCheck2, iconColor: 'text-[#2087A8]', bgColor: 'bg-[#2087A8]/10', borderColor: 'border-[#2087A8]/20' },
  { icon: Award, iconColor: 'text-[#B88E3E]', bgColor: 'bg-[#D6AD60]/15', borderColor: 'border-[#D6AD60]/30' },
  { icon: BookOpenCheck, iconColor: 'text-[#0F4C60]', bgColor: 'bg-[#0F4C60]/10', borderColor: 'border-[#0F4C60]/20' },
  { icon: Landmark, iconColor: 'text-[#1E3D5B]', bgColor: 'bg-[#1E3D5B]/10', borderColor: 'border-[#1E3D5B]/20' },
  { icon: ShieldCheck, iconColor: 'text-[#0D9488]', bgColor: 'bg-[#0D9488]/10', borderColor: 'border-[#0D9488]/20' },
  { icon: PlaneTakeoff, iconColor: 'text-[#B88E3E]', bgColor: 'bg-[#D6AD60]/15', borderColor: 'border-[#D6AD60]/25' },
];

export default function ServicesSection() {
  const commonEnquiryUrl = BRAND.whatsapp.getUrl(
    "Hello SJ Consultants, I would like to know more about your overseas education services."
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // Responsive visible count tracking
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1); // Mobile: 1 card
      } else if (width < 1024) {
        setVisibleCount(2); // Tablet: 2 cards
      } else {
        setVisibleCount(4); // Desktop/Laptop: 4 cards
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, SERVICES.length - visibleCount);

  // Clamp current index when viewport changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Total pagination pages
  const totalPages = Math.ceil(SERVICES.length / visibleCount);
  const activePage = Math.min(
    Math.floor(currentIndex / (visibleCount === 1 ? 1 : visibleCount === 2 ? 2 : 4)),
    totalPages - 1
  );

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F5F7FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176B87]/10 text-[#176B87] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Complete Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#102A43] tracking-tight">
            Everything You Need, All Under One Roof.
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
            From your first counselling session to stepping into your dream university, we're here to guide you at every stage.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Previous / Next Navigation Arrows (Desktop / Tablet Header Bar) */}
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs sm:text-sm font-semibold text-slate-500">
              Showing <span className="text-[#102A43] font-bold">{currentIndex + 1}</span>–
              <span className="text-[#102A43] font-bold">{Math.min(currentIndex + visibleCount, SERVICES.length)}</span> of{' '}
              <span className="text-[#102A43] font-bold">{SERVICES.length}</span> Services
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous services slide"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 text-[#102A43] border border-slate-300/80 shadow-2xs hover:shadow-sm flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer hover:border-[#176B87]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next services slide"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-slate-50 text-[#102A43] border border-slate-300/80 shadow-2xs hover:shadow-sm flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer hover:border-[#176B87]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Slider Window */}
          <div 
            className="overflow-hidden py-3 -mx-2.5 sm:-mx-3 select-none touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {SERVICES.map((service, index) => {
                const theme = serviceIconThemes[index] || serviceIconThemes[0];
                const IconComponent = theme.icon;

                return (
                  <div
                    key={service.id}
                    className="shrink-0 px-2.5 sm:px-3 transition-all duration-300"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <div className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 hover:border-[#176B87]/40 min-h-[290px]">
                      <div>
                        {/* Icon & Category Tag with subtle coordinated theme color */}
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl ${theme.bgColor} ${theme.iconColor} border ${theme.borderColor} flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xs`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <span className="text-[11px] font-semibold text-[#64748B] bg-slate-100 px-2.5 py-1 rounded-full group-hover:bg-[#176B87]/10 group-hover:text-[#176B87] transition-colors">
                            {service.badge}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-bold text-[#102A43] group-hover:text-[#176B87] transition-colors mb-2 leading-snug">
                          {service.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Subtle Step Index Indicator */}
                      <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 font-medium">
                          SJ Guidance
                        </span>
                        <span className="text-[11px] font-mono font-bold text-slate-300 group-hover:text-[#176B87]/80 transition-colors">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Indicators (Dots) */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, stepIdx) => (
              <button
                key={stepIdx}
                type="button"
                onClick={() => setCurrentIndex(stepIdx)}
                aria-label={`Go to slide ${stepIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === stepIdx
                    ? 'w-7 h-2.5 bg-[#176B87] shadow-2xs'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

        {/* Single Centrally Aligned Common CTA Button */}
        <div className="mt-12 md:mt-14 text-center">
          <a
            href={commonEnquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#102A43] hover:bg-[#176B87] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4 text-[#D6AD60] group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-2.5 text-xs text-[#64748B]">
            Connect directly with SJ Consultants on WhatsApp (+91 93104 09011)
          </p>
        </div>

      </div>
    </section>
  );
}
