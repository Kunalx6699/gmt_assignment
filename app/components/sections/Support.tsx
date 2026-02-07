'use client';

import { useScrollAnimation } from '@/app/components/ui/Usescrollanimation';

export default function SupportSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-20 px-6 lg:px-8 bg-[#d4cdc4] transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" 
                alt="Person in contemplation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-5xl lg:text-6xl font-light leading-tight text-[#2c3e3a]">
              You don't have to do this all <em className="italic">alone.</em>
            </h2>
            
            <p className="text-lg text-[#2c3e3a]">
              If you are facing any of these, there's hope:
            </p>

            <div className="space-y-4 text-lg text-[#2c3e3a]">
              <div className="flex items-start gap-3">
                <span className="mt-1.5">•</span>
                <p className="leading-relaxed">Persistent feelings of sadness or hopelessness</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5">•</span>
                <p className="leading-relaxed">Trouble focusing or making decisions</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5">•</span>
                <p className="leading-relaxed">Difficulty maintaining relationships</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5">•</span>
                <p className="leading-relaxed">Feeling constantly exhausted or unmotivated</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5">•</span>
                <p className="leading-relaxed">A pervasive sense of being overwhelmed</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed pt-4 text-[#2c3e3a]">
              With empathy and guidance, we'll work together to navigate the challenges life throws your way.
            </p>

            <div className="pt-4">
              <button className="inline-flex items-center gap-3 text-[#2c3e3a] hover:text-[#5a7a6f] transition-colors group text-lg font-light">
                WORK WITH ME
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}