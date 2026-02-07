export default function Footer() {
  return (
    <footer className="bg-[#2c3e3a] text-white/80 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-light mb-4 text-white">Dr. Maya Reynolds, PsyD</h3>
            <p className="text-sm leading-relaxed mb-4">Licensed Clinical Psychologist</p>
            <div className="space-y-2 text-sm">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-light mb-4 text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <p>
                <a href="tel:3105551234" className="hover:text-white transition-colors">
                  (310) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:dr.reynolds@example.com" className="hover:text-white transition-colors">
                  dr.reynolds@example.com
                </a>
              </p>
              <p className="pt-2">In-person & telehealth available</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-light mb-4 text-white">Practice Areas</h3>
            <div className="space-y-2 text-sm">
              <p>Anxiety & Panic</p>
              <p>Trauma & EMDR</p>
              <p>Burnout & Perfectionism</p>
              <p>Professional Stress</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm">
          <p>© 2024 Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <p className="mt-2 text-xs">Licensed Clinical Psychologist, California</p>
        </div>
      </div>
    </footer>
  );
}