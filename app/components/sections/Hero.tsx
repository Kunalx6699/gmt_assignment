'use client';

import { useScrollAnimation } from '@/app/components/ui/Usescrollanimation';

export default function HeroSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`pt-28 pb-20 px-6 lg:px-8 bg-gradient-to-b from-[#fafaf8] to-[#f5f4f1] transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-7 order-2 lg:order-1">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-wider text-[#5a7a6f] font-medium">Licensed Clinical Psychologist</p>
            <h2 className="text-5xl lg:text-6xl font-light leading-[1.1] text-[#2c3e3a]">
              Anxiety & Trauma Therapy in Santa Monica
            </h2>
          </div>
          <p className="text-xl leading-relaxed text-[#4a5a54] font-light">
            Compassionate support for high-achieving adults navigating anxiety, burnout, and the lasting effects of trauma.
          </p>
          <div className="pt-2">
            <button className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#5a7a6f] text-white hover:bg-[#4a6a5f] transition-all duration-300 group shadow-sm">
              Schedule a Consultation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="relative w-full max-w-[550px] mx-auto lg:mx-0 order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#5a7a6f]/20 to-[#8b9d95]/10"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
              alt="Modern therapy office in Santa Monica with natural light"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#d4c5b0]/30 -z-10"></div>
        </div>
      </div>
    </section>
  );
}