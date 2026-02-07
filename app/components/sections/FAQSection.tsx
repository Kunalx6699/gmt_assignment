'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/app/components/ui/Usescrollanimation';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { elementRef, isVisible } = useScrollAnimation();

  const faqs = [
    { 
      question: 'Do you offer in-person or online therapy?', 
      answer: 'I offer both in-person therapy at my Santa Monica office and secure telehealth sessions for clients located anywhere in California. My office is a quiet, private space with natural light designed to feel calm and grounding.' 
    },
    { 
      question: 'What types of issues do you specialize in?', 
      answer: 'I specialize in anxiety, panic, trauma (both single-incident and complex), burnout, and perfectionism. I frequently work with high-achieving adults who feel overwhelmed, stuck in overthinking, or emotionally on edge despite appearing "functional" on the outside.' 
    },
    { 
      question: 'What is your approach to therapy?', 
      answer: 'I take a warm, collaborative, and grounded approach. I integrate evidence-based methods including CBT, EMDR, mindfulness-based practices, and body-oriented techniques. Sessions are structured enough to feel supportive while leaving space for reflection and depth.' 
    },
    { 
      question: 'Do you work with trauma?', 
      answer: 'Yes, trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as complex, long-standing patterns. My approach emphasizes safety, stabilization, and helping clients feel more regulated in their daily lives.' 
    }
  ];

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-24 px-6 lg:px-8 bg-[#f5f4f1] transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-light text-[#2c3e3a] mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-light text-[#2c3e3a] group-hover:text-[#5a7a6f] transition-colors pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#5a7a6f] flex-shrink-0 transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="px-8 text-[#4a5a54] leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}