'use client';

import { useScrollAnimation } from '@/app/components/ui/Usescrollanimation';

export default function OurOffice() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-24 px-6 lg:px-8 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-light text-[#2c3e3a]">A Calm Space for Healing</h2>
          <p className="text-lg text-[#4a5a54] max-w-3xl mx-auto leading-relaxed">
            My Santa Monica office is designed to feel welcoming, private, and grounding—a place where you can feel safe to be yourself and do meaningful work.
          </p>
        </div>

        {/* Office Images Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Main Therapy Room */}
          <div className="md:col-span-2 relative overflow-hidden shadow-xl group">
            <div className="relative aspect-[16/10]">
              <img 
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80" 
                alt="Therapy office interior in Santa Monica with comfortable seating and natural light"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c3e3a]/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-light mb-1">The Therapy Room</h3>
              <p className="text-sm text-white/90">Comfortable, private, and thoughtfully designed</p>
            </div>
          </div>

          {/* Waiting Area */}
          <div className="relative overflow-hidden shadow-xl group">
            <div className="relative aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" 
                alt="Peaceful waiting area with plants and natural light"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c3e3a]/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-light mb-1">Welcoming Entry</h3>
              <p className="text-sm text-white/90">A quiet space to arrive and settle</p>
            </div>
          </div>
        </div>

        {/* Office Details */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Environment Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light text-[#2c3e3a]">What to Expect</h3>
            <div className="space-y-4 text-[#4a5a54] leading-relaxed">
              <p>
                My office is located in Santa Monica, offering a quiet, private space with natural light and a comfortable, uncluttered environment. The space is intentionally designed to feel calm and grounding—clients often share that the environment itself helps them feel more at ease when they arrive.
              </p>
              <p>
                The therapy room features comfortable seating, soft lighting, and thoughtful details that create a sense of warmth and safety. Whether you prefer to sit across from me or settle into a more relaxed position, the space is arranged to support whatever feels most comfortable for you.
              </p>
            </div>
          </div>

          {/* Right Column - Practical Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-light text-[#2c3e3a]">Session Options</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5a7a6f]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#5a7a6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#2c3e3a] mb-2">In-Person Sessions</h4>
                  <p className="text-[#4a5a54] leading-relaxed">
                    Meet at my Santa Monica office for face-to-face therapy in a comfortable, confidential setting.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5a7a6f]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#5a7a6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#2c3e3a] mb-2">Secure Telehealth</h4>
                  <p className="text-[#4a5a54] leading-relaxed">
                    Connect from anywhere in California through HIPAA-compliant video sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#5a7a6f]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#5a7a6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#2c3e3a] mb-2">Privacy & Comfort</h4>
                  <p className="text-[#4a5a54] leading-relaxed">
                    Complete confidentiality in a soundproof space designed for your peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-[#f5f4f1] p-8 lg:p-12 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#5a7a6f]/10 rounded-full mb-4">
              <svg className="w-8 h-8 text-[#5a7a6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-light text-[#2c3e3a]">Conveniently Located in Santa Monica</h3>
            <p className="text-[#4a5a54] leading-relaxed max-w-2xl mx-auto">
              The office is easily accessible with parking available nearby. Whether you're coming from West LA, Venice, Brentwood, or elsewhere in the Westside, the space is designed to be a calm refuge from the day.
            </p>
            <div className="pt-4">
              <p className="text-sm text-[#4a5a54]">
                <span className="font-medium text-[#2c3e3a]">Address:</span> 123th Street 45 W, Santa Monica, CA 90401
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}