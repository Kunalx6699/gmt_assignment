'use client';

import { useScrollAnimation } from '@/app/components/ui/Usescrollanimation';

export default function AboutLilac() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-20 px-6 lg:px-8 bg-[#e8e4df] transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-light text-[#2c3e3a] leading-tight">
              Live a fulfilling life.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-[#2c3e3a]">
              <p>
                Life can be challenging—especially when you're trying to balance your personal and professional life.
              </p>
              <p>
                It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
              </p>
            </div>
            <div className="pt-4">
              <button className="inline-flex items-center gap-3 text-[#2c3e3a] hover:text-[#5a7a6f] transition-colors group text-lg font-light">
                GET IN TOUCH
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&q=80" 
                alt="Peaceful lifestyle scene with coffee and flowers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}