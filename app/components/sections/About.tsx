'use client';

import { useScrollAnimation } from '@/app/components/ui/Usescrollanimation';

export default function AboutSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-24 px-6 lg:px-8 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <div className="relative aspect-[3/4] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" 
                  alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-2xl font-light text-[#2c3e3a]">Dr. Maya Reynolds</h3>
                <p className="text-[#5a7a6f]">PsyD, Licensed Clinical Psychologist</p>
                <p className="text-sm text-[#4a5a54]">Santa Monica, California</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6 text-lg leading-relaxed text-[#4a5a54]">
              <h2 className="text-4xl font-light text-[#2c3e3a] mb-6">About My Practice</h2>
              
              <p>
                I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
              </p>
              
              <p>
                Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge. My work often focuses on anxiety, panic, trauma, and burnout.
              </p>
              
              <p>
                Clients frequently come to me feeling "functional" on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
              </p>

              <div className="py-6">
                <div className="h-px bg-[#2c3e3a]/10"></div>
              </div>

              <h3 className="text-2xl font-light text-[#2c3e3a] pt-2">My Approach</h3>
              
              <p>
                I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they're experiencing.
              </p>
              
              <p>
                Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.
              </p>
              
              <p>
                In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
              </p>

              <div className="py-6">
                <div className="h-px bg-[#2c3e3a]/10"></div>
              </div>

              <h3 className="text-2xl font-light text-[#2c3e3a] pt-2">What to Expect</h3>
              
              <p>
                I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
              </p>
              
              <p>
                I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.
              </p>
              
              <p className="text-[#5a7a6f] font-medium">
                If you're looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}