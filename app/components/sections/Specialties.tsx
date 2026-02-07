'use client';

import { useScrollAnimation } from '@/app/components/ui/Usescrollanimation';

export default function SpecialtiesSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-24 px-6 lg:px-8 bg-[#f5f4f1] transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-light text-[#2c3e3a]">Areas of Focus</h2>
          <p className="text-lg text-[#4a5a54] max-w-2xl mx-auto">
            Evidence-based therapy for the challenges that keep you from feeling like yourself
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Anxiety & Panic */}
          <div className="bg-white p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-[#5a7a6f]/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#5a7a6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-light text-[#2c3e3a]">Anxiety & Panic</h3>
                <p className="text-[#4a5a54] leading-relaxed">
                  Relief from constant worry, racing thoughts, and the physical symptoms of anxiety. Learn to understand both the emotional and physiological sides of what you're experiencing through CBT, mindfulness, and body-oriented techniques.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#2c3e3a]/10">
              <div className="relative w-full h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80" 
                  alt="Person practicing mindfulness outdoors"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Trauma & EMDR */}
          <div className="bg-white p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-[#5a7a6f]/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#5a7a6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-light text-[#2c3e3a]">Trauma & EMDR</h3>
                <p className="text-[#4a5a54] leading-relaxed">
                  Healing from single-incident trauma or complex patterns stemming from childhood, relationships, or chronic stress. Using EMDR and trauma-informed approaches, we work at a careful pace with emphasis on safety, stabilization, and regulation.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#2c3e3a]/10">
              <div className="relative w-full h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80" 
                  alt="Peaceful pathway representing healing journey"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Burnout & Perfectionism */}
          <div className="bg-white p-10 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="space-y-6">
              <div className="w-14 h-14 bg-[#5a7a6f]/10 flex items-center justify-center">
                <svg className="w-7 h-7 text-[#5a7a6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-light text-[#2c3e3a]">Burnout & Perfectionism</h3>
                <p className="text-[#4a5a54] leading-relaxed">
                  Support for entrepreneurs, creatives, and professionals feeling disconnected from themselves after years of high internal pressure. Develop insight, resilience, and more sustainable ways of working without sacrificing what matters to you.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#2c3e3a]/10">
              <div className="relative w-full h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80" 
                  alt="Person finding balance and peace"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}