export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf8]/95 backdrop-blur-sm border-b border-[#2c3e3a]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        <h1 className="text-xl font-medium tracking-tight text-[#2c3e3a]">Dr. Maya Reynolds, PsyD</h1>
        <div className="flex gap-8 text-sm">
          <a href="#about" className="text-[#2c3e3a]/80 hover:text-[#5a7a6f] transition-colors">About</a>
          <a href="#contact" className="text-[#2c3e3a]/80 hover:text-[#5a7a6f] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}