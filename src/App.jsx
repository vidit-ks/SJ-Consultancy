import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LeadershipHighlight from './components/LeadershipHighlight';
import FounderSection from './components/FounderSection';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import DestinationsSection from './components/DestinationsSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172B3A] font-sans antialiased overflow-x-hidden selection:bg-[#176B87]/20 selection:text-[#102A43]">
      {/* Global Sticky Navigation */}
      <Navbar />

      <main>
        {/* Section 1: Hero / Landing */}
        <HeroSection />

        {/* Leadership Highlight Section Bridge */}
        <LeadershipHighlight />

        {/* Section 2: Founder Introduction (About Us) */}
        <FounderSection />

        {/* Section 3: End-to-End Services */}
        <ServicesSection />

        {/* Section 4: How It Works */}
        <HowItWorksSection />

        {/* Section 5: Trusted by Students (Testimonials) */}
        <TestimonialsSection />

        {/* Section 6: The World of Opportunities (Destinations) */}
        <DestinationsSection />

        {/* Final Conversion CTA Section */}
        <FinalCTASection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
