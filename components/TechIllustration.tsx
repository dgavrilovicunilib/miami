import React, { useEffect, useRef, useState } from 'react';

export const TechIllustration: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Common props for the animated paths
  const pathProps = {
    strokeDasharray: 1000,
    strokeDashoffset: isVisible ? 0 : 1000,
    className: "transition-all duration-[2000ms] ease-in-out"
  };

  return (
    <div ref={ref} className="relative w-full h-[400px] flex items-center justify-center">
      {/* Floating blurred orbs in background */}
      <div className="absolute inset-0 flex items-center justify-center">
         <div className={`w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl transition-all duration-[2000ms] ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
      </div>

      <svg viewBox="0 0 400 300" className="w-full h-full max-w-[500px] drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
        {/* Central Hexagon */}
        <path
          d="M200 80 L270 120 L270 200 L200 240 L130 200 L130 120 Z"
          fill="rgba(15, 23, 42, 0.8)"
          stroke="#22d3ee"
          strokeWidth="2"
          {...pathProps}
        />
        
        {/* Inner details */}
        <circle cx="200" cy="160" r="30" fill="none" stroke="#38bdf8" strokeWidth="2" 
          className={`transition-all duration-[1500ms] delay-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} 
          style={{transformOrigin: 'center'}}
        />

        {/* Connecting Lines */}
        <path d="M270 120 L350 80" stroke="#94a3b8" strokeWidth="1" {...pathProps} style={{transitionDelay: '400ms'}} />
        <path d="M270 200 L350 240" stroke="#94a3b8" strokeWidth="1" {...pathProps} style={{transitionDelay: '600ms'}} />
        <path d="M130 200 L50 240" stroke="#94a3b8" strokeWidth="1" {...pathProps} style={{transitionDelay: '800ms'}} />
        <path d="M130 120 L50 80" stroke="#94a3b8" strokeWidth="1" {...pathProps} style={{transitionDelay: '1000ms'}} />

        {/* Floating Nodes */}
        <circle cx="350" cy="80" r="5" fill="#22d3ee" className={`transition-all duration-700 delay-[1400ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
        <circle cx="350" cy="240" r="5" fill="#22d3ee" className={`transition-all duration-700 delay-[1600ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
        <circle cx="50" cy="240" r="5" fill="#22d3ee" className={`transition-all duration-700 delay-[1800ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
        <circle cx="50" cy="80" r="5" fill="#22d3ee" className={`transition-all duration-700 delay-[2000ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
      </svg>
    </div>
  );
};