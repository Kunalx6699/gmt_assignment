'use client';
import { useScrollAnimation } from '@/app/components/ui/Usescrollanimation';

export default function CTASection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      id="contact"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-24 px-6 lg:px-8 bg-gradient-to-br from-[#5a7a6f] to-[#4a6a5f] text-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl lg:text-5xl font-light leading-tight">Ready to take the first step?</h2>
        <p className="text-xl leading-relaxed text-white/90 max-w-2xl mx-auto">
          I offer a free 15-minute consultation to see if we're a good fit. Reach out to schedule a call or book your first session.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#5a7a6f] hover:bg-white/95 transition-all duration-300 group shadow-lg">
            Schedule Consultation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}