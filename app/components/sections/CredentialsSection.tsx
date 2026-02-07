'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/app/components/ui/Usescrollanimation';

export default function CredentialsSection() {
  const [openCredential, setOpenCredential] = useState<number | null>(null);
  const { elementRef, isVisible } = useScrollAnimation();

  const credentials = [
    { 
      title: 'Education & License', 
      content: 'Doctor of Psychology (PsyD)\nLicensed Clinical Psychologist, California\n\nSpecialized training in trauma treatment, EMDR, and somatic approaches to anxiety and stress.' 
    },
    { 
      title: 'Therapeutic Approaches', 
      content: 'Cognitive-Behavioral Therapy (CBT)\nEye Movement Desensitization and Reprocessing (EMDR)\nMindfulness-Based Practices\nBody-Oriented Techniques\nTrauma-Informed Care' 
    },
    { 
      title: 'Specializations', 
      content: 'Anxiety & Panic Disorders\nTrauma (Single-Incident & Complex)\nProfessional Burnout\nPerfectionism & High Achievement Stress\nEmotional Regulation\nRelationship Patterns' 
    }
  ];

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-24 px-6 lg:px-8 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-light text-center text-[#2c3e3a] mb-16">Professional Background</h2>
        
        <div className="space-y-4">
          {credentials.map((item, index) => (
            <div key={index} className="border border-[#2c3e3a]/10">
              <button
                onClick={() => setOpenCredential(openCredential === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-light text-[#2c3e3a] group-hover:text-[#5a7a6f] transition-colors">
                  {item.title}
                </span>
                <svg
                  className={`w-6 h-6 text-[#5a7a6f] flex-shrink-0 transition-transform duration-300 ${
                    openCredential === index ? 'rotate-180' : ''
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
                  openCredential === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="px-8 text-[#4a5a54] leading-relaxed whitespace-pre-line">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}