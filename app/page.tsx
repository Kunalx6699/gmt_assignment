'use client';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/Hero';
import AboutLilac from './components/sections/AboutLilac';
import SpecialtiesSection from './components/sections/Specialties';
import OurOffice from './components/sections/OurOffice';
import SupportSection from './components/sections/Support';
import AboutSection from './components/sections/About';
import FAQSection from './components/sections/FAQSection';
import CredentialsSection from './components/sections/CredentialsSection';
import CTASection from './components/sections/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <HeroSection />
      <AboutLilac />
      <SpecialtiesSection />
      <OurOffice />
      <SupportSection />
      <AboutSection />
      <FAQSection />
      <CredentialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}