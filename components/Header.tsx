import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger expansion animation on mount
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-center">
        {/* Expanding Pill Container */}
        <div 
          className={`
            relative overflow-hidden
            backdrop-blur-md bg-indigo-950/60 border border-white/10 rounded-full 
            shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${scrolled ? 'bg-indigo-950/90' : ''}
            ${isLoaded ? 'w-full max-w-5xl opacity-100' : 'w-[0px] opacity-0'}
          `}
        >
          <div className="px-6 py-3 flex items-center justify-between w-full min-w-[300px] md:min-w-[700px]">
            
            {/* Logo */}
            <div className={`flex items-center gap-2 transition-opacity duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-pink-600 rotate-3 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
              <span className="text-xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
                VICE<span className="text-pink-500">MOCK</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className={`hidden md:flex items-center gap-8 transition-opacity duration-700 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {['Showcase', 'Features', 'Pricing', 'About'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-semibold text-pink-100/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all uppercase tracking-wide relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA & Mobile Menu */}
            <div className={`flex items-center gap-4 transition-opacity duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <button className="hidden md:block px-5 py-2 rounded-full bg-pink-600/20 border border-pink-500/50 text-pink-300 font-bold text-sm hover:bg-pink-600 hover:text-white transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] active:scale-95">
                JOIN NOW
              </button>
              
              <button 
                className="md:hidden text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`absolute top-full left-0 w-full bg-indigo-900/95 backdrop-blur-xl border-b border-pink-500/20 p-6 flex flex-col gap-4 shadow-2xl md:hidden transition-all duration-500 origin-top ${
          menuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        {['Showcase', 'Features', 'Pricing', 'About'].map((item) => (
          <a key={item} href="#" className="text-lg font-bold text-white py-2 border-b border-white/5 hover:text-pink-400 transition-colors">
            {item}
          </a>
        ))}
      </div>
    </header>
  );
};