
import React, { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-card' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/20">H</div>
          <span className="text-2xl font-bold tracking-tight">hirstack</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#courses" className="hover:text-blue-400 transition-colors">Courses</a>
          <a href="#advisor" className="hover:text-blue-400 transition-colors">Career Advice</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-full transition-all active:scale-95">
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg">About</a>
          <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="text-lg">Courses</a>
          <a href="#advisor" onClick={() => setMobileMenuOpen(false)} className="text-lg">Career Advice</a>
          <button className="bg-blue-600 w-full py-3 rounded-lg font-bold">Join Now</button>
        </div>
      )}
    </nav>
  );
};
